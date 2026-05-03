'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type SplashScreenProps = {
  onComplete: () => void
}

export default function SplashScreen({
  onComplete,
}: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2800)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <motion.img
          src="/og-image.webp"
          alt="Logo"
          className="w-72 h-72 md:w-85 md:h-100 object-contain"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
        />

        {/* Slogan */}
        <motion.p
          className=" text-bold md:text-lg font-semibold tracking-[0.35em] text-aethon-gold-dark text-center px-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
            ease: 'easeOut',
          }}
        >
          Branding | Media | Events | Strategy
        </motion.p>

        {/* Loader Line */}
        <div className="mt-8 w-52 md:w-72 h-[2px] bg-gray-200 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-aethon-gold-dark"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              delay: 1,
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Fade Out Whole Screen */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.3,
            duration: 0.5,
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}