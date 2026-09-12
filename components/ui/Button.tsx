"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "inverse" | "inverseOutline";
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
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-medium transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-black/10";

  const variants = {
    primary: "bg-black text-white hover:scale-105 hover:bg-gray-900",
    secondary: "border border-gray-300 bg-white text-black hover:scale-105 hover:bg-gray-100",
    ghost: "text-zinc-500 hover:text-black hover:bg-black/5",
    dark: "bg-black text-white hover:scale-105 hover:bg-gray-900",
    inverse: "bg-white text-black hover:bg-zinc-100",
    inverseOutline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-black",
  };

  const width = fullWidth ? "w-full sm:w-auto" : "";
  const disabledClass = disabled ? "opacity-60 cursor-not-allowed" : "";
  const classes = `${base} ${variants[variant]} ${width} ${disabledClass} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
