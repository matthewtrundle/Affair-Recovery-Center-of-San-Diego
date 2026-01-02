'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function ImmersiveHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0A4F63] via-[#4A7C9E] to-[#FFB347]/20">
      {/* Background Image - Static */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/sections/beach-la-jolla-cove.webp"
          alt="La Jolla Cove at sunset"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A4F63]/90 via-[#0A4F63]/40 to-transparent z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A4F63]/50 via-transparent to-[#0A4F63]/50 z-20" />

      {/* Content */}
      <div className="relative z-30 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Center content */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Small intro */}
              <p className="text-[#FFB347] text-sm md:text-base uppercase tracking-[0.3em] mb-6">
                From Torrey Pines to Mission Bay • Serving all of San Diego
              </p>

              {/* Main headline */}
              <h1 className="mb-8">
                <span className="block text-4xl md:text-6xl lg:text-7xl font-thin text-[#E8F5F2] leading-tight">
                  When trust breaks like morning surf
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-[#FFB347] italic mt-2">
                  I'll help you rebuild stronger
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-[#E8F5F2]/80 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                Hey, I'm Jordan. Been helping couples from Point Loma to Rancho Bernardo
                work through the hardest stuff for 15+ years. When your world feels upside down,
                I know how to help you find solid ground again.
              </p>

              {/* Local touch */}
              <p className="text-lg text-[#E8F5F2]/60 mb-12 italic">
                "My Carmel Valley office — right off the 5, easy parking, and yes, a ocean view that actually helps"
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="group relative px-10 py-5 overflow-hidden hover:scale-105 transition-transform">
                    <span className="absolute inset-0 bg-[#FFB347]/20 backdrop-blur-md rounded-full border border-[#FFB347]/50" />
                    <span className="relative z-10 text-[#E8F5F2] text-lg tracking-wide group-hover:text-[#FFB347] transition-colors">
                      Let's Talk • Free Consultation
                    </span>
                  </button>
                </Link>

                <Link href="#story">
                  <button className="group relative px-10 py-5 hover:scale-105 transition-transform">
                    <span className="relative z-10 text-[#E8F5F2]/80 text-lg tracking-wide group-hover:text-[#E8F5F2] transition-colors">
                      Hear Our Stories ↓
                    </span>
                  </button>
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-8 justify-center mt-12 text-[#E8F5F2]/50 text-sm">
                <span>Local SD Therapist Since 2008</span>
                <span>•</span>
                <span>Military Family Specialist</span>
                <span>•</span>
                <span>Weekends for Busy Professionals</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
