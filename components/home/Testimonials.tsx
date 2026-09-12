"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { VIDEO_TESTIMONIALS } from "@/lib/constants";

function getYoutubeEmbedId(url: string): string | null {
  if (!url) return null;
  try {
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return id?.length === 11 ? id : null;
    }
    if (url.includes("/shorts/")) {
      const id = url.split("/shorts/")[1]?.split("?")[0];
      return id?.length === 11 ? id : null;
    }
    const match = url.match(/(?:v=|\/embed\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function TestimonialCard({ name, youtubeUrl }: { name: string; youtubeUrl: string }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYoutubeEmbedId(youtubeUrl);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
        {videoId && playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
            title={`Testimonial from ${name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => (videoId ? setPlaying(true) : window.open(youtubeUrl, "_blank", "noopener,noreferrer"))}
            className="group relative h-full w-full"
            aria-label={`Play testimonial from ${name}`}
          >
            {videoId ? (
              // Native img avoids next/image remote config and keeps a poster if YouTube is blocked.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
              />
            ) : (
              <span className="flex h-full items-center justify-center text-zinc-400">Watch on YouTube</span>
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition group-hover:scale-105">
                ▶
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-4 pt-10 text-left text-white">
              <span className="block text-sm font-semibold">{name}</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-20 text-black sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionPill>Client Testimonials</SectionPill>
          <h2 className="mt-6 fd-section">Happy Clients Testimonials</h2>
        </motion.div>

        <div className="mt-14 flex justify-center gap-5 overflow-x-auto pb-2">
          {VIDEO_TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.youtubeUrl + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-[220px] shrink-0 sm:w-[240px]"
            >
              <TestimonialCard name={t.name} youtubeUrl={t.youtubeUrl} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
