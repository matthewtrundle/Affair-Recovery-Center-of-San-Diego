'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Users, Heart, Brain, CheckCircle, ArrowRight, BookOpen, Target, Shield } from 'lucide-react'
import { PremiumCard } from '@/components/ui/PremiumCard'

const methods = [
  {
    id: 'gottman',
    title: 'Gottman Method',
    subtitle: 'Research-Based Affair Recovery',
    description: 'The Gottman Method is built on 40+ years of research with over 3,000 couples. For affair recovery, I use their specialized Trust Revival Method—a proven three-step process that helps couples move from betrayal to rebuilding.',
    icon: Users,
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    principles: [
      {
        title: 'Atonement',
        description: 'The unfaithful partner takes full responsibility and shows genuine remorse',
        icon: Shield,
      },
      {
        title: 'Attunement',
        description: 'Both partners learn to understand and respond to each other\'s emotions',
        icon: Heart,
      },
      {
        title: 'Attachment',
        description: 'Rebuilding emotional and physical intimacy through structured exercises',
        icon: Users,
      },
    ],
    techniques: [
      'Disclosure and Discovery protocols',
      'Trust rebuilding exercises',
      'Conflict management skills',
      'Emotional processing techniques',
      'Ritual creation for healing',
      'Relapse prevention planning',
    ],
    researchBacked: '94% of couples who complete the program report improved relationship satisfaction',
  },
  {
    id: 'rlt',
    title: 'Relational Life Therapy',
    subtitle: 'Skills-Based Intimacy Building',
    description: 'Created by Terry Real, RLT is a direct, action-oriented approach that gets to the root of relationship problems. It focuses on moving from destructive patterns to genuine intimacy and passion.',
    icon: Heart,
    gradient: 'from-lime-500 via-pink-500 to-rose-500',
    bgGradient: 'from-lime-50 to-pink-50',
    principles: [
      {
        title: 'Psychological Patriarchy',
        description: 'Understanding how cultural conditioning creates disconnection',
        icon: Brain,
      },
      {
        title: 'Relational Empowerment',
        description: 'Learning to speak up for the relationship while staying connected',
        icon: Heart,
      },
      {
        title: 'Full-Hearted Living',
        description: 'Moving beyond adaptive strategies to authentic intimacy',
        icon: Target,
      },
    ],
    techniques: [
      'Identifying relational patterns',
      'Boundary setting skills',
      'Emotional regulation techniques',
      'Intimacy building exercises',
      'Feedback loops practice',
      'Recovery from childhood wounds',
    ],
    researchBacked: 'Used by thousands of therapists worldwide with proven effectiveness',
  },
  {
    id: 'brain',
    title: 'Brain-Based Understanding',
    subtitle: 'Trauma-Informed Healing',
    description: 'Betrayal is a form of trauma that affects the brain and nervous system. Understanding these impacts helps normalize your experience and provides a clear path for healing and recovery.',
    icon: Brain,
    gradient: 'from-turquoise-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-turquoise-50 to-emerald-50',
    principles: [
      {
        title: 'Trauma Response',
        description: 'Understanding how betrayal triggers fight, flight, freeze, or fawn responses',
        icon: Shield,
      },
      {
        title: 'Nervous System Regulation',
        description: 'Learning tools to calm and regulate your nervous system',
        icon: Brain,
      },
      {
        title: 'Neuroplasticity',
        description: 'How the brain can heal and create new, healthy patterns',
        icon: Target,
      },
    ],
    techniques: [
      'Psychoeducation about trauma',
      'Breathing and grounding techniques',
      'Mindfulness practices',
      'Somatic awareness exercises',
      'Attachment repair work',
      'Safety and stabilization',
    ],
    researchBacked: 'Based on decades of neuroscience and trauma research',
  },
]

export function TherapeuticMethods() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeMethod, setActiveMethod] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(51, 65, 85, 0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-turquoise-400 to-lime-400 blur-lg opacity-50" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-turquoise-400 to-lime-400 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-navy mb-6">
            Three Powerful Methods
            <span className="block text-5xl lg:text-6xl font-normal bg-gradient-to-r from-turquoise-600 to-lime-600 bg-clip-text text-transparent mt-2">
              One Integrated Approach
            </span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto font-heading">
            Each method brings unique strengths. Together, they provide a comprehensive roadmap for healing and rebuilding trust.
          </p>
        </motion.div>

        {/* Method Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {methods.map((method, index) => {
            const Icon = method.icon
            const isActive = activeMethod === index

            return (
              <motion.button
                key={method.id}
                onClick={() => setActiveMethod(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'glass backdrop-blur-md bg-white/90 shadow-lg border border-white/50 text-navy'
                    : 'bg-white/60 hover:bg-white/80 text-slate border border-transparent'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{method.title}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Active Method Detail */}
        <motion.div
          key={activeMethod}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {(() => {
            const method = methods[activeMethod]
            const Icon = method.icon

            return (
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Method Overview */}
                <div>
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-display font-normal text-navy mb-3">
                      {method.title}
                    </h3>

                    <p className="text-lg text-turquoise-600 font-medium mb-6">
                      {method.subtitle}
                    </p>

                    <p className="text-slate leading-relaxed mb-8">
                      {method.description}
                    </p>

                    <div className="glass backdrop-blur-md bg-gradient-to-br from-turquoise-50/50 to-lime-50/50 rounded-2xl p-6 border border-white/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-turquoise-500 to-lime-500 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy mb-2">Research-Backed Results</h4>
                          <p className="text-slate text-sm">{method.researchBacked}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Method Details */}
                <div className="space-y-8">
                  {/* Core Principles */}
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-navy mb-6">Core Principles</h4>
                    <div className="space-y-4">
                      {method.principles.map((principle, index) => {
                        const PrincipleIcon = principle.icon
                        return (
                          <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 glass backdrop-blur-sm bg-white/80 rounded-xl border border-white/50"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0`}>
                              <PrincipleIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-navy mb-1">{principle.title}</h5>
                              <p className="text-slate text-sm">{principle.description}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Key Techniques */}
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-navy mb-6">Key Techniques</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {method.techniques.map((technique, index) => (
                        <motion.div
                          key={technique}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3 p-3 glass backdrop-blur-sm bg-white/60 rounded-lg border border-white/30"
                        >
                          <span className="text-turquoise-500 text-lg">✦</span>
                          <span className="text-slate text-sm">{technique}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-slate mb-6">
            Want to see how these methods work together in practice?
          </p>
          <motion.a
            href="#integration"
            className="inline-flex items-center gap-3 px-8 py-4 glass backdrop-blur-md bg-white/90 text-navy rounded-full font-medium border border-navy/20 hover:border-navy/40 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See the Integration
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}