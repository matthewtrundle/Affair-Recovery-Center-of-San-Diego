/**
 * Welcome email template for new newsletter subscribers
 * Brand colors: Deep Teal #125959, Turquoise #2ABFB0, Lime #ADD94E
 */

export interface WelcomeEmailProps {
  firstName?: string
  email: string
}

export function getWelcomeEmailHTML({ firstName, email }: WelcomeEmailProps): string {
  const greeting = firstName ? `Hi ${firstName}` : 'Hello'

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Affair Recovery Center</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #125959 0%, #2ABFB0 100%); padding: 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; line-height: 1.3;">
                Welcome to Our Community
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #2d3748; font-size: 16px; line-height: 1.6;">
                ${greeting},
              </p>

              <p style="margin: 0 0 20px; color: #2d3748; font-size: 16px; line-height: 1.6;">
                Thank you for joining our community at <strong>Affair Recovery Center</strong>. We're honored to walk alongside you on your journey toward healing and recovery.
              </p>

              <p style="margin: 0 0 20px; color: #2d3748; font-size: 16px; line-height: 1.6;">
                As a subscriber, you'll receive:
              </p>

              <ul style="margin: 0 0 24px; padding-left: 24px; color: #2d3748; font-size: 16px; line-height: 1.8;">
                <li style="margin-bottom: 8px;"><strong>Evidence-based insights</strong> from neuroscience and trauma research</li>
                <li style="margin-bottom: 8px;"><strong>Practical tools</strong> you can use immediately in your recovery</li>
                <li style="margin-bottom: 8px;"><strong>Compassionate guidance</strong> for rebuilding trust and healing</li>
                <li style="margin-bottom: 8px;"><strong>Hope</strong> that recovery is possible</li>
              </ul>

              <div style="background-color: #f7fafc; border-left: 4px solid #2ABFB0; padding: 20px; margin: 24px 0; border-radius: 4px;">
                <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.6; font-style: italic;">
                  "There is a way through. You don't have to do this alone."
                </p>
                <p style="margin: 8px 0 0; color: #718096; font-size: 14px;">
                  — Jordan Zipkin, LMFT
                </p>
              </div>

              <p style="margin: 0 0 24px; color: #2d3748; font-size: 16px; line-height: 1.6;">
                If you'd like to explore working together, I offer free 15-minute consultations to help you understand what recovery can look like for you and your relationship.
              </p>

              <!-- CTA Button -->
              <table role="presentation" style="margin: 32px 0;">
                <tr>
                  <td align="center">
                    <a href="https://affairrecoverysandiego.com/schedule"
                       style="display: inline-block; background: linear-gradient(135deg, #ADD94E 0%, #2ABFB0 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      Schedule a Consultation
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 24px 0 0; color: #2d3748; font-size: 16px; line-height: 1.6;">
                With hope and compassion,<br>
                <strong>Jordan Zipkin, LMFT</strong><br>
                <span style="color: #718096; font-size: 14px;">Affair Recovery Center of San Diego</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f7fafc; padding: 30px; border-radius: 0 0 16px 16px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 12px; color: #718096; font-size: 13px; line-height: 1.5;">
                You're receiving this email because you subscribed to our newsletter at<br>
                <a href="https://affairrecoverysandiego.com" style="color: #2ABFB0; text-decoration: none;">affairrecoverysandiego.com</a>
              </p>

              <p style="margin: 0; color: #718096; font-size: 13px; line-height: 1.5;">
                <a href="{{unsubscribe_url}}" style="color: #718096; text-decoration: underline;">Unsubscribe</a>
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
}

export function getWelcomeEmailText({ firstName, email }: WelcomeEmailProps): string {
  const greeting = firstName ? `Hi ${firstName}` : 'Hello'

  return `
${greeting},

Thank you for joining our community at Affair Recovery Center. We're honored to walk alongside you on your journey toward healing and recovery.

As a subscriber, you'll receive:

• Evidence-based insights from neuroscience and trauma research
• Practical tools you can use immediately in your recovery
• Compassionate guidance for rebuilding trust and healing
• Hope that recovery is possible

"There is a way through. You don't have to do this alone."
— Jordan Zipkin, LMFT

If you'd like to explore working together, I offer free 15-minute consultations to help you understand what recovery can look like for you and your relationship.

Schedule a consultation: https://affairrecoverysandiego.com/schedule

With hope and compassion,
Jordan Zipkin, LMFT
Affair Recovery Center of San Diego

---

You're receiving this email because you subscribed to our newsletter at affairrecoverysandiego.com

Unsubscribe: {{unsubscribe_url}}
  `.trim()
}
