'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

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
        <img
          src="/images/sections/feature-zen-garden.webp"
          alt=""
          className="w-full h-full object-cover"
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
              className="text-4xl lg:text-5xl font-display font-light text-deepTeal-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              It Hurts More Than You Can Put Into Words
            </motion.h2>

            <div className="space-y-6 text-lg text-slate leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                One day you thought your life was steady—the next, everything collapsed.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                You replay moments, search for answers, and wonder if you'll ever feel normal again. Shame
                creeps in: Why am I still here? Why can't I stop asking questions?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                And your partner? They're trapped in their own shame, unsure how to repair the damage or
                respond without making it worse.
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
                <img
                  src="/images/sections/feature-transformation.webp"
                  alt=""
                  className="w-full h-full object-cover"
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

                <h3 className="text-2xl lg:text-3xl font-display font-normal text-deepTeal-700 mb-6">
                  There Is a Path Forward
                </h3>

                <p className="text-lg text-slate mb-6 leading-relaxed">
                  You don't have to do this alone. Affair Recovery of San Diego gives you a proven step-by-step
                  framework to heal.
                </p>

                <p className="text-lg text-slate mb-6 leading-relaxed">
                  I'm Jordan Zipkin, a therapist trained in trauma recovery, relational life therapy, and mindfulness.
                  I'll help you calm the rollercoaster of emotions, rebuild safety and trust, and reconnect with each
                  other in ways that feel real and lasting.
                </p>

                <h4 className="text-xl font-semibold text-deepTeal-700 mb-4">
                  Why Couples Choose Affair Recovery of San Diego
                </h4>

                <ul className="space-y-4">
                  {[
                    'A Clear Roadmap to Rebuilding Trust – Know exactly what questions to ask, how to get consistent answers, and how your partner can show up with openness and empathy.',
                    'Practical Tools to Calm the Chaos – Learn proven skills for regulating overwhelming emotions so you can stop spinning in anger, fear, or guilt.',
                    "I Get Through to Partners Who've Been Defensive – As a male therapist, I'm often able to reach the partner who strayed (whether man or woman) in ways others haven't. Hurt partners tell me I'm the first person who got their partner to truly apologize, drop defensiveness, and show genuine empathy for their pain.",
                    "Reconnect as Partners—and as Friends – Using Gottman's framework, we'll rebuild your friendship and intimacy so you don't just stay together, you enjoy being together."
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