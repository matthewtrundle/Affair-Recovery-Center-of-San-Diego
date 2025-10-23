import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'About Jordan Zipkin, LMFT | San Diego Couples Therapist',
  description: 'Meet Jordan Zipkin, LMFT - Gottman-certified therapist with 15+ years helping couples heal from affairs and rebuild trust in San Diego.',
  keywords: ['jordan zipkin lmft', 'san diego marriage therapist', 'gottman certified therapist', 'affair recovery specialist'],
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
      "name": "Affair Recovery Center of San Diego",
      "url": "https://affairrecoverysd.com/"
    },
    "url": "https://affairrecoverysd.com/about",
    "alumniOf": "California Licensed LMFT",
    "knowsAbout": ["Affair Recovery", "Gottman Method", "Relational Life Therapy", "Betrayal Trauma"]
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
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-6xl text-deepTeal-600 mb-6">
            About Jordan Zipkin, LMFT
          </h1>
          <p className="text-xl md:text-2xl text-slate max-w-3xl mx-auto leading-relaxed">
            Helping couples heal from affairs and rebuild trust in San Diego and across California
          </p>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            My Approach
          </h2>
          <ul className="space-y-4 text-lg text-slate">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Friendly, direct, and practical</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Gives couples a clear framework to follow</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Skilled at helping men open up honestly</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Known for balancing compassion with accountability</span>
            </li>
          </ul>
        </div>
      </section>

      {/* My Background */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            My Background
          </h2>
          <ul className="space-y-4 text-lg text-slate">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
              <span>Master&apos;s degree in Clinical Psychology</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
              <span>Training in Relational Life Therapy, Gottman methods, trauma recovery, mindfulness</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
              <span>10+ years working with couples and individuals</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
              <span>Special focus on affair recovery and rebuilding trust</span>
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
          <ul className="space-y-4 text-lg text-slate">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Blend of professional training + personal understanding</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Compassion + directness in equal measure</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Practical tools, not just validation</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
              <span>Deep belief that recovery is possible</span>
            </li>
          </ul>
        </div>
      </section>

      {/* A Message From Me */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deepTeal-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8 text-center">
            A Message From Me
          </h2>
          <div className="bg-white/80 rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-xl text-slate leading-relaxed mb-6">
              If you&apos;re reading this, you&apos;re in one of the hardest moments of your life. You don&apos;t have to go through it alone. I&apos;ll walk beside you with compassion, directness, and tools that actually work.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              That personal experience, combined with years of clinical training, is why I focus on affair recovery therapy in San Diego and virtual sessions for Los Angeles.
            </p>
          </div>
        </div>
      </section>


      {/* Professional Credentials */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8 text-center">
            Professional Credentials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                org: "Gottman Institute",
                role: "Certified Gottman Method Therapist",
                desc: "Research-based couples therapy approach"
              },
              {
                org: "California Association of Marriage & Family Therapists",
                role: "Professional Member",
                desc: "Licensed therapist in good standing"
              },
              {
                org: "Relational Life Institute",
                role: "RLT Trained Therapist",
                desc: "Advanced relationship therapy training"
              },
              {
                org: "American Association for Marriage & Family Therapy",
                role: "Clinical Member",
                desc: "National professional organization"
              }
            ].map((affiliation, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-turquoise-100">
                <h3 className="font-semibold text-deepTeal-600 mb-2">{affiliation.org}</h3>
                <p className="text-turquoise-600 font-medium mb-2">{affiliation.role}</p>
                <p className="text-sm text-slate">{affiliation.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to begin your journey?"
        description="The first step is often the hardest. I'm here to make it easier."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}
