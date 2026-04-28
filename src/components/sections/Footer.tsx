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
    <footer id="footer" ref={ref} className="relative bg-aethon-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Column 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-aethon-gold flex items-center justify-center">
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
            <p className="text-sm text-aethon-gold/80 leading-relaxed mb-2 font-medium">
              Growth, Engineered.
            </p>
            <p className="text-sm text-white/40 leading-relaxed">
              Premium growth intelligence for ambitious brands. We build systems that compound.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-sm text-white/40 hover:text-aethon-gold transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/40 hover:text-aethon-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@aethongroup.com"
                className="block text-sm text-white/40 hover:text-aethon-gold transition-colors duration-300"
              >
                hello@aethongroup.com
              </a>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-aethon-gold/10 hover:border-aethon-gold/30 transition-all duration-300"
                  >
                    <social.icon className="size-4 text-white/40 hover:text-aethon-gold transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            &copy; 2025 THE AETHON GROUP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-white/20 hover:text-white/40 transition-colors duration-300 cursor-pointer">
              Privacy
            </button>
            <button className="text-xs text-white/20 hover:text-white/40 transition-colors duration-300 cursor-pointer">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
