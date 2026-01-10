"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export default function MaternalChildCarePage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Maternal, Child and Adolescent Care
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Providing comprehensive healthcare support for mothers, children, and adolescents through preventative
                care, health education, and community outreach programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Approach</h2>
                <p className="text-foreground mb-4">
                  Our health programs focus on providing essential prenatal and postnatal care, PMTCT, immunisation, and neonatal support, ensuring the well-being of mothers and their infants. Our programs address:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Prenatal and postnatal care for mothers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Child immunization and nutrition programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Adolescent health and wellness education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Community health worker training</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20">
                <img
                  src="/gallery/24.jpg"
                  alt="Maternal and Child Care"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Impact Achieved</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">5000+</p>
                  <p className="text-muted-foreground">Mothers Supported</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">8000+</p>
                  <p className="text-muted-foreground">Children Reached</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-muted-foreground">Communities Served</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
