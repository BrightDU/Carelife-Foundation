"use client"

import { useRef, useEffect } from "react"

export default function PrivacyPolicyPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const sections = ref.current.querySelectorAll("section")
      sections.forEach((section) => {
        section.setAttribute("data-scroll", "true")
      })
    }
  }, [])

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl" ref={ref}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
          <p className="text-muted-foreground mb-4">
            CareLife Foundation ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
            including any other media form, media channel, mobile website, or mobile application related or connected to
            it (collectively, the "Site").
          </p>
          <p className="text-muted-foreground">
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do
            not use our Site.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Personal Information You Provide</h3>
              <p className="text-muted-foreground mb-2">We may collect information you provide directly, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Donation information and payment details</li>
                <li>Volunteer registration information</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Information Collected Automatically</h3>
              <p className="text-muted-foreground mb-2">
                When you access our Site, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage information (pages visited, time spent, links clicked)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Location information (with your consent)</li>
              </ul>
            </div>
          </div>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Processing donations and managing accounts</li>
            <li>Sending promotional communications and updates (with your consent)</li>
            <li>Improving our Site and services</li>
            <li>Responding to your inquiries and providing customer support</li>
            <li>Complying with legal obligations</li>
            <li>Protecting against fraud and ensuring security</li>
            <li>Analyzing trends and usage patterns</li>
          </ul>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Sharing Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We do not sell, trade, or rent your personal information to third parties. However, we may share your
            information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>With service providers who assist us in operating our Site and conducting our mission</li>
            <li>When required by law or to protect our legal rights</li>
            <li>With your explicit consent</li>
            <li>In the event of a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground mb-4">
            Our Site uses cookies and similar tracking technologies to enhance your experience, remember your
            preferences, and analyze usage patterns. You can control cookie settings through your browser. However,
            disabling cookies may affect the functionality of our Site.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
            internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Access: Request a copy of your personal information</li>
            <li>Correction: Correct inaccurate or incomplete information</li>
            <li>Deletion: Request deletion of your information (subject to legal obligations)</li>
            <li>Opt-out: Unsubscribe from marketing communications at any time</li>
            <li>Portability: Request your data in a portable format</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            To exercise these rights, please contact us at info@carelifefoundation.com.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our Site is not intended for children under 13 years of age. We do not knowingly collect personal
            information from children under 13. If we become aware that a child under 13 has provided us with personal
            information, we will take steps to delete such information and terminate the child's account. If you believe
            a child under 13 has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Third-Party Links</h2>
          <p className="text-muted-foreground">
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices of
            these external sites. We encourage you to review the privacy policies of any third-party websites before
            providing your personal information.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.
            The "Last updated" date at the top of this page indicates when the policy was last revised. Your continued
            use of our Site following the posting of revised Privacy Policy means you accept and agree to the changes.
          </p>
        </section>

        <section data-scroll="true" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">10. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="font-semibold text-foreground mb-2">CareLife Foundation</p>
            <p className="text-muted-foreground mb-1">Email: info@carelifefoundation.com</p>
            <p className="text-muted-foreground mb-1">Phone: +234-912-1800058</p>
            <p className="text-muted-foreground">Address: 222 Ekpri Nsukara Estate, Uyo, Nigeria</p>
          </div>
        </section>

        <section data-scroll="true" className="mb-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 CareLife Foundation. All rights reserved. This Privacy Policy is effective as of January 2026 and was
            last updated in January 2026.
          </p>
        </section>
      </div>
    </div>
  )
}
