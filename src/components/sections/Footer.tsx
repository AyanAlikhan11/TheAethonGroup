'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

const serviceLinks = [
  'Growth Strategy',
  'Paid Media',
  'Funnel Systems',
  'AI Automation',
  'Analytics Intelligence',
  'Conversion Optimization',
  'Brand Positioning',
  'Creative Systems',
]

const companyLinks = [
  { label: 'About', href: 'trust' },
  { label: 'Case Studies', href: 'case-studies' },
  { label: 'Insights', href: 'insights' },
  { label: 'Contact', href: 'cta' },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@aethongroup.com' },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" ref={ref} className="relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

      {/* Subtle gold glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aethon-gold/5 rounded-full blur-[120px]" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 py-12 sm:py-16"
        >
          {/* Column 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-aethon-gold to-aethon-gold-dark flex items-center justify-center shadow-lg shadow-aethon-gold/20">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  AETHON
                </span>
                <span className="text-[8px] tracking-[0.25em] text-aethon-gold font-semibold leading-none mt-0.5">
                  SHAPING BUSINESSES
                </span>
              </div>
            </div>
            <p className="text-sm text-aethon-gold font-medium leading-relaxed mb-2">
              Growth, Engineered.
            </p>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Premium growth intelligence for ambitious brands. We build systems that compound.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-aethon-gold/80 mb-5 tracking-[0.2em] uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-sm text-white/35 hover:text-aethon-gold hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold text-aethon-gold/80 mb-5 tracking-[0.2em] uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/35 hover:text-aethon-gold hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-xs font-bold text-aethon-gold/80 mb-5 tracking-[0.2em] uppercase">
              Connect
            </h4>
            <a
              href="mailto:hello@aethongroup.com"
              className="block text-sm text-white/35 hover:text-aethon-gold transition-colors duration-300 mb-5"
            >
              hello@aethongroup.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-aethon-gold/15 hover:border-aethon-gold/30 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="size-4 text-white/40 group-hover:text-aethon-gold transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            &copy; 2025 THE AETHON GROUP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-white/20 hover:text-white/50 transition-colors duration-300 cursor-pointer">
              Privacy
            </button>
            <button className="text-xs text-white/20 hover:text-white/50 transition-colors duration-300 cursor-pointer">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
