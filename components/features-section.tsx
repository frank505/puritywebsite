import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Users, 
  Heart, 
  Zap, 
  BarChart3, 
  Award, 
  Cross, 
  Eye,
  Timer,
  MessageCircle,
  Apple,
  Chrome as ChromeIcon,
  Smartphone,
  Monitor,
  Bell,
  BellRing,
  BookOpen,
  Camera,
  Image as ImageIcon,
  Filter,
  Search,
  Activity,
  Music,
  Share2,
  Calendar,
  CheckCircle
} from "lucide-react"

const coreFeatures = [
  {
    icon: Shield,
    title: "Multi-Platform Protection",
    description: "Android, iOS, macOS, Windows, and Chrome extension—your devices are covered everywhere you go.",
    cta: "See Platforms",
    popular: true,
    category: "Coverage"
  },
  {
    icon: Eye,
    title: "Secure In‑App Browser",
    description: "Built‑in safe browser on mobile with filters and accountability—your default way to surf, search, and learn.",
    cta: "Use Secure Browser",
    popular: true,
    category: "Protection"
  },
  {
    icon: Zap,
    title: "Social App Lockdown",
    description: "Blocks direct access to social media apps; use them safely only through the secure browser.",
    cta: "Configure Apps",
    popular: false,
    category: "Safeguards"
  },
  {
    icon: Users,
    title: "Partnership Accountability",
    description: "Invite a partner who gets alerts for tampering, removals, or uninstalls—receives reports and can reset your progress when needed.",
    cta: "Add a Partner",
    popular: true,
    category: "Partnership"
  },
  {
    icon: Camera,
    title: "Screen Accountability",
    description: "Discreet screen reviews flag explicit content and summarize activity for your partnership support.",
    cta: "Learn How It Works",
    popular: true,
    category: "Partnership"
  },
  {
    icon: BarChart3,
    title: "Progress & Insights",
    description: "Track milestones and patterns with clear insights to keep momentum strong.",
    cta: "View Progress",
    popular: false,
    category: "Analytics"
  },
  {
    icon: Cross,
    title: "Faith & Devotionals",
    description: "Daily devotions, prayer reminders, guided fasting, and scripture meditation—Christ‑centered tools for renewal.",
    cta: "Grow Spiritually",
    popular: false,
    category: "Spiritual"
  }
]

const additionalFeatures = [
  // Spiritual Tools
  { icon: BookOpen, title: "Daily Devotions", description: "Scripture readings with reflection prompts and guided prayers." },
  { icon: Bell, title: "Prayer Reminders", description: "Custom notifications to build steady rhythms of prayer." },
  { icon: Timer, title: "Fasting Integration", description: "Guided fasting (food or digital) with spiritual insights and tracking." },
  { icon: Heart, title: "Scripture Meditation", description: "Breathwork paired with relevant verses to renew your mind." },

  // Notifications
  { icon: Calendar, title: "Verse of the Day", description: "Morning scripture focused on strength and freedom." },
  { icon: BellRing, title: "Prayer Time Alerts", description: "Scheduled reminders for prayer and reflection." },
  { icon: CheckCircle, title: "Victory Celebrations", description: "Affirmations from scripture when you hit milestones." },

  // Meditation
  { icon: Activity, title: "Biblical Breathing", description: "Guided meditations with rhythmic breathing and scripture." },
  { icon: Music, title: "Worship Integration", description: "Hymn and worship suggestions for quiet time." },
  { icon: Cross, title: "Contemplative Prayer", description: "Structured silence and traditional Christian practices." },

  // Community & Partnership
  { icon: MessageCircle, title: "Prayer Requests", description: "Share anonymous requests and pray for others." },
  { icon: Share2, title: "Scripture Sharing", description: "Share the verses that helped in tough moments." },
  { icon: Users, title: "Faith-Based Partners", description: "Match with spiritually minded partnership support." },

  // Protection & Monitoring
  { icon: Filter, title: "Advanced Filtering", description: "Works across browsers—including private modes and mixed-content sites." },
  { icon: Search, title: "Content Monitoring", description: "Flags policy violations and summarizes risky activity." },
  { icon: ImageIcon, title: "Keyword & Image Checks", description: "Detects problematic text and images to prevent slips." },
  { icon: Activity, title: "Activity Feed & Check-ins", description: "Device usage trail with gentle partnership prompts." },

  // Devices
  { icon: Monitor, title: "Desktop Apps", description: "Protect macOS and Windows with native apps." },
  { icon: ChromeIcon, title: "Chrome Extension", description: "Deep page analysis and filtering right in your browser." },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
            Complete Recovery Ecosystem
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Break Free
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A complete, faith-centered recovery ecosystem: secure browsing, social app safeguards, partner accountability,
            and biblical resources working together for lasting freedom.
          </p>

          {/* Platform Coverage Badges */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="gap-2 bg-white text-gray-800 border-gray-200">
              <Smartphone className="w-4 h-4" /> Android
            </Badge>
            <Badge variant="outline" className="gap-2 bg-white text-gray-800 border-gray-200">
              <Apple className="w-4 h-4" /> iOS
            </Badge>
            <Badge variant="outline" className="gap-2 bg-white text-gray-800 border-gray-200">
              <Apple className="w-4 h-4" /> macOS
            </Badge>
            <Badge variant="outline" className="gap-2 bg-white text-gray-800 border-gray-200">
              <Monitor className="w-4 h-4" /> Windows
            </Badge>
            <Badge variant="outline" className="gap-2 bg-white text-gray-800 border-gray-200">
              <ChromeIcon className="w-4 h-4" /> Chrome Extension
            </Badge>
          </div>
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
              Essential Recovery Tools
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spiritual practices, protection technology, and partnership support designed for every aspect of your journey.
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
                {/* Optional stats removed to avoid numeric claims */}
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
              Get started with a complete accountability and protection toolkit built for lasting freedom.
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
