import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Therapy for Cheating Spouses | Rebuild Trust (San Diego)',
  description: 'Shame after cheating doesn\'t have to end your relationship. Learn patience, honesty, and how to rebuild trust. San Diego therapy; virtual across California.',
  url: '/for-the-partner-who-strayed',
  type: 'article',
})

export default function StrayedPartnerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I feel too ashamed to talk about it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shame is common; guided conversations make openness safer and more productive."
        }
      },
      {
        "@type": "Question",
        "name": "How do I answer the same questions again?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We coach you to respond with patience and consistency to rebuild safety."
        }
      },
      {
        "@type": "Question",
        "name": "Can we ever have fun again?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Restoring friendship and lightness is part of recovery."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't know why I did it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We'll explore patterns and vulnerabilities so it doesn't happen again."
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6 text-center">
            Therapy for Cheating Spouses in San Diego
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed text-center max-w-3xl mx-auto">
            If you stepped outside the relationship, the shame can feel crushing. You want to fix
            things, but every question feels like a trap. You don't know how to explain what happened—or
            how to prove it won't happen again.
          </p>
        </div>
      </section>

      {/* Shame Isn't the End of the Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
            Shame Isn't the End of the Story
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-6">
            Your silence doesn't protect your partner—it leaves them in the dark. Therapy helps you
            open up, stay patient through the hard questions, and show through your actions that change
            is real.
          </p>
        </div>
      </section>

      {/* How Therapy Helps You Show Up */}
      <section className="py-16 md:py-24 bg-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            How Therapy Helps You Show Up
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Answer repeated questions with empathy instead of frustration.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Learn how to share the truth without excuses.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Understand what led to your choices, so you never repeat them.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Bring back laughter and friendship, so your relationship isn't only about pain.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            FAQ – For the Partner Who Strayed
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Why do I feel too ashamed to talk about it?
              </h3>
              <p className="text-lg text-slate">
                Shame is normal, but silence blocks healing. Therapy gives you safe ways to speak.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                How do I answer the same questions over and over?
              </h3>
              <p className="text-lg text-slate">
                With coaching, you'll learn to respond with patience—even when it feels repetitive.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                Can we ever have fun again?
              </h3>
              <p className="text-lg text-slate">
                Yes. Part of healing is rebuilding joy and lightness.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">
                What if I don't know why I did it?
              </h3>
              <p className="text-lg text-slate">
                That's normal. Together we'll uncover the patterns so you can prevent it from happening again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Start Healing Today"
        description="Take the first step toward accountability, patience, and genuine change."
        buttonText="Start Healing Today"
        buttonHref="/schedule"
      />
    </>
  )
}
