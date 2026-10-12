"use client";

import React, { useState } from "react";
import { Link2, Printer, Bookmark, Check } from "lucide-react";

interface ArticleShareProps {
  title: string;
  slug: string;
  className?: string;
}

export function ArticleShare({ title, slug, className = "" }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`flex items-center justify-between py-4 border-y border-zinc-100 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mr-1">Share</span>

        <button
          onClick={handleCopyLink}
          title="Copy link"
          className="p-2 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-900 transition-all active:scale-95"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Link2 className="w-3.5 h-3.5" />}
        </button>

        {/* X */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="p-2 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-900 transition-all active:scale-95"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/sharing/share-offsite/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-500 hover:text-zinc-900 transition-all active:scale-95"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
          </svg>
        </a>
      </div>

      <button
        onClick={() => setBookmarked(!bookmarked)}
        aria-label={bookmarked ? "Remove bookmark" : "Save"}
        className={`px-3.5 py-1.5 rounded-full border text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 ${
          bookmarked
            ? "bg-zinc-900 text-white border-zinc-900"
            : "border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
        }`}
      >
        <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-white" : ""}`} />
        {bookmarked ? "Saved" : "Save"}
      </button>
    </div>
  );
}
