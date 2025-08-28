import Image from "next/image"

const steps = [
  {
    title: "Unlock your Dashboard",
    description:
      "Create your personalized recovery dashboard with goal setting, progress tracking, and daily check-ins to monitor your journey.",
    image: "/images/phone-mockup-2.png",
  },
  {
    title: "Track your Progress",
    description:
      "Monitor your streak, celebrate milestones, and gain insights into your patterns with detailed analytics and progress reports.",
    image: "/images/phone-mockup-1.png",
  },
  {
    title: "Engage with the Community",
    description:
      "Connect with accountability partners, join prayer groups, and participate in Bible studies with fellow believers on the same journey.",
    image: "/images/phone-mockup-3.png",
  },
  {
    title: "Reinforce your Thinking with Love",
    description:
      "Transform your mindset through daily devotionals, scripture meditation, and positive affirmations rooted in God's love and grace.",
    image: "/images/phone-mockup-1.png",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Simple steps to start your journey towards freedom and healing.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
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

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
