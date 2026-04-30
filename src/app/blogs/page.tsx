// src/app/blogs/page.tsx

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    slug: 'compound-growth-framework',
    title: 'The Compound Growth Framework',
    category: 'Strategy',
    excerpt:
      'How to build growth systems that compound month after month instead of plateauing after launch.',
    date: 'April 30, 2026',
  },
  {
    slug: 'ai-media-buying-2025',
    title: 'AI-Powered Media Buying in 2025',
    category: 'AI & Automation',
    excerpt:
      'How elite brands use AI for bidding, creative testing, targeting, and profitable scale.',
    date: 'April 30, 2026',
  },
  {
    slug: 'conversion-systems-scale',
    title: 'Building Conversion Systems That Scale',
    category: 'Funnels',
    excerpt:
      'Why most funnels break at scale and how to engineer systems that hold performance.',
    date: 'April 30, 2026',
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-aethon-gold font-semibold mb-3">
            AETHON Insights
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-aethon-text mb-4">
            Growth Intelligence
          </h1>

          <p className="max-w-2xl mx-auto text-aethon-text-secondary text-lg">
            Strategic insights, frameworks, and growth systems from the frontlines of scaling brands.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <p className="text-sm text-aethon-gold font-semibold mb-3">
                  {post.category}
                </p>

                <h2 className="text-2xl font-bold text-aethon-text mb-3 group-hover:text-aethon-gold transition-colors">
                  {post.title}
                </h2>

                <p className="text-aethon-text-secondary text-sm leading-7 mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>

                  <span className="inline-flex items-center gap-1 text-aethon-gold font-medium">
                    Read
                    <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}