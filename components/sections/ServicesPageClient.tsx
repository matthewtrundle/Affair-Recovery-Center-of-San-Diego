'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PremiumCard, ServiceCard } from '@/components/ui/PremiumCard'
import { CTABand } from '@/components/sections/CTABand'
import {
  Heart,
  Users,
  Brain,
  Calendar,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  DollarSign,
  MessageCircle,
  UserCheck,
  Lightbulb,
  Plus,
  Minus
} from 'lucide-react'
import { useState } from 'react'

// Hero Section Component - Simplified
export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-deepTeal-900 via-deepTeal-800 to-deepTeal-700 py-20 lg:py-28">
      {/* Background Layer - Static */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/parallax/services-hero-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/95 via-deepTeal-800/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-white mb-8">
            <span className="block mb-2">Services for</span>
            <span className="block bg-gradient-to-r from-turquoise-300 via-lime-300 to-turquoise-300 bg-clip-text text-transparent pb-4">
              Healing
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-heading text-gray-200 mb-8 max-w-3xl mx-auto mt-4">
            Comprehensive, evidence-based therapy services designed to guide couples
            through crisis, rebuild trust, and create lasting healing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              asChild
            >
              <Link href="/contact">
                <Sparkles className="h-5 w-5 mr-2" />
                Start Your Journey
              </Link>
            </Button>

            <Button
              variant="pill-outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              asChild
            >
              <Link href="/approach">
                Learn Our Approach
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Rest of the components here...
export function MainServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-deepTeal-700 to-deepTeal-800 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
            Primary Service
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized, comprehensive care for couples navigating the aftermath of betrayal
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <PremiumCard variant="glass" hoverEffect="lift" className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lime to-turquoise p-4 mr-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-white mb-2">
                        Couples Therapy for Betrayal Recovery
                      </h3>
                      <p className="text-white/60">Primary Specialty</p>
                    </div>
                  </div>

                  <p className="text-white/80 text-lg mb-6 leading-relaxed">
                    A structured, evidence-based approach to healing from infidelity and betrayal trauma.
                    Serving San Diego couples from Carmel Valley to Downtown, from La Jolla to North Park,
                    I use proven methods from the Gottman Institute and Relational Life Therapy to guide you
                    through crisis stabilization, understanding, and rebuilding.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      'Crisis stabilization and safety planning',
                      'Structured disclosure and transparency',
                      'Trauma processing and emotional regulation',
                      'Trust rebuilding exercises and protocols',
                      'Communication skills and conflict resolution',
                      'Intimacy restoration and future visioning'
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <CheckCircle2 className="h-5 w-5 text-turquoise mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="pill-outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                    asChild
                  >
                    <Link href="/services/betrayal-recovery">
                      Learn More About This Service
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-coral/20 to-sage/20 blur-2xl" />
                  <div className="relative glass backdrop-blur-xl bg-white/10 rounded-2xl p-3 border border-white/20">
                    <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden">
                      <Image
                        src="/images/sections/couple-hero-healing.webp"
                        alt="Couple working together toward healing and recovery"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  )
}

// Additional Services Section
export function AdditionalServicesSection() {
  const services = [
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Individual Therapy Sessions",
      description: "Specialized one-on-one sessions for processing trauma, building coping skills, and preparing for couples work.",
      features: [
        "Betrayal trauma processing",
        "Individual assessment and planning",
        "Coping strategies development",
        "Preparation for couples therapy"
      ],
      href: "/contact"
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Intensive Therapy Weekends",
      description: "Immersive two-day intensive sessions for couples ready to accelerate their healing process.",
      features: [
        "12-16 hours over weekend",
        "Structured breakthrough sessions",
        "Comprehensive assessment",
        "Personalized recovery plan"
      ],
      href: "/contact"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Discernment Counseling",
      description: "For couples uncertain about staying together, helping you make an informed decision about your relationship's future.",
      features: [
        "Clarity on relationship viability",
        "Individual and joint sessions",
        "Decision-making framework",
        "Path forward guidance"
      ],
      href: "/contact"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-lightGray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
            Additional Services
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Complementary services to support your healing journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Process Overview Section
export function ProcessOverviewSection() {
  const processSteps = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Assessment & Stabilization",
      description: "Comprehensive evaluation of your situation, crisis management, and establishing immediate safety and stability.",
      timeline: "Sessions 1-4"
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Understanding & Processing",
      description: "Deep exploration of contributing factors, trauma processing, and developing insight into relationship patterns.",
      timeline: "Sessions 5-12"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Rebuilding & Integration",
      description: "Systematic trust rebuilding, communication enhancement, and creating your new relationship foundation.",
      timeline: "Sessions 13-20+"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-deepTeal-800 to-deepTeal-900 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
            Our Healing Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A structured, evidence-based approach typically spanning 12-20 sessions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <PremiumCard variant="glass" hoverEffect="glow" className="h-full text-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-sage p-4 mb-6"
                  >
                    {step.icon}
                  </motion.div>

                  <div className="text-sm font-medium text-lime mb-2 uppercase tracking-wider">
                    {step.timeline}
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Investment Section
export function InvestmentSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-lightGray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
            Investment in Your Relationship
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Transparent, value-based pricing for comprehensive care
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <PremiumCard variant="solid" hoverEffect="lift" className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-turquoise mr-3" />
                  <h3 className="text-2xl font-heading font-semibold text-deepTeal">
                    Session Fees
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-slate">Couples Therapy (60 min)</span>
                    <span className="font-semibold text-deepTeal">$180</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-slate">Individual Session (50 min)</span>
                    <span className="font-semibold text-deepTeal">$150</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-slate">Intensive Weekend</span>
                    <span className="font-semibold text-deepTeal">$1,800</span>
                  </div>
                </div>

                <div className="bg-turquoise-50 rounded-lg p-6">
                  <h4 className="font-heading font-semibold text-deepTeal mb-3">Insurance & Payment</h4>
                  <ul className="space-y-2 text-slate">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-turquoise mr-2 flex-shrink-0 mt-0.5" />
                      <span>Some insurance plans accepted</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-turquoise mr-2 flex-shrink-0 mt-0.5" />
                      <span>Superbills provided for reimbursement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-turquoise mr-2 flex-shrink-0 mt-0.5" />
                      <span>Payment plans available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-lime mr-3" />
                  <h3 className="text-2xl font-heading font-semibold text-deepTeal">
                    Value Perspective
                  </h3>
                </div>

                <p className="text-slate text-lg mb-6 leading-relaxed">
                  Relationship recovery is one of the most significant investments you can make.
                  The cost of specialized therapy is modest compared to the value of saving your relationship,
                  your family's wellbeing, and your future happiness.
                </p>

                <div className="bg-lime-50 rounded-lg p-6 mb-6">
                  <h4 className="font-heading font-semibold text-deepTeal mb-3">What's Included</h4>
                  <ul className="space-y-2 text-slate">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-lime mr-2 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive assessment and treatment planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-lime mr-2 flex-shrink-0 mt-0.5" />
                      <span>Between-session exercises and resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-lime mr-2 flex-shrink-0 mt-0.5" />
                      <span>Crisis support as needed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-lime mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ongoing progress monitoring</span>
                    </li>
                  </ul>
                </div>

                <p className="text-slate italic">
                  "The question isn't whether you can afford therapy—it's whether you can afford not to try."
                </p>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  )
}

// Four Pillars Section
export function FourPillarsSection() {
  const pillars = [
    {
      number: 1,
      title: "Emotion Regulation — Find Calm in the Chaos",
      items: [
        "Mindfulness & grounding skills: Quick tools to reduce reactivity in the moment.",
        "Communication guardrails: How to ask and answer questions without spiraling.",
        "Session structure: Clear boundaries for hard conversations so no one shuts down."
      ],
      gradient: "from-coral to-turquoise"
    },
    {
      number: 2,
      title: "Rebuilding Trust — Step by Step, with Structure",
      items: [
        "Honest, consistent answers: Responding with patience—even when questions repeat.",
        "Reasonable openness: Practical transparency (e.g., phone face-up, shared calendars) to reduce anxiety while trust is rebuilt.",
        "Repair rituals: Simple daily and weekly practices that demonstrate reliability."
      ],
      gradient: "from-turquoise to-lime"
    },
    {
      number: 3,
      title: "Rebuilding Friendship — Liking Each Other Again",
      items: [
        "Lighthearted conversations: Moving beyond crisis mode to rediscover fun together.",
        "Inside jokes and shared hobbies: Rekindling what made you friends in the first place.",
        "Date nights and check-ins: Regular time for connection, laughter, and joy."
      ],
      gradient: "from-lime to-sage"
    },
    {
      number: 4,
      title: "Renewing Intimacy — When It&apos;s Safe to Feel Desired Again",
      items: [
        "Gentle affection: Rebuilding physical connection at a pace that feels safe.",
        "Safe emotional vulnerability: Creating space for desire without pressure.",
        "Physical reconnection: Intimacy that flows naturally from trust and friendship."
      ],
      gradient: "from-sage to-coral"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-lightGray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
            What to Expect in Affair Recovery Counseling
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            We follow four pillars—emotion regulation, rebuilding trust, rebuilding friendship, and renewing intimacy—at a pace that fits you.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PremiumCard variant="solid" hoverEffect="lift" className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Pillar Number */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}
                    >
                      <span className="text-3xl lg:text-4xl font-display font-bold text-white">
                        {pillar.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-deepTeal mb-6">
                      {pillar.title}
                    </h3>

                    <ul className="space-y-4">
                      {pillar.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * itemIndex }}
                          className="flex items-start"
                        >
                          <CheckCircle2 className="h-5 w-5 text-turquoise mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate text-lg leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            asChild
          >
            <Link href="/contact">
              <Sparkles className="h-5 w-5 mr-2" />
              Begin Your Healing Journey
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// FAQ Section
export function ServicesFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does betrayal recovery therapy typically take?",
      answer: "Most couples benefit from 12-20 sessions over 6-12 months, though every situation is unique. Initial stabilization usually takes 4-6 sessions, followed by deeper work on understanding and rebuilding. Some couples benefit from ongoing maintenance sessions after completing intensive work."
    },
    {
      question: "Do both partners need to be committed to the process?",
      answer: "Yes, successful betrayal recovery requires commitment from both partners, though their readiness levels may differ initially. If only one partner is willing to work, I offer discernment counseling to help you explore your options and make informed decisions about your relationship's future."
    },
    {
      question: "What if we're not sure we want to stay together?",
      answer: "That's completely normal and understandable. Discernment counseling can help you gain clarity before committing to full recovery work. This short-term counseling (1-5 sessions) helps you understand your options: status quo, separation/divorce, or committing to six months of intensive therapy."
    },
    {
      question: "How soon can we start therapy after discovery?",
      answer: "The sooner, the better. While emotions are intense immediately after discovery, early intervention can prevent additional trauma and destructive patterns from taking hold. I specialize in crisis stabilization and can help you navigate this critical period safely."
    },
    {
      question: "Will individual therapy be necessary alongside couples work?",
      answer: "Often, yes. Individual sessions help process trauma, work on personal issues that contributed to the crisis, and develop coping skills. I coordinate individual and couples work to ensure they support rather than conflict with each other. Many clients benefit from both modalities."
    },
    {
      question: "What insurance do you accept?",
      answer: "I accept select insurance plans and provide superbills for out-of-network reimbursement. Many insurance plans cover therapy for relationship issues when there's a mental health component. I'm happy to discuss payment options and help you understand your benefits during our consultation."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-lightGray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Common questions about our services and approach
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PremiumCard
                variant="solid"
                hoverEffect="lift"
                className="cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-heading font-semibold text-deepTeal pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-slate flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200 mt-4">
                        <p className="text-slate leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* CTA to FAQ Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="pill-outline"
            asChild
          >
            <Link href="/faq">
              View All FAQs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}