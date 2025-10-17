import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Playfair_Display, Source_Sans_3 } from 'next/font/google'
import '@/styles/globals.css'
import { Analytics } from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
  style: ['normal', 'italic'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

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
      url: '/og/home.png',
      width: 1200,
      height: 630,
      alt: 'Affair Recovery Center of San Diego'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affair Recovery Center of San Diego',
    description: 'Evidence-based couples therapy specializing in affair recovery and rebuilding trust',
    images: ['/og/home.png'],
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
}

import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}