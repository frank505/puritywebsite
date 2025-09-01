import { Star, Users, Award, TrendingUp, Shield } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-lg">
          {/* Top Section - Reviews */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-900">
              Proven Results You Can Trust
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
              <span className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-2xl font-bold text-gray-900 mr-1">4.4</span>
                <span className="text-gray-700">Average Rating</span>
              </span>
              <span className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-2xl font-bold text-gray-900 mr-1">25</span>
                <span className="text-gray-700">Years in Business</span>
              </span>
              <span className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                <span className="text-2xl font-bold text-gray-900 mr-1">92%</span>
                <span className="text-gray-700">Success Rate</span>
              </span>
            </div>
          </div>

          {/* Bottom Section - Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">623K+</div>
              <div className="text-sm text-gray-600">Active Community Members</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">84%</div>
              <div className="text-sm text-gray-600">Report Life Improvement</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">750K+</div>
              <div className="text-sm text-gray-600">Successfully Quit Porn</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">92K+</div>
              <div className="text-sm text-gray-600">Monthly Pledges</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
