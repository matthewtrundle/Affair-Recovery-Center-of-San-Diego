import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Infidelity Recovery Therapy FAQ | Affair Recovery San Diego',
  description: 'Answers to common questions: Should we stay together? Ask details? Can trust be rebuilt? Therapy options in San Diego and virtual across CA.',
  url: '/faq',
})

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is staying together the right choice after an affair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only you can decide. Therapy provides clarity and structure for that decision."
        }
      },
      {
        "@type": "Question",
        "name": "Should I ask every detail about the affair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graphic details add pain. Focus on the 'why' and how change will last."
        }
      },
      {
        "@type": "Question",
        "name": "Can trust really be rebuilt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With honesty, patience, and guided support, many couples become stronger."
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-lime-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6">
            Infidelity Recovery Therapy – FAQs
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            Common questions answered with clarity and compassion.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Is staying together the right choice after an affair?
              </h3>
              <p className="text-lg text-slate">
                Only you can decide. Therapy provides clarity and structure for that decision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Should I ask every detail about the affair?
              </h3>
              <p className="text-lg text-slate">
                Graphic details add pain. Focus on the "why" and how change will last.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Can trust really be rebuilt?
              </h3>
              <p className="text-lg text-slate">
                Yes. With honesty, patience, and guided support, many couples become stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Have More Questions?"
        description="Schedule a free consultation to discuss your specific situation."
        buttonText="Let's Talk"
        buttonHref="/schedule"
      />
    </>
  )
}
