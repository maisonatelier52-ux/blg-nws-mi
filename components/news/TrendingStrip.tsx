"use client";

import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { getCategoryBadgeClass } from "@/lib/utils";
import { Flame, Clock, ArrowUpRight } from "lucide-react";

interface TrendingStripProps {
  articles: NewsArticle[];
}

export function TrendingStrip({ articles }: TrendingStripProps) {
  const topTrending = articles.slice(0, 4);

  return (
    <section className="mb-14" aria-label="Trending stories">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
            <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-950">
            Trending Dispatches
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-sans">
          Most discussed today
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topTrending.map((article, idx) => {
          const badgeClass = getCategoryBadgeClass(article.categorySlug);
          return (
            <article
              key={article.id}
              className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-black/[0.06] hover:border-black/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-bold text-zinc-300 group-hover:text-zinc-950 transition-colors">
                    0{idx + 1}
                  </span>
                  <Link
                    href={`/article.categorySlug`}
                    className={`badge-pill text-[9px] py-0.5 px-2 ${badgeClass}`}
                  >
                    {article.category}
                  </Link>
                </div>

                <h3 className="font-display font-medium text-[15px] leading-snug text-zinc-950 group-hover:text-indigo-950 transition-colors line-clamp-3 mb-2">
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
              </div>

              <div className="pt-3 mt-2 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-zinc-400">
                <span className="truncate max-w-[110px]">{article.author.name}</span>
                <span className="flex items-center gap-1 font-sans">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
