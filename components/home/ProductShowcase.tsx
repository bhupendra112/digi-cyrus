"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCT_SHOWCASE } from "@/lib/constants";

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[#2a2118]" />
      <div className="absolute inset-0 bg-grain opacity-90" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-medium leading-snug text-white sm:mb-8 sm:text-3xl md:text-4xl"
        >
          Streamline Business with our
          <br /> Flexible options
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-10 overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-200 to-zinc-400 p-[1px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        >
          <div className="overflow-hidden rounded-2xl bg-zinc-900">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="ml-2 text-xs text-zinc-400">{PRODUCT_SHOWCASE.eyebrow}</span>
            </div>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={PRODUCT_SHOWCASE.image}
                alt="Digi Cyrus product preview"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
