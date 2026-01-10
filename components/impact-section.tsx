"use client"

import ScrollReveal from "./scroll-reveal"
import { Heart, Users, Home } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayValues, setDisplayValues] = useState({ donations: 0, volunteers: 0, homes: 0 })
  const sectionRef = useRef(null)

  const targetValues = {
    donations: 1600000,
    volunteers: 230,
    homes: 10,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setDisplayValues({
        donations: Math.floor(targetValues.donations * progress),
        volunteers: Math.floor(targetValues.volunteers * progress),
        homes: Math.floor(targetValues.homes * progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  const impacts = [
    {
      icon: Heart,
      label: "Donations Received",
      value: `${(displayValues.donations / 1000000).toFixed(1)}M+`,
      color: "text-primary",
    },
    {
      icon: Users,
      label: "Children Under Care",
      value: `${displayValues.volunteers}+`,
      color: "text-primary",
    },
    { icon: Home, label: "Care Homes Established", value: `${displayValues.homes}+`, color: "text-primary" },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together, we make a difference in millions of lives. Here's what we've achieved through dedicated effort
              and community support.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
                <div className="bg-card rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors">
                  <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 ${impact.color}`} />
                  </div>
                  <p className={`text-3xl md:text-4xl font-bold ${impact.color} mb-2 transition-all duration-300`}>
                    {impact.value}
                  </p>
                  <p className="text-muted-foreground">{impact.label}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
