import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'
import { PageHeader } from '@/components/sections/PageHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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

      <PageHeader
        badge="Questions Answered"
        badgeIcon="help"
        title="Infidelity Recovery Therapy"
        titleHighlight="FAQs"
        subtitle="Common questions answered with clarity and compassion."
        variant="lime"
      />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* About Recovery Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              About the Recovery Process
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="recovery-1">
                <AccordionTrigger>
                  Can our relationship really recover from an affair?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Yes—and many couples emerge stronger. Real talk: about 60% of couples who commit to the process recover and rebuild. The other 40% either realize they're incompatible or one partner isn't willing to do the work. My job is to help you figure out which path is right for you, with honesty and without judgment.
                  </p>
                  <p>
                    Recovery isn't just about "getting back to normal." It's about building something better—a relationship with deeper trust, better communication, and real intimacy.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recovery-2">
                <AccordionTrigger>
                  How long does betrayal recovery therapy take?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Most San Diego couples I work with benefit from 12-20 sessions over 6-12 months. The first 4-6 sessions focus on crisis stabilization—stopping the bleeding, so to speak. Then we move into deeper work on understanding what happened and rebuilding trust.
                  </p>
                  <p>
                    Some couples benefit from ongoing maintenance sessions after intensive work. Think of it like physical therapy: the acute phase has an endpoint, but staying strong requires continued attention.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recovery-3">
                <AccordionTrigger>
                  What if my partner isn't ready for therapy?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    That's common. The partner who had the affair is often dealing with shame, fear, or defensiveness. Or maybe they're deployed, in denial, or just scared. I get it.
                  </p>
                  <p>
                    You can start with individual therapy to process trauma and develop coping skills. Many times, when the hurt partner starts healing on their own, the other partner becomes more willing to engage. I also offer discernment counseling to help couples decide whether to commit to recovery work or move toward separation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recovery-4">
                <AccordionTrigger>
                  What does a typical therapy session look like?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Sessions are 60 minutes for couples (75 minutes for the initial session). We typically meet weekly in the beginning, then space out to bi-weekly as you stabilize.
                  </p>
                  <p>
                    Each session has structure but stays flexible to what's urgent. We might work on communication skills, process difficult emotions, review homework from the previous week, or address a recent crisis. I use evidence-based techniques from Gottman Method and Relational Life Therapy—no vague "how does that make you feel" stuff. We work on concrete skills.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recovery-5">
                <AccordionTrigger>
                  Will we need individual therapy too?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Often, yes. Individual sessions help process trauma, work on personal issues that contributed to the crisis, and develop coping skills. I coordinate individual and couples work to ensure they support rather than conflict with each other. Many clients benefit from both modalities running in parallel or alternating.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Affair Recovery Specific */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Affair Recovery Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="affair-1">
                <AccordionTrigger>
                  Should I ask every detail about the affair?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Graphic sexual details usually add more pain than clarity. What matters more is understanding the "why"—what was missing, what vulnerabilities existed, how the affair served a function in your partner's life.
                  </p>
                  <p>
                    That said, the betrayed partner needs enough information to feel they know the truth. We'll work together to figure out what questions actually help you heal versus which ones keep you stuck in obsessive loops. There's a balance, and I'll help you find it.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="affair-2">
                <AccordionTrigger>
                  How do we handle the emotional explosions?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    First, those explosions are normal trauma responses. Your nervous system is in overdrive trying to protect you. Crying, yelling, the silent treatment—I've seen it all, and none of it shocks me.
                  </p>
                  <p>
                    In therapy, we'll learn practical regulation skills: breathing techniques, grounding exercises, how to take timeouts effectively. I also teach the unfaithful partner how to stay present during your pain instead of getting defensive or shutting down. That's often the hardest but most important work.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="affair-3">
                <AccordionTrigger>
                  What about "once a cheater, always a cheater"?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    That's a myth that ignores human capacity for growth. Some people do repeat patterns—but many don't, especially when they understand why it happened and do the deep work to change. Research and my 15+ years of experience show that when both partners commit to therapy and the unfaithful partner addresses underlying issues, recurrence rates drop significantly. The question isn't whether people can change; it's whether this person is willing to change.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="affair-4">
                <AccordionTrigger>
                  Can trust really be rebuilt?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    Yes—with transparency, consistency, and time. Trust isn't rebuilt overnight. It's rebuilt through hundreds of small moments: answering the phone when you say you will, being where you say you'll be, responding to questions with patience instead of defensiveness.
                  </p>
                  <p>
                    We use structured protocols from the Gottman Institute to rebuild trust systematically. This isn't about blind faith—it's about earned trust through demonstrated change over time.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Logistics & Practical Questions */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Logistics & Scheduling
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="logistics-1">
                <AccordionTrigger>
                  Where is your office located?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    I'm located in Carmel Valley, easily accessible from I-5 and I-805. Convenient parking available. I also offer virtual sessions for clients throughout California, which has been particularly helpful for military families during deployments or for busy professionals in Downtown, La Jolla, or North Park who prefer telehealth.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="logistics-2">
                <AccordionTrigger>
                  Do you offer virtual/telehealth sessions?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes. Many San Diego couples prefer virtual sessions for privacy, convenience, or during times when meeting in person is difficult. Virtual sessions are just as effective as in-person for most couples, and they eliminate commute time from your busy schedule.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="logistics-3">
                <AccordionTrigger>
                  How soon can we start after discovering the affair?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    The sooner, the better. While emotions are intense immediately after discovery, early intervention prevents additional trauma and destructive patterns from taking hold. I specialize in crisis stabilization and can help you navigate this critical period safely. I typically have availability within 1-2 weeks for new clients in crisis.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="logistics-4">
                <AccordionTrigger>
                  What's your cancellation policy?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    I require 24 hours notice for cancellations. Late cancellations or no-shows are charged the full session fee. I understand emergencies happen—military families dealing with sudden deployments, for example—and I work with clients on a case-by-case basis when life throws curveballs.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Insurance & Payment */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Insurance & Payment
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="payment-1">
                <AccordionTrigger>
                  How much does therapy cost?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    <strong>Couples therapy:</strong> $180 per 60-minute session<br />
                    <strong>Individual sessions:</strong> $150 per 50-minute session<br />
                    <strong>Intensive weekends:</strong> $1,800 (12-16 hours over two days)
                  </p>
                  <p>
                    The first session is slightly longer (75 minutes) to allow for comprehensive assessment. Payment plans are available for clients who need them.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment-2">
                <AccordionTrigger>
                  Do you take insurance?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    I accept select insurance plans and provide superbills for out-of-network reimbursement. Many insurance plans cover therapy for relationship issues when there's a mental health component (like depression, anxiety, or PTSD from betrayal trauma).
                  </p>
                  <p>
                    I'm happy to discuss payment options and help you understand your benefits during our consultation. For military families, Tricare and other military insurance options may apply.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Getting Started */}
          <div>
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Getting Started
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="start-1">
                <AccordionTrigger>
                  Will you take sides?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    No. My job isn't to be a judge or take sides. I'm here to help both of you understand what happened, process the pain, and figure out whether and how to move forward. The betrayed partner deserves validation and support. The unfaithful partner needs accountability and help changing. Both of those things can be true at once.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="start-2">
                <AccordionTrigger>
                  What about secrets and confidentiality?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">
                    In couples therapy, I operate with a "no secrets" policy. If one partner tells me something in an individual session that affects the relationship, we'll work together on how and when to share it with their partner. This protects the therapy from becoming a repository for more secrets.
                  </p>
                  <p>
                    Everything discussed in therapy is confidential under HIPAA and California law. Your business stays your business. The only exceptions are if there's imminent danger to self or others, child abuse, or elder abuse—situations where I'm legally required to report.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="start-3">
                <AccordionTrigger>
                  Why did you specialize in affair recovery?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    After years of general couples therapy, I realized affair recovery required specialized training and a different approach. Too many therapists treat infidelity like any other relationship issue—it's not. It's trauma. I pursued advanced training in Gottman Method for affair recovery, Relational Life Therapy, and trauma treatment because couples in crisis deserve more than generic advice. Here in San Diego, with our unique mix of military families, tech professionals, and diverse communities, that specialization matters even more.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Have More Questions?"
        description="Reach out to discuss your specific situation and how I can help."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
    </>
  )
}
