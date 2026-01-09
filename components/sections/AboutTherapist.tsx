'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, MapPin, GraduationCap, Clock, Heart, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const credentials = [
  { icon: GraduationCap, text: "Licensed Marriage & Family Therapist (LMFT)" },
  { icon: Star, text: "Gottman Method Couples Therapy Level 3" },
  { icon: CheckCircle, text: "Relational Life Therapy Training" },
  { icon: Clock, text: "15+ years helping San Diego couples" },
  { icon: MapPin, text: "Carmel Valley office, convenient to I-5" },
]

const achievements = [
  "Published researcher in attachment and trauma healing",
  "Specialized training in betrayal trauma recovery",
  "Member of the American Association for Marriage and Family Therapy",
  "Regular speaker at relationship wellness conferences"
]

export function AboutTherapist() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Dark background with sunset beach image */}
      <div className="absolute inset-0">
        <Image
          src="/images/beach/sunset-cliffs-silhouette.webp"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deepTeal-900/95 via-deepTeal-800/90 to-deepTeal-900/95" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-20 items-start">

          {/* Left Column - Images + Professional Highlights */}
          <motion.div
            className="relative lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="relative">
              {/* Main large image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                  <Image
                    src="/images/therapist/Jordan1.webp"
                    alt="Jordan Zipkin, LMFT - Professional therapist"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[400px] group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepTeal-900/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Smaller floating image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-4 -right-8 w-36 h-36 lg:w-40 lg:h-40 group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white/20">
                  <Image
                    src="/images/therapist/Jordan2.webp"
                    alt="Jordan Zipkin, LMFT"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              {/* Years of experience callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
              >
                <div className="text-2xl font-display font-bold text-deepTeal-600">15+</div>
                <div className="text-sm text-deepTeal-700 font-body">Years Experience</div>
              </motion.div>
            </div>

            {/* Professional Highlights - Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-40"
            >
              <h3 className="text-xl font-display font-medium text-white mb-4">
                Professional Highlights
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 font-body leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Section header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 text-lime-400 px-4 py-2 rounded-full text-sm font-body font-medium mb-4 border border-white/10">
                <Heart className="w-4 h-4" />
                Meet Your Therapist
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
                Meet Jordan Zipkin,{' '}
                <span className="text-turquoise-300">LMFT</span>
              </h2>
              <p className="text-xl text-white/90 font-heading leading-relaxed">
                A trusted local expert who happens to be really good at what he does
              </p>
            </div>

            {/* Bio content - Two column grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <p className="text-base text-white/80 leading-relaxed font-body">
                  For over 15 years, I've had the privilege of helping San Diego couples navigate their most challenging moments. My approach balances genuine care with proven expertise—informed by both professional training and personal experience with the pain of betrayal and the journey of healing.
                </p>
                <p className="text-base text-white/80 leading-relaxed font-body">
                  I believe couples need more than talk therapy—they need evidence-based tools and practical strategies that actually work. That's why I integrate the Gottman Method, Relational Life Therapy, and trauma-informed approaches.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-base text-white/80 leading-relaxed font-body">
                  I understand what you're going through because I've been there myself. That personal understanding, combined with specialized training, has helped hundreds of couples rebuild trust and create stronger relationships than they had before.
                </p>
                <p className="text-base text-white/80 leading-relaxed font-body">
                  My Carmel Valley office provides a safe, comfortable space, conveniently located near I-5 and accessible from throughout San Diego County.
                </p>
              </div>
            </div>

            {/* Credentials - Two columns */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon
                return (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
                      <IconComponent className="w-5 h-5 text-turquoise-300" />
                    </div>
                    <span className="text-white/90 font-body font-medium">
                      {credential.text}
                    </span>
                  </div>
                )
              })}
            </div>

          </motion.div>
        </div>

        {/* CTAs - Full width centered row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Button
            variant="pill-outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
            asChild
          >
            <Link href="/approach">
              Learn About My Approach
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/contact">
              Begin Your Healing
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
