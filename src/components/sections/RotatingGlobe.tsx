'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RotatingGlobe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full animate-globe-glow"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(45,27,105,0.1) 50%, transparent 70%)',
        }}
      />

      {/* Globe container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
      >
        {/* Base sphere gradient */}
        <div className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #4A3A8A 0%, #2D1B69 40%, #1A1A2E 100%)',
            boxShadow: '0 0 60px rgba(45,27,105,0.3), 0 0 120px rgba(255,107,53,0.1), inset -20px -20px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Light reflection */}
          <div
            className="absolute w-3/4 h-3/4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Rotating grid lines - longitude */}
        <div className="absolute inset-0 animate-globe-rotate">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
            {/* Vertical ellipses (longitude lines) */}
            <ellipse cx="100" cy="100" rx="30" ry="90" stroke="rgba(255,107,53,0.25)" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="60" ry="90" stroke="rgba(255,107,53,0.2)" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="90" ry="90" stroke="rgba(255,107,53,0.3)" strokeWidth="1" />
            {/* Horizontal ellipses (latitude lines) */}
            <ellipse cx="100" cy="100" rx="90" ry="30" stroke="rgba(255,214,63,0.2)" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="90" ry="60" stroke="rgba(255,214,63,0.15)" strokeWidth="0.8" />
            <ellipse cx="100" cy="55" rx="78" ry="15" stroke="rgba(255,214,63,0.15)" strokeWidth="0.6" />
            <ellipse cx="100" cy="145" rx="78" ry="15" stroke="rgba(255,214,63,0.15)" strokeWidth="0.6" />

            {/* Continent-like dots/shapes */}
            <circle cx="70" cy="70" r="2" fill="rgba(255,107,53,0.6)" />
            <circle cx="85" cy="65" r="1.5" fill="rgba(255,107,53,0.5)" />
            <circle cx="75" cy="80" r="2.5" fill="rgba(255,107,53,0.4)" />
            <circle cx="120" cy="75" r="2" fill="rgba(255,107,53,0.5)" />
            <circle cx="130" cy="85" r="1.5" fill="rgba(255,107,53,0.4)" />
            <circle cx="110" cy="110" r="2" fill="rgba(255,214,63,0.5)" />
            <circle cx="125" cy="120" r="3" fill="rgba(255,214,63,0.4)" />
            <circle cx="80" cy="120" r="1.5" fill="rgba(255,214,63,0.5)" />
            <circle cx="90" cy="130" r="2" fill="rgba(255,214,63,0.4)" />
            <circle cx="60" cy="95" r="1.5" fill="rgba(255,107,53,0.3)" />
            <circle cx="140" cy="100" r="1.5" fill="rgba(255,107,53,0.3)" />

            {/* Connection lines between dots */}
            <line x1="70" y1="70" x2="85" y2="65" stroke="rgba(255,107,53,0.2)" strokeWidth="0.5" />
            <line x1="75" y1="80" x2="70" y2="70" stroke="rgba(255,107,53,0.15)" strokeWidth="0.5" />
            <line x1="120" y1="75" x2="130" y2="85" stroke="rgba(255,107,53,0.15)" strokeWidth="0.5" />
            <line x1="110" y1="110" x2="125" y2="120" stroke="rgba(255,214,63,0.15)" strokeWidth="0.5" />
            <line x1="80" y1="120" x2="90" y2="130" stroke="rgba(255,214,63,0.15)" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Orbit ring 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute inset-[-15%] sm:inset-[-20%]"
        >
          <div className="w-full h-full rounded-full border border-aethon-orange/20" />
          {/* Orbiting dot 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-aethon-orange shadow-lg shadow-aethon-orange/50" />
          </motion.div>
        </motion.div>

        {/* Orbit ring 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute inset-[-30%] sm:inset-[-35%]"
        >
          <div className="w-full h-full rounded-full border border-aethon-yellow/15" style={{ transform: 'rotateX(60deg)' }} />
          {/* Orbiting dot 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{ transform: 'rotateX(60deg)' }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-aethon-yellow shadow-lg shadow-aethon-yellow/50" />
          </motion.div>
        </motion.div>

        {/* Orbit ring 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute inset-[-45%] sm:inset-[-50%]"
        >
          <div className="w-full h-full rounded-full border border-aethon-purple/10" style={{ transform: 'rotateX(75deg) rotateZ(30deg)' }} />
          {/* Orbiting dot 3 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{ transform: 'rotateX(75deg) rotateZ(30deg)' }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-aethon-purple-light shadow-lg shadow-aethon-purple/50" />
          </motion.div>
        </motion.div>

        {/* Pulse rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: [0.8, 1.3, 0.8], opacity: [0, 0.3, 0] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute inset-0 rounded-full border-2 border-aethon-orange/20"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: [0.8, 1.5, 0.8], opacity: [0, 0.2, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute inset-0 rounded-full border border-aethon-yellow/10"
        />
      </motion.div>

      {/* Floating data points around the globe */}
      {[
        { label: 'NYC', top: '5%', left: '10%', delay: 0.5 },
        { label: 'LON', top: '15%', right: '5%', delay: 0.8 },
        { label: 'DXB', bottom: '20%', left: '5%', delay: 1.1 },
        { label: 'SIN', bottom: '10%', right: '15%', delay: 1.4 },
        { label: 'SYD', bottom: '35%', right: '2%', delay: 0.7 },
        { label: 'BLR', top: '40%', left: '0%', delay: 1.0 },
      ].map((point, i) => (
        <motion.div
          key={point.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.5 + point.delay, duration: 0.5 }}
          className="absolute hidden lg:flex items-center gap-1.5 z-10"
          style={{
            top: point.top,
            bottom: point.bottom,
            left: point.left,
            right: point.right,
          }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-aethon-gray-dark/50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-aethon-orange animate-pulse" />
            <span className="text-[10px] font-semibold text-aethon-text tracking-wider">{point.label}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
