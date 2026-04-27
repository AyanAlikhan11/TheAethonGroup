'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface CaseStudyData {
  id: string
  title: string
  slug: string
  client: string
  industry: string | null
  challenge: string
  solution: string
  results: string
  metrics: string | null
  featured: boolean
}

const fallbackCaseStudies = [
  {
    id: '1',
    industry: 'D2C Fashion',
    client: 'Premium Fashion Brand',
    metric: 'From ₹2L to ₹48L',
    metricLabel: 'Monthly Revenue',
    stat: '8.2x ROAS',
    description:
      'Transformed a struggling D2C fashion brand into a high-growth engine through systematic paid media scaling, funnel optimization, and creative systems.',
  },
  {
    id: '2',
    industry: 'SaaS',
    client: 'B2B SaaS Platform',
    metric: '340% MRR Growth',
    metricLabel: 'In 6 Months',
    stat: '12x CAC Improvement',
    description:
      'Engineered a complete growth system for a SaaS platform — from lead generation to conversion optimization — resulting in exponential MRR growth.',
  },
  {
    id: '3',
    industry: 'Wellness',
    client: 'Premium Wellness Brand',
    metric: '₹1.2Cr Revenue',
    metricLabel: 'In 90 Days',
    stat: '5.6x ROAS',
    description:
      'Launched and scaled a premium wellness brand from zero to ₹1.2Cr in 90 days with precision media buying and AI-optimized creative systems.',
  },
]

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [caseStudies, setCaseStudies] = useState<CaseStudyData[]>([])

  useEffect(() => {
    fetch('/api/case-studies')
      .then((res) => res.json())
      .then((data) => {
        if (data.caseStudies && data.caseStudies.length > 0) {
          setCaseStudies(data.caseStudies)
        }
      })
      .catch(() => {
        // Use fallback
      })
  }, [])

  const displayStudies = caseStudies.length > 0
    ? caseStudies.map((cs) => {
        // Parse metrics string to extract key stat
        const metricParts = cs.metrics?.split(' | ') || []
        const firstMetric = metricParts[0] || 'Significant Growth'
        const secondMetric = metricParts[1] || ''
        return {
          id: cs.id,
          industry: cs.industry || 'General',
          client: cs.client,
          metric: firstMetric,
          metricLabel: cs.results.split('.')[0] || 'Key Result',
          stat: secondMetric || firstMetric,
          description: cs.challenge.length > 120 ? cs.challenge.substring(0, 120) + '...' : cs.challenge,
        }
      })
    : fallbackCaseStudies

  return (
    <section id="case-studies" ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
            Growth,{' '}
            <span className="text-gold-gradient">Proven.</span>
          </h2>
          <p className="mt-6 text-ivory-soft/50 max-w-2xl mx-auto text-base sm:text-lg">
            Real results from real partnerships. Here&apos;s what compounding growth looks like.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden premium-card group cursor-pointer"
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-violet" />

              <div className="p-6 sm:p-8">
                {/* Industry tag */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-violet/10 text-violet-light rounded-full border border-violet/20 mb-4">
                  {study.industry}
                </span>

                {/* Client type */}
                <p className="text-sm text-ivory-soft/40 mb-4">{study.client}</p>

                {/* Key Metric */}
                <div className="mb-4">
                  <p className="text-2xl sm:text-3xl font-bold text-gold">
                    {study.metric}
                  </p>
                  <p className="text-sm text-ivory-soft/50">{study.metricLabel}</p>
                </div>

                {/* Stat badge */}
                {study.stat && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold/5 border border-gold/10 mb-4">
                    <span className="text-sm font-semibold text-gold-light">
                      {study.stat}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-ivory-soft/40 leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light transition-colors duration-300">
                  View Case Study
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
