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
    color: 'bg-aethon-gold',
    iconColor: 'text-white',
  },
  {
    icon: DollarSign,
    title: 'Paid Media',
    description:
      'Precision media buying across platforms with AI-optimized bidding, creative testing, and ROAS-maximizing campaign structures.',
    color: 'bg-aethon-blue',
    iconColor: 'text-white',
  },
  {
    icon: Filter,
    title: 'Funnel Systems',
    description:
      'End-to-end conversion funnels engineered for maximum efficiency — from first click to lifetime value.',
    color: 'bg-aethon-pink',
    iconColor: 'text-white',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Intelligent automation systems that scale your operations, reduce costs, and unlock growth at machine speed.',
    color: 'bg-aethon-purple',
    iconColor: 'text-white',
  },
  {
    icon: BarChart3,
    title: 'Analytics Intelligence',
    description:
      'Deep analytics infrastructure that turns raw data into strategic insight and real-time decision advantage.',
    color: 'bg-aethon-green',
    iconColor: 'text-white',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description:
      'Systematic CRO programs that continuously improve conversion rates through testing, learning, and compounding gains.',
    color: 'bg-aethon-yellow',
    iconColor: 'text-aethon-text',
  },
  {
    icon: Crown,
    title: 'Brand Positioning',
    description:
      'Premium brand strategy that commands attention, builds authority, and creates pricing power in your market.',
    color: 'bg-aethon-brown',
    iconColor: 'text-white',
  },
  {
    icon: Palette,
    title: 'Creative Systems',
    description:
      'Scalable creative production pipelines with data-informed design that drives engagement and conversion at scale.',
    color: 'bg-aethon-green-light',
    iconColor: 'text-white',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aethon-text">
            What We{' '}
            <span className="text-gold-gradient">Engineer</span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-aethon-gold rounded-full" />
          <p className="mt-6 text-aethon-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-aethon-gray-dark/30 card-hover group cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`size-5 ${service.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-aethon-text mb-2 group-hover:text-aethon-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-aethon-text-secondary leading-relaxed">
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
