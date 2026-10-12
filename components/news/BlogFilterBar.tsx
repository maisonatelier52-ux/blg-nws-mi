"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Layers } from "lucide-react";

interface CategoryTopic {
  name: string;
  slug: string;
}

interface BlogFilterBarProps {
  categories: CategoryTopic[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
  countMap?: Record<string, number>;
}

export function BlogFilterBar({
  categories,
  selectedSlug,
  onSelect,
  countMap = {},
}: BlogFilterBarProps) {
  return (
    <div className="py-4 my-8 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 min-w-max p-1 bg-white/70 backdrop-blur-md rounded-2xl border border-black/[0.06] shadow-xs">
        <span className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 font-mono">
          <Layers className="w-3.5 h-3.5" />
          Filter:
        </span>

        {categories.map((cat) => {
          const isActive = selectedSlug === cat.slug;
          const count = countMap[cat.slug];

          return (
            <button
              key={cat.slug}
              onClick={() => onSelect(cat.slug)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              <span>{cat.name}</span>
              {typeof count === "number" && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-zinc-200/60 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
