import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Contact | Affair Recovery Center San Diego',
  description: 'Contact Jordan Zipkin, LMFT for affair recovery therapy in San Diego. Office in Central SD, telehealth throughout California. Call today.',
  keywords: ['contact couples therapist san diego', 'marriage counselor near me'],
  url: '/contact',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
