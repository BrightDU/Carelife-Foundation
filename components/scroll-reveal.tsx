"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: "fade-in-up" | "scale-in" | "slide-down"
  delay?: number
}

export default function ScrollReveal({ children, animation = "fade-in-up", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(`animate-${animation}`)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [animation, delay])

  return (
    <div ref={ref} className="will-change-opacity">
      {children}
    </div>
  )
}
