"use client"

import ScrollReveal from "./scroll-reveal"

export default function MissionSection() {
  return (
    <section id="mission-section" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-balance">Our Mission & Vision</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To foster child growth by advancing maternal and child health, nutrition, early childhood development, and education through inclusive, research-driven and community-focused solutions.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build strong, caring communities where vulnerable mothers and children are nurtured in safe, healthy, and supportive environments and every child empowered to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
