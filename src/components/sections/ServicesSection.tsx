'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Target,
  DollarSign,
  Filter,
  Bot,
  BarChart3,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Growth Strategy',
    description: 'Data-driven strategic frameworks that identify your highest-leverage growth opportunities and build compounding momentum.',
    gradient: 'from-amber-400/20 to-yellow-600/10',
    iconBg: 'from-amber-400 to-yellow-600',
    glowColor: 'rgba(212, 175, 55, 0.35)',
    borderColor: 'rgba(212, 175, 55, 0.25)',
    number: '01',
  },
  {
    icon: DollarSign,
    title: 'Paid Media',
    description: 'Precision media buying across platforms with AI-optimized bidding, creative testing, and ROAS-maximizing campaign structures.',
    gradient: 'from-teal-400/20 to-emerald-600/10',
    iconBg: 'from-teal-400 to-emerald-600',
    glowColor: 'rgba(15, 118, 110, 0.35)',
    borderColor: 'rgba(15, 118, 110, 0.25)',
    number: '02',
  },
  {
    icon: Filter,
    title: 'Funnel Systems',
    description: 'End-to-end conversion funnels engineered for maximum efficiency — from first click to lifetime value.',
    gradient: 'from-rose-400/20 to-red-600/10',
    iconBg: 'from-rose-400 to-red-600',
    glowColor: 'rgba(225, 29, 72, 0.35)',
    borderColor: 'rgba(225, 29, 72, 0.25)',
    number: '03',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent automation systems that scale your operations, reduce costs, and unlock growth at machine speed.',
    gradient: 'from-violet-400/20 to-purple-600/10',
    iconBg: 'from-violet-400 to-purple-600',
    glowColor: 'rgba(45, 27, 105, 0.35)',
    borderColor: 'rgba(45, 27, 105, 0.25)',
    number: '04',
  },
  {
    icon: BarChart3,
    title: 'Analytics Intelligence',
    description: 'Deep analytics infrastructure that turns raw data into strategic insight and real-time decision advantage.',
    gradient: 'from-sky-400/20 to-blue-600/10',
    iconBg: 'from-sky-400 to-blue-600',
    glowColor: 'rgba(74, 144, 226, 0.35)',
    borderColor: 'rgba(74, 144, 226, 0.25)',
    number: '05',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Optimization',
    description: 'Systematic CRO programs that continuously improve conversion rates through testing, learning, and compounding gains.',
    gradient: 'from-amber-400/20 to-orange-600/10',
    iconBg: 'from-amber-400 to-orange-600',
    glowColor: 'rgba(255, 107, 53, 0.35)',
    borderColor: 'rgba(255, 107, 53, 0.25)',
    number: '06',
  },
  {
    icon: Shield,
    title: 'Brand Positioning',
    description: 'Premium brand strategy that commands attention, builds authority, and creates pricing power in your market.',
    gradient: 'from-violet-400/20 to-indigo-600/10',
    iconBg: 'from-violet-400 to-indigo-600',
    glowColor: 'rgba(74, 58, 138, 0.35)',
    borderColor: 'rgba(74, 58, 138, 0.25)',
    number: '07',
  },
  {
    icon: Sparkles,
    title: 'Creative Systems',
    description: 'Scalable creative production pipelines with data-informed design that drives engagement and conversion at scale.',
    gradient: 'from-pink-400/20 to-rose-600/10',
    iconBg: 'from-pink-400 to-rose-600',
    glowColor: 'rgba(244, 114, 182, 0.35)',
    borderColor: 'rgba(244, 114, 182, 0.25)',
    number: '08',
  },
]

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

          {/* Icon container with gradient background */}
          <motion.div
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
            style={{
              background: `linear-gradient(135deg, ${service.iconBg})`,
              boxShadow: isHovered
                ? `0 8px 24px ${service.glowColor}`
                : `0 4px 12px ${service.glowColor.replace('0.35', '0.15')}`,
            }}
            animate={{
              scale: isHovered ? 1.08 : 1,
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
            <Icon className="w-6 h-6 text-white relative z-10" />
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
            <Bot className="w-3.5 h-3.5 text-aethon-gold" />
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
