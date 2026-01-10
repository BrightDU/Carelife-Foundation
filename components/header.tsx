"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useThemeOptional } from "@/lib/theme-context"
import lo from "../public/carelife.jpg"

const programmes = [
  { label: "Maternal, Child and Adolescent Care", href: "/programmes/maternal-child-care" },
  { label: "Life Skills", href: "/programmes/life-skills" },
  { label: "Community Development", href: "/programmes/community-development" },
  { label: "Health Intervention", href: "/programmes/health-intervention" },
  { label: "Education Intervention", href: "/programmes/education-intervention" },
  { label: "Advocacy", href: "/programmes/advocacy" },
]

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  {
    label: "Our Programmes",
    submenu: programmes,
  },
  { href: "/deh", label: "Digital Empowerment Hub (DEH)" },
  { href: "/bts", label: "Behind the Scene (BTS)" },
  { href: "/gallery", label: "Gallery" },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const themeContext = useThemeOptional()

  useEffect(() => {
    setMounted(true)
    if (themeContext) {
      setTheme(themeContext.theme)
    }
  }, [themeContext])

  const handleToggleTheme = () => {
    if (themeContext) {
      themeContext.toggleTheme()
      setTheme(themeContext.theme === "light" ? "dark" : "light")
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary/90 transition-colors">
            C
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">CareLife</span>
        </Link> */}
        {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">
              <Image src={lo} alt="Logo" width={143} height={40} className="object-contain" />
            </Link>
          </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = "href" in item && pathname === item.href
            return (
              <div key={item.label} className="relative group">
                {"submenu" in item ? (
                  <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-1 group">
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {"submenu" in item && (
                  <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-primary hover:text-primary-foreground first:rounded-t-lg last:rounded-b-lg transition-colors border-b border-border last:border-b-0"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle theme"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          {/* Donate Button - Desktop */}
          <Link
            href="/donate"
            className="hidden lg:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md flex-shrink-0"
          >
            Donate
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 absolute ${
                  isOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-0.5 w-6 bg-foreground transition-all duration-300 absolute bottom-0 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = "href" in item && pathname === item.href
              return (
                <div key={item.label}>
                  {"submenu" in item ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(!openSubmenu)}
                        className="w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:bg-accent hover:text-accent-foreground flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${openSubmenu ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openSubmenu && (
                        <div className="bg-accent/10 rounded-md ml-2 overflow-hidden animate-in fade-in slide-in-from-top-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              onClick={() => {
                                setIsOpen(false)
                                setOpenSubmenu(false)
                              }}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors block ${
                        isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-center text-sm mt-2"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
