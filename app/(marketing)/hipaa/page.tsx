import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = generateSEO({
  title: 'HIPAA Notice of Privacy Practices | Affair Recovery Center of San Diego',
  description: 'HIPAA Notice of Privacy Practices for the Affair Recovery Center of San Diego. Learn how we protect your health information.',
  keywords: ['HIPAA notice', 'privacy practices', 'health information privacy', 'therapy confidentiality'],
  url: '/hipaa',
})

export default function HIPAAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-lightGray-100 via-white to-lime-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-6xl text-deepTeal-600 mb-6">
            Notice of Privacy Practices
          </h1>
          <p className="text-lg md:text-xl text-slate leading-relaxed max-w-3xl mx-auto">
            This notice describes how medical information about you may be used and disclosed and how you can get access to this information.
          </p>
          <p className="text-sm text-slate/70 mt-4">
            Effective Date: November 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Important Notice */}
          <div className="mb-16 bg-deepTeal-50 border-l-4 border-deepTeal-500 p-6 rounded-r-lg">
            <p className="text-lg text-deepTeal-800 font-semibold">
              Please review this notice carefully. Your privacy is important to us.
            </p>
          </div>

          {/* Our Commitment */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Our Commitment to Your Privacy
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                The Affair Recovery Center of San Diego is committed to protecting the privacy of your health information. We are required by law to maintain the privacy of Protected Health Information (PHI) and to provide you with this Notice of Privacy Practices.
              </p>
              <p>
                This notice explains how we may use and disclose your PHI and describes your rights regarding this information. We are required to follow the terms of this notice while it is in effect.
              </p>
            </div>
          </div>

          {/* What is PHI */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              What is Protected Health Information (PHI)?
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                PHI is information about you, including demographic information, that may identify you and relates to your past, present, or future physical or mental health condition, the provision of health care to you, or the payment for that care.
              </p>
              <p>
                Examples of PHI include your name, address, phone number, Social Security number, dates of service, diagnoses, treatment plans, and session notes.
              </p>
            </div>
          </div>

          {/* How We May Use PHI */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              How We May Use and Disclose Your PHI
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  For Treatment
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  We may use your PHI to provide, coordinate, or manage your mental health care. For example, we may share information with another health care provider to whom you have been referred for consultation or coordination of care.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  For Payment
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  We may use and disclose your PHI to bill and collect payment for your treatment. For example, we may send claims to your health insurance company with diagnostic and procedure codes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  For Health Care Operations
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  We may use your PHI for our healthcare operations, such as quality assessment, case management, and administrative activities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  With Your Written Authorization
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  Other uses and disclosures of your PHI require your written authorization. You may revoke an authorization at any time by providing written notice.
                </p>
              </div>
            </div>
          </div>

          {/* Disclosures Without Authorization */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Disclosures Without Your Authorization
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                We may use or disclose your PHI without your authorization in limited circumstances, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>As required by law:</strong> When required by federal, state, or local law</li>
                <li><strong>To prevent serious harm:</strong> When necessary to prevent a serious threat to your health and safety or the health and safety of others</li>
                <li><strong>Child abuse or neglect:</strong> When we reasonably believe a child is a victim of abuse or neglect</li>
                <li><strong>Elder abuse:</strong> When we reasonably believe an elderly or dependent adult is a victim of abuse or neglect</li>
                <li><strong>Judicial proceedings:</strong> In response to a court order or subpoena</li>
                <li><strong>Law enforcement:</strong> For certain law enforcement purposes as permitted by law</li>
                <li><strong>Coroners and medical examiners:</strong> For identification purposes and determining cause of death</li>
              </ul>
            </div>
          </div>

          {/* Psychotherapy Notes */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Psychotherapy Notes
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                Psychotherapy notes receive special protection under HIPAA. These are notes recorded by a mental health professional documenting the contents of a counseling session. We generally will not disclose psychotherapy notes without your written authorization.
              </p>
              <p>
                Exceptions include situations where disclosure is necessary to defend ourselves in a legal action, to avert a serious threat to health or safety, for supervision purposes, or as required by law.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Your Rights Regarding Your PHI
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Right to Inspect and Copy
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  You have the right to inspect and obtain a copy of your PHI that we maintain. Requests must be made in writing. We may charge a reasonable fee for copies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Right to Amend
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  You have the right to request that we amend your PHI if you believe it is incorrect or incomplete. We may deny the request in certain circumstances.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Right to an Accounting of Disclosures
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  You have the right to request a list of certain disclosures we have made of your PHI. This does not include disclosures for treatment, payment, or health care operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Right to Request Restrictions
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  You have the right to request restrictions on how we use or disclose your PHI. We are not required to agree to your request, except in certain circumstances involving payment from your own funds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Right to Request Confidential Communications
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  You have the right to request that we communicate with you about health matters in a certain way or at a certain location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-deepTeal-600 mb-3">
                  Right to a Paper Copy
                </h3>
                <p className="text-lg text-slate leading-relaxed">
                  You have the right to obtain a paper copy of this Notice of Privacy Practices upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to This Notice */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Changes to This Notice
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                We reserve the right to change this notice and make the new notice provisions effective for all PHI we maintain. If we make significant changes, we will post the revised notice on our website and make copies available upon request.
              </p>
            </div>
          </div>

          {/* Complaints */}
          <div className="mb-16">
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Complaints
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the U.S. Department of Health and Human Services. You will not be penalized or retaliated against for filing a complaint.
              </p>
              <p>
                To file a complaint with HHS, visit: <a href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html" target="_blank" rel="noopener noreferrer" className="text-turquoise-600 hover:text-turquoise-700 underline">www.hhs.gov/hipaa/filing-a-complaint</a>
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-display text-deepTeal-700 mb-8 pb-4 border-b-2 border-turquoise-200">
              Privacy Officer Contact
            </h2>
            <div className="space-y-4 text-lg text-slate leading-relaxed">
              <p>
                For questions about this notice, to request access to your health information, or to file a complaint, please contact:
              </p>
              <div className="bg-lightGray-100 p-6 rounded-lg mt-4">
                <p className="font-semibold text-deepTeal-600">Privacy Officer</p>
                <p>Affair Recovery Center of San Diego</p>
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
        description="Your confidentiality is our priority. Reach out if you have any concerns."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  )
}
