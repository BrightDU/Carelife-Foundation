"use client"

import { useEffect, useState } from "react"
import { X, AlertCircle } from "lucide-react"

interface Announcement {
  id: string
  title: string
  description: string
  color?: "primary" | "secondary" | "accent"
}

const announcements: Announcement[] = [
  {
    id: "event",
    title: "Our Next Big Event",
    description: "Join us on March 15th for a charity fundraiser to support our maternal health programs.",
    color: "primary",
  },
  {
    id: "donate",
    title: "Donate to Save Lives",
    description: "Your donation of just $5 can provide basic healthcare to a child in need.",
    color: "primary",
  },
  {
    id: "updates",
    title: "Sign Up for Updates",
    description: "Get the latest news about our programs and impact stories delivered to your inbox.",
    color: "primary",
  },
]

export default function SlidingAnnouncementPopup() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [dismissed])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isVisible])

  const current = announcements[currentIndex]

  if (dismissed || !isVisible) return null

  return (
    <div
      className={`fixed right-0 bottom-40 md:bottom-24 z-36 transition-all duration-500 transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="mx-4 mb-4 w-96 md:w-[480px] bg-card border-l-4 border-primary rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary/10 px-8 py-6 flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg text-foreground">{current.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{current.description}</p>
            </div>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 ml-4"
            aria-label="Close announcement"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-2 px-8 py-3 justify-center bg-muted/50">
          {announcements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to announcement ${idx + 1}`}
            />
          ))}
        </div>

        <div className="px-8 py-4 bg-primary/5 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
            {current.id === "event" && "Learn More"}
            {current.id === "donate" && "Donate Now"}
            {current.id === "updates" && "Sign Up"}
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="px-4 py-2 bg-muted text-foreground rounded-lg font-semibold text-sm hover:bg-muted/80 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
