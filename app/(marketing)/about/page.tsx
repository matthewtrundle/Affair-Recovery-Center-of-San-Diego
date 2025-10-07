import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Affair Recovery Therapist San Diego | Jordan Zipkin, LMFT',
  description: 'Jordan Zipkin, LMFT: direct, compassionate, and practical. Affair recovery therapist in San Diego; virtual sessions available for Los Angeles and across CA.',
  url: '/about',
  type: 'profile',
})

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jordan Zipkin, LMFT",
    "jobTitle": "Licensed Marriage and Family Therapist",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "Affair Recovery of San Diego",
      "url": "https://YOUR-DOMAIN.com/"
    },
    "url": "https://YOUR-DOMAIN.com/about-jordan",
    "image": "https://YOUR-DOMAIN.com/assets/og-jordan.jpg"
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-deepTeal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6 text-center">
            Affair Recovery Therapist in San Diego
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed text-center max-w-3xl mx-auto mb-8">
            I know what it feels like when infidelity rocks your marriage—because I've lived it myself.
            That personal experience, combined with years of clinical training, is why I focus on affair
            recovery therapy in San Diego and virtual sessions for Los Angeles.
          </p>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            My Approach
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Friendly, direct, and practical
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Gives couples a clear framework to follow
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Skilled at helping men open up honestly
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-turquoise text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Known for balancing compassion with accountability
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* My Background */}
      <section className="py-16 md:py-24 bg-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            My Background
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Master's degree in Clinical Psychology
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Training in Relational Life Therapy, Gottman methods, trauma recovery, mindfulness
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                10+ years working with couples and individuals
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lime text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Special focus on affair recovery and rebuilding trust
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Couples Choose Me */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            Why Couples Choose Me
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-olive text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Blend of professional training + personal understanding
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-olive text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Compassion + directness in equal measure
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-olive text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Practical tools, not just validation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-olive text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Known for getting through to defensive partners—helping them apologize, empathize, and
                take genuine accountability
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-olive text-2xl mr-3">•</span>
              <span className="text-lg text-slate">
                Deep belief that recovery is possible
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* A Message From Me */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deepTeal-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
            A Message From Me
          </h2>
          <p className="text-lg md:text-xl text-slate leading-relaxed">
            If you're reading this, you're in one of the hardest moments of your life. You don't have
            to go through it alone. I'll walk beside you with compassion, directness, and a proven
            framework for healing.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Let's Get Started"
        description="Take the first step toward healing and rebuilding trust."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}
