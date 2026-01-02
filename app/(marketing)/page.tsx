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
  title: 'Affair Recovery Therapist San Diego | Jordan Zipkin, LMFT',
  description: 'Expert couples therapy for affair recovery and betrayal trauma in San Diego. Gottman-certified therapist helping couples rebuild trust. Begin your healing journey today.',
  keywords: ['affair recovery san diego', 'infidelity therapist san diego', 'couples therapist san diego', 'betrayal trauma therapy', 'gottman certified therapist'],
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
        buttonText="Begin Your Healing"
        buttonHref="/contact"
      />

      {/* FAQ Preview */}
      <FAQPreview />
    </>
  )
}