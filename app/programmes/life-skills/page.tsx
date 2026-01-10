"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export default function LifeSkillsPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Life Skills Development</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                In 2017, CareLife Character Foundation empowered 315 youths across Southern Kaduna, including Kafanchan, Zango Kataf, and Kwoi, with essential digital skills such as web design, graphic design, and online marketing. This initiative featured hands-on training sessions, and direct coaching, equipping participants to become resourceful and productive community contributors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Skills We Develop</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Critical thinking and problem-solving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Emotional intelligence and self-management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Leadership and teamwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Financial literacy and career planning</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20">
                <img
                  src="/gallery/lifeskill.webp"
                  alt="Life Skills Training"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Program Outcomes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">350+</p>
                  <p className="text-muted-foreground">Youth Trained</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">85%</p>
                  <p className="text-muted-foreground">Confidence Improvement</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">5+</p>
                  <p className="text-muted-foreground">Schools Engaged</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
