"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-charcoal-dark to-electric-blue/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(212,175,55,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {FINAL_CTA.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-zinc-400"
        >
          Let&apos;s discuss your goals and build a strategy that scales.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Button href={FINAL_CTA.href} variant="primary">
            {FINAL_CTA.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
