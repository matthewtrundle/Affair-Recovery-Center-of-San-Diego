'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Heart, Brain, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'

const methods = [
  {
    title: 'Gottman Method',
    description: 'Research-based approach that helps couples build trust, manage conflict, and create shared meaning. Proven effective for affair recovery with specific protocols for rebuilding after betrayal.',
    icon: Users,
    gradient: 'from-navy-500 via-navy-400 to-blue-400',
    bgGradient: 'from-navy-100/50 to-transparent',
    highlights: [
      'Trust Revival Method',
      'Conflict management skills',
      'Emotional attunement',
      'Creating shared meaning',
    ],
  },
  {
    title: 'Relational Life Therapy',
    description: 'Direct, skills-based approach that addresses the root causes of disconnection. RLT helps partners move from destructive patterns to genuine intimacy and passion.',
    icon: Heart,
    gradient: 'from-coral-500 via-coral-400 to-pink-400',
    bgGradient: 'from-coral-100/50 to-transparent',
    highlights: [
      'Identifying relationship patterns',
      'Developing intimacy skills',
      'Healing childhood wounds',
      'Creating passionate marriage',
    ],
  },
  {
    title: 'Brain-Based Understanding',
    description: `Understanding how betrayal impacts the brain helps normalize your experience and provides a roadmap for healing. We'll explore trauma responses and nervous system regulation.`,
    icon: Brain,
    gradient: 'from-sage-500 via-sage-400 to-green-400',
    bgGradient: 'from-sage-100/50 to-transparent',
    highlights: [
      'Trauma psychoeducation',
      'Nervous system regulation',
      'Attachment repair',
      'Mindfulness practices',
    ],
  },
]

export function MethodCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sand-50/30 to-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(12, 27, 42, 0.05) 0%, transparent 50%)`,
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
              <div className="absolute inset-0 bg-gradient-to-r from-sage-400 to-coral-400 blur-xl opacity-50" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sage-400 to-coral-400 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-navy mb-6">
            Evidence-Based Methods
            <span className="block text-5xl lg:text-6xl font-normal italic gradient-text mt-2">
              That Work
            </span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto font-heading">
            I combine three powerful approaches to give you the best chance at healing and rebuilding.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {methods.map((method, index) => {
            const Icon = method.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                style={{ y }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* 3D Card effect */}
                <motion.div
                  className="relative h-full"
                  whileHover={{
                    rotateY: 5,
                    rotateX: -5,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transformPerspective: 1000,
                  }}
                >
                  {/* Gradient glow effect */}
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${method.gradient} rounded-3xl blur-xl`}
                    animate={{
                      opacity: isHovered ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glass card */}
                  <div className="relative glass backdrop-blur-xl bg-white/80 rounded-2xl p-8 lg:p-10 h-full border border-white/50 hover:border-white/80 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} rounded-2xl`} />

                    {/* Floating particles */}
                    {isHovered && (
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/60 rounded-full"
                            initial={{
                              x: Math.random() * 100 + "%",
                              y: 100 + "%",
                            }}
                            animate={{
                              y: "-100%",
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              delay: Math.random() * 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        ))}
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Icon with animated gradient */}
                      <motion.div
                        className="relative inline-block mb-6"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-2xl blur-lg opacity-50`} />
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} shadow-lg flex items-center justify-center`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>

                      <h3 className="text-2xl lg:text-3xl font-display font-normal text-navy mb-4">
                        {method.title}
                      </h3>

                      <p className="text-slate leading-relaxed mb-6">
                        {method.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {method.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + hIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm text-slate"
                          >
                            <motion.span
                              className="text-sage-500 mr-3 text-lg"
                              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                              transition={{ duration: 0.6 }}
                            >
                              ✦
                            </motion.span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          href="/approach"
                          className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${method.gradient} bg-clip-text font-semibold group/link`}
                        >
                          Learn more
                          <ArrowRight className="h-4 w-4 text-navy group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>

                    {/* Bottom gradient line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} rounded-b-2xl`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate mb-6">
            Curious about how these methods work together in your unique situation?
          </p>
          <motion.a
            href="/approach"
            className="inline-flex items-center gap-3 px-8 py-4 glass backdrop-blur-md bg-white/90 text-navy rounded-full font-medium border border-navy/20 hover:border-navy/40 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Approach
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}