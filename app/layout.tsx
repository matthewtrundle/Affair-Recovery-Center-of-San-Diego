import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://affairrecoverysandiego.com'),
  title: {
    default: 'ARC San Diego | Couples Therapy for Betrayal & Infidelity Recovery',
    template: '%s | ARC San Diego'
  },
  description: 'Evidence-based couples therapy specializing in affair recovery, betrayal trauma, and rebuilding trust. Gottman Method and Relational Life Therapy approaches. Book your consultation today.',
  keywords: ['affair recovery San Diego', 'infidelity therapist San Diego', 'betrayal trauma couples therapy', 'Gottman therapist San Diego', 'Relational Life Therapy San Diego', 'couples counseling', 'marriage therapy', 'relationship repair'],
  authors: [{ name: 'Jordan Zipkin, LMFT' }],
  creator: 'Jordan Zipkin, LMFT',
  publisher: 'ARC San Diego',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'ARC San Diego - Affair Recovery Center',
    description: 'Evidence-based couples therapy specializing in affair recovery and rebuilding trust',
    siteName: 'ARC San Diego',
    images: [{
      url: '/og/og-home.png',
      width: 1200,
      height: 630,
      alt: 'Affair Recovery Center of San Diego'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affair Recovery Center of San Diego',
    description: 'Evidence-based couples therapy specializing in affair recovery and rebuilding trust',
    images: ['/og/og-home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  icons: {
    icon: '/images/logo/arcsd-favicon.png',
    shortcut: '/images/logo/arcsd-favicon.png',
    apple: '/images/logo/arcsd-favicon.png',
  },
}

// Root layout - minimal wrapper to allow each route group to have its own html/body
// This prevents nested <html> tags between marketing and payload admin routes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
