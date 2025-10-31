import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sendNewsletter } from '@/lib/resend-newsletter'

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'status', 'scheduledDate', 'createdAt'],
    group: 'Marketing',
    description: 'Create and send email newsletters to subscribers',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.roles?.includes('admin'),
  },
  fields: [
    {
      name: 'subject',
      type: 'text',
      required: true,
      maxLength: 100,
      admin: {
        description: 'Email subject line (max 100 characters)',
        placeholder: 'Enter email subject...',
      },
    },
    {
      name: 'previewText',
      type: 'text',
      maxLength: 150,
      admin: {
        description: 'Preview text shown in email clients (max 150 characters)',
        placeholder: 'This text appears in the inbox preview...',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
      admin: {
        description: 'Email body content - use simple formatting for better compatibility',
      },
    },
    {
      name: 'sendTo',
      type: 'select',
      required: true,
      defaultValue: 'all',
      options: [
        { label: 'All Active Subscribers', value: 'all' },
        { label: 'Test (Admin Only)', value: 'test' },
      ],
      admin: {
        description: 'Choose who receives this newsletter',
      },
    },
    {
      name: 'schedule',
      type: 'group',
      fields: [
        {
          name: 'sendNow',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Send immediately when you save this newsletter',
          },
        },
        {
          name: 'scheduledDate',
          type: 'date',
          admin: {
            description: 'Schedule to send at a specific date/time (optional)',
            date: {
              pickerAppearance: 'dayAndTime',
            },
            condition: (data, siblingData) => !siblingData.sendNow,
          },
        },
      ],
      admin: {
        description: 'When should this newsletter be sent?',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Scheduled', value: 'scheduled' },
        { label: 'Sending', value: 'sending' },
        { label: 'Sent', value: 'sent' },
        { label: 'Failed', value: 'failed' },
      ],
      admin: {
        description: 'Current status of this newsletter',
        readOnly: true,
      },
    },
    {
      name: 'sentAt',
      type: 'date',
      admin: {
        description: 'When this newsletter was sent',
        readOnly: true,
        condition: (data) => data?.status === 'sent',
      },
    },
    {
      name: 'sentCount',
      type: 'number',
      admin: {
        description: 'Number of emails successfully sent',
        readOnly: true,
        condition: (data) => data?.status === 'sent',
      },
    },
    {
      name: 'errorMessage',
      type: 'textarea',
      admin: {
        description: 'Error details if sending failed',
        readOnly: true,
        condition: (data) => data?.status === 'failed',
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ operation, data }) => {
        // On create, set initial status
        if (operation === 'create') {
          data.status = 'draft'
        }

        // If sendNow is checked, trigger sending
        if (data.schedule?.sendNow && data.status === 'draft') {
          data.status = 'sending'
          // The actual sending will be handled by an afterChange hook
        }

        return data
      },
    ],
    afterChange: [
      async ({ operation, doc }) => {
        // If status is 'sending', trigger the newsletter send process
        if (doc.status === 'sending') {
          console.log(`📧 Newsletter "${doc.subject}" is being sent...`)

          // Send newsletter asynchronously (don't block the response)
          sendNewsletter(doc.id)
            .then((result) => {
              if (result.success) {
                console.log(
                  `✅ Newsletter "${doc.subject}" sent successfully to ${result.sentCount} recipients`
                )
              } else {
                console.error(`❌ Newsletter "${doc.subject}" failed:`, result.error)
              }
            })
            .catch((error) => {
              console.error(`❌ Newsletter send error:`, error)
            })
        }
      },
    ],
  },
  timestamps: true,
}
