import { PremiumHeader } from '@/components/layout/PremiumHeader'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScrollProvider>
      <PremiumHeader />
      <main className="pt-20 lg:pt-24">{children}</main>
      <Footer />
    </SmoothScrollProvider>
  )
}