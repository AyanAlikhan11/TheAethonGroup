'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, Phone, FileText, Sparkles, Zap, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function FloatingOrb({ delay, size, x, y, duration }: { delay: number; size: number; x: string; y: string; duration: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.6, 0.3, 0.6], scale: [0.8, 1.1, 0.9, 1.1] }}
      transition={{ delay, duration, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)',
      }}
    />
  )
}

function GridLine({ index, total }: { index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.04 }}
      transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
      className="absolute h-full w-[1px] bg-aethon-gold pointer-events-none"
      style={{ left: `${((index + 1) / (total + 1)) * 100}%` }}
    />
  )
}

function HorizontalLine({ index, total }: { index: number; total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.04 }}
      transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
      className="absolute w-full h-[1px] bg-aethon-gold pointer-events-none"
      style={{ top: `${((index + 1) / (total + 1)) * 100}%` }}
    />
  )
}

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = (e.target as HTMLElement).closest('section')?.getBoundingClientRect()
      if (rect) {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const openContactModal = () => {
    window.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D0D1A 0%, #1A1A2E 30%, #0F0F20 70%, #0D0D1A 100%)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <GridLine key={`v-${i}`} index={i} total={8} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <HorizontalLine key={`h-${i}`} index={i} total={5} />
        ))}
      </div>

      {/* Radial spotlight that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(212,175,55,0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Floating orbs */}
      <FloatingOrb delay={0} size={300} x="10%" y="20%" duration={8} />
      <FloatingOrb delay={1} size={200} x="75%" y="60%" duration={10} />
      <FloatingOrb delay={2} size={250} x="50%" y="10%" duration={7} />
      <FloatingOrb delay={3} size={180} x="85%" y="15%" duration={9} />
      <FloatingOrb delay={0.5} size={150} x="20%" y="75%" duration={11} />

      {/* Diagonal gold accent lines */}
      <motion.div
        initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
        animate={isInView ? { opacity: 1, rotate: -45, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] pointer-events-none"
      >
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aethon-gold/15 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] mt-8 bg-gradient-to-r from-transparent via-aethon-gold/8 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -mt-8 bg-gradient-to-r from-transparent via-aethon-gold/8 to-transparent" />
      </motion.div>

      {/* Bottom gold glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aethon-gold/40 to-transparent" />

      {/* Corner accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
        className="absolute top-6 left-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-aethon-gold/40" />
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-aethon-gold/40" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
        className="absolute top-6 right-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-8 h-[1px] bg-aethon-gold/40" />
        <div className="absolute top-0 right-0 w-[1px] h-8 bg-aethon-gold/40" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
        className="absolute bottom-6 left-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-aethon-gold/40" />
        <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-aethon-gold/40" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
        className="absolute bottom-6 right-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-aethon-gold/40" />
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-aethon-gold/40" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main content card with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(26,26,46,0.6) 0%, rgba(26,26,46,0.3) 50%, rgba(13,13,26,0.6) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212,175,55,0.15)',
          }}
        >
          {/* Animated border glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[1px] rounded-3xl pointer-events-none overflow-hidden"
            style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px' }}
          >
            <div className="absolute inset-0" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(212,175,55,0.4) 10%, transparent 20%)' }} />
          </motion.div>

          {/* Inner glow spots */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 60%)' }} />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 60%)' }} />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-aethon-gold/30 bg-aethon-gold/5">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-4 h-4 text-aethon-gold" />
                </motion.div>
                <span className="text-xs font-semibold text-aethon-gold tracking-[0.2em] uppercase">Limited Availability</span>
                <div className="w-1.5 h-1.5 rounded-full bg-aethon-gold animate-pulse" />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-[1.1] tracking-tight">
                <span className="text-white">Ready to build a</span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="text-gold-gradient">category-leading</span>
                  {/* Underline accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-aethon-gold via-aethon-yellow to-aethon-gold origin-left"
                  />
                </span>
                <br />
                <span className="text-white">growth engine?</span>
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-white/50 max-w-lg mx-auto text-center text-base sm:text-lg leading-relaxed"
            >
              Let&apos;s discuss how AETHON can engineer your next phase of compounding growth.
            </motion.p>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center gap-6 mt-8 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['bg-aethon-gold', 'bg-aethon-green', 'bg-aethon-blue', 'bg-aethon-pink'].map((color, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${color} border-2 border-aethon-dark flex items-center justify-center`}>
                      <span className="text-[9px] font-bold text-white">{['SK', 'AR', 'JM', 'PL'][i]}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-white/60">50+ brands trust us</span>
              </div>
              <div className="w-[1px] h-4 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-aethon-gold" />
                <span className="text-sm text-white/60">Avg. 3X ROI in 90 days</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            >
              {/* Primary button - gold gradient */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={openContactModal}
                  className="relative group px-8 py-6 text-base rounded-full font-semibold cursor-pointer overflow-hidden border-0"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E8C84A 50%, #D4AF37 100%)',
                    color: '#0D0D1A',
                    boxShadow: '0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)',
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)' }}
                  />
                  <span className="relative flex items-center gap-2">
                    Book Strategy Call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              {/* Secondary button - outlined glass */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={openContactModal}
                  variant="outline"
                  className="px-8 py-6 text-base rounded-full font-semibold cursor-pointer bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-aethon-gold/40"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Get Free Audit
                </Button>
              </motion.div>

              {/* Tertiary button - subtle */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={openContactModal}
                  variant="ghost"
                  className="px-8 py-6 text-base rounded-full font-semibold cursor-pointer text-white/60 hover:text-white hover:bg-white/5"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Request Proposal
                </Button>
              </motion.div>
            </motion.div>

            {/* Bottom micro-text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 flex items-center justify-center gap-4 flex-wrap"
            >
              {['No commitment required', '30-min discovery call', 'Custom growth roadmap'].map((text, i) => (
                <div key={text} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-aethon-gold/60" />
                  <span className="text-xs text-white/30">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements outside card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-1/4 -left-4 sm:-left-8 hidden lg:block pointer-events-none"
        >
          <div className="flex flex-col gap-3">
            <div className="w-2 h-2 rounded-full bg-aethon-gold/40" />
            <div className="w-1 h-1 rounded-full bg-aethon-gold/20 ml-2" />
            <div className="w-3 h-3 rounded-full bg-aethon-gold/30" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute top-1/3 -right-4 sm:-right-8 hidden lg:block pointer-events-none"
        >
          <div className="flex flex-col gap-3 items-end">
            <div className="w-3 h-3 rounded-full bg-aethon-gold/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-aethon-gold/40 mr-1" />
            <div className="w-2 h-2 rounded-full bg-aethon-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
