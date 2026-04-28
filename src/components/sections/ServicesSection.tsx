'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

/* ─── Cartoon SVG Icon Components ─── */

function RocketIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Flame */}
      <ellipse cx="32" cy="54" rx="6" ry="8" fill="url(#flame1)" />
      <ellipse cx="32" cy="54" rx="3.5" ry="5" fill="url(#flame2)" />
      {/* Fins */}
      <path d="M22 42C22 42 18 48 20 52L26 46L22 42Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
      <path d="M42 42C42 42 46 48 44 52L38 46L42 42Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
      {/* Body */}
      <path d="M24 44C24 28 28 14 32 8C36 14 40 28 40 44C40 47 36 49 32 49C28 49 24 47 24 44Z" fill="url(#rocketBody)" stroke="#D97706" strokeWidth="1.5" />
      {/* Window */}
      <circle cx="32" cy="30" r="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="32" cy="30" r="3.5" fill="#60A5FA" />
      <circle cx="30.5" cy="28.5" r="1.5" fill="white" opacity="0.7" />
      {/* Nose stripe */}
      <path d="M28 16C30 13 34 13 36 16" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />
      <defs>
        <linearGradient id="rocketBody" x1="24" y1="8" x2="40" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <radialGradient id="flame1" cx="32" cy="54" r="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.5" stopColor="#F97316" />
          <stop offset="1" stopColor="#EF4444" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flame2" cx="32" cy="54" r="5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF3C7" />
          <stop offset="1" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Sound waves */}
      <path d="M50 24C53 27 53 37 50 40" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M55 20C60 25 60 39 55 44" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Megaphone body */}
      <path d="M14 28L44 18V46L14 36V28Z" fill="url(#megaGrad)" stroke="#0D9488" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Handle */}
      <rect x="12" y="28" width="6" height="8" rx="2" fill="#14B8A6" stroke="#0D9488" strokeWidth="1.5" />
      {/* Bell end */}
      <ellipse cx="44" cy="32" rx="4" ry="14" fill="#5EEAD4" stroke="#0D9488" strokeWidth="1.5" />
      <ellipse cx="44" cy="32" rx="2" ry="9" fill="#99F6E4" opacity="0.6" />
      {/* Button */}
      <circle cx="18" cy="32" r="2" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      {/* Highlight */}
      <path d="M20 30L38 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <defs>
        <linearGradient id="megaGrad" x1="14" y1="18" x2="44" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD4BF" />
          <stop offset="1" stopColor="#0D9488" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function FunnelIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Top rim */}
      <ellipse cx="32" cy="14" rx="22" ry="6" fill="#FDA4AF" stroke="#E11D48" strokeWidth="1.5" />
      {/* Funnel body */}
      <path d="M10 14C10 14 24 34 24 38V50C24 52 28 54 32 54C36 54 40 52 40 50V38C40 34 54 14 54 14" fill="url(#funnelGrad)" stroke="#E11D48" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Inner shine */}
      <path d="M16 16C16 16 26 32 26 36V48C26 50 29 51 32 51" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Drops */}
      <circle cx="32" cy="57" r="2.5" fill="#FB7185" />
      <circle cx="28" cy="59" r="1.5" fill="#FDA4AF" opacity="0.7" />
      <circle cx="36" cy="60" r="1" fill="#FDA4AF" opacity="0.5" />
      {/* Particles entering */}
      <circle cx="22" cy="10" r="2" fill="#FBBF24" />
      <circle cx="32" cy="8" r="1.5" fill="#60A5FA" />
      <circle cx="42" cy="10" r="2" fill="#A78BFA" />
      <circle cx="28" cy="6" r="1" fill="#34D399" />
      <defs>
        <linearGradient id="funnelGrad" x1="10" y1="14" x2="40" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDA4AF" />
          <stop offset="1" stopColor="#FB7185" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function RobotIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Antenna */}
      <line x1="32" y1="8" x2="32" y2="14" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="6" r="3" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="32" cy="6" r="1.2" fill="#EDE9FE" />
      {/* Head */}
      <rect x="14" y="14" width="36" height="28" rx="6" fill="url(#robotGrad)" stroke="#7C3AED" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="24" cy="27" r="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="40" cy="27" r="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="24" cy="27" r="2.5" fill="#7C3AED" />
      <circle cx="40" cy="27" r="2.5" fill="#7C3AED" />
      <circle cx="23" cy="25.5" r="1" fill="white" />
      <circle cx="39" cy="25.5" r="1" fill="white" />
      {/* Mouth */}
      <rect x="26" y="35" width="12" height="3" rx="1.5" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1" />
      <circle cx="29" cy="36.5" r="0.8" fill="#7C3AED" />
      <circle cx="32" cy="36.5" r="0.8" fill="#7C3AED" />
      <circle cx="35" cy="36.5" r="0.8" fill="#7C3AED" />
      {/* Ears */}
      <rect x="8" y="22" width="6" height="10" rx="3" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1.5" />
      <rect x="50" y="22" width="6" height="10" rx="3" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1.5" />
      {/* Body hint */}
      <rect x="20" y="42" width="24" height="12" rx="4" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1.5" />
      <circle cx="32" cy="48" r="3" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1" />
      <circle cx="32" cy="48" r="1" fill="#7C3AED" />
      <defs>
        <linearGradient id="robotGrad" x1="14" y1="14" x2="50" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ChartBrainIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Brain outline */}
      <path d="M20 18C14 20 10 26 12 34C12 34 8 36 10 42C12 46 16 46 18 46C20 50 26 52 32 50C38 52 44 50 46 46C48 46 52 46 54 42C56 36 52 34 52 34C54 26 50 20 44 18C40 14 34 14 32 16C30 14 24 14 20 18Z" fill="url(#brainGrad)" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Brain wrinkle */}
      <path d="M32 18V48" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M24 24C28 26 36 26 40 24" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M22 34C28 36 36 36 42 34" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Chart bars inside */}
      <rect x="24" y="36" width="4" height="10" rx="1" fill="#60A5FA" opacity="0.8" />
      <rect x="30" y="30" width="4" height="16" rx="1" fill="#93C5FD" opacity="0.8" />
      <rect x="36" y="34" width="4" height="12" rx="1" fill="#BFDBFE" opacity="0.8" />
      {/* Sparkle */}
      <circle cx="48" cy="16" r="2" fill="#FBBF24" />
      <path d="M48 13V14M48 18V19M45 16H46M50 16H51" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />
      <defs>
        <linearGradient id="brainGrad" x1="10" y1="14" x2="54" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFDBFE" />
          <stop offset="1" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function GraphUpIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Chart bg */}
      <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#chartBg)" stroke="#EA580C" strokeWidth="1.5" />
      {/* Grid lines */}
      <line x1="8" y1="24" x2="56" y2="24" stroke="#FDBA74" strokeWidth="0.5" opacity="0.5" />
      <line x1="8" y1="36" x2="56" y2="36" stroke="#FDBA74" strokeWidth="0.5" opacity="0.5" />
      <line x1="8" y1="48" x2="56" y2="48" stroke="#FDBA74" strokeWidth="0.5" opacity="0.5" />
      {/* Bar chart */}
      <rect x="14" y="38" width="8" height="14" rx="2" fill="#FB923C" opacity="0.6" />
      <rect x="28" y="28" width="8" height="24" rx="2" fill="#F97316" opacity="0.7" />
      <rect x="42" y="18" width="8" height="34" rx="2" fill="#EA580C" />
      {/* Trend arrow */}
      <path d="M16 40L30 28L44 18" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 16L44 18L42 24" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Badge */}
      <circle cx="48" cy="14" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      <text x="48" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#92400E">%</text>
      <defs>
        <linearGradient id="chartBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF7ED" />
          <stop offset="1" stopColor="#FFEDD5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CrownShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Shield */}
      <path d="M32 8L12 18V34C12 46 32 56 32 56C32 56 52 46 52 34V18L32 8Z" fill="url(#shieldGrad)" stroke="#4338CA" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Shield inner */}
      <path d="M32 14L18 22V34C18 43 32 50 32 50C32 50 46 43 46 34V22L32 14Z" fill="url(#shieldInner)" opacity="0.5" />
      {/* Crown */}
      <path d="M22 32L26 24L30 28L32 22L34 28L38 24L42 32" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="22" y="32" width="20" height="6" rx="1" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      {/* Gems */}
      <circle cx="28" cy="35" r="1.5" fill="#EF4444" />
      <circle cx="32" cy="35" r="1.5" fill="#60A5FA" />
      <circle cx="36" cy="35" r="1.5" fill="#34D399" />
      {/* Crown tips */}
      <circle cx="26" cy="23" r="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      <circle cx="32" cy="21" r="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      <circle cx="38" cy="23" r="2" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
      <defs>
        <linearGradient id="shieldGrad" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5B4FC" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="shieldInner" x1="18" y1="14" x2="46" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function PaintPaletteIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
      {/* Palette body */}
      <path d="M32 8C18 8 8 18 8 30C8 42 16 52 28 52C30 52 32 50 32 48C32 46 34 44 36 44H42C50 44 56 38 56 30C56 18 46 8 32 8Z" fill="url(#paletteGrad)" stroke="#DB2777" strokeWidth="1.5" />
      {/* Color dots */}
      <circle cx="20" cy="22" r="4" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
      <circle cx="20" cy="22" r="1.5" fill="#FCA5A5" opacity="0.5" />
      <circle cx="32" cy="16" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
      <circle cx="32" cy="16" r="1.5" fill="#FDE68A" opacity="0.5" />
      <circle cx="44" cy="22" r="4" fill="#34D399" stroke="#059669" strokeWidth="1" />
      <circle cx="44" cy="22" r="1.5" fill="#A7F3D0" opacity="0.5" />
      <circle cx="18" cy="36" r="4" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
      <circle cx="18" cy="36" r="1.5" fill="#BFDBFE" opacity="0.5" />
      <circle cx="28" cy="42" r="3" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1" />
      {/* Brush */}
      <rect x="42" y="36" width="12" height="5" rx="2.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="1" transform="rotate(-30 42 36)" />
      <rect x="50" y="34" width="10" height="3" rx="1.5" fill="#92400E" transform="rotate(-30 50 34)" />
      <defs>
        <linearGradient id="paletteGrad" x1="8" y1="8" x2="56" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBCFE8" />
          <stop offset="1" stopColor="#F9A8D4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ─── Service Data ─── */

const services = [
  {
    icon: RocketIcon,
    title: 'Growth Strategy',
    description: 'Data-driven strategic frameworks that identify your highest-leverage growth opportunities and build compounding momentum.',
    iconBg: 'from-amber-400 to-yellow-600',
    glowColor: 'rgba(212, 175, 55, 0.35)',
    borderColor: 'rgba(212, 175, 55, 0.25)',
    number: '01',
  },
  {
    icon: MegaphoneIcon,
    title: 'Paid Media',
    description: 'Precision media buying across platforms with AI-optimized bidding, creative testing, and ROAS-maximizing campaign structures.',
    iconBg: 'from-teal-400 to-emerald-600',
    glowColor: 'rgba(15, 118, 110, 0.35)',
    borderColor: 'rgba(15, 118, 110, 0.25)',
    number: '02',
  },
  {
    icon: FunnelIcon,
    title: 'Funnel Systems',
    description: 'End-to-end conversion funnels engineered for maximum efficiency — from first click to lifetime value.',
    iconBg: 'from-rose-400 to-red-600',
    glowColor: 'rgba(225, 29, 72, 0.35)',
    borderColor: 'rgba(225, 29, 72, 0.25)',
    number: '03',
  },
  {
    icon: RobotIcon,
    title: 'AI Automation',
    description: 'Intelligent automation systems that scale your operations, reduce costs, and unlock growth at machine speed.',
    iconBg: 'from-violet-400 to-purple-600',
    glowColor: 'rgba(45, 27, 105, 0.35)',
    borderColor: 'rgba(45, 27, 105, 0.25)',
    number: '04',
  },
  {
    icon: ChartBrainIcon,
    title: 'Analytics Intelligence',
    description: 'Deep analytics infrastructure that turns raw data into strategic insight and real-time decision advantage.',
    iconBg: 'from-sky-400 to-blue-600',
    glowColor: 'rgba(74, 144, 226, 0.35)',
    borderColor: 'rgba(74, 144, 226, 0.25)',
    number: '05',
  },
  {
    icon: GraphUpIcon,
    title: 'Conversion Optimization',
    description: 'Systematic CRO programs that continuously improve conversion rates through testing, learning, and compounding gains.',
    iconBg: 'from-amber-400 to-orange-600',
    glowColor: 'rgba(255, 107, 53, 0.35)',
    borderColor: 'rgba(255, 107, 53, 0.25)',
    number: '06',
  },
  {
    icon: CrownShieldIcon,
    title: 'Brand Positioning',
    description: 'Premium brand strategy that commands attention, builds authority, and creates pricing power in your market.',
    iconBg: 'from-violet-400 to-indigo-600',
    glowColor: 'rgba(74, 58, 138, 0.35)',
    borderColor: 'rgba(74, 58, 138, 0.25)',
    number: '07',
  },
  {
    icon: PaintPaletteIcon,
    title: 'Creative Systems',
    description: 'Scalable creative production pipelines with data-informed design that drives engagement and conversion at scale.',
    iconBg: 'from-pink-400 to-rose-600',
    glowColor: 'rgba(244, 114, 182, 0.35)',
    borderColor: 'rgba(244, 114, 182, 0.25)',
    number: '08',
  },
]

/* ─── Card Component ─── */

function ServiceCard({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="snap-start shrink-0 w-[300px] sm:w-auto sm:shrink lg:w-auto"
    >
      <motion.div
        whileHover={{
          y: -8,
          transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
        className="relative h-full rounded-2xl overflow-hidden cursor-pointer group"
      >
        {/* Background glow orb */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 0.6 : 0.2,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Bottom glow orb */}
        <motion.div
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Glassmorphism card body */}
        <motion.div
          className="relative z-10 h-full rounded-2xl p-5 sm:p-6 backdrop-blur-xl border overflow-hidden"
          style={{
            background: isHovered
              ? `linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.75) 100%)`
              : `linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.5) 100%)`,
            borderColor: isHovered ? service.borderColor : 'rgba(255,255,255,0.4)',
            boxShadow: isHovered
              ? `0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px ${service.borderColor}, inset 0 1px 0 rgba(255,255,255,0.8)`
              : '0 4px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
          animate={{
            borderColor: isHovered ? service.borderColor : 'rgba(255,255,255,0.4)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Top glass reflection */}
          <div
            className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none rounded-t-2xl"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
            }}
          />

          {/* Colored accent line at top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${service.borderColor} 50%, transparent 100%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scaleX: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />

          {/* Card number */}
          <div className="flex items-center justify-between mb-5">
            <motion.span
              className="text-xs font-bold tracking-widest"
              style={{
                color: isHovered ? service.borderColor : 'rgba(156, 163, 175, 0.4)',
              }}
              animate={{
                color: isHovered ? service.borderColor : 'rgba(156, 163, 175, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              {service.number}
            </motion.span>

            {/* Arrow icon */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -8,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight
                className="w-4 h-4"
                style={{ color: service.borderColor }}
              />
            </motion.div>
          </div>

          {/* Cartoon Icon */}
          <motion.div
            className="relative w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center mb-5"
            style={{
              background: `linear-gradient(135deg, ${service.iconBg})`,
              boxShadow: isHovered
                ? `0 8px 24px ${service.glowColor}`
                : `0 4px 12px ${service.glowColor.replace('0.35', '0.15')}`,
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
              boxShadow: isHovered
                ? `0 8px 24px ${service.glowColor}`
                : `0 4px 12px ${service.glowColor.replace('0.35', '0.15')}`,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Inner glass reflection on icon */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)',
              }}
            />
            <Icon />
          </motion.div>

          {/* Title */}
          <h3 className="relative text-lg font-bold text-aethon-text mb-2.5 leading-tight">
            {service.title}
          </h3>

          {/* Description */}
          <p className="relative text-sm text-aethon-text-secondary leading-relaxed">
            {service.description}
          </p>

          {/* Bottom accent glow line */}
          <motion.div
            className="absolute bottom-0 left-[10%] right-[10%] h-[2px] rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.borderColor}, transparent)`,
            }}
            animate={{
              opacity: isHovered ? 0.8 : 0,
              scaleX: isHovered ? 1 : 0.3,
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main Section ─── */

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-aethon-cream/20" />

      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A1A2E 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-20 -left-32 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-20 -right-32 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,27,105,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aethon-gold/5 border border-aethon-gold/15 mb-5"
          >
            <span className="text-sm">🚀</span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-aethon-gold">
              Our Capabilities
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aethon-text">
            What We{' '}
            <span className="text-gold-gradient">Engineer</span>
          </h2>
          <div className="mx-auto mt-5 w-20 h-[2px] bg-gradient-to-r from-aethon-gold to-aethon-gold-light rounded-full" />
          <p className="mt-6 text-aethon-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Every engagement is engineered for compounding returns — not quick wins.
          </p>
        </motion.div>

        {/* Cards grid: horizontal scroll on mobile, 4-col on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
