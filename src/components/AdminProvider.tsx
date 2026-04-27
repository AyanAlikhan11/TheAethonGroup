'use client'

import AdminDashboard from '@/components/admin/AdminDashboard'
import AdminTrigger from '@/components/admin/AdminTrigger'

export default function AdminProvider() {
  return (
    <>
      <AdminTrigger />
      <AdminDashboard />
    </>
  )
}
