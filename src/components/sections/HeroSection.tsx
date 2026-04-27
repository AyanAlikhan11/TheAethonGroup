'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingShapes = [
  { type: 'circle', size: 80, color: 'bg-aethon-orange/20', top: '10%', right: '8%', delay: 0 },
  { type: 'circle', size: 40, color: 'bg-aethon-blue/20', top: '25%', right: '20%', delay: 0.2 },
  { type: 'circle', size: 60, color: 'bg-aethon-pink/20', bottom: '20%', right: '5%', delay: 0.4 },
  { type: 'circle', size: 30, color: 'bg-aethon-green/25', top: '50%', right: '30%', delay: 0.6 },
  { type: 'dot', color: 'bg-aethon-orange/30', top: '15%', right: '35%', delay: 0.8 },
  { type: 'dot', color: 'bg-aethon-purple/20', bottom: '30%', right: '15%', delay: 1 },
  { type: 'dot', color: 'bg-aethon-pink/25', top: '60%', right: '40%', delay: 1.2 },
  { type: 'circle', size: 50, color: 'bg-aethon-yellow/40', bottom: '10%', right: '25%', delay: 0.3 },
  { type: 'dot', color: 'bg-aethon-blue/30', top: '35%', right: '10%', delay: 0.5 },
  { type: 'circle', size: 20, color: 'bg-aethon-orange/25', top: '75%', right: '38%', delay: 0.7 },
]

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-aethon-yellow"
    >
      {/* Animated SVG Chart Line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-10"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2D1B69" />
            <stop offset="50%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#2D1B69" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,180 C200,180 300,100 500,80 C700,60 800,120 1000,40 C1100,10 1150,30 1200,20"
          fill="none"
          stroke="url(#chartGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.path
          d="M0,180 C200,180 300,100 500,80 C700,60 800,120 1000,40 C1100,10 1150,30 1200,20 L1200,200 L0,200 Z"
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </svg>

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0],
                }
              : {}
          }
          transition={{
            opacity: { delay: 0.8 + shape.delay, duration: 0.5 },
            scale: { delay: 0.8 + shape.delay, duration: 0.5 },
            y: {
              delay: 1.5 + i * 0.3,
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className={`absolute ${shape.color} hidden lg:block ${
            shape.type === 'circle' ? 'rounded-full' : 'rounded-full'
          }`}
          style={{
            width: shape.type === 'circle' ? shape.size : 12,
            height: shape.type === 'circle' ? shape.size : 12,
            top: shape.top,
            right: shape.right,
            bottom: shape.bottom,
          }}
        />
      ))}

      {/* Large decorative circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[20%] right-[15%] w-48 h-48 rounded-full border-2 border-aethon-orange/10 hidden xl:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-[25%] right-[18%] w-36 h-36 rounded-full border border-aethon-purple/10 hidden xl:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aethon-purple/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-aethon-orange animate-pulse" />
              <span className="text-xs font-medium text-aethon-purple tracking-wide">
                Growth Intelligence Company
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-aethon-text">
              We Build{' '}
              <span className="text-orange-gradient">Growth Engines</span>
              <br />
              That{' '}
              <span className="text-orange-gradient">Compound.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-aethon-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              THE AETHON GROUP helps ambitious brands scale through strategy, AI systems, media buying, creative execution, and precision growth operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection('cta')}
                className="bg-aethon-orange hover:bg-aethon-orange-dark text-white font-semibold px-8 py-6 text-base rounded-full cursor-pointer btn-primary"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-aethon-text/20 text-aethon-text hover:bg-aethon-text hover:text-white px-8 py-6 text-base rounded-full cursor-pointer"
              >
                Explore Our System
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Visual decorative area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative flex items-center justify-center h-[350px] sm:h-[450px] lg:h-[500px]"
          >
            {/* Main decorative circle cluster */}
            <div className="relative">
              {/* Large background circle */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                {/* Medium circle */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-white/50 flex items-center justify-center shadow-md">
                  {/* Inner circle with icon */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-aethon-orange flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 48 48" className="w-12 h-12 sm:w-16 sm:h-16" fill="none">
                      <path d="M24 4L4 44h40L24 4z" fill="white" opacity="0.9" />
                      <path d="M24 16L14 40h20L24 16z" fill="white" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Orbiting smaller circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-aethon-blue shadow-md" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-aethon-pink shadow-md" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute -bottom-2 left-1/3 w-5 h-5 rounded-full bg-aethon-green shadow-md" />
              </motion.div>
            </div>

            {/* Floating metric cards */}
            {[
              { label: 'ROAS', value: '4.8x', top: '8%', left: '0%', color: 'bg-aethon-blue' },
              { label: 'Revenue', value: '₹12Cr+', bottom: '15%', left: '0%', color: 'bg-aethon-orange' },
              { label: 'Growth', value: '340%', top: '5%', right: '0%', color: 'bg-aethon-purple' },
              { label: 'Retention', value: '97%', bottom: '10%', right: '0%', color: 'bg-aethon-pink' },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.8 + i * 0.15, duration: 0.5 },
                  scale: { delay: 0.8 + i * 0.15, duration: 0.5 },
                  y: {
                    delay: 1.5 + i * 0.3,
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="absolute bg-white rounded-2xl px-4 py-3 shadow-lg hidden lg:block"
                style={{
                  top: metric.top,
                  bottom: metric.bottom,
                  left: metric.left,
                  right: metric.right,
                }}
              >
                <div className={`text-lg font-bold text-aethon-text`}>{metric.value}</div>
                <div className="text-xs text-aethon-text-secondary">{metric.label}</div>
                <div className={`absolute -bottom-1 left-4 w-3 h-3 ${metric.color} rounded-sm rotate-45`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
