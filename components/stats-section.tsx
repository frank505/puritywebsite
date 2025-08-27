import { Star } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-500/30 glow-effect">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Over 15k 5-Star Ratings</h2>

            <div className="flex items-center space-x-6 text-gray-300">
              <span className="flex items-center">
                <span className="text-2xl font-bold text-white mr-1">4.7</span>
                App Store
              </span>
              <span className="flex items-center">
                <span className="text-2xl font-bold text-white mr-1">4.8</span>
                Google Play
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
