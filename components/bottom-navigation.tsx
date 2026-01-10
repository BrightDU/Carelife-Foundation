"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Home, Users, Briefcase, ImageIcon } from "lucide-react"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: Users, label: "About" },
  { href: "/projects", icon: Briefcase, label: "Projects" },
  { href: "/gallery", icon: ImageIcon, label: "Gallery" },
  { href: "/donate", icon: Heart, label: "Donate" },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg md:hidden z-30">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                isActive ? "text-primary border-t-2 border-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1 text-center">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
