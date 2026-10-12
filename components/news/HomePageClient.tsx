"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { BlogHero } from "./HeroStory";
import { NewsCard } from "./NewsCard";
import { TrendingStrip } from "./TrendingStrip";
import { ImmersiveLongformBanner } from "./ImmersiveLongformBanner";
import { AuthorSpotlight } from "./AuthorSpotlight";
import { BlogFilterBar } from "./BlogFilterBar";
import { MostRead } from "./MostRead";
import { SectionHeading } from "../common/SectionHeading";
import { Newsletter } from "../common/Newsletter";
import { Sparkles, ArrowRight, BookOpen, Bookmark, ShieldCheck, Compass } from "lucide-react";

interface CategoryTopic {
  name: string;
  slug: string;
}

interface HomePageClientProps {
  heroArticle: NewsArticle;
  allArticles: NewsArticle[];
  trendingArticles: NewsArticle[];
  longformArticle: NewsArticle;
  technologyArticles: NewsArticle[];
  cultureArticles: NewsArticle[];
  businessArticles: NewsArticle[];
  politicsArticles: NewsArticle[];
  mostReadArticles: NewsArticle[];
  latestArticles: NewsArticle[];
  categories: CategoryTopic[];
}

export function HomePageClient({
  heroArticle,
  allArticles,
  trendingArticles,
  longformArticle,
  technologyArticles,
  cultureArticles,
  businessArticles,
  politicsArticles,
  mostReadArticles,
  latestArticles,
  categories,
}: HomePageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Calculate article counts per category
  const countMap = useMemo(() => {
    const counts: Record<string, number> = { all: allArticles.length };
    allArticles.forEach((a) => {
      counts[a.categorySlug] = (counts[a.categorySlug] || 0) + 1;
    });
    return counts;
  }, [allArticles]);

  // Filtered articles when a specific category is clicked
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "all") {
      return allArticles.filter((a) => a.id !== heroArticle.id);
    }
    return allArticles.filter((a) => a.categorySlug === selectedCategory);
  }, [allArticles, selectedCategory, heroArticle.id]);

  // Main grid articles (top 6 excluding hero)
  const mainGridArticles = useMemo(() => {
    return allArticles
      .filter((a) => a.id !== heroArticle.id && a.id !== longformArticle.id)
      .slice(0, 6);
  }, [allArticles, heroArticle.id, longformArticle.id]);

  return (
    <div className="w-full">
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* 1. HERO COVER STORY & EDITOR HIGHLIGHTS                       */}
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <BlogHero article={heroArticle} />

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* 2. TRENDING STRIP                                             */}
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <TrendingStrip articles={trendingArticles} />

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* 3. INTERACTIVE TOPIC FILTER BAR                               */}
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <BlogFilterBar
        categories={categories}
        selectedSlug={selectedCategory}
        onSelect={(slug) => setSelectedCategory(slug)}
        countMap={countMap}
      />

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* 4. CONDITIONAL VIEW: FILTERED CATEGORY VIEW OR FULL HOME FEED  */}
      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {selectedCategory !== "all" ? (
        <section className="mb-20 animate-in fade-in duration-300">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-black/[0.06]">
            <div>
              <span className="text-xs uppercase font-semibold text-zinc-400 tracking-wider">
                Filtered Dispatches
              </span>
              <h2 className="font-display font-medium text-3xl text-zinc-950 capitalize">
                {categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}
              </h2>
            </div>
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-colors"
            >
              Reset to All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                showImage={true}
                imageAspect="video"
              />
            ))}
          </div>
        </section>
      ) : (
        <>
          {/* â”€â”€ Section A: Recent Curated Essays â”€â”€ */}
          <section className="mb-16">
            <SectionHeading
              title="Recent Essays &amp; Dispatches"
              subtitle="Deep perspectives on current affairs, literature, and the frontiers of ideas"
              href="/news"
              linkText="Complete Archive"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainGridArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  showImage={true}
                  imageAspect="video"
                />
              ))}
            </div>
          </section>

          {/* â”€â”€ Section B: The Longform Immersive Centerpiece â”€â”€ */}
          <ImmersiveLongformBanner article={longformArticle} />

          {/* â”€â”€ Section C: Main Grid + Sticky Sidebar â”€â”€ */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start my-16">
            {/* Left Content (8 cols) */}
            <div className="xl:col-span-8 space-y-16">

              {/* Technology & Artificial Intelligence */}
              <section>
                <SectionHeading
                  title="Technology &amp; The Future"
                  subtitle="Semiconductors, intelligent systems, and governance of the digital commons"
                  href="/technology"
                  linkText="All in Technology"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {technologyArticles.slice(0, 3).map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      showImage={true}
                      imageAspect="standard"
                    />
                  ))}
                </div>
              </section>

              {/* In-feed Smooth Newsletter Card */}
              <div className="rounded-3xl bg-gradient-to-r from-zinc-950 via-neutral-900 to-zinc-900 text-white p-7 sm:p-9 shadow-xl border border-zinc-800">
                <Newsletter variant="card" />
              </div>

              {/* Culture & Critique */}
              <section>
                <SectionHeading
                  title="Culture, Literature &amp; Arts"
                  subtitle="Critical reflections on modern sensibility, architecture, and enduring books"
                  href="/culture"
                  linkText="All in Culture"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cultureArticles.slice(0, 2).map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      showImage={true}
                      imageAspect="video"
                      size="large"
                    />
                  ))}
                </div>
              </section>

              {/* Business & Macroeconomics */}
              <section>
                <SectionHeading
                  title="Business &amp; Global Markets"
                  subtitle="Industrial transformations, capital allocation, and fiscal stability"
                  href="/business"
                  linkText="All in Business"
                />
                <div className="space-y-4">
                  {businessArticles.slice(0, 3).map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      showImage={true}
                      imageAspect="video"
                      size="compact"
                    />
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <aside className="xl:col-span-4 space-y-8 xl:sticky xl:top-24">
              {/* Most Read Ranked */}
              <MostRead articles={mostReadArticles} title="In High Demand" />

              {/* About The Briefline Card */}
              <div className="rounded-3xl bg-white p-6 border border-black/[0.06] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-display font-bold text-sm">
                    C
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-zinc-950 leading-tight">
                      The Briefline
                    </h4>
                    <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                      Editorial Collective
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mb-5">
                  An independent salon of editorial writing on politics, culture, business, technology, and the human condition. Unhurried journalism for curious minds.
                </p>
                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-500 font-normal">Over 48,000 readers</span>
                  <Link
                    href="/#newsletter"
                    className="text-zinc-950 hover:underline inline-flex items-center gap-1"
                  >
                    Join our circle â†’
                  </Link>
                </div>
              </div>

              {/* Curated Editorial Series */}
              <div className="rounded-3xl bg-white p-6 border border-black/[0.06] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 mb-4">
                  <Compass className="w-4 h-4 text-indigo-600" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
                    Curated Series
                  </h4>
                </div>
                <ul className="space-y-3.5">
                  {[
                    {
                      title: "The AI Governance Archive",
                      desc: "Four essays on sovereign compute & model ethics",
                      href: "/technology",
                    },
                    {
                      title: "Rediscovered Literary Voices",
                      desc: "Archival discoveries & critical reassessments",
                      href: "/culture",
                    },
                    {
                      title: "The Global Energy Reconfiguration",
                      desc: "Grid modernization & critical minerals",
                      href: "/world",
                    },
                  ].map((series) => (
                    <li key={series.title} className="group">
                      <Link href={series.href} className="block">
                        <span className="font-display font-medium text-sm text-zinc-900 group-hover:text-indigo-900 transition-colors line-clamp-1">
                          {series.title}
                        </span>
                        <span className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                          {series.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics Cloud */}
              <div className="rounded-3xl bg-white p-6 border border-black/[0.06] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 mb-4">
                  Browse by Subject
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.filter((c) => c.slug !== "all").map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-950 text-xs font-medium transition-all"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

            </aside>
          </div>

          {/* â”€â”€ Section D: Writers & Columnists Spotlight â”€â”€ */}
          <AuthorSpotlight articles={allArticles} />
        </>
      )}

      {/* â”€â”€ Section E: Bottom Community & Social Proof Strip â”€â”€ */}
      <section className="my-16 py-10 px-8 rounded-3xl bg-white border border-black/[0.06] shadow-xs text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            The Standard of Independent Thought
          </div>
          <h3 className="font-display font-medium text-2xl sm:text-3xl text-zinc-950 mb-3">
            Read by 50,000+ thinkers, builders, and cultural observers.
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            Every morning we bring you rigorous essays, original investigations, and cultural critique without algorithmic noise or clickbait.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#newsletter"
              className="px-6 py-3 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-md"
            >
              Get Free Weekly Dispatch
            </Link>
            <Link
              href="/news"
              className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 text-xs font-semibold transition-all"
            >
              Explore Complete Index
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
