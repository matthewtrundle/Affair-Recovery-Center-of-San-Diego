import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, preferredContact, sessionType } = body

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

    // Construct email content
    const emailContent = `
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

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM || 'Affair Recovery Center <contact@affairrecoverysd.com>',
      to: 'jordan@affairrecoverysd.com',
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email directly.' },
        { status: 500 }
      )
    }

    // Optional: Add to Resend audience if configured
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
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
