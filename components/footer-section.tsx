"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import lo from "../public/newfooterlogo.png"

export default function FooterSection() {
  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/families-mothers-children-support.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Change Lives with Your Generosity
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Your support can make a world of difference. Donate today and bring hope to those in need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/donate"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg inline-block text-center"
                >
                  Donate Now
                </Link>
                <a
                  href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block text-center"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Logo */}
                <div className="flex items-center">
                  <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">
                    <Image src={lo} alt="Logo" width={143} height={40} className="object-contain" />
                  </Link>
                </div>
                
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Carelife Character Foundation is a registered Non-profit organisation incorporated in 2016.
              </p>
              {/* Social Media */}
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.x.com/teamcarelife"
                  className="hover:text-primary-foreground/70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/TeamCarelife/"
                  className="hover:text-primary-foreground/70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/carelifefoundation/"
                  className="hover:text-primary-foreground/70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/104742373/"
                  className="hover:text-primary-foreground/70 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:+2349121800058" className="hover:text-primary-foreground/80 transition-colors">
                    +234 912 180 0058
                  </a>
                  <br />
                  <a href="tel:+2340772438010" className="hover:text-primary-foreground/80 transition-colors">
                    +44-0772438010
                  </a>
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:info@carelifefoundation.com"
                    className="hover:text-primary-foreground/80 transition-colors block"
                  >
                    info@carelifefoundation.com
                  </a>
                  <a
                    href="mailto:bts@carelifefoundation.com"
                    className="hover:text-primary-foreground/80 transition-colors text-xs"
                  >
                    (BTS Project)
                  </a>
                </div>
              </div>
            </div>

            {/* Home Menu */}
            <div>
              <h4 className="font-semibold mb-4">Home</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-primary-foreground/80 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
                    What We Do
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Menu */}
            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/donate" className="hover:text-primary-foreground/80 transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-primary-foreground/80 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/TeamCarelife/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground/80 transition-colors"
                  >
                    Volunteer Or Partner With Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Address Section */}
          <div className="border-t border-primary-foreground/20 pt-8 mb-8">
            <h4 className="font-semibold mb-4">Address</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-primary-foreground/90">
              <div>
                <p className="font-medium text-white mb-1">HQ</p>
                <p>222 Ekpri Nsukara Estate, Uyo, Nigeria.</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Mailing Address</p>
                <p>5 Garba Abbas Road, TMC Complex, Barnawa Kaduna, Nigeria.</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Foreign Mission</p>
                <p>36 Poundway, OXFORD, ENGLAND, OX4 3XX.</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
              <p>&copy; 2025 Carelife Character Foundation.</p>
              <p className="text-right"><a href="https://www.crystaledtech.com" target="_blank">Developed by Crystal EdTech</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
