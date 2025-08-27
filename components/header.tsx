import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-purple-500" />
          <div>
            <h1 className="text-xl font-bold font-display text-white">PURITY</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#support" className="text-gray-300 hover:text-white transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex bg-transparent border-gray-700 text-white hover:bg-gray-800"
          >
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
