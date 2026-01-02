'use client'

import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import { trackTelClick } from '@/lib/analytics'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services/betrayal-recovery' },
    { name: 'Approach', href: '/approach' },
    { name: 'Online Sessions', href: '/california-online-sessions' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Notice', href: '/hipaa' },
  ],
}

export function Footer() {
  const handlePhoneClick = () => {
    trackTelClick('footer')
  }

  return (
    <footer className="bg-gradient-to-b from-deepTeal-800 to-deepTeal-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-2 lg:pr-8">
            <h3 className="text-2xl font-display font-light mb-2">
              ARC San Diego
            </h3>
            <p className="text-sm text-lime-400 mb-4">
              Affair Recovery Center
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Evidence-based couples therapy specializing in affair recovery, betrayal trauma,
              and rebuilding trust. Jordan Zipkin, LMFT, brings over 15 years of experience
              helping San Diego couples heal using Gottman Method and Relational Life Therapy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="tel:+16198810593"
                  onClick={handlePhoneClick}
                  className="flex items-start hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-lime-400" />
                  <div>
                    <p className="group-hover:text-white">(619) 881-0593</p>
                    <p className="text-xs text-gray-400">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-lime-400" />
                <div>
                  <p>Carmel Valley Office</p>
                  <p>San Diego, CA 92130</p>
                  <p className="text-xs text-gray-400">Near I-5 & SR-56</p>
                </div>
              </li>
              <li className="flex items-start mt-3">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-lime-400" />
                <div>
                  <p>Office Hours</p>
                  <p className="text-xs text-gray-400">Mon-Thu: 9am-7pm</p>
                  <p className="text-xs text-gray-400">Fri: 9am-5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Affair Recovery Center of San Diego
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Jordan Zipkin, LMFT #123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}