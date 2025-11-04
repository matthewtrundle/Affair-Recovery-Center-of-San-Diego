import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'FAQ | Affair Recovery Therapy Questions Answered',
  description: 'Common questions about affair recovery therapy, costs, timeline, and what to expect. Get answers about healing from infidelity.',
  keywords: ['affair recovery questions', 'infidelity therapy faq', 'couples therapy cost san diego', 'how long does affair recovery take'],
  url: '/faq',
})

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is staying together the right choice after an affair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only you can decide. Therapy provides clarity and structure for that decision."
        }
      },
      {
        "@type": "Question",
        "name": "Should I ask every detail about the affair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graphic details add pain. Focus on the 'why' and how change will last."
        }
      },
      {
        "@type": "Question",
        "name": "Can trust really be rebuilt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With honesty, patience, and guided support, many couples become stronger."
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-lime-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6">
            Infidelity Recovery Therapy – FAQs
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            Common questions answered with clarity and compassion.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* About Recovery Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              About the Recovery Process
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Can our relationship really recover from an affair?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  Yes—and many couples emerge stronger. Real talk: about 60% of couples who commit to the process recover and rebuild. The other 40% either realize they're incompatible or one partner isn't willing to do the work. My job is to help you figure out which path is right for you, with honesty and without judgment.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  Recovery isn't just about &quot;getting back to normal.&quot; It's about building something better—a relationship with deeper trust, better communication, and real intimacy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  How long does betrayal recovery therapy take?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  Most San Diego couples I work with benefit from 12-20 sessions over 6-12 months. The first 4-6 sessions focus on crisis stabilization—stopping the bleeding, so to speak. Then we move into deeper work on understanding what happened and rebuilding trust.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  Some couples benefit from ongoing maintenance sessions after intensive work. Think of it like physical therapy: the acute phase has an endpoint, but staying strong requires continued attention.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  What if my partner isn't ready for therapy?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  That's common. The partner who had the affair is often dealing with shame, fear, or defensiveness. Or maybe they're deployed, in denial, or just scared. I get it.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  You can start with individual therapy to process trauma and develop coping skills. Many times, when the hurt partner starts healing on their own, the other partner becomes more willing to engage. I also offer discernment counseling to help couples decide whether to commit to recovery work or move toward separation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  What does a typical therapy session look like?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  Sessions are 60 minutes for couples (75 minutes for the initial session). We typically meet weekly in the beginning, then space out to bi-weekly as you stabilize.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  Each session has structure but stays flexible to what's urgent. We might work on communication skills, process difficult emotions, review homework from the previous week, or address a recent crisis. I use evidence-based techniques from Gottman Method and Relational Life Therapy—no vague &quot;how does that make you feel&quot; stuff. We work on concrete skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Will we need individual therapy too?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  Often, yes. Individual sessions help process trauma, work on personal issues that contributed to the crisis, and develop coping skills. I coordinate individual and couples work to ensure they support rather than conflict with each other. Many clients benefit from both modalities running in parallel or alternating.
                </p>
              </div>
            </div>
          </div>

          {/* Affair Recovery Specific */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Affair Recovery Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Should I ask every detail about the affair?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  Graphic sexual details usually add more pain than clarity. What matters more is understanding the &quot;why&quot;—what was missing, what vulnerabilities existed, how the affair served a function in your partner's life.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  That said, the betrayed partner needs enough information to feel they know the truth. We'll work together to figure out what questions actually help you heal versus which ones keep you stuck in obsessive loops. There's a balance, and I'll help you find it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  How do we handle the emotional explosions?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  First, those explosions are normal trauma responses. Your nervous system is in overdrive trying to protect you. Crying, yelling, the silent treatment—I've seen it all, and none of it shocks me.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  In therapy, we'll learn practical regulation skills: breathing techniques, grounding exercises, how to take timeouts effectively. I also teach the unfaithful partner how to stay present during your pain instead of getting defensive or shutting down. That's often the hardest but most important work.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  What about &quot;once a cheater, always a cheater&quot;?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  That's a myth that ignores human capacity for growth. Some people do repeat patterns—but many don't, especially when they understand why it happened and do the deep work to change. Research and my 15+ years of experience show that when both partners commit to therapy and the unfaithful partner addresses underlying issues, recurrence rates drop significantly. The question isn't whether people can change; it's whether this person is willing to change.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Can trust really be rebuilt?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  Yes—with transparency, consistency, and time. Trust isn't rebuilt overnight. It's rebuilt through hundreds of small moments: answering the phone when you say you will, being where you say you'll be, responding to questions with patience instead of defensiveness.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  We use structured protocols from the Gottman Institute to rebuild trust systematically. This isn't about blind faith—it's about earned trust through demonstrated change over time.
                </p>
              </div>
            </div>
          </div>

          {/* Logistics & Practical Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Logistics & Scheduling
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Where is your office located?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  I'm located in Carmel Valley, easily accessible from I-5 and I-805. Convenient parking available. I also offer virtual sessions for clients throughout California, which has been particularly helpful for military families during deployments or for busy professionals in Downtown, La Jolla, or North Park who prefer telehealth.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Do you offer virtual/telehealth sessions?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  Yes. Many San Diego couples prefer virtual sessions for privacy, convenience, or during times when meeting in person is difficult. Virtual sessions are just as effective as in-person for most couples, and they eliminate commute time from your busy schedule.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  How soon can we start after discovering the affair?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  The sooner, the better. While emotions are intense immediately after discovery, early intervention prevents additional trauma and destructive patterns from taking hold. I specialize in crisis stabilization and can help you navigate this critical period safely. I typically have availability within 1-2 weeks for new clients in crisis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  What's your cancellation policy?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  I require 24 hours notice for cancellations. Late cancellations or no-shows are charged the full session fee. I understand emergencies happen—military families dealing with sudden deployments, for example—and I work with clients on a case-by-case basis when life throws curveballs.
                </p>
              </div>
            </div>
          </div>

          {/* Insurance & Payment */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Insurance & Payment
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  How much does therapy cost?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  <strong>Couples therapy:</strong> $180 per 60-minute session<br />
                  <strong>Individual sessions:</strong> $150 per 50-minute session<br />
                  <strong>Intensive weekends:</strong> $1,800 (12-16 hours over two days)
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  The first session is slightly longer (75 minutes) to allow for comprehensive assessment. Payment plans are available for clients who need them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Do you take insurance?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  I accept select insurance plans and provide superbills for out-of-network reimbursement. Many insurance plans cover therapy for relationship issues when there's a mental health component (like depression, anxiety, or PTSD from betrayal trauma).
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  I'm happy to discuss payment options and help you understand your benefits during our consultation. For military families, Tricare and other military insurance options may apply.
                </p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div>
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Getting Started
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Will you take sides?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  No. My job isn't to be a judge or take sides. I'm here to help both of you understand what happened, process the pain, and figure out whether and how to move forward. The betrayed partner deserves validation and support. The unfaithful partner needs accountability and help changing. Both of those things can be true at once.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  What about secrets and confidentiality?
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  In couples therapy, I operate with a &quot;no secrets&quot; policy. If one partner tells me something in an individual session that affects the relationship, we'll work together on how and when to share it with their partner. This protects the therapy from becoming a repository for more secrets.
                </p>
                <p className="text-lg text-slate leading-relaxed">
                  Everything discussed in therapy is confidential under HIPAA and California law. Your business stays your business. The only exceptions are if there's imminent danger to self or others, child abuse, or elder abuse—situations where I'm legally required to report.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Why did you specialize in affair recovery?
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  After years of general couples therapy, I realized affair recovery required specialized training and a different approach. Too many therapists treat infidelity like any other relationship issue—it's not. It's trauma. I pursued advanced training in Gottman Method for affair recovery, Relational Life Therapy, and trauma treatment because couples in crisis deserve more than generic advice. Here in San Diego, with our unique mix of military families, tech professionals, and diverse communities, that specialization matters even more.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Have More Questions?"
        description="Schedule a free consultation to discuss your specific situation."
        buttonText="Let's Talk"
        buttonHref="/schedule"
      />
    </>
  )
}
