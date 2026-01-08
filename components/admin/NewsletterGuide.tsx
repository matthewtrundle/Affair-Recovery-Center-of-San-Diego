'use client'

import React from 'react'

export default function NewsletterGuide() {
  return (
    <div
      style={{
        padding: '20px',
        marginBottom: '24px',
        background: 'linear-gradient(135deg, #e8f4f4 0%, #f0f9f9 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(18, 89, 89, 0.15)',
      }}
    >
      <h3
        style={{
          margin: '0 0 16px 0',
          fontSize: '16px',
          fontWeight: 600,
          color: '#125959',
        }}
      >
        How to Send a Newsletter
      </h3>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <StepCard
          number={1}
          title="Write Content"
          description="Fill in subject line and email body"
          color="#125959"
        />
        <StepCard
          number={2}
          title="Choose Recipients"
          description="Test Mode (yourself) or All Subscribers"
          color="#2ABFB0"
        />
        <StepCard
          number={3}
          title="Send It"
          description='Check "Send Immediately" then click Save'
          color="#9CBF4E"
        />
      </div>

      <p
        style={{
          margin: '16px 0 0 0',
          fontSize: '13px',
          color: '#555',
          padding: '12px',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '8px',
          lineHeight: 1.5,
        }}
      >
        <strong>Pro Tip:</strong> Always send a test to yourself first! Select &quot;Test Mode&quot;
        in Step 2, send it, check your inbox, then come back and switch to &quot;All Active
        Subscribers&quot; when you&apos;re happy with how it looks.
      </p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
  color,
}: {
  number: number
  title: string
  description: string
  color: string
}) {
  return (
    <div
      style={{
        flex: '1 1 200px',
        padding: '16px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: color,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#1a3a3a',
            marginBottom: '4px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: '12px',
            color: '#666',
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}
