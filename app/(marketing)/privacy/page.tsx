import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy | Affair Recovery Center of San Diego',
  description: 'Privacy policy for the Affair Recovery Center of San Diego. Learn how we protect your personal information and maintain confidentiality.',
  keywords: ['privacy policy', 'data protection', 'confidentiality', 'therapy privacy'],
  url: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-lime-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            Your privacy matters. Here&apos;s how we protect your information.
          </p>
          <p className="text-sm text-slate/70 mt-4">
            Last updated: November 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Introduction
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                The Affair Recovery Center of San Diego (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Information You Provide
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  We may collect information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside text-lg text-slate leading-relaxed space-y-2 ml-4">
                  <li>Schedule an appointment through Calendly</li>
                  <li>Contact us via email or phone</li>
                  <li>Subscribe to our newsletter (if applicable)</li>
                  <li>Engage with our services as a client</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-lg text-slate leading-relaxed mb-3">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-lg text-slate leading-relaxed space-y-2 ml-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>General geographic location (city/region level)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our therapy services</li>
                <li>Schedule and manage appointments</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send appointment reminders and service-related communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Third-Party Services
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Calendly
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  We use Calendly for appointment scheduling. When you book an appointment, your information is subject to Calendly&apos;s privacy policy. We encourage you to review their privacy practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Analytics
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  We use analytics tools (such as Google Analytics and Plausible) to understand how visitors use our website. These tools collect anonymous data about website usage patterns to help us improve our site. This data does not identify individual users.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Data Security
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p>
                For information about how we protect your health information specifically, please see our <a href="/hipaa" className="text-turquoise-600 hover:text-turquoise-700 underline">HIPAA Notice</a>.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Your Rights
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of marketing communications</li>
              </ul>
              <p className="mt-4">
                California residents may have additional rights under the California Consumer Privacy Act (CCPA). Contact us for more information about exercising your rights.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Children&apos;s Privacy
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                Our website and services are not directed to children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Changes to This Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated &quot;Last updated&quot; date. We encourage you to review this privacy policy periodically.
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
                If you have questions about this privacy policy or our privacy practices, please contact us:
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
        title="Questions About Privacy?"
        description="We're happy to discuss how we protect your information."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  )
}
