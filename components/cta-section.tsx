import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Smartphone, Shield, Users, Heart, Apple, Monitor, Chrome as ChromeIcon } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 md:p-16 border border-purple-500/30 glow-effect">
          <Badge variant="outline" className="mb-6 bg-purple-50 text-purple-700 border-purple-200 text-base px-4 py-2">
            Proven Faith-Based Recovery Platform
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Break Free from Porn
            <br />
            <span className="gradient-text">For Life</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience lasting freedom through our comprehensive platform combining 
            <span className="text-purple-400 font-semibold"> proven accountability methods</span> and 
            <span className="text-blue-400 font-semibold"> biblical foundation</span>.
          </p>

          {/* Key Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Panic Button</h3>
              <p className="text-gray-300 text-sm">24/7 emergency support</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Community</h3>
              <p className="text-gray-300 text-sm">Strong, supportive community</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Heart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Faith-Based</h3>
              <p className="text-gray-300 text-sm">Biblical foundation</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg group"
            >
              <Apple className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg group"
            >
              <Smartphone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg group"
            >
              <Apple className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for macOS
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg group"
            >
              <Monitor className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for Windows
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-4 text-lg group"
            >
              <ChromeIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Add Chrome Extension
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Free 7-day trial
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              No credit card required
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              92% success rate
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              25+ years trusted
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
