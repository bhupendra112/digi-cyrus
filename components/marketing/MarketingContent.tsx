"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MARKETING_PAGE } from "@/lib/constants";

export function MarketingContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-lg text-zinc-400"
      >
        {MARKETING_PAGE.subheadline}
      </motion.p>

      <div className="mt-16 space-y-8">
        {MARKETING_PAGE.sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Card>
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
              <p className="mt-3 text-zinc-400">{section.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center sm:p-12"
      >
        <p className="text-lg font-medium text-white">
          Ready to grow with data-driven marketing?
        </p>
        <Link href={MARKETING_PAGE.ctaHref} className="mt-6 inline-block">
          <Button variant="primary">{MARKETING_PAGE.cta}</Button>
        </Link>
      </motion.div>
    </div>
  );
}
