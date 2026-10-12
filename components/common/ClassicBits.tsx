import React from "react";

export const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-zinc-600 ${className}`} aria-hidden>
      <span className="h-px w-14 sm:w-24 bg-white/20" />
      <span className="text-[10px]">◆</span>
      <span className="h-px w-14 sm:w-24 bg-white/20" />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
}) {
  return (
    <div data-reveal className="text-center mb-14">
      <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</p>
      <Tag className="font-display mt-4 text-3xl sm:text-4xl text-white">{title}</Tag>
      <Rule className="mt-6" />
    </div>
  );
}
