import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ChronicleHeader } from "@/components/layout/ChronicleHeader";
import { CategoryBlog, type BlogPost } from "@/components/category/CategoryBlog";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CATEGORIES, getArticlesByCategory, getMostReadArticles } from "@/lib/news";
import { formatPostDate } from "@/lib/category-theme";

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return { title: "Not Found — The Briefline" };
  return { title: `${cat.name} — The Briefline`, description: cat.description };
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function Rule() {
  return (
    <div className="flex items-center justify-center gap-4 text-zinc-600" aria-hidden>
      <span className="h-px w-16 sm:w-28 bg-white/20" />
      <span className="text-[10px]">◆</span>
      <span className="h-px w-16 sm:w-28 bg-white/20" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, as: Tag = "h2" }: { eyebrow: string; title: string; as?: "h1" | "h2" }) {
  return (
    <div data-reveal className="text-center mb-14">
      <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">{eyebrow}</p>
      <Tag className="font-display mt-4 text-3xl sm:text-4xl text-white">{title}</Tag>
      <div className="mt-6"><Rule /></div>
    </div>
  );
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const articles = getArticlesByCategory(slug);
  const featured = articles[0];
  const rest: BlogPost[] = articles.slice(1).map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
    tags: a.tags,
    readTime: a.readTime,
    publishedAt: a.publishedAt,
    author: { name: a.author.name, avatar: a.author.avatar },
  }));
  const favourites = getMostReadArticles(3);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <ScrollProgress color="#ffffff" />
      <ChronicleHeader currentCategorySlug={slug} isSticky={false} />

      <main>
        {articles.length === 0 ? (
          <section className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 py-28 text-center">
            <h1 data-reveal className="font-display text-5xl sm:text-7xl">{cat.name}</h1>
            <p data-reveal className="font-display italic text-2xl text-zinc-400 mt-6">Nothing has been published here yet.</p>
            <Link
              data-reveal
              href="/"
              className="group inline-flex items-center gap-3 mt-10 border border-white/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors duration-500"
            >
              Back to home
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </section>
        ) : (
          <>
            {/* ═════════ FEATURED ═════════ */}
            <section className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-20 sm:pb-28">
              <SectionTitle as="h1" eyebrow="Editor's choice" title={`Inside ${cat.name}`} />

              <Link
                href={`/news/${featured.slug}`}
                data-reveal="zoom"
                className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-zinc-950">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                    {featured.tags[0]} <span className="mx-1.5">·</span> {featured.readTime.replace(" read", "")}
                  </p>
                  <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15]">
                    <span className="u-line">{featured.title}</span>
                  </h2>
                  <p className="mt-6 text-[15px] leading-[1.8] text-zinc-400 line-clamp-4">{featured.excerpt}</p>
                  <p className="font-display italic mt-6 text-[15px] text-zinc-500">
                    By {featured.author.name} <span className="mx-1">—</span> {formatPostDate(featured.publishedAt)}
                  </p>
                  <span className="mt-9 inline-flex items-center gap-3 border border-white/30 px-7 py-3 text-[12px] uppercase tracking-[0.25em] transition-colors duration-500 group-hover:bg-white group-hover:text-black">
                    Continue reading
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </section>

            {/* ═════════ ARCHIVE ═════════ */}
            {rest.length > 0 && (
              <section className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14 pb-24 sm:pb-32">
                <SectionTitle eyebrow="The archive" title={`More from ${cat.name}`} />
                <CategoryBlog posts={rest} />
              </section>
            )}

            {/* ═════════ FAVOURITES ═════════ */}
            {favourites.length > 0 && (
              <section className="border-t border-white/15">
                <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
                  <SectionTitle eyebrow="Across the journal" title="Reader Favourites" />
                  <ol className="divide-y divide-white/15 border-y border-white/15">
                    {favourites.map((a, i) => (
                      <li key={a.id} data-reveal>
                        <Link
                          href={`/news/${a.slug}`}
                          className="group flex items-baseline gap-6 sm:gap-10 py-8 transition-all duration-500 hover:pl-3"
                        >
                          <span className="font-display italic text-2xl text-zinc-600 w-10 shrink-0 transition-colors group-hover:text-white">
                            {ROMAN[i]}.
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">{a.category}</p>
                            <h3 className="font-display mt-2 text-xl sm:text-2xl leading-snug text-zinc-200 group-hover:text-white transition-colors">
                              {a.title}
                            </h3>
                          </div>
                          <ArrowRight className="w-4 h-4 shrink-0 text-zinc-600 transition-all duration-500 group-hover:text-white group-hover:translate-x-2" />
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            )}
          </>
        )}

        {/* ═════════ NEWSLETTER ═════════ */}
        <section className="px-6 sm:px-10 lg:px-14 pb-24">
          <div data-reveal="zoom" className="max-w-[900px] mx-auto border border-white/20 p-2">
            <div className="border border-white/10 px-8 py-14 sm:px-16 sm:py-20 text-center">
              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">The Weekly Letter</p>
              <h2 className="font-display mt-5 text-3xl sm:text-4xl leading-tight">
                The best of {cat.name}, once a week.
              </h2>
              <div className="mt-6"><Rule /></div>
              <p className="font-display italic mt-6 text-lg text-zinc-400">Meaningful updates, whenever it matters.</p>
              <Link
                href="/#newsletter"
                className="group mt-9 inline-flex items-center gap-3 bg-white text-black px-8 py-3.5 text-[12px] uppercase tracking-[0.25em] transition-colors duration-500 hover:bg-zinc-300"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 py-10 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <Link href="/" className="group flex flex-col items-start leading-none">
            <span className="font-serif text-[9px] font-semibold tracking-[0.2em] uppercase text-zinc-500">The</span>
            <span className="font-serif text-sm font-bold tracking-tight uppercase text-white mt-0.5">Briefline</span>
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
