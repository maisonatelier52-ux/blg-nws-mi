import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatDate, formatDateTime } from "@/lib/utils";
import { ChevronRight, Clock } from "lucide-react";

interface ArticleHeaderProps {
  article: NewsArticle;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumbs"
        className="flex items-center gap-1.5 text-xs text-zinc-400 mb-6 uppercase tracking-widest"
      >
        <Link href="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 text-zinc-300" />
        <Link
          href={`/article.categorySlug`}
          className="hover:text-zinc-700 text-zinc-500 font-semibold transition-colors"
        >
          {article.category}
        </Link>
      </nav>

      {/* Category tag */}
      <div className="mb-5">
        <Link
          href={`/article.categorySlug`}
          className="blog-tag text-xs"
        >
          {article.category}
        </Link>
      </div>

      {/* H1 Headline */}
      <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-zinc-950 leading-[1.15] tracking-tight mb-5">
        {article.title}
      </h1>

      {/* Deck / Subheadline */}
      {article.subheadline && (
        <p className="font-display italic text-xl text-zinc-500 leading-relaxed mb-7 pb-7 border-b border-zinc-100">
          {article.subheadline}
        </p>
      )}

      {/* Byline row */}
      <div className="flex flex-wrap items-center justify-between gap-5 pt-5 border-t border-zinc-100">
        <div className="flex items-center gap-3">
          {article.author.avatar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover border border-zinc-100 shadow-sm"
            />
          )}
          <div>
            <p className="font-semibold text-sm text-zinc-900">
              {article.author.name}
            </p>
            <p className="text-xs text-zinc-500">{article.author.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <time dateTime={article.publishedAt} className="flex items-center gap-1">
            {formatDate(article.publishedAt)}
          </time>
          {article.updatedAt && (
            <span className="hidden sm:inline">Updated: {formatDateTime(article.updatedAt)}</span>
          )}
          <span className="flex items-center gap-1 font-medium text-zinc-600">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>
      </div>
    </header>
  );
}
