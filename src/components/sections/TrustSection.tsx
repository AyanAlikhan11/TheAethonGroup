'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  { name: 'NovaStar', color: '#D4AF37' },
  { name: 'TechX', color: '#4A90E2' },
  { name: 'VertexR', color: '#0F766E' },
  { name: 'ApexCore', color: '#2D1B69' },
  { name: 'BrandX', color: '#F472B6' },
  { name: 'KineticLabs', color: '#D4AF37' },
  { name: 'DataMorph', color: '#4A90E2' },
  { name: 'FluxJet', color: '#0F766E' },
  { name: 'Meridian', color: '#2D1B69' },
  { name: 'Synthwave', color: '#F472B6' },
  { name: 'PrismAI', color: '#D4AF37' },
  { name: 'Quantum', color: '#4A90E2' },
]

export default function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" ref={ref} className="relative py-16 sm:py-20 bg-aethon-dark overflow-hidden">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-aethon-gold/70 tracking-widest uppercase mb-2">
            Trusted by ambitious brands worldwide
          </p>
          <div className="mx-auto w-12 h-[2px] bg-gradient-to-r from-aethon-gold/50 to-aethon-gold-light/50 rounded-full" />
        </motion.div>
      </div>

      {/* Glassy moving brand names - Row 1 (left) */}
      <div className="overflow-hidden mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, x: ['0%', '-50%'] } : {}}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            x: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            },
          }}
          className="flex items-center py-2"
          style={{ width: 'max-content' }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={`r1-${i}`} className="flex items-center shrink-0 mx-5 sm:mx-8">
              <span
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight whitespace-nowrap text-glassy"
              >
                {brand.name}
              </span>
              <span
                className="ml-5 sm:ml-8 w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: `${brand.color}40` }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Glassy moving brand names - Row 2 (right) */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, x: ['-50%', '0%'] } : {}}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            },
          }}
          className="flex items-center py-2"
          style={{ width: 'max-content' }}
        >
          {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, i) => (
            <div key={`r2-${i}`} className="flex items-center shrink-0 mx-5 sm:mx-8">
              <span
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight whitespace-nowrap text-glassy-dark"
              >
                {brand.name}
              </span>
              <span
                className="ml-4 sm:ml-6 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: `${brand.color}25` }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-aethon-dark to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-aethon-dark to-transparent pointer-events-none z-10" />
    </section>
  )
}
