"use client"

import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Community Outreach",
      description:
        "Our team engaging directly with communities to provide healthcare education and awareness programs.",
      image: "/gallery/1.jpg",
    },
    {
      title: "Her Excellency with Our Team member",
      description: "Our team presenting a donation to Her Excellency, the First Lady of Akwa Ibom State.",
      image: "/gallery/14.jpg",
    },
    { 
      title: "Health Support",
      description: "Health screening and checkup clinics providing preventive and diagnostic healthcare services.",
      image: "/gallery/64.jpg",
    },
    {
      title: "IBOM Project Road Walk",
      description: "Road Walk with her Excellency, during the IBOM Project launch in Uyo, Akwa Ibom State.",
      image: "/gallery/71.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each image is a testament to the collective efforts of our dedicated volunteers, partners, and supporters.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
              <div className="relative group overflow-hidden rounded-xl h-72 md:h-80 cursor-pointer">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                  <div className="w-full text-left">
                    <p className="text-white font-bold text-lg">{item.title}</p>
                    <p className="text-white/80 text-xs mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up">
          <div className="flex justify-center">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg inline-block"
            >
              See More Gallery
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
