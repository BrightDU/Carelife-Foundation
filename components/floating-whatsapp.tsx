"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after page loads
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/+2348032482515"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 md:bottom-6 z-45 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
