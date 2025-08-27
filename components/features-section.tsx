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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Everything You Need to <span className="gradient-text">Break Free</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools and support system designed specifically for Christians seeking freedom from pornography
            addiction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:glow-effect"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold font-display mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                {feature.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
