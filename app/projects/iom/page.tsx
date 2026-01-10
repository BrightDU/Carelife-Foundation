"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import Image1 from "../../../public/gallery/74.jpg"
import Image2 from "../../../public/gallery/57.jpg"

export default function IOMProjectPage() {
  const downloadPDF = () => {
    const pdfUrl = "/iom-project-summary.pdf"
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "IBOM-Open-Maternity-Project-Summary.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal animation="fade-in-up">
            <div className="mb-12">
              <Link
                href="/projects"
                className="text-primary hover:underline text-sm font-semibold mb-4 inline-flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">IBOM Open Maternity (IOM) Project</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Bridging the gap in maternal healthcare access across Akwa Ibom State through innovative community-based
                initiatives and health system strengthening.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
                <p className="text-foreground mb-4">
                  The IBOM Open Maternity Project is a strategic initiative designed to improve maternal health outcomes
                  across Akwa Ibom State. Through collaborative partnerships with government, community organizations,
                  and healthcare facilities, we've implemented comprehensive strategies to address maternal mortality
                  and morbidity.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our approach combines community education, healthcare worker training, facility strengthening, and
                  emergency referral support to ensure every pregnant woman has access to quality maternal healthcare
                  services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scale-in" delay={200}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20 overflow-hidden">
                <img
                  src={Image1.src}
                  alt="IBOM Open Maternity Project"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ScrollReveal animation="scale-in" delay={100}>
              <div className="bg-primary/10 rounded-lg h-96 flex items-center justify-center border border-primary/20 overflow-hidden">
                <img
                  src={Image2.src}
                  alt="Maternal Healthcare Training"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="bg-card rounded-lg p-8 border border-border h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Community Impact</h2>
                <p className="text-foreground mb-4">
                  Our maternal healthcare initiatives have transformed lives across Akwa Ibom State. We've established
                  strong partnerships with government health facilities and community organizations to ensure
                  sustainable impact.
                </p>
                <p className="text-muted-foreground">
                  From training healthcare workers to conducting community awareness programs, every intervention is
                  designed with community input and tailored to local needs for maximum effectiveness and cultural
                  appropriateness.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Key Components</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary">1.</span>
                    <span>Community Health Education</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive education programs on maternal health, antenatal care, safe delivery, and postnatal
                    care for women and their families.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary">2.</span>
                    <span>Healthcare Worker Training</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Capacity building programs for health workers including midwives, nurses, and community health
                    volunteers on evidence-based maternal care.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary">3.</span>
                    <span>Facility Strengthening</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Support for healthcare facilities to improve maternal and newborn care services through equipment,
                    supplies, and infrastructure improvements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary">4.</span>
                    <span>Emergency Referral Support</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Establishment of functional referral pathways and transport support for pregnant women requiring
                    emergency obstetric care.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up">
            <div className="bg-card rounded-lg p-8 border border-border mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Impact Achieved</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">8000+</p>
                  <p className="text-muted-foreground">Pregnant Women Reached</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Safe Deliveries Supported</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">500+</p>
                  <p className="text-muted-foreground">Health Workers Trained</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">10+</p>
                  <p className="text-muted-foreground">Facilities Strengthened</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadPDF}
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Project Summary PDF
              </button>
              <Link
                href="https://web.facebook.com/TeamCarelife/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                Learn More on Facebook
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </LayoutWrapper>
  )
}
