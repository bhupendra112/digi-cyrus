import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { SERVICES_DETAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, app development, and digital marketing for Indian startups and brands. Custom solutions built for scale and conversion.",
};

function ServiceBlock({
  id,
  title,
  subtitle,
  description,
  features,
  benefits,
}: {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-white/5 py-16 last:border-0 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card overflow-hidden p-0">
          <div className="bg-gradient-to-br from-gold/10 to-electric-blue/10 px-6 py-12 sm:px-10 sm:py-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-2 text-gold">{subtitle}</p>
          </div>
          <div className="space-y-8 p-6 sm:p-10">
            <p className="text-lg text-zinc-300">{description}</p>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                What we deliver
              </h3>
              <ul className="mt-3 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Benefits
              </h3>
              <ul className="mt-3 space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/contact">Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const website = SERVICES_DETAIL.website;
  const app = SERVICES_DETAIL.app;
  const marketing = SERVICES_DETAIL.marketing;

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="End-to-end digital solutions for Indian businesses. From websites and apps to growth marketing—we build what scales."
      />

      <ServiceBlock
        id="website"
        title={website.title}
        subtitle={website.subtitle}
        description={website.description}
        features={website.features}
        benefits={website.benefits}
      />
      <ServiceBlock
        id="app"
        title={app.title}
        subtitle={app.subtitle}
        description={app.description}
        features={app.features}
        benefits={app.benefits}
      />
      <ServiceBlock
        id="marketing"
        title={marketing.title}
        subtitle={marketing.subtitle}
        description={marketing.description}
        features={marketing.features}
        benefits={marketing.benefits}
      />

      <section className="border-t border-white/5 py-16 text-center">
        <p className="text-zinc-400">Need a custom package?</p>
        <Button href="/contact" variant="secondary" className="mt-4">
          Start Your Project
        </Button>
      </section>
    </>
  );
}
