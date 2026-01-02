import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeader } from '@/components/sections/PageHeader'
import { CheckCircle, Heart, Shield, MessageCircle, RefreshCw, Eye, HandHeart, Lightbulb } from 'lucide-react'
import Image from 'next/image'

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

      <PageHeader
        badge="A Path to Redemption"
        badgeIcon="refresh"
        title="Therapy for the Partner Who"
        titleHighlight="Strayed"
        subtitle="Learn to show up with patience, honesty, and the consistent actions that rebuild trust"
        location="San Diego & Online Across California"
        variant="lime"
      />

      {/* Opening Statement */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl md:text-2xl text-slate leading-relaxed text-center">
            If you stepped outside the relationship, the shame can feel crushing. You want to fix
            things, but every question feels like a trap. You don&apos;t know how to explain what happened—or
            how to prove it won&apos;t happen again.
          </p>
          <p className="text-2xl md:text-3xl text-deepTeal-700 font-medium text-center mt-8">
            You made a devastating choice. But that doesn&apos;t mean you&apos;re beyond redemption.
          </p>
        </div>
      </section>

      {/* Shame Isn't the End - With Image */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-lightGray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-6">
                Shame Isn&apos;t the End of the Story
              </h2>
              <div className="space-y-4 text-lg text-slate leading-relaxed">
                <p>
                  Right now, you might feel like the worst person in the world. You see your partner&apos;s
                  pain and know you caused it. The guilt is overwhelming.
                </p>
                <p>
                  But hiding behind shame doesn&apos;t help your partner heal—it leaves them alone with
                  their questions. Shutting down when they need answers only makes things worse.
                </p>
                <p className="font-medium text-deepTeal-700">
                  Real change requires facing what you did, understanding why, and showing through
                  consistent actions that you&apos;re committed to being different.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/sections/beach-torrey-pines.webp"
                alt="Torrey Pines coastal view - a new path forward"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Might Be Feeling */}
      <section className="py-16 md:py-24 bg-lightGray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            What You Might Be Feeling
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Overwhelming Shame',
                description: 'Feeling like a terrible person who doesn\'t deserve forgiveness',
              },
              {
                icon: MessageCircle,
                title: 'Frustration',
                description: 'Exhausted by the same questions and accusations, again and again',
              },
              {
                icon: Lightbulb,
                title: 'Confusion',
                description: 'Not fully understanding why you did what you did',
              },
              {
                icon: Heart,
                title: 'Grief',
                description: 'Mourning the relationship you had and the trust you broke',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-lime-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400 to-olive-500 flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-deepTeal-600 mb-2">{item.title}</h3>
                  <p className="text-slate text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>

          <p className="text-lg text-slate text-center mt-10 max-w-3xl mx-auto">
            These feelings are part of the process. The question isn&apos;t whether you feel bad—it&apos;s
            what you do with that discomfort.
          </p>
        </div>
      </section>

      {/* How Therapy Helps You Show Up */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl order-2 md:order-1">
              <Image
                src="/images/sections/beach-la-jolla-cove.webp"
                alt="La Jolla Cove - calm waters and new beginnings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-8">
                How Therapy Helps You Show Up
              </h2>
              <ul className="space-y-5 text-lg text-slate">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Answer with patience</strong> – Learn to respond to repeated questions with empathy, not frustration.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Share the truth</strong> – Structured disclosure that&apos;s honest without being harmful.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Understand your patterns</strong> – Discover the vulnerabilities that led to your choices, so you never repeat them.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Rebuild connection</strong> – Move beyond just managing the crisis to restoring real intimacy.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-lime-500 mr-4 flex-shrink-0 mt-1" />
                  <span><strong>Restore lightness</strong> – Bring back friendship and joy, so your relationship isn&apos;t only about pain.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Partner Needs From You */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-lime-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl text-deepTeal-600 mb-12 text-center">
            What Your Partner Needs From You
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: Eye,
                title: 'Full Transparency',
                description: 'Open access to devices, schedules, and whereabouts—not because you\'re being controlled, but because you\'re proving you have nothing to hide.',
              },
              {
                icon: RefreshCw,
                title: 'Consistent Patience',
                description: 'The ability to answer the same questions again and again without getting defensive or frustrated. Each consistent answer helps rebuild safety.',
              },
              {
                icon: HandHeart,
                title: 'Genuine Remorse',
                description: 'Not just "I\'m sorry" but demonstrating that you truly understand the impact of what you did—and that you\'re committed to change.',
              },
              {
                icon: Shield,
                title: 'Accountability Without Excuses',
                description: 'Taking full responsibility without blaming your partner, the affair partner, or circumstances. Your choices were your own.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white/80 rounded-2xl p-6 md:p-8 shadow-lg border border-lime-100">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400 to-olive-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-deepTeal-600 text-xl mb-2">{item.title}</h3>
                      <p className="text-slate">{item.description}</p>
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
            Common Questions from Partners Who Strayed
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Why do I feel too ashamed to talk about it?',
                answer: 'Shame is a natural response to hurting someone you love. But staying silent keeps your partner in the dark and blocks healing. Therapy provides a safe, guided space to open up—where you can be honest without being attacked, and where your partner can get the answers they need.',
              },
              {
                question: 'How do I answer the same questions over and over?',
                answer: 'With patience and understanding that each time your partner asks, they\'re trying to feel safe. We\'ll coach you on responding consistently and empathetically, understanding that repetition is part of how their brain processes trauma.',
              },
              {
                question: 'Can we ever have fun again?',
                answer: 'Yes—and this is actually important. Recovery isn\'t just about processing pain; it\'s about rebuilding the friendship and joy that make a relationship worth having. We\'ll help you restore lightness while still doing the serious work.',
              },
              {
                question: 'What if I don\'t know why I did it?',
                answer: 'That\'s common and honest. Many people struggle to understand their own choices. Therapy helps you explore the underlying patterns, unmet needs, and vulnerabilities that created the conditions for infidelity—so you can address root causes, not just symptoms.',
              },
              {
                question: 'Will my partner ever trust me again?',
                answer: 'Trust can be rebuilt, but it takes time and consistent action. It\'s not about grand gestures—it\'s about showing up every day, being transparent, and proving through hundreds of small moments that you\'re committed to change.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-lightGray-50 rounded-xl p-6 border border-lime-100">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-lime-50 to-lightGray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white/80 rounded-2xl p-8 md:p-12 shadow-lg border border-lime-100">
            <h2 className="font-heading text-2xl md:text-3xl text-deepTeal-600 mb-6 text-center">
              Change is Possible
            </h2>
            <p className="text-xl text-slate leading-relaxed mb-6 text-center">
              You can&apos;t undo what happened. But you can choose who you become from here.
              With the right guidance, you can understand your patterns, repair the damage,
              and build something stronger than what you had before.
            </p>
            <p className="text-lg text-deepTeal-700 font-medium text-center">
              The path forward requires honesty, patience, and commitment—but couples do
              come through this. Your relationship isn&apos;t necessarily over.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Take Responsibility, Start Healing"
        description="The first step toward rebuilding trust is showing up. Take that step today."
        buttonText="Begin Your Healing"
        buttonHref="/contact"
      />
    </>
  )
}
