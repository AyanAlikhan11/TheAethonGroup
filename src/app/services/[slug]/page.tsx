import { services } from '@/data/services'
import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = services.find((s) => s.slug === slug)

  if (!service) return notFound()

  const Icon = service.icon

  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <Icon />

          <div>
            <p className="text-sm text-gray-400 tracking-widest">
              {service.number}
            </p>
            <h1 className="text-4xl font-bold text-black">
              {service.title}
            </h1>
          </div>
        </div>

        <div className="text-gray-500 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
  {service.description}
</div>

      </div>
    </section>
  )
}