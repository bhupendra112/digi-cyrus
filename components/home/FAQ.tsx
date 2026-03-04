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
    <section className="border-t border-white/5 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-zinc-400">
            Quick answers to common questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Accordion items={accordionItems} />
        </motion.div>
      </div>
    </section>
  );
}
