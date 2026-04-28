'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RotatingGlobe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow - green tint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: [0.3, 0.6, 0.3], scale: 1, filter: ['blur(20px)', 'blur(30px)', 'blur(20px)'] } : {}}
        transition={{
          scale: { duration: 1.2, ease: 'easeOut' },
          opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          filter: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(15,118,110,0.2) 0%, rgba(20,184,166,0.1) 50%, transparent 70%)',
        }}
      />

      {/* Globe container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
      >
        {/* Base sphere gradient - deep ocean blue-green */}
        <div className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #0F766E 0%, #065F46 30%, #064E3B 60%, #022C22 100%)',
            boxShadow: '0 0 80px rgba(15,118,110,0.3), 0 0 160px rgba(20,184,166,0.1), inset -20px -20px 60px rgba(0,0,0,0.6)',
          }}
        >
          {/* Ocean depth highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 65% 65%, rgba(6,78,59,0.8) 0%, transparent 50%)',
            }}
          />
          {/* Light reflection on water */}
          <div
            className="absolute w-3/4 h-3/4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Rotating grid lines */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            {/* Vertical ellipses (longitude lines) */}
            <ellipse cx="100" cy="100" rx="20" ry="90" stroke="rgba(20,184,166,0.15)" strokeWidth="0.6" />
            <ellipse cx="100" cy="100" rx="40" ry="90" stroke="rgba(20,184,166,0.18)" strokeWidth="0.6" />
            <ellipse cx="100" cy="100" rx="60" ry="90" stroke="rgba(20,184,166,0.2)" strokeWidth="0.7" />
            <ellipse cx="100" cy="100" rx="80" ry="90" stroke="rgba(20,184,166,0.22)" strokeWidth="0.7" />
            <ellipse cx="100" cy="100" rx="90" ry="90" stroke="rgba(20,184,166,0.25)" strokeWidth="0.8" />

            {/* Horizontal ellipses (latitude lines) */}
            <ellipse cx="100" cy="100" rx="90" ry="20" stroke="rgba(20,184,166,0.15)" strokeWidth="0.6" />
            <ellipse cx="100" cy="100" rx="90" ry="40" stroke="rgba(20,184,166,0.18)" strokeWidth="0.6" />
            <ellipse cx="100" cy="100" rx="90" ry="60" stroke="rgba(20,184,166,0.2)" strokeWidth="0.7" />
            <ellipse cx="100" cy="100" rx="90" ry="80" stroke="rgba(20,184,166,0.22)" strokeWidth="0.7" />

            {/* Continent shapes - simplified landmasses in green */}
            {/* North America */}
            <path d="M45,45 Q50,40 58,42 Q62,38 68,40 Q72,45 70,50 Q68,55 65,58 Q60,62 55,60 Q50,58 48,55 Q44,50 45,45Z" fill="rgba(34,197,94,0.5)" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
            <path d="M55,60 Q58,65 56,70 Q52,72 50,68 Q48,64 50,62Z" fill="rgba(34,197,94,0.4)" />

            {/* South America */}
            <path d="M65,90 Q70,85 72,90 Q75,98 73,108 Q70,118 66,125 Q62,130 60,125 Q58,118 60,108 Q62,98 65,90Z" fill="rgba(34,197,94,0.45)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.5" />

            {/* Europe */}
            <path d="M95,38 Q100,35 105,38 Q108,42 106,46 Q102,50 98,48 Q94,45 95,40Z" fill="rgba(34,197,94,0.5)" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
            <path d="M92,42 Q95,44 93,48 Q90,46 92,42Z" fill="rgba(34,197,94,0.4)" />

            {/* Africa */}
            <path d="M100,55 Q106,52 110,58 Q114,68 112,80 Q110,95 106,105 Q102,110 98,105 Q95,95 94,82 Q93,68 96,60 Q98,55 100,55Z" fill="rgba(34,197,94,0.45)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.5" />

            {/* Asia */}
            <path d="M112,35 Q120,30 132,32 Q142,36 148,42 Q152,50 148,56 Q142,62 135,60 Q128,58 122,55 Q116,50 114,44 Q112,40 112,35Z" fill="rgba(34,197,94,0.5)" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
            <path d="M135,60 Q140,65 138,72 Q134,74 130,70 Q132,64 135,60Z" fill="rgba(34,197,94,0.4)" />

            {/* Australia */}
            <path d="M138,105 Q144,100 150,104 Q154,110 150,116 Q146,120 140,118 Q136,114 136,110 Q136,107 138,105Z" fill="rgba(34,197,94,0.45)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.5" />

            {/* Connection lines between continents */}
            <line x1="68" y1="50" x2="95" y2="42" stroke="rgba(20,184,166,0.15)" strokeWidth="0.4" strokeDasharray="2,2" />
            <line x1="70" y1="90" x2="100" y2="70" stroke="rgba(20,184,166,0.1)" strokeWidth="0.4" strokeDasharray="2,2" />
            <line x1="106" y1="48" x2="118" y2="44" stroke="rgba(20,184,166,0.15)" strokeWidth="0.4" strokeDasharray="2,2" />
            <line x1="110" y1="90" x2="140" y2="110" stroke="rgba(20,184,166,0.1)" strokeWidth="0.4" strokeDasharray="2,2" />
            <line x1="135" y1="60" x2="145" y2="105" stroke="rgba(20,184,166,0.1)" strokeWidth="0.4" strokeDasharray="2,2" />

            {/* City/pulse dots on continents */}
            <circle cx="55" cy="48" r="1.5" fill="rgba(20,184,166,0.8)">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="42" r="1.5" fill="rgba(20,184,166,0.8)">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="130" cy="40" r="1.5" fill="rgba(20,184,166,0.8)">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="75" r="1.5" fill="rgba(20,184,166,0.8)">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="100" r="1.5" fill="rgba(20,184,166,0.8)">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="145" cy="110" r="1.5" fill="rgba(20,184,166,0.8)">
              <animate attributeName="r" values="1.5;2.5;1.5" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>

        {/* Orbit ring 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute inset-[-15%] sm:inset-[-20%]"
        >
          <div className="w-full h-full rounded-full border border-aethon-green-light/25" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-aethon-green-light shadow-lg shadow-aethon-green-light/50" />
          </motion.div>
        </motion.div>

        {/* Orbit ring 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute inset-[-30%] sm:inset-[-35%]"
        >
          <div className="w-full h-full rounded-full border border-aethon-green/15" style={{ transform: 'rotateX(60deg)' }} />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{ transform: 'rotateX(60deg)' }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-aethon-orange shadow-lg shadow-aethon-orange/50" />
          </motion.div>
        </motion.div>

        {/* Orbit ring 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute inset-[-45%] sm:inset-[-50%]"
        >
          <div className="w-full h-full rounded-full border border-aethon-green-light/10" style={{ transform: 'rotateX(75deg) rotateZ(30deg)' }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{ transform: 'rotateX(75deg) rotateZ(30deg)' }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-aethon-yellow shadow-lg shadow-aethon-yellow/50" />
          </motion.div>
        </motion.div>

        {/* Pulse rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: [0.8, 1.3, 0.8], opacity: [0, 0.25, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute inset-0 rounded-full border-2 border-aethon-green-light/20"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: [0.8, 1.5, 0.8], opacity: [0, 0.15, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute inset-0 rounded-full border border-aethon-green/10"
        />
      </motion.div>
    </div>
  )
}
