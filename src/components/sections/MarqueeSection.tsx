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

const subtitleItems = [
  'Scaling Startups to Market Leaders',
  'Data-Driven Decision Making',
  'Building Unshakeable Brand Trust',
  'Accelerating Revenue Streams',
  'Dominating Competitive Markets',
  'Intelligent Process Automation',
  'Engineering Sustainable Growth',
  'Optimizing Every Conversion Point',
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-green-light/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-green-light/30 to-transparent" />

      <div className="relative">
        {/* Single marquee line - large text scrolling left */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: ['0%', '-50%'] } : {}}
            transition={{
              opacity: { duration: 0.8 },
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
            {/* Render items twice for seamless loop */}
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`m-${i}`} className="flex items-center shrink-0 mx-4 sm:mx-6">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tight whitespace-nowrap">
                  {item}
                </span>
                <span className="ml-4 sm:ml-6 w-2.5 h-2.5 rounded-full bg-aethon-orange shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Moving subtitle line below - scrolling right */}
        <div className="overflow-hidden mt-3 sm:mt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1, x: ['-50%', '0%'] } : {}}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              x: {
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              },
            }}
            className="flex items-center py-1"
            style={{ width: 'max-content' }}
          >
            {[...subtitleItems, ...subtitleItems].map((item, i) => (
              <div key={`s-${i}`} className="flex items-center shrink-0 mx-3 sm:mx-5">
                <span className="text-sm sm:text-lg md:text-xl font-medium text-aethon-green-light/60 tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <span className="ml-3 sm:ml-5 w-1.5 h-1.5 rounded-full bg-aethon-green-light/40 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays on edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-aethon-dark to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-aethon-dark to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
