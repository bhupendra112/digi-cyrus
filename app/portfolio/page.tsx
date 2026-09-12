import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MovingMarquee } from "@/components/home/MovingMarquee";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { FAQ } from "@/components/home/FAQ";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Custom websites and apps built from scratch. Real projects for Indian brands—Skill Tallent, Dailiyo, Kumar Colonisers, KK Resorts, Love Lance Photography, MV Academy.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        tone="light"
        orbs
        title={
          <>
            Customized Development
            <br /> From Scratch
          </>
        }
        subtitle="We transform your unique ideas into powerful, scalable applications. Our team crafts tailor-made software solutions designed specifically for your business needs, from the first line of code to the final launch."
      />
      <MovingMarquee />
      <PortfolioGrid items={PORTFOLIO_ITEMS} />
      <FAQ />
    </>
  );
}
