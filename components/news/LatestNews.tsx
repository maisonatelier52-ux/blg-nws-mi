import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatRelativeTime } from "@/lib/utils";

interface LatestNewsProps {
  articles: NewsArticle[];
  title?: string;
  className?: string;
}

export function LatestNews({ articles, title = "Latest Posts", className = "" }: LatestNewsProps) {
  return (
    <div className={className}>
      <h3 className="font-display font-bold text-lg text-zinc-950 mb-5">{title}</h3>
      <div className="space-y-0">
        {articles.map((item) => (
          <article key={item.id} className="group py-4 border-b border-zinc-50 last:border-b-0">
            <div className="flex items-center gap-2 mb-1.5">
              <Link href={`/item.categorySlug`} className="blog-tag">
                {item.category}
              </Link>
              <time dateTime={item.publishedAt} className="text-[11px] text-zinc-400">
                {formatRelativeTime(item.publishedAt)}
              </time>
            </div>
            <h4 className="font-display font-semibold text-sm text-zinc-900 group-hover:text-zinc-600 transition-colors leading-snug line-clamp-2">
              <Link href={`/news/${item.slug}`}>{item.title}</Link>
            </h4>
            <p className="text-[11px] text-zinc-400 mt-1">{item.author.name} Â· {item.readTime}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
