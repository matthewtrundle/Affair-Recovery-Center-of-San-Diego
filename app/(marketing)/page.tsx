import { Metadata } from 'next'
import { PremiumHero } from '@/components/sections/PremiumHero'
import { AboutTherapist } from '@/components/sections/AboutTherapist'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { MethodCards } from '@/components/sections/MethodCards'
import { CTABand } from '@/components/sections/CTABand'
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel'
import { FAQPreview } from '@/components/sections/FAQPreview'
import { ProblemPromiseSection } from '@/components/sections/ProblemPromiseSection'
import { generateMetadata as generateSEO, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Affair Recovery San Diego | Couples Therapy & Infidelity Counseling',
  description: 'Affair recovery therapy in San Diego. Rebuild trust, heal after infidelity, and reconnect. In-person San Diego; virtual sessions for Los Angeles and all of California.',
  keywords: ['affair recovery San Diego', 'infidelity therapist San Diego', 'betrayal trauma couples therapy', 'Gottman therapist San Diego', 'Relational Life Therapy San Diego'],
  url: '/',
})

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      {generateOrganizationSchema()}
      {generateLocalBusinessSchema()}

      {/* Premium Hero with Rotating Text and Image Box */}
      <PremiumHero />

      {/* About Therapist Section */}
      <AboutTherapist />

      {/* Problem → Promise Section with Premium Effects */}
      <ProblemPromiseSection />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Method Cards */}
      <MethodCards />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Band */}
      <CTABand
        title="Ready to begin healing?"
        description="The first step is often the hardest. I'm here to make it easier."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />

      {/* FAQ Preview */}
      <FAQPreview />
    </>
  )
}