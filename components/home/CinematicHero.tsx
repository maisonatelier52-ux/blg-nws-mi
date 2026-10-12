"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChronicleHeader } from "@/components/layout/ChronicleHeader";
import { ArrowRight } from "lucide-react";

export function CinematicHero() {
  return (
    <div className="relative w-full min-h-[78vh] lg:min-h-[85vh] bg-black text-white flex flex-col justify-between overflow-hidden selection:bg-white selection:text-black">

      {/* ─────────────────────────────────────────────────────────── */}
      {/* TOP HEADER — Stacked "The" / "Briefline" logo               */}
      {/* ─────────────────────────────────────────────────────────── */}
      <ChronicleHeader isSticky={false} showDivider={false} />

      {/* ─────────────────────────────────────────────────────────── */}
      {/* HERO MAIN STAGE — Elevated height & breathing space          */}
      {/* ─────────────────────────────────────────────────────────── */}
      <div className="relative flex-1 flex items-center w-full px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16 xl:py-20">

        {/* Right portrait image with left-to-dark gradient */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[72%] lg:w-[62%] h-full">
            <Image
              src="/hero-portrait.jpg"
              alt="The Briefline — Lead Editorial Dispatch"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 62vw"
              className="object-cover object-top md:object-center filter brightness-[0.92] contrast-[1.05]"
            />
            {/* Seamless left fade to black */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/60 lg:via-black/20 to-transparent" />
            {/* Top fade */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>
        </div>

        {/* Left editorial copy */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl mx-0 my-auto py-8">

          <p style={{ ["--d" as string]: "50ms" }} className="hero-rise mb-5 text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-sans">
            Essay of the week
          </p>

          {/* Main Headline */}
          <h1 style={{ ["--d" as string]: "150ms" }} className="hero-rise font-display font-medium text-3xl sm:text-4xl md:text-[3rem] leading-[1.12] tracking-tight text-white drop-shadow-sm">
            Federal Reserve Signals
            <br />
            Prolonged Equilibrium
          </h1>

          {/* Subtitle / Dateline */}
          <p style={{ ["--d" as string]: "350ms" }} className="hero-rise mt-5 text-[15px] sm:text-base text-zinc-300 font-display italic tracking-normal leading-relaxed max-w-md font-normal">
            WASHINGTON &middot; Oct 7, 2026 &mdash; Benchmark overnight rate held at 3.75%&ndash;4.00% as core price indicators align with target balance for fourth consecutive quarter.
          </p>

          {/* Actions — Removed View Wire, Clean Dispatch Button */}
          <div style={{ ["--d" as string]: "550ms" }} className="hero-rise mt-8 flex items-center">
            <Link
              href="/news/federal-reserve-signals-equilibrium-inflation-target"
              className="group/cta inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-black text-xs font-sans font-semibold tracking-wider uppercase hover:bg-zinc-200 transition-colors duration-200"
            >
              <span>Read Full Dispatch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
