import { PremiumHeader } from '@/components/layout/PremiumHeader'
import { Footer } from '@/components/layout/Footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PremiumHeader />
      <main className="pt-20 lg:pt-24">{children}</main>
      <Footer />
    </>
  )
}