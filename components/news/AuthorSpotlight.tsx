import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { PenTool, CheckCircle2 } from "lucide-react";

interface AuthorSpotlightProps {
  articles: NewsArticle[];
}

export function AuthorSpotlight({ articles }: AuthorSpotlightProps) {
  // Extract unique authors
  const authorsMap = new Map();
  articles.forEach((a) => {
    if (!authorsMap.has(a.author.name) && a.author.avatar) {
      authorsMap.set(a.author.name, {
        author: a.author,
        latestArticle: a,
      });
    }
  });

  const featuredAuthors = Array.from(authorsMap.values()).slice(0, 4);

  return (
    <section className="my-16" aria-label="Contributing writers">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-zinc-950" />
            <h2 className="font-display font-medium text-2xl sm:text-[1.75rem] text-zinc-950">
              Writers &amp; Columnists
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 pl-4">
            Independent minds shaping our cultural &amp; political reporting
          </p>
        </div>

        <Link
          href="/news"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          All Contributors →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featuredAuthors.map(({ author, latestArticle }) => (
          <div
            key={author.name}
            className="group bg-white rounded-3xl p-5 border border-black/[0.06] hover:border-black/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06)] flex flex-col justify-between"
          >
            <div>
              {/* Avatar + Verified */}
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-zinc-100 mb-4 border border-black/[0.06] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="font-display font-semibold text-base text-zinc-950">
                  {author.name}
                </h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 fill-indigo-50" />
              </div>

              <p className="text-[11px] font-medium text-zinc-500 mb-3">
                {author.title}
              </p>

              {author.bio && (
                <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed mb-4">
                  {author.bio}
                </p>
              )}
            </div>

            {/* Latest piece */}
            <div className="pt-3 border-t border-black/[0.04] text-[11px]">
              <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider block mb-1">
                Latest Dispatch
              </span>
              <Link
                href={`/news/${latestArticle.slug}`}
                className="font-medium text-zinc-800 hover:text-indigo-900 line-clamp-1 transition-colors"
              >
                {latestArticle.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
