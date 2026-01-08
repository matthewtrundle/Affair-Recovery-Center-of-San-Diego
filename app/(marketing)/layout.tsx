import { Inter, Cormorant_Garamond, Playfair_Display, Source_Sans_3 } from 'next/font/google'
import '@/styles/globals.css'
import { Analytics } from '@/components/Analytics'
import { PremiumHeader } from '@/components/layout/PremiumHeader'
import { Footer } from '@/components/layout/Footer'
import { MobileCTABar } from '@/components/layout/MobileCTABar'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

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

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSans.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <SmoothScrollProvider>
          <PremiumHeader />
          <main className="pt-20 lg:pt-24 pb-20 xl:pb-0">{children}</main>
          <Footer />
          <MobileCTABar />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
