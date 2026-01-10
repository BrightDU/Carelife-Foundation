"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
}

export default function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollProgress = rect.top / window.innerHeight
        setYOffset(scrollProgress * offset)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset])

  return (
    <div ref={ref} style={{ transform: `translateY(${yOffset}px)` }}>
      {children}
    </div>
  )
}
