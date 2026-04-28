'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Phone, X } from 'lucide-react'

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

  // Prevent body scroll when menu is open
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
        {/* Full-width navbar that splits on scroll */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled
              ? 'mx-3 sm:mx-5 lg:mx-8 mt-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg shadow-aethon-dark/5 border border-aethon-gray-dark/30'
              : 'mx-0 mt-0 bg-transparent rounded-none shadow-none border-none'
          }`}
        >
          <nav className={`flex items-center justify-between transition-all duration-700 ${
            scrolled ? 'px-4 sm:px-5 lg:px-6 h-14 sm:h-16' : 'px-4 sm:px-6 lg:px-8 h-16 sm:h-20'
          }`}>
            {/* Left: Logo - slides left on scroll */}
            <motion.div
              animate={{
                x: scrolled ? 0 : 0,
              }}
              className="flex items-center gap-2 group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                animate={{
                  scale: scrolled ? 0.85 : 1,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-aethon-dark flex items-center justify-center group-hover:bg-aethon-gold transition-colors duration-300"
              >
                <span className="text-white font-bold text-sm sm:text-base">A</span>
              </motion.div>
              <motion.div
                animate={{
                  opacity: scrolled ? 1 : 1,
                }}
                className="flex flex-col"
              >
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
              </motion.div>
            </motion.div>

            {/* Right: Action icons + hamburger - slides right on scroll */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              animate={{ x: scrolled ? 0 : 0 }}
            >
              {/* Discuss a project icon - rounded */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={openContactModal}
                className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                  scrolled
                    ? 'w-9 h-9 sm:w-10 sm:h-10 bg-aethon-gold/10 hover:bg-aethon-gold/20 border border-aethon-gold/20'
                    : 'w-9 h-9 sm:w-10 sm:h-10 bg-aethon-dark/5 hover:bg-aethon-dark/10 border border-aethon-dark/10'
                }`}
                aria-label="Discuss a project"
              >
                <MessageSquare className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors duration-300 ${
                  scrolled ? 'text-aethon-gold' : 'text-aethon-dark'
                }`} />
              </motion.button>

              {/* Make a call icon - rounded */}
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                  scrolled
                    ? 'w-9 h-9 sm:w-10 sm:h-10 bg-aethon-gold/10 hover:bg-aethon-gold/20 border border-aethon-gold/20'
                    : 'w-9 h-9 sm:w-10 sm:h-10 bg-aethon-dark/5 hover:bg-aethon-dark/10 border border-aethon-dark/10'
                }`}
                aria-label="Make a call"
              >
                <Phone className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-colors duration-300 ${
                  scrolled ? 'text-aethon-gold' : 'text-aethon-dark'
                }`} />
              </motion.a>

              {/* Unique hamburger - morphing lines */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                  scrolled
                    ? 'w-9 h-9 sm:w-10 sm:h-10 bg-aethon-dark hover:bg-aethon-gold'
                    : 'w-9 h-9 sm:w-10 sm:h-10 bg-aethon-dark/80 hover:bg-aethon-dark backdrop-blur-sm'
                }`}
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
          </nav>
        </div>
      </motion.header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white"
          >
            {/* Close button top-right */}
            <div className="absolute top-4 right-3 sm:right-5 lg:right-8">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-aethon-dark flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Menu content */}
            <div className="h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
              <nav className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-3xl sm:text-5xl lg:text-6xl font-bold text-aethon-text hover:text-aethon-gold transition-colors duration-300 cursor-pointer py-2 sm:py-3 group"
                  >
                    <span className="inline-flex items-center gap-3 sm:gap-4">
                      <span className="text-xs sm:text-sm font-medium text-aethon-gold/0 group-hover:text-aethon-gold transition-all duration-300 tracking-widest uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Bottom CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12 sm:mt-16 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    openContactModal()
                  }}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-aethon-dark hover:bg-aethon-gold text-white font-semibold text-sm sm:text-base cursor-pointer transition-colors duration-300"
                >
                  Discuss a Project
                </button>
                <a
                  href="tel:+919876543210"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-aethon-dark/20 text-aethon-dark hover:bg-aethon-dark hover:text-white font-semibold text-sm sm:text-base transition-all duration-300"
                >
                  Make a Call
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 flex gap-4 text-sm text-aethon-text-secondary"
              >
                <a href="#" className="hover:text-aethon-gold transition-colors">LinkedIn</a>
                <span className="text-aethon-gray-dark">·</span>
                <a href="#" className="hover:text-aethon-gold transition-colors">Twitter</a>
                <span className="text-aethon-gray-dark">·</span>
                <a href="mailto:hello@aethongroup.com" className="hover:text-aethon-gold transition-colors">hello@aethongroup.com</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
