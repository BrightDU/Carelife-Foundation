"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Health Support",
      description:
        "Comprehensive health screening and medical checkup clinics ensuring preventive care and early disease detection in underserved communities.",
      image: "/gallery/55.jpg",
    },
    {
      title: "Community Outreach",
      description:
        "Our dedicated team members engaging directly with community members to provide health education, awareness programs, and support services.",
      image: "/gallery/1.jpg",
    },
    {
      title: "Community Outreach",
      description:
        "Our dedicated team members engaging directly with community members to provide health education, awareness programs, and support services.",
      image: "/gallery/40.jpg",
    },
    {
      title: "Care Homes",
      description:
        "Safe, nurturing environments providing residential care, daily support, and developmental opportunities for children in need.",
      image: "/gallery/21.jpg",
    },
    {
      title: "IBOM Outreach Road Walk",
      description:
        "Road Walk with her Excellency, during the IBOM Project launch in Uyo, Akwa Ibom State.",
      image: "/gallery/72.jpg",
    },
    {
      title: "Family Support",
      description:
        "Family-centered programs strengthening bonds and providing holistic support for mothers, children, and entire family units.",
      image: "/gallery/22.jpg",
    },
    {
      title: "Education Program",
      description:
        "Engaging educational sessions fostering critical thinking, creativity, and lifelong learning among vulnerable children and youth.",
      image: "/gallery/10.jpg",
    },
    {
      title: "Community Outreach",
      description:
        "Our team members engaging directly with community members to provide maternal education, awareness programs, and support services.",
      image: "/gallery/37.jpg",
    },
    {
      title: "Family Support",
      description:
        "Family-centered programs strengthening bonds and providing holistic support for mothers, children, and entire family units.",
      image: "/gallery/34.jpg",
    },
    {
      title: "Education Program",
      description:
        "Engaging educational sessions fostering critical thinking, creativity, and lifelong learning among vulnerable children and youth.",
      image: "/gallery/14.jpg",
    },{
      title: "Community Outreach",
      description:
        "Our team members engaging directly with community members to provide maternal education, awareness programs, and support services.",
      image: "/gallery/66.jpg",
    },
    {
      title: "Education Program",
      description:
        "Engaging educational sessions fostering critical thinking, creativity, and lifelong learning among vulnerable children and youth.",
      image: "/gallery/9.jpg",
    },
    {
      title: "Family Support",
      description:
        "Family-centered programs strengthening bonds and providing holistic support for mothers, children, and entire family units.",
      image: "/gallery/8.jpg",
    },
    {
      title: "Education Program",
      description:
        "Engaging educational sessions fostering critical thinking, creativity, and lifelong learning among vulnerable children and youth.",
      image: "/gallery/52.jpg",
    },{
      title: "Community Outreach",
      description:
        "Our team members engaging directly with community members to provide maternal education, awareness programs, and support services.",
      image: "/gallery/13.jpg",
    },
    {
      title: "Family Support",
      description:
        "Family-centered programs strengthening bonds and providing holistic support for mothers, children, and entire family units.",
      image: "/gallery/44.jpg",
    },
    {
      title: "Digital Literacy Training",
      description:
        "Digital literacy training sessions empowering young individuals with essential digital skills for personal and professional growth, and entire family units.",
      image: "/gallery/84.jpg",
    },
    {
      title: "Digital Literacy Training",
      description:
        "Digital literacy training sessions empowering young individuals with essential digital skills for personal and professional growth, and entire family units.",
      image: "/gallery/88.jpg",
    },
  ]

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-12 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Gallery</h1>
                <p className="text-lg text-muted-foreground">
                  Visual moments showcasing the real impact of our work in communities across the region.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                  <div className="relative group overflow-hidden rounded-xl h-80 cursor-pointer">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="w-full">
                        <p className="text-white font-bold text-lg">{item.title}</p>
                        <p className="text-white/80 text-sm mt-2 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
