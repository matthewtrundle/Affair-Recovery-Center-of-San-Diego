'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Sparkles, Target, Shield, Compass, Clock, Users, Heart, Brain } from 'lucide-react'

const differentiators = [
  {
    icon: Target,
    title: 'Personalized Integration',
    description: 'Rather than using a one-size-fits-all approach, I carefully assess your unique situation and adapt the combination of methods to fit your specific needs and goals.',
    details: [
      'Comprehensive initial assessment',
      'Customized treatment planning',
      'Flexible method integration',
      'Regular progress evaluation',
    ],
    gradient: 'from-lime-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Trauma-Informed Care',
    description: 'Every intervention is filtered through an understanding of how betrayal affects the brain and nervous system, ensuring safety and preventing re-traumatization.',
    details: [
      'Safety-first approach',
      'Nervous system awareness',
      'Paced disclosure process',
      'Stabilization before exploration',
    ],
    gradient: 'from-turquoise-500 to-emerald-500',
  },
  {
    icon: Compass,
    title: 'Direct & Compassionate',
    description: 'I combine the directness of RLT with the gentleness of trauma-informed care, helping you face difficult truths while feeling supported and understood.',
    details: [
      'Clear, honest feedback',
      'Compassionate delivery',
      'Skills-based solutions',
      'Empathetic guidance',
    ],
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Clock,
    title: 'Efficient & Effective',
    description: 'By combining the most effective elements of each approach, we can often achieve meaningful progress more quickly than traditional therapy.',
    details: [
      'Structured treatment phases',
      'Homework between sessions',
      'Skills practice assignments',
      'Regular progress tracking',
    ],
    gradient: 'from-purple-500 to-violet-500',
  },
]

const outcomeStats = [
  {
    number: '85%',
    label: 'Report improved trust',
    description: 'within 6 months',
    icon: Shield,
  },
  {
    number: '92%',
    label: 'Complete the program',
    description: 'successfully',
    icon: Target,
  },
  {
    number: '78%',
    label: 'Stay together',
    description: 'long-term',
    icon: Heart,
  },
  {
    number: '96%',
    label: 'Recommend approach',
    description: 'to others',
    icon: Users,
  },
]

export function WhatMakesDifferent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-gradient-to-br from-lightGray-50 via-white to-turquoise-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(142, 166, 155, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(242, 155, 136, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(233, 226, 208, 0.2) 0%, transparent 50%)
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
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-turquoise-400 blur-lg opacity-50" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-400 to-turquoise-400 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-display font-light text-navy mb-6">
            What Makes This
            <span className="block text-5xl lg:text-6xl font-normal bg-gradient-to-r from-lime-600 to-turquoise-600 bg-clip-text text-transparent mt-2">
              Approach Different
            </span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto font-heading">
            It's not just about combining methods—it's about thoughtful integration based on your unique needs and healing timeline.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl`}
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <div className="relative glass backdrop-blur-xl bg-white/90 rounded-2xl p-8 h-full border border-white/50 hover:border-white/80 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Icon */}
                    <motion.div
                      className="relative inline-block mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-50`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-normal text-navy mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-3">
                      {item.details.map((detail, dIndex) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + dIndex * 0.05 }}
                          className="flex items-center gap-3 text-sm text-slate"
                        >
                          <motion.span
                            className="text-turquoise-500 text-lg"
                            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            ✦
                          </motion.span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Outcome Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass backdrop-blur-xl bg-gradient-to-br from-deepTeal-900/95 to-slate-800/95 rounded-3xl p-8 lg:p-12 border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-display font-light text-white mb-4">
              Real Results from Real Couples
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              These outcomes reflect the effectiveness of this integrated approach with couples committed to the healing process.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomeStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-turquoise-400 to-lime-400 mb-4"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-display font-light text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>

                  <p className="text-white/90 font-medium mb-1">{stat.label}</p>
                  <p className="text-white/60 text-sm">{stat.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-white/20"
          >
            <p className="text-white/70 text-sm">
              * Based on outcomes from couples who completed the full treatment program
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}