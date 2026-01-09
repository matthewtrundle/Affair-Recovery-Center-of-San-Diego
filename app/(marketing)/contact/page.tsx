'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Phone,
  MapPin,
  Clock,
  Globe,
  ExternalLink,
  Shield,
  Heart,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { ContactForm } from '@/components/forms/ContactForm'
import { PageHeader } from '@/components/sections/PageHeader'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call or Text',
    description: 'Ready to talk? Call or text me directly. I\'m here to answer your questions and discuss how I can help.',
    action: '(619) 881-0593',
    href: 'tel:+16198810593',
    isPrimary: true,
    details: 'Yes, texting is totally fine'
  }
]

const officeInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    content: (
      <>
        <address className="text-slate not-italic mb-4">
          <div className="font-medium text-navy">Jordan Zipkin, LMFT</div>
          Carmel Valley Professional Center<br />
          Right off the 5 at Del Mar Heights Road<br />
          San Diego, CA 92130
        </address>
        <div className="text-sm text-slate-600 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span>🚗</span>
            <span>Free parking (no hunting for spots!)</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span>☕</span>
            <span>Starbucks in the building</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Private, discrete entrance</span>
          </div>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://maps.google.com/?q=123+Main+Street+San+Diego+CA+92101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Get Directions
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </>
    )
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: (
      <>
        <table className="w-full text-slate mb-4">
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-2 pr-4">Mon–Thu</td>
              <td className="py-2 text-right font-medium text-navy whitespace-nowrap">9 AM – 7 PM</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Friday</td>
              <td className="py-2 text-right font-medium text-navy whitespace-nowrap">9 AM – 5 PM</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Saturday</td>
              <td className="py-2 text-right font-medium text-coral whitespace-nowrap">By appointment</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Sunday</td>
              <td className="py-2 text-right font-medium text-slate-400 whitespace-nowrap">Closed</td>
            </tr>
          </tbody>
        </table>
        <div className="text-sm text-slate-600 bg-turquoise-50 rounded-lg p-3">
          <div className="font-medium text-turquoise-700 mb-1">Flexible Scheduling</div>
          <div>Early morning & evening appointments available</div>
        </div>
      </>
    )
  },
  {
    icon: Globe,
    title: 'Service Area',
    content: (
      <>
        <div className="text-slate space-y-4">
          <div>
            <p className="font-medium text-navy mb-2">In-Person Sessions</p>
            <p className="text-sm text-slate-600 mb-3">San Diego County including:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {['La Jolla', 'Del Mar', 'Carlsbad', 'Encinitas', 'Carmel Valley', 'Downtown'].map((area) => (
                <span key={area} className="px-2 py-1 bg-turquoise-50 text-turquoise-700 rounded-md">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-100 pt-4">
            <p className="font-medium text-navy mb-2">Telehealth Sessions</p>
            <p className="text-sm text-slate-600">Available for all California residents via secure, HIPAA-compliant video</p>
          </div>
        </div>
      </>
    )
  }
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Confidential & HIPAA Compliant"
        badgeIcon="message"
        title="Get in"
        titleHighlight="Touch"
        subtitle="Multiple ways to connect. Choose what feels most comfortable for you."
        variant="turquoise"
      />

      {/* Contact Methods */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              Take the first step toward healing. I'm here to support you.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PremiumCard
                  variant={method.isPrimary ? 'gradient' : 'glass'}
                  hoverEffect="lift"
                  className={`${method.isPrimary ? 'bg-gradient-to-br from-navy to-deepTeal-700' : 'bg-white/80 backdrop-blur-sm border border-turquoise-100'} transition-all duration-300`}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`p-3 rounded-xl ${method.isPrimary ? 'bg-white/20' : 'bg-turquoise-100'} flex-shrink-0`}
                    >
                      <method.icon className={`h-6 w-6 ${method.isPrimary ? 'text-white' : 'text-turquoise-700'}`} />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className={`text-xl lg:text-2xl font-heading font-semibold mb-3 ${method.isPrimary ? 'text-white' : 'text-navy'}`}>
                        {method.title}
                      </h3>
                      <p className={`text-base lg:text-lg mb-4 leading-relaxed ${method.isPrimary ? 'text-white/80' : 'text-slate'}`}>
                        {method.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <Button
                          asChild
                          variant={method.isPrimary ? 'secondary' : 'default'}
                          size="lg"
                          className={method.isPrimary ? 'bg-white text-navy hover:bg-lightGray-50' : ''}
                        >
                          <a href={method.href} className="inline-flex items-center gap-2">
                            {method.action}
                            {method.href.startsWith('http') && <ExternalLink className="h-4 w-4" />}
                          </a>
                        </Button>
                        <span className={`text-sm ${method.isPrimary ? 'text-white/60' : 'text-slate-500'}`}>
                          {method.details}
                        </span>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-lightGray-50 to-turquoise-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
              Visit My Practice
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              A comfortable, private space designed for healing conversations.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
            {officeInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PremiumCard
                  variant="solid"
                  hoverEffect="tilt"
                  className="h-full bg-white shadow-lg"
                >
                  <div className="flex flex-col h-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 bg-turquoise-100 rounded-xl w-fit mb-4"
                    >
                      <info.icon className="h-6 w-6 text-turquoise-700" />
                    </motion.div>

                    <h3 className="text-xl font-heading font-semibold text-navy mb-4">
                      {info.title}
                    </h3>

                    <div className="flex-1">
                      {info.content}
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
                What to Expect When You Reach Out
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <PremiumCard variant="glass" hoverEffect="glow" className="h-full bg-turquoise-50/50">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-turquoise-100 rounded-lg">
                      <Heart className="h-5 w-5 text-turquoise-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-navy mb-3">
                        Compassionate Response
                      </h3>
                      <ul className="space-y-2 text-slate">
                        <li>• Personal response within 24-48 hours</li>
                        <li>• Understanding of your unique situation</li>
                        <li>• No judgment, just support</li>
                        <li>• Clear next steps outlined</li>
                      </ul>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <PremiumCard variant="glass" hoverEffect="glow" className="h-full bg-lime-50/50">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-lime-100 rounded-lg">
                      <Shield className="h-5 w-5 text-lime-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-navy mb-3">
                        Privacy Protected
                      </h3>
                      <ul className="space-y-2 text-slate">
                        <li>• HIPAA-compliant communications</li>
                        <li>• Secure email encryption available</li>
                        <li>• Discrete scheduling options</li>
                        <li>• Confidentiality guaranteed</li>
                      </ul>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-12 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PremiumCard variant="gradient" className="bg-gradient-to-r from-coral/90 to-lime-600/90">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    Crisis Resources
                  </h3>
                  <p className="text-white/90 mb-4">
                    If you're experiencing a mental health emergency or having thoughts of self-harm, please reach out for immediate help:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="secondary" asChild className="bg-white text-lime-700 hover:bg-lightGray-50">
                      <a href="tel:988" className="inline-flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Crisis Lifeline: 988
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
                      <a href="tel:911" className="inline-flex items-center gap-2">
                        Emergency: 911
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>
    </>
  )
}