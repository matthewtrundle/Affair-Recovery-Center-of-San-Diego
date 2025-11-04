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
            Heal From Betrayal and Rebuild Trust
          </h1>
          <p className="text-xl md:text-2xl text-slate max-w-3xl mx-auto leading-relaxed mb-4">
            Affair Recovery Therapy in San Diego & Online Across California
          </p>
          <p className="text-lg text-deepTeal-700 font-medium">
            By Jordan Zipkin, LMFT
          </p>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl md:text-2xl text-slate leading-relaxed text-center">
            If you're here, you're likely facing one of the most painful moments of your life. Whether you've been betrayed or were unfaithful yourself, the hurt, confusion, and loss of trust can feel overwhelming. You may be wondering if your relationship can survive—or if you'll ever feel whole again.
          </p>
          <p className="text-2xl md:text-3xl text-deepTeal-700 font-medium text-center mt-8">
            I've been where you are. I understand the devastation that comes from infidelity, because I lived it.
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
            {/* Large Hero Image - No filters, no zoom */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/jordan/Jordan1.webp"
                alt="Jordan Zipkin, LMFT - Licensed Marriage and Family Therapist"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-base md:text-lg text-slate leading-relaxed">
              <p>
                As a kid, I faced constant bullying and emotional pain without much support. That pattern followed me into adulthood, where I found myself in unhealthy relationships that ended in betrayal and divorce. The experience nearly broke me.
              </p>
              <p className="font-medium text-deepTeal-700">
                But it also became my turning point. Intensive therapy helped me rebuild from the ground up—learning to trust again, to communicate honestly, and to create real intimacy.
              </p>
              <p>
                That healing process changed my life and inspired my calling: helping others recover from betrayal and create relationships that are stronger than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Couples Recover */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Left - No filters */}
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl order-2 md:order-1">
              <Image
                src="/images/jordan/Jordan3.webp"
                alt="Jordan Zipkin, LMFT - Therapeutic Approach"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Right */}
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
                How I Help Couples Recover
              </h2>
              <p className="text-lg text-slate mb-6 leading-relaxed">
                Affair recovery isn't just about "getting past" the betrayal—it's about rebuilding a foundation of honesty, empathy, and mutual respect.
              </p>
              <p className="text-lg text-deepTeal-700 font-medium mb-4">My approach is:</p>
              <ul className="space-y-4 text-lg text-slate">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Friendly, direct, and practical</strong> – I help you move forward, not in circles.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Structured</strong> – You'll get a clear framework and roadmap for healing.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Balanced</strong> – I combine compassion with accountability.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Effective with men</strong> – I help men open up and express what really matters.</span>
                </li>
              </ul>
              <p className="text-lg text-slate mt-6 leading-relaxed">
                I specialize in affair recovery, communication breakdowns, trust rebuilding, and couples on the edge of separation who want to know if they can make it work.
              </p>
              <p className="text-lg text-slate mt-4 leading-relaxed">
                Whether your goal is to repair your relationship or move forward separately with clarity and peace, we'll create a plan together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Couples Choose Me */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            Why Couples Choose Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Small Image 1 - No filters */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/jordan/Jordan2.webp"
                alt="Jordan Zipkin, LMFT"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content Center */}
            <div className="flex flex-col justify-center">
              <ul className="space-y-4 text-base text-slate">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Blend of professional expertise and personal understanding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Research-based tools from Gottman Method and Relational Life Therapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Real strategies, not just talk</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span>A direct yet compassionate approach that helps both partners feel heard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Deep belief that healing after infidelity is absolutely possible</span>
                </li>
              </ul>
            </div>

            {/* Small Image 2 - No filters */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/jordan/Jordan3.webp"
                alt="Jordan Zipkin, LMFT"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <p className="text-xl text-slate text-center mt-12 leading-relaxed max-w-3xl mx-auto">
            If you're ready to move from crisis to connection, I'll guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Professional Background - With Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
                My Professional Background
              </h2>
              <ul className="space-y-4 text-lg text-slate">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>B.A. in Psychology, Ithaca College, New York</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>M.A. in Clinical Psychology, Argosy University, Orange, California</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Practicing since 2010, specializing in couples and affair recovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Former Assistant Director of Mental Health, supervising 150 staff and 100 clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Advanced training in Gottman Method, Relational Life Therapy (RLT), trauma recovery, and mindfulness</span>
                </li>
              </ul>
            </div>

            {/* Image Right - No filters */}
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/jordan/Jordan4.webp"
                alt="Jordan Zipkin, LMFT - Professional Credentials"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story Beyond the Office */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
            My Story Beyond the Office
          </h2>
          <div className="space-y-6 text-lg text-slate leading-relaxed">
            <p>
              Before becoming a therapist, I was a Division I wrestler and later a wrestling coach. That discipline taught me what it means to fight for something worth keeping—and to have someone in your corner who believes in you.
            </p>
            <p>
              I also live with severe scoliosis, which has taught me resilience and the importance of holistic healing—mind, body, and spirit.
            </p>
            <p>
              Outside of therapy, I'm passionate about film and storytelling. Understanding how stories unfold helps me guide couples in rewriting their own.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8 text-center">
            Credentials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                org: "American Association for Marriage & Family Therapy",
                role: "National Clinical Fellow",
                desc: ""
              },
              {
                org: "American Psychological Association",
                role: "Professional Member",
                desc: ""
              },
              {
                org: "California Association of Marriage & Family Therapists",
                role: "Professional Member, LA Chapter",
                desc: ""
              },
              {
                org: "Florida Counseling Association",
                role: "Professional Member",
                desc: ""
              },
              {
                org: "Gottman Institute",
                role: "Certified Gottman Method Therapist",
                desc: ""
              },
              {
                org: "Relational Life Institute",
                role: "RLT Trained Therapist",
                desc: ""
              }
            ].map((affiliation, index) => (
              <div key={index} className="bg-lightGray-50 rounded-lg p-6 shadow-sm border border-turquoise-100">
                <h3 className="font-semibold text-deepTeal-600 mb-2">{affiliation.org}</h3>
                <p className="text-turquoise-600 font-medium">{affiliation.role}</p>
              </div>
            ))}
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
              You don't have to go through this alone. Healing from infidelity takes courage, guidance, and the right tools—and I can help you find all three.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              Whether you want to restore your marriage or understand what's next, we'll work together to rebuild trust and emotional safety so you can move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Schedule Your First Session"
        description="Start your affair recovery journey today—in person in San Diego or online anywhere in California."
        buttonText="Schedule a Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}
