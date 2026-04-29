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
      className="relative bg-white overflow-hidden"
    >
      {/* Top and bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-gray-dark/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-gray-dark/60 to-transparent" />

      <div className="relative">
        {/* Single marquee line - 8xl glassy bordered text scrolling left */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: ['0%', '-50%'] } : {}}
            transition={{
              opacity: { duration: 0.8 },
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              },
            }}
            className="flex items-center"
            style={{ width: 'max-content' }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`m-${i}`} className="flex items-center shrink-0 mx-5 sm:mx-8">
                <span
                  className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(255,255,255,0.5) 25%, rgba(212,175,55,0.18) 50%, rgba(255,255,255,0.5) 75%, rgba(212,175,55,0.12) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitTextStroke: '1px rgba(212, 175, 55, 0.25)',
                    filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.08))',
                  }}
                >
                  {item}
                </span>
                <span className="ml-5 sm:ml-8 w-3 h-3 rounded-full bg-aethon-gold/30 shrink-0 border border-aethon-gold/20" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays on edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
