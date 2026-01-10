"use client"

import ScrollReveal from "./scroll-reveal"
import { Mail } from "lucide-react"

export default function GetInTouch() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@carelifefoundation.com"
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or want to learn more about our programs? We'd love to hear from you. Send us an email and
              we'll get back to you as soon as possible.
            </p>

            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Send us an Email
            </button>

            <p className="text-muted-foreground text-sm mt-6">
              Email:{" "}
              <a href="mailto:info@carelifefoundation.com" className="text-primary hover:underline">
                info@carelifefoundation.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
