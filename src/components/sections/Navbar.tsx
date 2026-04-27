'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: 'trust' },
  { label: 'Services', href: 'services' },
  { label: 'Case Studies', href: 'case-studies' },
  { label: 'Insights', href: 'insights' },
  { label: 'Contact', href: 'cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-aethon-gray-dark/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-aethon-text">
              AETHON
            </span>
            <span className="w-2 h-2 rounded-full bg-aethon-orange mt-1 group-hover:scale-125 transition-transform duration-300" />
            <span className="block text-[10px] tracking-[0.3em] text-aethon-text-secondary font-medium -mt-0.5 ml-0.5">
              GROUP
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-aethon-text-secondary hover:text-aethon-orange transition-colors duration-300 cursor-pointer group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-aethon-orange group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('cta')}
              className="ml-4 bg-aethon-orange hover:bg-aethon-orange-dark text-white font-semibold px-6 rounded-full cursor-pointer btn-primary"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-aethon-text hover:text-aethon-orange cursor-pointer">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white w-[280px] sm:w-[320px]"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-2 pt-8">
                  <div className="mb-6 flex items-center gap-1">
                    <span className="text-2xl font-bold tracking-tighter text-aethon-text">
                      AETHON
                    </span>
                    <span className="w-2 h-2 rounded-full bg-aethon-orange" />
                    <span className="block text-[10px] tracking-[0.3em] text-aethon-text-secondary font-medium">
                      GROUP
                    </span>
                  </div>
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left py-3 px-4 text-lg font-medium text-aethon-text-secondary hover:text-aethon-orange hover:bg-aethon-gray rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                  <div className="mt-6 px-4">
                    <Button
                      onClick={() => scrollToSection('cta')}
                      className="w-full bg-aethon-orange hover:bg-aethon-orange-dark text-white font-semibold rounded-full cursor-pointer btn-primary"
                    >
                      Book Strategy Call
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
