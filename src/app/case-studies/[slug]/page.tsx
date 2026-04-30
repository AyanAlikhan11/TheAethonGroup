import { notFound } from 'next/navigation'

const caseStudies = [
  {
    slug: 'premium-fashion-brand',
    client: 'Premium Fashion Brand',
    industry: 'D2C Fashion',
    result: 'From ₹2L to ₹48L Monthly Revenue',
    description:
      'We transformed a struggling D2C fashion brand through paid media scaling, funnel optimization, and creative systems.',
  },
  {
    slug: 'b2b-saas-platform',
    client: 'B2B SaaS Platform',
    industry: 'SaaS',
    result: '340% MRR Growth in 6 Months',
    description:
      'Built an end-to-end lead generation and conversion engine that accelerated growth.',
  },
  {
    slug: 'premium-wellness-brand',
    client: 'Premium Wellness Brand',
    industry: 'Wellness',
    result: '₹1.2Cr Revenue in 90 Days',
    description:
      'Launched and scaled from zero using precision media buying and AI creative systems.',
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