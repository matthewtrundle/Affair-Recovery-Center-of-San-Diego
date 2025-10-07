import { Metadata } from 'next'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { CheckCircle, Clock, Video, FileText } from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'Schedule Your Consultation',
  description: 'Book your initial consultation for couples therapy specializing in affair recovery. Available for in-person sessions in San Diego or telehealth.',
  keywords: ['schedule therapy San Diego', 'book couples counseling', 'affair recovery consultation'],
  url: '/schedule',
})

export default function SchedulePage() {
  return (
    <>
      {/* Structured Data */}
      {generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Schedule Consultation', url: '/schedule' },
      ])}

      <section className="py-12 lg:py-16 bg-sand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-navy mb-6">
              Let's Talk (It's Free)
            </h1>
            <p className="text-xl text-slate">
              I know you're hurting. Clicking "schedule" feels huge. But it's just 15 minutes,
              and I promise I'll make it easy. Serving all of San Diego County.
            </p>
          </div>

          {/* What to Expect */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-heading font-semibold text-navy mb-6">
                Here's What Happens When We Talk
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Quick 15-Min Chat</h3>
                    <p className="text-slate">
                      Free, no pressure. You tell me what's going on (the short version),
                      I'll tell you how I can help.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Video className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Your Choice: Phone or Zoom</h3>
                    <p className="text-slate">
                      Camera on or off, doesn't matter. Whatever helps you feel comfortable.
                      I get it if you've been crying all week.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Just Show Up</h3>
                    <p className="text-slate">
                      No homework, no prep. Come as you are — messy, confused, angry, whatever.
                      That's what I'm here for.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">What's Next</h3>
                    <p className="text-slate">
                      If we click, we'll book your first real session. If not, I'll point you
                      to another great therapist in SD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <CalendlyEmbed />
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-heading font-semibold text-navy mb-6">
                Good to Know
              </h2>
              <div className="space-y-4 text-slate">
                <div>
                  <h3 className="font-semibold text-navy mb-2">Need to Cancel?</h3>
                  <p>
                    Life happens. Just give me 24 hours heads up if you can. That way someone
                    else who's hurting can grab your spot. San Diegans look out for each other.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Location Options</h3>
                  <p>
                    I offer both in-person sessions in San Diego and secure telehealth sessions for California residents.
                    We can discuss your preference during the consultation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Partner Participation</h3>
                  <p>
                    While couples therapy is most effective with both partners, the consultation can be attended by
                    one or both of you. We'll discuss the best approach for your situation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Confidentiality</h3>
                  <p>
                    Everything discussed in our consultation is completely confidential. I adhere to all HIPAA
                    regulations and professional ethics standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-coral-50 rounded-lg">
            <p className="text-center text-slate">
              <strong>If you're experiencing a mental health emergency,</strong> please call 988 (Suicide & Crisis Lifeline)
              or 911 immediately.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}