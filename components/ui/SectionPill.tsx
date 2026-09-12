export function SectionPill({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-medium tracking-wide ${
        tone === "light"
          ? "border border-gray-200 bg-white text-gray-500"
          : "border border-white/15 bg-zinc-900 text-white"
      }`}
    >
      {children}
    </span>
  );
}
