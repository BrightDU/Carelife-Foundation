// import LayoutWrapper from "@/components/layout-wrapper"
// import HeroCarousel from "@/components/hero-carousel"
// import MissionSection from "@/components/mission-section"
// import ImpactSection from "@/components/impact-section"
// import CoreValuesSection from "@/components/core-values-section"
// import VideoSection from "@/components/video-section"
// import QuoteSection from "@/components/quote-section"
// import GallerySection from "@/components/gallery-section"
// import TestimonialsSection from "@/components/testimonials-section"
// import PartnersSection from "@/components/partners-section"
// import GetInTouch from "@/components/get-in-touch"

// export default function Home() {
//   return (
//     <LayoutWrapper>
//       <HeroCarousel />
//       <MissionSection />
//       <ImpactSection />
//       <CoreValuesSection />
//       <VideoSection />
//       <QuoteSection />
//       <GallerySection />
//       {/* <TestimonialsSection /> */}
//       <PartnersSection />
//       <GetInTouch />
//     </LayoutWrapper>
//   )
// }
import LayoutWrapper from "@/components/layout-wrapper"
import HeroCarousel from "@/components/hero-carousel"
import MissionSection from "@/components/mission-section"
import ImpactSection from "@/components/impact-section"
import CoreValuesSection from "@/components/core-values-section"
import VideoSection from "@/components/video-section"
import QuoteSection from "@/components/quote-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import GetInTouch from "@/components/get-in-touch"
import SlidingAnnouncementPopup from "@/components/sliding-announcement-popup"
import VersionToast from "@/components/version-toast"

export default function Home() {
  return (
    <LayoutWrapper>
      <HeroCarousel />
      <MissionSection />
      <ImpactSection />
      <CoreValuesSection />
      <VideoSection />
      <QuoteSection />
      <GallerySection />
      <PartnersSection />
      <GetInTouch />
      <SlidingAnnouncementPopup />
      <VersionToast />
    </LayoutWrapper>
  )
}
