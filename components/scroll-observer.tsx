"use client"

import { useEffect } from "react"

export default function ScrollObserver() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-scroll]")
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight - 50

        if (isVisible) {
          el.classList.add("is-visible")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
