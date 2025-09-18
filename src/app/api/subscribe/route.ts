import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 })
    }

    // Create table if it does not exist (PostgreSQL)
    await prisma.$executeRawUnsafe(
      `CREATE TABLE IF NOT EXISTS email_subscriptions (
        id BIGSERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )`
    )

    // Insert, ignore if already present
    await prisma.$executeRaw`INSERT INTO email_subscriptions (email) VALUES (${email}) ON CONFLICT (email) DO NOTHING`;

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Subscribe error', error)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}


