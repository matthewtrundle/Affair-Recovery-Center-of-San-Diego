'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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
  const [activeMethod, setActiveMethod] = useState('gottman')

  return (
    <section className="bg-white relative overflow-hidden py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(51, 65, 85, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two Column Layout: Tabs Left, Content Right */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Left Column - Compact Vertical Tabs */}
          <div className="space-y-3">
            {methods.map((method, index) => {
              const Icon = method.icon
              const isActive = activeMethod === method.id

              return (
                <motion.button
                  key={method.id}
                  onClick={() => setActiveMethod(method.id)}
                  className={`w-full inline-flex items-center justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white shadow-md'
                      : 'bg-white text-deepTeal-700 hover:bg-turquoise-50 shadow-sm'
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-white/20'
                      : `bg-gradient-to-br ${method.gradient}`
                  }`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-body font-semibold text-base">
                      {method.title}
                    </div>
                    <div className={`text-sm mt-0.5 ${
                      isActive ? 'text-white/80' : 'text-deepTeal-600'
                    }`}>
                      {method.subtitle}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right Column - Content Display */}
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {(() => {
              const method = methods.find(m => m.id === activeMethod)!
              const Icon = method.icon

              return (
                <div className="space-y-6">
                  {/* Method Header - Compact */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-normal text-navy">
                          {method.title}
                        </h3>
                        <p className="text-base text-turquoise-600 font-medium">
                          {method.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate text-base leading-relaxed mb-4">
                      {method.description}
                    </p>

                    <div className="glass backdrop-blur-md bg-gradient-to-br from-turquoise-50/50 to-lime-50/50 rounded-lg p-4 border border-white/50">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-turquoise-500 to-lime-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy text-base mb-1">Research-Backed Results</h4>
                          <p className="text-slate text-sm">{method.researchBacked}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Two Column Layout for Principles and Techniques */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Core Principles */}
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-navy mb-4">Core Principles</h4>
                      <div className="space-y-3">
                        {method.principles.map((principle, index) => {
                          const PrincipleIcon = principle.icon
                          return (
                            <motion.div
                              key={principle.title}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3 p-3 glass backdrop-blur-sm bg-white/80 rounded-lg border border-white/50"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0`}>
                                <PrincipleIcon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-navy text-base mb-0.5">{principle.title}</h5>
                                <p className="text-slate text-sm">{principle.description}</p>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Key Techniques */}
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-navy mb-4">Key Techniques</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {method.techniques.map((technique, index) => (
                          <motion.div
                            key={technique}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-2 p-2 glass backdrop-blur-sm bg-white/60 rounded-lg border border-white/30"
                          >
                            <span className="text-turquoise-500 text-base flex-shrink-0">✦</span>
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
        </div>
      </div>
    </section>
  )
}