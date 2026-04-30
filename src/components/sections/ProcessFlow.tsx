'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Lightbulb,
  FileText,
  Megaphone,
  BarChart3,
  TrendingUp,
} from 'lucide-react'

const steps = [
  {
    label: 'Strategy',
    icon: Lightbulb,
    color: '#D4AF37',
    desc: 'We define the growth roadmap & positioning',
  },
  {
    label: 'Content',
    icon: FileText,
    color: '#0F766E',
    desc: 'We build high-converting storytelling assets',
  },
  {
    label: 'Marketing',
    icon: Megaphone,
    color: '#2D1B69',
    desc: 'We execute multi-channel acquisition systems',
  },
  {
    label: 'Data',
    icon: BarChart3,
    color: '#4A90E2',
    desc: 'We analyze performance & optimize ROI',
  },
  {
    label: 'Growth',
    icon: TrendingUp,
    color: '#D4AF37',
    desc: 'We scale what works into compounding growth',
  },
]

export default function ProcessFlow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-center justify-between gap-1 sm:gap-2">

        {steps.map((step, i) => {
          const Icon = step.icon

          return (
            <div key={step.label} className="flex items-center gap-1 sm:gap-2">

              <motion.div
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center gap-2 sm:gap-3 group relative"
              >

                {/* 🔥 FLOATING INFO CARD (UPWARD) */}
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -10, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-full mb-3 z-20 w-40 px-3 py-2 rounded-xl
                    backdrop-blur-xl border border-white/10
                    bg-black/40 text-white text-[15px] text-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    style={{
                      boxShadow: `0 0 25px ${step.color}30`,
                    }}
                  >
                    {/* glow top edge */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-30 blur-md"
                      style={{ backgroundColor: `${step.color}20` }}
                    />
                    <span className="relative z-10">
                      {step.desc}
                    </span>
                  </motion.div>
                )}

                {/* ICON BOX (UNCHANGED STYLE) */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl
                  flex items-center justify-center border-2
                  transition-all duration-300
                  group-hover:shadow-lg group-hover:scale-110"
                  style={{
                    borderColor: `${step.color}30`,
                    backgroundColor: `${step.color}08`,
                  }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    style={{ color: step.color }}
                  />
                </div>

                {/* LABEL */}
                <span className="text-[10px] sm:text-xs md:text-sm font-['Poppins',sans-serif] text-aethon-dark tracking-wide whitespace-nowrap">
                  {step.label}
                </span>
              </motion.div>

              {/* ARROW (UNCHANGED) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                  className="flex-shrink-0 mt-[-16px] sm:mt-[-20px]"
                >
                  <svg width="24" height="12" viewBox="0 0 24 12">
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