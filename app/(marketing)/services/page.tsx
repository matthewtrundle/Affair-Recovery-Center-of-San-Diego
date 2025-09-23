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
  title: 'Services for Healing - Betrayal Recovery Therapy',
  description: 'Comprehensive therapy services for couples healing from betrayal. Specialized couples therapy, individual sessions, intensive weekends, and discernment counseling in San Diego.',
  keywords: ['affair recovery services', 'betrayal therapy San Diego', 'couples counseling services', 'infidelity recovery'],
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