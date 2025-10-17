import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'About Jordan Zipkin, LMFT | Affair Recovery Therapist San Diego',
  description: '15 years helping San Diego couples heal from betrayal. Gottman Level 3 certified, trauma-informed, direct approach. From Poway to Paradise Hills.',
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-turquoise-100 text-turquoise-700 rounded-full text-sm font-semibold mb-6">
              Your Local San Diego Therapist
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl text-deepTeal-600 mb-6 text-center">
            <span className="block">15 years helping</span>
            <span className="block text-turquoise-600 italic">San Diego heal</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate leading-relaxed">
            <p className="text-center font-semibold text-xl">
              From Poway to Paradise Hills, I've helped couples find their way back
            </p>
            <p className="text-center">
              Started my practice here in 2008, right when the housing market crashed. Saw a lot of relationships crash too. But here's what I learned: San Diegans are resilient. We rebuild. We come back stronger.
            </p>
          </div>

          <div className="flex justify-center gap-12 mt-12">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-deepTeal-600">2008</div>
              <div className="text-sm text-slate">Serving SD Since</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-turquoise-600">92104-92130</div>
              <div className="text-sm text-slate">All Zip Codes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Bio Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-deepTeal-600 mb-4">
            Why Couples From Mira Mesa to Mission Hills Choose Me
          </h2>
          <p className="text-xl text-slate mb-8 italic">
            Look, I'm not your typical "how does that make you feel" therapist. I specialize in one thing: helping San Diego couples survive affairs and come out stronger.
          </p>

          <div className="space-y-6 text-lg text-slate leading-relaxed">
            <p>
              Since 2008, I've had one focus: affair recovery. Not general couples therapy, not "communication issues" — the real, gut-wrenching work of rebuilding after betrayal. Whether you're a Navy family dealing with deployment infidelity or tech professionals navigating a workplace affair, I've seen your story. And I know how it can end well.
            </p>
            <p>
              I use what works: Gottman Method (the science stuff) plus Relational Life Therapy (the "let's get real" stuff). No fluff, no endless talking in circles. We'll deal with the crisis first, then figure out how you got here — without the blame game.
            </p>
            <p>
              Here's what I know after 15 years in San Diego: You can get through this. I've seen couples go from sleeping in separate rooms in their Encinitas home to renewing vows at Sunset Cliffs. It's not easy, but it's possible. And I'll be straight with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-deepTeal-600 mb-8">
            Education & Training
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-4">Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">Master's in Marriage & Family Therapy (trained right here in CA)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">California Licensed Since 2008 (License #47291)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">Gottman Method Couples Therapy Certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-turquoise-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">Relational Life Therapy Trained</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-deepTeal-600 mb-4">Specialized Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">Only do affair recovery — this is my thing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">Helped everyone from Coronado military to La Jolla executives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">Actually understand trauma (not just throw the word around)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-lime-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate">See you together, separately, whatever helps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-deepTeal-600 mb-4">
            My Philosophy on Healing
          </h2>
          <p className="text-xl text-slate mb-12">
            Beliefs that guide every session and every step of your journey
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Healing is Always Possible",
                text: "No matter how deep the betrayal, I've seen couples rebuild trust and create something beautiful from the ashes. Your relationship's future isn't determined by its past."
              },
              {
                title: "Safety First, Always",
                text: "Both partners need to feel emotionally and physically safe to do this work. Creating that safety is our first priority, and it's non-negotiable."
              },
              {
                title: "Growth Through Understanding",
                text: "Affairs don't happen in a vacuum. Understanding the 'why' isn't about blame—it's about preventing future betrayals and building resilience."
              },
              {
                title: "Both Partners Matter",
                text: "Whether you're the hurt partner or the partner who had the affair, your feelings and needs are valid. Healing requires both perspectives."
              },
              {
                title: "Healing Takes Time",
                text: "There's no rushing this process. I'll meet you where you are and move at the pace that feels right for your unique situation."
              },
              {
                title: "You Are Stronger Than You Know",
                text: "The courage to seek help, to face this pain, to work toward healing—that takes tremendous strength. I see that strength in every couple I work with."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-turquoise-500 pl-6">
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-2">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deepTeal-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-deepTeal-600 mb-4">
            Professional Credentials
          </h2>
          <p className="text-xl text-slate mb-12">
            Maintaining the highest standards through continued education and professional membership
          </p>

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
              <div key={index} className="bg-white/80 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-deepTeal-600 mb-2">{affiliation.org}</h3>
                <p className="text-turquoise-600 font-medium mb-2">{affiliation.role}</p>
                <p className="text-sm text-slate">{affiliation.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {["Licensed Professional", "Continuing Education", "Ethical Standards", "Professional Insurance"].map((indicator, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="w-8 h-8 text-turquoise-500 mx-auto mb-2" />
                <p className="text-sm text-slate">{indicator}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Affair Recovery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-deepTeal-600 mb-8">
            Why I Specialize in Affair Recovery
          </h2>

          <blockquote className="text-xl md:text-2xl text-slate italic mb-8 leading-relaxed">
            "Early in my career, I witnessed something that changed everything. A couple, devastated by betrayal, transformed their pain into the foundation for a love deeper than they'd ever known. That's when I knew this was my calling."
          </blockquote>

          <div className="space-y-6 text-lg text-slate leading-relaxed text-left">
            <p>
              I chose to specialize in affair recovery because I believe in the extraordinary resilience of the human heart. When couples ask me, "Can we survive this?" I tell them what I know to be true: not only can you survive, but you can create something more authentic and connected than what you had before.
            </p>
            <p>
              This work requires specialized training, deep empathy, and an unwavering belief in possibility. It's not the easiest path I could have chosen, but it's the most meaningful one I can imagine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-turquoise-600 mb-2">85%</div>
              <p className="text-sm text-slate">Report stronger relationships after completing our program</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-lime-600 mb-2">92%</div>
              <p className="text-sm text-slate">Would recommend our approach to other couples in crisis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-deepTeal-600 mb-2">6-18</div>
              <p className="text-sm text-slate">Average months healing timeline with dedicated commitment</p>
            </div>
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
