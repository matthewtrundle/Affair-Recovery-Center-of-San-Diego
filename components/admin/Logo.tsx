'use client'

import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #125959 0%, #2ABFB0 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          fontSize: '18px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        ARC
      </div>
      <div>
        <div
          style={{
            fontWeight: 600,
            fontSize: '14px',
            color: '#125959',
            lineHeight: 1.2,
          }}
        >
          Affair Recovery Center
        </div>
        <div
          style={{
            fontSize: '11px',
            color: '#666',
            lineHeight: 1.2,
          }}
        >
          Admin Dashboard
        </div>
      </div>
    </div>
  )
}
