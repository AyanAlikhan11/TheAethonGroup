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
    <section id="trust" ref={ref} className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-ivory-soft/40 tracking-widest uppercase">
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-matte-black-lighter border border-ivory/5 flex items-center justify-center group-hover:border-gold/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]">
                <span className="text-lg font-bold text-ivory-soft/25 group-hover:text-ivory-soft/50 transition-colors duration-300">
                  {brand.initials}
                </span>
              </div>
              <span className="text-[10px] text-ivory-soft/20 group-hover:text-ivory-soft/40 transition-colors duration-300 hidden sm:block">
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
