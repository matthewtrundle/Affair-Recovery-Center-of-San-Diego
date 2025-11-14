'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface PremiumCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'glass' | 'gradient' | 'solid'
  hoverEffect?: 'lift' | 'tilt' | 'glow' | 'magnetic'
  onClick?: () => void
}

export function PremiumCard({
  children,
  className = '',
  variant = 'glass',
  hoverEffect = 'tilt',
  onClick,
}: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smooth movement
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig)

  // Transform for 3D perspective
  const transformStyle = {
    rotateX: hoverEffect === 'tilt' ? rotateX : 0,
    rotateY: hoverEffect === 'tilt' ? rotateY : 0,
    transformStyle: 'preserve-3d' as const,
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || hoverEffect !== 'tilt') return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set((x - width / 2) / width)
    mouseY.set((y - height / 2) / height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  // Variant styles
  const variantStyles = {
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
    gradient: 'bg-gradient-to-br from-ocean/90 to-charcoal/90 border border-white/10',
    solid: 'bg-white shadow-lg',
  }

  // Hover effect styles
  const hoverStyles = {
    lift: 'hover:-translate-y-2 hover:shadow-2xl',
    tilt: '',
    glow: 'hover:shadow-[0_0_30px_rgba(122,158,126,0.3)]',
    magnetic: '',
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={transformStyle}
      animate={{
        scale: hoverEffect === 'magnetic' && isHovered ? 1.02 : 1,
        y: hoverEffect === 'lift' && isHovered ? -8 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`
        relative rounded-2xl p-6 transition-all duration-300 cursor-pointer
        ${variantStyles[variant]}
        ${hoverStyles[hoverEffect]}
        ${className}
      `}
    >
      {/* Glow Effect Overlay */}
      {hoverEffect === 'glow' && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-coral/20 to-sage/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Shimmer Effect */}
      {variant === 'glass' && (
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* 3D Shadow for tilt effect */}
      {hoverEffect === 'tilt' && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-black/10 blur-2xl -z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          style={{
            transform: 'translateZ(-20px)',
          }}
        />
      )}
    </motion.div>
  )
}

// Premium Service Card Component
export function ServiceCard({
  title,
  description,
  icon,
  features,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  href: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <PremiumCard
      variant="solid"
      hoverEffect="lift"
      className="h-full border border-gray-200"
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-turquoise-500 to-lime-500 flex items-center justify-center mb-4"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-heading font-semibold text-deepTeal mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate mb-4 flex-1 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start text-sm text-slate"
            >
              <span className="text-turquoise-500 mr-2 mt-0.5">✦</span>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href={href}
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-turquoise-600 hover:text-deepTeal transition-colors font-semibold text-sm"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>
    </PremiumCard>
  )
}

// Premium Testimonial Card
export function TestimonialCard({
  quote,
  author,
  role,
  image,
}: {
  quote: string
  author: string
  role: string
  image?: string
}) {
  return (
    <PremiumCard variant="gradient" hoverEffect="glow" className="h-full">
      <div className="flex flex-col h-full">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-coral/30 mb-4"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>

        {/* Quote Text */}
        <blockquote className="text-white/90 text-lg font-heading italic mb-6 flex-1">
          "{quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          {image && (
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={image}
              alt={author}
              className="w-12 h-12 rounded-full mr-3 border-2 border-coral/30"
            />
          )}
          <div>
            <p className="text-white font-semibold">{author}</p>
            <p className="text-white/60 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </PremiumCard>
  )
}