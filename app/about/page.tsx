import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MovingMarquee } from "@/components/home/MovingMarquee";
import { AboutContent } from "@/components/about/AboutContent";
import { SocialPresence } from "@/components/home/SocialPresence";
import { TeamShowcase } from "@/components/home/TeamShowcase";
import { FAQ } from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mission, vision, and team. We empower Indian businesses with premium digital infrastructure and aim to become India's most trusted digital growth partner.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="light"
        orbs
        title="About Us"
        subtitle="From idea to launch, we design and develop tailor-made websites & apps that scale with your business."
      />
      <MovingMarquee />
      <AboutContent />
      <SocialPresence showFooterPill={false} />
      <TeamShowcase />
      <FAQ />
    </>
  );
}
