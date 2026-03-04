import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Websites, Play Store & App Store apps, and design. Real projects for Indian brands—Skill Tallent, Dailiyo, Kumar Colonisers, KK Resorts, Love Lance Photography, MV Academy.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Websites, Android & iOS apps, and design for Indian startups and brands. Trusted by growing businesses."
      />
      <PortfolioGrid items={PORTFOLIO_ITEMS} categories={PORTFOLIO_CATEGORIES} />
    </>
  );
}
