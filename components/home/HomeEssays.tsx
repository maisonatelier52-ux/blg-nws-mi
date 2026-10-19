"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/lib/category-theme";

export interface HomePost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  readTime: string;
  publishedAt: string;
  authorName: string;
}

export function HomeEssays({ posts }: { posts: HomePost[] }) {
  const [active, setActive] = useState("all");

  const filters = useMemo(() => {
    const counts = new Map<string, { name: string; n: number }>();
    posts.forEach((p) => {
      const c = counts.get(p.categorySlug);
      counts.set(p.categorySlug, { name: p.category, n: (c?.n ?? 0) + 1 });
    });
    return [...counts.entries()]
      .sort((a, b) => b[1].n - a[1].n)
      .slice(0, 5)
      .map(([slug, v]) => ({ slug, name: v.name }));
  }, [posts]);

  const visible = active === "all" ? posts : posts.filter((p) => p.categorySlug === active);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14 border-y border-white/15 py-4"
        role="tablist"
        aria-label="Filter essays by topic"
      >
        {[{ slug: "all", name: "All" }, ...filters].map((f) => {
          const on = f.slug === active;
          return (
            <button
              key={f.slug}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(f.slug)}
              className={`relative text-[12px] uppercase tracking-[0.2em] pb-1 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:transition-all after:duration-500 ${
                on ? "text-white after:w-full" : "text-zinc-500 hover:text-white after:w-0 hover:after:w-full"
              }`}
            >
              {f.name}
            </button>
          );
        })}
      </div>

      <div key={active} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {visible.map((p) => (
          <Link key={p.id} href={`/news/${p.slug}`} data-reveal className="group block">
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/15 bg-zinc-950">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                className="object-cover transition-all duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="pt-6 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                {p.category} <span className="mx-1.5">·</span> {p.readTime.replace(" read", "")}
              </p>
              <h3 className="font-display mt-3 text-[1.45rem] leading-snug text-white">
                <span className="u-line">{p.title}</span>
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-400 line-clamp-3">{p.excerpt}</p>
              <p className="font-display italic mt-4 text-[14px] text-zinc-500">
                By {p.authorName} <span className="mx-1">—</span> {formatPostDate(p.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
