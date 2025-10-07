import { Metadata } from 'next'
import { CTABand } from '@/components/sections/CTABand'
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import {
  ServicesHero,
  MainServicesSection,
  AdditionalServicesSection,
  ProcessOverviewSection,
  InvestmentSection,
  ServicesFAQSection,
} from '@/components/sections/ServicesPageClient'

export const metadata: Metadata = generateSEO({
  title: 'Affair Recovery Counseling Services | San Diego & Virtual',
  description: 'Four-pillar framework: calm emotions, rebuild trust, restore friendship, renew intimacy. In-person San Diego; virtual sessions for Los Angeles and California.',
  keywords: ['affair recovery counseling', 'infidelity therapy San Diego', 'betrayal recovery services', 'couples therapy California'],
  url: '/services',
})

// Main Services Page Component
export default function ServicesPage() {
  return (
    <>
      {/* Structured Data */}
      {generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
      ])}

      {/* Hero Section */}
      <ServicesHero />

      {/* Main Service */}
      <MainServicesSection />

      {/* Additional Services */}
      <AdditionalServicesSection />

      {/* Process Overview */}
      <ProcessOverviewSection />

      {/* Investment Section */}
      <InvestmentSection />

      {/* FAQ Section */}
      <ServicesFAQSection />

      {/* CTA Band */}
      <CTABand
        title="Ready to start your healing journey?"
        description="Take the first step toward rebuilding trust and creating the relationship you both deserve."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}