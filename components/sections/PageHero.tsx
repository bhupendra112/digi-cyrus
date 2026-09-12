"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: string;
  tone?: "dark" | "light";
  orbs?: boolean;
};

export function PageHero({ title, subtitle, tone = "dark", orbs = false }: PageHeroProps) {
  const isLight = tone === "light";

  return (
    <section
      className={`relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24 text-center sm:min-h-[75vh] sm:px-6 md:min-h-screen ${
        isLight ? "bg-grid-light" : "bg-black bg-grid"
      }`}
    >
      {orbs && isLight && (
        <>
          <motion.div
            aria-hidden
            animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-[-2%] top-[28%] hidden md:block lg:left-[4%]"
          >
            <div className="relative h-44 w-44">
              <div className="absolute left-10 top-4 h-28 w-28 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 shadow-2xl" />
              <div className="absolute left-0 top-16 h-24 w-32 -rotate-45 rounded-full bg-gradient-to-tr from-zinc-400 to-zinc-700 opacity-90" />
            </div>
          </motion.div>
          <motion.div
            aria-hidden
            animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[-2%] top-[22%] hidden md:block lg:right-[5%]"
          >
            <div className="relative h-48 w-36">
              <div className="absolute right-6 top-0 h-16 w-28 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-600 shadow-xl" />
              <div className="absolute right-10 top-12 h-20 w-20 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-800 shadow-lg" />
              <div className="absolute right-2 top-24 h-14 w-14 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-900" />
            </div>
          </motion.div>
        </>
      )}

      <div className="relative mx-auto w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fd-display ${isLight ? "text-gray-900" : "text-white"}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className={`mx-auto mt-5 max-w-2xl font-poppins text-sm font-normal sm:mt-6 sm:text-base md:text-lg ${
              isLight ? "text-gray-400" : "text-white/50"
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
