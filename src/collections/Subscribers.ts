import type { CollectionConfig } from 'payload'
import { addToAudience, removeFromAudience, sendEmail } from '@/lib/resend'
import { getWelcomeEmailHTML, getWelcomeEmailText } from '@/lib/emails/welcome'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'status', 'createdAt'],
    group: 'Marketing',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => true, // Allow public signup
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.roles?.includes('admin'),
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Subscriber email address',
      },
    },
    {
      name: 'firstName',
      type: 'text',
      admin: {
        description: 'Optional first name for personalization',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Unsubscribed', value: 'unsubscribed' },
      ],
      admin: {
        description: 'Subscription status',
      },
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      defaultValue: 'website',
      options: [
        { label: 'Website', value: 'website' },
        { label: 'Blog', value: 'blog' },
        { label: 'Social Media', value: 'social' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Where did this subscriber sign up?',
      },
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
      admin: {
        description: 'Tags for segmentation (e.g., "blog-reader", "consultation-interested")',
      },
    },
    {
      name: 'resendContactId',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Resend API contact ID (auto-populated)',
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ operation, doc }) => {
        // On create, send welcome email and sync to Resend audience
        if (operation === 'create' && doc.status === 'active') {
          // Send welcome email
          try {
            const emailResult = await sendEmail({
              to: doc.email,
              subject: 'Welcome to Affair Recovery Center',
              html: getWelcomeEmailHTML({
                firstName: doc.firstName,
                email: doc.email,
              }),
              text: getWelcomeEmailText({
                firstName: doc.firstName,
                email: doc.email,
              }),
            })

            if (emailResult.success) {
              console.log(`✅ Sent welcome email to ${doc.email}`)
            } else {
              console.error(`Failed to send welcome email to ${doc.email}:`, emailResult.error)
            }
          } catch (error) {
            console.error('Welcome email error:', error)
            // Don't block the subscription, just log the error
          }

          // Add to Resend audience
          try {
            const result = await addToAudience(doc.email, {
              first_name: doc.firstName || '',
              source: doc.source,
            })

            if (result.success && result.data) {
              console.log(`✅ Added ${doc.email} to Resend audience`)
            }
          } catch (error) {
            console.error('Failed to add subscriber to Resend:', error)
            // Don't block the subscription, just log the error
          }
        }

        // On status change to unsubscribed, remove from Resend
        if (operation === 'update' && doc.status === 'unsubscribed') {
          try {
            await removeFromAudience(doc.email)
            console.log(`✅ Removed ${doc.email} from Resend audience`)
          } catch (error) {
            console.error('Failed to remove subscriber from Resend:', error)
          }
        }
      },
    ],
  },
  timestamps: true,
}
