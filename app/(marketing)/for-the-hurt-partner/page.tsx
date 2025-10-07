import { Metadata } from 'next'
import Link from 'next/link'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Healing After Infidelity | Support for the Hurt Partner (San Diego)',
  description: 'Compassionate support for the hurt partner after an affair. Calm emotions, get consistent answers, and rebuild safety. San Diego therapy; virtual across CA.',
  url: '/for-the-hurt-partner',
  type: 'article',
})

export default function HurtPartnerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I keep asking the same questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your brain is seeking safety; repetition helps rebuild it."
        }
      },
      {
        "@type": "Question",
        "name": "Is it normal to want to check their phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Reasonable transparency is often part of early trust rebuilding."
        }
      },
      {
        "@type": "Question",
        "name": "Should I tell friends or family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's often best to process in therapy first to reduce external pressure."
        }
      },
      {
        "@type": "Question",
        "name": "Will I ever stop feeling this angry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With tools to regulate emotions, the rollercoaster settles over time."
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-turquoise-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6 text-center">
            Healing After Infidelity in San Diego
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed text-center max-w-3xl mx-auto">
            When your partner stepped outside the relationship, it shattered your sense of safety.
            You thought you knew who they were—now everything feels uncertain.
          </p>
        </div>
      </section>

      {/* Your Reactions Make Sense */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
            Your Reactions Make Sense
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-6">
            You're not "crazy" for checking their phone. You're not weak for asking the same questions.
            You're not wrong for staying. Your brain is searching for safety, and that's exactly what
            we'll rebuild.
          </p>
        </div>
      </section>

      {/* How Therapy Helps You Heal */}
      <section className="py-16 md:py-24 bg-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            How Therapy Helps You Heal
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Find calm in the storm with tools to manage overwhelming emotions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Get consistent, honest answers without guilt or defensiveness.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Set boundaries that give you transparency now—and peace later.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Reclaim your confidence and sense of self, whether you stay or go.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            FAQ – For the Hurt Partner
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Why do I keep asking the same questions?
              </h3>
              <p className="text-lg text-slate">
                Because repetition is how your brain rebuilds safety.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Is it normal to want to check their phone?
              </h3>
              <p className="text-lg text-slate">
                Yes. In this phase, openness is part of healing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Should I tell friends or family?
              </h3>
              <p className="text-lg text-slate">
                It's usually best to process this in therapy. Outside voices often make things harder.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Will I ever stop feeling this angry?
              </h3>
              <p className="text-lg text-slate">
                Yes. With the right tools, the rollercoaster settles and calm returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Start Healing Today"
        description="You don't have to live in constant doubt. Take the first step toward clarity, calm, and connection."
        buttonText="Start Healing Today"
        buttonHref="/schedule"
      />
    </>
  )
}
