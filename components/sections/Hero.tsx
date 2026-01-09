'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Heart } from 'lucide-react'
import { trackCTAClick } from '@/lib/analytics'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
  centered?: boolean
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  centered = false,
}: HeroProps) {
  const handlePrimaryClick = () => {
    if (primaryCTA) {
      trackCTAClick(primaryCTA.text, 'hero')
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryCTA) {
      trackCTAClick(secondaryCTA.text, 'hero')
    }
  }

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(12, 27, 42, 0.5), rgba(12, 27, 42, 0.7)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
        centered ? 'text-center' : ''
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl ${centered ? 'mx-auto' : ''}`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 ${
              backgroundImage ? 'text-white' : 'text-navy'
            }`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl md:text-2xl font-light mb-4 ${
              backgroundImage ? 'text-gray-200' : 'text-slate'
            }`}
          >
            {subtitle}
          </motion.p>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg mb-8 ${
                backgroundImage ? 'text-gray-300' : 'text-slate'
              }`}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`flex flex-col sm:flex-row gap-4 ${
              centered ? 'justify-center' : ''
            }`}
          >
            {primaryCTA && (
              <Button
                size="lg"
                asChild
                onClick={handlePrimaryClick}
              >
                <Link href={primaryCTA.href}>
                  <Calendar className="h-5 w-5 mr-2" />
                  {primaryCTA.text}
                </Link>
              </Button>
            )}

            {secondaryCTA && (
              <Button
                size="lg"
                variant="pill-outline"
                className={backgroundImage ? 'border-white/40 text-white hover:bg-white/10 hover:border-white/60' : ''}
                asChild
                onClick={handleSecondaryClick}
              >
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mt-12 flex flex-wrap gap-8 ${centered ? 'justify-center' : ''}`}
        >
          <div className={`flex items-center gap-2 ${
            backgroundImage ? 'text-gray-300' : 'text-slate'
          }`}>
            <Heart className="h-5 w-5 text-coral" />
            <span className="text-sm">15+ Years Experience</span>
          </div>
          <div className={`flex items-center gap-2 ${
            backgroundImage ? 'text-gray-300' : 'text-slate'
          }`}>
            <Heart className="h-5 w-5 text-coral" />
            <span className="text-sm">Gottman Method Certified</span>
          </div>
          <div className={`flex items-center gap-2 ${
            backgroundImage ? 'text-gray-300' : 'text-slate'
          }`}>
            <Heart className="h-5 w-5 text-coral" />
            <span className="text-sm">Evidence-Based Approach</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}