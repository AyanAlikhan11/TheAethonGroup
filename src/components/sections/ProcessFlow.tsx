'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, FileText, Megaphone, BarChart3, TrendingUp } from 'lucide-react'

const steps = [
  { label: 'Strategy', icon: Lightbulb, color: '#D4AF37' },
  { label: 'Content', icon: FileText, color: '#0F766E' },
  { label: 'Marketing', icon: Megaphone, color: '#2D1B69' },
  { label: 'Data', icon: BarChart3, color: '#4A90E2' },
  { label: 'Growth', icon: TrendingUp, color: '#D4AF37' },
]

export default function ProcessFlow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="w-full">
      {/* Process Flow */}
      <div className="flex items-center justify-between gap-1 sm:gap-2">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex items-center gap-1 sm:gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center gap-2 sm:gap-3 group"
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
                  style={{
                    borderColor: `${step.color}30`,
                    backgroundColor: `${step.color}08`,
                  }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-300"
                    style={{ color: step.color }}
                  />
                </div>
                {/* Label */}
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-aethon-dark tracking-wide whitespace-nowrap">
                  {step.label}
                </span>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                  className="flex-shrink-0 mt-[-16px] sm:mt-[-20px]"
                >
                  <svg width="24" height="12" viewBox="0 0 24 12" className="sm:w-8 sm:h-4 md:w-10 md:h-5">
                    <path
                      d="M0 6 Q6 0 12 6 Q18 12 24 6"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="22" cy="6" r="2" fill="#D4AF37" />
                  </svg>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
