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
  title: 'Couples Therapy La Jolla | Affair Recovery San Diego',
  description: 'Local San Diego therapist specializing in affair recovery. Serving La Jolla, Del Mar, Encinitas. 15+ years helping couples heal. Free consultation.',
  keywords: ['couples therapy La Jolla', 'affair recovery San Diego', 'marriage counseling Del Mar', 'betrayal therapy Encinitas', 'relationship counseling San Diego'],
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