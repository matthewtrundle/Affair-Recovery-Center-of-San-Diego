import { sendEmail } from './resend'
import payload from 'payload'

export interface NewsletterSendResult {
  success: boolean
  sentCount?: number
  failedCount?: number
  error?: any
  details?: {
    successful: string[]
    failed: Array<{ email: string; error: any }>
  }
}

/**
 * Convert Lexical richText content to simple HTML for email
 * This is a basic implementation - you may want to enhance it
 */
function lexicalToHTML(content: any): string {
  // For now, just stringify and return
  // TODO: Implement proper Lexical -> HTML conversion
  // You can use @payloadcms/richtext-lexical's serialization functions
  if (typeof content === 'string') {
    return content
  }

  // Basic fallback - just get text content
  return JSON.stringify(content)
}

/**
 * Send a newsletter to all active subscribers or test group
 */
export async function sendNewsletter(newsletterId: string): Promise<NewsletterSendResult> {
  try {
    // Fetch the newsletter
    const newsletter = await payload.findByID({
      collection: 'newsletters',
      id: newsletterId,
    })

    if (!newsletter) {
      return {
        success: false,
        error: 'Newsletter not found',
      }
    }

    // Get recipients based on sendTo setting
    let recipients: string[] = []

    if (newsletter.sendTo === 'test') {
      // Send to admin users only for testing
      const adminUsers = await payload.find({
        collection: 'users',
        where: {
          roles: {
            contains: 'admin',
          },
        },
      })
      recipients = adminUsers.docs.map((user: any) => user.email)
    } else if (newsletter.sendTo === 'all') {
      // Send to all active subscribers
      const subscribers = await payload.find({
        collection: 'subscribers',
        where: {
          status: {
            equals: 'active',
          },
        },
        limit: 10000, // Adjust as needed
      })
      recipients = subscribers.docs.map((sub: any) => sub.email)
    }

    if (recipients.length === 0) {
      return {
        success: false,
        error: 'No recipients found',
      }
    }

    // Convert content to HTML
    const htmlContent = lexicalToHTML(newsletter.content)

    // Prepare email content with unsubscribe link
    const emailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #2D3748;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              padding: 20px 0;
              border-bottom: 2px solid #125959;
            }
            .content {
              padding: 30px 0;
            }
            .footer {
              border-top: 1px solid #E2E8F0;
              padding-top: 20px;
              margin-top: 40px;
              font-size: 12px;
              color: #718096;
              text-align: center;
            }
            .footer a {
              color: #2ABFB0;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h2 style="color: #125959; margin: 0;">Affair Recovery Center</h2>
          </div>
          <div class="content">
            ${htmlContent}
          </div>
          <div class="footer">
            <p>
              You're receiving this email because you subscribed to updates from Affair Recovery Center.<br>
              <a href="{{unsubscribe_url}}">Unsubscribe</a> |
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Visit our website</a>
            </p>
            <p>Affair Recovery Center of San Diego</p>
          </div>
        </body>
      </html>
    `

    // Send emails (Resend handles batch sending)
    const successful: string[] = []
    const failed: Array<{ email: string; error: any }> = []

    // Resend allows sending to multiple recipients
    // For better deliverability, we'll send individually
    for (const email of recipients) {
      const result = await sendEmail({
        to: email,
        subject: newsletter.subject,
        html: emailHTML,
        text: newsletter.previewText || 'View in browser',
      })

      if (result.success) {
        successful.push(email)
      } else {
        failed.push({ email, error: result.error })
      }

      // Add a small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // Update newsletter status
    await payload.update({
      collection: 'newsletters',
      id: newsletterId,
      data: {
        status: failed.length === 0 ? 'sent' : 'failed',
        sentAt: new Date().toISOString(),
        sentCount: successful.length,
        errorMessage: failed.length > 0
          ? `Failed to send to ${failed.length} recipients`
          : undefined,
      },
    })

    return {
      success: true,
      sentCount: successful.length,
      failedCount: failed.length,
      details: {
        successful,
        failed,
      },
    }
  } catch (error) {
    console.error('Newsletter send error:', error)

    // Try to update newsletter status to failed
    try {
      await payload.update({
        collection: 'newsletters',
        id: newsletterId,
        data: {
          status: 'failed',
          errorMessage: error instanceof Error ? error.message : 'Unknown error',
        },
      })
    } catch (updateError) {
      console.error('Failed to update newsletter status:', updateError)
    }

    return {
      success: false,
      error,
    }
  }
}

/**
 * Send a test newsletter to the current admin user
 */
export async function sendTestNewsletter(
  newsletterId: string,
  testEmail: string
): Promise<NewsletterSendResult> {
  try {
    const newsletter = await payload.findByID({
      collection: 'newsletters',
      id: newsletterId,
    })

    if (!newsletter) {
      return {
        success: false,
        error: 'Newsletter not found',
      }
    }

    const htmlContent = lexicalToHTML(newsletter.content)

    const result = await sendEmail({
      to: testEmail,
      subject: `[TEST] ${newsletter.subject}`,
      html: htmlContent,
      text: newsletter.previewText,
    })

    return {
      success: result.success,
      sentCount: result.success ? 1 : 0,
      failedCount: result.success ? 0 : 1,
      error: result.error,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
