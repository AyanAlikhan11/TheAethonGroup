'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, BarChart3, Target, Heart, Zap } from 'lucide-react'

const metrics = [
  {
    value: 12,
    suffix: 'Cr+',
    prefix: '₹',
    label: 'Revenue Influenced',
    description: 'Total revenue generated for our clients across industries — from startups to enterprise-level organizations.',
    icon: TrendingUp,
    accentColor: '#D4AF37',
    glowColor: 'rgba(212, 175, 55, 0.25)',
  },
  {
    value: 120,
    suffix: '+',
    prefix: '',
    label: 'Campaigns Built',
    description: 'Performance-driven campaigns launched, optimized, and scaled across every major platform.',
    icon: BarChart3,
    accentColor: '#0F766E',
    glowColor: 'rgba(15, 118, 110, 0.25)',
  },
  {
    value: 4.8,
    suffix: 'x',
    prefix: '',
    label: 'Avg ROAS',
    decimal: true,
    description: 'Average return on ad spend across all accounts — beating industry benchmarks by 2.3x.',
    icon: Target,
    accentColor: '#2D1B69',
    glowColor: 'rgba(45, 27, 105, 0.25)',
  },
  {
    value: 97,
    suffix: '%',
    prefix: '',
    label: 'Client Retention',
    description: 'Clients who stay and scale with us year over year — because growth compounds when systems work.',
    icon: Heart,
    accentColor: '#D4AF37',
    glowColor: 'rgba(212, 175, 55, 0.25)',
  },
]

function AnimatedCounter({
  value,
  suffix,
  prefix,
  decimal,
  isInView,
}: {
  value: number
  suffix: string
  prefix: string
  decimal?: boolean
  isInView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = decimal ? eased * value : Math.floor(eased * value)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, value, decimal])

  const displayValue = decimal ? count.toFixed(1) : count

  return (
    <span className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export default function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="metrics"
      ref={ref}
      className="relative py-20 sm:py-28 bg-aethon-cream overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-aethon-gold/3 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-aethon-green/3 translate-y-1/2 -translate-x-1/2" />

      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #1A1A2E 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-aethon-gold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aethon-text tracking-tight">
            Growth, <span className="text-gold-gradient">Proven.</span>
          </h2>
          <p className="mt-4 text-aethon-text-secondary max-w-lg mx-auto">
            Real numbers from real clients. No vanity metrics — just the data that drives decisions.
          </p>
          <div className="mx-auto mt-5 w-16 h-[2px] bg-gradient-to-r from-aethon-gold to-aethon-gold-light rounded-full" />
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                  transition: { duration: 0.35, ease: 'easeOut' },
                }}
                className="relative cursor-pointer"
              >
                {/* Glow background - rendered behind card */}
                <motion.div
                  className="absolute -inset-2 rounded-3xl"
                  style={{ backgroundColor: metric.glowColor }}
                  initial={{ opacity: 0, filter: 'blur(0px)' }}
                  whileHover={{ opacity: 1, filter: 'blur(16px)' }}
                  transition={{ duration: 0.4 }}
                />

                {/* Card */}
                <motion.div
                  className="relative bg-white rounded-2xl p-6 sm:p-7 border border-aethon-gray-dark/60 overflow-hidden"
                  whileHover={{
                    borderColor: 'rgba(0,0,0,0)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${metric.accentColor}, transparent)` }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with background */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${metric.accentColor}10` }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: metric.accentColor }}
                    />
                  </motion.div>

                  {/* Value */}
                  <div
                    className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
                    style={{ color: metric.accentColor }}
                  >
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                      decimal={metric.decimal}
                      isInView={isInView}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-sm sm:text-base font-semibold text-aethon-text mb-2">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-aethon-text-secondary leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Hover shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${metric.accentColor}08 0%, transparent 50%, ${metric.accentColor}04 100%)`,
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
