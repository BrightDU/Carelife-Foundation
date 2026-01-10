"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export default function CommunityDevelopmentPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Community Development</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Our team actively supports community development by providing routine training to the Principal Marshals, Heads of Operations, and Administrations of the Kaduna State Traffic and Environmental Law Enforcement Agency (KASTELEA). Recognized as a key resource partner in 2017 by KASTELEA management, TeamCareLife conducts regular training and refresher courses for a minimum of 60 officers per session.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Our Focus Areas</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Infrastructure development in underserved areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Water, sanitation, and hygiene programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Economic empowerment and livelihood programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Environmental sustainability initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Community leadership development</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20">
                <img
                  src="/gallery/communityimg.webp"
                  alt="Community Development"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Results and Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">60+</p>
                  <p className="text-muted-foreground">Communities Impacted</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">100+</p>
                  <p className="text-muted-foreground">People Benefited</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">3+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
