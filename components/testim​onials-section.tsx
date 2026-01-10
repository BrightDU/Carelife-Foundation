"use client"

import ScrollReveal from "./scroll-reveal"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mrs. Victoria Ekong",
      role: "Mother & Community Leader",
      content:
        "CareLife Foundation has been instrumental in improving healthcare access in our community. My children have received excellent care, and I'm grateful for their support.",
      rating: 5,
    },
    {
      name: "Pastor Emmanuel Morgan",
      role: "Community Health Worker",
      content:
        "The training and mentorship I received from CareLife has transformed how I serve my community. I'm now able to educate families on preventative healthcare.",
      rating: 5,
    },
    {
      name: "Adekunle Taiwo",
      role: "Digital Skills Trainee",
      content:
        "The digital empowerment program opened doors I never thought possible. I now have skills that help me contribute meaningfully to my family.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              We are creating a place where every child can thrive.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the families and communities we've had the privilege to serve.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
