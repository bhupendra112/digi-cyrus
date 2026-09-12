"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";

export function MovingMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden bg-black py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center text-xl font-medium tracking-tight text-white sm:text-3xl">
            {item}
            <span className="mx-5 text-zinc-500 sm:mx-8">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
