'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
}

interface AnimatedStatsProps {
  stats: Stat[]
  className?: string
}

export function AnimatedStats({ stats, className = '' }: AnimatedStatsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              {...stat}
              isInView={isInView}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  decimals = 0,
  isInView,
  delay,
}: Stat & { isInView: boolean; delay: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    return decimals > 0
      ? latest.toFixed(decimals)
      : Math.round(latest)
  })

  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      })

      const unsubscribe = rounded.onChange((latest) => {
        setDisplayValue(latest.toString())
      })

      return () => {
        animation.stop()
        unsubscribe()
      }
    }
  }, [isInView, value, count, rounded, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-coral/20 to-sage/20 rounded-full blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: delay + 0.5 }}
        />

        {/* Number */}
        <div className="relative">
          <span className="text-5xl lg:text-6xl font-display font-light text-ocean">
            {prefix}
            <motion.span className="tabular-nums">
              {displayValue}
            </motion.span>
            {suffix}
          </span>
        </div>
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="mt-4 text-charcoal/70 font-medium text-lg"
      >
        {label}
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        className="mx-auto mt-4 h-[2px] bg-gradient-to-r from-transparent via-sage/50 to-transparent"
        initial={{ width: 0 }}
        animate={isInView ? { width: '60%' } : {}}
        transition={{ duration: 0.8, delay: delay + 0.5 }}
      />
    </motion.div>
  )
}

// Premium Stats Grid Component
export function StatsGrid() {
  const stats: Stat[] = [
    { value: 500, label: 'Couples Helped', suffix: '+' },
    { value: 95, label: 'Success Rate', suffix: '%' },
    { value: 15, label: 'Years Experience', suffix: '+' },
    { value: 4.9, label: 'Client Rating', decimals: 1 },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-alabaster to-white" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-br from-coral/10 to-sage/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-ocean mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            15 years of helping couples heal from betrayal and rebuild stronger relationships
          </p>
        </motion.div>

        {/* Stats */}
        <AnimatedStats stats={stats} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-ocean to-ocean/90 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}