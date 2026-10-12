import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { getCategoryBadgeClass } from "@/lib/utils";
import { TrendingUp, Clock } from "lucide-react";

interface MostReadProps {
  articles: NewsArticle[];
  title?: string;
  className?: string;
}

export function MostRead({
  articles,
  title = "Trending Reads",
  className = "",
}: MostReadProps) {
  return (
    <aside
      className={`bg-white rounded-3xl p-6 border border-black/[0.06] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] ${className}`}
      aria-label="Trending reads"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-rose-500" />
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-950">
            {title}
          </h3>
        </div>
        <span className="text-[11px] text-zinc-400 font-sans">
          This Week
        </span>
      </div>

      <ol className="space-y-4">
        {articles.slice(0, 5).map((article, idx) => {
          const badgeClass = getCategoryBadgeClass(article.categorySlug);
          return (
            <li
              key={article.id}
              className="group p-3 rounded-2xl hover:bg-zinc-50/80 transition-all duration-200 border border-transparent hover:border-black/[0.04]"
            >
              <div className="flex items-start gap-3.5">
                {/* Ranking Pill / Number */}
                <span className="w-7 h-7 rounded-full bg-zinc-100 group-hover:bg-zinc-950 group-hover:text-white flex items-center justify-center font-mono text-xs font-bold text-zinc-600 transition-colors shrink-0 mt-0.5">
                  0{idx + 1}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Link
                      href={`/article.categorySlug`}
                      className={`badge-pill text-[9px] py-0.5 px-2 ${badgeClass}`}
                    >
                      {article.category}
                    </Link>
                    <span className="flex items-center gap-1 text-[10px] text-zinc-400 font-sans">
                      <Clock className="w-2.5 h-2.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="font-display font-medium text-[14px] leading-snug text-zinc-950 group-hover:text-indigo-950 transition-colors line-clamp-2 mb-1">
                    <Link href={`/news/${article.slug}`}>{article.title}</Link>
                  </h4>

                  <p className="text-[11px] text-zinc-400">
                    By {article.author.name}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
