"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  fullWidth,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-dark";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-electric-blue text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02]",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:border-gold/50 hover:bg-white/10",
    ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
  };

  const width = fullWidth ? "w-full sm:w-auto" : "";
  const disabledClass = disabled ? "opacity-60 cursor-not-allowed" : "";
  const classes = `${base} ${variants[variant]} ${width} ${disabledClass} ${className}`;

  const motionProps = {
    whileHover: { scale: variant === "primary" ? 1.02 : 1 },
    whileTap: { scale: 0.98 },
  };

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        <motion.span {...motionProps} className="inline-block">
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
