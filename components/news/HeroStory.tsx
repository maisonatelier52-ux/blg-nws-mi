"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle, getAllArticles } from "@/lib/news";
import { formatDate, getCategoryBadgeClass } from "@/lib/utils";
import { Clock, Bookmark, Headphones, ArrowRight, Sparkles } from "lucide-react";

interface BlogHeroProps {
  article: NewsArticle;
}

export function BlogHero({ article }: BlogHeroProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const allArticles = getAllArticles();

  // Curate companion stories for the right column
  const companionStories = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const badgeClass = getCategoryBadgeClass(article.categorySlug);

  return (
    <section className="w-full pt-6 pb-12 sm:pt-8 sm:pb-16" aria-label="Cover Stories">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {/* LEFT COLUMN (7 cols): THE LEAD COVER ESSAY                     */}
        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-5 sm:p-7 border border-black/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
          <div>
            {/* Top Badge Strip */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="badge-pill bg-zinc-900 text-white font-medium text-[10px] py-1 px-3">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Cover Story
                </span>
                <Link
                  href={`/article.categorySlug`}
                  className={`badge-pill text-[10px] py-1 px-3 ${badgeClass}`}
                >
                  {article.category}
                </Link>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-100/60">
                  <Headphones className="w-3 h-3" />
                  Audio Edition
                </span>
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  aria-label="Bookmark cover essay"
                  className="w-8 h-8 rounded-full border border-black/[0.06] hover:bg-zinc-100 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${bookmarked ? "fill-zinc-950 text-zinc-950" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-zinc-950 leading-[1.18] tracking-tight hover:text-indigo-950 transition-colors mb-4">
              <Link href={`/news/${article.slug}`}>
                {article.title}
              </Link>
            </h1>

            {/* Excerpt */}
            <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
              {article.excerpt}
            </p>

            {/* Big Rectangular Image Plate with zoom */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 mb-6 image-zoom-wrap group border border-black/[0.04]">
              <Link href={`/news/${article.slug}`} className="block w-full h-full">
                <Image
                  src={article.image}
                  alt={article.imageCaption || article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover"
                />
              </Link>
            </div>
          </div>

          {/* Author Footer & Read Action */}
          <div className="pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-100 shrink-0 border border-black/[0.08]">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-xs font-semibold text-zinc-900 leading-tight">
                  {article.author.name}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-sans mt-0.5">
                  <span>{formatDate(article.publishedAt)}</span>
                  <span>Â·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href={`/news/${article.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-sm group"
            >
              <span>Read Cover Essay</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {/* RIGHT COLUMN (5 cols): EDITOR'S PICKS DECK                    */}
        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <aside className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-black/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] h-full flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="pulse-indicator text-emerald-500" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-950">
                    Editor&apos;s Highlights
                  </h2>
                </div>
                <span className="text-[11px] text-zinc-400 font-sans">
                  Selected Dispatches
                </span>
              </div>

              {/* 3 Stacked Cards */}
              <div className="space-y-4">
                {companionStories.map((story, idx) => {
                  const storyBadge = getCategoryBadgeClass(story.categorySlug);
                  return (
                    <article
                      key={story.id}
                      className="group p-3.5 rounded-2xl border border-black/[0.04] hover:border-black/[0.1] hover:bg-zinc-50/70 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {story.image && (
                          <div className="relative shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-zinc-100 image-zoom-wrap">
                            <Link href={`/news/${story.slug}`} className="block w-full h-full">
                              <Image
                                src={story.image}
                                alt={story.title}
                                fill
                                sizes="100px"
                                className="object-cover"
                              />
                            </Link>
                          </div>
                        )}
                        <div className="flex-1 min-w-0 flex flex-col justify-between h-24 py-0.5">
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1.5">
                              <Link
                                href={`/story.categorySlug`}
                                className={`badge-pill text-[9px] py-0.5 px-2 ${storyBadge}`}
                              >
                                {story.category}
                              </Link>
                              <span className="text-[10px] font-mono text-zinc-400">
                                0{idx + 1}
                              </span>
                            </div>
                            <h3 className="font-display font-medium text-sm leading-snug text-zinc-950 group-hover:text-indigo-950 transition-colors line-clamp-2">
                              <Link href={`/news/${story.slug}`}>
                                {story.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                            <span className="truncate max-w-[120px]">{story.author.name}</span>
                            <span className="shrink-0">{story.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Colophon / Bottom Dispatch Banner */}
            <div className="mt-6 pt-5 border-t border-black/[0.06] bg-zinc-50/80 rounded-2xl p-4">
              <p className="text-xs text-zinc-600 leading-relaxed italic font-serif">
                &ldquo;Independent editorial critique, thought leadership, and cultural commentary published daily.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-sans">
                <span className="text-zinc-500 font-medium">Over 24 essays this week</span>
                <Link
                  href="/news"
                  className="font-semibold text-zinc-950 hover:underline inline-flex items-center gap-1"
                >
                  Browse all posts <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
