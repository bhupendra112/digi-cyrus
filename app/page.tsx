import { Hero } from "@/components/home/Hero";
import { CoreServices } from "@/components/home/CoreServices";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { SocialPresence } from "@/components/home/SocialPresence";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { MovingMarquee } from "@/components/home/MovingMarquee";
import { Testimonials } from "@/components/home/Testimonials";
import { TeamShowcase } from "@/components/home/TeamShowcase";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreServices />
      <ProductShowcase />
      <SocialPresence />
      <PortfolioPreview />
      <MovingMarquee />
      <Testimonials />
      <TeamShowcase />
      <FAQ />
    </>
  );
}
