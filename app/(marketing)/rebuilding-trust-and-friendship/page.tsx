import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'How to Rebuild Trust After an Affair | San Diego Couples Therapy',
  description: 'Step-by-step trust-building after infidelity: honest answers, transparency, and friendship. San Diego couples therapy; virtual across California.',
  url: '/rebuilding-trust-and-friendship',
  type: 'article',
})

export default function RebuildingTrustPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can trust really come back after cheating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With consistent actions and guidance, many couples rebuild trust."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Progress often appears in weeks and months—not years—when following a clear plan."
        }
      },
      {
        "@type": "Question",
        "name": "What if we feel like roommates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Friendship-building exercises help you reconnect beyond logistics."
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
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-olive-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6 text-center">
            How to Rebuild Trust After an Affair in San Diego
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed text-center max-w-3xl mx-auto">
            Right now, it might feel impossible to imagine a future where you trust each other again.
            But with the right tools and guidance, couples often not only rebuild trust, but also
            discover a deeper connection than they had before.
          </p>
        </div>
      </section>

      {/* Rebuilding Trust Step by Step */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            Rebuilding Trust Step by Step
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Ask the right questions—and get answers without defensiveness.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Create transparency in daily life that helps you feel safe again.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Move past suspicion and start to relax into security.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Friendship Is the Foundation */}
      <section className="py-16 md:py-24 bg-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            Friendship Is the Foundation of Lasting Love
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">Love Maps</h3>
              <p className="text-lg text-slate">
                Feeling truly known and understood by each other.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">Fondness & Admiration</h3>
              <p className="text-lg text-slate">
                Not just loving each other, but genuinely liking each other again.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">Turning Toward Moments</h3>
              <p className="text-lg text-slate">
                Learning to notice, respond, and connect in small, everyday ways that rebuild closeness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Making Space for Intimacy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
            Making Space for Intimacy and Joy Again
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-6">
            Once safety and friendship are rebuilt, intimacy can return—not forced, but natural. You'll
            rediscover fun, laughter, and the feeling of being partners in life again.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            FAQ – Rebuilding Trust & Friendship
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Can trust really come back after infidelity?
              </h3>
              <p className="text-lg text-slate">
                Yes, with consistent actions and guided support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                How long does it take?
              </h3>
              <p className="text-lg text-slate">
                Progress happens in weeks and months, not years.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                What if we just feel like roommates?
              </h3>
              <p className="text-lg text-slate">
                Rebuilding friendship helps you move beyond roommates to true partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Let's Get Started"
        description="Take the first step toward rebuilding trust, friendship, and lasting connection."
        buttonText="Start Healing Today"
        buttonHref="/schedule"
      />
    </>
  )
}
