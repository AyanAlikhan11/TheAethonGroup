'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Phone, ArrowRight } from 'lucide-react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const openContactModal = () => {
    window.dispatchEvent(new Event('openContactModal'))
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled
              ? 'mx-3 sm:mx-5 lg:mx-8 mt-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg shadow-aethon-dark/5 border border-aethon-gray-dark/30'
              : 'mx-0 mt-0 bg-white/50 backdrop-blur-sm border-b border-transparent'
          }`}
        >
          <nav className={`flex items-center justify-between transition-all duration-700 max-w-7xl mx-auto ${
            scrolled ? 'px-4 sm:px-5 lg:px-6 h-14 sm:h-16' : 'px-4 sm:px-6 lg:px-8 h-16 sm:h-20'
          }`}>
            {/* Left: Logo */}
            <div
              className="flex items-center gap-2 group cursor-pointer shrink-0"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                animate={{ scale: scrolled ? 0.85 : 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-aethon-dark flex items-center justify-center group-hover:bg-aethon-gold transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm sm:text-base">A</span>
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-bold tracking-tight leading-none transition-all duration-500 ${
                  scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                } text-aethon-text`}>
                  AETHON
                </span>
                <span className={`tracking-[0.25em] text-aethon-gold font-semibold leading-none mt-0.5 transition-all duration-500 ${
                  scrolled ? 'text-[7px]' : 'text-[8px] sm:text-[9px]'
                }`}>
                  SHAPING BUSINESSES
                </span>
              </div>
            </div>

            {/* Center: Nav links - visible only when NOT scrolled */}
            <AnimatePresence>
              {!scrolled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
                >
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="relative px-4 py-2 text-sm font-medium text-aethon-text-secondary hover:text-aethon-dark transition-colors duration-300 cursor-pointer group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-aethon-gold group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right side - changes based on scroll state */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* NOT scrolled: "Discuss a Project" button + hamburger for mobile */}
              <AnimatePresence mode="wait">
                {!scrolled ? (
                  <motion.div
                    key="default-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <Button
                      onClick={openContactModal}
                      className="hidden sm:flex bg-aethon-dark hover:bg-aethon-gold text-white font-semibold px-5 lg:px-6 rounded-full cursor-pointer btn-primary text-sm"
                    >
                      Discuss a Project
                    </Button>
                    {/* Mobile hamburger - only on small screens when not scrolled */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMenuOpen(true)}
                      className="sm:hidden w-9 h-9 rounded-full bg-aethon-dark/80 flex items-center justify-center cursor-pointer"
                      aria-label="Open menu"
                    >
                      <div className="relative w-4 h-4 flex flex-col items-center justify-center gap-[3px]">
                        <span className="block w-3 h-[1.5px] bg-white rounded-full" />
                        <span className="block w-4 h-[1.5px] bg-white rounded-full" />
                        <span className="block w-2.5 h-[1.5px] bg-white rounded-full" />
                      </div>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="scrolled-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 sm:gap-2.5"
                  >
                    {/* Discuss project icon */}
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openContactModal}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-aethon-gold/10 hover:bg-aethon-gold/20 border border-aethon-gold/20 flex items-center justify-center cursor-pointer transition-all duration-300"
                      aria-label="Discuss a project"
                    >
                      <MessageSquare className="w-4 h-4 text-aethon-gold" />
                    </motion.button>

                    {/* Call icon */}
                    <motion.a
                      href="tel:+919876543210"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-aethon-gold/10 hover:bg-aethon-gold/20 border border-aethon-gold/20 flex items-center justify-center cursor-pointer transition-all duration-300"
                      aria-label="Make a call"
                    >
                      <Phone className="w-4 h-4 text-aethon-gold" />
                    </motion.a>

                    {/* Hamburger */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-aethon-dark hover:bg-aethon-gold flex items-center justify-center cursor-pointer transition-colors duration-300"
                      aria-label="Toggle menu"
                    >
                      <div className="relative w-4 h-4 flex flex-col items-center justify-center">
                        <motion.span
                          animate={{
                            rotate: menuOpen ? 45 : 0,
                            y: menuOpen ? 0 : -3.5,
                            width: menuOpen ? 14 : 12,
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="block h-[1.5px] bg-white rounded-full origin-center"
                          style={{ width: 12 }}
                        />
                        <motion.span
                          animate={{
                            opacity: menuOpen ? 0 : 1,
                            scaleX: menuOpen ? 0 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                          className="block h-[1.5px] bg-white rounded-full"
                          style={{ width: 8 }}
                        />
                        <motion.span
                          animate={{
                            rotate: menuOpen ? -45 : 0,
                            y: menuOpen ? 0 : 3.5,
                            width: menuOpen ? 14 : 10,
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="block h-[1.5px] bg-white rounded-full origin-center"
                          style={{ width: 10 }}
                        />
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Slide-in menu panel - clean Chrome-style */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-aethon-dark/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Side panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] sm:w-[340px] bg-white shadow-2xl"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 sm:px-6 h-16 border-b border-aethon-gray-dark/40">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-aethon-dark flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <span className="text-sm font-bold tracking-tight text-aethon-text">AETHON</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-aethon-gray hover:bg-aethon-gray-dark flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1L11 11M11 1L1 11" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="px-3 py-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.href)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-left text-sm font-medium text-aethon-text hover:bg-aethon-cream hover:text-aethon-gold transition-all duration-200 cursor-pointer group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-aethon-text-muted group-hover:text-aethon-gold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all duration-200" />
                  </motion.button>
                ))}
              </nav>

              {/* Divider */}
              <div className="mx-5 h-px bg-aethon-gray-dark/40" />

              {/* Action buttons */}
              <div className="px-5 py-4 space-y-2.5">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  onClick={() => {
                    setMenuOpen(false)
                    openContactModal()
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-aethon-dark hover:bg-aethon-gold text-white font-semibold text-sm cursor-pointer transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discuss a Project
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  href="tel:+919876543210"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-aethon-dark/15 text-aethon-dark hover:bg-aethon-dark hover:text-white font-semibold text-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Make a Call
                </motion.a>
              </div>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-aethon-gray-dark/30"
              >
                <p className="text-xs text-aethon-text-muted mb-2">Get in touch</p>
                <a href="mailto:hello@aethongroup.com" className="text-sm text-aethon-text hover:text-aethon-gold transition-colors font-medium">
                  hello@aethongroup.com
                </a>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-xs text-aethon-text-muted hover:text-aethon-gold transition-colors">LinkedIn</a>
                  <a href="#" className="text-xs text-aethon-text-muted hover:text-aethon-gold transition-colors">Twitter</a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
