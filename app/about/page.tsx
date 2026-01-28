"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import image1 from "../../public/gallery/carelife-team-1.jpg"
import image2 from "../../public/gallery/carelife-beneficiaries.jpg"

export default function AboutPage() {
  const programCards = [
    {
      title: "Maternal and Child Care",
      description: "Our health programs focus on providing essential prenatal and postnatal care (PMNCH)...",
    },
    {
      title: "Adolescent Care",
      description: "We address adolescent health issues, including mental health and sexual reproductive health...",
    },
    {
      title: "Life Skills",
      description: "Our programs help build confidence and self-sufficiency for our target population...",
    },
    {
      title: "Digital Empowerment Hub (DEH)",
      description: "Our Digital Empowerment Hub aims to support young individuals in underserved communities...",
    },
  ]

  const teamMembers = [
    { name: "ANIEKEME GEORGE", role: "FOUNDER" },
    { name: "SYLVESTER EBONG", role: "MEMBER OF BOARD" },
    { name: "EMMANUEL MORGAN", role: "MEMBER OF BOARD" },
    { name: "FAITH EBERECHT", role: "OPERATIONS MANAGER" },
  ]

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-12 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image src="gallery/about-hero-image.jpg" alt="About Us Hero" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <ScrollReveal animation="fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">About Us</h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Our Comprehensive Support for Every Stage of Growth
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 items-center max-w-5xl mx-auto">
              <div className="grid gap-12 md:grid-cols-2">
                  <ScrollReveal animation="fade-in-up">
                  <Image 
                    src={image1}
                    alt="Our Story"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </ScrollReveal>
                <ScrollReveal animation="fade-in-up">
                  <Image 
                    src={image2}
                    alt="Our Story"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </ScrollReveal>
              </div>
              <ScrollReveal animation="fade-in-up">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What We Do</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At Carelife Foundation, our intervention and life skills projects are designed to help early lives transition into adulthood with a positive outlook. These programs are evidence-based, informed by in-depth research conducted by our team to identify real needs and develop the most effective strategies to address them.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We employ a bottom-up approach, engaging the family and immediate community as key stakeholders and decision-makers in identifying problems interfering with a child's proper growth and development and crafting solutions to address these needs. This inclusive strategy ensures that our interventions are practical, relevant, and family-driven.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                   Our work begins at the foundation of life, with our footprint at every critical development phase—from pregnancy and childbirth to childhood, adolescence, and young adulthood. By supporting growth and equipping young people with essential skills, we aim to foster holistic development and prepare them for a productive, positive future.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our charity's social impacts are research-driven and focus on reaching underserved populations, particularly those in slums and remote communities. These efforts address key thematic areas such as Maternal and Child Health, Safe Delivery Services, Nutrition and Early Childhood (Neuro)development, Maternal Literacy, Education, Advocacy, Adolescent Sexual and Reproductive Health (ASRH), Life Skills Development, and Mentorship Programs. Additionally, our work extends to community development projects tailored to meet pressing needs that enhance child care and overall well-being.
                  </p>
                  <p  className="text-muted-foreground leading-relaxed">
                    We are actively advancing equitable access to digital empowerment through our Digital Empowerment Hub (DEH) program, designed to support young individuals in underserved communities who face systemic exclusion. This initiative equips them with the skills needed to participate in the digital economy, enhance their employability, and compete effectively in the global market. The DEH project's growing impact is evident through our cutting-edge partner hubs, mentorship programs, and the job opportunities available to our trainees.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Programs</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {programCards.map((card, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
                  <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="w-6 h-6 rounded bg-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* <div className="text-center mt-12">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Read More
              </button>
            </div> */}
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                THE BRAIN BEHIND CARELIFE
              </h2>
              <p className="text-center text-muted-foreground mb-12">Meet The Team</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-muted" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Have questions or want to partner with us? We'd love to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Send us an Email
                  </button>
                  <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                    Schedule a Call
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
