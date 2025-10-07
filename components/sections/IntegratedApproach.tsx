'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Users, Heart, Brain, ArrowRight, Zap, Target, Shield } from 'lucide-react'

const methodNodes = [
  {
    id: 'gottman',
    title: 'Gottman Method',
    subtitle: 'Trust Revival',
    icon: Users,
    position: { x: 20, y: 30 },
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
    position: { x: 80, y: 30 },
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
    position: { x: 50, y: 80 },
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
    from: 'gottman',
    to: 'brain',
    label: 'Research + Trauma',
    description: 'Evidence-based protocols informed by trauma understanding',
  },
  {
    from: 'rlt',
    to: 'brain',
    label: 'Skills + Safety',
    description: 'Building intimacy skills within a trauma-informed framework',
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

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto h-96 mb-20"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Connection Lines */}
            {integrationPoints.map((connection, index) => {
              const fromNode = methodNodes.find(n => n.id === connection.from)
              const toNode = methodNodes.find(n => n.id === connection.to)

              if (!fromNode || !toNode) return null

              return (
                <motion.line
                  key={`${connection.from}-${connection.to}`}
                  x1={fromNode.position.x}
                  y1={fromNode.position.y}
                  x2={toNode.position.x}
                  y2={toNode.position.y}
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: index * 0.5 }}
                />
              )
            })}

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8EA69B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F29B88" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Method Nodes */}
          {methodNodes.map((node, index) => {
            const Icon = node.icon
            const isHovered = hoveredNode === node.id

            return (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredNode(node.id)}
                onHoverEnd={() => setHoveredNode(null)}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-r ${node.gradient} rounded-full blur-xl`}
                    animate={{
                      opacity: isHovered ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Node */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${node.gradient} shadow-lg flex items-center justify-center border-4 border-white`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Label */}
                  <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center w-32">
                    <h4 className="text-sm font-semibold text-navy mb-1">{node.title}</h4>
                    <p className="text-xs text-slate">{node.subtitle}</p>
                  </div>

                  {/* Hover Details */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full mt-16 left-1/2 transform -translate-x-1/2 w-48 glass backdrop-blur-md bg-white/90 rounded-lg p-4 border border-white/50 shadow-lg z-10"
                    >
                      <h5 className="font-semibold text-navy mb-2">Key Strengths:</h5>
                      <ul className="space-y-1">
                        {node.strengths.map((strength, sIndex) => (
                          <li key={sIndex} className="text-xs text-slate flex items-center gap-2">
                            <span className="text-turquoise-500">•</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Treatment Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-display font-light text-navy mb-4">
              Treatment Phases
            </h3>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              The integration follows a structured timeline, with methods working together at each phase.
            </p>
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
                    <div className="text-xs opacity-70">{phase.duration}</div>
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