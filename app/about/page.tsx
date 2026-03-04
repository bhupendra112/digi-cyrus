import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AboutContent } from "@/components/about/AboutContent";
import { ABOUT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Digi Cyrus",
  description:
    "Mission, vision, and team. We empower Indian businesses with premium digital infrastructure and aim to become India's most trusted digital growth partner.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Digi Cyrus"
        subtitle="We build digital assets that help Indian brands dominate their markets."
      />
      <AboutContent />
    </>
  );
}
