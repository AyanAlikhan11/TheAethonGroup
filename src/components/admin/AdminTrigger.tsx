'use client'

import { useEffect } from 'react'
import { KeyRound } from 'lucide-react'
import { useAdminStore } from '@/lib/admin-store'

export default function AdminTrigger() {
  const openAdmin = useAdminStore((s) => s.openAdmin)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        openAdmin()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openAdmin])

  return (
    <button
      onClick={openAdmin}
      className="fixed bottom-4 left-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-matte-black-lighter border border-ivory/5 opacity-20 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
      aria-label="Open Admin Panel"
      title="Admin (Ctrl+Shift+A)"
    >
      <KeyRound className="w-3.5 h-3.5 text-gold" />
    </button>
  )
}
