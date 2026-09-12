"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { CORE_SERVICES } from "@/lib/constants";

export function CoreServices() {
  return (
    <section className="relative bg-white pb-8 pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <SectionPill>Features</SectionPill>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="fd-section text-center"
        >
          Streamline Business with our
          <br className="hidden sm:block" /> Flexible Options
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CORE_SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <Link
                href={service.href}
                className="block overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >
                <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg bg-zinc-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="fd-body mt-1 text-sm text-zinc-500">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
