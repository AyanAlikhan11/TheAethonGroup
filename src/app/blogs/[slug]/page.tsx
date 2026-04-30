// src/app/blogs/[slug]/page.tsx

import { notFound } from 'next/navigation'

const blogPosts = [
  {
    slug: 'compound-growth-framework',
    title: 'The Compound Growth Framework',
    category: 'Strategy',
    date: 'April 30, 2026',
    content: `
      Growth does not come from random campaigns.
      It comes from systems that improve every month.

      The Compound Growth Framework focuses on:

      • Better acquisition
      • Higher conversion rates
      • Improved retention
      • Increased customer value
      • Smarter reinvestment

      Small improvements in each area create massive long-term gains.
    `,
  },
  {
    slug: 'ai-media-buying-2025',
    title: 'AI-Powered Media Buying in 2025',
    category: 'AI & Automation',
    date: 'April 30, 2026',
    content: `
      AI is changing media buying forever.

      Winning brands now use AI for:

      • Bid optimization
      • Audience expansion
      • Creative testing
      • ROAS forecasting
      • Automated scaling
    `,
  },
  {
    slug: 'conversion-systems-scale',
    title: 'Building Conversion Systems That Scale',
    category: 'Funnels',
    date: 'April 30, 2026',
    content: `
      Most funnels collapse when traffic scales.

      Scalable systems require:

      • Fast landing pages
      • Clear offers
      • Trust signals
      • Strong upsells
      • Constant testing
    `,
  },
]

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-aethon-gold font-semibold mb-3">
          {post.category}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-aethon-text mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="text-aethon-text-secondary mb-10">
          {post.date}
        </p>

        <div className="h-[2px] w-full bg-gradient-to-r from-aethon-gold to-transparent mb-10" />

        <article className="prose prose-lg max-w-none text-aethon-text-secondary whitespace-pre-line leading-8">
          {post.content}
        </article>
      </div>
    </main>
  )
}