"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  variant?: "light" | "dark";
};

export function Accordion({ items, className = "", variant = "light" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const isLight = variant === "light";

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl ${
              isLight ? "bg-white shadow-sm ring-1 ring-gray-100" : "glass-card"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-4 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
              id={`accordion-heading-${item.id}`}
            >
              <span className="flex items-start gap-3 font-medium">
                <span
                  className={`mt-1 h-5 w-0.5 shrink-0 rounded-full ${
                    isLight ? "bg-black" : "bg-white"
                  }`}
                />
                <span className={isLight ? "text-gray-800" : "text-white"}>{item.question}</span>
              </span>
              <span
                className={`ml-2 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                } ${isLight ? "text-zinc-400" : "text-zinc-400"}`}
                aria-hidden
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-heading-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div
                    className={`px-4 pb-4 pl-8 font-poppins text-sm ${
                      isLight ? "text-zinc-600" : "text-zinc-400"
                    }`}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
