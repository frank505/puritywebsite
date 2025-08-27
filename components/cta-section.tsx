import { Button } from "@/components/ui/button"
import { Download, Smartphone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-500/30 glow-effect">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Experience <span className="gradient-text">life changing</span> benefits
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Christians who have found freedom from pornography addiction through faith, community, and
            accountability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>

          <p className="text-sm text-gray-400">Free to download • No credit card required • Start your journey today</p>
        </div>
      </div>
    </section>
  )
}
