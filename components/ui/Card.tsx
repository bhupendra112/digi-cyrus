"use client";

import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`glass-card p-6 sm:p-8 ${className}`}
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
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-electric-blue/20 text-gold ${className}`}
    >
      {icon}
    </div>
  );
}
