"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { SearchModal } from "./SearchModal";

interface SearchButtonProps {
  variant?: "icon" | "full";
  className?: string;
}

export function SearchButton({ variant = "icon", className = "" }: SearchButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {variant === "icon" ? (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Search articles"
          className={`p-2 rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-all duration-150 inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 active:scale-95 ${className}`}
        >
          <Search className="w-4 h-4" />
          <span className="sr-only sm:not-sr-only text-[11px] font-medium tracking-wide text-neutral-500">
            Search
          </span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center justify-between w-full px-3.5 py-2.5 text-xs text-neutral-500 bg-white border border-neutral-200 hover:border-neutral-700 rounded-lg transition-all ${className}`}
        >
          <span className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5" />
            <span>Search articles, topics, authors...</span>
          </span>
          <kbd className="text-[10px] bg-neutral-50 px-1.5 py-0.5 border border-neutral-200 rounded text-neutral-400">
            /
          </kbd>
        </button>
      )}

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
