import { Button } from "@/components/ui/button"
import { Shield, Users, BookOpen, Target, Heart, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Finally Quit",
    description: "Break free from pornography addiction with proven strategies and biblical principles.",
    cta: "Learn More",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with like-minded believers in a safe, judgment-free accountability environment.",
    cta: "Join Now",
  },
  {
    icon: BookOpen,
    title: "Biblical Resources",
    description: "Access curated scripture, devotionals, and Christian content for spiritual growth.",
    cta: "Explore",
  },
  {
    icon: Target,
    title: "Track Progress",
    description: "Monitor your journey with detailed analytics and milestone celebrations.",
    cta: "Start Tracking",
  },
  {
    icon: Heart,
    title: "24/7 Support",
    description: "Get help anytime with our crisis support system and prayer requests.",
    cta: "Get Help",
  },
  {
    icon: Zap,
    title: "Instant Accountability",
    description: "Real-time check-ins and accountability partner matching for immediate support.",
    cta: "Connect",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Break Free</h2>
          <p className="text-xl text-gray-600">
            Comprehensive tools and support for your journey to freedom from pornography addiction.
          </p>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0">
                {feature.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
