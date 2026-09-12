"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { ABOUT } from "@/lib/constants";

export function TeamShowcase() {
  const people = [...ABOUT.coFounders, ...ABOUT.team];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <SectionPill>Our Team</SectionPill>
        <h2 className="mt-5 fd-section">Team Behind Wonders</h2>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {people.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-3 py-2 text-center shadow-md">
                <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                <p className="text-xs text-zinc-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
