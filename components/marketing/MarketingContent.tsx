"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MARKETING_PRODUCTS } from "@/lib/constants";

export function MarketingContent() {
  return (
    <div className="w-full pb-8 sm:pb-12">
      <div className="my-12 flex w-full flex-col items-center px-6 text-center">
        <div className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-600 shadow-md">
          Marketing
        </div>
        <h2 className="mt-6 text-3xl text-gray-900 md:text-4xl">Check our Marketing Products</h2>
      </div>

      <section className="mx-auto mt-16 w-full max-w-7xl space-y-24 px-6 md:px-12">
        {MARKETING_PRODUCTS.map((product, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <motion.article
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="grid scroll-mt-28 items-center gap-12 px-2 md:grid-cols-2 md:px-6"
            >
              <div
                className={`mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-[#F3F3F3] p-3 shadow-inner md:p-4 ${
                  imageLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={460}
                  height={339}
                  className="h-auto w-[90%] rounded-2xl object-contain"
                />
              </div>

              <div className={`rounded-xl p-4 text-left ${imageLeft ? "md:order-2" : "md:order-1"}`}>
                <h3 className="mb-6 text-center text-2xl text-gray-900 md:text-left md:text-3xl">
                  {product.title}
                </h3>
                <ul className="mb-6 space-y-4 font-poppins">
                  {product.points.map((point, index) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-900">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="flex-1">{point}</p>
                    </li>
                  ))}
                </ul>
                <div className="text-center md:text-left">
                  <Link
                    href={product.href}
                    className="inline-flex rounded-full bg-black px-6 py-2 text-base text-white shadow-md transition hover:scale-105"
                  >
                    Check this out
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
}
