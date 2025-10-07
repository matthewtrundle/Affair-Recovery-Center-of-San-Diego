'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Shield, Wrench, Heart, CheckCircle, Clock, ArrowRight, Target, Users, Brain } from 'lucide-react'

const timelinePhases = [
  {
    phase: 1,
    title: 'Stabilize',
    subtitle: 'Crisis Management & Safety',
    duration: '2-6 sessions',
    timeframe: 'Weeks 1-6',
    description: 'Focus on immediate safety, emotional regulation, and understanding what happened.',
    icon: Shield,
    color: 'from-turquoise-500 to-emerald-500',
    bgColor: 'from-turquoise-50 to-emerald-50',
    goals: [
      'Manage crisis and intense emotions',
      'Establish safety and boundaries',
      'Begin trauma psychoeducation',
      'Initial disclosure and assessment',
    ],
    methods: [
      { name: 'Brain-based understanding', description: 'Trauma responses, nervous system regulation' },
      { name: 'RLT boundaries', description: 'Safety agreements, communication guidelines' },
      { name: 'Gottman assessment', description: 'Relationship evaluation, crisis triage' },
    ],
    outcomes: [
      'Reduced emotional reactivity',
      'Clear boundaries in place',
      'Basic safety established',
      'Understanding of trauma impact',
    ],
  },
  {
    phase: 2,
    title: 'Structure',
    subtitle: 'Skills Building & Processing',
    duration: '6-12 sessions',
    timeframe: 'Weeks 6-18',
    description: 'Build new skills, process emotions systematically, and begin rebuilding trust.',
    icon: Wrench,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    goals: [
      'Develop communication skills',
      'Process emotions safely',
      'Understand relationship patterns',
      'Begin trust rebuilding',
    ],
    methods: [
      { name: 'Gottman trust revival', description: 'Atonement, attunement, attachment protocols' },
      { name: 'RLT communication', description: 'Direct feedback, intimacy skills' },
      { name: 'Trauma processing', description: 'EMDR, somatic work as needed' },
    ],
    outcomes: [
      'Improved communication',
      'Better emotional regulation',
      'Increased understanding',
      'First signs of trust',
    ],
  },
  {
    phase: 3,
    title: 'Rebuild',
    subtitle: 'Creating Your New Relationship',
    duration: '8-16 sessions',
    timeframe: 'Weeks 18-40',
    description: 'Focus on intimacy, creating new patterns, and building a stronger relationship.',
    icon: Heart,
    color: 'from-lime-500 to-pink-500',
    bgColor: 'from-lime-50 to-pink-50',
    goals: [
      'Rebuild emotional intimacy',
      'Create new relationship agreements',
      'Develop shared vision',
      'Plan for maintenance',
    ],
    methods: [
      { name: 'Intimacy rebuilding', description: 'Emotional and physical reconnection' },
      { name: 'Attachment repair', description: 'Secure bond development' },
      { name: 'Relapse prevention', description: 'Long-term success planning' },
    ],
    outcomes: [
      'Restored emotional connection',
      'Renewed intimacy and passion',
      'Shared future vision',
      'Relapse prevention plan',
    ],
  },
]

const progressMarkers = [
  { week: 2, milestone: 'Crisis stabilized', description: 'Immediate safety established' },
  { week: 6, milestone: 'Disclosure completed', description: 'Full understanding of betrayal' },
  { week: 12, milestone: 'Skills developing', description: 'New communication patterns emerging' },
  { week: 20, milestone: 'Trust rebuilding', description: 'Consistent trustworthy behavior' },
  { week: 30, milestone: 'Intimacy returning', description: 'Emotional and physical reconnection' },
  { week: 40, milestone: 'New relationship', description: 'Stronger than before' },
]

export function ApproachTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePhase, setActivePhase] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-deepTeal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(12, 27, 42, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(142, 166, 155, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(242, 155, 136, 0.06) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 30,
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
              <div className="absolute inset-0 bg-gradient-to-r from-deepTeal-400 to-turquoise-400 blur-lg opacity-50" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-deepTeal-400 to-turquoise-400 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
            Your Healing
            <span className="block text-5xl lg:text-6xl font-normal bg-gradient-to-r from-deepTeal-600 to-turquoise-600 bg-clip-text text-transparent mt-2">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto font-heading">
            Recovery follows a predictable path. While every couple is unique, this timeline shows the typical journey from crisis to healing.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {timelinePhases.map((phase, index) => {
            const Icon = phase.icon
            const isActive = activePhase === index

            return (
              <motion.button
                key={phase.phase}
                onClick={() => setActivePhase(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'glass backdrop-blur-md bg-white/90 shadow-lg border border-white/50 text-deepTeal'
                    : 'bg-white/60 hover:bg-white/80 text-slate border border-transparent'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Phase {phase.phase}: {phase.title}</div>
                  <div className="text-xs opacity-70">{phase.duration}</div>
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Active Phase Detail */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          {(() => {
            const phase = timelinePhases[activePhase]
            const Icon = phase.icon

            return (
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Phase Overview */}
                <div className="glass backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/50 shadow-lg">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-display font-normal text-deepTeal mb-2">
                    Phase {phase.phase}: {phase.title}
                  </h3>

                  <p className="text-lg text-turquoise-600 font-medium mb-4">
                    {phase.subtitle}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-slate">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{phase.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>{phase.timeframe}</span>
                    </div>
                  </div>

                  <p className="text-slate leading-relaxed mb-8">
                    {phase.description}
                  </p>

                  {/* Goals */}
                  <div className="mb-8">
                    <h4 className="text-lg font-heading font-semibold text-deepTeal mb-4">Phase Goals</h4>
                    <div className="space-y-3">
                      {phase.goals.map((goal, index) => (
                        <motion.div
                          key={goal}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-4 h-4 text-turquoise-500 flex-shrink-0" />
                          <span className="text-slate">{goal}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Outcomes */}
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-deepTeal mb-4">Expected Outcomes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phase.outcomes.map((outcome, index) => (
                        <motion.div
                          key={outcome}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`p-3 glass backdrop-blur-sm bg-gradient-to-br ${phase.bgColor} rounded-lg border border-white/30`}
                        >
                          <span className="text-sm text-slate">{outcome}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Methods Used */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-display font-normal text-deepTeal">Methods Used in This Phase</h4>

                  {phase.methods.map((method, index) => (
                    <motion.div
                      key={method.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass backdrop-blur-xl bg-white/80 rounded-xl p-6 border border-white/50 shadow-lg"
                    >
                      <h5 className="text-lg font-heading font-semibold text-deepTeal mb-2">
                        {method.name}
                      </h5>
                      <p className="text-slate">{method.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })()}
        </motion.div>

        {/* Progress Markers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-display font-light text-deepTeal mb-4">
              Key Milestones
            </h3>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              These are typical markers of progress most couples experience on their healing journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-turquoise-300 via-lime-300 to-deepTeal-300 rounded-full" />

            {/* Progress Markers */}
            <div className="space-y-12">
              {progressMarkers.map((marker, index) => (
                <motion.div
                  key={marker.week}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-white/50 shadow-lg max-w-sm">
                      <div className="text-sm text-turquoise-600 font-medium mb-2">Week {marker.week}</div>
                      <h4 className="text-lg font-heading font-semibold text-deepTeal mb-2">
                        {marker.milestone}
                      </h4>
                      <p className="text-slate">{marker.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-turquoise-500 to-lime-500 border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 glass backdrop-blur-xl bg-gradient-to-br from-turquoise-50/80 to-lime-50/80 rounded-2xl p-8 border border-white/50 text-center"
        >
          <div className="flex items-start gap-4 text-left">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-turquoise-500 to-lime-500 flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-deepTeal mb-2">Important to Remember:</h4>
              <p className="text-slate">
                Every couple's timeline is unique. Some move faster, others need more time.
                What matters most is your commitment to the process and willingness to do the work.
                I'll adjust our approach based on your specific needs and progress.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}