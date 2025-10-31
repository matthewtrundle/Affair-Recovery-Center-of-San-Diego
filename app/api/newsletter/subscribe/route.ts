import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, source = 'website', honeypot } = body

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      return NextResponse.json({
        success: false,
        error: 'Invalid submission',
      }, { status: 400 })
    }

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json({
        success: false,
        error: 'Please provide a valid email address',
      }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Check if subscriber already exists
    const existing = await payload.find({
      collection: 'subscribers',
      where: {
        email: { equals: email.toLowerCase() },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      const subscriber = existing.docs[0]

      // If they were unsubscribed, reactivate them
      if (subscriber.status === 'unsubscribed') {
        await payload.update({
          collection: 'subscribers',
          id: subscriber.id,
          data: {
            status: 'active',
            firstName: firstName || subscriber.firstName,
          },
        })

        return NextResponse.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
          reactivated: true,
        })
      }

      return NextResponse.json({
        success: true,
        message: 'You\'re already subscribed! Check your inbox for our latest updates.',
        alreadySubscribed: true,
      })
    }

    // Create new subscriber
    // The Subscribers collection hook will automatically sync to Resend
    const subscriber = await payload.create({
      collection: 'subscribers',
      data: {
        email: email.toLowerCase(),
        firstName,
        status: 'active',
        source,
        tags: ['newsletter'],
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Welcome to our community! Check your email for a confirmation.',
      subscriber: {
        id: subscriber.id,
        email: subscriber.email,
      },
    })
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)

    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to subscribe. Please try again.',
    }, { status: 500 })
  }
}
