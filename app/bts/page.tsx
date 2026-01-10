"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import image1 from "../../public/btsaboutsection.jpg"

export default function BTSPage() {
  const hallOfFame = [
    { name: "XXXXXXXXX", role: ".......", image: "/member1.png" },
    { name: "XXXXXXXXX", role: ".......", image: "/member2.png" },
    { name: "XXXXXXXXX", role: ".......", image: "/member3.png" },
    { name: "XXXXXXXXX", role: ".......", image: "/member4.png" },
  ]

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-12 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <Image src="/btsheroimg.png" alt="Behind the Scene" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <ScrollReveal animation="fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Behind The Scene (BTS)</h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  "At Carelife Character Foundation, our 'BTS' Project celebrates unsung heroes behind success. We honor
                  their dedication and empower them to mentor younger adults."
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* About BTS Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal animation="fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About BTS</h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <ScrollReveal animation="scale-in">
                  <Image
                    src={image1}
                    alt="BTS Project"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </ScrollReveal>

                <ScrollReveal animation="fade-in-up">
                  <div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The BTS Project recognizes the unsung heroes who, although not always visible, form the backbone of celebrated brands and initiatives. These behind-the-scenes contributors drive projects forward, ensuring their success and sustainability while often going unrecognized. The project is aimed at beaming the spotlight on these rare personalities, dedicated to highlighting their vital roles, emphasizing their contributions to organizational and community development, and celebrating their efforts in shaping success stories.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                     By spotlighting these individuals, the BTS Project will boost morale, inspire confidence, while enhancing organizational and brand visibility. It also encourages skills development, fosters mentorship, and promotes networking opportunities, enabling professional growth for these key players. The initiative also redefines success metrics by shifting the focus from outcomes to processes and the diverse skill sets that underpin them, fostering a culture of appreciation and acknowledgment of the BTS person.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our search for the BTS persons will identify individuals from different sectors of the economy from various sectors, including governance, charities, entertainment, SMEs, education, CSOs, MDAs, and community volunteer services. Identified individuals will be selected through public nominations and recommendations, subject to our internal reviews and public voting. Recognitions will be through routine social media features, culminating in the annual “BTS Face of the Year” awards and induction into the prestigious BTS Hall of Fame. This initiative will drive youth empowerment, workforce development, and mentorship, cultivating a culture of excellence and recognition for behind-the-scenes contributors.
                    </p>
                    <p><h1>JOIN US IN THE SEARCH TODAY!</h1></p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">THE BTS HALL OF FAME</h2>
              <p className="text-center text-muted-foreground mb-12">Meet Our Recognized Heroes</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {hallOfFame.map((member, index) => (
                <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                  <div className="text-center">
                    {/* <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-muted to-muted/50 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-lg bg-muted" />
                    </div> */}
                    <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                    <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nomination CTA Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Do you know a Behind The Scene Worker?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">Let's bring them to Prominence.</p>

                <div className="flex flex-col items-center gap-4">
                  <p className="text-muted-foreground">Click here to nominate</p>
                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    NOMINATE/RECOMMEND
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section> */}
        <div className="relative w-full h-[583px] mb-[-50px] flex flex-col justify-center items-center text-center mt-16">
        <Image
          src={image1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full sm:w-[870.35px] h-full bg-transparent flex flex-col justify-center items-center text-white mx-auto">
            <h1 className="text-[18px] font-roboto leading-[1.5] text-[#FFFFFF] font-bold sm:text-[25px] md:text-[45px] sm:leading-[1.3] font-semibold mt-8 mb-6 sm:mb-10">
              Do you know a Behind The Scene Worker? Let&apos;s bring them to Prominence.
            </h1>

            {/* Added text and arrow animation */}
            <div className="mb-6">
              <p className="text-[#003871] font-semibold text-[16px] font-roboto">Click here to</p>
              <div className="mt-2 animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-white mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <a
              href="mailto:info@carelifefoundation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[210px] bg-[#FFFFFF] font-roboto font-medium text-[16px] h-[55px] w-[130px] text-[#1D2130] mt-[-8px] rounded-[46px] hover:bg-[#003871] hover:text-white flex justify-center items-center text-center"
            >
              NOMINATE/RECOMMEND
            </a>
          </div>
        </div>
      </div>
      </div>
    </LayoutWrapper>
  )
}
