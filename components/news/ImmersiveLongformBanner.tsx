import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { formatDate } from "@/lib/utils";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";

interface ImmersiveLongformBannerProps {
  article: NewsArticle;
}

export function ImmersiveLongformBanner({ article }: ImmersiveLongformBannerProps) {
  return (
    <section className="my-16" aria-label="Featured longform essay">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-900 text-white p-7 sm:p-12 lg:p-14 border border-zinc-800 shadow-2xl">
        {/* Ambient subtle glow background */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase border border-white/15 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                The Longform Dispatch
              </span>
              <span className="text-zinc-400 text-xs">
                {article.category}
              </span>
            </div>

            <h2 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl leading-tight text-white mb-4 hover:text-zinc-200 transition-colors">
              <Link href={`/news/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-2xl">
              {article.excerpt}
            </p>

            {/* Author info & button */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                {article.author.avatar && (
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-zinc-800 shrink-0 border border-white/20">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold text-white">
                    {article.author.name}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-sans">
                    <span>{formatDate(article.publishedAt)}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href={`/news/${article.slug}`}
                className="ml-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-100 transition-all shadow-md group"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right image plate (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl image-zoom-wrap group">
              <Link href={`/news/${article.slug}`} className="block w-full h-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              {article.imageCaption && (
                <p className="absolute bottom-3 left-4 right-4 text-[11px] text-zinc-300 font-serif italic truncate">
                  {article.imageCaption}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
