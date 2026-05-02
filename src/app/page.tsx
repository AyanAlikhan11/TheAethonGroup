// 'use client'

// import { useEffect, useState } from 'react'
// import SplashScreen from '@/components/SplashScreen'
// import Navbar from '@/components/sections/Navbar'
// import HeroSection from '@/components/sections/HeroSection'
// import MarqueeSection from '@/components/sections/MarqueeSection'
// import TrustSection from '@/components/sections/TrustSection'
// import MetricsSection from '@/components/sections/MetricsSection'
// import ServicesSection from '@/components/sections/ServicesSection'
// import WhyAethonSection from '@/components/sections/WhyAethonSection'
// import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
// import TestimonialsSection from '@/components/sections/TestimonialsSection'
// import InsightsSection from '@/components/sections/InsightsSection'
// import CTASection from '@/components/sections/CTASection'
// import Footer from '@/components/sections/Footer'
// import ContactModal from '@/components/sections/ContactModal'

// const jsonLd = {
//   '@context': 'https://schema.org',
//   '@type': 'Organization',
//   name: 'THE AETHON GRID',
//   description:
//     'THE AETHON GRID helps ambitious brands scale through strategy, AI systems, media buying, creative execution, and precision growth operations.',
//   url: 'https://theaethongrid.com',
//   logo: 'https://theaethongrid.com/aethon-logo.png',
//   slogan: 'Growth, Engineered.',
//   sameAs: [
//     'https://linkedin.com/company/theaethongrid',
//     'https://twitter.com/theaethongrid',
//   ],
//   contactPoint: {
//     '@type': 'ContactPoint',
//     email: 'theaethongrid@gmail.com',
//     contactType: 'sales',
//   },
//   areaServed: 'Worldwide',
//   serviceType: [
//     'Growth Strategy',
//     'Paid Media',
//     'Funnel Systems',
//     'AI Automation',
//     'Analytics Intelligence',
//     'Conversion Optimization',
//     'Brand Positioning',
//     'Creative Systems',
//   ],
// }

// export default function Home() {

//    const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 2500) // 2.5 seconds splash

//     return () => clearTimeout(timer)
//   }, [])

//   if (loading) {
//     return <SplashScreen />
//   }
//   return (
//     <>
      // <script
      //   type="application/ld+json"
      //   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      // />
//       <main className="min-h-screen flex flex-col bg-white">
//         <Navbar />
//         <HeroSection />
//         <MarqueeSection />
//         <TrustSection />
//         <MetricsSection />
//         <ServicesSection />
//         <WhyAethonSection />
//         <CaseStudiesSection />
//         <InsightsSection />
//         <TestimonialsSection />
//         <CTASection />
//         <Footer />
//         <ContactModal />
//       </main>
//     </>
//   )
// }



'use client'

import { useEffect, useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import TrustSection from '@/components/sections/TrustSection'
import MetricsSection from '@/components/sections/MetricsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyAethonSection from '@/components/sections/WhyAethonSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FounderSection from '@/components/sections/FounderSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InsightsSection from '@/components/sections/InsightsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import ContactModal from '@/components/sections/ContactModal'


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'THE AETHON GRID',
  description:
    'THE AETHON GRID helps ambitious brands scale through strategy, AI systems, media buying, creative execution, and precision growth operations.',
  url: 'https://theaethongrid.com',
  logo: 'https://theaethongrid.com/aethon-logo.png',
  slogan: 'Growth, Engineered.',
  sameAs: [
    'https://linkedin.com/company/theaethongrid',
    'https://twitter.com/theaethongrid',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'theaethongrid@gmail.com',
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
  const [hydrated, setHydrated] = useState(false)
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    // mark client mounted
    setHydrated(true)

    // defer storage read until after mount cycle
    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem('aethonSplash')
      if (!seen) {
        setShowSplash(true)
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  const handleComplete = () => {
    sessionStorage.setItem('aethonSplash', 'true')
    setShowSplash(false)
  }

  // Prevent hydration mismatch
  if (!hydrated) return null

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {showSplash && (
        <SplashScreen onComplete={handleComplete} />
      )}

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
        <FounderSection/>
        <TestimonialsSection />
        <CTASection />
        <Footer />
        <ContactModal />
      </main>
    </>
  )
}