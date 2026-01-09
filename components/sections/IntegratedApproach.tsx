'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Users, Heart, Brain, ArrowRight, Zap, Target, Shield } from 'lucide-react'

const methodNodes = [
  {
    id: 'gottman',
    title: 'Gottman Method',
    subtitle: 'Trust Revival',
    icon: Users,
    position: { x: 30, y: 25 },
    gradient: 'from-blue-500 to-indigo-500',
    strengths: [
      'Research-backed protocols',
      'Structured trust rebuilding',
      'Conflict management',
      'Emotional attunement',
    ],
  },
  {
    id: 'rlt',
    title: 'Relational Life Therapy',
    subtitle: 'Intimacy Skills',
    icon: Heart,
    position: { x: 70, y: 25 },
    gradient: 'from-lime-500 to-pink-500',
    strengths: [
      'Direct communication',
      'Pattern recognition',
      'Intimacy building',
      'Boundary setting',
    ],
  },
  {
    id: 'brain',
    title: 'Brain-Based Understanding',
    subtitle: 'Trauma Healing',
    icon: Brain,
    position: { x: 50, y: 68 },
    gradient: 'from-turquoise-500 to-emerald-500',
    strengths: [
      'Trauma psychoeducation',
      'Nervous system regulation',
      'Safety and stabilization',
      'Attachment repair',
    ],
  },
]

const integrationPoints = [
  {
    from: 'gottman',
    to: 'rlt',
    label: 'Structured + Direct',
    description: 'Gottman\'s structured approach combined with RLT\'s direct communication',
  },
  {
    from: 'rlt',
    to: 'brain',
    label: 'Skills + Safety',
    description: 'Building intimacy skills within a trauma-informed framework',
  },
  {
    from: 'brain',
    to: 'gottman',
    label: 'Research + Trauma',
    description: 'Evidence-based protocols informed by trauma understanding',
  },
]

const phases = [
  {
    phase: 1,
    title: 'Stabilize',
    duration: '2-6 sessions',
    description: 'Create safety and manage the crisis',
    methods: ['Brain-based understanding', 'Gottman assessment', 'RLT boundaries'],
    color: 'from-turquoise-500 to-emerald-500',
    icon: Shield,
  },
  {
    phase: 2,
    title: 'Structure',
    duration: '6-12 sessions',
    description: 'Build skills and process emotions',
    methods: ['Gottman trust revival', 'RLT communication', 'Trauma processing'],
    color: 'from-blue-500 to-indigo-500',
    icon: Target,
  },
  {
    phase: 3,
    title: 'Rebuild',
    duration: '8-16 sessions',
    description: 'Create new relationship patterns',
    methods: ['Intimacy rebuilding', 'Attachment repair', 'Relapse prevention'],
    color: 'from-lime-500 to-pink-500',
    icon: Heart,
  },
]

export function IntegratedApproach() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [activePhase, setActivePhase] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="integration" ref={containerRef} className="py-20 lg:py-28 bg-gradient-to-br from-deepTeal-50 via-white to-lightGray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(12, 27, 42, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(142, 166, 155, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(242, 155, 136, 0.06) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
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
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-navy mb-6">
            How the Methods
            <span className="block text-5xl lg:text-6xl font-normal bg-gradient-to-r from-deepTeal-600 to-turquoise-600 bg-clip-text text-transparent mt-2">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto font-heading">
            Each method strengthens the others, creating a comprehensive approach that addresses every aspect of recovery.
          </p>
        </motion.div>

        {/* Integration Diagram - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          {/* Three Method Cards with Connecting Lines */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {methodNodes.map((node, index) => {
              const Icon = node.icon
              const isHovered = hoveredNode === node.id

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-r ${node.gradient} rounded-2xl blur-xl`}
                      animate={{
                        opacity: isHovered ? 0.4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Card */}
                    <div className="relative glass backdrop-blur-xl bg-white/95 rounded-2xl p-6 border border-white/50 shadow-lg h-full flex flex-col items-center text-center">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${node.gradient} shadow-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-display font-semibold text-navy mb-2">
                        {node.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-base text-turquoise-600 font-medium mb-4">
                        {node.subtitle}
                      </p>

                      {/* Strengths */}
                      <div className="flex-1">
                        <ul className="space-y-2 text-left">
                          {node.strengths.map((strength, sIndex) => (
                            <li key={sIndex} className="text-sm text-slate flex items-start gap-2">
                              <span className="text-turquoise-500 mt-0.5">✦</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Integration Points - Horizontal Flow */}
          <div className="grid md:grid-cols-3 gap-4">
            {integrationPoints.map((connection, index) => (
              <motion.div
                key={`${connection.from}-${connection.to}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                viewport={{ once: true }}
                className="glass backdrop-blur-md bg-gradient-to-br from-turquoise-50/80 to-lime-50/80 rounded-xl p-4 border border-white/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-turquoise-500 to-lime-500" />
                  <h4 className="text-base font-semibold text-navy">{connection.label}</h4>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  {connection.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Central Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-3 glass backdrop-blur-xl bg-gradient-to-r from-turquoise-500/10 to-lime-500/10 rounded-full px-6 py-3 border border-turquoise-200">
              <Zap className="w-5 h-5 text-turquoise-600" />
              <p className="text-sm font-medium text-navy">
                Three proven approaches working together for comprehensive healing
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Treatment Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-display font-light text-navy mb-4">
                Treatment Phases
              </h3>
              <p className="text-lg text-slate max-w-2xl">
                The integration follows a structured timeline, with methods working together at each phase.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/metaphor/metaphor-journey.webp"
                  alt="The journey of healing and recovery"
                  width={500}
                  height={350}
                  className="object-cover w-full h-[280px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isActive = activePhase === index

              return (
                <motion.button
                  key={phase.phase}
                  onClick={() => setActivePhase(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'glass backdrop-blur-md bg-white/90 shadow-lg border border-white/50 text-navy'
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
                    <div className="text-sm opacity-70">{phase.duration}</div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Active Phase Detail */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass backdrop-blur-xl bg-white/90 rounded-2xl p-8 border border-white/50 shadow-lg"
          >
            {(() => {
              const phase = phases[activePhase]
              const Icon = phase.icon

              return (
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-display font-normal text-navy mb-2">
                    Phase {phase.phase}: {phase.title}
                  </h4>

                  <p className="text-turquoise-600 font-medium mb-4">{phase.duration}</p>

                  <p className="text-lg text-slate mb-8 max-w-2xl mx-auto">
                    {phase.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {phase.methods.map((method, index) => (
                      <motion.div
                        key={method}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 glass backdrop-blur-sm bg-white/60 rounded-lg border border-white/30"
                      >
                        <span className="text-slate font-medium">{method}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}