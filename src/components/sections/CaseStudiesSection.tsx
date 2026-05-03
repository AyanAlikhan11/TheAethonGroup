'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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
    slug: 'premium-fashion-brand',
    industry: 'D2C Fashion',
    client: 'Premium Fashion Brand',
    metric: 'From ₹2L to ₹12L',
    metricLabel: 'Monthly Revenue',
    stat: '6x ROAS',
    description:
      'Transformed a struggling D2C fashion brand into a high-growth engine through systematic paid media scaling, funnel optimization, and creative systems.',
    color: 'bg-aethon-gold',
  },
  {
  id: '2',
  slug: 'kolkata-cafe-growth',
  industry: 'Restaurant / Cafe',
  client: 'Kolkata Cafe Brand',
  metric: '₹7K/day to ₹20K/day',
  metricLabel: 'Avg Daily Sales in 90 Days',
  stat: '185% Revenue Growth',
  description:
    'Scaled a newly launched Kolkata cafe in a hyper-competitive market through data-backed organic content systems, customer-driven offers, and retention-focused growth strategy — generating 100K+ daily reach and consistent repeat customers without paid promotions.',
  color: 'bg-aethon-blue',
},
  {
  id: '3',
  slug: 'sparkle-launderette-operations-growth',
  industry: 'Laundry / Operations',
  client: 'Launderette',
  metric: '35% Cost Reduction',
  metricLabel: 'In 90 Days',
  stat: '2.4x Operational Efficiency',
  description:
    'Optimized Sparkle Launderette through leakage detection, workflow restructuring, and data-driven operational strategy systems. Identified hidden revenue losses, improved process efficiency, and built scalable operations for sustainable growth.',
  color: 'bg-aethon-pink',
},
]

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [caseStudies, setCaseStudies] = useState<CaseStudyData[]>([])

  // useEffect(() => {
  //   fetch('')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.caseStudies && data.caseStudies.length > 0) {
  //         setCaseStudies(data.caseStudies)
  //       }
  //     })
  //     .catch(() => {})
  // }, [])

  const colorClasses = ['bg-aethon-gold', 'bg-aethon-blue', 'bg-aethon-pink']
  const colorTextClasses = [
    'text-aethon-gold',
    'text-aethon-blue',
    'text-aethon-pink',
  ]
  const colorBgLightClasses = [
    'bg-aethon-gold/10',
    'bg-aethon-blue/10',
    'bg-aethon-pink/10',
  ]

  const displayStudies =
    caseStudies.length > 0
      ? caseStudies.map((cs, idx) => {
          const metricParts = cs.metrics?.split(' | ') || []
          const firstMetric = metricParts[0] || 'Significant Growth'
          const secondMetric = metricParts[1] || ''

          return {
            id: cs.id,
            slug: cs.slug,
            industry: cs.industry || 'General',
            client: cs.client,
            metric: firstMetric,
            metricLabel: cs.results.split('.')[0] || 'Key Result',
            stat: secondMetric || firstMetric,
            description:
              cs.challenge.length > 120
                ? cs.challenge.substring(0, 120) + '...'
                : cs.challenge,
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
    <section
      id="case-studies"
      ref={ref}
      className="relative py-10 sm:py-15 bg-white"
    >
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
            Real results from real partnerships. Here&apos;s what compounding
            growth looks like.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayStudies.map((study, i) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              prefetch={true}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-aethon-gray-dark/30 card-hover group cursor-pointer h-full transition-all duration-300"
              >
                {/* Colored top strip */}
                <div className={`h-2 ${study.color}`} />

                <div className="p-6 sm:p-8">
                  {/* Industry tag */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium ${study.colorBgLight} ${study.colorText} rounded-full mb-4`}
                  >
                    {study.industry}
                  </span>

                  {/* Client */}
                  <p className="text-sm text-aethon-text-muted mb-4">
                    {study.client}
                  </p>

                  {/* Metric */}
                  <div className="mb-4">
                    <p
                      className={`text-2xl sm:text-3xl font-bold ${study.colorText}`}
                    >
                      {study.metric}
                    </p>
                    <p className="text-sm text-aethon-text-secondary">
                      {study.metricLabel}
                    </p>
                  </div>

                  {/* Stat */}
                  {study.stat && (
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${study.colorBgLight} mb-4`}
                    >
                      <span
                        className={`text-sm font-semibold ${study.colorText}`}
                      >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}