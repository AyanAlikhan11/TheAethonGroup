'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Crosshair,
  DollarSign,
  Funnel,
  Cpu,
  LineChart,
  TrendingUp,
  Crown,
  Palette,
} from 'lucide-react'

const services = [
  {
    icon: Crosshair,
    title: 'Growth Strategy',
    description: 'Data-driven strategic frameworks that identify your highest-leverage growth opportunities and build compounding momentum.',
    accentColor: '#D4AF37',
  },
  {
    icon: DollarSign,
    title: 'Paid Media',
    description: 'Precision media buying across platforms with AI-optimized bidding, creative testing, and ROAS-maximizing campaign structures.',
    accentColor: '#0F766E',
  },
  {
    icon: Funnel,
    title: 'Funnel Systems',
    description: 'End-to-end conversion funnels engineered for maximum efficiency — from first click to lifetime value.',
    accentColor: '#E11D48',
  },
  {
    icon: Cpu,
    title: 'AI Automation',
    description: 'Intelligent automation systems that scale your operations, reduce costs, and unlock growth at machine speed.',
    accentColor: '#2D1B69',
  },
  {
    icon: LineChart,
    title: 'Analytics Intelligence',
    description: 'Deep analytics infrastructure that turns raw data into strategic insight and real-time decision advantage.',
    accentColor: '#0F766E',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'Systematic CRO programs that continuously improve conversion rates through testing, learning, and compounding gains.',
    accentColor: '#D4AF37',
  },
  {
    icon: Crown,
    title: 'Brand Positioning',
    description: 'Premium brand strategy that commands attention, builds authority, and creates pricing power in your market.',
    accentColor: '#2D1B69',
  },
  {
    icon: Palette,
    title: 'Creative Systems',
    description: 'Scalable creative production pipelines with data-informed design that drives engagement and conversion at scale.',
    accentColor: '#E11D48',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-aethon-cream/20" />

      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #1A1A2E 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-aethon-gold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aethon-text">
            What We{' '}
            <span className="text-gold-gradient">Engineer</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-gradient-to-r from-aethon-gold to-aethon-gold-light rounded-full" />
          <p className="mt-6 text-aethon-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Every engagement is engineered for compounding returns — not quick wins.
          </p>
        </motion.div>

        {/* Single row horizontal scroll on mobile, 4-col grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="snap-start shrink-0 w-[280px] sm:w-auto sm:shrink lg:w-auto"
              >
                {/* Glassy card */}
                <div
                  className="relative h-full rounded-2xl p-5 sm:p-6 border border-white/40 backdrop-blur-md overflow-hidden cursor-pointer transition-shadow duration-400 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.6) 100%)`,
                    boxShadow: `0 4px 30px rgba(0, 0, 0, 0.05)`,
                  }}
                >
                  {/* Subtle glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-2xl" />

                  {/* Accent top bar - hidden until hover */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)` }}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileHover={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${service.accentColor}15, ${service.accentColor}08)`,
                      border: `1px solid ${service.accentColor}20`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${service.accentColor}20`,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.accentColor }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative text-base font-semibold text-aethon-text mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-sm text-aethon-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom accent glow */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full pointer-events-none"
                    style={{ backgroundColor: service.accentColor }}
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileHover={{ opacity: 0.15, filter: 'blur(16px)' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
