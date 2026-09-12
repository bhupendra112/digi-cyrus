import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MovingMarquee } from "@/components/home/MovingMarquee";
import { MarketingContent } from "@/components/marketing/MarketingContent";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { MARKETING_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Marketing portfolio for Indian brands — KK Resorts, ZippyMeds, Trinity Real Estate, Chihar Group, and MV Academy.",
};

export default function MarketingPage() {
  return (
    <>
      <PageHero
        tone="light"
        orbs
        title={
          <>
            Digital Marketing for
            <br /> Startups
          </>
        }
        subtitle={MARKETING_PAGE.subheadline}
      />
      <MovingMarquee />
      <MarketingContent />
      <Testimonials />
      <FAQ />
    </>
  );
}
