"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import dehImage1 from "../../public/gallery/84.jpg"
import dehImage2 from "../../public/gallery/digitalten.webp"
import dehImage3 from "../../public/gallery/89.jpg"
import dehImage4 from "../../public/gallery/82.jpg"

export default function DEHPage() {
  const sections = [
    {
      title: "Digital Empowerment Hub (DEH)",
      description:
        "Digital Empowerment for Youths and Middle-Aged In today's fast-paced digital world, equipping youths and middle-aged individuals with essential digital skills is crucial for personal and professional growth. Digital empowerment fosters innovation, enhances career opportunities, and bridges the gap between technology and everyday life. By providing access to digital tools, training, and resources, we enable individuals to adapt, thrive, and contribute meaningfully to society. Whether it's coding, digital marketing, data analytics, or entrepreneurship, digital literacy opens doors to endless possibilities, ensuring a more inclusive and progressive future for all.",
      image: dehImage1,
      imagePosition: "left",
    },
    {
      title: "Digital Empowerment for Kids and Teens",
      description:
        "In today's digital world, equipping children with the right technological skills is crucial. Our program focuses on nurturing young minds, fostering creativity, and teaching essential digital skills. Through interactive lessons, mentorship, and hands-on projects, we prepare kids to thrive in the evolving tech landscape. This initiative ensures that no child is left behind in the digital age.",
      image: dehImage2,
      imagePosition: "right",
    },
    {
      title: "Digital Empowerment for Middle-Aged Adults",
      description:
        "In today's digital world, equipping middle-aged adults with the right technological skills is crucial. Our program focuses on nurturing adult minds, fostering creativity, and teaching essential digital skills. Through interactive lessons, mentorship, and hands-on projects, we prepare adults to thrive in the evolving tech landscape. This initiative ensures that no adult is left behind in the digital age.",
      image: dehImage3,
      imagePosition: "right",
    }
  ]

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-12 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={dehImage4}
            alt="Digital Empowerment Hub"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <ScrollReveal animation="fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Digital Empowerment Hub (DEH)</h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Transforming lives through digital skills and access to technology
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <section key={index} className={`py-16 md:py-24 ${index % 2 === 1 ? "bg-muted/30" : ""}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <ScrollReveal animation="fade-in-up">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">{section.title}</h2>
                </ScrollReveal>

                {section.imagePosition === "left" && section.image && (
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    <ScrollReveal animation="scale-in">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        width={500}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </ScrollReveal>
                    <ScrollReveal animation="fade-in-up">
                      <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                        {section.description}
                      </p>
                    </ScrollReveal>
                  </div>
                )}

                {section.imagePosition === "right" && section.image && (
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    <ScrollReveal animation="fade-in-up">
                      <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                        {section.description}
                      </p>
                    </ScrollReveal>
                    <ScrollReveal animation="scale-in">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        width={500}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                    </ScrollReveal>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join Our Digital Revolution</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Be part of the change. Learn digital skills, transform your life, and help others do the same.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Enroll Now
                  </button>
                  <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
