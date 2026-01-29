import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lazy initialize Resend to prevent build-time errors when env var is missing
let resend: Resend | null = null
function getResendClient() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, preferredContact, sessionType } = body

    // Check if Resend is configured
    const resendClient = getResendClient()
    if (!resendClient) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at jordan@MyStressSolutions.com' },
        { status: 503 }
      )
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Construct plain text email content (fallback)
    const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Contact Method: ${preferredContact || 'Not specified'}
Session Type Interest: ${sessionType || 'Not specified'}

Message:
${message}

---
Sent from Affair Recovery Center website contact form
    `.trim()

    // Construct HTML email content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #125959 0%, #0d4545 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
              </h1>
              <p style="margin: 8px 0 0 0; color: #2ABFB0; font-size: 14px;">
                Affair Recovery Center of San Diego
              </p>
            </td>
          </tr>

          <!-- Contact Info Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; font-size: 18px; color: #125959; font-weight: 600;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafa; border-radius: 8px; padding: 16px;">
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="140" style="color: #6b7280; font-size: 14px;">Email</td>
                              <td style="color: #125959; font-size: 14px; font-weight: 500;">
                                <a href="mailto:${email}" style="color: #125959; text-decoration: none;">${email}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="140" style="color: #6b7280; font-size: 14px;">Phone</td>
                              <td style="color: #1f2937; font-size: 14px;">${phone || '<span style="color: #9ca3af;">Not provided</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="140" style="color: #6b7280; font-size: 14px;">Preferred Contact</td>
                              <td style="color: #1f2937; font-size: 14px;">${preferredContact || '<span style="color: #9ca3af;">Not specified</span>'}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="140" style="color: #6b7280; font-size: 14px;">Session Interest</td>
                              <td>
                                <span style="display: inline-block; background-color: #2ABFB0; color: #ffffff; font-size: 12px; font-weight: 500; padding: 4px 12px; border-radius: 20px;">
                                  ${sessionType || 'Not specified'}
                                </span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <div style="background-color: #fefefe; border-left: 4px solid #2ABFB0; padding: 20px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background-color: #125959; color: #ffffff; font-size: 14px; font-weight: 600; padding: 12px 32px; border-radius: 8px; text-decoration: none; margin-right: 12px;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                    ${phone ? `<a href="tel:${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #ffffff; color: #125959; font-size: 14px; font-weight: 600; padding: 12px 32px; border-radius: 8px; text-decoration: none; border: 2px solid #125959;">
                      Call ${phone}
                    </a>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafa; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This message was sent from the contact form at<br>
                <a href="https://affairrecoverysandiego.com" style="color: #125959; text-decoration: none;">affairrecoverysandiego.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    // Send email via Resend
    const { data, error } = await resendClient.emails.send({
      from: process.env.MAIL_FROM || 'Affair Recovery Center <noreply@affairrecoverysandiego.com>',
      to: process.env.CONTACT_EMAIL || 'jordan@mystresssolutions.com',
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email directly.' },
        { status: 500 }
      )
    }

    // Send confirmation email to the person who submitted the form
    const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #125959 0%, #0d4545 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                Thank You for Reaching Out
              </h1>
              <p style="margin: 12px 0 0 0; color: #2ABFB0; font-size: 16px;">
                Affair Recovery Center of San Diego
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px 0; font-size: 18px; color: #125959; font-weight: 600;">
                Dear ${name.split(' ')[0]},
              </p>

              <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; line-height: 1.7;">
                Thank you for taking this important step. I know it takes courage to reach out, and I want you to know that your message has been received.
              </p>

              <p style="margin: 0 0 20px 0; font-size: 16px; color: #374151; line-height: 1.7;">
                I personally review every inquiry and will respond within <strong style="color: #125959;">24-48 hours</strong>. In the meantime, please know that healing is possible, and you don't have to navigate this journey alone.
              </p>

              <!-- What to Expect Box -->
              <div style="background-color: #f8fafa; border-radius: 8px; padding: 24px; margin: 24px 0;">
                <h3 style="margin: 0 0 16px 0; color: #125959; font-size: 16px; font-weight: 600;">
                  What Happens Next?
                </h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width: 28px; vertical-align: top;">
                            <span style="display: inline-block; width: 20px; height: 20px; background-color: #2ABFB0; color: white; border-radius: 50%; text-align: center; font-size: 12px; line-height: 20px; font-weight: bold;">1</span>
                          </td>
                          <td style="color: #374151; font-size: 14px; line-height: 1.5;">
                            I'll review your message and learn about your situation
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width: 28px; vertical-align: top;">
                            <span style="display: inline-block; width: 20px; height: 20px; background-color: #2ABFB0; color: white; border-radius: 50%; text-align: center; font-size: 12px; line-height: 20px; font-weight: bold;">2</span>
                          </td>
                          <td style="color: #374151; font-size: 14px; line-height: 1.5;">
                            I'll reach out via your preferred contact method
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width: 28px; vertical-align: top;">
                            <span style="display: inline-block; width: 20px; height: 20px; background-color: #2ABFB0; color: white; border-radius: 50%; text-align: center; font-size: 12px; line-height: 20px; font-weight: bold;">3</span>
                          </td>
                          <td style="color: #374151; font-size: 14px; line-height: 1.5;">
                            We'll schedule a free 15-minute consultation to discuss your needs
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin: 24px 0 0 0; font-size: 16px; color: #374151; line-height: 1.7;">
                If you need immediate support or prefer to schedule directly, you're welcome to:
              </p>

              <!-- Action Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
                <tr>
                  <td align="center">
                    <a href="https://calendly.com/jordan-affairrecoverysd/consultation" style="display: inline-block; background-color: #125959; color: #ffffff; font-size: 14px; font-weight: 600; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin-right: 12px;">
                      Schedule Consultation
                    </a>
                    <a href="tel:+18585551234" style="display: inline-block; background-color: #ffffff; color: #125959; font-size: 14px; font-weight: 600; padding: 14px 28px; border-radius: 8px; text-decoration: none; border: 2px solid #125959;">
                      Call (858) 555-1234
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0 0 4px 0; font-size: 16px; color: #374151;">
                  With warmth and support,
                </p>
                <p style="margin: 0; font-size: 18px; color: #125959; font-weight: 600;">
                  Jordan Zipkin, LMFT
                </p>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #6b7280;">
                  Licensed Marriage & Family Therapist
                </p>
                <p style="margin: 2px 0 0 0; font-size: 14px; color: #6b7280;">
                  Affair Recovery Center of San Diego
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafa; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                This email is in response to your contact form submission.
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 13px;">
                <a href="https://affairrecoverysandiego.com" style="color: #125959; text-decoration: none;">affairrecoverysandiego.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    const confirmationText = `
Dear ${name.split(' ')[0]},

Thank you for reaching out to the Affair Recovery Center of San Diego. I know it takes courage to take this step, and I want you to know that your message has been received.

I personally review every inquiry and will respond within 24-48 hours. In the meantime, please know that healing is possible, and you don't have to navigate this journey alone.

What Happens Next?
1. I'll review your message and learn about your situation
2. I'll reach out via your preferred contact method
3. We'll schedule a free 15-minute consultation to discuss your needs

If you need immediate support, you're welcome to schedule directly at:
https://calendly.com/jordan-affairrecoverysd/consultation

With warmth and support,
Jordan Zipkin, LMFT
Licensed Marriage & Family Therapist
Affair Recovery Center of San Diego

---
https://affairrecoverysandiego.com
    `.trim()

    // Send confirmation email (don't fail the request if this fails)
    try {
      await resendClient.emails.send({
        from: process.env.MAIL_FROM || 'Affair Recovery Center <noreply@affairrecoverysandiego.com>',
        to: email,
        reply_to: 'jordan@mystresssolutions.com',
        subject: 'Thank You for Reaching Out - Affair Recovery Center',
        text: confirmationText,
        html: confirmationHtml,
      })
    } catch (confirmError) {
      // Log but don't fail - the main notification was sent successfully
      console.warn('Failed to send confirmation email:', confirmError)
    }

    // Optional: Add to Resend audience if configured
    if (process.env.RESEND_AUDIENCE_ID && resendClient) {
      try {
        await resendClient.contacts.create({
          email,
          firstName: name.split(' ')[0],
          lastName: name.split(' ').slice(1).join(' ') || undefined,
          audienceId: process.env.RESEND_AUDIENCE_ID,
        })
      } catch (audienceError) {
        // Log but don't fail the request if audience add fails
        console.warn('Failed to add to audience:', audienceError)
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
