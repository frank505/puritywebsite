import { Star } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/95">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display mb-2 text-gray-900">Over 15k 5-Star Ratings</h2>

            <div className="flex items-center space-x-6 text-gray-600">
              <span className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-1">4.7</span>
                <span className="text-gray-700">App Store</span>
              </span>
              <span className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-1">4.8</span>
                <span className="text-gray-700">Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
