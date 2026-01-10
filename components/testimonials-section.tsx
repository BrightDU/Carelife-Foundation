"use client"

import Image from "next/image"
import ScrollReveal from "./scroll-reveal"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mrs. Victoria Ebong",
      role: "CEO",
      content:
        "I knew my EDD was near and I was due, but I was so uncertain and unsure. From nowhere, you appeared and took the burdens off my shoulders. It is a sign of good things to come.",
      image: "/professional-woman-portrait.png",
      rating: 5,
    },
    {
      name: "Nurse Emma",
      role: "Healthcare Provider",
      content:
        "This is beyond an intervention; it's a blessing. Your emergence surprisingly even induced labour and gave hope to families in need. The support system is exceptional.",
      image: "/healthcare-nurse-woman.jpg",
      rating: 5,
    },
    {
      name: "Digital Empowerment Scholar",
      role: "Program Graduate",
      content:
        "A transformative moment in my life was receiving a scholarship for the Digital Empowerment Hub training. The mentorship and job opportunities were beyond my expectations.",
      image: "/young-student-graduate.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-in-up" delay={index * 100}>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
