import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import HowItWorksSection from "@/components/how-it-works-section"
import ComingSoonSection from "@/components/coming-soon-section"
import InfluencersSection from "@/components/influencers-section"
import CTASection from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <ComingSoonSection />
      <InfluencersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
