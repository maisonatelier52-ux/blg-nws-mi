"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatDate, getCategoryBadgeClass } from "@/lib/utils";
import { Clock, Bookmark } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
  showImage?: boolean;
  imageAspect?: "video" | "square" | "standard";
  size?: "default" | "large" | "compact";
  className?: string;
}

export function NewsCard({
  article,
  showImage = true,
  imageAspect = "video",
  size = "default",
  className = "",
}: NewsCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const aspectMap = {
    video: "aspect-[16/10]",
    square: "aspect-square",
    standard: "aspect-[3/2]",
  };

  const badgeClass = getCategoryBadgeClass(article.categorySlug);

  if (size === "compact") {
    // Horizontal compact smooth blog card
    return (
      <article
        className={`group flex items-start gap-4 p-3 rounded-2xl bg-white hover:bg-zinc-50/70 border border-black/[0.05] hover:border-black/[0.09] transition-all duration-300 ${className}`}
      >
        {showImage && article.image && (
          <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-24 rounded-xl overflow-hidden bg-zinc-100 image-zoom-wrap">
            <Link href={`/news/${article.slug}`} className="block w-full h-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="120px"
                className="object-cover"
              />
            </Link>
          </div>
        )}
        <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Link
                href={`/article.categorySlug`}
                className={`badge-pill text-[10px] py-0.5 px-2 font-medium ${badgeClass}`}
              >
                {article.category}
              </Link>
              <span className="text-[11px] text-zinc-400 font-sans">
                {article.readTime}
              </span>
            </div>
            <h3 className="font-display font-medium text-[15px] leading-snug text-zinc-950 group-hover:text-indigo-900 transition-colors line-clamp-2">
              <Link href={`/news/${article.slug}`}>{article.title}</Link>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-2">
            <span>By {article.author.name}</span>
          </div>
        </div>
      </article>
    );
  }

  // Smooth Modern Blog Card
  return (
    <article
      className={`group flex flex-col bg-white rounded-2xl border border-black/[0.06] hover:border-black/[0.12] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.07)] ${className}`}
    >
      {showImage && article.image && (
        <div
          className={`relative overflow-hidden rounded-xl bg-zinc-100 ${aspectMap[imageAspect]} mb-4 image-zoom-wrap`}
        >
          <Link href={`/news/${article.slug}`} className="block w-full h-full">
            <Image
              src={article.image}
              alt={article.imageCaption || article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </Link>
          <div className="absolute top-3 left-3 z-10">
            <Link
              href={`/article.categorySlug`}
              className={`badge-pill backdrop-blur-md shadow-xs ${badgeClass}`}
            >
              {article.category}
            </Link>
          </div>
          <button
            onClick={() => setBookmarked(!bookmarked)}
            aria-label="Bookmark article"
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-zinc-600 hover:text-zinc-950 shadow-xs transition-colors"
          >
            <Bookmark
              className={`w-4 h-4 ${bookmarked ? "fill-zinc-950 text-zinc-950" : ""}`}
            />
          </button>
        </div>
      )}

      <div className="flex flex-col flex-1">
        {/* Meta row if image is not shown */}
        {(!showImage || !article.image) && (
          <div className="flex items-center justify-between mb-2">
            <Link
              href={`/article.categorySlug`}
              className={`badge-pill ${badgeClass}`}
            >
              {article.category}
            </Link>
            <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-sans">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        )}

        {/* Title */}
        <h3
          className={`font-display font-medium text-zinc-950 leading-snug tracking-tight group-hover:text-indigo-950 transition-colors mb-2.5 line-clamp-2 ${
            size === "large" ? "text-xl sm:text-2xl" : "text-[1.15rem]"
          }`}
        >
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-[13px] text-zinc-600 line-clamp-2 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        )}

        {/* Author Byline & Read Info */}
        <div className="mt-auto pt-3 border-t border-black/[0.05] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {article.author.avatar && (
              <div className="relative w-6 h-6 rounded-full overflow-hidden bg-zinc-200 shrink-0">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xs font-medium text-zinc-900 leading-tight">
                {article.author.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-sans">
                {formatDate(article.publishedAt)}
              </span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-sans">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
