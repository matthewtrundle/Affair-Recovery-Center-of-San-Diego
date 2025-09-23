'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { CheckCircle, MapPin, GraduationCap, Clock, Heart, Star } from 'lucide-react'

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects for images
  const image1Y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-gradient-to-br from-warmSand-50 via-white to-pacificBlue-50 overflow-hidden"
    >
      {/* Beach-inspired background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sunsetCoral-200 to-sunsetCoral-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-pacificBlue-200 to-pacificBlue-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-warmSand-300 to-warmSand-400 rounded-full blur-2xl" />
      </div>

      {/* Subtle wave texture */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-texture-wave opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* Left Column - Images with Parallax */}
          <motion.div
            className="relative lg:col-span-2"
            style={{ y: textY }}
          >
            <div className="relative">
              {/* Main large image */}
              <motion.div
                style={{ y: image1Y }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/therapist/Jordan1.webp"
                    alt="Jordan Zipkin, LMFT - Professional therapist"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[500px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Smaller floating image */}
              <motion.div
                style={{ y: image2Y }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white">
                  <Image
                    src="/images/therapist/Jordan2.webp"
                    alt="Jordan Zipkin, LMFT"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Years of experience callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50"
            >
              <div className="text-2xl font-display font-bold text-pacificBlue-800">15+</div>
              <div className="text-sm text-pacificBlue-600 font-beach-clean">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-sunsetCoral-100 text-sunsetCoral-700 px-4 py-2 rounded-full text-sm font-beach-clean font-medium mb-4">
                <Heart className="w-4 h-4" />
                Meet Your Therapist
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-coastalSlate-800 mb-4">
                Meet Jordan Zipkin,{' '}
                <span className="text-pacificBlue-600">LMFT</span>
              </h2>
              <p className="text-xl text-coastalSlate-600 font-beach-clean leading-relaxed">
                A trusted local expert who happens to be really good at what she does
              </p>
            </motion.div>

            {/* Bio content - Two column grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <div className="space-y-4">
                <p className="text-base text-coastalSlate-700 leading-relaxed font-beach-clean">
                  For over 15 years, I've had the privilege of helping San Diego couples navigate their most challenging moments. My approach balances genuine care with proven expertise.
                </p>
                <p className="text-base text-coastalSlate-700 leading-relaxed font-beach-clean">
                  I believe couples need more than talk therapy—they need evidence-based tools and practical strategies that actually work.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-base text-coastalSlate-700 leading-relaxed font-beach-clean">
                  My specialized training in the Gottman Method and Relational Life Therapy has helped thousands of couples rebuild trust and create stronger relationships.
                </p>
                <p className="text-base text-coastalSlate-700 leading-relaxed font-beach-clean">
                  My Carmel Valley office provides a safe, comfortable space, conveniently located near I-5 and accessible from throughout San Diego County.
                </p>
              </div>
            </motion.div>

            {/* Credentials - Two columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8"
            >
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pacificBlue-100 to-pacificBlue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5 text-pacificBlue-600" />
                    </div>
                    <span className="text-coastalSlate-700 font-beach-clean font-medium">
                      {credential.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 mb-8"
            >
              <h3 className="text-xl font-display font-medium text-coastalSlate-800 mb-4">
                Professional Highlights
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-sunsetCoral-500 flex-shrink-0 mt-0.5" />
                    <span className="text-coastalSlate-700 font-beach-clean leading-relaxed">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pacificBlue-500 to-pacificBlue-600 text-white font-beach-clean font-semibold rounded-full hover:from-pacificBlue-600 hover:to-pacificBlue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/approach"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-pacificBlue-700 font-beach-clean font-semibold rounded-full border-2 border-pacificBlue-200 hover:bg-pacificBlue-50 hover:border-pacificBlue-300 transition-all duration-300"
              >
                Learn About My Approach
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <motion.path
            d="M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z"
            fill="rgba(142, 166, 155, 0.1)"
            animate={{
              d: [
                "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z",
                "M0,20 Q300,35 600,20 T1200,20 L1200,40 L0,40 Z",
                "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </section>
  )
}