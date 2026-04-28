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
    color: 'bg-aethon-gold',
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
    color: 'bg-aethon-blue',
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
    color: 'bg-aethon-pink',
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

  const colorClasses = ['bg-aethon-gold', 'bg-aethon-blue', 'bg-aethon-pink']
  const colorTextClasses = ['text-aethon-gold', 'text-aethon-blue', 'text-aethon-pink']
  const colorBgLightClasses = ['bg-aethon-gold/10', 'bg-aethon-blue/10', 'bg-aethon-pink/10']

  const displayStudies = caseStudies.length > 0
    ? caseStudies.map((cs, idx) => {
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
          color: colorClasses[idx % 3],
          colorText: colorTextClasses[idx % 3],
          colorBgLight: colorBgLightClasses[idx % 3],
        }
      })
    : fallbackCaseStudies.map((cs, idx) => ({
        ...cs,
        colorText: colorTextClasses[idx % 3],
        colorBgLight: colorBgLightClasses[idx % 3],
      }))

  return (
    <section id="case-studies" ref={ref} className="relative py-20 sm:py-28 bg-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-aethon-text">
            Growth,{' '}
            <span className="text-gold-gradient">Proven.</span>
          </h2>
          <p className="mt-6 text-aethon-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-aethon-gray-dark/30 card-hover group cursor-pointer"
            >
              {/* Colored top strip */}
              <div className={`h-2 ${study.color}`} />

              <div className="p-6 sm:p-8">
                {/* Industry tag */}
                <span className={`inline-block px-3 py-1 text-xs font-medium ${study.colorBgLight} ${study.colorText} rounded-full mb-4`}>
                  {study.industry}
                </span>

                {/* Client type */}
                <p className="text-sm text-aethon-text-muted mb-4">{study.client}</p>

                {/* Key Metric */}
                <div className="mb-4">
                  <p className={`text-2xl sm:text-3xl font-bold ${study.colorText}`}>
                    {study.metric}
                  </p>
                  <p className="text-sm text-aethon-text-secondary">{study.metricLabel}</p>
                </div>

                {/* Stat badge */}
                {study.stat && (
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${study.colorBgLight} mb-4`}>
                    <span className={`text-sm font-semibold ${study.colorText}`}>
                      {study.stat}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-aethon-text-secondary leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-aethon-gold group-hover:text-aethon-gold-dark transition-colors duration-300">
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
