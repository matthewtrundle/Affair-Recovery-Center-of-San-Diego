import { Metadata } from 'next'
import { PremiumFAQAccordion } from '@/components/PremiumFAQAccordion'
import { CTABand } from '@/components/sections/CTABand'
import { ParallaxSection, RevealOnScroll } from '@/components/sections/ParallaxSection'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { generateMetadata as generateSEO, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, MessageCircle, CreditCard, User, Clock, Heart, Brain, Shield, Users, Star } from 'lucide-react'

const faqCategories = [
  {
    category: 'About Therapy Process',
    icon: <MessageCircle className="h-6 w-6 text-white" />,
    description: 'Understanding how therapy works and what to expect',
    questions: [
      {
        question: `What if my partner isn't ready for couples therapy?`,
        answer: `Super common, especially here in SD where everyone's schedule is packed. Maybe they're deployed, maybe they're in denial, maybe they're scared. I get it. I can work with just you first — help you figure out your next move, deal with the rage/panic, get you stable. Sometimes when one partner starts healing, the other comes around. My Carmel Valley office is easy to get to from anywhere — right off the 5.`,
        tags: ['individual therapy', 'readiness', 'preparation']
      },
      {
        question: 'What happens in a typical session?',
        answer: `We meet for 60 minutes (75 for the first one). No lying on couches — we sit and talk like normal people. Early on, it's about stopping the bleeding and making sure nobody's about to do something they'll regret. I use proven methods, not woo-woo stuff. You'll both get to talk (no, one person doesn't dominate). And yes, there's homework, but it's stuff you can do while walking at Torrey Pines or over coffee in North Park.`,
        tags: ['session structure', 'gottman method', 'RLT', 'communication']
      },
      {
        question: 'Do you see partners individually as well as together?',
        answer: `Yep, I mix it up. Sometimes you need to vent without your partner there — totally get it. I might see you both together, then each alone, then back together. Individual sessions are great for the "I can't say this in front of them yet" stuff. Especially helpful for military families where deployment trauma might be mixed in, or when someone's dealing with work stress from their biotech job on top of the affair.`,
        tags: ['individual sessions', 'couples therapy', 'trauma processing']
      },
      {
        question: 'Is what we discuss in therapy really confidential?',
        answer: `100%. Your business stays your business. I follow all the legal stuff (HIPAA, etc.). The only time I'd have to speak up is if someone's in danger. For couples: I have a "no secrets" rule — if you tell me something huge in an individual session that affects your relationship, we'll need to find a way to share it. But I'm not gossiping about you at Lestats or anywhere else. What happens in my office stays there.`,
        tags: ['confidentiality', 'HIPAA', 'no secrets policy']
      },
      {
        question: 'How do you handle explosive emotions during sessions?',
        answer: `I've seen it all — crying, yelling, the silent treatment. It's normal when your world's been turned upside down. If things get too heated, we take a break. Maybe look at the ocean view from my window, do some breathing. I'll teach you how to calm your nervous system (useful for those anxiety attacks in the Vons parking lot too). My job is keeping things productive, not letting it turn into a boxing match.`,
        tags: ['emotional regulation', 'safety', 'grounding techniques']
      },
      {
        question: 'What makes your approach different from other therapists?',
        answer: `I only do affair recovery. That's it. Not depression, not general couples stuff — just helping people recover from betrayal. Been doing it in San Diego since 2008. I know the unique pressures here: military deployments, biotech work culture, the whole "perfect SoCal life" pressure. I'm direct (won't waste your time) but not harsh. And I actually give you tools that work, not just "how does that make you feel?" for months on end.`,
        tags: ['specialization', 'evidence-based', 'betrayal trauma', 'local expertise']
      }
    ],
  },
  {
    category: 'Affair Recovery Specific',
    icon: <Heart className="h-6 w-6 text-white" />,
    description: 'Questions specific to recovering from infidelity and betrayal',
    questions: [
      {
        question: 'Can a relationship really recover from an affair?',
        answer: 'Absolutely. I\'ve seen San Diego couples go from "it\'s over" to stronger than ever. From military couples dealing with deployment affairs to Sorrento Valley tech workers navigating workplace betrayals — recovery is real. It takes both people showing up, the person who cheated owning it completely, and having someone who knows what they\'re doing guide you through. Not gonna lie, it\'s hard work. But I\'ve been doing this since 2008, and I\'ve seen it happen hundreds of times.',
        tags: ['recovery possibility', 'research', 'commitment', 'stronger relationships']
      },
      {
        question: 'How long does affair recovery typically take?',
        answer: `Real talk? You\'ll feel less crazy in about 3-6 months. Actually trusting again? That\'s more like 12-18 months of solid work. Depends on stuff like: Was it a one-night thing in Vegas or a year-long situation? Did they confess or did you catch them? Are you both really in this? Military deployments and high-pressure jobs (looking at you, biotech) can add time. You\'ll have good days and days where you\'re crying in the Trader Joe\'s parking lot. That\'s normal.`,
        tags: ['timeline', 'recovery phases', 'healing process', 'setbacks']
      },
      {
        question: 'What are the stages of affair recovery?',
        answer: 'Affair recovery typically moves through three main phases: 1) Crisis/Stabilization (managing initial shock, establishing safety, containing damage), 2) Understanding/Processing (exploring what led to the affair, processing emotions, beginning to rebuild communication), and 3) Integration/Rebuilding (creating a new relationship, rebuilding trust, developing deeper intimacy). Each phase has its own challenges and milestones.',
        tags: ['recovery stages', 'crisis management', 'rebuilding', 'trust']
      },
      {
        question: 'What if there were multiple affairs or a pattern of infidelity?',
        answer: `Multiple betrayals require a more intensive approach. We'll need to address underlying patterns, potential sex addiction issues, and the compounded trauma. Recovery is still possible but typically takes longer. The unfaithful partner may need individual therapy for addiction or compulsive behaviors. We'll work on creating stronger boundaries and accountability systems. The betrayed partner will need extra support processing complex trauma.`,
        tags: ['multiple affairs', 'sex addiction', 'complex trauma', 'accountability']
      },
      {
        question: 'How do we handle triggers and flashbacks?',
        answer: `Triggers are normal and expected after betrayal. I'll teach you both how to recognize early warning signs, use grounding techniques, and communicate about triggers without shame. The unfaithful partner learns how to respond supportively rather than defensively. We'll create safety plans and coping strategies. Over time, triggers become less frequent and intense as healing progresses.`,
        tags: ['triggers', 'flashbacks', 'PTSD', 'safety plans', 'grounding']
      },
      {
        question: 'Should the unfaithful partner cut off all contact with the affair partner?',
        answer: `Yes, absolutely. Complete no-contact is essential for recovery. This includes blocking on all social media, changing phone numbers if necessary, and if they work together, requesting a transfer or finding new employment. Any ongoing contact prevents healing and shows a lack of commitment to recovery. I&apos;ll help you navigate workplace situations or other complications.`,
        tags: ['no contact', 'affair partner', 'boundaries', 'commitment to recovery']
      },
      {
        question: 'What about disclosure - should I know all the details?',
        answer: `This is complex and individual. Some betrayed partners need details to feel they know the truth and can begin healing. Others find details re-traumatizing. I&apos;ll help you navigate this carefully. If full disclosure happens, we'll do it in a therapeutic setting with proper preparation and support. The goal is always healing, not punishment or further trauma.`,
        tags: ['disclosure', 'details', 'truth', 'trauma', 'healing']
      }
    ],
  },
  {
    category: 'Logistics & Scheduling',
    icon: <Clock className="h-6 w-6 text-white" />,
    description: 'Practical information about scheduling and session logistics',
    questions: [
      {
        question: 'How often will we need to come to therapy?',
        answer: `Initially, weekly sessions work best to maintain momentum and process intense emotions. As you stabilize, we might move to biweekly. Frequency depends on your specific situation, level of crisis, and availability. Some couples benefit from intensive work (longer or more frequent sessions initially). We'll adjust the frequency based on your progress and needs.`,
        tags: ['frequency', 'weekly sessions', 'intensive therapy', 'crisis']
      },
      {
        question: 'Do you offer online/telehealth sessions?',
        answer: `Yes, I offer secure video sessions for all California residents. Telehealth can be just as effective as in-person therapy and offers advantages like: no commute time, easier scheduling, comfort of your own space, and ability to include partners in different locations. I use a HIPAA-compliant platform that's easy to use. We can also alternate between in-person and online as needed.`,
        tags: ['telehealth', 'online therapy', 'California residents', 'HIPAA compliant']
      },
      {
        question: 'What are your office hours and availability?',
        answer: `I offer sessions Monday through Thursday, with some evening appointments available. I typically see couples in the afternoons and evenings when both partners can attend. Weekend sessions may be available for intensive work or those with challenging schedules. I understand that affair recovery is urgent, so I prioritize scheduling new clients quickly.`,
        tags: ['office hours', 'evening appointments', 'weekends', 'urgent scheduling']
      },
      {
        question: 'What happens if we need to cancel or reschedule?',
        answer: `I require 24-hour notice for cancellations or you'll be charged for the session. I understand that crises happen, and I'll work with you on genuine emergencies. Frequent cancellations can disrupt the therapeutic process, so we'll discuss any patterns that arise. Rescheduling is usually possible with adequate notice.`,
        tags: ['cancellation policy', '24-hour notice', 'rescheduling', 'consistency']
      },
      {
        question: 'Do you offer intensive therapy sessions or marathons?',
        answer: `Yes, I offer intensive sessions for couples in crisis or those who want to accelerate their progress. These can be 2-3 hour sessions or day-long intensives. Intensives are particularly helpful at the beginning of treatment to establish safety and create momentum. They're also useful for couples with complex situations or those traveling from a distance.`,
        tags: ['intensive therapy', 'marathon sessions', 'crisis intervention', 'accelerated progress']
      }
    ],
  },
  {
    category: 'Insurance & Payment',
    icon: <CreditCard className="h-6 w-6 text-white" />,
    description: 'Financial considerations and insurance information',
    questions: [
      {
        question: 'Do you take insurance?',
        answer: "I'm an out-of-network provider, which means I don't bill insurance directly. However, I can provide detailed superbills that you can submit for potential reimbursement. Many clients find that investing directly in their relationship recovery is worth the cost. I offer flexible scheduling to maximize our time together, and the focused, specialized approach often means faster progress than with insurance-limited care.",
        tags: ['out-of-network', 'superbills', 'reimbursement', 'investment']
      },
      {
        question: 'How much do sessions cost?',
        answer: 'Individual sessions are $200 and couples sessions are $250. I require 24-hour notice for cancellations. Payment is due at the time of service via credit card, check, or cash. I offer a limited number of sliding scale spots for those experiencing financial hardship. The investment in your relationship often pays dividends in all areas of life.',
        tags: ['session cost', 'payment methods', 'sliding scale', 'financial hardship']
      },
      {
        question: 'Do you offer payment plans or sliding scale fees?',
        answer: `I have a limited number of sliding scale spots available for those experiencing genuine financial hardship. We can also discuss payment plans for intensive work. I believe cost shouldn't be a barrier to healing, but I also need to maintain a sustainable practice. I'm happy to discuss options during our consultation call.`,
        tags: ['sliding scale', 'payment plans', 'financial hardship', 'accessibility']
      },
      {
        question: 'What if my insurance covers out-of-network providers?',
        answer: `Many insurance plans do provide out-of-network benefits. I'll provide you with detailed superbills that include all necessary information for reimbursement. Check your plan for out-of-network mental health benefits, deductibles, and reimbursement percentages. Some clients use HSA or FSA funds. I recommend checking with your insurance before we begin.`,
        tags: ['out-of-network benefits', 'superbills', 'HSA', 'FSA', 'reimbursement']
      },
      {
        question: 'Are intensive sessions covered differently by insurance?',
        answer: `Insurance typically covers the same amount per session regardless of length, so intensives may not be reimbursed at a higher rate. However, they can be more cost-effective in the long run if they accelerate your progress. Many couples find that intensive work early in treatment prevents the need for extended therapy later.`,
        tags: ['intensive sessions', 'insurance coverage', 'cost-effective', 'accelerated progress']
      }
    ],
  },
  {
    category: 'Getting Started',
    icon: <User className="h-6 w-6 text-white" />,
    description: 'First steps and initial consultation information',
    questions: [
      {
        question: `How do I know if you're the right therapist for us?`,
        answer: `Let's hop on a free 15-minute call and find out. I\'m not for everyone — I\'m pretty direct, I won\'t let you wallow forever, and I\'ll call BS when needed. But I\'m also the therapist who gets it when you say "I saw them at Seaport Village and lost it" or "The deployment made everything worse." Been helping SD couples since 2008. If we\'re not a fit, I know other good therapists in town.`,
        tags: ['therapist fit', 'consultation', 'style', 'referrals']
      },
      {
        question: 'What should we expect in the first session?',
        answer: `First session is 75 minutes. We\'ll talk about what happened (the short version — we\'ve got time for details later). I\'ll ask about your history — how you met, when things were good, what went wrong. We\'ll set some ground rules (like no interrogating each other at 2 AM). You\'ll leave with actual tools you can use that night. And yeah, it\'s awkward at first. My office in Carmel Valley is comfortable, great parking, and I\'ve got tissues ready.`,
        tags: ['first session', 'roadmap', 'ground rules', 'crisis management', 'nervousness']
      },
      {
        question: 'Can therapy make things worse before they get better?',
        answer: `Therapy can initially stir up difficult emotions as we address painful topics. This is normal and temporary. I&apos;ll help you manage increased emotions with coping tools, ensure sessions end on a stable note, and provide between-session support strategies. The initial discomfort leads to genuine healing. We go at a pace that feels challenging but manageable.`,
        tags: ['temporary discomfort', 'coping tools', 'healing process', 'manageable pace']
      },
      {
        question: 'What if we live outside of San Diego?',
        answer: `I see clients from all over SD County — East County, North County, South Bay, doesn\'t matter. Too far to drive? I do video sessions for anywhere in California. Living in Temecula? Orange County? LA? We can work together online. Military family getting transferred out of state? I\'ll help you find someone good wherever you land. Camp Pendleton families, I\'ve got you covered too.`,
        tags: ['telehealth', 'California residents', 'distance', 'referrals', 'military']
      },
      {
        question: 'How soon can we start?',
        answer: `I know you\'re in crisis mode. Usually I can get you in within a week, sometimes sooner if you\'re really struggling. Free phone consultation? Often same week. If you\'re thinking about doing something you\'ll regret, I can point you to crisis resources right now. Once we start, we\'ll meet weekly — same day, same time. Creates stability when everything else feels chaotic.`,
        tags: ['urgency', 'scheduling', 'crisis', 'emergency resources', 'momentum']
      },
      {
        question: 'What if only one of us is motivated to work on the relationship?',
        answer: `It's common for motivation levels to differ, especially initially. I can work with the motivated partner individually to help them process their emotions and develop strategies. Often, seeing positive changes in one partner can inspire the other to engage. We'll explore what might help the reluctant partner feel safer to participate. Recovery is possible even when motivation is uneven at the start.`,
        tags: ['motivation differences', 'individual work', 'reluctant partner', 'safety', 'uneven motivation']
      }
    ],
  }
]

const allFAQs = faqCategories.flatMap(cat => cat.questions)

export const metadata: Metadata = generateSEO({
  title: 'Frequently Asked Questions',
  description: 'Common questions about affair recovery, couples therapy, and the healing process. Learn about our approach, what to expect, and how to get started.',
  keywords: ['affair recovery FAQ', 'couples therapy questions', 'infidelity counseling', 'therapy cost', 'insurance', 'teletherapy'],
  url: '/faq',
})

export default function FAQPage() {
  return (
    <>
      {/* Structured Data */}
      {generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'FAQ', url: '/faq' },
      ])}
      {generateFAQSchema(allFAQs)}

      {/* Hero Section with Parallax Background */}
      <ParallaxSection
        backgroundImage="/images/backgrounds/faq-hero.jpg"
        speed={0.5}
        overlay={true}
        className="min-h-[70vh] flex items-center justify-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-display font-light text-white mb-6 tracking-tight">
                Frequently Asked
                <span className="block text-coral italic">Questions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                Clear answers to help you understand the path to healing and recovery
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <RevealOnScroll delay={0}>
              <PremiumCard variant="glass" className="p-8">
                <div className="text-4xl font-display font-light text-coral mb-2">30+</div>
                <div className="text-white/80">Common Questions</div>
                <div className="text-sm text-white/60 mt-2">Covering every aspect of recovery</div>
              </PremiumCard>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <PremiumCard variant="glass" className="p-8">
                <div className="text-4xl font-display font-light text-sage mb-2">5</div>
                <div className="text-white/80">Key Categories</div>
                <div className="text-sm text-white/60 mt-2">Organized for easy navigation</div>
              </PremiumCard>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <PremiumCard variant="glass" className="p-8">
                <div className="text-4xl font-display font-light text-sand mb-2">24/7</div>
                <div className="text-white/80">Resource Access</div>
                <div className="text-sm text-white/60 mt-2">Information when you need it</div>
              </PremiumCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-sand-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-navy mb-6">
                Everything You Need to Know
              </h2>
              <p className="text-lg text-slate leading-relaxed max-w-2xl mx-auto">
                I've compiled answers to the most common questions I receive about affair recovery,
                the therapy process, and practical considerations. Use the search and filters to find
                exactly what you're looking for.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto">
            <PremiumFAQAccordion categories={faqCategories} />
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <ParallaxSection
        backgroundImage="/images/backgrounds/resources-section.jpg"
        speed={0.3}
        overlay={true}
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white mb-6">
                Helpful Resources
              </h2>
              <p className="text-lg text-white/80">
                Additional information to support your healing journey
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <RevealOnScroll delay={0}>
              <PremiumCard variant="glass" hoverEffect="lift" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-coral" />
                  <h3 className="text-lg font-heading font-semibold text-navy">Recovery Stages</h3>
                </div>
                <p className="text-slate text-sm mb-4">
                  Learn about the predictable phases of affair recovery and what to expect.
                </p>
                <Link
                  href="/approach"
                  className="text-sage hover:text-coral transition-colors text-sm font-medium"
                >
                  Learn More →
                </Link>
              </PremiumCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <PremiumCard variant="glass" hoverEffect="lift" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-6 w-6 text-coral" />
                  <h3 className="text-lg font-heading font-semibold text-navy">Gottman Method</h3>
                </div>
                <p className="text-slate text-sm mb-4">
                  Understand the research-backed approach I use in couples therapy.
                </p>
                <Link
                  href="/approach#gottman"
                  className="text-sage hover:text-coral transition-colors text-sm font-medium"
                >
                  Learn More →
                </Link>
              </PremiumCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <PremiumCard variant="glass" hoverEffect="lift" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-coral" />
                  <h3 className="text-lg font-heading font-semibold text-navy">Safety Planning</h3>
                </div>
                <p className="text-slate text-sm mb-4">
                  Essential steps for creating emotional and physical safety during recovery.
                </p>
                <Link
                  href="/services/betrayal-recovery#safety"
                  className="text-sage hover:text-coral transition-colors text-sm font-medium"
                >
                  Learn More →
                </Link>
              </PremiumCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <PremiumCard variant="glass" hoverEffect="lift" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-coral" />
                  <h3 className="text-lg font-heading font-semibold text-navy">Support Groups</h3>
                </div>
                <p className="text-slate text-sm mb-4">
                  Information about local and online support groups for affair recovery.
                </p>
                <Link
                  href="/contact"
                  className="text-sage hover:text-coral transition-colors text-sm font-medium"
                >
                  Get Referrals →
                </Link>
              </PremiumCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <PremiumCard variant="glass" hoverEffect="lift" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-coral" />
                  <h3 className="text-lg font-heading font-semibold text-navy">Success Stories</h3>
                </div>
                <p className="text-slate text-sm mb-4">
                  Read testimonials from couples who have successfully rebuilt their relationships.
                </p>
                <Link
                  href="/testimonials"
                  className="text-sage hover:text-coral transition-colors text-sm font-medium"
                >
                  Read Stories →
                </Link>
              </PremiumCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.5}>
              <PremiumCard variant="glass" hoverEffect="lift" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-coral" />
                  <h3 className="text-lg font-heading font-semibold text-navy">Crisis Support</h3>
                </div>
                <p className="text-slate text-sm mb-4">
                  Immediate resources if you're in crisis and need support right now.
                </p>
                <Link
                  href="/contact#crisis"
                  className="text-sage hover:text-coral transition-colors text-sm font-medium"
                >
                  Get Help →
                </Link>
              </PremiumCard>
            </RevealOnScroll>
          </div>
        </div>
      </ParallaxSection>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-sand-50 relative">
        <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto">
              <PremiumCard variant="gradient" hoverEffect="glow" className="p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-white mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Every situation is unique. If you don't see your question answered here,
                  I'm happy to discuss your specific concerns during a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white">
                    <Link href="/schedule">
                      Schedule Free Consultation
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/contact">
                      Send a Message
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">15-minute call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">Completely confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">No obligation</span>
                  </div>
                </div>
              </PremiumCard>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTABand
        title="Ready to start your recovery journey?"
        description="Take the first step toward healing and rebuilding trust."
        buttonText="Schedule Your Consultation"
        buttonHref="/schedule"
        variant="secondary"
      />
    </>
  )
}