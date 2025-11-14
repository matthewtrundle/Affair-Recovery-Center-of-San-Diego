'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

export function ProblemPromiseSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lightGray-50 via-white to-turquoise-50/30">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      </div>

      {/* Floating image elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full overflow-hidden"
      >
        <Image
          src="/images/sections/feature-zen-garden.webp"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-display font-bold text-deepTeal-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I understand the pain you're experiencing.
            </motion.h2>

            <div className="space-y-6 text-lg text-slate leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Whether you've just discovered the betrayal or you're months into processing this trauma, you're likely experiencing a whirlwind of emotions. The life you built together in San Diego &mdash; from weekend trips to La Jolla Cove to quiet evenings in Balboa Park &mdash; suddenly feels shattered.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                The hypervigilance, intrusive thoughts, and waves of grief you're experiencing are normal trauma responses. Your nervous system is working overtime to protect you. Understanding these reactions as biological, not personal failures, is the first step toward healing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Since 2008, I've helped hundreds of San Diego couples navigate this journey &mdash; from military families facing deployment-related infidelity to professionals managing the fallout from workplace affairs. My experience has shown me that with the right approach, couples can not only recover but create relationships stronger than before.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-turquoise-400/20 to-lime-400/20 blur-2xl" />

            {/* Glass card */}
            <div className="relative glass backdrop-blur-xl bg-white/90 rounded-3xl p-10 shadow-2xl border border-white/50">
              {/* Background image overlay */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
                <Image
                  src="/images/sections/feature-transformation.webp"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-turquoise-400 to-turquoise-500 mb-6"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-display font-bold text-deepTeal-700 mb-6">
                  You don't have to face this alone.
                </h3>

                <h4 className="text-xl font-semibold text-deepTeal-700 mb-4">
                  Why San Diego couples choose my practice:
                </h4>

                <ul className="space-y-4">
                  {[
                    "Direct, compassionate guidance without judgment",
                    "Evidence-based strategies from Gottman Method and Relational Life Therapy",
                    "Understanding of San Diego's unique challenges (military deployments, tech industry demands)",
                    "Practical homework designed for busy professional schedules",
                    "Clear treatment plans with measurable progress milestones"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start group"
                    >
                      <motion.span
                        className="text-turquoise mr-3 text-xl"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        •
                      </motion.span>
                      <span className="text-slate group-hover:text-deepTeal-700 transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}