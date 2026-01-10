"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export default function EducationInterventionPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Education Intervention Programs</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Our team is working diligently behind the scenes to bridge gaps in educational training by intentionally integrating character capacity-building into our educational intervention initiatives. In 2016, we reached over 400 secondary school students across Northern Nigeria, imparting essential core values such as responsibility, Honesty, Truth, patriotism, charisma, respect, and other vital life virtues. These lessons enriched traditional school training by fostering well-rounded character development. Beyond classroom teachings, we introduced Character Clubs, published character-training magazines for schools, and established mentoring schemes to ensure students internalized these values.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Educational Initiatives</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Scholarship and sponsorship programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>School feeding and nutrition programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Learning materials and educational resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Teacher training and professional development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>School infrastructure improvement</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20">
                <img
                  src="/gallery/educationimg.webp"
                  alt="Education Intervention"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Educational Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-muted-foreground">Students Sponsored</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">95%</p>
                  <p className="text-muted-foreground">School Completion Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Schools Supported</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
