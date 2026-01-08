'use client'

import React from 'react'
import AdminHelpChat from './AdminHelpChat'

export default function AdminHelpProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AdminHelpChat />
    </>
  )
}
