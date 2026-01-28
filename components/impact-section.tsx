// "use client"

// import ScrollReveal from "./scroll-reveal"
// import { Heart, Users, Home } from "lucide-react"
// import { useEffect, useRef, useState } from "react"

// export default function ImpactSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [displayValues, setDisplayValues] = useState({ donations: 0, volunteers: 0, homes: 0 })
//   const sectionRef = useRef(null)

//   const targetValues = {
//     donations: 1600000,
//     volunteers: 230,
//     homes: 10,
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.unobserve(entry.target)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (!isVisible) return

//     const duration = 2000
//     const startTime = Date.now()

//     const animate = () => {
//       const elapsed = Date.now() - startTime
//       const progress = Math.min(elapsed / duration, 1)

//       setDisplayValues({
//         donations: Math.floor(targetValues.donations * progress),
//         volunteers: Math.floor(targetValues.volunteers * progress),
//         homes: Math.floor(targetValues.homes * progress),
//       })

//       if (progress < 1) {
//         requestAnimationFrame(animate)
//       }
//     }

//     requestAnimationFrame(animate)
//   }, [isVisible])

//   const impacts = [
//     {
//       icon: Heart,
//       label: "Donations Received",
//       value: `${(displayValues.donations / 1000000).toFixed(1)}M+`,
//       color: "text-primary",
//     },
//     {
//       icon: Users,
//       label: "Children Under Care",
//       value: `${displayValues.volunteers}+`,
//       color: "text-primary",
//     },
//     { icon: Home, label: "Care Homes Established", value: `${displayValues.homes}+`, color: "text-primary" },
//   ]

//   return (
//     <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <ScrollReveal animation="fade-in-up">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Impact</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Together, we make a difference in millions of lives. Here's what we've achieved through dedicated effort
//               and community support.
//             </p>
//           </div>
//         </ScrollReveal>

//         <div className="grid md:grid-cols-3 gap-6 md:gap-8">
//           {impacts.map((impact, index) => {
//             const Icon = impact.icon
//             return (
//               <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
//                 <div className="bg-card rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors">
//                   <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4`}>
//                     <Icon className={`w-6 h-6 ${impact.color}`} />
//                   </div>
//                   <p className={`text-3xl md:text-4xl font-bold ${impact.color} mb-2 transition-all duration-300`}>
//                     {impact.value}
//                   </p>
//                   <p className="text-muted-foreground">{impact.label}</p>
//                 </div>
//               </ScrollReveal>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import ScrollReveal from "./scroll-reveal"
import { Users, Heart, FileText, Stethoscope, Package, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayValues, setDisplayValues] = useState({
    mothers: 0,
    children: 0,
    nutrition: 0,
    familyPlanning: 0,
    research: 0,
    kits: 0,
  })
  const sectionRef = useRef(null)

  const targetValues = {
    mothers: 5846,
    children: 11286,
    nutrition: 5049,
    familyPlanning: 831,
    research: 1569,
    kits: 1340,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setDisplayValues({
        mothers: Math.floor(targetValues.mothers * progress),
        children: Math.floor(targetValues.children * progress),
        nutrition: Math.floor(targetValues.nutrition * progress),
        familyPlanning: Math.floor(targetValues.familyPlanning * progress),
        research: Math.floor(targetValues.research * progress),
        kits: Math.floor(targetValues.kits * progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  const impacts = [
    {
      icon: Users,
      label: "Mothers & Children Reached",
      value: `${displayValues.mothers.toLocaleString()} & ${displayValues.children.toLocaleString()}`,
      description: "A total of 5846 mothers and 11,286 children directly reached",
      color: "text-primary",
    },
    {
      icon: Heart,
      label: "Nutrition Support",
      value: `${displayValues.nutrition.toLocaleString()}+`,
      description: "Pregnant mothers supplemented and children assessed for malnutrition",
      color: "text-primary",
    },
    {
      icon: Heart,
      label: "Family Planning Services",
      value: `${displayValues.familyPlanning.toLocaleString()}+`,
      description: "Users provided with access to different family planning methods",
      color: "text-primary",
    },
    {
      icon: FileText,
      label: "Research Conducted",
      value: `${displayValues.research.toLocaleString()}+`,
      description: "Respondents surveyed to understand community health needs",
      color: "text-primary",
    },
    {
      icon: Package,
      label: "Maternal Kits Distributed",
      value: `${displayValues.kits.toLocaleString()}+`,
      description: "Maternity and newborn kits provided to expectant mothers",
      color: "text-primary",
    },
    {
      icon: Stethoscope,
      label: "Ancillary Health Services",
      value: "4,356+",
      description: "Dermatology, ophthalmology, and health follow-up treatments",
      color: "text-primary",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
              Since our founding, CareLife Foundation has remained steadfast in our mission to improve the health and 
              wellbeing of vulnerable children and families. Through comprehensive healthcare initiatives, educational 
              programs, and community partnerships, we continue to create lasting positive change in the lives of thousands.
            </p>
            <p className="text-lg text-primary font-semibold max-w-3xl mx-auto">
              These numbers represent real lives transformed and futures brightened through compassion and dedication.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <ScrollReveal key={index} animation="scale-in" delay={index * 80}>
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className={`w-6 h-6 ${impact.color}`} />
                  </div>
                  <p className={`text-2xl md:text-3xl font-bold ${impact.color} mb-2 transition-all duration-300`}>
                    {impact.value}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{impact.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{impact.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
