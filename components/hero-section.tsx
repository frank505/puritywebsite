import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Quit Porn For Life
              <br />
              With <span className="gradient-text">PURITY</span>
            </h1>

            <div className="mb-8 p-6 bg-red-900/20 border border-red-500/30 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl font-bold text-red-400 mb-2">1 in 3 men are addicted to porn</p>
              <p className="text-gray-300 text-lg">
                Leading to decreased motivation, anxiety, dopamine imbalance, and dysfunction in young men.
              </p>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join over 50,000+ Christians who have broken free from pornography addiction. We use faith and science to
              help you stop this addiction through our accountability platform and supportive community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="transition-transform hover:scale-105"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
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
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <div className="relative flex justify-center items-center">
            {/* Back left phone (tilted) */}
            <div className="absolute -left-8 top-8 phone-glow opacity-50 -rotate-12 z-0">
              <div className="relative w-56 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-xl">
                <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">
                    <div className="text-center">
                      <h3 className="text-white text-base font-bold mb-3">Daily Devotion</h3>
                      <div className="w-full bg-white/10 rounded-xl p-3">
                        <p className="text-white/80 text-xs leading-relaxed">
                          "No temptation has overtaken you except what is common..."
                        </p>
                        <p className="text-purple-300 text-xs mt-2">1 Corinthians 10:13</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back right phone (tilted) */}
            <div className="absolute -right-8 top-8 phone-glow opacity-50 rotate-12 z-0">
              <div className="relative w-56 h-[450px] bg-black rounded-[2.5rem] p-2 shadow-xl">
                <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-green-900 to-teal-900 flex flex-col items-center justify-center p-4">
                    <div className="text-center">
                      <h3 className="text-white text-base font-bold mb-3">Community</h3>
                      <div className="space-y-2">
                        <div className="bg-white/10 rounded-lg p-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span className="text-white text-xs font-medium">John M.</span>
                          </div>
                          <p className="text-white/70 text-xs">Day 30 milestone! 🎉</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span className="text-white text-xs font-medium">Mike R.</span>
                          </div>
                          <p className="text-white/70 text-xs">Praying for strength</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main front phone (on top) */}
            <div className="relative phone-glow z-10">
              <div className="relative w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex flex-col items-center justify-center p-6">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-3xl">🛡️</span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">Day 47</h3>
                      <p className="text-purple-200 text-sm">Clean Streak</p>
                    </div>

                    <div className="w-full max-w-48 bg-white/10 rounded-2xl p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm">Progress</span>
                        <span className="text-purple-300 text-sm">78%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full max-w-48">
                      <div className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-white text-lg font-bold">12</div>
                        <div className="text-purple-200 text-xs">Prayers</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-white text-lg font-bold">5</div>
                        <div className="text-purple-200 text-xs">Check-ins</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
