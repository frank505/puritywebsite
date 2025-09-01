import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, BarChart3, Cross, Bot, Shield } from "lucide-react"

const steps = [
  {
    title: "Emergency Support System",
    description:
      "Start with our panic button feature for instant crisis support. Get immediate help through AI assistance, community support, and prayer when you need it most.",
    image: "/images/phone-mockup-2.png",
    icon: AlertTriangle,
    features: ["Panic Button", "24/7 AI Support", "Crisis Prayer Line"],
    highlight: "Immediate Help"
  },
  {
    title: "Advanced Protection & Tracking",
    description:
      "Activate comprehensive content blocking and begin tracking your progress with detailed analytics, streak counters, and pattern recognition.",
    image: "/images/phone-mockup-1.png",
    icon: BarChart3,
    features: ["Content Blocker", "Progress Analytics", "Streak Tracking"],
    highlight: "Complete Protection"
  },
  {
    title: "Accountability & Community",
    description:
      "Connect with trusted accountability partners and join our supportive community of believers working towards the same goal of freedom.",
    image: "/images/phone-mockup-3.png",
    icon: Users,
    features: ["Accountability Partners", "Community Forum", "Prayer Groups"],
    highlight: "Never Alone"
  },
  {
    title: "Faith-Based Recovery",
    description:
      "Transform your mindset through daily devotionals, scripture meditation, biblical counseling resources, and our 21-day structured programs.",
    image: "/images/phone-mockup-1.png",
    icon: Cross,
    features: ["Daily Devotionals", "21-Day Programs", "Biblical Counseling"],
    highlight: "Spiritual Foundation"
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
            Your Recovery Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our comprehensive 4-step approach combines proven accountability methods with cutting-edge technology 
            and biblical foundation for lasting freedom.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
            >
              <div className="flex-1">
                <div className="max-w-md mx-auto phone-glow">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={300}
                    height={600}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left max-w-lg">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mr-4">
                    <step.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      Step {index + 1}
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {step.highlight}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{step.description}</p>
                
                <div className="grid grid-cols-1 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center lg:justify-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join millions who have found freedom through our comprehensive recovery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
