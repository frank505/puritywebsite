import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael R.",
      role: "App User",
      content:
        "This app completely changed my life. I've been clean for 8 months now and feel like a completely different person. The accountability features and daily devotionals keep me grounded in my faith.",
      rating: 5,
      image: "/christian-man-testimonial.png",
    },
    {
      name: "David L.",
      role: "Youth Pastor",
      content:
        "I've recommended PURITY to dozens of young men in our church. The biblical approach combined with modern technology creates real, lasting change. It's not just an app - it's a lifeline.",
      rating: 5,
      image: "/christian-pastor-testimonial.png",
    },
    {
      name: "James K.",
      role: "App User",
      content:
        "After 15 years of addiction, I never thought I'd be free. PURITY gave me the tools and community I needed. I'm now 6 months clean and helping others in their journey too.",
      rating: 5,
      image: "/christian-man-testimonial.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            What People Say About <span className="gradient-text">PURITY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real testimonials from Christians who broke free from pornography addiction and transformed their lives
            through our faith-based platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-purple-500/30 mb-4" />

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
