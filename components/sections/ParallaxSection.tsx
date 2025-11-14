'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

interface ParallaxSectionProps {
  children: React.ReactNode
  backgroundImage?: string
  speed?: number
  overlay?: boolean
  className?: string
}

export function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  overlay = true,
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      {backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              height: '120%',
            }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-ocean/60 via-ocean/40 to-ocean/60" />
          )}
        </motion.div>
      )}

      {/* Content */}
      <motion.div style={{ opacity }}>
        {children}
      </motion.div>
    </section>
  )
}

// Split Parallax Section
export function SplitParallaxSection({
  leftContent,
  rightContent,
  leftImage,
  rightImage,
  reversed = false,
}: {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  leftImage?: string
  rightImage?: string
  reversed?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const leftY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  const rightY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: leftY }}
            className="relative"
          >
            {leftImage ? (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={leftImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
              </div>
            ) : (
              leftContent
            )}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ y: rightY }}
            className="relative"
          >
            {rightImage ? (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={rightImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
              </div>
            ) : (
              rightContent
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Reveal on Scroll Component
export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Horizontal Scroll Section
export function HorizontalScrollSection({
  items,
  title,
  description,
}: {
  items: React.ReactNode[]
  title: string
  description?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-display font-light text-ocean mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-charcoal/70 max-w-2xl">
              {description}
            </p>
          )}
        </RevealOnScroll>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-6 px-4 sm:px-6 lg:px-8"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-80"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// Sticky Scroll Reveal
export function StickyScrollReveal({
  sections,
}: {
  sections: Array<{
    title: string
    content: React.ReactNode
    image?: string
  }>
}) {
  return (
    <div className="relative">
      {sections.map((section, index) => (
        <div key={index} className="min-h-screen flex items-center sticky top-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll delay={index * 0.1}>
                <h3 className="text-3xl md:text-4xl font-display font-light text-ocean mb-6">
                  {section.title}
                </h3>
                <div className="text-charcoal/80">
                  {section.content}
                </div>
              </RevealOnScroll>

              {section.image && (
                <RevealOnScroll delay={index * 0.1 + 0.2}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
                  </div>
                </RevealOnScroll>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}