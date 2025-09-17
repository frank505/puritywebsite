"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
    "Better Sleep Quality",
    "Enhanced Mental Clarity",
    "Stronger Faith Connection",
    "Reduced Anxiety",
    "Improved Self-Control",
    "Better Communication Skills",
    "Increased Productivity",
    "Healthier Intimacy",
    "Greater Life Purpose",
    "Stronger Family Bonds",
    "Enhanced Emotional Stability"
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
                <div className="text-3xl font-bold text-purple-400">92%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
        <div className="text-3xl font-bold text-pink-400">Faith-Focused</div>
        <div className="text-sm text-gray-400">Christ-centered guidance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">84%</div>
                <div className="text-sm text-gray-400">Report Life Improvement</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </a>
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </a>
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Download for macOS"
              >
                <button className="h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white text-sm">Download for macOS</button>
              </a>
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Download for Windows"
              >
                <button className="h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white text-sm">Download for Windows</button>
              </a>
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Get Chrome Extension"
              >
                <button className="h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white text-sm">Add Chrome Extension</button>
              </a>
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
