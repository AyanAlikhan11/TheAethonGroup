import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const caseStudy = await db.caseStudy.findUnique({ where: { slug } })

    if (!caseStudy) {
      return NextResponse.json(
        { success: false, error: 'Case study not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ caseStudy })
  } catch (error) {
    console.error('Error fetching case study:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch case study' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const body = await request.json()

    const existing = await db.caseStudy.findUnique({ where: { slug } })
    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Case study not found' },
        { status: 404 }
      )
    }

    const { title, client, challenge, solution, results, industry, metrics, coverImage, published, featured, metaTitle, metaDesc } = body

    const caseStudy = await db.caseStudy.update({
      where: { slug },
      data: {
        ...(title !== undefined && { title }),
        ...(client !== undefined && { client }),
        ...(challenge !== undefined && { challenge }),
        ...(solution !== undefined && { solution }),
        ...(results !== undefined && { results }),
        ...(industry !== undefined && { industry }),
        ...(metrics !== undefined && { metrics }),
        ...(coverImage !== undefined && { coverImage }),
        ...(published !== undefined && { published }),
        ...(featured !== undefined && { featured }),
        ...(metaTitle !== undefined && { metaTitle }),
        ...(metaDesc !== undefined && { metaDesc }),
      },
    })

    return NextResponse.json({ success: true, caseStudy })
  } catch (error) {
    console.error('Error updating case study:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update case study' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const existing = await db.caseStudy.findUnique({ where: { slug } })
    if (!existing) {
      return NextResponse.json(
        { success: false, error: 'Case study not found' },
        { status: 404 }
      )
    }

    await db.caseStudy.delete({ where: { slug } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting case study:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete case study' },
      { status: 500 }
    )
  }
}
