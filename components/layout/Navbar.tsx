"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LEFT, NAV_RIGHT, NAV_LINKS } from "@/lib/constants";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50">
      <nav className="relative flex items-center justify-center bg-transparent py-6">
        <div className="mx-4 hidden w-fit items-center gap-6 rounded-full border border-gray-200 bg-white px-8 py-[11px] md:flex">
          {NAV_LEFT.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="fd-nav whitespace-nowrap text-black transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <BrandLogo className="shrink-0" />
          {NAV_RIGHT.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="fd-nav whitespace-nowrap text-black transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mx-4 flex w-full max-w-lg items-center justify-between rounded-full border border-gray-200 bg-white px-4 py-2.5 md:hidden">
          <BrandLogo />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 rounded-lg p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`h-0.5 w-6 bg-black transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 bg-black transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-black transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-1 overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-pill md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-black transition hover:bg-zinc-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
