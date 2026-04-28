'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  {
    name: 'NovaStar',
    color: '#D4AF37',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <polygon points="20,2 25,15 38,15 27,24 31,38 20,29 9,38 13,24 2,15 15,15" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TechX',
    color: '#4A90E2',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="5" y="5" width="12" height="12" fill="currentColor" />
        <rect x="23" y="5" width="12" height="12" fill="currentColor" opacity="0.7" />
        <rect x="5" y="23" width="12" height="12" fill="currentColor" opacity="0.7" />
        <rect x="23" y="23" width="12" height="12" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'VertexR',
    color: '#0F766E',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M20 4L36 36H4L20 4Z" fill="currentColor" />
        <path d="M20 14L28 32H12L20 14Z" fill="white" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'ApexCore',
    color: '#2D1B69',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="8" fill="currentColor" />
        <circle cx="20" cy="20" r="4" fill="white" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'BrandX',
    color: '#F472B6',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M8 8L20 4L32 8L36 20L32 32L20 36L8 32L4 20L8 8Z" fill="currentColor" />
        <path d="M14 14L20 12L26 14L28 20L26 26L20 28L14 26L12 20L14 14Z" fill="white" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'KineticLabs',
    color: '#D4AF37',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M4 28L20 4L36 28H4Z" fill="currentColor" />
        <path d="M20 16L28 28H12L20 16Z" fill="white" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: 'DataMorph',
    color: '#4A90E2',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="4" y="4" width="14" height="14" rx="3" fill="currentColor" />
        <rect x="22" y="4" width="14" height="14" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="4" y="22" width="14" height="14" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="22" y="22" width="14" height="14" rx="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'FluxJet',
    color: '#0F766E',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M20 4C28 4 36 12 36 20C36 28 28 36 20 36" fill="currentColor" />
        <path d="M20 8C26 8 32 14 32 20C32 26 26 32 20 32" fill="white" opacity="0.2" />
        <circle cx="20" cy="20" r="4" fill="white" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'Meridian',
    color: '#2D1B69',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="20" cy="20" rx="10" ry="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Synthwave',
    color: '#F472B6',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M4 30Q10 10 20 20Q30 30 36 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M4 34Q10 14 20 24Q30 34 36 14" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" ref={ref} className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-medium text-aethon-text-muted tracking-widest uppercase mb-2">
            Trusted by ambitious brands worldwide
          </p>
          <div className="mx-auto w-12 h-[2px] bg-gradient-to-r from-aethon-gold to-aethon-gold-light rounded-full" />
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
              className="group relative flex flex-col items-center gap-3 py-5 px-4 rounded-2xl hover:bg-aethon-gray transition-all duration-300 cursor-pointer"
            >
              {/* Logo container */}
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-aethon-gray-dark/60 flex items-center justify-center group-hover:shadow-lg group-hover:border-aethon-gold/20 transition-all duration-300 group-hover:scale-105"
                style={{ color: brand.color }}
              >
                {brand.icon}
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 4px 20px ${brand.color}20, 0 0 40px ${brand.color}10`,
                  }}
                />
              </div>
              {/* Brand name */}
              <span className="text-xs sm:text-sm font-medium text-aethon-text-secondary group-hover:text-aethon-text transition-colors duration-300">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
