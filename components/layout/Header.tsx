'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { trackScheduleClick, trackTelClick } from '@/lib/analytics'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleScheduleClick = () => {
    trackScheduleClick('header')
  }

  const handlePhoneClick = () => {
    trackTelClick('header')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl lg:text-2xl font-heading font-semibold text-navy">
              ARC San Diego
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'bg-navy/10 text-navy'
                    : 'text-slate hover:bg-navy/5 hover:text-navy'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              onClick={handlePhoneClick}
            >
              <a href="tel:+16195550123">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              onClick={handleScheduleClick}
            >
              <Link href="/schedule">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consult
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-slate hover:text-navy hover:bg-navy/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-base font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'bg-navy/10 text-navy'
                    : 'text-slate hover:bg-navy/5 hover:text-navy'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
              <Button
                variant="outline"
                className="w-full justify-center"
                asChild
                onClick={handlePhoneClick}
              >
                <a href="tel:+16195550123">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                className="w-full justify-center"
                asChild
                onClick={handleScheduleClick}
              >
                <Link href="/schedule">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}