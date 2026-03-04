"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
  type PortfolioItem,
  PORTFOLIO_CATEGORIES,
} from "@/lib/constants";

type PortfolioGridProps = {
  items?: PortfolioItem[];
  categories?: readonly { id: PortfolioItem["category"]; label: string }[];
};

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-300 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
    >
      {children}
      <span className="text-gold">↗</span>
    </a>
  );
}

export function PortfolioGrid({
  items = [],
  categories = PORTFOLIO_CATEGORIES,
}: PortfolioGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const byCategory = categories.map((cat) => ({
    ...cat,
    items: items.filter((p) => p.category === cat.id),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-14">
        {byCategory.map(({ id: categoryId, label: categoryLabel, items: categoryItems }) => {
          if (categoryItems.length === 0) return null;
          return (
            <motion.section
              key={categoryId}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-xl font-semibold uppercase tracking-wider text-zinc-400 sm:text-2xl">
                {categoryLabel}
              </h2>
              <div className="space-y-6">
                {categoryItems.map((project, i) => {
                  const isExpanded = expandedId === project.id;
                  const hasDetail =
                    project.problem ||
                    project.strategy ||
                    project.execution ||
                    (project.results && Object.keys(project.results).length > 0) ||
                    (project.tech && project.tech.length > 0);
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Card hover={false} className="overflow-hidden">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-gold">
                              {project.companyName}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                              {project.name}
                            </h3>
                            <p className="mt-2 text-zinc-400">{project.result}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.links.website && (
                                <LinkButton href={project.links.website}>
                                  Visit website
                                </LinkButton>
                              )}
                              {project.links.playStore && (
                                <LinkButton href={project.links.playStore}>
                                  Play Store
                                </LinkButton>
                              )}
                              {project.links.appStore && (
                                <LinkButton href={project.links.appStore}>
                                  App Store
                                </LinkButton>
                              )}
                              {project.links.figma && (
                                <LinkButton href={project.links.figma}>
                                  Figma
                                </LinkButton>
                              )}
                            </div>
                          </div>
                          {hasDetail && (
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedId(isExpanded ? null : project.id)
                              }
                              className="shrink-0 text-sm font-medium text-gold hover:text-gold-light"
                            >
                              {isExpanded ? "Show less" : "View case study"}
                              <span
                                className={`ml-1 inline-block transition-transform ${isExpanded ? "rotate-180" : ""}`}
                              >
                                ↓
                              </span>
                            </button>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {hasDetail && isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-8 border-t border-white/10 pt-8">
                                <div className="grid gap-6 sm:grid-cols-2">
                                  {project.problem && (
                                    <div>
                                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                                        Problem
                                      </h4>
                                      <p className="mt-1 text-zinc-300">
                                        {project.problem}
                                      </p>
                                    </div>
                                  )}
                                  {project.strategy && (
                                    <div>
                                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                                        Strategy
                                      </h4>
                                      <p className="mt-1 text-zinc-300">
                                        {project.strategy}
                                      </p>
                                    </div>
                                  )}
                                  {project.execution && (
                                    <div>
                                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                                        Execution
                                      </h4>
                                      <p className="mt-1 text-zinc-300">
                                        {project.execution}
                                      </p>
                                    </div>
                                  )}
                                </div>
                                {project.results &&
                                  (project.results.traffic ||
                                    project.results.leads ||
                                    project.results.sales) && (
                                  <div className="mt-6 flex flex-wrap gap-4">
                                    {project.results.traffic && (
                                      <span className="rounded-lg bg-gold/10 px-3 py-1.5 text-sm font-medium text-gold">
                                        Traffic: {project.results.traffic}
                                      </span>
                                    )}
                                    {project.results.leads && (
                                      <span className="rounded-lg bg-gold/10 px-3 py-1.5 text-sm font-medium text-gold">
                                        Leads: {project.results.leads}
                                      </span>
                                    )}
                                    {project.results.sales && (
                                      <span className="rounded-lg bg-gold/10 px-3 py-1.5 text-sm font-medium text-gold">
                                        Sales: {project.results.sales}
                                      </span>
                                    )}
                                  </div>
                                )}
                                {project.tech && project.tech.length > 0 && (
                                  <div className="mt-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                                      Tech stack
                                    </h4>
                                    <p className="mt-1 text-zinc-400">
                                      {project.tech.join(", ")}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
