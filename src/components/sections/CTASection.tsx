'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openContactModal = () => {
    window.dispatchEvent(new CustomEvent('openContactModal'))
  }

  return (
    <section id="cta" ref={ref} className="relative py-20 sm:py-28 bg-aethon-orange overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-white/5 blur-3xl" />

        {/* Dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.15 } : {}}
            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}

        {/* Flowing lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Ready to build a{' '}
            <span className="text-aethon-yellow">category-leading</span>
            <br />
            growth engine?
          </h2>

          <p className="mt-6 text-white/70 max-w-xl mx-auto text-base sm:text-lg">
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
            className="bg-white text-aethon-orange font-semibold px-8 py-6 text-base rounded-full hover:bg-white/90 cursor-pointer btn-primary"
          >
            Book Strategy Call
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            onClick={openContactModal}
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-full cursor-pointer"
          >
            <Phone className="mr-2 size-4" />
            Get Free Audit
          </Button>
          <Button
            onClick={openContactModal}
            className="bg-aethon-text text-white font-semibold px-8 py-6 text-base rounded-full hover:bg-aethon-text/90 cursor-pointer"
          >
            <FileText className="mr-2 size-4" />
            Request Proposal
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
