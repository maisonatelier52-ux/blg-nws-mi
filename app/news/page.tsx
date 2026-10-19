import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChronicleHeader } from "@/components/layout/ChronicleHeader";
import { getAllArticles, getMostReadArticles, CATEGORIES } from "@/lib/news";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "All Dispatches — The Briefline",
  description:
    "A continuous record of investigative reporting, literary critique, and policy dispatches across all departments.",
};

export default function AllArticlesPage() {
  const articles = getAllArticles();
  const mostRead = getMostReadArticles(5);
  const leadStory = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* ── Exact Briefline Header from Home Page ── */}
      <ChronicleHeader isSticky={false} />


      {/* ── Main Content Area ── */}
      <main className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 py-10 lg:py-14 bg-black">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">

          {/* Left 8 Cols: Stories */}
          <div className="xl:col-span-8 space-y-12">

            {/* Lead Story */}
            {leadStory && (
              <article className="group bg-black border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                <Link href={`/news/${leadStory.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <Image
                    src={leadStory.image}
                    alt={leadStory.title}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 950px"
                    className="object-cover group-hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 text-[10px] tracking-widest uppercase bg-black/80 backdrop-blur-md text-white border border-white/20">
                      Lead Dispatch
                    </span>
                  </div>
                </Link>

                <div className="p-6 sm:p-8 space-y-4 bg-black">
                  <div className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-zinc-400">
                    <Link href={`/${leadStory.categorySlug}`} className="hover:text-white transition-colors">
                      {leadStory.category}
                    </Link>
                    <span className="text-zinc-600">&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {leadStory.readTime}
                    </span>
                  </div>

                  <h2 className="font-sans font-semibold text-lg sm:text-xl lg:text-2xl text-white group-hover:text-zinc-200 transition-colors leading-snug">
                    <Link href={`/news/${leadStory.slug}`}>
                      {leadStory.title}
                    </Link>
                  </h2>

                  <p className="font-sans text-xs sm:text-[13px] text-zinc-400 font-normal leading-relaxed line-clamp-3">
                    {leadStory.excerpt}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-sans">
                      By {leadStory.author.name} &middot; {leadStory.publishedAt.split("T")[0]}
                    </span>
                    <Link
                      href={`/news/${leadStory.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-zinc-300 transition-colors"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Stories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingArticles.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group flex flex-col bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between bg-black">
                    <div>
                      <div className="text-[11px] tracking-wider text-zinc-500 uppercase font-sans mb-2">
                        {item.category} &middot; {item.readTime}
                      </div>
                      <h3 className="font-sans font-medium text-sm sm:text-base text-white group-hover:text-zinc-200 transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400 line-clamp-2 font-normal leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500">
                      By {item.author.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* Right 4 Cols: Sidebar */}
          <aside className="xl:col-span-4 space-y-10 xl:border-l xl:border-white/10 xl:pl-10">

            {/* Most Read */}
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-zinc-400 font-sans pb-3 mb-6 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-white/60" />
                <span>Most Read Dispatches</span>
              </div>

              <div className="space-y-5">
                {mostRead.map((item, i) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group flex gap-4 items-start pb-4 border-b border-white/5 last:border-b-0"
                  >
                    <span className="font-mono text-xs text-zinc-500 font-bold shrink-0 pt-0.5">
                      0{i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] tracking-widest uppercase text-zinc-500 block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-sans text-xs sm:text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-zinc-400 font-sans pb-3 mb-4 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-white/60" />
                <span>Departments</span>
              </div>

              <ul className="divide-y divide-white/5">
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/${c.slug}`}
                      className="flex items-center justify-between py-2.5 text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>{c.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-10 px-6 sm:px-10 lg:px-14 bg-black">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <Link href="/" className="group flex flex-col items-start leading-none">
            <span className="font-serif text-[9px] font-semibold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors">
              The
            </span>
            <span className="font-serif text-sm font-bold tracking-tight uppercase text-white group-hover:text-zinc-300 transition-colors mt-0.5">
              Briefline
            </span>
          </Link>
          <span>&#169; 2026 The Briefline. All rights reserved.</span>
          <div className="flex items-center gap-6 text-[12px] uppercase tracking-wider text-zinc-400">
            <Link href="/world" className="hover:text-white transition-colors">World</Link>
            <Link href="/politics" className="hover:text-white transition-colors">Politics</Link>
            <Link href="/business" className="hover:text-white transition-colors">Business</Link>
            <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
