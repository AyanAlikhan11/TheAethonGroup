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
    description: 'Revenue generated for clients across industries',
    icon: TrendingUp,
    accentColor: '#D4AF37',
  },
  {
    value: 120,
    suffix: '+',
    prefix: '',
    label: 'Campaigns Built',
    description: 'Performance campaigns launched & optimized',
    icon: BarChart3,
    accentColor: '#14B8A6',
  },
  {
    value: 4.8,
    suffix: 'x',
    prefix: '',
    label: 'Avg ROAS',
    decimal: true,
    description: 'Return on ad spend — 2.3x above benchmark',
    icon: Target,
    accentColor: '#8B5CF6',
  },
  {
    value: 97,
    suffix: '%',
    prefix: '',
    label: 'Client Retention',
    description: 'Clients who stay & scale with us year over year',
    icon: Heart,
    accentColor: '#D4AF37',
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
      className="relative bg-gradient-to-b from-aethon-cream to-white overflow-hidden"
    >
      {/* Subtle gold glow accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-aethon-gold/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-aethon-gold/[0.02] rounded-full blur-[100px]" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #1A1A2E 0.5px, transparent 0.5px)',
        backgroundSize: '24px 24px',
      }} />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 text-[20px] font-bold tracking-[0.3em] uppercase text-aethon-gold mb-2">
            <Zap className="w-8 h-8" />
            Proven Results
          </span>
          {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aethon-text tracking-tight">
            Growth, <span className="text-gold-gradient">Proven.</span>
          </h2> */}
        </motion.div>

        {/* Metrics Grid - compact, premium, dark cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                className="relative cursor-pointer"
              >
                {/* Card */}
                <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 overflow-hidden border border-aethon-gray-dark/50 bg-white shadow-sm"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-40"
                    style={{ background: `linear-gradient(90deg, transparent, ${metric.accentColor}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${metric.accentColor}12` }}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: metric.accentColor }}
                    />
                  </div>

                  {/* Value - big and bold */}
                  <div
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none mb-1.5"
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
                  <h3 className="text-xs sm:text-sm font-semibold text-aethon-text mb-1">
                    {metric.label}
                  </h3>

                  {/* Description - subtle */}
                  <p className="text-[10px] sm:text-xs text-aethon-text-secondary leading-snug hidden sm:block">
                    {metric.description}
                  </p>

                  {/* Bottom-right glow accent */}
                  <div
                    className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-[0.04]"
                    style={{ backgroundColor: metric.accentColor, filter: 'blur(20px)' }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aethon-gold/20 to-transparent" />
    </section>
  )
}
