'use client'

import Image from 'next/image'
import { Heart, HelpCircle, MessageSquare, RefreshCw, Star, Sparkles } from 'lucide-react'

type IconName = 'heart' | 'help' | 'message' | 'refresh' | 'star' | 'sparkles'

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  help: HelpCircle,
  message: MessageSquare,
  refresh: RefreshCw,
  star: Star,
  sparkles: Sparkles,
}

interface PageHeaderProps {
  badge?: string
  badgeIcon?: IconName
  title: string
  titleHighlight?: string
  subtitle?: string
  location?: string
  variant?: 'turquoise' | 'lime'
}

export function PageHeader({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  subtitle,
  location,
  variant = 'turquoise'
}: PageHeaderProps) {
  const highlightColor = variant === 'turquoise' ? 'text-turquoise-300' : 'text-lime-400'
  const badgeColor = variant === 'turquoise' ? 'text-turquoise-300' : 'text-lime-400'
  const locationColor = variant === 'turquoise' ? 'text-lime-400' : 'text-turquoise-300'

  const BadgeIcon = badgeIcon ? iconMap[badgeIcon] : null

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Dark background with sunset beach image */}
      <div className="absolute inset-0">
        <Image
          src="/images/beach/sunset-cliffs-silhouette.webp"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deepTeal-900/95 via-deepTeal-800/90 to-deepTeal-900/95" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        {badge && (
          <div className={`inline-flex items-center gap-2 bg-white/10 ${badgeColor} px-4 py-2 rounded-full text-sm font-body font-medium mb-6 border border-white/10`}>
            {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
            {badge}
          </div>
        )}

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          {titleHighlight ? (
            <>
              {title}{' '}
              <span className={highlightColor}>{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
            {subtitle}
          </p>
        )}

        {location && (
          <p className={`text-lg ${locationColor} font-medium`}>
            {location}
          </p>
        )}
      </div>
    </section>
  )
}
