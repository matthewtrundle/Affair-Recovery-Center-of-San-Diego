import { Metadata } from 'next'
import { ApproachHero } from '@/components/sections/ApproachHero'
import { TherapeuticMethods } from '@/components/sections/TherapeuticMethods'
import { IntegratedApproach } from '@/components/sections/IntegratedApproach'
import { SessionStructure } from '@/components/sections/SessionStructure'
import { WhatMakesDifferent } from '@/components/sections/WhatMakesDifferent'
import { ApproachTimeline } from '@/components/sections/ApproachTimeline'
import { CTABand } from '@/components/sections/CTABand'
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'My Therapeutic Approach | Evidence-Based Affair Recovery',
  description: 'Learn about my integrated approach combining Gottman Method, Relational Life Therapy, and brain-based trauma understanding for effective affair recovery and relationship healing.',
  keywords: [
    'Gottman Method San Diego',
    'Relational Life Therapy',
    'affair recovery approach',
    'trauma-informed therapy',
    'couples therapy methods',
    'betrayal recovery techniques'
  ],
  url: '/approach',
})

export default function ApproachPage() {
  return (
    <>
      {/* Structured Data */}
      {generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Approach', url: '/approach' },
      ])}

      {/* Hero Section */}
      <ApproachHero />

      {/* Therapeutic Methods with Interactive Cards */}
      <TherapeuticMethods />

      {/* What Makes This Approach Different */}
      <WhatMakesDifferent />

      {/* Integrated Approach Visualization */}
      <IntegratedApproach />

      {/* Session Structure & Expectations */}
      <SessionStructure />

      {/* Treatment Timeline */}
      <ApproachTimeline />

      {/* CTA Section */}
      <CTABand
        title="Ready to experience this approach?"
        description="See how these methods can work together in your unique situation."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}