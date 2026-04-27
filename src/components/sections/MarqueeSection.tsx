'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const marqueeItems = [
  'Business Growth',
  'Market Authority',
  'Customer Trust',
  'Revenue Momentum',
  'Brand Dominance',
  'AI Automation',
  'Growth Engineering',
  'Conversion Systems',
]

export default function MarqueeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-14 bg-aethon-dark overflow-hidden"
    >
      {/* Top and bottom subtle lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-orange/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-orange/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Marquee Row 1 - Left to Right */}
        <div className="flex overflow-hidden mb-4">
          <div className="flex shrink-0 animate-marquee-left items-center">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`row1-${i}`} className="flex items-center shrink-0 mx-4 sm:mx-6">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tight whitespace-nowrap">
                  {item}
                </span>
                <span className="ml-4 sm:ml-6 w-2.5 h-2.5 rounded-full bg-aethon-orange shrink-0" />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-left items-center" aria-hidden>
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`row1-dup-${i}`} className="flex items-center shrink-0 mx-4 sm:mx-6">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tight whitespace-nowrap">
                  {item}
                </span>
                <span className="ml-4 sm:ml-6 w-2.5 h-2.5 rounded-full bg-aethon-orange shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - Right to Left */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee-right items-center">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`row2-${i}`} className="flex items-center shrink-0 mx-4 sm:mx-6">
                <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/40 tracking-tight whitespace-nowrap">
                  {item}
                </span>
                <span className="ml-4 sm:ml-6 w-2 h-2 rounded-full bg-aethon-orange/50 shrink-0" />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-right items-center" aria-hidden>
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`row2-dup-${i}`} className="flex items-center shrink-0 mx-4 sm:mx-6">
                <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/40 tracking-tight whitespace-nowrap">
                  {item}
                </span>
                <span className="ml-4 sm:ml-6 w-2 h-2 rounded-full bg-aethon-orange/50 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays on edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-aethon-dark to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-aethon-dark to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  )
}
