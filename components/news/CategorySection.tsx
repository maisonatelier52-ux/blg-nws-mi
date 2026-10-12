import React from "react";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { SectionHeading } from "../common/SectionHeading";
import { NewsCard } from "./NewsCard";
import { FeaturedNewsCard } from "./FeaturedNewsCard";
import { CompactNewsCard } from "./CompactNewsCard";

interface CategorySectionProps {
  title: string;
  categorySlug: string;
  articles: NewsArticle[];
  variant?: "featured-lead" | "three-column" | "two-column" | "investigations";
  subtitle?: string;
  className?: string;
}

export function CategorySection({
  title,
  categorySlug,
  articles,
  variant = "featured-lead",
  subtitle,
  className = "",
}: CategorySectionProps) {
  if (articles.length === 0) return null;

  const leadStory = articles[0];
  const sideStories = articles.slice(1, 4);

  // Investigations: dark editorial block
  if (variant === "investigations") {
    return (
      <section
        className={`bg-zinc-950 rounded-2xl p-7 sm:p-10 ${className}`}
        aria-label={title}
      >
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-zinc-900 px-3 py-1 rounded-full">
              Special Report
            </span>
            <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
          </div>
          <Link
            href={`/categorySlug`}
            className="text-xs text-zinc-500 hover:text-white transition-colors font-medium"
          >
            All reports â†’
          </Link>
        </div>

        {leadStory && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Link href={`/news/${leadStory.slug}`} className="group block">
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-800 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={leadStory.image}
                    alt={leadStory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-zinc-300 transition-colors leading-snug mb-2">
                  {leadStory.title}
                </h3>
              </Link>
              <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                {leadStory.excerpt}
              </p>
              <p className="text-xs text-zinc-600 mt-2">By {leadStory.author.name} Â· {leadStory.readTime}</p>
            </div>

            <div className="divide-y divide-zinc-800">
              {sideStories.map((item) => (
                <article key={item.id} className="py-4 first:pt-0 last:pb-0 group">
                  <h4 className="font-display font-semibold text-base text-zinc-200 group-hover:text-white transition-colors leading-snug">
                    <Link href={`/news/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <p className="text-xs text-zinc-500 line-clamp-2 mt-1">{item.excerpt}</p>
                  <p className="text-[11px] text-zinc-700 mt-1.5">{item.author.name}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  if (variant === "three-column") {
    return (
      <section className={className} aria-label={title}>
        <SectionHeading title={title} subtitle={subtitle} href={`/categorySlug`} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} showImage={true} imageAspect="standard" />
          ))}
        </div>
      </section>
    );
  }

  if (variant === "two-column") {
    return (
      <section className={className} aria-label={title}>
        <SectionHeading title={title} subtitle={subtitle} href={`/categorySlug`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeaturedNewsCard article={leadStory} priority={false} />
          <div className="flex flex-col gap-4">
            {sideStories.slice(0, 2).map((a) => (
              <NewsCard key={a.id} article={a} showImage={true} imageAspect="video" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // featured-lead default
  return (
    <section className={className} aria-label={title}>
      <SectionHeading title={title} subtitle={subtitle} href={`/categorySlug`} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7">
          <FeaturedNewsCard article={leadStory} priority={false} />
        </div>
        <div className="md:col-span-5 flex flex-col gap-4">
          {sideStories.map((story) => (
            <CompactNewsCard key={story.id} article={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
