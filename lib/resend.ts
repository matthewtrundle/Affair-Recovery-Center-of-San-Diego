import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export interface EmailOptions {
  to: string | string[]
  subject: string
  html?: string
  text?: string
  from?: string
  replyTo?: string
}

export async function sendEmail(options: EmailOptions) {
  if (!resend) {
    console.log('Resend not configured - skipping email send')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const emailData: any = {
      from: options.from || process.env.MAIL_FROM || 'Affair Recovery Center <hello@affairrecoverysandiego.com>',
      to: options.to,
      subject: options.subject,
    }

    // Add optional fields if provided
    if (options.html) emailData.html = options.html
    if (options.text) emailData.text = options.text
    if (options.replyTo) emailData.reply_to = options.replyTo

    // Ensure we have either html or text content
    if (!emailData.html && !emailData.text) {
      emailData.text = 'No content provided'
    }

    const { data, error } = await resend.emails.send(emailData)

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

export async function addToAudience(
  email: string,
  fields?: Record<string, string | number | boolean>
) {
  if (!resend) {
    console.log('Resend not configured - skipping audience add')
    return { success: false, error: 'Email service not configured' }
  }

  if (!process.env.RESEND_AUDIENCE_ID) {
    console.log('No audience ID configured')
    return { success: false, error: 'No audience ID configured' }
  }

  try {
    const { data, error } = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      // Additional fields can be passed for segmentation
      ...(fields && { fields }),
    })

    if (error) {
      console.error('Resend audience error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Audience add error:', error)
    return { success: false, error }
  }
}

export async function removeFromAudience(email: string) {
  if (!resend) {
    console.log('Resend not configured - skipping audience remove')
    return { success: false, error: 'Email service not configured' }
  }

  if (!process.env.RESEND_AUDIENCE_ID) {
    return { success: false, error: 'No audience ID configured' }
  }

  try {
    const { data, error } = await resend.contacts.remove({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    })

    if (error) {
      console.error('Resend remove error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Audience remove error:', error)
    return { success: false, error }
  }
}