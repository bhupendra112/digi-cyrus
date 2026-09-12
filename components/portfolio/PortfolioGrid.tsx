"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { type PortfolioItem } from "@/lib/constants";

type Tab = "websites" | "applications";

function projectHighlights(project: PortfolioItem): string[] {
  if (project.highlights && project.highlights.length > 0) {
    return project.highlights.slice(0, 4);
  }
  return [project.problem, project.strategy, project.execution, project.result].filter(
    (item): item is string => Boolean(item)
  ).slice(0, 4);
}

function cta(project: PortfolioItem, tab: Tab) {
  if (tab === "applications") {
    if (project.links.playStore) {
      return { href: project.links.playStore, label: "View App" };
    }
    if (project.links.appStore) {
      return { href: project.links.appStore, label: "View App" };
    }
  }
  if (project.links.website) {
    return { href: project.links.website, label: "View Website" };
  }
  if (project.links.playStore) {
    return { href: project.links.playStore, label: "View App" };
  }
  if (project.links.appStore) {
    return { href: project.links.appStore, label: "View App" };
  }
  if (project.links.figma) {
    return { href: project.links.figma, label: "View Design" };
  }
  return null;
}

export function PortfolioGrid({ items = [] }: { items?: PortfolioItem[] }) {
  const [tab, setTab] = useState<Tab>("websites");

  const websites = useMemo(
    () => items.filter((item) => item.category === "website"),
    [items]
  );

  const applications = useMemo(() => {
    const apps = items.filter(
      (item) => item.category === "playStoreApp" || item.category === "appStoreApp"
    );
    const seen = new Set<string>();
    return apps.filter((item) => {
      if (seen.has(item.companyName)) return false;
      seen.add(item.companyName);
      return true;
    });
  }, [items]);

  const shown = tab === "websites" ? websites : applications;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionPill>Projects</SectionPill>
          <h2 className="mt-5 fd-section">Our Top Projects</h2>
          <div className="mt-8 inline-flex rounded-full border border-gray-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setTab("websites")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === "websites" ? "bg-black text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Websites
            </button>
            <button
              type="button"
              onClick={() => setTab("applications")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === "applications" ? "bg-black text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Applications
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-16 space-y-20"
          >
            {shown.map((project, i) => {
              const imageLeft = i % 2 === 0;
              const points = projectHighlights(project);
              const action = cta(project, tab);

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="rounded-[1.75rem] bg-[#f3f3f4] p-4 sm:p-6">
                      {project.image && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                    <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                      {project.name}
                    </h3>
                    <ol className="mt-6 space-y-3">
                      {points.map((point, index) => (
                        <li key={point} className="flex gap-3 font-poppins text-sm leading-6 text-gray-600 sm:text-base">
                          <span className="w-7 shrink-0 text-xs font-semibold text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ol>
                    {action && (
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-gray-900"
                      >
                        {action.label}
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
