import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MovingMarquee } from "@/components/home/MovingMarquee";
import { ServicesProducts } from "@/components/services/ServicesProducts";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, app development, and digital marketing for Indian startups and brands. Go digital faster without compromising on quality.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tone="light"
        orbs
        title={
          <>
            Websites, Apps & Marketing
            <br /> for Startups
          </>
        }
        subtitle="Skip the long wait and high costs. We help you go digital faster — custom websites, native apps, and growth marketing — without compromising on quality."
      />
      <MovingMarquee />
      <ServicesProducts />
      <Testimonials />
      <FAQ />
    </>
  );
}
