import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = generateSEO({
  title: 'About Jordan Zipkin, LMFT | San Diego Couples Therapist',
  description: 'Meet Jordan Zipkin, LMFT - I understand betrayal because I\'ve experienced it myself. 15+ years helping San Diego couples heal from affairs with Gottman Method and compassionate expertise.',
  keywords: ['jordan zipkin lmft', 'san diego marriage therapist', 'gottman certified therapist', 'affair recovery specialist', 'betrayal trauma therapist'],
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
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Ithaca College",
        "location": "Ithaca, New York"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Argosy University",
        "location": "Orange, California"
      }
    ],
    "knowsAbout": ["Affair Recovery", "Gottman Method", "Relational Life Therapy", "Betrayal Trauma", "Couples Therapy", "Trauma Recovery"],
    "memberOf": [
      "American Association for Marriage & Family Therapy",
      "American Psychological Association",
      "California Association of Marriage & Family Therapists"
    ]
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

      {/* My Story - Hero Layout with Single Large Image */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-lightGray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-deepTeal-600 mb-12 text-center">
            My Story
          </h2>

          {/* Main Layout - Image and Text Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Large Hero Image */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/jordan/Jordan1.webp"
                alt="Jordan Zipkin, LMFT - Licensed Marriage and Family Therapist"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-base md:text-lg text-slate leading-relaxed">
              <p>
                As a child and adolescent, I endured a tremendous amount of suffering. I was continually bullied in school and I didn't find the comfort or support I needed there or at home.
              </p>
              <p>
                This pattern followed me into adulthood. I wasn't attracting the healthiest intimate relationships into my life. Eventually, I went through an affair and divorce that nearly broke me—experiencing firsthand the devastation, shame, and feeling of being utterly lost that comes with betrayal.
              </p>
              <p className="font-medium text-deepTeal-700">
                That hardship became my turning point. I sought my own intensive therapy and it completely transformed my life.
              </p>
              <p>
                I learned to rebuild trust—in myself and others. I discovered that healing from betrayal isn't just possible; with the right support and tools, it can lead to a stronger relationship than before.
              </p>
            </div>
          </div>

          {/* Final paragraph centered */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-slate leading-relaxed">
              I knew then that becoming a therapist was my passion. I had a wealth of difficult experiences, all of which I had now conquered, so I could relate to, empathize with, and help others who were also suffering. <span className="font-medium text-deepTeal-700">I understand the pain you're going through because I've been there myself.</span>
            </p>
          </div>
        </div>
      </section>

      {/* My Approach - With Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl order-2 md:order-1">
              <Image
                src="/images/jordan/Jordan3.webp"
                alt="Jordan Zipkin, LMFT - Therapeutic Approach"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/40 via-transparent to-transparent" />
            </div>

            {/* Content Right */}
            <div className="order-1 md:order-2">
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
          </div>
        </div>
      </section>

      {/* Professional Background - With Image */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
                Professional Background
              </h2>
              <ul className="space-y-4 text-lg text-slate">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Bachelor's degree in Psychology from Ithaca College, New York</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Master's degree in Clinical Psychology from Argosy University, Orange, California</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Nearly 4 years of intensive post-graduate training in inpatient and intensive outpatient settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Former Assistant Director of Mental Health, overseeing 150 staff members and 100 clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Practicing psychotherapy since 2010, specializing in affair recovery and couples therapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Advanced training in Relational Life Therapy, Gottman Method, trauma recovery, and mindfulness-based approaches</span>
                </li>
              </ul>
            </div>

            {/* Image Right - Sepia tone */}
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/jordan/Jordan4.webp"
                alt="Jordan Zipkin, LMFT - Professional Credentials"
                fill
                className="object-cover sepia hover:sepia-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lime-900/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Couples Choose Me - With Split Images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            Why Couples Choose Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Small Image 1 - B&W */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/jordan/Jordan2.webp"
                alt="Jordan Zipkin, LMFT"
                fill
                className="object-cover grayscale brightness-110 contrast-125"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content Center */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-4 text-base text-slate">
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

            {/* Small Image 2 - Inverted B&W */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/jordan/Jordan3.webp"
                alt="Jordan Zipkin, LMFT"
                fill
                className="object-cover grayscale invert-[0.1] brightness-90"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
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
              If you're reading this, you're in one of the hardest moments of your life. You don't have to go through it alone. I'll walk beside you with compassion, directness, and tools that actually work.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              My personal experience with betrayal and healing, combined with years of clinical training and a deep understanding of what it takes to rebuild trust, is why I focus on affair recovery therapy in San Diego and virtual sessions across California.
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Therapy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            Beyond Therapy
          </h2>
          <div className="space-y-6 text-lg text-slate leading-relaxed">
            <p>
              Outside the therapy room, I'm passionate about film and storytelling. I'm a bit obsessed with Roger Ebert and love analyzing how stories unfold—which probably informs how I help couples understand and reshape their own narratives.
            </p>
            <p>
              I was a Division I collegiate wrestler at Ithaca College and later coached wrestling at California high schools. Wrestling taught me discipline, resilience, and the importance of having someone in your corner who believes in you—lessons I bring to my work with couples every day.
            </p>
            <p>
              I'm also deeply committed to holistic health and wellness. Living with severe scoliosis has given me firsthand experience with chronic challenges and the importance of addressing the whole person—mind, body, and spirit. This perspective shapes how I approach therapy: healing isn't just about fixing what's broken; it's about building strength and resilience for the long term.
            </p>
            <p className="font-medium text-deepTeal-700 text-xl mt-8">
              Just like in wrestling, where you need someone in your corner who believes in you, couples need a therapist who genuinely believes recovery is possible and has the skills to help them get there. That's what I bring to every session.
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
                org: "American Association for Marriage & Family Therapy",
                role: "National Clinical Fellow",
                desc: "2017 – Current"
              },
              {
                org: "American Psychological Association",
                role: "Professional Member",
                desc: "2012 – Current"
              },
              {
                org: "California Association of Marriage & Family Therapists",
                role: "Professional Member (LA Chapter)",
                desc: "2017 – Current"
              },
              {
                org: "Florida Counseling Association",
                role: "Professional Member",
                desc: "2018 – Current"
              },
              {
                org: "Gottman Institute",
                role: "Certified Gottman Method Therapist",
                desc: "Research-based couples therapy approach"
              },
              {
                org: "Relational Life Institute",
                role: "RLT Trained Therapist",
                desc: "Advanced relationship therapy training"
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
