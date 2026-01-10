"use client"

import Image from "next/image"
import ScrollReveal from "./scroll-reveal"

export default function PartnersSection() {
  const partners = [
    { name: "Partner 1", image: "/partners-logos/WHO.png" },
    { name: "Partner 2", image: "/partners-logos/unicef.WEBP" },
    { name: "Partner 3", image: "/partners-logos/HKI.png" },
    { name: "Partner 4", image: "/partners-logos/AKWA-IBOM.JPG" },
    { name: "Partner 5", image: "/partners-logos/KD.WEBP" },
    { name: "Partner 6", image: "/partners-logos/CrystalEdTech.WEBP" },
    { name: "Partner 7", image: "/partners-logos/AKS-Arise.png" },
    { name: "Partner 8", image: "/partners-logos/AKSHIA.JPEG" },
    { name: "Partner 9", image: "/partners-logos/AKSPHCDA.png" },
    { name: "Partner 10", image: "/partners-logos/ARRDEC Logo New.png" },
    { name: "Partner 11", image: "/partners-logos/CCCRN.JPEG" },
    { name: "Partner 12", image: "/partners-logos/GIFA Logo.JPG" },
    { name: "Partner 13", image: "/partners-logos/Intarel-01.png" },
    { name: "Partner 14", image: "/partners-logos/MSI_NG.png" },
    { name: "Partner 15", image: "/partners-logos/MWAN_AKS.png" },
    { name: "Partner 16", image: "/partners-logos/NPC_Logo.png" },
    { name: "Partner 17", image: "/partners-logos/NYSC.WEBP" },
    { name: "Partner 18", image: "/partners-logos/STILT-NG-LOGO.png" },
    { name: "Partner 19", image: "/partners-logos/TCI-logo.png" },
    { name: "Partner 20", image: "/partners-logos/UNFPA.png" },
    { name: "Partner 21", image: "/partners-logos/MSI_NG.png" },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with organizations committed to improving lives and making a lasting impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg flex items-center justify-center min-h-32">
                <div className="relative w-full h-20">
                  <Image src={partner.image || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
