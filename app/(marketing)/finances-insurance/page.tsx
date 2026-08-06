import { Metadata } from 'next'
import Link from 'next/link'
import {
  Video,
  Users,
  MapPin,
  Heart,
  CreditCard,
  Banknote,
  ShieldCheck,
  FileText,
  CalendarX,
  Phone,
  CheckCircle2,
} from 'lucide-react'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = generateSEO({
  title: 'Finances & Insurance | Therapy Rates and Reimbursement',
  description:
    'Session rates, accepted forms of payment, insurance and superbill reimbursement, and the cancellation policy for affair recovery therapy in San Diego.',
  keywords: [
    'therapy rates san diego',
    'couples therapy cost san diego',
    'out of network therapy reimbursement',
    'superbill therapy san diego',
    'affair recovery therapy fees',
  ],
  url: '/finances-insurance',
})

const rates = [
  {
    icon: Video,
    label: 'Online Sessions for Men',
    price: '$225',
  },
  {
    icon: Users,
    label: 'Online Sessions for Couples',
    price: '$250',
  },
  {
    icon: MapPin,
    label: 'In-Person Sessions for Men',
    price: '$245',
  },
  {
    icon: Heart,
    label: 'In-Person Sessions for Couples',
    price: '$270',
  },
]

const paymentMethods = [
  {
    icon: CreditCard,
    title: 'Credit & Debit',
    description: 'Kept securely on file and charged at the time of service.',
  },
  {
    icon: Banknote,
    title: 'Cash',
    description: 'Welcome as well—please bring exact change.',
  },
  {
    icon: ShieldCheck,
    title: 'HSA & FSA',
    description: 'Most health savings and flexible spending cards are accepted.',
  },
]

const insuranceQuestions = [
  'Do I have out-of-network mental health benefits?',
  'What is my deductible, and has it been met this year?',
  'How many sessions per year does my plan cover?',
  'What percentage of the fee is reimbursed for CPT code 90837 (individual) or 90847 (couples)?',
  'Is prior authorization required from my primary care physician?',
  'How do I submit a superbill for reimbursement, and how long does it take?',
]

export default function FinancesInsurancePage() {
  return (
    <>
      <PageHeader
        badge="Rates & Insurance"
        badgeIcon="sparkles"
        title="Finances &"
        titleHighlight="Insurance"
        subtitle="Clear, upfront information about what therapy costs, how payment works, and what you can expect from your insurance."
        variant="turquoise"
      />

      {/* Rates */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-light text-deepTeal mb-4">
              Session{' '}
              <span className="text-4xl md:text-5xl font-normal italic text-turquoise-600">
                Rates
              </span>
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              Every session is 50 minutes. Payment is due at the time of service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {rates.map((rate) => {
              const Icon = rate.icon
              return (
                <div
                  key={rate.label}
                  className="bg-lightGray-50 rounded-2xl p-6 flex items-center gap-5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-turquoise-500 to-turquoise-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-display text-deepTeal-700">
                      {rate.price}
                    </p>
                    <p className="text-slate">{rate.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-slate mt-10 leading-relaxed">
            If finances are a concern, please reach out. A limited number of
            reduced-fee spots and session packages are available, and it is
            always worth a conversation before you rule therapy out.
          </p>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-16 md:py-20 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
            Forms of Payment
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div
                  key={method.title}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-olive-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-deepTeal mb-2">
                    {method.title}
                  </h3>
                  <p className="text-slate leading-relaxed">
                    {method.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
            Do You Take Insurance?
          </h2>

          <div className="space-y-5 text-lg text-slate leading-relaxed">
            <p>
              We do not take insurance, but there is a possibility that your
              insurance provider will reimburse you for part of the cost of our
              sessions.
            </p>
            <p>
              Insurance companies require therapists to assign a diagnosis code
              that becomes part of your permanent medical record. Some people
              are understandably uncomfortable with that and with the impact it
              could have on them down the road. Insurers also often require
              information about what happens in session in order to justify
              payment, and they can put limits on how many sessions they will
              allow before they stop paying.
            </p>
            <p>
              Because of those stipulations, we work with clients on a self-pay
              basis only. We do not bill insurance directly, so nothing about
              your care is sent to an insurer by us, and the two of us decide
              together exactly how long we work together—without outside
              influence or pressure.
            </p>
            <p>
              One important caveat: if you choose to submit a superbill for
              reimbursement, you are the one making a claim, and your insurer
              will require a diagnosis and may request additional information
              about your treatment. Staying fully out of the insurance system
              means not filing a claim at all. That choice is entirely yours,
              and we are glad to talk through the tradeoffs.
            </p>
          </div>
        </div>
      </section>

      {/* Superbills */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-turquoise-300 px-4 py-2 rounded-full text-sm font-body font-medium mb-6 border border-white/10">
            <FileText className="w-4 h-4" />
            Out-of-Network Reimbursement
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-6">
            Superbills
          </h2>

          <div className="space-y-5 text-lg text-white/90 leading-relaxed">
            <p>
              We can provide you with a superbill—a receipt with the basic
              information that, when presented to your insurance provider, can
              result in their reimbursing you for a portion of the
              psychotherapy fees.
            </p>
            <p>Please know that:</p>
          </div>

          <ul className="mt-6 space-y-4">
            {[
              'A good portion of our clients are reimbursed between 30–50% of our fee.',
              'Being reimbursed for our full fee is rare.',
              'Some of our clients do not receive any reimbursement.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-lime-400 mt-1 shrink-0" />
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-white/70 leading-relaxed">
            Reimbursement is determined entirely by your plan, so it is worth
            calling your insurer before we begin to find out where you stand.
          </p>
        </div>
      </section>

      {/* Questions to ask your insurer */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display text-deepTeal-700 mb-4 pb-4 border-b-2 border-turquoise-200">
            Questions to Ask Your Insurance Provider
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-8">
            Call the member services number on the back of your card and ask:
          </p>

          <ul className="grid sm:grid-cols-2 gap-4">
            {insuranceQuestions.map((question) => (
              <li
                key={question}
                className="bg-lightGray-50 rounded-xl p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-turquoise-500 mt-0.5 shrink-0" />
                <span className="text-slate leading-relaxed">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cancellation policy + Good Faith Estimate */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-turquoise-500 to-turquoise-600 rounded-xl flex items-center justify-center mb-5">
              <CalendarX className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-display text-deepTeal-700 mb-4">
              Cancellation Policy
            </h2>
            <p className="text-slate leading-relaxed">
              Please cancel or reschedule your appointment with at least 24
              hours notice. With less than 24 hours notice, you will be charged
              for the session. Life happens—military deployments, emergencies,
              sick kids—and those situations are handled case by case.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-olive-500 rounded-xl flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-display text-deepTeal-700 mb-4">
              Good Faith Estimate
            </h2>
            <p className="text-slate leading-relaxed">
              Under the No Surprises Act, clients who are not using insurance
              have the right to a Good Faith Estimate of what their care will
              cost. That right applies when you request an estimate or schedule
              a session at least three business days in advance. As a matter of
              practice, we provide one in writing before we begin, and you can
              request an updated estimate at any point in our work together.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-display font-light text-deepTeal mb-4">
            Still Have Questions About Cost?
          </h2>
          <p className="text-lg text-slate leading-relaxed mb-8">
            The free 15-minute phone consultation is a good place to ask them.
            No pressure, no obligation—just a straight answer about whether this
            work makes sense for you right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+16198810593">
                <Phone className="w-5 h-5 mr-2" />
                (619) 881-0593
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready When You Are"
        description="Reach out to talk through your situation and find out what working together would look like."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </>
  )
}
