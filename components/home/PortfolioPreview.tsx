"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

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
    <section id="work" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="fd-section">Turning Visions Into Digital Reality</h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href="/portfolio"
                className="group block overflow-hidden rounded-2xl bg-white p-5 text-black shadow-md ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {project.image && (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="mt-1 font-poppins text-sm text-zinc-500 line-clamp-2">{project.result}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="secondary">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
