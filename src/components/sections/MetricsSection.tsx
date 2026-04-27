'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, BarChart3, Target, Heart } from 'lucide-react'

const metrics = [
  {
    value: 12,
    suffix: 'Cr+',
    prefix: '₹',
    label: 'Revenue Influenced',
    description: 'Total revenue generated for our clients across industries',
    icon: TrendingUp,
    accentColor: '#FF6B35',
  },
  {
    value: 120,
    suffix: '+',
    prefix: '',
    label: 'Campaigns Built',
    description: 'Performance-driven campaigns launched and optimized',
    icon: BarChart3,
    accentColor: '#0F766E',
  },
  {
    value: 4.8,
    suffix: 'x',
    prefix: '',
    label: 'Avg ROAS',
    decimal: true,
    description: 'Average return on ad spend across all accounts',
    icon: Target,
    accentColor: '#2D1B69',
  },
  {
    value: 97,
    suffix: '%',
    prefix: '',
    label: 'Client Retention',
    description: 'Clients who stay and scale with us year over year',
    icon: Heart,
    accentColor: '#F472B6',
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
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-aethon-orange/3 -translate-y-1/2 translate-x-1/2" />
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
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-aethon-orange mb-3">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-aethon-text tracking-tight">
            Numbers That Speak
          </h2>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-gradient-to-r from-aethon-orange to-aethon-yellow rounded-full" />
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
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-aethon-gray-dark/60 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${metric.accentColor}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${metric.accentColor}12` }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: metric.accentColor }}
                  />
                </div>

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
                <h3 className="text-sm sm:text-base font-semibold text-aethon-text mb-1.5">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-aethon-text-secondary leading-relaxed">
                  {metric.description}
                </p>

                {/* Subtle bottom-right corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-2xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                  style={{ backgroundColor: metric.accentColor }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
