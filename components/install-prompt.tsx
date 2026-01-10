"use client"

import { useEffect, useState } from "react"
import { X, Download } from "lucide-react"

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed in session
    const isDismissed = sessionStorage.getItem("install-prompt-dismissed")
    if (isDismissed) {
      setDismissed(true)
      return
    }

    const handler = (e: Event) => {
      console.log("[v0] beforeinstallprompt event fired")
      e.preventDefault()
      setDeferredPrompt(e)
      // Show after 3 seconds
      setTimeout(() => {
        setShowPrompt(true)
      }, 3000)
    }

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", handler)

    // Log for debugging
    console.log("Install prompt component mounted, listening for beforeinstallprompt")

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      console.log("Install button clicked")
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setDeferredPrompt(null)
        setShowPrompt(false)
        sessionStorage.setItem("install-prompt-dismissed", "true")
      }
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    sessionStorage.setItem("install-prompt-dismissed", "true")
  }

  if (!showPrompt || dismissed) return null

  return (
    <div className="fixed bottom-24 md:bottom-4 left-4 right-4 md:right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl shadow-2xl p-4 z-40 animate-slide-down">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="bg-primary-foreground/20 rounded-lg p-2">
            <Download className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-sm">Install CareLife App</p>
            <p className="text-xs opacity-90">Access offline & get home screen icon</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleInstall}
            className="px-4 py-2 bg-primary-foreground text-primary rounded-lg font-bold text-sm whitespace-nowrap hover:opacity-90 transition-all hover:scale-105"
          >
            Install
          </button>
          <button onClick={handleDismiss} className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
