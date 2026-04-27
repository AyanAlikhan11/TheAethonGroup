'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string | null
  coverImage: string | null
  createdAt: string
}

const gradients = [
  'from-gold/20 via-violet/10 to-matte-black-lighter',
  'from-violet/20 via-gold/10 to-matte-black-lighter',
  'from-gold/10 via-violet/15 to-matte-black-lighter',
]

const fallbackInsights = [
  {
    id: '1',
    title: 'The Compound Growth Framework',
    slug: 'compound-growth-framework',
    category: 'Strategy',
    excerpt:
      'How to build growth systems that compound month over month — instead of campaigns that plateau after week two.',
    gradient: gradients[0],
  },
  {
    id: '2',
    title: 'AI-Powered Media Buying in 2025',
    slug: 'ai-media-buying-2025',
    category: 'AI & Automation',
    excerpt:
      'The new playbook for using AI to optimize bids, creative, and audience targeting at scale — with real results.',
    gradient: gradients[1],
  },
  {
    id: '3',
    title: 'Building Conversion Systems That Scale',
    slug: 'conversion-systems-scale',
    category: 'Funnel Systems',
    excerpt:
      'Why most funnels break at scale and how to engineer conversion systems that maintain efficiency as you grow.',
    gradient: gradients[2],
  },
]

export default function InsightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [blogs, setBlogs] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch('/api/blogs?limit=3')
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs && data.blogs.length > 0) {
          setBlogs(data.blogs)
        }
      })
      .catch(() => {
        // Use fallback
      })
  }, [])

  const displayInsights = blogs.length > 0
    ? blogs.map((blog, i) => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        category: blog.category || 'Strategy',
        excerpt: blog.excerpt || '',
        gradient: gradients[i % gradients.length],
      }))
    : fallbackInsights

  return (
    <section id="insights" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory">
            Growth{' '}
            <span className="text-gold-gradient">Intelligence</span>
          </h2>
          <p className="mt-6 text-ivory-soft/50 max-w-2xl mx-auto text-base sm:text-lg">
            Strategic insights and frameworks from the frontlines of growth engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {displayInsights.map((insight, i) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden premium-card group cursor-pointer"
            >
              {/* Cover image placeholder */}
              <div
                className={`h-40 sm:h-48 bg-gradient-to-br ${insight.gradient} relative`}
              >
                <div className="absolute inset-0 bg-matte-black/20" />
                <div className="absolute bottom-4 left-4">
                  <Badge
                    variant="outline"
                    className="bg-matte-black/60 text-ivory-soft/70 border-ivory/10 text-xs backdrop-blur-sm"
                  >
                    {insight.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-ivory group-hover:text-gold-light transition-colors duration-300 mb-3 leading-snug">
                  {insight.title}
                </h3>
                <p className="text-sm text-ivory-soft/40 leading-relaxed mb-4">
                  {insight.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-light transition-colors duration-300">
                  Read More
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors duration-300 cursor-pointer">
            View All Insights
            <ArrowUpRight className="size-4" />
          </button>
        </motion.div>
      </div>

      <div className="section-divider mt-16 sm:mt-20" />
    </section>
  )
}
