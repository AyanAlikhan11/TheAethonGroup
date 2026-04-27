'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const floatingMetrics = [
  { label: 'ROAS', value: '4.8x', top: '15%', left: '5%' },
  { label: 'Revenue', value: '₹12Cr+', top: '60%', left: '2%' },
  { label: 'Growth', value: '340%', top: '20%', right: '5%' },
  { label: 'Retention', value: '97%', top: '65%', right: '2%' },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Hero background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/hero-bg.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/80 via-matte-black/50 to-matte-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      {/* Animated SVG Chart Line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-10"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#7C3AED" />
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/20 bg-violet/5 mb-6"
            >
              <Sparkles className="size-3.5 text-violet-light" />
              <span className="text-xs font-medium text-violet-light tracking-wide">
                Growth Intelligence Company
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-ivory">We Build </span>
              <span className="text-gold-gradient">Growth Engines</span>
              <br />
              <span className="text-ivory">That </span>
              <span className="text-gold-gradient">Compound.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-ivory-soft/60 max-w-xl mx-auto lg:mx-0 leading-relaxed"
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
                className="bg-gold hover:bg-gold-light text-matte-black font-semibold px-8 py-6 text-base cursor-pointer"
              >
                Book Strategy Call
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-violet/40 text-ivory hover:bg-violet/10 hover:text-ivory px-8 py-6 text-base cursor-pointer"
              >
                Explore Our System
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - 3D Glowing A Logo + Floating Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative flex items-center justify-center h-[400px] sm:h-[500px]"
          >
            {/* 3D Glowing A */}
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 -m-16 rounded-full bg-violet/5 blur-[60px] animate-pulse" />
              <div className="absolute inset-0 -m-8 rounded-full bg-gold/5 blur-[40px]" />

              {/* Main A shape */}
              <div className="relative">
                {/* A Letter using CSS */}
                <div className="relative w-48 h-56 sm:w-64 sm:h-72">
                  {/* Left leg of A */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-[85%] w-10 sm:w-12 bg-gradient-to-t from-gold/80 via-gold to-gold/40 rounded-t-full"
                    style={{
                      height: '100%',
                      clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                      transform: 'skewX(12deg)',
                    }}
                  />
                  {/* Right leg of A */}
                  <div
                    className="absolute bottom-0 left-1/2 translate-x-[15%] w-10 sm:w-12 bg-gradient-to-t from-gold/80 via-gold to-gold/40 rounded-t-full"
                    style={{
                      height: '100%',
                      clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                      transform: 'skewX(-12deg)',
                    }}
                  />
                  {/* Crossbar of A */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full"
                    style={{
                      top: '55%',
                      width: '80%',
                      height: '8px',
                    }}
                  />
                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet/20 blur-[30px]" />
                  </div>
                </div>

                {/* Outer glow effect */}
                <div className="absolute inset-0 -inset-4 bg-gold/10 blur-[50px] rounded-full" />
              </div>
            </div>

            {/* Floating metric cards */}
            {floatingMetrics.map((metric, i) => (
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
                className="absolute glass rounded-xl px-4 py-3 hidden lg:block"
                style={{
                  top: metric.top,
                  left: metric.left,
                  right: metric.right,
                }}
              >
                <div className="text-gold font-bold text-lg">{metric.value}</div>
                <div className="text-ivory-soft/50 text-xs">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matte-black to-transparent" />
    </section>
  )
}
