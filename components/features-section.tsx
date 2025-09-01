import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Users, 
  BookOpen, 
  Target, 
  Heart, 
  Zap, 
  AlertTriangle, 
  BarChart3, 
  Bot, 
  Award, 
  Cross, 
  Eye,
  Timer,
  MessageCircle
} from "lucide-react"

const coreFeatures = [
  {
    icon: AlertTriangle,
    title: "Panic Button",
    description: "Instant emergency support to stop urges and regain control when you need it most.",
    cta: "Emergency Help",
    popular: true,
    category: "Crisis Support"
  },
  {
    icon: Eye,
    title: "Advanced Content Blocker",
    description: "AI-powered blocking system that closes every loophole and protects your progress 24/7.",
    cta: "Activate Protection",
    popular: true,
    category: "Protection"
  },
  {
    icon: Users,
    title: "Accountability Partners",
    description: "Connect with trusted allies and accountability partners for relationship-based recovery.",
    cta: "Find Partner",
    popular: false,
    category: "Community"
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "Comprehensive analytics with streak tracking, patterns analysis, and milestone celebrations.",
    cta: "View Progress",
    popular: false,
    category: "Analytics"
  },
  {
    icon: Bot,
    title: "AI Support Assistant",
    description: "24/7 AI-powered guidance through urges, tough moments, and personalized recovery plans.",
    cta: "Chat Now",
    popular: true,
    category: "AI Support"
  },
  {
    icon: Cross,
    title: "Biblical Foundation",
    description: "Faith-based recovery with scripture, devotionals, and Christian counseling resources.",
    cta: "Explore Faith",
    popular: false,
    category: "Spiritual"
  }
]

const additionalFeatures = [
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Join thousands of believers sharing experiences, victories, and encouragement.",
    stats: "50,000+ Active Members"
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Science-backed lessons about addiction combined with biblical wisdom.",
    stats: "100+ Lessons Available"
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Unlock milestones and celebrate victories with our gamified recovery system.",
    stats: "12 Achievement Levels"
  },
  {
    icon: Timer,
    title: "21-Day Programs",
    description: "Structured detox programs for men and women with daily guidance.",
    stats: "92% Success Rate"
  },
  {
    icon: Heart,
    title: "Couple Support",
    description: "Specialized tools for rebuilding trust and healing relationships together.",
    stats: "Trusted by 100k+ Couples"
  },
  {
    icon: Shield,
    title: "Family Protection",
    description: "Comprehensive parental controls and family safety monitoring tools.",
    stats: "Safe for All Ages"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
            Complete Recovery Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Break Free
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Combining proven accountability methods with cutting-edge AI technology and biblical foundation 
            for lasting freedom from pornography addiction.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {feature.popular && (
                <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Most Popular
                </Badge>
              )}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <Button 
                    variant="link" 
                    className="text-purple-600 hover:text-purple-700 p-0 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    {feature.cta} →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Recovery Ecosystem
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional tools and resources designed to support every aspect of your recovery journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-gray-700" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{feature.description}</p>
                <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                  {feature.stats}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey to Freedom?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join over 1.7 million people who have found freedom with our comprehensive recovery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
