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
                  Empowering every child by improving maternal and child health, nutrition, and early childhood
                  development. We strive to promote maternal literacy, advocacy, education, and digital empowerment for
                  young individuals while implementing research-driven interventions to foster a virtuous society.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <h3 className="text-xl font-bold text-accent mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Foster a safe and supportive environment for every child, empowering them to get the future they
                  deserve. We believe in creating lasting change through community engagement, quality education, and
                  holistic support systems that enable children to thrive.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
