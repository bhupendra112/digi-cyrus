import { Hero } from "@/components/home/Hero";
import { TrustIndicator } from "@/components/home/TrustIndicator";
import { CoreServices } from "@/components/home/CoreServices";
import { WhyDigiCyrus } from "@/components/home/WhyDigiCyrus";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicator />
      <CoreServices />
      <WhyDigiCyrus />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
