"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MARKETING_CLIENTS } from "@/lib/constants";

export function MarketingContent() {
  return (
    <div className="w-full pb-8 sm:pb-12">
      <div className="my-12 flex w-full flex-col items-center px-6 text-center">
        <div className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-600 shadow-md">
          Marketing
        </div>
        <h2 className="mt-6 text-3xl text-gray-900 md:text-4xl">Our Marketing Portfolio</h2>
      </div>

      <section className="mx-auto mt-16 w-full max-w-7xl space-y-24 px-6 md:px-12">
        {MARKETING_CLIENTS.map((client, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <motion.article
              key={client.id}
              id={client.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="grid scroll-mt-28 items-center gap-12 px-2 md:grid-cols-2 md:px-6"
            >
              <div
                className={`mx-auto w-full max-w-md ${imageLeft ? "md:order-1" : "md:order-2"}`}
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-[#F3F3F3] p-3 shadow-inner md:p-4">
                  <Image
                    src={client.image}
                    alt={`${client.name} Instagram work`}
                    width={460}
                    height={339}
                    className="h-auto w-[90%] rounded-2xl object-contain"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-gray-900 md:text-left">
                  {client.name}
                </p>
              </div>

              <div className={`rounded-xl p-4 text-left ${imageLeft ? "md:order-2" : "md:order-1"}`}>
                <p className="text-center text-sm font-medium text-gray-500 md:text-left">
                  {client.handle}
                </p>
                <h3 className="mt-1 text-center text-2xl text-gray-900 md:text-left md:text-3xl">
                  {client.name}
                </h3>
                <p className="mt-2 text-center font-poppins text-sm text-gray-500 md:text-left">
                  {client.tagline}
                </p>
                <ul className="mb-6 mt-6 space-y-4 font-poppins">
                  {client.points.map((point, index) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-900">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="flex-1">{point}</p>
                    </li>
                  ))}
                </ul>
                <div className="text-center md:text-left">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-black px-6 py-2 text-base text-white shadow-md transition hover:scale-105"
                  >
                    Check this out
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
}
