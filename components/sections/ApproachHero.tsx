'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Sparkles, Brain, Heart, Users } from 'lucide-react'

export function ApproachHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const floatingIcons = [
    { icon: Brain, delay: 0, x: "20%", y: "25%" },
    { icon: Heart, delay: 0.2, x: "75%", y: "35%" },
    { icon: Users, delay: 0.4, x: "85%", y: "70%" },
    { icon: Sparkles, delay: 0.6, x: "15%", y: "75%" },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-slate-800"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(142, 166, 155, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(242, 155, 136, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(142, 166, 155, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 60%, rgba(233, 226, 208, 0.08) 0%, transparent 50%)
            `,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon
        return (
          <motion.div
            key={index}
            className="absolute w-12 h-12 text-white/20"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -20, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 0.8,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay * 2,
              }
            }}
          >
            <IconComponent className="w-full h-full" />
          </motion.div>
        )
      })}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-5xl lg:text-7xl font-display font-light text-white mb-8"
          >
            My Therapeutic
            <motion.span
              className="block text-6xl lg:text-8xl font-normal bg-gradient-to-r from-turquoise-300 via-lime-300 to-turquoise-300 bg-clip-text text-transparent mt-2"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Approach
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-heading leading-relaxed"
          >
            Three powerful, research-backed methods working together to help you heal from betrayal,
            rebuild trust, and create a stronger relationship than you ever thought possible.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="inline-flex flex-col items-center text-white/60"
          >
            <span className="text-sm font-medium mb-2">Discover the approach</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}