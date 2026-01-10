"use client"

import ScrollReveal from "./scroll-reveal"

export default function QuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed text-balance">
              "The welfare and the future of our societies depend on our capacity to remain mobilized so as to improve
              the health of every mother and child."
            </blockquote>
            <p className="text-lg text-muted-foreground">— Jean Ping</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
