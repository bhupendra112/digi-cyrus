"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { SERVICES_DETAIL } from "@/lib/constants";

const PRODUCTS = [
  { id: "website", ...SERVICES_DETAIL.website },
  { id: "app", ...SERVICES_DETAIL.app },
  { id: "marketing", ...SERVICES_DETAIL.marketing },
];

export function ServicesProducts() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionPill>Services</SectionPill>
          <h2 className="mt-5 fd-section">Check our Core Services</h2>
        </div>

        <div className="mt-16 space-y-20">
          {PRODUCTS.map((product, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <motion.article
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                  <div className="rounded-[1.75rem] bg-[#f3f3f4] p-4 sm:p-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                    {product.title}
                  </h3>
                  <ol className="mt-6 space-y-4">
                    {product.points.map((point, index) => (
                      <li
                        key={point}
                        className="flex gap-3 font-poppins text-sm leading-6 text-gray-600 sm:text-base"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-[11px] font-semibold text-gray-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ol>
                  <Link
                    href={product.href}
                    className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-gray-900"
                  >
                    Check this out
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
