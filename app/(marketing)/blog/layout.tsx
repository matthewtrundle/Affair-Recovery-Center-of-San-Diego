import { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Affair Recovery Blog | Healing from Betrayal Resources',
  description: 'Expert insights on affair recovery, rebuilding trust, and healing betrayal trauma. Evidence-based guidance from a Gottman therapist.',
  keywords: ['affair recovery blog', 'infidelity recovery resources'],
  url: '/blog',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
