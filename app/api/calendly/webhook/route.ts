import { NextRequest, NextResponse } from 'next/server'
import { verifyCalendlyWebhook, CalendlyEvent } from '@/lib/calendly'
import { addToAudience, sendEmail } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    // Get the webhook signature from headers
    const signature = request.headers.get('Calendly-Webhook-Signature')
    const body = await request.text()

    // Verify webhook signature
    if (!process.env.CALENDLY_WEBHOOK_SECRET) {
      console.error('CALENDLY_WEBHOOK_SECRET not configured')
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      )
    }

    const isValid = verifyCalendlyWebhook(
      signature,
      body,
      process.env.CALENDLY_WEBHOOK_SECRET
    )

    if (!isValid) {
      console.error('Invalid webhook signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Parse the event
    const event: CalendlyEvent = JSON.parse(body)

    // Handle different event types
    switch (event.event) {
      case 'invitee.created':
        await handleInviteeCreated(event)
        break
      case 'invitee.canceled':
        await handleInviteeCanceled(event)
        break
      default:
        console.log(`Unhandled event type: ${event.event}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleInviteeCreated(event: CalendlyEvent) {
  const { invitee } = event.payload

  // Log the scheduled event for analytics
  console.log('New consultation scheduled:', {
    name: invitee.name,
    email: invitee.email,
    time: event.payload.event.start_time,
  })

  // Check if user consented to receive emails (look for a specific question/answer)
  const consentAnswer = invitee.questions_and_answers?.find(
    (qa) => qa.question.toLowerCase().includes('consent') ||
            qa.question.toLowerCase().includes('updates') ||
            qa.question.toLowerCase().includes('resources')
  )

  // If consent was given, add to Resend audience
  if (consentAnswer && consentAnswer.answer.toLowerCase() === 'yes') {
    await addToAudience(invitee.email, {
      name: invitee.name,
      source: 'calendly_consultation',
      consultation_date: event.payload.event.start_time,
    })
  }

  // Send confirmation email
  await sendEmail({
    to: invitee.email,
    subject: 'Consultation Confirmed - Affair Recovery Center of San Diego',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0C1B2A;">Your Consultation is Confirmed</h1>
        <p>Dear ${invitee.name},</p>
        <p>Thank you for scheduling a consultation. I look forward to speaking with you.</p>
        <p><strong>Date & Time:</strong> ${new Date(event.payload.event.start_time).toLocaleString()}</p>
        <p><strong>Format:</strong> ${event.payload.event.location.type === 'physical' ? 'In-Person' : 'Phone/Video Call'}</p>

        <h2 style="color: #0C1B2A;">What to Expect</h2>
        <ul>
          <li>Our consultation will last approximately 15 minutes</li>
          <li>We'll discuss your current situation and needs</li>
          <li>I'll explain my approach and how I can help</li>
          <li>We'll determine if we're a good fit to work together</li>
        </ul>

        <p>If you need to reschedule or cancel, please use the link in your Calendly confirmation email.</p>

        <p>If you have any urgent questions before our call, feel free to email me at hello@affairrecoverysandiego.com</p>

        <p>Looking forward to our conversation.</p>

        <p>Warmly,<br>
        Jordan Zipkin, LMFT<br>
        Affair Recovery Center of San Diego</p>
      </div>
    `,
    text: `
      Your Consultation is Confirmed

      Dear ${invitee.name},

      Thank you for scheduling a consultation. I look forward to speaking with you.

      Date & Time: ${new Date(event.payload.event.start_time).toLocaleString()}
      Format: ${event.payload.event.location.type === 'physical' ? 'In-Person' : 'Phone/Video Call'}

      What to Expect:
      - Our consultation will last approximately 15 minutes
      - We'll discuss your current situation and needs
      - I'll explain my approach and how I can help
      - We'll determine if we're a good fit to work together

      If you need to reschedule or cancel, please use the link in your Calendly confirmation email.

      If you have any urgent questions before our call, feel free to email me at hello@affairrecoverysandiego.com

      Looking forward to our conversation.

      Warmly,
      Jordan Zipkin, LMFT
      Affair Recovery Center of San Diego
    `,
  })
}

async function handleInviteeCanceled(event: CalendlyEvent) {
  const { invitee } = event.payload

  console.log('Consultation canceled:', {
    name: invitee.name,
    email: invitee.email,
  })

  // Send cancellation acknowledgment
  await sendEmail({
    to: invitee.email,
    subject: 'Consultation Canceled - Affair Recovery Center of San Diego',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0C1B2A;">Consultation Canceled</h1>
        <p>Dear ${invitee.name},</p>
        <p>Your consultation has been canceled as requested.</p>
        <p>If you'd like to reschedule or if you canceled by mistake, you can book a new time at:
           <a href="https://affairrecoverysandiego.com/schedule">https://affairrecoverysandiego.com/schedule</a>
        </p>
        <p>If you have any questions, please don't hesitate to reach out.</p>
        <p>Take care,<br>
        Jordan Zipkin, LMFT<br>
        Affair Recovery Center of San Diego</p>
      </div>
    `,
    text: `
      Consultation Canceled

      Dear ${invitee.name},

      Your consultation has been canceled as requested.

      If you'd like to reschedule or if you canceled by mistake, you can book a new time at:
      https://affairrecoverysandiego.com/schedule

      If you have any questions, please don't hesitate to reach out.

      Take care,
      Jordan Zipkin, LMFT
      Affair Recovery Center of San Diego
    `,
  })
}