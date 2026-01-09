import type { Metadata } from 'next'
import Link from 'next/link'
import { Video, MapPin, Shield, Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'California Online Therapy Sessions | Telehealth Couples Counseling',
  description: 'Convenient online therapy sessions for California couples. Secure, HIPAA-compliant video sessions from the comfort of your home. Licensed LMFT providing evidence-based couples therapy throughout California.',
  keywords: ['online therapy California', 'telehealth couples counseling', 'virtual therapy San Diego', 'online marriage counseling CA', 'teletherapy California'],
  openGraph: {
    title: 'California Online Therapy Sessions',
    description: 'Secure online couples therapy sessions throughout California',
    images: [{
      url: '/og/og-default.png',
      width: 1200,
      height: 630,
      alt: 'California Online Therapy Sessions'
    }],
  },
}

const benefits = [
  {
    icon: Video,
    title: 'Secure Video Platform',
    description: 'HIPAA-compliant video sessions ensure your privacy and confidentiality'
  },
  {
    icon: MapPin,
    title: 'Statewide Access',
    description: 'Available to California residents throughout the state'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Evening and weekend appointments available for your convenience'
  },
  {
    icon: Shield,
    title: 'Licensed in California',
    description: 'Fully licensed LMFT with expertise in couples therapy'
  }
]

const requirements = [
  'Must be a California resident',
  'Stable internet connection required',
  'Private space for sessions recommended',
  'Both partners should attend together',
  'Video and audio capabilities needed'
]

export default function CaliforniaOnlineSessionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-turquoise-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-turquoise-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Telehealth Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6">
              California Online{' '}
              <span className="block text-5xl md:text-6xl lg:text-7xl font-normal italic bg-gradient-to-r from-lime-300 to-turquoise-300 bg-clip-text text-transparent mt-2">
                Therapy Sessions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 font-heading leading-relaxed">
              Quality couples therapy from the comfort and privacy of your home. Serving California residents throughout the state with secure, effective online sessions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Begin Your Healing
                </Link>
              </Button>
              <Button
                size="lg"
                variant="pill-outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                asChild
              >
                <Link href="/approach">
                  Learn About Our Approach
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
              Why Choose{' '}
              <span className="text-4xl md:text-5xl lg:text-6xl font-normal italic text-turquoise-600">
                Online Therapy
              </span>
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              Online therapy offers the same evidence-based treatment as in-person sessions, with added convenience and accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-lightGray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-turquoise-500 to-turquoise-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-deepTeal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-lightGray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-deepTeal text-center mb-12">
              How Online Sessions{' '}
              <span className="text-4xl md:text-5xl lg:text-6xl font-normal italic text-turquoise-600">
                Work
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-deepTeal text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-display font-medium text-deepTeal mb-3">
                  Schedule Your Session
                </h3>
                <p className="text-slate">
                  Book your appointment online at a time that works for both partners
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-turquoise-600 text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-display font-medium text-deepTeal mb-3">
                  Receive Secure Link
                </h3>
                <p className="text-slate">
                  Get a HIPAA-compliant video link sent to your email before your session
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-lime-500 text-white rounded-full flex items-center justify-center text-2xl font-display font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-display font-medium text-deepTeal mb-3">
                  Join From Home
                </h3>
                <p className="text-slate">
                  Connect from your private space and begin your healing journey
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-medium text-deepTeal mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-turquoise-600" />
                Requirements for Online Sessions
              </h3>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* California Licensing Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-turquoise-50 border-l-4 border-turquoise-500 rounded-r-xl p-6 mb-8">
              <h3 className="text-xl font-display font-medium text-deepTeal mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-turquoise-600" />
                Licensed Throughout California
              </h3>
              <p className="text-slate leading-relaxed">
                Jordan Zipkin is a fully licensed Marriage and Family Therapist (LMFT) in California. Online sessions are available to all California residents, ensuring you receive the same high-quality care regardless of your location within the state.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-display font-medium text-deepTeal mb-4">
                Privacy & Security
              </h3>
              <p className="text-slate mb-4 leading-relaxed">
                Your confidentiality is our top priority. All online sessions use HIPAA-compliant video platforms with end-to-end encryption. No session information is stored on third-party servers, and all communications remain completely confidential.
              </p>

              <h3 className="text-2xl font-display font-medium text-deepTeal mb-4 mt-8">
                Same Quality Care
              </h3>
              <p className="text-slate mb-4 leading-relaxed">
                Research shows that online therapy is just as effective as in-person treatment for couples. You'll receive the same evidence-based Gottman Method and Relational Life Therapy approaches, with all the tools and support you need to heal and rebuild trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-deepTeal-800 to-turquoise-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-6">
              Ready to Begin{' '}
              <span className="block text-4xl md:text-5xl lg:text-6xl font-normal italic bg-gradient-to-r from-lime-300 to-white bg-clip-text text-transparent mt-2">
                Your Journey?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Schedule your first online session today and take the first step toward healing and rebuilding trust.
            </p>
            <Button
              size="lg"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Begin Your Healing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
