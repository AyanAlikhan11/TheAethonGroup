'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const metrics = [
  { value: 12, suffix: 'Cr+', prefix: '₹', label: 'Revenue Influenced', color: 'bg-aethon-orange', textColor: 'text-white' },
  { value: 120, suffix: '+', prefix: '', label: 'Campaigns Built', color: 'bg-aethon-blue', textColor: 'text-white' },
  { value: 4.8, suffix: 'x', prefix: '', label: 'Avg ROAS', decimal: true, color: 'bg-aethon-pink', textColor: 'text-white' },
  { value: 97, suffix: '%', prefix: '', label: 'Retention', color: 'bg-aethon-yellow', textColor: 'text-aethon-text' },
]

function AnimatedCounter({
  value,
  suffix,
  prefix,
  decimal,
  isInView,
  textColor,
}: {
  value: number
  suffix: string
  prefix: string
  decimal?: boolean
  isInView: boolean
  textColor: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

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
    <span className={`text-4xl sm:text-5xl font-bold ${textColor}`}>
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
      className="relative py-20 sm:py-28 bg-aethon-brown overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`${metric.color} rounded-2xl p-6 sm:p-8 text-center card-hover`}
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
                decimal={metric.decimal}
                isInView={isInView}
                textColor={metric.textColor}
              />
              <p className={`mt-3 text-sm sm:text-base font-medium ${metric.textColor} opacity-80`}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
