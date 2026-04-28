import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '10', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)
    const all = searchParams.get('all') === 'true'

    const where: Record<string, unknown> = {}

    if (!all) {
      where.published = true
    }

    if (category) {
      where.category = category
    }

    const [blogs, total] = await Promise.all([
      db.blog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      db.blog.count({ where }),
    ])

    return NextResponse.json({ blogs, total })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, content, excerpt, category, author, coverImage, published, metaTitle, metaDesc } = body

    if (!title || !slug || !content) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, and content are required' },
        { status: 400 }
      )
    }

    const existing = await db.blog.findUnique({ where: { slug } })
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A blog with this slug already exists' },
        { status: 400 }
      )
    }

    const blog = await db.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        category: category || null,
        author: author || 'THE AETHON GROUP',
        coverImage: coverImage || null,
        published: published ?? false,
        metaTitle: metaTitle || null,
        metaDesc: metaDesc || null,
      },
    })

    return NextResponse.json({ success: true, blog }, { status: 201 })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create blog' },
      { status: 500 }
    )
  }
}
