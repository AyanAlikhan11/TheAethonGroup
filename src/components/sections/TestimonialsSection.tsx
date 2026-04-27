'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import type { UseEmblaCarouselType } from 'embla-carousel-react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  featured: boolean
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [api, setApi] = useState<UseEmblaCarouselType[1]>()
  const [current, setCurrent] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  // Fallback testimonials
  const fallbackTestimonials = [
    {
      id: '1',
      quote: "AETHON didn't just run our ads — they rebuilt our entire growth engine. Revenue 5x'd in 4 months and hasn't stopped since.",
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      company: 'NovaStar D2C',
    },
    {
      id: '2',
      quote: "The systems they built compound every single month. We're now growing faster with less spend. That's the AETHON difference.",
      name: 'Priya Mehta',
      role: 'Head of Growth',
      company: 'TechX SaaS',
    },
    {
      id: '3',
      quote: 'Working with AETHON felt like having a world-class growth team embedded in our company. Their strategic depth is unmatched.',
      name: 'Arjun Patel',
      role: 'Co-Founder',
      company: 'VertexR Wellness',
    },
    {
      id: '4',
      quote: 'They turned our scattered marketing into a precision growth machine. The ROI speaks for itself — 8.2x returns on our investment.',
      name: 'Kavitha Rao',
      role: 'CMO',
      company: 'ApexCore Finance',
    },
  ]

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        if (data.testimonials && data.testimonials.length > 0) {
          setTestimonials(data.testimonials)
        }
      })
      .catch(() => {
        // Use fallback
      })
  }, [])

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on('reInit', handleSelect)
    api.on('select', handleSelect)

    return () => {
      api.off('reInit', handleSelect)
      api.off('select', handleSelect)
    }
  }, [api])

  // Auto-play
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [api])

  const displayTestimonials = testimonials.length > 0
    ? testimonials.map((t) => ({
        id: t.id,
        quote: t.content,
        name: t.name,
        role: t.role,
        company: t.company,
      }))
    : fallbackTestimonials

  return (
    <section id="testimonials" ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet/3 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
            What Founders{' '}
            <span className="text-gold-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent>
              {displayTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="glass rounded-2xl p-8 sm:p-12 text-center border border-gold/5">
                    {/* Gold quote mark */}
                    <div className="text-5xl sm:text-6xl text-gold/20 font-serif leading-none mb-4">
                      &ldquo;
                    </div>

                    <p className="text-lg sm:text-xl text-ivory-soft/80 leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>

                    <div>
                      <p className="text-base font-semibold text-ivory">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-ivory-soft/40 mt-1">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {displayTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? 'bg-gold w-6'
                    : 'bg-ivory/15 hover:bg-ivory/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
