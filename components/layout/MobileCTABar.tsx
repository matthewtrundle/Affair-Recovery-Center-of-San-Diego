'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MessageSquare } from 'lucide-react'
import { trackTelClick } from '@/lib/analytics'

export function MobileCTABar() {
  const pathname = usePathname()

  // Hide on contact page since they're already there
  if (pathname === '/contact') {
    return null
  }

  const handlePhoneClick = () => {
    trackTelClick('mobile_cta_bar')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden">
      {/* Main bar with gradient background */}
      <div className="bg-gradient-to-r from-deepTeal-700 via-deepTeal-600 to-turquoise-600 px-4 py-3 shadow-lg border-t border-white/10">
        <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
          {/* Phone link */}
          <a
            href="tel:+16198810593"
            onClick={handlePhoneClick}
            className="flex items-center gap-2 text-white hover:text-lime-300 transition-colors"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-sm">
              <div className="font-medium">(619) 881-0593</div>
              <div className="text-xs text-white/70">Tap to call</div>
            </div>
          </a>

          {/* Contact button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-lime-400 to-turquoise-400 text-white font-semibold rounded-full shadow-md hover:from-lime-500 hover:to-turquoise-500 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
