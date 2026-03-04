"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
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
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Video Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Hear from brands we&apos;ve helped grow. Trusted by Indian startups and businesses.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
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
              >
                <Card>
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
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
                        className="flex h-full items-center justify-center text-zinc-500 hover:text-gold"
                      >
                        Watch on YouTube
                      </a>
                    )}
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{t.name}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
