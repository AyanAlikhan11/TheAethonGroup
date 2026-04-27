'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const metrics = [
  { value: 12, suffix: 'Cr+', prefix: '₹', label: 'Revenue Influenced' },
  { value: 120, suffix: '+', prefix: '', label: 'Campaigns Built' },
  { value: 4.8, suffix: 'x', prefix: '', label: 'Avg ROAS', decimal: true },
  { value: 97, suffix: '%', prefix: '', label: 'Retention' },
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

    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
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
    <span className="text-gold text-4xl sm:text-5xl font-bold">
      {prefix}
      {displayValue}
      {suffix}
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
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Violet glow background */}
      <div className="absolute inset-0 violet-glow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8 text-center premium-card"
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
                decimal={metric.decimal}
                isInView={isInView}
              />
              <p className="mt-3 text-sm sm:text-base text-ivory-soft/50 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
