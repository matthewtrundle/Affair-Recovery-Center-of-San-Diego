'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, ChevronDown, Heart, MessageCircle, Calendar, User, Lightbulb, HelpCircle, BookOpen, Phone, Video } from 'lucide-react'
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
  {
    name: 'About',
    href: '#',
    icon: User,
    description: 'Learn more',
    submenu: [
      { name: 'Meet Your Therapist', href: '/about', description: 'Get to know Jordan' },
      { name: 'Approach', href: '/approach', description: 'Evidence-based methods' },
      { name: 'Services', href: '/services', description: 'Therapy options' },
    ]
  },
  { name: 'Online Sessions', href: '/california-online-sessions', icon: Video, description: 'California telehealth' },
  { name: 'Success Stories', href: '/testimonials', icon: MessageCircle, description: 'Real transformations' },
  { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Your questions answered' },
  { name: 'Resources', href: '/blog', icon: BookOpen, description: 'Healing insights' },
]

export function PremiumHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-md ${
        isScrolled ? 'py-1' : 'py-2'
      }`}
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center group py-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, duration: 0.3 }}
              className={`relative transition-all duration-500 ${
                isScrolled
                  ? 'h-12 md:h-14 lg:h-16'  // Scrolled (compact)
                  : 'h-15 md:h-[4.375rem] lg:h-20'  // At top (25% larger)
              }`}
              style={{ filter: 'drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.3))' }}
            >
              <Image
                src="/images/logo/affair-recovery-center-logo.png"
                alt="Affair Recovery Center of San Diego"
                width={1433}
                height={393}
                className="object-contain h-full w-auto"
                style={{ objectPosition: 'center', objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className="relative text-[#115659] hover:text-[#115659]/80 font-medium text-sm px-4 py-2 rounded-md transition-colors group flex items-center gap-1"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <ChevronDown className="w-3 h-3 relative z-10" />
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#115659]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-[#115659] hover:text-[#115659]/80 font-medium text-sm px-4 py-2 rounded-md transition-colors group flex items-center gap-1"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#115659]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.submenu && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-[#115659] hover:bg-[#115659]/5 transition-colors"
                      >
                        <div className="font-medium text-sm">{subItem.name}</div>
                        <div className="text-xs text-[#115659]/70">{subItem.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Premium CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 group overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-turquoise-400 group-hover:from-lime-500 group-hover:to-turquoise-500 transition-all duration-300" />
                <span className="relative text-white font-bold text-base" style={{ textShadow: '0px 1px 5px black' }}>
                  Start Healing Now
                </span>
                <ChevronRight className="relative w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-full text-[#115659] hover:bg-[#115659]/10 transition-all duration-300 self-center"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            backgroundColor: '#ffffff',
          }}
        >
          <div className="py-6 px-4 space-y-2">
            {navigation.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  {item.submenu ? (
                    <>
                      {/* Non-clickable header for items with submenu */}
                      <div className="flex items-center gap-3 text-[#115659] font-medium text-base px-4 py-2">
                        <IconComponent className="w-5 h-5" />
                        <div>
                          <div>{item.name}</div>
                          <div className="text-xs text-[#115659]/70 font-light">{item.description}</div>
                        </div>
                      </div>

                      {/* Mobile Submenu */}
                      <div className="ml-8 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-[#115659]/80 hover:bg-[#115659]/5 text-sm px-4 py-2 rounded-lg transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="font-medium">{subItem.name}</div>
                            <div className="text-xs text-[#115659]/60">{subItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-[#115659] hover:bg-[#115659]/5 font-medium text-base transition-all duration-300 px-4 py-2 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-5 h-5" />
                      <div>
                        <div>{item.name}</div>
                        <div className="text-xs text-[#115659]/70 font-light">{item.description}</div>
                      </div>
                    </Link>
                  )}
                </motion.div>
              )
            })}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navigation.length * 0.1, type: "spring", stiffness: 100 }}
              className="pt-4 border-t border-[#115659]/20"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-lime-400 to-turquoise-400 text-white rounded-full font-bold shadow-lg text-base"
                style={{ textShadow: '0px 1px 5px black' }}
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                Start Healing Now
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