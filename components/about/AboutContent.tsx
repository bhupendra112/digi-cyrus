"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ABOUT } from "@/lib/constants";

export function AboutContent() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="mt-4 text-lg text-zinc-400">{ABOUT.mission}</p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="mt-4 text-lg text-zinc-400">{ABOUT.vision}</p>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <h2 className="text-2xl font-bold text-white">Co-Founders</h2>
        <p className="mt-2 text-zinc-400">{ABOUT.coFoundersMessage}</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {ABOUT.coFounders.map((founder, i) => (
            <motion.div
              key={founder.image}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-56">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, 224px"
                  />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0">
                  <p className="text-sm font-medium uppercase tracking-wider text-gold">
                    {founder.role}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {founder.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <h2 className="text-center text-2xl font-bold text-white">
          Our Values
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Card>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <h2 className="text-center text-2xl font-bold text-white">
          The Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Leadership, engineering, and design—the people behind Digi Cyrus.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {ABOUT.team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="relative mx-auto aspect-square h-40 w-40 overflow-hidden rounded-2xl border border-white/10 sm:h-44 sm:w-44">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, 176px"
                />
              </div>
              <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-zinc-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <Button href="/contact">Get in Touch</Button>
      </motion.section>
    </div>
  );
}
