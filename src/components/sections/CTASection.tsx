'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, Briefcase, UserPlus, TrendingUp, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openContactModal = () => {
    window.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section id="cta" ref={ref} className="relative overflow-hidden">
      {/* Main Section — Light background */}
      <div className="bg-[#F9F8F5] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Left Column (~55%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex-1 lg:max-w-[55%] pt-2"
            >
              {/* Heading */}
              <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight">
                Scale. Dominate. Make an{' '}
                <span className="text-aethon-gold">Impact.</span>
              </h2>

              {/* Subheading */}
              <p className="mt-3 text-[14px] sm:text-[15px] text-[#6B7280] max-w-md leading-relaxed">
                Partner with AETHON to engineer compounding growth. Strategy, media, AI — all under one roof.
              </p>

              {/* Two action buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Button
                  onClick={openContactModal}
                  className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white font-semibold px-6 py-3 text-[13px] rounded-lg cursor-pointer group"
                >
                  Book Strategy Call
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <Button
                  onClick={openContactModal}
                  variant="outline"
                  className="bg-white border-[#E5E5E5] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] px-6 py-3 text-[13px] rounded-lg font-semibold cursor-pointer"
                >
                  Get Free Audit
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Button>
              </div>

              {/* Illustration area — growth graphic */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 relative"
              >
                <div className="relative rounded-2xl bg-white border border-[#E8E8E8] p-6 shadow-sm">
                  {/* Decorative gold blob */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-aethon-gold/10 blur-xl pointer-events-none" />

                  {/* Mini growth dashboard */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-aethon-gold/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-aethon-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[11px] text-[#9CA3AF] font-medium">Growth Trajectory</p>
                          <p className="text-xl font-bold text-[#1A1A1A]">230% <span className="text-[11px] font-medium text-aethon-green">↑ this quarter</span></p>
                        </div>
                        <div className="flex gap-1 items-end h-8">
                          {[30, 45, 35, 55, 50, 70, 65, 85, 78, 95].map((h, i) => (
                            <div
                              key={i}
                              className="w-1.5 rounded-full"
                              style={{
                                height: `${h}%`,
                                backgroundColor: i >= 7 ? '#D4AF37' : '#E8E8E8',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0F0F0] flex items-center gap-3">
                    <BarChart3 className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span className="text-[11px] text-[#9CA3AF]">Live growth metrics from AETHON clients</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column (~45%) — Two stacked cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex-1 lg:max-w-[45%] w-full flex flex-col gap-4"
            >
              {/* Card 1: Grow a Business */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="bg-white rounded-xl border border-[#E8E8E8] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer group"
                onClick={openContactModal}
              >
                <div className="w-11 h-11 rounded-full bg-[#F3F3F3] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-[#6B7280]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-[#1A1A1A]">Grow a Business</h3>
                  <p className="text-[13px] text-[#9CA3AF] mt-0.5 leading-snug">
                    Scale revenue with strategy, media buying &amp; AI systems.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-white transition-colors" />
                </div>
              </motion.div>

              {/* Card 2: Scale Your Brand */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="bg-white rounded-xl border border-[#E8E8E8] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer group"
                onClick={openContactModal}
              >
                <div className="w-11 h-11 rounded-full bg-[#F3F3F3] flex items-center justify-center shrink-0">
                  <UserPlus className="w-5 h-5 text-[#6B7280]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-[#1A1A1A]">Scale Your Brand</h3>
                  <p className="text-[13px] text-[#9CA3AF] mt-0.5 leading-snug">
                    Creative execution &amp; growth ops to dominate your market.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-white transition-colors" />
                </div>
              </motion.div>

              {/* Card 3: Request a Proposal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="bg-white rounded-xl border border-[#E8E8E8] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.04)] flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer group"
                onClick={openContactModal}
              >
                <div className="w-11 h-11 rounded-full bg-[#F3F3F3] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#6B7280]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-[#1A1A1A]">Request a Proposal</h3>
                  <p className="text-[13px] text-[#9CA3AF] mt-0.5 leading-snug">
                    Get a custom growth roadmap for your business.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center shrink-0 group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Banner — Gold */}
      <div className="bg-aethon-gold">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#1A1A1A]" />
              </div>
              <div>
                <p className="text-[14px] sm:text-[15px] font-semibold text-[#1A1A1A]">
                  Have a project in mind? Let&apos;s discuss.
                </p>
                <p className="text-[12px] text-[#1A1A1A]/50 mt-0.5">
                  Book a free consultation call with our team.
                </p>
              </div>
            </div>
            <Button
              onClick={openContactModal}
              className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white font-semibold px-5 py-2.5 text-[13px] rounded-lg cursor-pointer group shrink-0"
            >
              Discuss Your Project
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
