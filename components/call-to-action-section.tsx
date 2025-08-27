import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Smartphone } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Begin Your Journey to Freedom?</h2>

          <p className="text-xl mb-8 opacity-90">
            Join thousands of believers who have found hope, healing, and community through The Purity App. Your
            transformation starts today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3 bg-transparent"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Available on iOS & Android</span>
            </div>
            <span>•</span>
            <span>Free to start</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
