import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sendNewsletter } from '@/lib/resend-newsletter'

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  labels: {
    singular: 'Newsletter',
    plural: 'Newsletters',
  },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'status', 'sentAt', 'sentCount'],
    group: 'Marketing',
    description:
      'Send email newsletters to your subscribers in 3 easy steps: 1) Write content, 2) Choose recipients, 3) Check "Send Immediately" and click Save.',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.roles?.includes('admin'),
  },
  fields: [
    // Step-by-step guide banner
    {
      name: 'howToSend',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/admin/NewsletterGuide',
        },
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Step 1: Email Content',
          description: 'Write your newsletter message',
          fields: [
            {
              name: 'subject',
              label: 'Subject Line',
              type: 'text',
              required: true,
              maxLength: 100,
              admin: {
                placeholder: 'e.g., "This Month\'s Recovery Insights"',
                description:
                  'TIP: Keep it under 50 characters. This is what subscribers see first in their inbox.',
              },
            },
            {
              name: 'previewText',
              label: 'Preview Text (Optional)',
              type: 'text',
              maxLength: 150,
              admin: {
                placeholder: 'e.g., "New resources for your healing journey..."',
                description:
                  'TIP: This appears after the subject in email previews. Leave blank to use the first line of content.',
              },
            },
            {
              name: 'content',
              label: 'Email Body',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [...defaultFeatures],
              }),
              admin: {
                description:
                  'TIP: Keep formatting simple - bold, italic, and links work best. Avoid complex layouts.',
              },
            },
          ],
        },
        {
          label: 'Step 2: Send Options',
          description: 'Choose recipients and send',
          fields: [
            // Recipients selection with clear guidance
            {
              name: 'sendTo',
              label: 'Who should receive this?',
              type: 'select',
              required: true,
              defaultValue: 'test',
              options: [
                {
                  label: 'Test Mode - Send to yourself first (recommended)',
                  value: 'test',
                },
                {
                  label: 'All Active Subscribers - Send to everyone',
                  value: 'all',
                },
              ],
              admin: {
                description:
                  'RECOMMENDATION: Always test with "Test Mode" first to preview how it looks, then come back and switch to "All Active Subscribers".',
              },
            },
            // Send trigger - wrapped in 'schedule' group to match existing DB column 'schedule_send_now'
            {
              name: 'schedule',
              type: 'group',
              label: '',
              admin: {
                hideGutter: true,
                style: { margin: 0, padding: 0 },
              },
              fields: [
                {
                  name: 'sendNow',
                  label: 'Ready to Send?',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    description:
                      'CHECK THIS BOX + CLICK SAVE = Newsletter sends immediately! (Uncheck to save as draft)',
                  },
                },
              ],
            },
            // Status info
            {
              type: 'collapsible',
              label: 'Delivery Status & History',
              admin: {
                initCollapsed: true,
                description: 'View sending status and results',
              },
              fields: [
                {
                  name: 'status',
                  label: 'Current Status',
                  type: 'select',
                  required: true,
                  defaultValue: 'draft',
                  options: [
                    { label: 'Draft - Not sent yet', value: 'draft' },
                    { label: 'Sending... - In progress', value: 'sending' },
                    { label: 'Sent - Delivered!', value: 'sent' },
                    { label: 'Failed - Check error below', value: 'failed' },
                  ],
                  admin: {
                    readOnly: true,
                    description: 'This updates automatically when you send',
                  },
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'sentAt',
                      label: 'Date Sent',
                      type: 'date',
                      admin: {
                        width: '50%',
                        readOnly: true,
                        condition: (data) => data?.status === 'sent',
                      },
                    },
                    {
                      name: 'sentCount',
                      label: 'Total Recipients',
                      type: 'number',
                      admin: {
                        width: '50%',
                        readOnly: true,
                        condition: (data) => data?.status === 'sent',
                      },
                    },
                  ],
                },
                {
                  name: 'errorMessage',
                  label: 'Error Details',
                  type: 'textarea',
                  admin: {
                    readOnly: true,
                    condition: (data) => data?.status === 'failed',
                    description: 'If sending failed, the error message will appear here',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      async ({ operation, data }) => {
        if (operation === 'create') {
          data.status = 'draft'
        }

        if (data.schedule?.sendNow && data.status === 'draft') {
          data.status = 'sending'
        }

        return data
      },
    ],
    afterChange: [
      async ({ operation, doc }) => {
        if (doc.status === 'sending') {
          console.log(`Newsletter "${doc.subject}" is being sent...`)

          sendNewsletter(doc.id)
            .then((result) => {
              if (result.success) {
                console.log(
                  `Newsletter "${doc.subject}" sent successfully to ${result.sentCount} recipients`
                )
              } else {
                console.error(`Newsletter "${doc.subject}" failed:`, result.error)
              }
            })
            .catch((error) => {
              console.error(`Newsletter send error:`, error)
            })
        }
      },
    ],
  },
  timestamps: true,
}
