"use client";

import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <section className="bg-white py-16 text-black sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-2xl font-semibold text-gray-900 md:text-3xl"
        >
          Building the Digital Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center font-poppins text-[15px] leading-7 text-gray-500"
        >
          At Digi Cyrus, we believe technology isn&apos;t just about code — it&apos;s about creating
          possibilities, building trust, and driving growth. Founded with a vision to empower Indian
          startups, entrepreneurs, and businesses with powerful websites, apps, and marketing, we
          deliver digital products that help brands get found, get booked, and grow.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center font-poppins text-[15px] leading-7 text-gray-500"
        >
          From a small team of passionate builders in Indore to an agency working with hospitality,
          real estate, education, pharma, and D2C brands, our journey has always been driven by one
          mission — to make technology simple, scalable, and impactful.
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl font-semibold text-gray-900"
        >
          Who We Are
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 space-y-5 text-center font-poppins text-[15px] leading-7 text-gray-500"
        >
          <p>
            We are a team of developers, designers, and growth marketers who blend craft with
            execution.
          </p>
          <p>
            Our strength lies in understanding every client&apos;s vision deeply and turning it into
            a digital product — whether it&apos;s a website, a native app, an Instagram growth
            system, or a complete business presence online.
          </p>
          <p>
            We specialise in custom development for unique products and digital marketing for brands
            that need attention. At Digi Cyrus, every line of code, every design, and every campaign
            is created with a clear purpose: to help your business grow online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
