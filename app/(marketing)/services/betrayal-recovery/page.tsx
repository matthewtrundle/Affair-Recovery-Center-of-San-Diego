import { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/sections/PageHeader'
import { CTABand } from '@/components/sections/CTABand'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Heart, Brain, Calendar, Clock, Target } from 'lucide-react'
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Betrayal Recovery Services',
  description: 'Specialized couples therapy for affair recovery and rebuilding trust. Evidence-based treatment using Gottman Method and Relational Life Therapy in San Diego.',
  keywords: ['affair recovery therapy', 'infidelity counseling San Diego', 'betrayal trauma treatment', 'couples therapy after affair'],
  url: '/services/betrayal-recovery',
})

export default function BetrayalRecoveryPage() {
  return (
    <>
      {/* Structured Data */}
      {generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Betrayal Recovery', url: '/services/betrayal-recovery' },
      ])}

      <PageHeader
        badge="Betrayal Recovery Therapy"
        badgeIcon={Heart}
        title="Affair Recovery for"
        titleHighlight="San Diego Couples"
        subtitle="Whether you're in Coronado or Carlsbad, I've helped hundreds of local couples move from discovery day devastation to actually trusting again. It's possible. I've seen it happen."
        variant="turquoise"
      />

      {/* Who This Is For */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-8 text-center">
              Is This You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-lightGray-50 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-navy mb-4">
                  If You Just Found Out
                </h3>
                <p className="text-slate mb-4">
                  Can't sleep? Can't eat? Checking their phone constantly? Yeah, I know.
                  Your whole world just got flipped. Maybe you discovered it during deployment,
                  or found texts after that "work trip to Phoenix." You need someone who gets it.
                </p>
                <ul className="space-y-2 text-slate">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                    <span>Process trauma responses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rebuild sense of safety</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                    <span>Make informed decisions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-lightGray-50 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-navy mb-4">
                  If You Had the Affair
                </h3>
                <p className="text-slate mb-4">
                  You messed up. You know it. Now you're watching the person you love
                  fall apart and you'd do anything to fix it. The guilt's crushing.
                  But here's the thing — if you're really ready to do the work, we can rebuild this.
                </p>
                <ul className="space-y-2 text-slate">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                    <span>Understand your choices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                    <span>Develop empathy skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rebuild trustworthiness</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-lime-50 rounded-lg p-6 text-center">
              <p className="text-slate">
                <strong>Real talk:</strong> This only works if you're both in. Not 50-50 —
                we need 100-100. The good news? Most couples who commit to the process
                tell me they end up closer than they were before everything went sideways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sessions Look Like */}
      <section className="py-16 lg:py-20 bg-lightGray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-8 text-center">
              What Actually Happens in My Office
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">
                  First Month: Stopping the Bleeding
                </h3>
                <p className="text-slate mb-4">
                  First, we gotta calm things down. You can't rebuild while the house is still on fire:
                </p>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Figure out where you both are (and if anyone's about to lawyer up)
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Set ground rules (like no contact with the third party — yes, that means blocking them)
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Manage intense emotions and trauma responses
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Decide how much detail to share (spoiler: there's a right way to do this)
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Help you understand why your brain feels broken right now
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">
                  Months 2-4: Understanding the Why
                </h3>
                <p className="text-slate mb-4">
                  Now we dig deeper (but with care — this isn't about blame):
                </p>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Explore factors that led to the affair
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Process emotions in a structured way
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Develop empathy and understanding
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Learn new communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Begin trust-building exercises
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">
                  Months 4+: Building Something Better
                </h3>
                <p className="text-slate mb-4">
                  This is where it gets good — creating version 2.0 of your relationship:
                </p>
                <ul className="space-y-3 text-slate">
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Rebuild intimacy and connection
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Create new relationship agreements
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Develop a shared vision for the future
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Process forgiveness (if chosen)
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-2">•</span>
                    Plan for ongoing relationship maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Components */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-8 text-center">
              How We'll Work Together
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-turquoise-100 text-sage mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  Gottman Method
                </h3>
                <p className="text-slate">
                  The science-backed stuff that actually works. Think of it as a GPS
                  for getting out of this mess — tested on thousands of couples just like you.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-turquoise-100 text-sage mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  Relational Life Therapy
                </h3>
                <p className="text-slate">
                  We'll be real with each other — no dancing around the hard stuff.
                  This approach gets to the heart of why this happened and how to prevent it.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-turquoise-100 text-sage mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  Trauma-Informed Care
                </h3>
                <p className="text-slate">
                  Your brain's in survival mode right now. I'll teach you why you
                  can't stop checking their location and how to calm your nervous system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-16 lg:py-20 bg-lightGray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-8 text-center">
              The Logistics (Because Your Brain Needs Structure Right Now)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Clock className="h-8 w-8 text-sage mb-4" />
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  How We Meet
                </h3>
                <ul className="space-y-2 text-slate">
                  <li>• 60 minutes (75 for first session)</li>
                  <li>• Weekly at first (yes, you need it)</li>
                  <li>• Homework that won't feel like homework</li>
                  <li>• Check-ins every 6 weeks ("Are we getting somewhere?")</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <Target className="h-8 w-8 text-sage mb-4" />
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  What We're Working Toward
                </h3>
                <ul className="space-y-2 text-slate">
                  <li>• Stop the emotional bleeding</li>
                  <li>• Actually trust again (yes, it's possible)</li>
                  <li>• Talk without it turning into World War 3</li>
                  <li>• Feel closer than you did before (seriously)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-heading font-semibold text-navy mb-4">
                Your Homework (The Stuff That Actually Helps)
              </h3>
              <p className="text-slate mb-4">
                The real work happens at home — in your Scripps Ranch kitchen or
                walking Fiesta Island. I'll give you:
              </p>
              <ul className="space-y-2 text-slate">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                  <span>Specific exercises to practice at home</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reading materials and resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                  <span>Structured conversations to have together</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sage mr-2 flex-shrink-0 mt-0.5" />
                  <span>Individual reflection assignments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to stop feeling like this?"
        description="Let's talk. Free 15-minute call to see if we're a good fit. No pressure, just real conversation."
        buttonText="Book Your Free Call"
        buttonHref="/contact"
      />
    </>
  )
}