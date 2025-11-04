'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Globe,
  ExternalLink,
  Shield,
  Heart,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PremiumCard } from '@/components/ui/PremiumCard'
import { generateMetadata as generateSEO, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/seo'

// Note: This would be generated on the server in a real implementation
// export const metadata: Metadata = generateSEO({
//   title: 'Contact',
//   description: 'Contact Jordan Zipkin, LMFT for couples therapy specializing in affair recovery in San Diego. Available for in-person and telehealth sessions.',
//   keywords: ['contact therapist San Diego', 'couples counseling contact', 'affair recovery therapist'],
//   url: '/contact',
// })

const contactMethods = [
  {
    icon: Calendar,
    title: 'Schedule a Free Call',
    description: 'Let\'s talk for 15 minutes (free). I\'ll answer your questions, you\'ll see if I\'m the right fit. No pressure, just real conversation.',
    action: 'Grab a Time That Works',
    href: '/schedule',
    isPrimary: true,
    details: 'Weekday + weekend slots available'
  },
  {
    icon: Phone,
    title: 'Call or Text',
    description: 'Sometimes you need to talk NOW. Or maybe online booking isn\'t your thing. Call or text me directly.',
    action: '(619) 555-0123',
    href: 'tel:+16195550123',
    isPrimary: false,
    details: 'Yes, texting is totally fine'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Need to write it all out? Have specific questions? Not ready to talk yet? Email works great.',
    action: 'jordan@affairrecoverysd.com',
    href: 'mailto:jordan@affairrecoverysd.com',
    isPrimary: false,
    details: 'I\'ll get back to you within 48 hours'
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
        <div className="space-y-3 text-slate mb-4">
          <div className="flex justify-between items-center py-1">
            <span>Monday - Thursday:</span>
            <span className="font-medium text-navy">9:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Friday:</span>
            <span className="font-medium text-navy">9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Saturday:</span>
            <span className="font-medium text-coral">By appointment</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Sunday:</span>
            <span className="font-medium text-slate-400">Closed</span>
          </div>
        </div>
        <div className="text-sm text-slate-600 bg-turquoise-50 rounded-lg p-3">
          <div className="font-medium text-turquoise-700 mb-1">Flexible Scheduling:</div>
          <div>Early morning and evening appointments available for working professionals</div>
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
            <p className="font-medium text-navy mb-2">In-Person Sessions:</p>
            <p className="text-sm mb-2">San Diego County including:</p>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div>• Downtown San Diego</div>
              <div>• La Jolla</div>
              <div>• Del Mar</div>
              <div>• Carlsbad</div>
              <div>• Escondido</div>
              <div>• Encinitas</div>
            </div>
          </div>
          <div className="border-t border-turquoise-100 pt-4">
            <p className="font-medium text-navy mb-2">Telehealth Sessions:</p>
            <p className="text-sm">Available for all California residents with secure, HIPAA-compliant video platform</p>
          </div>
        </div>
      </>
    )
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      {typeof window === 'undefined' && (
        <>
          {generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ])}
          {generateLocalBusinessSchema()}
        </>
      )}

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-deepTeal-50 via-lightGray-50 to-turquoise-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-coral/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sage/10 to-transparent rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-navy mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-slate max-w-3xl mx-auto leading-relaxed">
              Multiple ways to connect. Choose what feels most comfortable for you.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex items-center justify-center gap-2 text-slate-600"
            >
              <Shield className="h-4 w-4 text-sage" />
              <span className="text-sm">Confidential • Secure • HIPAA Compliant</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

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