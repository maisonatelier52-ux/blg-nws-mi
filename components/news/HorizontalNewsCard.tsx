import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatRelativeTime } from "@/lib/utils";

interface HorizontalNewsCardProps {
  article: NewsArticle;
  imageWidthClass?: string;
  className?: string;
}

export function HorizontalNewsCard({
  article,
  imageWidthClass = "w-28 sm:w-36",
  className = "",
}: HorizontalNewsCardProps) {
  return (
    <article
      className={`group flex items-start gap-4 py-4 border-b border-neutral-100 last:border-b-0 ${className}`}
    >
      {article.image && (
        <div
          className={`relative shrink-0 overflow-hidden bg-neutral-50 aspect-[4/3] rounded-sm ${imageWidthClass}`}
        >
          <Link href={`/news/${article.slug}`} className="block w-full h-full">
            <Image
              src={article.image}
              alt={article.imageCaption || article.title}
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </Link>
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Link
              href={`/article.categorySlug`}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {article.category}
            </Link>
            <span className="text-neutral-200 text-xs">Â·</span>
            <span className="text-[11px] text-neutral-400">
              {formatRelativeTime(article.publishedAt)}
            </span>
          </div>

          <h3 className="font-serif text-sm sm:text-base font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors leading-snug line-clamp-2">
            <Link href={`/news/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {article.excerpt && (
            <p className="hidden sm:block text-xs text-neutral-500 line-clamp-2 mt-1.5 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>

        <div className="mt-2 text-[11px] text-neutral-400">
          <span>By {article.author.name}</span>
        </div>
      </div>
    </article>
  );
}
