"use client"

import { useEffect, useRef, useState } from "react"

interface StatsCounterProps {
  end: number
  suffix?: string
}

export default function StatsCounter({ end, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let current = 0
    const increment = Math.ceil(end / 30)
    const interval = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isInView, end])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}
