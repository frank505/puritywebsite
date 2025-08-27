"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Smartphone, Monitor, Tablet, Eye, Lock, Users, Clock } from "lucide-react"

export default function ComingSoonSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">Coming Soon</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Digital{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Protection
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced monitoring and blocking software across all your devices. Like Covenant Eyes, but built for the
            modern Christian warrior.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {/* Monitoring Feature */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Smart Monitoring</h3>
                </div>
                <p className="text-gray-300">
                  AI-powered content detection with real-time alerts and detailed reports for accountability partners.
                </p>
              </div>

              {/* Blocking Feature */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Advanced Blocking</h3>
                </div>
                <p className="text-gray-300">
                  Intelligent content filtering that adapts to new threats while allowing safe browsing for work and
                  study.
                </p>
              </div>

              {/* Cross-Platform */}
              <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-6 rounded-2xl border border-pink-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Users className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Family Protection</h3>
                </div>
                <p className="text-gray-300">
                  Protect your entire household with customizable settings for different family members and age groups.
                </p>
              </div>
            </div>

            {/* Notify Me Button */}
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl text-lg font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Notify Me When Available
              </Button>
            </div>
          </div>

          {/* Right Side - Device Mockups */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full"></div>

            {/* Device Grid */}
            <div className="relative grid grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-3xl border border-gray-700 shadow-2xl">
                <div className="bg-black rounded-2xl p-4 h-48">
                  <div className="flex items-center justify-between mb-4">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-purple-500/30 rounded"></div>
                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-red-400" />
                        <div className="h-2 bg-red-400 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-3 rounded-2xl border border-gray-700 shadow-2xl">
                <div className="bg-black rounded-lg p-3 h-32">
                  <div className="flex items-center justify-between mb-3">
                    <Monitor className="w-5 h-5 text-blue-400" />
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-500/30 rounded"></div>
                    <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                    <div className="h-2 bg-gray-700 rounded w-1/3"></div>
                  </div>
                </div>
              </div>

              {/* Tablet */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-3 rounded-2xl border border-gray-700 shadow-2xl col-span-2">
                <div className="bg-black rounded-lg p-4 h-24">
                  <div className="flex items-center justify-between mb-3">
                    <Tablet className="w-5 h-5 text-pink-400" />
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-2 bg-pink-500/30 rounded"></div>
                    <div className="h-2 bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-purple-100">Block Rate</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-blue-100">Protection</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
            <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">All Devices</h4>
            <p className="text-sm text-gray-400">Phone, tablet, computer protection</p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
            <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">Real-time Alerts</h4>
            <p className="text-sm text-gray-400">Instant accountability notifications</p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
            <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">Family Plans</h4>
            <p className="text-sm text-gray-400">Protect your entire household</p>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
            <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h4 className="font-semibold text-white mb-2">Secure & Private</h4>
            <p className="text-sm text-gray-400">Your data stays protected</p>
          </div>
        </div>
      </div>
    </section>
  )
}
