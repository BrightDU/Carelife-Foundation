"use client"

import Image from "next/image"
import ScrollReveal from "./scroll-reveal"

export default function PartnersSection() {
  const partners = [
    { name: "Partner 1", image: "/partners-logos/WHO.png" },
    { name: "Partner 3", image: "/partners-logos/HKI.png" },
    { name: "Partner 4", image: "/partners-logos/AKWA-IBOM.JPG" },
    // { name: "Partner 5", image: "/partners-logos/KD.WEBP" },
    // { name: "Partner 6", image: "/partners-logos/CrystalEdTech.WEBP" },
    { name: "Partner 7", image: "/partners-logos/AKS-Arise.png" },
    { name: "Partner 8", image: "/partners-logos/AKSHIA.JPEG" },
    { name: "Partner 9", image: "/partners-logos/AKSPHCDA.png" },
    // { name: "Partner 10", image: "/partners-logos/ARRDEC-Logo-New.png" },
    // { name: "Partner 11", image: "/partners-logos/CCCRN.JPEG" },
    // { name: "Partner 12", image: "/partners-logos/GIFA-Logo.JPG" },
    { name: "Partner 13", image: "/partners-logos/Intarel-01.png" },
    { name: "Partner 14", image: "/partners-logos/MSI_NG.png" },
    { name: "Partner 15", image: "/partners-logos/MWAN_AKS.png" },
    { name: "Partner 16", image: "/partners-logos/NPC_Logo.png" },
    // { name: "Partner 17", image: "/partners-logos/NYSC.WEBP" },
    { name: "Partner 18", image: "/partners-logos/STILT-NG-LOGO.png" },
    { name: "Partner 19", image: "/partners-logos/TCI-logo.png" },
    { name: "Partner 20", image: "/partners-logos/UNFPA.png" },
    { name: "Partner 21", image: "/partners-logos/MSI_NG.png" },
  ]

 return (
    // <section className="py-16 md:py-24 bg-muted/30">
    //   <div className="container mx-auto px-4">
    //     <ScrollReveal animation="fade-in-up">
    //       <div className="text-center mb-12">
    //         <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
    //           Our Partners
    //         </h2>
    //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //           We collaborate with organizations committed to improving lives and making a lasting impact.
    //         </p>
    //       </div>
    //     </ScrollReveal>

    //     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
    //       {partners.map((partner, index) => (
    //         <ScrollReveal key={partner.name} animation="scale-in" delay={index * 40}>
    //           <div className="bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md flex items-center justify-center h-24 md:h-28 max-w-[180px] mx-auto">
    //             <div className="relative w-full h-16 md:h-20 px-4">
    //               <Image
    //                 src={partner.image}
    //                 alt={partner.name}
    //                 fill
    //                 sizes="(max-width: 768px) 120px, 160px"
    //                 className="object-contain"
    //               />
    //             </div>
    //           </div>
    //         </ScrollReveal>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with organizations committed to improving lives and making a lasting impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 items-center">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} animation="scale-in" delay={index * 40}>
              <div className="flex items-center justify-center">
                <div className="relative h-14 md:h-16 lg:h-18 w-full max-w-[160px]">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 120px, 160px"
                    className="object-contain transition duration-300"
                  />
                  {/* className="object-contain grayscale hover:grayscale-0 transition duration-300" */}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
