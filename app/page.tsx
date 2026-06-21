import { AnnouncementBar } from "@/components/nav/announcement-bar";
import { CursorDot } from "@/components/cursor/cursor-dot";
import { FloatingNav } from "@/components/nav/floating-nav";
import { TideProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero/hero";
import { ClipReveal } from "@/components/sections/clip-reveal";
import { Heritage } from "@/components/sections/heritage";
import { ContainerScrollSection } from "@/components/sections/container-scroll-section";
import { ExperienceSpread } from "@/components/sections/experience-spread";
import { Features } from "@/components/sections/features";
import { FleetGallery } from "@/components/sections/fleet-gallery";
import { Occasions } from "@/components/sections/occasions";
import { WinterSale } from "@/components/sections/winter-sale";
import { Reviews } from "@/components/sections/reviews";
import { SocialMarquee } from "@/components/sections/social-marquee";
import { CtaBanner } from "@/components/sections/cta-banner";
import { EnquireCta } from "@/components/sections/enquire-cta";
import { Footer } from "@/components/footer/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <CursorDot />
      <TideProgress />
      <FloatingNav />
      <main>
        <Hero />
        <ClipReveal />
        <Heritage />
        <ContainerScrollSection />
        <Features />
        <ExperienceSpread />
        <FleetGallery />
        <Occasions />
        <WinterSale />
        <Reviews />
        <SocialMarquee />
        <CtaBanner />
        <EnquireCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
