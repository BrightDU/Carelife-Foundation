"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    // {
    //   title: "Digital Empowerment Hub (DEH)",
    //   description:
    //     "Transforming lives through digital skills and access to technology. Successfully trained over 2,000 trainees achieving digital equity and fluency.",
    //   icon: "💻",
    //   href: "/deh",
    //   pdfPath: "/deh-project-summary.pdf",
    //   highlights: ["2000+ Trainees", "Digital Literacy", "Tech Skills"],
    // },
    // {
    //   title: "Behind the Scene (BTS)",
    //   description:
    //     "Celebrating and empowering unsung heroes who drive success. Recognizing contributions and mentoring the next generation of leaders.",
    //   icon: "🌟",
    //   href: "/bts",
    //   pdfPath: "/bts-project-summary.pdf",
    //   highlights: ["Hero Recognition", "Mentorship", "Leadership"],
    // },
    {
      title: "IBOM Open Maternity (IOM)",
      description:
        "Bridging the gap in maternal healthcare access across Akwa Ibom State. Improving maternal health outcomes through community-based initiatives and health system strengthening.",
      icon: "👶",
      href: "/projects/iom",
      pdfPath: "/iom-project-summary.pdf",
      highlights: ["Maternal Health", "Community Care", "Healthcare"],
    },
    // {
    //   title: "Maternal & Child Care",
    //   description:
    //     "Providing comprehensive prenatal, postnatal, and early childhood development support ensuring every child enters adulthood with hope.",
    //   icon: "👶",
    //   href: "/programmes/maternal-child-care",
    //   pdfPath: "/maternal-care-summary.pdf",
    //   highlights: ["Healthcare", "Nutrition", "Development"],
    // },
    // {
    //   title: "Adolescent Care",
    //   description:
    //     "Addressing adolescent health issues including mental health and sexual reproductive health through evidence-based interventions.",
    //   icon: "👨",
    //   href: "/programmes/life-skills",
    //   pdfPath: "/adolescent-care-summary.pdf",
    //   highlights: ["Mental Health", "Health Education", "Support"],
    // },
    // {
    //   title: "Life Skills",
    //   description:
    //     "Building confidence and self-sufficiency for young individuals preparing them for the transition to independent adulthood.",
    //   icon: "🎯",
    //   href: "/programmes/life-skills",
    //   pdfPath: "/life-skills-summary.pdf",
    //   highlights: ["Confidence", "Independence", "Empowerment"],
    // },
    // {
    //   title: "Community Development",
    //   description:
    //     "Strengthening communities through sustainable development programs and local partnerships creating lasting positive change.",
    //   icon: "🤝",
    //   href: "/programmes/community-development",
    //   pdfPath: "/community-dev-summary.pdf",
    //   highlights: ["Community", "Sustainability", "Partnerships"],
    // },
    // {
    //   title: "Health Intervention",
    //   description:
    //     "Addressing critical health challenges through targeted interventions, health education, and disease prevention initiatives.",
    //   icon: "⚕️",
    //   href: "/programmes/health-intervention",
    //   pdfPath: "/health-intervention-summary.pdf",
    //   highlights: ["Disease Prevention", "Health Awareness", "Care Support"],
    // },
  ]

  const downloadPDF = (pdfPath: string, projectTitle: string) => {
    const link = document.createElement("a")
    link.href = pdfPath
    link.download = `${projectTitle.replace(/\s+/g, "-")}-summary.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-12 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Projects</h1>
                <p className="text-lg text-muted-foreground">
                  Transforming lives through comprehensive programs designed to empower every child and community
                  member.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                  <div className="bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 p-8 h-full flex flex-col group">
                    <div className="text-5xl mb-4">{project.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <Link
                        href={project.href}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => downloadPDF(project.pdfPath, project.title)}
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors w-full"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Impact</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "230+", label: "Children Under Care" },
                { value: "2000+", label: "Trainees Equipped" },
                { value: "40+", label: "Volunteers Strong" },
                { value: "10+", label: "Care Homes" },
              ].map((stat, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
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
