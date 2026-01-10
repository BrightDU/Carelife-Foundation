"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export default function HealthInterventionPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Health Intervention Programs</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Our team swiftly took action through the 1 Million Health Project to address the urgent healthcare needs of residents in Chikun Local Government Area, Kaduna State, achieving remarkable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Key Programs</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Disease prevention and health awareness campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Nutrition support and dietary education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Mental health and psychosocial support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Healthcare facility support and equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Health worker training and capacity building</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20">
                <img
                  src="/gallery/healtha.webp"
                  alt="Health Intervention"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Program Metrics</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">400+</p>
                  <p className="text-muted-foreground">Lives Improved</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">95%</p>
                  <p className="text-muted-foreground">Health Awareness</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">52+</p>
                  <p className="text-muted-foreground">Health Surgries</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
