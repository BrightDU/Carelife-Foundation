"use client"

import { useEffect, useState } from "react"
import ScrollReveal from "./scroll-reveal"
import { Users, Shield, Heart, Megaphone, Zap, Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function CoreValuesSection() {
  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "Making our programs accessible to all children and families, regardless of their background.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest ethical standards, maintaining transparency and accountability.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Approaching every aspect of our work with empathy and understanding, providing holistic care.",
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Championing the rights of children and adolescents, ensuring their voices are heard.",
    },
    {
      icon: Zap,
      title: "Resilience",
      description: "Fostering strength and adaptability in communities, supporting long-term growth.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Delivering high-quality, impactful services, continuously improving our practices.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)
  const [displayedValues, setDisplayedValues] = useState([0, 1, 2])
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const totalSlides = Math.ceil(values.length / itemsPerSlide)

  // Calculate items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setItemsPerSlide(1)
      } else if (width < 1024) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update displayed values when index or items change
  useEffect(() => {
    setDisplayedValues(
      Array.from({ length: itemsPerSlide }, (_, i) => (currentIndex + i) % values.length)
    )
  }, [currentIndex, itemsPerSlide])

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerSlide) % values.length)
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(timer)
  }, [itemsPerSlide, isAutoPlay])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerSlide) % values.length)
    setIsAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerSlide + values.length) % values.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {displayedValues.map((index) => {
              const value = values[index]
              const Icon = value.icon
              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className="opacity-0 animate-in fade-in duration-700 ease-out"
                  style={{
                    animation: 'fadeIn 0.7s ease-out forwards',
                  }}
                >
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 
                      className="text-lg font-bold text-foreground mb-2"
                      style={{
                        animation: 'slideInFromLeft 0.8s ease-out forwards',
                      }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className="text-sm text-muted-foreground leading-relaxed"
                      style={{
                        animation: 'slideInFromRight 0.8s ease-out 0.2s forwards',
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous values"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i * itemsPerSlide)
                    setIsAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === Math.floor(currentIndex / itemsPerSlide)
                      ? "bg-primary w-6"
                      : "bg-border"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next values"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
