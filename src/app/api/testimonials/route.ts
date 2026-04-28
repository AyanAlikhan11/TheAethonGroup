import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const limit = parseInt(searchParams.get('limit') || '10', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)
    const all = searchParams.get('all') === 'true'

    const where: Record<string, unknown> = {}

    if (!all) {
      where.published = true
    }

    if (featured === 'true') {
      where.featured = true
    }

    const [testimonials, total] = await Promise.all([
      db.testimonial.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      db.testimonial.count({ where }),
    ])

    return NextResponse.json({ testimonials, total })
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, role, company, content, avatar, rating, featured, published } = body

    if (!name || !role || !company || !content) {
      return NextResponse.json(
        { success: false, error: 'Name, role, company, and content are required' },
        { status: 400 }
      )
    }

    const testimonial = await db.testimonial.create({
      data: {
        name,
        role,
        company,
        content,
        avatar: avatar || null,
        rating: rating ?? 5,
        featured: featured ?? false,
        published: published ?? true,
      },
    })

    return NextResponse.json({ success: true, testimonial }, { status: 201 })
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create testimonial' },
      { status: 500 }
    )
  }
}
