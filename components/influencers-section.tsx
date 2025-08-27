const influencers = [
  {
    name: "Jonathan Pokluda",
    role: "Pastor & Author",
    image: "/christian-pastor-testimonial.png",
    verified: true,
  },
  {
    name: "Mark Batterson",
    role: "Lead Pastor",
    image: "/christian-pastor-testimonial.png",
    verified: true,
  },
  {
    name: "John Mark Comer",
    role: "Teaching Pastor",
    image: "/christian-pastor-testimonial.png",
    verified: true,
  },
]

export default function InfluencersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">Vouched ❤️ by your favourite influencers</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {influencers.map((influencer, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4">
                <img
                  src={influencer.image || "/placeholder.svg"}
                  alt={influencer.name}
                  className="w-24 h-24 rounded-full border-4 border-green-500"
                />
                {influencer.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-white">{influencer.name}</h3>
              <p className="text-sm text-gray-400">{influencer.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold font-display mb-6">Follow us on socials</h3>
          <div className="flex justify-center space-x-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">YT</span>
            </div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gray-600">
              <span className="text-white font-bold">TT</span>
            </div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gray-600">
              <span className="text-white font-bold">X</span>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">IG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
