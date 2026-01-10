"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export default function AdvocacyPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Advocacy and Policy Programs</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                As part of our mission, our team actively engages in stakeholder advocacy to safeguard and empower the African child. These advocacy efforts play a crucial role in designing and implementing tailored programs that address the unique needs of children and young adults within their communities

                Our advocacy initiatives are far-reaching, spanning from UN agencies to local government bodies and non-governmental organizations, ensuring a collaborative environment where every child has the opportunity to thrive and access resources for a brighter future.

                We focus on critical areas such as child rights and protection, education, health, and nutrition, addressing sensitive issues to create a supportive ecosystem for their growth and development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Advocacy Focus</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Children's rights protection and awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Policy research and evidence-based recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Government engagement and collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Community voice and participation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Media engagement and public awareness campaigns</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20">
                <img
                  src="/gallery/advocacy.webp"
                  alt="Advocacy Program"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Advocacy Achievements</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">20+</p>
                  <p className="text-muted-foreground">Policy Influences</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">10+</p>
                  <p className="text-muted-foreground">Research Studies</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-muted-foreground">Stakeholders Engaged</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
