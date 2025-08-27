import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Users, Phone, ArrowRight } from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      icon: BookOpen,
      title: "Biblical Resources",
      description: "Access scripture-based articles, studies, and devotionals focused on purity and spiritual growth.",
      cta: "Explore Articles",
    },
    {
      icon: Video,
      title: "Video Testimonies",
      description: "Watch powerful stories of transformation and hope from others who have found freedom.",
      cta: "Watch Videos",
    },
    {
      icon: Users,
      title: "Support Groups",
      description: "Join moderated online support groups with others on similar journeys of healing.",
      cta: "Find Groups",
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "24/7 crisis support hotline for immediate help during difficult moments.",
      cta: "Get Help Now",
    },
  ]

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Resources for Your Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access a comprehensive library of faith-based resources designed to support your healing and spiritual
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-2">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="group bg-transparent">
                  {resource.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
