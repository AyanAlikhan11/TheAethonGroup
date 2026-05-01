'use client'

import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      
      {/* Logo */}
      <motion.img
        src="/SplashLogo.png"
        alt="Logo"
        className="w-85 h-80 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Slogan BELOW logo */}
      <motion.p
        className="text-bold md:text-lg tracking-wider text-aethon-gold-dark"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: 'easeInOut' }}
      >
        Branding | Media | Events | Strategy
      </motion.p>

    </div>
  )
}