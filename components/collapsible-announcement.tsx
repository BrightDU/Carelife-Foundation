"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"

export default function CollapsibleAnnouncement() {
  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-accent/10 border-b border-accent/30 transition-all duration-300">
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-12"}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <p className="font-semibold text-sm text-foreground">New Digital Empowerment Hub</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-accent/20 rounded transition-colors">
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <button onClick={() => setIsVisible(false)} className="p-1 hover:bg-accent/20 rounded transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {isOpen && (
            <p className="text-sm text-foreground/80 leading-relaxed animate-fade-in-up">
              We're excited to launch our expanded Digital Empowerment Hub! Join us for free training in digital
              literacy, entrepreneurship, and career development. Apply now to transform your future.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
