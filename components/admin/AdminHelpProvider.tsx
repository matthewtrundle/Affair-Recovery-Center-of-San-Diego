'use client'

import React from 'react'
// Temporarily disabled - AI SDK 5.0 has breaking API changes
// import AdminHelpChat from './AdminHelpChat'

export default function AdminHelpProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* <AdminHelpChat /> - Re-enable when AI SDK API stabilizes */}
    </>
  )
}
