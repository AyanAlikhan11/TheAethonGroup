'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, FileText, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openContactModal = () => {
    window.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(165deg, #FAFAF5 0%, #F5F0E6 40%, #FAFAF5 100%)' }}
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aethon-gold/20 to-transparent" />

      {/* Very subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,118,110,0.03) 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-aethon-gold">
              Let&apos;s Talk Growth
            </span>
          </motion.div>

          {/* Heading — professional size */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-aethon-dark leading-snug max-w-2xl"
          >
            Ready to build a{' '}
            <span className="text-gold-gradient">category-leading</span>{' '}
            growth engine?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-aethon-text-secondary max-w-md text-sm sm:text-base leading-relaxed"
          >
            Let&apos;s discuss how AETHON can engineer your next phase of compounding growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <Button
              onClick={openContactModal}
              className="bg-aethon-dark hover:bg-aethon-dark/90 text-white font-semibold px-7 py-5 text-sm rounded-full cursor-pointer group"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              onClick={openContactModal}
              variant="outline"
              className="border-aethon-dark/15 text-aethon-dark hover:bg-aethon-dark hover:text-white px-7 py-5 text-sm rounded-full font-semibold cursor-pointer"
            >
              <Phone className="mr-2 w-4 h-4" />
              Get Free Audit
            </Button>
            <Button
              onClick={openContactModal}
              variant="ghost"
              className="text-aethon-text-secondary hover:text-aethon-dark px-7 py-5 text-sm rounded-full font-semibold cursor-pointer"
            >
              <FileText className="mr-2 w-4 h-4" />
              Request Proposal
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-5 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['bg-aethon-gold', 'bg-aethon-green', 'bg-aethon-blue', 'bg-aethon-pink'].map((color, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${color} border-2 border-white flex items-center justify-center shadow-sm`}>
                    <span className="text-[8px] font-bold text-white">{['SK', 'AR', 'JM', 'PL'][i]}</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-aethon-text-secondary">50+ brands trust us</span>
            </div>
            <div className="w-[1px] h-3 bg-aethon-gray-dark" />
            <span className="text-xs text-aethon-text-secondary">Avg. 3X ROI in 90 days</span>
          </motion.div>

          {/* Micro-text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex items-center justify-center gap-4 flex-wrap"
          >
            {['No commitment required', '30-min discovery call', 'Custom growth roadmap'].map((text) => (
              <div key={text} className="flex items-center gap-1">
                <ChevronRight className="w-2.5 h-2.5 text-aethon-gold" />
                <span className="text-[11px] text-aethon-text-muted">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
