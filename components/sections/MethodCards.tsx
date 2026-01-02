'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Heart, Brain, Sparkles } from 'lucide-react'
import { useState } from 'react'

const methods = [
  {
    title: 'Gottman Method',
    description: 'Research-based approach that helps couples build trust, manage conflict, and create shared meaning. Proven effective for affair recovery with specific protocols for rebuilding after betrayal.',
    icon: Users,
    gradient: 'from-deepTeal-500 via-deepTeal-400 to-blue-400',
    bgGradient: 'from-deepTeal-100/50 to-transparent',
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
    gradient: 'from-lime-500 via-lime-400 to-pink-400',
    bgGradient: 'from-lime-100/50 to-transparent',
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
    gradient: 'from-turquoise-500 via-turquoise-400 to-green-400',
    bgGradient: 'from-turquoise-100/50 to-transparent',
    highlights: [
      'Trauma psychoeducation',
      'Nervous system regulation',
      'Attachment repair',
      'Mindfulness practices',
    ],
  },
]

export function MethodCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-lightGray-50/30 to-white">
      {/* Static background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, rgba(12, 27, 42, 0.05) 0%, transparent 50%)`,
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
              <div className="absolute inset-0 bg-gradient-to-r from-turquoise-400 to-lime-400 blur-xl opacity-50" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-turquoise-400 to-lime-400 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-deepTeal mb-6">
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
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Card container */}
                <motion.div
                  className="relative h-full"
                  whileHover={{
                    y: -8,
                  }}
                  transition={{ duration: 0.3 }}
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
                  <div className="relative bg-white/95 rounded-2xl p-8 lg:p-10 h-full border border-white/50 hover:border-white/80 transition-all duration-300 shadow-xl hover:shadow-2xl">
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
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
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
                            <span className="text-turquoise-500 mr-3 text-lg">
                              ✦
                            </span>
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white font-body font-semibold rounded-full hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            Begin Your Healing
          </Link>
        </motion.div>
      </div>
    </section>
  )
}