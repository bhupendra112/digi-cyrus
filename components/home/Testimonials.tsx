"use client";

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
          {VIDEO_TESTIMONIALS.map((t, i) => {
            const rawId = getYoutubeEmbedId(t.youtubeUrl);
            const videoId = rawId && rawId.length === 11 ? rawId : null;
            return (
              <motion.div
                key={t.youtubeUrl + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-[220px] shrink-0 sm:w-[240px]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        title={`Testimonial from ${t.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    ) : (
                      <a
                        href={t.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full items-center justify-center text-zinc-400"
                      >
                        Watch on YouTube
                      </a>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-4 pt-10 text-white">
                      <p className="text-sm font-semibold">{t.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
