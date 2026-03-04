"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TRUST } from "@/lib/constants";

export function TrustIndicator() {
  const logos = TRUST.logos ?? [];
  // Duplicate for seamless infinite scroll
  const carouselLogos = logos.length > 0 ? [...logos, ...logos] : [];

  return (
    <section className="border-y border-white/5 bg-charcoal/50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          {TRUST.title}
        </motion.p>

        {/* Logo carousel - separate row, no overlap with badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mt-8 overflow-hidden"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-charcoal/50 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-charcoal/50 to-transparent sm:w-24" />

          <div className="flex animate-trust-scroll gap-12 sm:gap-16">
            {carouselLogos.length > 0
              ? carouselLogos.map((logo, i) => (
                  <div
                    key={`${logo.src}-${i}`}
                    className="relative flex h-10 w-28 shrink-0 items-center justify-center sm:h-12 sm:w-32"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={48}
                      className="max-h-10 w-auto max-w-[7rem] object-contain object-center opacity-90 grayscale transition hover:opacity-100 hover:grayscale-0 sm:max-h-12 sm:max-w-[8rem]"
                    />
                  </div>
                ))
              : [1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-28 shrink-0 rounded bg-white/10 sm:h-12 sm:w-32"
                    aria-hidden
                  />
                ))}
          </div>
        </motion.div>

        {/* Badge on its own row - no overlap */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <span className="rounded-xl border border-gold/30 bg-gold/5 px-6 py-2.5 text-sm font-semibold text-gold">
            {TRUST.badge}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
