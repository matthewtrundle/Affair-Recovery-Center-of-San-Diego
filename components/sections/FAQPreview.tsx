'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Can a relationship really recover from an affair?',
    answer: 'Yes. While not every relationship survives infidelity, many couples not only recover but build stronger, more intimate relationships than they had before. The key is both partners being willing to do the work.',
  },
  {
    question: 'How long does recovery typically take?',
    answer: `Every couple is different, but most see significant progress within 3-6 months of consistent therapy. Full recovery and rebuilding typically takes 12-24 months. The timeline depends on many factors including the nature of the betrayal and both partners' commitment.`,
  },
  {
    question: `What if my partner isn't ready for therapy?`,
    answer: `It's common for partners to be at different stages of readiness. I often work with individuals first to help them process their emotions and prepare for couples work. Sometimes seeing your own growth can inspire your partner to join.`,
  },
  {
    question: 'Do you take insurance?',
    answer: 'I am an out-of-network provider. I can provide superbills for potential insurance reimbursement. Many clients find that investing directly in their relationship recovery is worth the cost, and I offer flexible scheduling to maximize our time together.',
  },
]

export function FAQPreview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            You probably have many questions right now. Here are some I hear most often.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-sand-50 rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-slate">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/faq">
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}