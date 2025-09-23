declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: Record<string, any>[]
    plausible: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

// Google Analytics events
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // Also send to Plausible if available
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(action, {
      props: {
        category,
        label,
        value,
      },
    })
  }
}

// Common events
export const trackCTAClick = (label: string, page: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${label}_${page}`,
  })
}

export const trackScheduleClick = (page: string) => {
  event({
    action: 'schedule_click',
    category: 'conversion',
    label: page,
  })
}

export const trackCalendlyScheduled = () => {
  event({
    action: 'calendly_scheduled',
    category: 'conversion',
    label: 'consultation_booked',
  })
}

export const trackMailtoClick = (page: string) => {
  event({
    action: 'mailto_click',
    category: 'contact',
    label: page,
  })
}

export const trackTelClick = (page: string) => {
  event({
    action: 'tel_click',
    category: 'contact',
    label: page,
  })
}

export const trackScrollDepth = (percentage: number, page: string) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: page,
    value: percentage,
  })
}