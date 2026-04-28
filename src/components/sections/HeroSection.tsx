'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, TrendingUp, BarChart3, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ProcessFlow from './ProcessFlow'

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
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-aethon-cream/30" />

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dotted-pattern" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aethon-gold/10 border border-aethon-gold/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-aethon-gold animate-pulse" />
              <span className="text-xs font-semibold text-aethon-gold-dark tracking-wide uppercase">
                Growth Intelligence Company
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-aethon-dark">
              We Build{' '}
              <span className="text-gold-gradient">Growth Engines</span>
              <br />
              That{' '}
              <span className="text-gold-gradient">Compound.</span>
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
                className="bg-aethon-dark hover:bg-aethon-gold text-white font-semibold px-8 py-6 text-base rounded-full cursor-pointer btn-primary group"
              >
                Let&apos;s Build Your Growth Engine
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-aethon-dark/20 text-aethon-dark hover:bg-aethon-dark hover:text-white px-8 py-6 text-base rounded-full cursor-pointer"
              >
                See How We Work
              </Button>
            </motion.div>

            {/* Trust mini bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {['bg-aethon-gold', 'bg-aethon-green', 'bg-aethon-blue', 'bg-aethon-pink'].map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center shadow-sm`}>
                    <span className="text-[10px] font-bold text-white">
                      {['SK', 'AR', 'JM', 'PL'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-aethon-text">50+ businesses</p>
                <p className="text-xs text-aethon-text-muted">trust us to grow</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Team image + Stat cards + Process Flow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative order-2"
          >
            {/* Yellow circular background behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-br from-aethon-yellow/30 via-aethon-gold-light/20 to-aethon-yellow/10 blur-sm" />

            {/* Team image */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/team-hero.png"
                  alt="AETHON team collaborating on growth strategy"
                  width={576}
                  height={432}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle overlay for blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-aethon-dark/10 to-transparent" />
              </motion.div>

              {/* Floating stat cards around the image */}
              {[
                { icon: TrendingUp, label: 'Revenue Growth', value: '230%', top: '-8%', right: '-5%', color: '#D4AF37' },
                { icon: BarChart3, label: 'ROI', value: '3X', bottom: '20%', left: '-8%', color: '#0F766E' },
                { icon: Target, label: 'Growth Score', value: '92', bottom: '-5%', right: '5%', color: '#2D1B69' },
              ].map((metric, i) => {
                const Icon = metric.icon
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            y: [0, -6, 0],
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
                    className="absolute bg-white rounded-2xl px-4 py-3 shadow-lg border border-aethon-gray-dark/20 hidden sm:flex items-center gap-3 z-20"
                    style={{
                      top: metric.top,
                      bottom: metric.bottom,
                      left: metric.left,
                      right: metric.right,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${metric.color}12` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: metric.color }} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-aethon-text leading-tight">{metric.value}</div>
                      <div className="text-[10px] text-aethon-text-secondary leading-tight">{metric.label}</div>
                    </div>
                    {/* Growth score bar */}
                    {metric.label === 'Growth Score' && (
                      <div className="absolute -bottom-0.5 left-2 right-2 h-1 bg-aethon-gray rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '92%' } : {}}
                          transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-aethon-purple to-aethon-gold"
                        />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Process Flow below the image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <ProcessFlow />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-aethon-dark to-transparent" />
    </section>
  )
}
