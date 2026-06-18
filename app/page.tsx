import { FloatingNav } from "@/components/nav/floating-nav";
import { TideProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero/hero";
import { ClipReveal } from "@/components/sections/clip-reveal";
import { ParadigmShift } from "@/components/sections/paradigm-shift";
import { Heritage } from "@/components/sections/heritage";
import { ExperienceSpread } from "@/components/sections/experience-spread";
import { Features } from "@/components/sections/features";
import { FleetGallery } from "@/components/sections/fleet-gallery";
import { Occasions } from "@/components/sections/occasions";
import { WinterSale } from "@/components/sections/winter-sale";
import { SocialMarquee } from "@/components/sections/social-marquee";
import { EnquireCta } from "@/components/sections/enquire-cta";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <TideProgress />
      <FloatingNav />
      <main>
        <Hero />
        <ClipReveal />
        <ParadigmShift />
        <Heritage />
        <ExperienceSpread />
        <Features />
        <FleetGallery />
        <Occasions />
        <WinterSale />
        <SocialMarquee />
        <EnquireCta />
      </main>
      <Footer />
    </>
  );
}
