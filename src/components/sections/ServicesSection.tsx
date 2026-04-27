'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Target,
  DollarSign,
  Filter,
  Bot,
  BarChart3,
  TrendingUp,
  Crown,
  Palette,
} from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Growth Strategy',
    description:
      'Data-driven strategic frameworks that identify your highest-leverage growth opportunities and build compounding momentum.',
  },
  {
    icon: DollarSign,
    title: 'Paid Media',
    description:
      'Precision media buying across platforms with AI-optimized bidding, creative testing, and ROAS-maximizing campaign structures.',
  },
  {
    icon: Filter,
    title: 'Funnel Systems',
    description:
      'End-to-end conversion funnels engineered for maximum efficiency — from first click to lifetime value.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Intelligent automation systems that scale your operations, reduce costs, and unlock growth at machine speed.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Intelligence',
    description:
      'Deep analytics infrastructure that turns raw data into strategic insight and real-time decision advantage.',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description:
      'Systematic CRO programs that continuously improve conversion rates through testing, learning, and compounding gains.',
  },
  {
    icon: Crown,
    title: 'Brand Positioning',
    description:
      'Premium brand strategy that commands attention, builds authority, and creates pricing power in your market.',
  },
  {
    icon: Palette,
    title: 'Creative Systems',
    description:
      'Scalable creative production pipelines with data-informed design that drives engagement and conversion at scale.',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
            What We{' '}
            <span className="text-gold-gradient">Engineer</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-6 text-ivory-soft/50 max-w-2xl mx-auto text-base sm:text-lg">
            Every engagement is engineered for compounding returns — not quick wins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass rounded-2xl p-6 premium-card group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-violet/10 border border-ivory/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold/20 transition-all duration-400">
                <service.icon className="size-5 text-gold group-hover:text-gold-light transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-ivory mb-2 group-hover:text-gold-light transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-ivory-soft/45 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
