'use client'

import { useEffect, useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

export default function CustomCursor() {
  const posRef = useRef({ x: -100, y: -100 })
  const smoothRef = useRef({ x: -100, y: -100 })
  const clickingRef = useRef(false)
  const hoveringRef = useRef(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }
    const down = () => { clickingRef.current = true }
    const up = () => { clickingRef.current = false }
    const hoverStart = () => { hoveringRef.current = true }
    const hoverEnd = () => { hoveringRef.current = false }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]').forEach((el) => {
        el.addEventListener('mouseenter', hoverStart)
        el.addEventListener('mouseleave', hoverEnd)
      })
    }
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      observer.disconnect()
    }
  }, [])

  useAnimationFrame(() => {
    if (!dotRef.current || !ringRef.current) return

    // Smooth follow with lerp
    const lerp = 0.15
    smoothRef.current.x += (posRef.current.x - smoothRef.current.x) * lerp
    smoothRef.current.y += (posRef.current.y - smoothRef.current.y) * lerp

    const hovering = hoveringRef.current
    const clicking = clickingRef.current

    const dotSize = hovering ? 40 : 10
    dotRef.current.style.transform = `translate(${posRef.current.x - dotSize / 2}px, ${posRef.current.y - dotSize / 2}px)`
    dotRef.current.style.width = `${dotSize}px`
    dotRef.current.style.height = `${dotSize}px`
    dotRef.current.style.opacity = clicking ? '0.5' : '1'
    dotRef.current.style.backgroundColor = hovering ? 'rgba(212, 175, 55, 0.15)' : '#D4AF37'
    dotRef.current.style.border = hovering ? '1.5px solid rgba(212, 175, 55, 0.4)' : 'none'

    const ringSize = 32
    const scale = clicking ? 0.8 : hovering ? 1.5 : 1
    ringRef.current.style.transform = `translate(${smoothRef.current.x - ringSize / 2}px, ${smoothRef.current.y - ringSize / 2}px) scale(${scale})`
    ringRef.current.style.opacity = clicking ? '0.3' : hovering ? '0.6' : '0.3'
  })

  return (
    <>
      {/* Main dot cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#D4AF37',
          willChange: 'transform',
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
