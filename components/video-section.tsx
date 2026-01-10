// "use client"

// import ScrollReveal from "./scroll-reveal"

// export default function VideoSection() {
//   return (
//     <section className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <ScrollReveal animation="fade-in-up">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Work in Action</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Watch how we're making a difference in the lives of children and families across communities.
//             </p>
//           </div>
//         </ScrollReveal>

//         <ScrollReveal animation="scale-in">
//           <div className="max-w-4xl mx-auto">
//             <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-xl border border-border">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.facebook.com/reel/1746536732633961"
//                 title="CareLife Foundation Work"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   )
// }
"use client"

import ScrollReveal from "./scroll-reveal"

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Work in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how we're making a difference in the lives of children and families across communities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-in">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl border border-border bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1746536732633961&show_text=false&width=560&t=0"
                title="CareLife Foundation Work"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
