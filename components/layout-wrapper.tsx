"use client"

import type React from "react"

import Header from "./header"
import BottomNavigation from "./bottom-navigation"
import InstallPrompt from "./install-prompt"
import FloatingWhatsApp from "./floating-whatsapp"
import SlidingAnnouncementPopup from "./sliding-announcement-popup"
import VersionToast from "./version-toast"
import FooterSection from "./footer-section"
import ScrollObserver from "./scroll-observer"
import { useEffect } from "react"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.log("Service Worker registration attempted. In preview mode, this is expected to fail.")
      })
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollObserver />
      <Header />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <FooterSection />
      <BottomNavigation />
      <InstallPrompt />
      <FloatingWhatsApp />
      {/* <SlidingAnnouncementPopup />
      <VersionToast /> */}
    </div>
  )
}
