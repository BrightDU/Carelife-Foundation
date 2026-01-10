"use client"

import ScrollReveal from "./scroll-reveal"
import { Users, Shield, Heart, Megaphone, Zap, Star } from "lucide-react"

export default function CoreValuesSection() {
  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "Making our programs accessible to all children and families, regardless of their background.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest ethical standards, maintaining transparency and accountability.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Approaching every aspect of our work with empathy and understanding, providing holistic care.",
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Championing the rights of children and adolescents, ensuring their voices are heard.",
    },
    {
      icon: Zap,
      title: "Resilience",
      description: "Fostering strength and adaptability in communities, supporting long-term growth.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Delivering high-quality, impactful services, continuously improving our practices.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <ScrollReveal key={index} animation="fade-in-up" delay={index * 50}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
