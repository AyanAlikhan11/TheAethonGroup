import { notFound } from 'next/navigation'

const caseStudies = [
  {
    slug: 'premium-fashion-brand',
    client: 'Premium Fashion Brand',
    industry: 'D2C Fashion',
    result: 'From ₹2L to ₹12L Monthly Revenue',
    description:
      'Transformed a struggling D2C fashion brand into a high-growth engine through systematic paid media scaling, funnel optimization, and creative systems.',
  },
  {
    slug: 'kolkata-cafe-growth',
    client: 'Kolkata Cafe Brand',
    industry: 'Restaurant / Cafe',
    result: '₹7K/day to ₹20K/day Avg Sales',
    description:
      'Scaled a newly launched Kolkata cafe in a hyper-competitive market through data-backed organic content systems, customer-driven offers, and retention-focused growth strategy — generating 100K+ daily reach and repeat customers without paid promotions.',
  },
  {
    slug: 'sparkle-launderette-operations-growth',
    client: 'Launderette',
    industry: 'Laundry / Operations',
    result: '35% Cost Reduction in 90 Days',
    description:
      'Optimized operations through leakage detection, workflow restructuring, and data-driven strategy systems. Identified hidden revenue losses, improved efficiency, and built scalable operations for sustainable growth.',
  },
]

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) return notFound()

  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-aethon-gold font-semibold mb-3 uppercase tracking-[0.2em]">
          {study.industry}
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
          {study.client}
        </h1>

        <p className="text-2xl font-semibold text-aethon-gold mb-8">
          {study.result}
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          {study.description}
        </p>
      </div>
    </section>
  )
}