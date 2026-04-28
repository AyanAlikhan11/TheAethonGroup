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

    const [caseStudies, total] = await Promise.all([
      db.caseStudy.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      db.caseStudy.count({ where }),
    ])

    return NextResponse.json({ caseStudies, total })
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch case studies' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, client, challenge, solution, results, industry, metrics, coverImage, published, featured, metaTitle, metaDesc } = body

    if (!title || !slug || !client || !challenge || !solution || !results) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, client, challenge, solution, and results are required' },
        { status: 400 }
      )
    }

    const existing = await db.caseStudy.findUnique({ where: { slug } })
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A case study with this slug already exists' },
        { status: 400 }
      )
    }

    const caseStudy = await db.caseStudy.create({
      data: {
        title,
        slug,
        client,
        challenge,
        solution,
        results,
        industry: industry || null,
        metrics: metrics || null,
        coverImage: coverImage || null,
        published: published ?? false,
        featured: featured ?? false,
        metaTitle: metaTitle || null,
        metaDesc: metaDesc || null,
      },
    })

    return NextResponse.json({ success: true, caseStudy }, { status: 201 })
  } catch (error) {
    console.error('Error creating case study:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create case study' },
      { status: 500 }
    )
  }
}
