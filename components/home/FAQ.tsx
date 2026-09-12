"use client";

import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

const accordionItems = FAQ_ITEMS.map((item, i) => ({
  id: `faq-${i}`,
  question: item.q,
  answer: item.a,
}));

export function FAQ() {
  return (
    <section className="bg-speckle py-20 text-black sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-normal leading-snug text-gray-900 sm:text-5xl"
        >
          Frequently Asked
          <br /> Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion items={accordionItems} variant="light" />
        </motion.div>
      </div>
    </section>
  );
}
