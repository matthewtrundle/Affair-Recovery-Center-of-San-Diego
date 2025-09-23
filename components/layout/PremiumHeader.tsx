'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, Heart, MessageCircle, Calendar, User, Lightbulb, HelpCircle, BookOpen, Phone } from 'lucide-react'
import Image from 'next/image'

// Beach-themed SVG Icons
const WaveIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.5 18.5c2-1.5 4-1.5 6 0s4 1.5 6 0s4-1.5 6 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M3.5 14.5c2-1.5 4-1.5 6 0s4 1.5 6 0s4-1.5 6 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
    <path d="M3.5 10.5c2-1.5 4-1.5 6 0s4 1.5 6 0s4-1.5 6 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3"/>
  </svg>
)

const SunIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.8"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ShellIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-5 0-9 4-9 9s4 9 9 9c1 0 2-.2 3-.5L12 12V2z" fill="currentColor" opacity="0.6"/>
    <path d="M12 2c5 0 9 4 9 9s-4 9-9 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 5c3 0 6 2.5 6 6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
  </svg>
)

const navigation = [
  { name: 'About Jordan', href: '/about', icon: User, description: 'Meet your therapist' },
  { name: 'Our Approach', href: '/approach', icon: Heart, description: 'How we help heal' },
  { name: 'Services', href: '/services', icon: Lightbulb, description: 'What we offer' },
  { name: 'Stories', href: '/testimonials', icon: MessageCircle, description: 'Client experiences' },
  { name: 'Questions', href: '/faq', icon: HelpCircle, description: 'Common concerns' },
  { name: 'Insights', href: '/blog', icon: BookOpen, description: 'Helpful resources' },
  { name: 'Connect', href: '/contact', icon: Phone, description: 'Get in touch' },
]

export function PremiumHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [10, 15])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(12, 27, 42, 0.95)' : 'rgba(12, 27, 42, 0.85)',
        backdropFilter: `blur(${isScrolled ? '15px' : '10px'})`,
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-coral-400/20 to-sage-400/20 backdrop-blur-sm border border-white/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-coral-400/30 to-sage-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <span className="text-lg font-display font-medium text-white relative tracking-tight">ARC</span>
            </motion.div>
            <div className="text-white">
              <h1 className="font-casual-header text-lg font-medium tracking-wide">
                ARC San Diego
              </h1>
              <p className="text-xs text-white/70 font-relaxed">Evidence-Based Affair Recovery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative text-white/80 hover:text-white font-relaxed text-sm tracking-wide transition-colors group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-coral-400 to-sage-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Premium CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Link
                href="/schedule"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 group overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-coral-400 to-sage-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-casual-header font-medium text-sm">
                  Let's Talk
                </span>
                <ChevronRight className="relative w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['-200% 0', '200% 0'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm text-warmSand-100 hover:text-warmSand-50 hover:bg-white/20 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(74, 124, 158, 0.95) 0%, rgba(44, 62, 68, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="py-6 px-4 space-y-6">
            {navigation.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 text-warmSand-100 hover:text-warmSand-50 font-casual-header font-medium text-lg transition-all duration-300 p-3 rounded-lg hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="w-5 h-5 text-sunsetCoral-300" />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-xs text-warmSand-200/70 font-light">{item.description}</div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navigation.length * 0.1, type: "spring", stiffness: 100 }}
              className="pt-4 border-t border-white/20"
            >
              <Link
                href="/schedule"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-sunsetCoral-400 to-warmSand-400 text-white rounded-full font-casual-header font-semibold shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <SunIcon className="w-5 h-5" />
                Let's Talk
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Beach wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
              <motion.path
                d="M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z"
                fill="rgba(232, 155, 127, 0.3)"
                animate={{
                  d: [
                    "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z",
                    "M0,20 Q300,35 600,20 T1200,20 L1200,40 L0,40 Z",
                    "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}