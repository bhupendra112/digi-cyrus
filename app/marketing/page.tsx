import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MarketingContent } from "@/components/marketing/MarketingContent";
import { MARKETING_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Marketing that delivers real ROI. Growth strategy, funnel building, lead generation, and analytics for Indian startups and brands.",
};

export default function MarketingPage() {
  return (
    <>
      <PageHero
        title={MARKETING_PAGE.headline}
        subtitle={MARKETING_PAGE.subheadline}
      />
      <MarketingContent />
    </>
  );
}
