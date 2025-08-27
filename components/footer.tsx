import { Shield, Heart, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900/50 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="text-xl font-bold font-display text-white">PURITY</h3>
                <p className="text-sm text-gray-400">Find Freedom & Healing</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering Christians to overcome pornography addiction through faith-based support, community
              accountability, and biblical guidance.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-purple-500" />
              <span>It's an awkward topic, but not taboo.</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Daily Devotionals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Support Groups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Biblical Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Video Testimonies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Crisis Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 mt-4">
                  <Mail className="h-4 w-4" />
                  <span>support@thepurityapp.com</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-PURITY</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 The Purity App. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
