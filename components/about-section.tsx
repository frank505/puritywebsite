import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, BookOpen, MessageCircle, Calendar, Trophy } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your privacy is protected with end-to-end encryption and anonymous support options.",
    },
    {
      icon: Users,
      title: "Accountability Partners",
      description: "Connect with trusted accountability partners who will support your journey.",
    },
    {
      icon: BookOpen,
      title: "Daily Devotionals",
      description: "Start each day with scripture-based devotionals focused on purity and strength.",
    },
    {
      icon: MessageCircle,
      title: "Support Groups",
      description: "Join moderated support groups with others facing similar challenges.",
    },
    {
      icon: Calendar,
      title: "Progress Tracking",
      description: "Track your progress with milestone celebrations and encouraging reminders.",
    },
    {
      icon: Trophy,
      title: "Victory Stories",
      description: "Read inspiring testimonies from others who have found freedom and healing.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Your Journey to Freedom Starts Here</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Purity App combines biblical wisdom with modern technology to provide comprehensive support for
            overcoming pornography addiction and living in purity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
