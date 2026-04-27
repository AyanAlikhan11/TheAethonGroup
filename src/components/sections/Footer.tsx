'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Twitter } from 'lucide-react'

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
    <footer id="footer" ref={ref} className="relative bg-matte-black border-t border-ivory/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Column 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tighter text-gold-gradient">
                AETHON
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-ivory-soft/40 font-medium">
                GROUP
              </span>
            </div>
            <p className="text-sm text-ivory-soft/40 leading-relaxed mb-2">
              Growth, Engineered.
            </p>
            <p className="text-sm text-ivory-soft/30 leading-relaxed">
              Premium growth intelligence for ambitious brands. We build systems that compound.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-sm text-ivory-soft/35 hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-ivory-soft/35 hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-sm font-semibold text-ivory mb-4 tracking-wide">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@aethongroup.com"
                className="block text-sm text-ivory-soft/35 hover:text-gold transition-colors duration-300"
              >
                hello@aethongroup.com
              </a>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-matte-black-lighter border border-ivory/5 flex items-center justify-center hover:border-gold/20 hover:bg-gold/5 transition-all duration-300"
                  >
                    <social.icon className="size-4 text-ivory-soft/40 hover:text-gold transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ivory/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory-soft/25">
            &copy; 2025 THE AETHON GROUP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-ivory-soft/25 hover:text-ivory-soft/50 transition-colors duration-300 cursor-pointer">
              Privacy
            </button>
            <button className="text-xs text-ivory-soft/25 hover:text-ivory-soft/50 transition-colors duration-300 cursor-pointer">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
