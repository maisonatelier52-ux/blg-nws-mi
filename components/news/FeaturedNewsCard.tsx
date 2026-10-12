"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatDate, getCategoryBadgeClass } from "@/lib/utils";
import { Clock, Bookmark, ArrowRight } from "lucide-react";

interface FeaturedNewsCardProps {
  article: NewsArticle;
  priority?: boolean;
  className?: string;
}

export function FeaturedNewsCard({
  article,
  priority = false,
  className = "",
}: FeaturedNewsCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const badgeClass = getCategoryBadgeClass(article.categorySlug);

  return (
    <article
      className={`group flex flex-col bg-white rounded-3xl border border-black/[0.06] hover:border-black/[0.12] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Rectangular Image Plate with zoom & badge overlay */}
      {article.image && (
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 mb-5 image-zoom-wrap border border-black/[0.04]">
          <Link href={`/news/${article.slug}`} className="block w-full h-full">
            <Image
              src={article.image}
              alt={article.imageCaption || article.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </Link>
          <div className="absolute top-3 left-3 z-10">
            <Link
              href={`/article.categorySlug`}
              className={`badge-pill shadow-xs ${badgeClass}`}
            >
              {article.category}
            </Link>
          </div>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            aria-label="Bookmark story"
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-zinc-600 hover:text-zinc-950 shadow-xs transition-colors"
          >
            <Bookmark
              className={`w-3.5 h-3.5 ${bookmarked ? "fill-zinc-950 text-zinc-950" : ""}`}
            />
          </button>
        </div>
      )}

      {/* Headline */}
      <h2 className="font-display font-medium text-xl sm:text-2xl text-zinc-950 leading-snug tracking-tight group-hover:text-indigo-950 transition-colors mb-3">
        <Link href={`/news/${article.slug}`}>{article.title}</Link>
      </h2>

      {/* Subheadline (if available) */}
      {article.subheadline && (
        <p className="text-sm font-medium text-zinc-700 leading-relaxed mb-3">
          {article.subheadline}
        </p>
      )}

      {/* Excerpt */}
      {article.excerpt && (
        <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed line-clamp-3 mb-6">
          {article.excerpt}
        </p>
      )}

      {/* Author Byline & CTA */}
      <div className="mt-auto pt-4 border-t border-black/[0.05] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {article.author.avatar && (
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-zinc-200 shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-900 leading-tight">
              {article.author.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-sans">
              {formatDate(article.publishedAt)} Â· {article.readTime}
            </span>
          </div>
        </div>

        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 hover:text-indigo-900 transition-colors group/link"
        >
          <span>Read essay</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
