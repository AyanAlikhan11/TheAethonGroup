'use client'

import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import TrustSection from '@/components/sections/TrustSection'
import MetricsSection from '@/components/sections/MetricsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyAethonSection from '@/components/sections/WhyAethonSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InsightsSection from '@/components/sections/InsightsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import ContactModal from '@/components/sections/ContactModal'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'THE AETHON GROUP',
  description:
    'THE AETHON GROUP helps ambitious brands scale through strategy, AI systems, media buying, creative execution, and precision growth operations.',
  url: 'https://aethongroup.com',
  logo: 'https://aethongroup.com/aethon-logo.png',
  slogan: 'Growth, Engineered.',
  sameAs: [
    'https://linkedin.com/company/aethongroup',
    'https://twitter.com/aethongroup',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@aethongroup.com',
    contactType: 'sales',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Growth Strategy',
    'Paid Media',
    'Funnel Systems',
    'AI Automation',
    'Analytics Intelligence',
    'Conversion Optimization',
    'Brand Positioning',
    'Creative Systems',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <TrustSection />
        <MetricsSection />
        <ServicesSection />
        <WhyAethonSection />
        <CaseStudiesSection />
        <InsightsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
        <ContactModal />
      </main>
    </>
  )
}
