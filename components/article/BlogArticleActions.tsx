"use client";

import React, { useState } from "react";
import { Share2, Bookmark, Check, Link2 } from "lucide-react";

interface BlogArticleActionsProps {
  title: string;
  category: string;
}

const btn =
  "group inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition-all duration-500 hover:bg-white hover:text-black hover:border-white";

export function BlogArticleActions({ title }: BlogArticleActionsProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`“${title}” — via The Briefline`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button onClick={handleCopy} className={btn} title="Copy link">
        {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
        <span>{copied ? "Copied" : "Copy link"}</span>
      </button>
      <button onClick={handleShare} className={btn} title="Share on X">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share</span>
      </button>
      <button
        onClick={() => setSaved((v) => !v)}
        className={`${btn} ${saved ? "bg-white !text-black border-white" : ""}`}
        aria-pressed={saved}
        title={saved ? "Saved" : "Save for later"}
      >
        <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-current" : ""}`} />
        <span>{saved ? "Saved" : "Save"}</span>
      </button>
    </div>
  );
}
