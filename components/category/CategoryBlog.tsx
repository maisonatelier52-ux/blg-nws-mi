"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/lib/category-theme";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  author: { name: string; avatar: string };
}

export function CategoryBlog({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("All");

  const topics = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([t]) => t);
  }, [posts]);

  const visible = active === "All" ? posts : posts.filter((p) => p.tags.includes(active));

  return (
    <div>
      {topics.length > 1 && (
        <div
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14 border-y border-white/15 py-4"
          role="tablist"
          aria-label="Filter posts by topic"
        >
          {["All", ...topics].map((t) => {
            const on = t === active;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(t)}
                className={`relative text-[12px] uppercase tracking-[0.2em] pb-1 transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-white after:transition-all after:duration-500 ${
                  on ? "text-white after:w-full" : "text-zinc-500 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      )}

      <div key={active} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {visible.map((post) => (
          <Link key={post.id} href={`/news/${post.slug}`} data-reveal className="group block">
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/15 bg-zinc-950">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            <div className="pt-6 text-center">
              <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                {post.tags[0]} <span className="mx-1.5">·</span> {post.readTime.replace(" read", "")}
              </p>
              <h3 className="font-display mt-3 text-[1.45rem] leading-snug text-white">
                <span className="u-line">{post.title}</span>
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-400 line-clamp-3">{post.excerpt}</p>
              <p className="font-display italic mt-4 text-[14px] text-zinc-500">
                By {post.author.name} <span className="mx-1">—</span> {formatPostDate(post.publishedAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
