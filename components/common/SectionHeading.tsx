import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  href?: string;
  linkText?: string;
  badge?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  href,
  linkText = "View all",
  badge,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`pb-4 mb-7 border-b border-black/[0.06] flex items-end justify-between ${className}`}>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="w-2 h-2 rounded-full bg-zinc-950" />
          <h2 className="font-display font-medium text-2xl sm:text-[1.75rem] text-zinc-950 tracking-tight">
            {title}
          </h2>
          {badge && (
            <span className="badge-pill bg-zinc-100 text-zinc-600 text-[10px]">
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-xs sm:text-sm text-zinc-500 font-normal pl-5">
            {subtitle}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors group shrink-0 pb-1"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
