"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ABOUT, HERO, TRUST } from "@/lib/constants";

export function Hero() {
  const logos = [...TRUST.logos, ...TRUST.logos];
  const logosReverse = [...TRUST.logos].reverse();
  const reverseLoop = [...logosReverse, ...logosReverse];
  const faces = [...ABOUT.coFounders, ABOUT.team[0]].filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-grid-light">
      <div className="relative mx-auto flex min-h-[auto] flex-col items-center px-4 pt-4 text-center sm:min-h-screen sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto mt-2 aspect-[4/3] w-full max-w-4xl sm:-mt-5 sm:aspect-auto lg:-mt-8"
        >
          <Image
            src="/images/team/founder.png"
            alt="Digi Cyrus founders"
            width={1400}
            height={1200}
            priority
            className="h-auto w-full origin-bottom object-contain scale-[1.08] sm:scale-[0.92] lg:scale-[0.86]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4f4f5] to-transparent sm:h-32" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="relative z-10 -mt-6 max-w-4xl text-[34px] font-medium leading-[1.12] tracking-tight text-gray-900 sm:-mt-10 sm:text-5xl md:text-6xl lg:-mt-16 lg:text-[64px]"
        >
          {HERO.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="relative z-10 mt-8 flex items-center justify-center gap-3 sm:gap-4 lg:-mt-2"
        >
          <Button href="/portfolio" variant="primary" className="w-32 py-3.5 sm:w-44">
            {HERO.primaryCta}
          </Button>
          <Button href="/contact" variant="secondary" className="w-32 py-3.5 sm:w-44">
            {HERO.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex -space-x-3">
            {faces.map((person) => (
              <Image
                key={person.name}
                src={person.image}
                alt={person.name}
                width={56}
                height={56}
                className="relative h-11 w-11 rounded-full border-2 border-white object-cover object-top transition duration-500 hover:z-30 hover:scale-105 sm:h-14 sm:w-14"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-800">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              10k
            </span>{" "}
            Audience
          </p>
        </motion.div>
      </div>

      <div className="relative mt-12 space-y-5 overflow-hidden pb-16 sm:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4f4f5] sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4f4f5] sm:w-28" />
        <div className="flex w-max animate-strip-left gap-10 sm:gap-16">
          {logos.map((logo, i) => (
            <LogoSlot key={`a-${logo.src}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
        <div className="flex w-max animate-strip-right gap-10 sm:gap-16">
          {reverseLoop.map((logo, i) => (
            <LogoSlot key={`b-${logo.src}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-10 w-28 shrink-0 items-center justify-center opacity-50 grayscale sm:h-12 sm:w-36">
      <Image src={src} alt={alt} width={140} height={48} className="max-h-8 w-auto object-contain sm:max-h-10" />
    </div>
  );
}
