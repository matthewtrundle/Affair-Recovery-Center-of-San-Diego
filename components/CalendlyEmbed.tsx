'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { CALENDLY_EMBED_URL } from '@/lib/calendly'
import { trackCalendlyScheduled } from '@/lib/analytics'

export function CalendlyEmbed() {
  useEffect(() => {
    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          trackCalendlyScheduled()
        }
      }
    }

    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [])

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_EMBED_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
        style={{ minWidth: '320px', height: '630px' }}
      />
    </>
  )
}