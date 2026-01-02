'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { trackCTAClick } from '@/lib/analytics'

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
  const handleClick = () => {
    trackCTAClick(buttonText, 'cta_band')
  }

  const isDefault = variant === 'default'

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Static gradient background */}
      <div
        className={`absolute inset-0 ${
          isDefault
            ? 'bg-gradient-to-br from-deepTeal-900 via-deepTeal-800 to-deepTeal-700'
            : 'bg-gradient-to-br from-turquoise-600 via-turquoise-500 to-turquoise-400'
        }`}
      />

      {/* Subtle static mesh gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDefault
            ? `radial-gradient(circle at 20% 50%, rgba(142, 166, 155, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(242, 155, 136, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`
            : `radial-gradient(circle at 20% 50%, rgba(12, 27, 42, 0.1) 0%, transparent 50%),
               radial-gradient(circle at 80% 80%, rgba(134, 239, 172, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Sparkle icon */}
          <div className="inline-block mb-6">
            <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-display font-light text-white mb-6">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-heading leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Button */}
          <Link
            href={buttonHref}
            onClick={handleClick}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white font-body font-semibold rounded-full hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            {buttonText}
          </Link>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full" />
              <span>Confidential & Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-turquoise-400 rounded-full" />
              <span>Evidence-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
