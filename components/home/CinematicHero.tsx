"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChronicleHeader } from "@/components/layout/ChronicleHeader";
import { ArrowRight } from "lucide-react";
import { getHeroArticle, NewsArticle } from "@/lib/news";

interface CinematicHeroProps {
  article?: NewsArticle;
}

export function CinematicHero({ article }: CinematicHeroProps) {
  const currentArticle = article || getHeroArticle();

  return (
    <div className="relative w-full min-h-[78vh] lg:min-h-[85vh] bg-black text-white flex flex-col justify-between overflow-hidden selection:bg-white selection:text-black">

      {/* ─────────────────────────────────────────────────────────── */}
      {/* TOP HEADER — Stacked "The" / "Briefline" logo               */}
      {/* ─────────────────────────────────────────────────────────── */}
      <ChronicleHeader isSticky={false} showDivider={false} />

      {/* ─────────────────────────────────────────────────────────── */}
      {/* HERO MAIN STAGE — Elevated height & breathing space          */}
      {/* ─────────────────────────────────────────────────────────── */}
      <div className="relative flex-1 flex items-center w-full px-8 sm:px-14 lg:px-20 xl:px-24 py-10 sm:py-14 lg:py-16 xl:py-20">

        {/* Right image with left-to-dark gradient */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[72%] lg:w-[62%] h-full">
            <Image
              src={currentArticle.image}
              alt={currentArticle.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 62vw"
              className="object-cover object-center"
            />
            {/* Seamless left fade to black */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/60 lg:via-black/20 to-transparent" />
            {/* Top fade */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>
        </div>

        {/* Content Container aligned with header */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex items-center">
          {/* Left editorial copy */}
          <div className="max-w-xl lg:max-w-2xl mx-0 my-auto pt-16 sm:pt-24 lg:pt-28 pb-4">

            <p style={{ ["--d" as string]: "50ms" }} className="hero-rise mb-3 text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-sans">
              {currentArticle.category}
            </p>

            {/* Main Headline */}
            <h1 style={{ ["--d" as string]: "150ms" }} className="hero-rise font-display font-medium text-3xl sm:text-4xl md:text-[3rem] leading-[1.08] tracking-tight text-white drop-shadow-sm">
              {currentArticle.title}
            </h1>

            {/* Subtitle / Dateline */}
            <p style={{ ["--d" as string]: "350ms" }} className="hero-rise mt-4 text-xs sm:text-[13px] text-zinc-300 font-sans tracking-normal leading-relaxed max-w-md font-normal">
              WASHINGTON &middot; Oct 7, 2026 &mdash; {currentArticle.subheadline || currentArticle.excerpt}
            </p>

            {/* Actions — Read More Button */}
            <div style={{ ["--d" as string]: "550ms" }} className="hero-rise mt-6 flex items-center">
              <Link
                href={`/news/${currentArticle.slug}`}
                className="group/cta inline-flex items-center gap-2.5 px-8 py-3.5 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
