'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    number: '01',
    statement: 'Intelligence before execution',
    description:
      'We invest in deep understanding before deploying resources. Every strategy is built on rigorous analysis, market intelligence, and first-principles thinking — not assumptions.',
    color: 'border-aethon-orange',
    numberColor: 'text-aethon-orange/10',
  },
  {
    number: '02',
    statement: 'Systems before hacks',
    description:
      'Sustainable growth comes from engineered systems, not tactical shortcuts. We build infrastructure that compounds over time, delivering results long after the engagement ends.',
    color: 'border-aethon-blue',
    numberColor: 'text-aethon-blue/10',
  },
  {
    number: '03',
    statement: 'Compounding over campaigns',
    description:
      'We optimize for long-term value creation, not short-term metrics. Every decision is filtered through the lens of compounding returns and durable competitive advantage.',
    color: 'border-aethon-green',
    numberColor: 'text-aethon-green/10',
  },
]

export default function WhyAethonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why" ref={ref} className="relative py-20 sm:py-28 bg-aethon-cream dotted-pattern">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aethon-text">
            <span className="text-orange-gradient">Why AETHON</span>
          </h2>
          <p className="mt-6 text-aethon-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Three principles that separate us from every other growth partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`relative bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-l-4 ${pillar.color} card-hover group`}
            >
              {/* Large watermark number */}
              <span className={`absolute top-4 right-6 text-7xl sm:text-8xl font-bold ${pillar.numberColor} group-hover:opacity-40 transition-opacity duration-500 select-none`}>
                {pillar.number}
              </span>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-aethon-text mt-4 leading-tight">
                  {pillar.statement}
                </h3>
                <p className="mt-4 text-aethon-text-secondary leading-relaxed text-sm sm:text-base">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
