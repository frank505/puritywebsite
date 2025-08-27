"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export default function BenefitsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollContainer.style.animationPlayState = "running"
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(scrollContainer)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    "Increased testosterone",
    "Prevent Erectile Dysfunction",
    "Increased Energy",
    "Increased Motivation",
    "Improved Focus",
    "Improved Relationships",
    "Increased Confidence",
  ]

  // Triple the benefits for seamless loop
  const repeatedBenefits = [...benefits, ...benefits, ...benefits]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Experience life{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  changing benefits
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Break free from addiction and unlock your God-given potential with proven results.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">94%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">50,000+</div>
                <div className="text-sm text-gray-400">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">85%</div>
                <div className="text-sm text-gray-400">Stay Clean 90+ Days</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center gap-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center gap-3">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right side - Scrolling Benefits */}
          <div className="relative h-96 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex flex-col gap-4 animate-scroll-slow"
              style={{ animationPlayState: "paused" }}
            >
              {repeatedBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }
        
        .animate-scroll-slow {
          animation: scroll-slow 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
