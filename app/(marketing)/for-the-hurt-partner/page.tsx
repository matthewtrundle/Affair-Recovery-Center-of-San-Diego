import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeader } from '@/components/sections/PageHeader'
import { CheckCircle, Heart, Shield, Brain, Compass, MessageCircle, Lock, Sun } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = generateSEO({
  title: 'Healing After Infidelity | Support for the Hurt Partner (San Diego)',
  description: 'Compassionate support for the hurt partner after an affair. Calm emotions, get consistent answers, and rebuild safety. San Diego therapy; virtual across CA.',
  url: '/for-the-hurt-partner',
  type: 'article',
})

export default function HurtPartnerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I keep asking the same questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your brain is seeking safety; repetition helps rebuild it."
        }
      },
      {
        "@type": "Question",
        "name": "Is it normal to want to check their phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Reasonable transparency is often part of early trust rebuilding."
        }
      },
      {
        "@type": "Question",
        "name": "Should I tell friends or family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's often best to process in therapy first to reduce external pressure."
        }
      },
      {
        "@type": "Question",
        "name": "Will I ever stop feeling this angry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With tools to regulate emotions, the rollercoaster settles over time."
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

      <PageHeader
        badge="Support for the Hurt Partner"
        badgeIcon="heart"
        title="Healing After"
        titleHighlight="Infidelity"
        subtitle="Compassionate support to help you find calm, get answers, and rebuild safety"
        location="San Diego & Online Across California"
        variant="turquoise"
      />

      {/* Opening Statement */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl md:text-2xl text-slate leading-relaxed text-center">
            When your partner stepped outside the relationship, it shattered your sense of safety.
            You thought you knew who they were—now everything feels uncertain. The person you trusted
            most broke that trust, and the pain can feel unbearable.
          </p>
          <p className="text-2xl md:text-3xl text-deepTeal-700 font-medium text-center mt-8">
            You&apos;re not crazy. You&apos;re not broken. You&apos;re having a normal reaction to betrayal.
          </p>
        </div>
      </section>

      {/* Your Reactions Make Sense - With Image */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-lightGray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/sections/beach-sunset-cliffs.webp"
                alt="Peaceful sunset at San Diego cliffs - healing is possible"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
                Your Reactions Make Sense
              </h2>
              <div className="space-y-4 text-lg text-slate leading-relaxed">
                <p>
                  You&apos;re not &quot;crazy&quot; for checking their phone. You&apos;re not weak for asking the same
                  questions over and over. You&apos;re not wrong for staying—or for considering leaving.
                </p>
                <p>
                  Your brain is searching for safety. It&apos;s trying to make sense of what happened,
                  to find predictability in a world that suddenly feels chaotic.
                </p>
                <p className="font-medium text-deepTeal-700">
                  That search for safety is exactly what we&apos;ll rebuild together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Might Be Experiencing */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            What You Might Be Experiencing
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'Intrusive Thoughts',
                description: 'Images and questions that won\'t stop, especially at night',
              },
              {
                icon: Heart,
                title: 'Emotional Waves',
                description: 'Rage, grief, numbness, love—sometimes all in the same hour',
              },
              {
                icon: Shield,
                title: 'Hypervigilance',
                description: 'Constantly scanning for signs of another betrayal',
              },
              {
                icon: Compass,
                title: 'Lost Identity',
                description: 'Questioning everything you thought was true about your life',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-turquoise-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-turquoise-400 to-deepTeal-500 flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-deepTeal-600 mb-2">{item.title}</h3>
                  <p className="text-slate text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>

          <p className="text-lg text-slate text-center mt-10 max-w-3xl mx-auto">
            These are all normal responses to betrayal trauma. You&apos;re not falling apart—your
            nervous system is trying to protect you.
          </p>
        </div>
      </section>

      {/* How Therapy Helps You Heal */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
                How Therapy Helps You Heal
              </h2>
              <ul className="space-y-5 text-lg text-slate">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Find calm in the storm</strong> – Tools to manage overwhelming emotions and quiet the intrusive thoughts.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Get consistent, honest answers</strong> – A structured process for disclosure without guilt or defensiveness.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Set boundaries that work</strong> – Transparency measures that give you peace now and build trust for later.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Reclaim your confidence</strong> – Rebuild your sense of self, whether you stay or go.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-turquoise-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Make informed decisions</strong> – Clarity about what you need and what&apos;s possible for your relationship.</span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/sections/beach-zen-stones.webp"
                alt="Balanced zen stones representing peace and stability"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Healing Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deepTeal-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            The Healing Timeline
          </h2>

          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Crisis Stabilization',
                weeks: 'Weeks 1-4',
                description: 'We focus on safety, managing the emotional intensity, and establishing ground rules for communication.',
                icon: Shield,
              },
              {
                phase: 'Phase 2',
                title: 'Understanding & Processing',
                weeks: 'Weeks 5-12',
                description: 'Structured disclosure, processing the betrayal, and beginning to understand what happened and why.',
                icon: MessageCircle,
              },
              {
                phase: 'Phase 3',
                title: 'Rebuilding Trust',
                weeks: 'Weeks 13-20',
                description: 'Creating new patterns, rebuilding intimacy, and establishing accountability systems that work.',
                icon: Lock,
              },
              {
                phase: 'Phase 4',
                title: 'Integration & Growth',
                weeks: 'Ongoing',
                description: 'Moving forward together with stronger communication, deeper connection, and renewed hope.',
                icon: Sun,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white/80 rounded-2xl p-6 md:p-8 shadow-lg border border-turquoise-100">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-turquoise-400 to-deepTeal-500 flex items-center justify-center shadow-md flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="md:hidden">
                        <span className="text-turquoise-600 font-semibold text-sm">{item.phase}</span>
                        <h3 className="font-semibold text-deepTeal-600 text-lg">{item.title}</h3>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="hidden md:block">
                        <span className="text-turquoise-600 font-semibold text-sm">{item.phase}</span>
                        <h3 className="font-semibold text-deepTeal-600 text-xl mb-1">{item.title}</h3>
                      </div>
                      <p className="text-slate">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-deepTeal-500 font-medium bg-deepTeal-50 px-3 py-1 rounded-full">
                        {item.weeks}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            Common Questions from Hurt Partners
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Why do I keep asking the same questions?',
                answer: 'Because repetition is how your brain rebuilds safety. Each time you get a consistent answer, your nervous system calms a little more. This is normal and will decrease over time as trust rebuilds.',
              },
              {
                question: 'Is it normal to want to check their phone?',
                answer: 'Yes. In the early phases of recovery, reasonable transparency is part of rebuilding trust. We\'ll help you establish boundaries that work for both of you—ones that give you peace without becoming controlling.',
              },
              {
                question: 'Should I tell friends or family?',
                answer: 'It\'s usually best to process the initial crisis in therapy first. Outside voices—even well-meaning ones—often add pressure and can make things harder. We\'ll help you decide who to tell and when.',
              },
              {
                question: 'Will I ever stop feeling this angry?',
                answer: 'Yes. The emotional rollercoaster settles over time, especially with tools to regulate your nervous system. Anger is a normal part of grief—and betrayal is a profound loss. You won\'t feel this way forever.',
              },
              {
                question: 'What if I can\'t forgive?',
                answer: 'Forgiveness isn\'t required for healing. Our focus is on helping you make the decision that\'s right for you—whether that\'s rebuilding together or moving forward separately with clarity and peace.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-lightGray-50 rounded-xl p-6 border border-turquoise-100">
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  {item.question}
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-turquoise-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white/80 rounded-2xl p-8 md:p-12 shadow-lg border border-turquoise-100">
            <h2 className="font-heading text-2xl md:text-3xl text-deepTeal-600 mb-6 text-center">
              You Don&apos;t Have to Do This Alone
            </h2>
            <p className="text-xl text-slate leading-relaxed mb-6 text-center">
              The path through betrayal is hard. But with the right support, you can find clarity,
              regain your sense of self, and make decisions from a place of strength rather than pain.
            </p>
            <p className="text-lg text-deepTeal-700 font-medium text-center">
              Whether you want to repair your relationship or move forward on your own,
              I&apos;ll help you get there with your dignity intact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Start Healing Today"
        description="You don't have to live in constant doubt. Take the first step toward clarity, calm, and connection."
        buttonText="Begin Your Healing"
        buttonHref="/contact"
      />
    </>
  )
}
