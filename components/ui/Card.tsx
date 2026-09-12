"use client";

import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "glass" | "white";
};

export function Card({
  children,
  className = "",
  hover = true,
  variant = "white",
}: CardProps) {
  const surface =
    variant === "white"
      ? "rounded-3xl bg-white text-black p-6 sm:p-8 shadow-pill"
      : "glass-card p-6 sm:p-8";

  return (
    <motion.div
      className={`${surface} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

type CardIconProps = {
  icon: React.ReactNode;
  className?: string;
};

export function CardIcon({ icon, className = "" }: CardIconProps) {
  return (
    <div
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white ${className}`}
    >
      {icon}
    </div>
  );
}
