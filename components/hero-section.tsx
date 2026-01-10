"use client"

import { ArrowDown } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("mission-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/children-healthcare-community-care.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-0">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white/90 font-semibold text-sm md:text-base mb-4 animate-scale-in">
              Making the difference
            </p>
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Caring for Early Lives
            </h1> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
              Caring for Early Lives
            </h1>
            {/* <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
              Empowering every child to embrace adulthood positively through healthcare, nutrition, and early childhood
              development.
            </p> */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
              One Mother. one Child at a Time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
                Donate Now
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <p className="text-2xl md:text-4xl font-bold text-white">1.6M+</p>
                <p className="text-xs md:text-sm text-white/80 mt-1">Donations Received</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <p className="text-2xl md:text-4xl font-bold text-white">40+</p>
                <p className="text-xs md:text-sm text-white/80 mt-1">Volunteers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <p className="text-2xl md:text-4xl font-bold text-white">10+</p>
                <p className="text-xs md:text-sm text-white/80 mt-1">Care Homes</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
