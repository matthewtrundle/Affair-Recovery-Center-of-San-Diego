import { createHmac } from 'crypto'

export const CALENDLY_EMBED_URL = process.env.CALENDLY_EMBED_URL || 'https://calendly.com/zipkin/15min'

export interface CalendlyEvent {
  event: string
  time: string
  payload: {
    event: {
      uri: string
      name: string
      status: string
      start_time: string
      end_time: string
      event_type: string
      location: {
        type: string
        location?: string
      }
      invitee_counter: number
      created_at: string
      updated_at: string
    }
    invitee: {
      uri: string
      name: string
      email: string
      status: string
      questions_and_answers: Array<{
        question: string
        answer: string
      }>
      timezone: string
      created_at: string
      updated_at: string
      tracking?: {
        utm_source?: string
        utm_medium?: string
        utm_campaign?: string
      }
    }
  }
}

export function verifyCalendlyWebhook(
  signature: string | null,
  body: string,
  secret: string
): boolean {
  if (!signature) return false

  const expectedSignature = createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex')

  // Calendly sends signature in format: "t=timestamp,v1=signature"
  const parts = signature.split(',')
  const signaturePart = parts.find(part => part.startsWith('v1='))

  if (!signaturePart) return false

  const receivedSignature = signaturePart.replace('v1=', '')

  return expectedSignature === receivedSignature
}

export function getCalendlyEmbedScript(): string {
  return `
    (function() {
      var script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    })();
  `
}