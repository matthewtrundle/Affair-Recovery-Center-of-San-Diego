import { Metadata } from 'next'
import { CTABand } from '@/components/sections/CTABand'
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import {
  ServicesHero,
  MainServicesSection,
  FourPillarsSection,
  AdditionalServicesSection,
  ProcessOverviewSection,
  InvestmentSection,
  ServicesFAQSection,
} from '@/components/sections/ServicesPageClient'

export const metadata: Metadata = generateSEO({
  title: 'Betrayal Trauma Therapy San Diego | Infidelity Recovery',
  description: 'Specialized betrayal trauma therapy using Gottman Method and RLT. Help for both partners after affairs. In-person San Diego or California telehealth.',
  keywords: ['betrayal trauma therapy san diego', 'infidelity recovery therapy', 'affair recovery counseling', 'couples therapy after infidelity'],
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

      {/* Four Pillars Framework */}
      <FourPillarsSection />

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