'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const openContactModal = () => {
    // Dispatch custom event to open contact modal
    window.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section id="cta" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial gradient with violet glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.15 } : {}}
            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
        {/* Gold lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ivory leading-tight">
            Ready to build a{' '}
            <span className="text-gold-gradient">category-leading</span>
            <br />
            growth engine?
          </h2>

          <p className="mt-6 text-ivory-soft/50 max-w-xl mx-auto text-base sm:text-lg">
            Let&apos;s discuss how AETHON can engineer your next phase of growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button
            onClick={openContactModal}
            className="bg-gold hover:bg-gold-light text-matte-black font-semibold px-8 py-6 text-base cursor-pointer"
          >
            Book Strategy Call
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            onClick={openContactModal}
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold-light px-8 py-6 text-base cursor-pointer"
          >
            <Phone className="mr-2 size-4" />
            Get Free Audit
          </Button>
          <Button
            onClick={openContactModal}
            className="bg-violet hover:bg-violet-light text-white font-semibold px-8 py-6 text-base cursor-pointer"
          >
            <FileText className="mr-2 size-4" />
            Request Proposal
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
