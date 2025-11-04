'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Sparkles, ChevronRight } from 'lucide-react'
import { trackCTAClick } from '@/lib/analytics'
import { useRef, useState } from 'react'

interface CTABandProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
  variant?: 'default' | 'secondary'
  showIcon?: boolean
}

export function CTABand({
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'default',
  showIcon = true,
}: CTABandProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  const handleClick = () => {
    trackCTAClick(buttonText, 'cta_band')
  }

  const isDefault = variant === 'default'

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div
          className={`absolute inset-0 ${
            isDefault
              ? 'bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-700'
              : 'bg-gradient-to-br from-turquoise-600 via-turquoise-500 to-turquoise-400'
          }`}
        />
      </motion.div>

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: isDefault
            ? `radial-gradient(circle at 20% 50%, rgba(142, 166, 155, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`
            : `radial-gradient(circle at 20% 50%, rgba(12, 27, 42, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(134, 239, 172, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Animated sparkle icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
              <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Title with gradient effect */}
          <motion.h2
            style={{ scale }}
            className="text-4xl lg:text-5xl font-display font-light text-white mb-6"
          >
            {title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === title.split(' ').length - 1 ? 'block text-5xl lg:text-6xl font-normal italic bg-gradient-to-r from-lime-300 to-turquoise-300 bg-clip-text text-transparent mt-2' : ''}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-heading leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Premium CTA Button - Standardized Style */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href={buttonHref}
              onClick={handleClick}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white font-body font-semibold rounded-full hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              {buttonText}
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-6 justify-center text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-2 h-2 bg-lime-400 rounded-full"
              />
              <span>Confidential & Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                }}
                className="w-2 h-2 bg-turquoise-400 rounded-full"
              />
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                }}
                className="w-2 h-2 bg-white/60 rounded-full"
              />
              <span>15+ Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}