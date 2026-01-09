'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Clock, Calendar, Home, CheckCircle, MessageSquare, BookOpen, Target, Users, ArrowRight } from 'lucide-react'

const sessionAspects = [
  {
    icon: Clock,
    title: 'Session Length & Frequency',
    description: 'Optimized timing for meaningful progress',
    details: [
      '60-minute sessions (not 50 minutes)',
      'Weekly sessions initially',
      'Biweekly as progress stabilizes',
      'Monthly maintenance sessions',
    ],
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: MessageSquare,
    title: 'In-Session Structure',
    description: 'Balanced approach to processing and skill-building',
    details: [
      'Check-in and homework review (10 min)',
      'Skill-building or processing (35 min)',
      'Integration and homework assignment (15 min)',
      'Regular progress assessment',
    ],
    gradient: 'from-lime-500 to-pink-500',
  },
  {
    icon: Home,
    title: 'Between Sessions',
    description: 'Where real change happens in daily life',
    details: [
      'Structured homework assignments',
      'Communication exercises',
      'Individual reflection time',
      'Progress tracking tools',
    ],
    gradient: 'from-turquoise-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Progress Milestones',
    description: 'Clear markers of healing and growth',
    details: [
      'Weekly check-ins on goals',
      'Monthly comprehensive reviews',
      'Quarterly relationship assessments',
      'Graduation planning sessions',
    ],
    gradient: 'from-purple-500 to-violet-500',
  },
]

const typicalSession = [
  {
    time: '0-10 min',
    title: 'Connection & Check-in',
    description: 'How are you feeling? What happened this week? Homework review.',
    icon: MessageSquare,
  },
  {
    time: '10-25 min',
    title: 'Main Work',
    description: 'Skill-building, processing emotions, or working through specific issues.',
    icon: Target,
  },
  {
    time: '25-40 min',
    title: 'Practice & Integration',
    description: 'Try new skills in session, role-play difficult conversations.',
    icon: Users,
  },
  {
    time: '40-55 min',
    title: 'Planning & Homework',
    description: 'What to practice this week, specific exercises, next session planning.',
    icon: BookOpen,
  },
  {
    time: '55-60 min',
    title: 'Closing Ritual',
    description: 'Quick connection moment, appreciation, or grounding exercise.',
    icon: CheckCircle,
  },
]

const expectations = [
  {
    title: 'Active Participation',
    description: 'Both partners engage fully in sessions and complete homework assignments.',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'Emotional Safety',
    description: 'Respectful communication, no verbal abuse, commitment to the process.',
    icon: CheckCircle,
    color: 'text-emerald-600',
  },
  {
    title: 'Honesty & Transparency',
    description: 'Full disclosure about relevant issues, openness about progress and struggles.',
    icon: MessageSquare,
    color: 'text-lime-600',
  },
  {
    title: 'Time & Energy Investment',
    description: 'Regular attendance, between-session work, patience with the healing process.',
    icon: Clock,
    color: 'text-purple-600',
  },
]

export function SessionStructure() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const tabs = [
    { id: 'structure', label: 'Session Structure', icon: Clock },
    { id: 'typical', label: 'Typical Session', icon: Calendar },
    { id: 'expectations', label: 'Expectations', icon: Target },
  ]

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(242, 155, 136, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(12, 27, 42, 0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-deepTeal-400 to-lime-400 blur-lg opacity-50" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-deepTeal-400 to-lime-400 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-display font-light text-navy mb-6">
              Session Structure
              <span className="block text-5xl lg:text-6xl font-normal bg-gradient-to-r from-deepTeal-600 to-lime-600 bg-clip-text text-transparent mt-2">
                & Expectations
              </span>
            </h2>
            <p className="text-xl text-slate max-w-3xl font-heading">
              Understanding what to expect helps you get the most from our work together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/metaphor/metaphor-calm-waters.webp"
                alt="Finding calm and clarity in your healing journey"
                width={500}
                height={350}
                className="object-cover w-full h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            const isActive = activeTab === index

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'glass backdrop-blur-md bg-white/90 shadow-lg border border-white/50 text-navy'
                    : 'bg-white/60 hover:bg-white/80 text-slate border border-transparent'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Session Structure Tab */}
          {activeTab === 0 && (
            <div className="grid lg:grid-cols-2 gap-8">
              {sessionAspects.map((aspect, index) => {
                const Icon = aspect.icon

                return (
                  <motion.div
                    key={aspect.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glass backdrop-blur-xl bg-white/90 rounded-2xl p-8 h-full border border-white/50 hover:border-white/80 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${aspect.gradient} mb-6`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-display font-normal text-navy mb-3">
                        {aspect.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate mb-6">
                        {aspect.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-3">
                        {aspect.details.map((detail, dIndex) => (
                          <motion.li
                            key={detail}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + dIndex * 0.05 }}
                            className="flex items-center gap-3 text-sm text-slate"
                          >
                            <span className="text-turquoise-500 text-lg">•</span>
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Typical Session Tab */}
          {activeTab === 1 && (
            <div className="max-w-4xl mx-auto">
              <div className="glass backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/50 shadow-lg">
                <h3 className="text-2xl font-display font-normal text-navy mb-8 text-center">
                  60-Minute Session Breakdown
                </h3>

                <div className="space-y-6">
                  {typicalSession.map((segment, index) => {
                    const Icon = segment.icon

                    return (
                      <motion.div
                        key={segment.time}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-6 p-6 glass backdrop-blur-sm bg-white/60 rounded-xl border border-white/30"
                      >
                        {/* Time */}
                        <div className="flex-shrink-0 w-20 text-center">
                          <div className="text-sm font-semibold text-navy mb-1">{segment.time}</div>
                          <div className="w-8 h-8 mx-auto rounded-lg bg-gradient-to-br from-turquoise-400 to-lime-400 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-lg font-heading font-semibold text-navy mb-2">
                            {segment.title}
                          </h4>
                          <p className="text-slate">{segment.description}</p>
                        </div>

                        {/* Connector */}
                        {index < typicalSession.length - 1 && (
                          <div className="absolute left-[4.5rem] mt-16 w-px h-6 bg-gradient-to-b from-turquoise-300 to-lime-300" />
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Expectations Tab */}
          {activeTab === 2 && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {expectations.map((expectation, index) => {
                  const Icon = expectation.icon

                  return (
                    <motion.div
                      key={expectation.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-white/50 shadow-lg"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 ${expectation.color} mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <h4 className="text-lg font-heading font-semibold text-navy mb-3">
                        {expectation.title}
                      </h4>

                      <p className="text-slate">
                        {expectation.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 glass backdrop-blur-xl bg-gradient-to-br from-turquoise-50/80 to-lime-50/80 rounded-2xl p-6 border border-white/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-turquoise-500 to-lime-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Remember:</h4>
                    <p className="text-slate">
                      Healing from betrayal takes time and commitment from both partners.
                      I'm here to guide and support you every step of the way, but the real work
                      happens when you practice new skills in your daily life together.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate mb-6">
            Ready to begin this structured approach to healing?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 glass backdrop-blur-md bg-white/90 text-navy rounded-full font-medium border border-navy/20 hover:border-navy/40 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your First Session
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}