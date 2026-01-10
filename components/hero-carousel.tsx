"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const CAROUSEL_IMAGES = [
  {
    src: "/hero/1.jpg",
    caption: "Making the difference",
  },
  {
    src: "/hero/2.jpg",
    caption: "One Mother. one Child at a Time.",
  },
  {
    src: "/hero/3.jpg",
    caption: "To embrace adulthood positively",
  },
  {
    src: "/hero/4.jpg",
    caption: "230 children under our care",
  },
  {
    src: "/hero/5.jpg",
    caption: "58 donations collected",
  },
  {
    src: "/hero/6.jpg",
    caption: "Building better futures",
  },
  {
    src: "/hero/53.jpg",
    caption: "Healthcare for all",
  },
  {
    src: "/hero/80.jpg",
    caption: "Community first",
  },
  {
    src: "/hero/64.jpg",
    caption: "Education matters",
  },
  {
    src: "/hero/11.jpg",
    caption: "Together we grow",
  },
  {
    src: "/hero/57.jpg",
    caption: "Maternal Care",
  },
  {
    src: "/hero/20.png",
    caption: "Maternal Care",
  },
  {
    src: "/hero/17.jpg",
    caption: "Maternal Care",
  },
  {
    src: "/hero/69.jpg",
    caption: "Maternal Care",
  },
  {
    src: "/hero/71.jpg",
    caption: "Maternal Care",
  },
  {
    src: "/hero/19.png",
    caption: "Maternal Care",
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const goToSlide = (index: any) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
    setAutoPlay(false)
  }

  const scrollToNext = () => {
    const element = document.getElementById("mission-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-screen">
        {/* Slides */}
        {CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>
        ))}

        {/* Center Caption */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div>
                <p className="text-white/90 font-semibold text-sm md:text-base mb-4">Making the difference</p>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
                  {CAROUSEL_IMAGES[currentSlide].caption === "Making the difference"
                    ? "Making the difference"
                    : CAROUSEL_IMAGES[currentSlide].caption === "One Mother. one Child at a Time."
                      ? "One Mother. one Child at a Time."
                      : CAROUSEL_IMAGES[currentSlide].caption === "One Mother. one Child at a Time."
                        ? "One Mother. one Child at a Time."
                        : "One Mother. one Child at a Time."}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {CAROUSEL_IMAGES[currentSlide].caption}
                </p>

                {/* Statistics */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                    <p className="text-2xl md:text-3xl font-bold text-white">230+</p>
                    <p className="text-xs md:text-sm text-white/80 mt-1">Children Under Our Care</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                    <p className="text-2xl md:text-3xl font-bold text-white">58</p>
                    <p className="text-xs md:text-sm text-white/80 mt-1">Donations Collected</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                    <p className="text-2xl md:text-3xl font-bold text-white">1.6M+</p>
                    <p className="text-xs md:text-sm text-white/80 mt-1">Impact Reached</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                    Donate Now
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}
