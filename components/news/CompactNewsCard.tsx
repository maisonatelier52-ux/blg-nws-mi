import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatRelativeTime } from "@/lib/utils";

interface CompactNewsCardProps {
  article: NewsArticle;
  showCategory?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

export function CompactNewsCard({
  article,
  showCategory = true,
  showExcerpt = true,
  className = "",
}: CompactNewsCardProps) {
  return (
    <article className={`group py-4 first:pt-0 last:pb-0 border-b border-zinc-50 last:border-b-0 ${className}`}>
      {showCategory && (
        <div className="flex items-center gap-2 mb-2">
          <Link href={`/article.categorySlug`} className="blog-tag">
            {article.category}
          </Link>
          <span className="text-[11px] text-zinc-400">
            {formatRelativeTime(article.publishedAt)}
          </span>
        </div>
      )}

      <h4 className="font-display font-semibold text-sm text-zinc-900 group-hover:text-zinc-600 transition-colors leading-snug">
        <Link href={`/news/${article.slug}`}>{article.title}</Link>
      </h4>

      {showExcerpt && article.excerpt && (
        <p className="text-xs text-zinc-500 line-clamp-2 mt-1.5 leading-relaxed">
          {article.excerpt}
        </p>
      )}

      {!showCategory && (
        <p className="text-[11px] text-zinc-400 mt-1.5">
          {formatRelativeTime(article.publishedAt)}
        </p>
      )}
    </article>
  );
}
