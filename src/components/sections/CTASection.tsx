'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, MessageSquare, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openContactModal = () => {
    window.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section id="cta" ref={ref} className="relative overflow-hidden">
      {/* Top Section — Light background */}
      <div className="bg-[#F9F8F5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left — Text + Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-aethon-dark leading-[1.15] tracking-tight">
                Ready to build a{' '}
                <span className="text-aethon-gold">category-leading</span>{' '}
                growth engine?
              </h2>

              <p className="mt-4 text-aethon-text-secondary max-w-lg mx-auto lg:mx-0 text-base leading-relaxed">
                Let&apos;s discuss how AETHON can engineer your next phase of compounding growth. No commitment required.
              </p>

              {/* Two primary action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
                <Button
                  onClick={openContactModal}
                  className="bg-aethon-dark hover:bg-aethon-dark/90 text-white font-semibold px-7 py-5 text-sm rounded-xl cursor-pointer group"
                >
                  <Rocket className="mr-2 w-4 h-4" />
                  Book Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <Button
                  onClick={openContactModal}
                  variant="outline"
                  className="border-aethon-dark/20 text-aethon-dark bg-white hover:bg-aethon-dark hover:text-white hover:border-aethon-dark px-7 py-5 text-sm rounded-xl font-semibold cursor-pointer"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Get Free Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {['bg-aethon-gold', 'bg-aethon-green', 'bg-aethon-blue', 'bg-aethon-pink'].map((color, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full ${color} border-2 border-[#F9F8F5] flex items-center justify-center`}>
                        <span className="text-[8px] font-bold text-white">{['SK', 'AR', 'JM', 'PL'][i]}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-aethon-text-secondary">50+ brands trust us</span>
                </div>
                <div className="w-[1px] h-3 bg-aethon-gray-dark" />
                <span className="text-xs text-aethon-text-secondary">Avg. 3X ROI in 90 days</span>
              </div>
            </motion.div>

            {/* Right — Illustration card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex-1 max-w-md w-full"
            >
              <div className="relative rounded-2xl bg-white border border-aethon-gray-dark/50 p-8 shadow-sm">
                {/* Decorative gold shape behind card */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-aethon-gold/10 blur-2xl pointer-events-none" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '230%', label: 'Revenue Growth', color: '#D4AF37' },
                    { value: '3X', label: 'Average ROI', color: '#0F766E' },
                    { value: '92', label: 'Growth Score', color: '#2D1B69' },
                    { value: '50+', label: 'Brands Scaled', color: '#4A90E2' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className="text-center p-3 rounded-xl bg-[#F9F8F5]"
                    >
                      <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-[11px] text-aethon-text-secondary mt-0.5">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom tagline */}
                <div className="mt-6 pt-4 border-t border-aethon-gray-dark/30 text-center">
                  <p className="text-xs text-aethon-text-secondary">
                    Proven results across <span className="font-semibold text-aethon-dark">50+ engagements</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Banner — Gold */}
      <div className="bg-aethon-gold">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-aethon-dark/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-aethon-dark" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-aethon-dark">
                  Have a project in mind? Let&apos;s discuss.
                </p>
                <p className="text-xs text-aethon-dark/60 mt-0.5">
                  Free 30-minute discovery call — no strings attached
                </p>
              </div>
            </div>
            <Button
              onClick={openContactModal}
              className="bg-aethon-dark hover:bg-aethon-dark/90 text-white font-semibold px-6 py-3 text-sm rounded-xl cursor-pointer group shrink-0"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
