import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
    // Seed Blogs
    const blogs = await Promise.all([
      db.blog.create({
        data: {
          title: 'The AI-Powered Growth Flywheel: How Smart Brands Are Winning in 2024',
          slug: 'ai-powered-growth-flywheel-2024',
          excerpt: 'Discover how leading brands are leveraging AI to create self-reinforcing growth loops that compound over time.',
          content: `The landscape of digital growth is undergoing a fundamental shift. Brands that once relied on linear marketing funnels are now building AI-powered growth flywheels that accelerate with every interaction.

## What is an AI-Powered Growth Flywheel?

Unlike traditional funnels that leak customers at every stage, a growth flywheel uses AI to create compounding momentum. Each customer interaction feeds data back into the system, enabling smarter acquisition, deeper engagement, and higher retention.

## The Three Pillars

### 1. Intelligent Acquisition
AI analyzes patterns across millions of data points to identify your highest-value prospects before they even enter your funnel. Predictive models score leads in real-time, ensuring your sales team focuses on conversions that matter.

### 2. Personalized Engagement
Dynamic content engines tailor every touchpoint based on individual behavior, preferences, and purchase intent. This isn't segmentation—this is 1:1 personalization at scale.

### 3. Predictive Retention
Machine learning models detect churn signals weeks before customers leave, triggering automated retention workflows that have saved brands millions in recurring revenue.

## The Results Speak for Themselves

Brands implementing AI flywheels report:
- 3.2x improvement in customer acquisition cost
- 47% increase in lifetime value
- 68% reduction in churn rate

The question isn't whether to build an AI flywheel—it's how fast you can start.`,
          category: 'AI & Automation',
          author: 'THE AETHON GROUP',
          published: true,
          metaTitle: 'AI-Powered Growth Flywheel 2024 | THE AETHON GROUP',
          metaDesc: 'Learn how AI-powered growth flywheels are transforming digital marketing and driving compounding results for smart brands.',
        },
      }),
      db.blog.create({
        data: {
          title: 'From Clicks to Conversions: Building Funnels That Actually Convert',
          slug: 'building-funnels-that-convert',
          excerpt: 'Most funnels leak revenue at every stage. Here\'s how to build conversion systems that turn clicks into customers.',
          content: `Every business has a funnel. Most of them are broken. They attract traffic but fail to convert. They generate leads but can't close. They acquire customers but can't retain them.

## The Conversion Gap

The average website converts at 2.35%. The top 25% convert at 5.31% or higher. That gap represents millions in unrealized revenue.

## Why Most Funnels Fail

### 1. Misaligned Messaging
Your ads promise one thing, your landing page delivers another, and your onboarding reveals something entirely different. Consistency is the foundation of conversion.

### 2. Friction at Every Step
Every unnecessary form field, every slow-loading page, every confusing CTA is a leak in your funnel. The best funnels remove friction ruthlessly.

### 3. No Progressive Engagement
Treating every visitor the same regardless of their intent or readiness is a recipe for poor conversion. Smart funnels adapt.

## The AETHON Framework

We've developed a systematic approach to building high-converting funnels:

**Stage 1: Intent Mapping** — Understand exactly what your prospects want at each stage of their journey.

**Stage 2: Friction Elimination** — Remove every obstacle between intent and action.

**Stage 3: Progressive Profiling** — Ask for information gradually, building trust while gathering data.

**Stage 4: Automated Nurture** — Deploy AI-driven sequences that respond to behavior in real-time.

**Stage 5: Conversion Optimization** — Continuously test, measure, and improve every touchpoint.

## Results

Our funnel optimization framework has delivered:
- 340% improvement in lead-to-customer conversion
- 52% reduction in cost per acquisition
- 4.1x return on ad spend improvement

Stop accepting mediocre conversion rates. Your funnel should be your strongest growth asset.`,
          category: 'Conversion Optimization',
          author: 'THE AETHON GROUP',
          published: true,
          metaTitle: 'High-Converting Funnel Strategy | THE AETHON GROUP',
          metaDesc: 'Learn how to build marketing funnels that actually convert, with proven frameworks for reducing friction and driving revenue.',
        },
      }),
      db.blog.create({
        data: {
          title: 'The ₹12Cr Question: How to Measure What Actually Matters in Growth',
          slug: 'measuring-what-matters-in-growth',
          excerpt: 'Vanity metrics are killing your growth strategy. Here\'s how to identify and measure the metrics that drive real business outcomes.',
          content: `Every growth team tracks dozens of metrics. Most of them don't matter.

The difference between companies that scale and those that stall often comes down to one thing: knowing which numbers to optimize.

## The Vanity Trap

Page views, social followers, email subscribers—these are vanity metrics. They look impressive in reports but don't correlate with revenue growth.

## The Metrics That Matter

### North Star Metric
This single metric captures the core value your product delivers to customers. For Facebook, it was daily active users. For Airbnb, it was nights booked. What's yours?

### Input Metrics
These are the leading indicators that predict your North Star. They're the levers your team can actually pull:
- Activation rate
- Engagement depth
- Referral rate
- Expansion revenue

### Counter Metrics
Every metric has a shadow. If you optimize for growth, watch churn. If you optimize for conversion, watch quality. Counter metrics prevent you from winning one battle while losing the war.

## The AETHON Measurement Framework

We help companies build measurement systems that drive decisions, not just reports:

1. **Define** your North Star and input metrics
2. **Instrument** tracking across every touchpoint
3. **Visualize** data in real-time dashboards
4. **Automate** alerts for metric movement
5. **Optimize** through rapid experimentation

## Real Impact

After implementing our measurement framework, one D2C brand discovered that 23% of their marketing spend was driving 78% of their revenue. They reallocated budget and grew 4.2x in six months.

Stop measuring everything. Start measuring what matters.`,
          category: 'Analytics & Intelligence',
          author: 'THE AETHON GROUP',
          published: true,
          metaTitle: 'Growth Metrics That Matter | THE AETHON GROUP',
          metaDesc: 'Stop tracking vanity metrics. Learn how to identify and measure the growth metrics that actually drive business outcomes.',
        },
      }),
    ])

    // Seed Case Studies
    const caseStudies = await Promise.all([
      db.caseStudy.create({
        data: {
          title: 'Scaling a D2C Fashion Brand from ₹2Cr to ₹18Cr ARR',
          slug: 'd2c-fashion-brand-scaling',
          client: 'A premium D2C fashion brand',
          industry: 'Fashion & Lifestyle',
          challenge: 'A fast-growing D2C fashion brand was struggling to scale beyond ₹2Cr ARR despite strong product-market fit. Their customer acquisition cost was rising, retention was declining, and they lacked the data infrastructure to make informed growth decisions.',
          solution: 'We implemented a comprehensive growth system: AI-powered audience segmentation for precise targeting, a multi-touch attribution model to optimize channel mix, automated email and SMS sequences triggered by behavioral signals, and a loyalty program designed around their highest-value customer segments.',
          results: 'Within 12 months, the brand achieved ₹18Cr ARR—a 9x increase. Customer acquisition cost dropped by 62%, while lifetime value increased by 3.4x. The loyalty program now drives 41% of monthly recurring revenue.',
          metrics: '9x ARR Growth | 62% Lower CAC | 3.4x Higher LTV | 41% Revenue from Loyalty',
          featured: true,
          published: true,
          metaTitle: 'D2C Fashion Brand 9x Growth Case Study | THE AETHON GROUP',
          metaDesc: 'How we helped a D2C fashion brand scale from ₹2Cr to ₹18Cr ARR with AI-powered growth systems.',
        },
      }),
      db.caseStudy.create({
        data: {
          title: 'SaaS Platform: Reducing Churn by 68% with Predictive Analytics',
          slug: 'saas-churn-reduction-predictive-analytics',
          client: 'A B2B SaaS platform',
          industry: 'Technology & SaaS',
          challenge: 'A B2B SaaS platform was losing ₹1.2Cr annually to churn. Despite having a strong product, they couldn\'t identify at-risk customers early enough to intervene. Their reactive support model meant they only engaged with customers who had already decided to leave.',
          solution: 'We built a predictive churn model using machine learning that analyzed 47 behavioral signals to identify at-risk accounts 30+ days before cancellation. This triggered automated intervention workflows personalized to each customer\'s usage patterns and pain points. We also redesigned their onboarding sequence to improve time-to-value.',
          results: 'Churn dropped by 68% within 6 months. Net revenue retention improved from 87% to 114%. The predictive model achieved 89% accuracy, and automated interventions saved 73% of flagged accounts.',
          metrics: '68% Churn Reduction | 114% NRR | 89% Model Accuracy | 73% Save Rate',
          featured: true,
          published: true,
          metaTitle: 'SaaS Churn Reduction Case Study | THE AETHON GROUP',
          metaDesc: 'How predictive analytics reduced churn by 68% for a B2B SaaS platform, improving net revenue retention to 114%.',
        },
      }),
      db.caseStudy.create({
        data: {
          title: 'Wellness Brand: Building a ₹5Cr Monthly Revenue Engine',
          slug: 'wellness-brand-revenue-engine',
          client: 'A premium wellness brand',
          industry: 'Health & Wellness',
          challenge: 'A premium wellness brand with strong organic reach was struggling to convert their audience into paying customers. Their social media following was impressive but revenue was stagnant at ₹40L/month. They needed systems, not more content.',
          solution: 'We rebuilt their entire revenue infrastructure: a conversion-optimized website with dynamic personalization, a tiered email automation system with 23 unique journeys, a paid media strategy optimized by AI-driven creative testing, and a referral program that turned customers into advocates.',
          results: 'Monthly revenue grew from ₹40L to ₹5Cr in 10 months—a 12.5x increase. Email revenue now accounts for 34% of total sales. Their referral program drives 22% of new customer acquisition at near-zero cost.',
          metrics: '12.5x Revenue Growth | 34% Email Revenue | 22% Referral Acquisition | 4.8x ROAS',
          featured: true,
          published: true,
          metaTitle: 'Wellness Brand Revenue Growth Case Study | THE AETHON GROUP',
          metaDesc: 'How we built a ₹5Cr monthly revenue engine for a wellness brand, achieving 12.5x growth in 10 months.',
        },
      }),
    ])

    // Seed Testimonials
    const testimonials = await Promise.all([
      db.testimonial.create({
        data: {
          name: 'Priya Sharma',
          role: 'CEO & Founder',
          company: 'StyleVerse',
          content: 'AETHON didn\'t just help us grow—they fundamentally transformed how we think about growth. The systems they built are still compounding returns 18 months later. Our ARR grew 9x, and we\'re just getting started.',
          rating: 5,
          featured: true,
          published: true,
        },
      }),
      db.testimonial.create({
        data: {
          name: 'Arjun Mehta',
          role: 'VP of Growth',
          company: 'CloudSync Technologies',
          content: 'The predictive churn model alone was worth 10x our investment. We went from reactively losing customers to proactively saving them. 68% churn reduction is not a small number—it\'s the difference between surviving and thriving.',
          rating: 5,
          featured: true,
          published: true,
        },
      }),
      db.testimonial.create({
        data: {
          name: 'Nisha Patel',
          role: 'Co-Founder',
          company: 'AyurWell',
          content: 'Before AETHON, we had followers but no revenue engine. They built us a system that turns attention into customers and customers into advocates. ₹5Cr/month felt impossible 10 months ago. Now it feels like the beginning.',
          rating: 5,
          featured: true,
          published: true,
        },
      }),
      db.testimonial.create({
        data: {
          name: 'Rahul Desai',
          role: 'Chief Marketing Officer',
          company: 'FinEdge Capital',
          content: 'What sets AETHON apart is their obsession with measurement. They didn\'t just run campaigns—they built us a decision engine. Every marketing rupee is now tracked, attributed, and optimized in real-time.',
          rating: 5,
          featured: false,
          published: true,
        },
      }),
      db.testimonial.create({
        data: {
          name: 'Kavitha Reddy',
          role: 'Head of Digital',
          company: 'NovaTaste Foods',
          content: 'The AI automation systems AETHON implemented saved our team 30+ hours per week while improving results. It\'s like having a growth team that never sleeps. Our cost per acquisition dropped 45% in the first quarter.',
          rating: 5,
          featured: false,
          published: true,
        },
      }),
      db.testimonial.create({
        data: {
          name: 'Vikram Singh',
          role: 'Founder',
          company: 'TechPulse Labs',
          content: 'We were skeptical about paying premium rates for consulting. Within 90 days, AETHON had generated 4x ROI. Within 6 months, it was 12x. They don\'t just advise—they build systems that compound returns indefinitely.',
          rating: 5,
          featured: true,
          published: true,
        },
      }),
    ])

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      data: {
        blogs: blogs.length,
        caseStudies: caseStudies.length,
        testimonials: testimonials.length,
      },
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}
