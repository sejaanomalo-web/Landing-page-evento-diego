import { BackgroundAtmosphere } from "@/components/layout/BackgroundAtmosphere";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Program } from "@/components/sections/Program";
import { Mentor } from "@/components/sections/Mentor";
import { SocialProof } from "@/components/sections/SocialProof";
import { Venue } from "@/components/sections/Venue";
import { Lots } from "@/components/sections/Lots";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloating } from "@/components/primitives/WhatsAppButton";

export default function Home() {
  return (
    <>
      <BackgroundAtmosphere />
      <WhatsAppFloating />
      <main className="lp-main">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Program />
        <div className="section-divider" />
        <Mentor />
        <div className="section-divider" />
        <SocialProof />
        <Venue />
        <div className="section-divider" />
        <Lots />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
