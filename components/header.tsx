import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/final_form_image_101_cropped_to_be_used.png" 
            alt="Purity App Logo" 
            width={300} 
            height={300} 
            className="h-14 w-auto object-contain"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
            Reviews
          </a>
          <a href="#support" className="text-gray-600 hover:text-gray-900 transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
