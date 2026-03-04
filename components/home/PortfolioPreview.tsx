"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
} from "@/lib/constants";

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  PORTFOLIO_CATEGORIES.map((c) => [c.id, c.label])
);

/** Featured items for home: one per distinct project (no duplicate Dailiyo entries), mix of website + app */
const FEATURED_IDS = [
  "skill-tallent",
  "dailiyo-website",
  "kumar-colonisers",
  "kk-resorts",
  "love-lance-photography",
  "mv-academy",
];

export function PortfolioPreview() {
  const items = FEATURED_IDS.map((id) => PORTFOLIO_ITEMS.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => p != null
  );

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Websites, Android & iOS apps for Indian brands. Trusted by Skill Tallent, Dailiyo, Kumar Colonisers, KK Resorts, Love Lance Photography, MV Academy and more.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="group overflow-hidden">
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  {CATEGORY_LABEL[project.category] ?? project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{project.companyName}</p>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                  {project.result}
                </p>
                <Link
                  href="/portfolio"
                  className="mt-6 inline-flex items-center text-sm font-medium text-gold transition hover:text-gold-light"
                >
                  View case study
                  <span className="ml-1">→</span>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="/portfolio" variant="secondary">
            View all projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
