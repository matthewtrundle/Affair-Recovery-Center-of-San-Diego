import { PremiumHeader } from '@/components/layout/PremiumHeader'
import { Footer } from '@/components/layout/Footer'
import { MobileCTABar } from '@/components/layout/MobileCTABar'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScrollProvider>
      <PremiumHeader />
      <main className="pt-20 lg:pt-24 pb-20 xl:pb-0">{children}</main>
      <Footer />
      <MobileCTABar />
    </SmoothScrollProvider>
  )
}