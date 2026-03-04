"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="border-t border-white/5 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            A clear process from strategy to launch and beyond.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline line - horizontal on lg */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 lg:left-1/2 lg:top-1/2 lg:h-px lg:w-full lg:-translate-x-1/2 lg:-translate-y-1/2" />

            <ul className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
              {PROCESS_STEPS.map((item, i) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 lg:flex-col lg:text-center"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold/50 bg-charcoal-dark text-sm font-bold text-gold">
                    {item.step}
                  </div>
                  <div className="lg:pt-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
