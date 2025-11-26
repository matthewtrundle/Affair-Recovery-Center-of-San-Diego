import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Terms of Service | Affair Recovery Center of San Diego',
  description: 'Terms of service for the Affair Recovery Center of San Diego website. Review our website usage terms and conditions.',
  keywords: ['terms of service', 'terms and conditions', 'website terms', 'therapy terms'],
  url: '/terms',
})

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-lime-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            Please read these terms carefully before using our website.
          </p>
          <p className="text-sm text-slate/70 mt-4">
            Last updated: November 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Agreement */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                By accessing or using the Affair Recovery Center of San Diego website (&quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Site.
              </p>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the Site following any changes constitutes acceptance of those changes.
              </p>
            </div>
          </div>

          {/* Website Use */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Website Use
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Permitted Use
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  This Site is provided for informational purposes about our therapy services. You may browse the Site, learn about our services, schedule appointments, and contact us through the provided channels.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Prohibited Activities
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-lg text-slate leading-relaxed space-y-2 ml-4">
                  <li>Use the Site for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Site</li>
                  <li>Copy, modify, or distribute Site content without permission</li>
                  <li>Use automated systems to access the Site without our consent</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Disclaimers */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Important Disclaimers
            </h2>
            <div className="space-y-6">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Not Medical Advice
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  <strong>The content on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.</strong> Reading information on this Site does not create a therapist-client relationship. Always seek the advice of a qualified mental health professional with any questions you may have regarding your mental health or relationship concerns.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Emergency Situations
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  <strong>If you are in crisis or experiencing a mental health emergency, please call 911 or go to your nearest emergency room.</strong> You can also contact the National Suicide Prevention Lifeline at 988 or the Crisis Text Line by texting HOME to 741741.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  No Guarantees
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  While we strive to provide accurate and helpful information, we make no guarantees about the completeness, reliability, or accuracy of the information on this Site. Individual results from therapy vary, and we cannot guarantee specific outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Intellectual Property
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                All content on this Site—including text, graphics, logos, images, and software—is the property of the Affair Recovery Center of San Diego or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works from, or publicly display any content from this Site without our prior written permission.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Third-Party Links
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                This Site may contain links to third-party websites (such as Calendly for scheduling). These links are provided for your convenience only. We do not control and are not responsible for the content, privacy policies, or practices of any third-party sites.
              </p>
              <p>
                Your use of third-party websites is at your own risk and subject to the terms and conditions of those sites.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                To the fullest extent permitted by law, the Affair Recovery Center of San Diego shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this Site.
              </p>
              <p>
                This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses, even if we have been advised of the possibility of such damages.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Indemnification
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                You agree to indemnify and hold harmless the Affair Recovery Center of San Diego, its owner, and affiliates from any claims, damages, losses, or expenses arising from your use of this Site or violation of these Terms of Service.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Governing Law
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action arising from these terms shall be brought in the courts of San Diego County, California.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Contact Us
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-lightGray-100 p-6 rounded-lg mt-4">
                <p className="font-semibold text-deepTeal-600">Affair Recovery Center of San Diego</p>
                <p>Jordan Zipkin, LMFT</p>
                <p>Carmel Valley, San Diego, CA 92130</p>
                <p className="mt-2">
                  <a href="mailto:jordan@affairrecoverysandiego.com" className="text-turquoise-600 hover:text-turquoise-700 underline">
                    jordan@affairrecoverysandiego.com
                  </a>
                </p>
                <p>
                  <a href="tel:+18585551234" className="text-turquoise-600 hover:text-turquoise-700 underline">
                    (858) 555-1234
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Ready to Get Started?"
        description="Schedule your free consultation today."
        buttonText="Schedule Consultation"
        buttonHref="/schedule"
      />
    </>
  )
}
