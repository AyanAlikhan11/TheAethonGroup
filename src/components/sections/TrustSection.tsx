'use client'

import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const brands = [
  { name: 'Client One', logo: '/logos/1.jpeg' },
  { name: 'Client Two', logo: '/logos/2.jpeg' },
  { name: 'Client Three', logo: '/logos/3.1.jpeg' },
  { name: 'Client Four', logo: '/logos/4.png' },
  { name: 'Client Five', logo: '/logos/5.11.png' },
  { name: 'Client Six', logo: '/logos/6.1.png' },
  { name: 'Client Seven', logo: '/logos/7.png' },
  { name: 'Client Eight', logo: '/logos/8.1.png' },
]

export default function TrustSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section
      id="trust"
      ref={ref}
      className="relative py-16 sm:py-20 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-medium text-aethon-text-muted tracking-widest uppercase mb-2">
            Trusted by ambitious brands worldwide
          </p>

          <div className="mx-auto w-12 h-[2px] bg-gradient-to-r from-aethon-gold to-aethon-gold-light rounded-full" />
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          style={{ y: yParallax }}
          className="grid grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group relative flex items-center justify-center w-full"
            >
              {/* Logo Box */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden ">
                
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 120px"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}