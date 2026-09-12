"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { MARKETING_CLIENTS } from "@/lib/constants";

export function SocialPresence({ showFooterPill = true }: { showFooterPill?: boolean }) {
  const [index, setIndex] = useState(2);
  const total = MARKETING_CLIENTS.length;

  function go(dir: number) {
    setIndex((prev) => (prev + dir + total) % total);
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4200);
    return () => window.clearInterval(id);
  }, [total]);

  const shown = [(index - 1 + total) % total, index, (index + 1) % total];

  return (
    <section className="bg-white py-20 text-black sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionPill>Social Presence</SectionPill>
          <h2 className="mt-6 fd-section">Trusted by 100+ People</h2>
        </div>

        <div className="relative mt-14 flex min-h-[460px] items-end justify-center gap-4 sm:min-h-[500px]">
          {shown.map((i, pos) => {
            const client = MARKETING_CLIENTS[i];
            const isCenter = pos === 1;
            return (
              <motion.a
                key={client.id}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                animate={{
                  opacity: 1,
                  scale: isCenter ? 1 : 0.86,
                  y: isCenter ? 0 : 36,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`relative overflow-hidden rounded-[1.75rem] shadow-xl ${
                  isCenter
                    ? "z-10 h-[420px] w-[240px] sm:h-[480px] sm:w-[280px]"
                    : "hidden h-[340px] w-[190px] sm:block"
                }`}
                aria-label={`${client.name} Instagram`}
              >
                <Image src={client.image} alt={client.name} fill className="object-cover" sizes="280px" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-black shadow-sm transition hover:scale-105"
            aria-label="Previous"
          >
            ←
          </button>
          <div className="flex items-center gap-1.5">
            {MARKETING_CLIENTS.map((client, i) => (
              <button
                key={client.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-gray-900" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-black shadow-sm transition hover:scale-105"
            aria-label="Next"
          >
            →
          </button>
        </div>

        {showFooterPill && (
          <div className="mt-16 text-center">
            <SectionPill>Social Presence</SectionPill>
          </div>
        )}
      </div>
    </section>
  );
}
