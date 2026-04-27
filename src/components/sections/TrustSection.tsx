'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  { initials: 'NS', name: 'NovaStar' },
  { initials: 'TX', name: 'TechX' },
  { initials: 'VR', name: 'VertexR' },
  { initials: 'AC', name: 'ApexCore' },
  { initials: 'BX', name: 'BrandX' },
  { initials: 'KL', name: 'KineticLabs' },
  { initials: 'DM', name: 'DataMorph' },
  { initials: 'FJ', name: 'FluxJet' },
]

export default function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trust" ref={ref} className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-aethon-text-muted tracking-widest uppercase">
            Trusted by ambitious brands worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.initials}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-aethon-gray border border-aethon-gray-dark/50 flex items-center justify-center group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                <span className="text-lg font-bold text-aethon-text-muted/50 group-hover:text-aethon-text-secondary transition-colors duration-300">
                  {brand.initials}
                </span>
              </div>
              <span className="text-[10px] text-aethon-text-muted group-hover:text-aethon-text-secondary transition-colors duration-300 hidden sm:block">
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
