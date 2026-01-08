'use client'

import React from 'react'
import { useAuth } from '@payloadcms/ui'

export default function DashboardWelcome() {
  const { user } = useAuth()
  const isAdmin = user?.roles?.includes('admin')
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Welcome Banner */}
      <div
        style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #125959 0%, #1a7a7a 50%, #2ABFB0 100%)',
          borderRadius: '16px',
          color: 'white',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Welcome back, {firstName}!
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: '16px',
                opacity: 0.9,
                maxWidth: '500px',
              }}
            >
              {isAdmin
                ? 'Full admin access — manage all content, users, and settings.'
                : 'Manage your blog posts, subscribers, and newsletters.'}
            </p>
          </div>
          <div
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            {isAdmin ? 'Administrator' : 'Editor'}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <h2
        style={{
          fontSize: '14px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: '#666',
          marginBottom: '16px',
        }}
      >
        Quick Actions
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        <ActionCard
          title="Create Blog Post"
          description="Write and publish a new article"
          href="/admin/collections/posts/create"
          icon="📝"
          color="#125959"
        />
        <ActionCard
          title="Send Newsletter"
          description="Email your subscribers"
          href="/admin/collections/newsletters/create"
          icon="📧"
          color="#2ABFB0"
        />
        <ActionCard
          title="View Subscribers"
          description="See your email list"
          href="/admin/collections/subscribers"
          icon="👥"
          color="#9CBF4E"
        />
        {isAdmin && (
          <ActionCard
            title="Manage Media"
            description="Upload and organize images"
            href="/admin/collections/media"
            icon="🖼️"
            color="#ADD94E"
          />
        )}
      </div>

      {/* How-To Guides */}
      <div style={{ marginTop: '32px' }}>
        <h2
          style={{
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#666',
            marginBottom: '16px',
          }}
        >
          How Do I...?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          <HowToCard
            title="Publish a Blog Post"
            steps={[
              'Click "Create Blog Post" above',
              'Fill in the title, content, and add an image',
              'Set Status to "Published" (not Draft)',
              'Click the Save button',
            ]}
            color="#125959"
          />
          <HowToCard
            title="Send a Newsletter"
            steps={[
              'Click "Send Newsletter" above',
              'Write your subject line and email content',
              'Select "Test Mode" first to send to yourself',
              'Check "Send Immediately" and click Save',
              'If it looks good, edit it, switch to "All Subscribers", and send again',
            ]}
            color="#2ABFB0"
          />
          <HowToCard
            title="Add a Subscriber"
            steps={[
              'Go to "Email Subscribers" in the sidebar',
              'Click "Create New"',
              'Enter their email (and optionally their name)',
              'Click Save - they\'ll get a welcome email automatically!',
            ]}
            color="#9CBF4E"
          />
        </div>
      </div>

      {/* Status Legend */}
      <div
        style={{
          marginTop: '32px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 600,
            color: '#333',
            marginBottom: '12px',
          }}
        >
          Understanding Status Labels
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <StatusItem label="Draft" color="#f59e0b" description="Saved but not visible on website" />
          <StatusItem
            label="Published"
            color="#2ABFB0"
            description="Live and visible to everyone"
          />
          <StatusItem label="Sent" color="#125959" description="Newsletter has been delivered" />
          <StatusItem label="Active" color="#9CBF4E" description="Subscriber is receiving emails" />
        </div>
      </div>

      {/* Tips Section */}
      <div
        style={{
          marginTop: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #e8f4f4 0%, #f0f9f9 100%)',
          borderRadius: '12px',
          border: '1px solid rgba(18, 89, 89, 0.15)',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '14px',
            fontWeight: 600,
            color: '#125959',
            marginBottom: '12px',
          }}
        >
          Pro Tips
        </h3>
        <ul
          style={{
            margin: 0,
            padding: '0 0 0 20px',
            fontSize: '14px',
            color: '#555',
            lineHeight: 1.8,
          }}
        >
          <li>
            <strong>Save often!</strong> Click Save to keep your work - you won&apos;t lose it if
            you navigate away.
          </li>
          <li>
            <strong>Draft vs Published:</strong> Draft posts are only visible to you. Change to
            Published when ready to go live.
          </li>
          <li>
            <strong>Always test newsletters:</strong> Send to yourself first using Test Mode before
            sending to all subscribers.
          </li>
          <li>
            <strong>Featured posts:</strong> Check the &quot;Featured&quot; box to highlight a post
            on the homepage.
          </li>
        </ul>
      </div>
    </div>
  )
}

function ActionCard({
  title,
  description,
  href,
  icon,
  color,
}: {
  title: string
  description: string
  href: string
  icon: string
  color: string
}) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid #e5e7eb',
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color
        e.currentTarget.style.boxShadow = `0 4px 12px ${color}20`
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e5e7eb'
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          background: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontWeight: 600,
            fontSize: '15px',
            color: '#1a1a1a',
            marginBottom: '2px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '13px',
            color: '#666',
          }}
        >
          {description}
        </div>
      </div>
      <div
        style={{
          marginLeft: 'auto',
          color: '#ccc',
          fontSize: '20px',
        }}
      >
        →
      </div>
    </a>
  )
}

function HowToCard({
  title,
  steps,
  color,
}: {
  title: string
  steps: string[]
  color: string
}) {
  return (
    <div
      style={{
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <h4
        style={{
          margin: '0 0 12px 0',
          fontSize: '15px',
          fontWeight: 600,
          color: color,
        }}
      >
        {title}
      </h4>
      <ol
        style={{
          margin: 0,
          padding: '0 0 0 20px',
          fontSize: '13px',
          color: '#555',
          lineHeight: 1.7,
        }}
      >
        {steps.map((step, i) => (
          <li key={i} style={{ marginBottom: '6px' }}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}

function StatusItem({
  label,
  color,
  description,
}: {
  label: string
  color: string
  description: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: color,
        }}
      />
      <span style={{ fontSize: '13px' }}>
        <strong>{label}</strong>
        <span style={{ color: '#666' }}> - {description}</span>
      </span>
    </div>
  )
}
