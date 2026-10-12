import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ChronicleHeader } from "@/components/layout/ChronicleHeader";
import { BlogArticleActions } from "@/components/article/BlogArticleActions";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { getArticleBySlug, getRelatedArticles, getAllArticles } from "@/lib/news";
import { formatPostDate } from "@/lib/category-theme";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found — The Briefline" };
  return {
    title: `${article.title} — The Briefline Journal`,
    description: article.subheadline || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.subheadline || article.excerpt,
      type: "article",
      images: article.image ? [{ url: article.image }] : [],
    },
  };
}

function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-zinc-600 ${className}`} aria-hidden>
      <span className="h-px w-14 sm:w-24 bg-white/20" />
      <span className="text-[10px]">◆</span>
      <span className="h-px w-14 sm:w-24 bg-white/20" />
    </div>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const all = getAllArticles();
  const i = all.findIndex((a) => a.slug === slug);
  const prev = all[(i - 1 + all.length) % all.length];
  const next = all[(i + 1) % all.length];
  const related = getRelatedArticles(article.slug, article.categorySlug, 4);
  const titleWords = article.title.split(" ");
  const firstParagraph = article.content?.findIndex((b) => b.type === "paragraph") ?? -1;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <ScrollProgress color="#ffffff" />
      <ChronicleHeader currentCategorySlug={article.categorySlug} isSticky={false} />

      {/* ═════════ TITLE BLOCK ═════════ */}
      <header className="max-w-[860px] mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-10 text-center">
        <nav
          className="hero-rise flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-zinc-500"
          style={{ ["--d" as string]: "50ms" }}
          aria-label="Breadcrumb"
        >
          <Link href={`/${article.categorySlug}`} className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
            <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
            {article.category}
          </Link>
          <span>·</span>
          <span>The Journal</span>
        </nav>

        <h1
          className="font-display mt-8 text-[2.1rem] sm:text-5xl lg:text-[3.6rem] leading-[1.12] tracking-tight font-medium"
          aria-label={article.title}
        >
          {titleWords.map((w, wi) => (
            <span key={wi} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em]">
              <span className="char-rise" style={{ ["--d" as string]: `${150 + wi * 60}ms` }}>
                {w}
                {wi < titleWords.length - 1 ? "\u00A0" : ""}
              </span>
            </span>
          ))}
        </h1>

        {article.subheadline && (
          <p
            className="hero-rise font-display italic mt-7 mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-400"
            style={{ ["--d" as string]: `${300 + titleWords.length * 60}ms` }}
          >
            {article.subheadline}
          </p>
        )}

        <div className="hero-rise mt-9" style={{ ["--d" as string]: `${450 + titleWords.length * 60}ms` }}>
          <Rule />
          <div className="mt-8 flex flex-col items-center gap-3">
            {article.author.avatar && (
              <span className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image src={article.author.avatar} alt={article.author.name} fill sizes="48px" className="object-cover grayscale" />
              </span>
            )}
            <p className="font-display italic text-lg text-zinc-200">By {article.author.name}</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              {formatPostDate(article.publishedAt)} &nbsp;·&nbsp; {article.readTime}
            </p>
          </div>
        </div>
      </header>

      {/* ═════════ FEATURE IMAGE ═════════ */}
      {article.image && (
        <figure className="max-w-[1040px] mx-auto px-6 sm:px-8 mb-14 sm:mb-20" data-reveal="zoom">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/15 bg-zinc-950">
            <Image
              src={article.image}
              alt={article.imageCaption || article.title}
              fill
              priority
              sizes="(max-width: 1040px) 100vw, 1040px"
              className="kenburns object-cover"
            />
          </div>
          {(article.imageCaption || article.imageCredit) && (
            <figcaption className="mt-4 text-center max-w-xl mx-auto">
              <span className="font-display italic text-[14px] text-zinc-400 leading-relaxed block">{article.imageCaption}</span>
              {article.imageCredit && (
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 block mt-2">
                  Photograph: {article.imageCredit}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      )}

      {/* ═════════ BODY ═════════ */}
      <main className="max-w-[700px] mx-auto px-6 sm:px-8 pb-16">
        <article className="article-flow font-display text-[1.12rem] sm:text-[1.22rem] leading-[1.95] text-zinc-300 space-y-7">
          {article.content && article.content.length > 0 ? (
            article.content.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={idx} data-reveal className={idx === firstParagraph ? "dropcap" : ""}>
                      {block.text}
                    </p>
                  );

                case "heading2":
                  return (
                    <div key={idx} data-reveal className="pt-10 text-center">
                      <Rule className="mb-6" />
                      <h2 className="font-display text-2xl sm:text-[1.9rem] leading-snug text-white font-medium">{block.text}</h2>
                    </div>
                  );

                case "heading3":
                  return (
                    <h3 key={idx} data-reveal className="font-display italic text-xl sm:text-2xl text-white pt-4">
                      {block.text}
                    </h3>
                  );

                case "quote":
                  return (
                    <blockquote key={idx} data-reveal className="my-14 text-center">
                      <span className="font-display block text-6xl leading-none text-zinc-600 select-none" aria-hidden>“</span>
                      <p className="font-display italic text-2xl sm:text-[1.75rem] leading-snug text-white max-w-xl mx-auto -mt-2">
                        {block.quote}
                      </p>
                      {(block.author || block.source) && (
                        <footer className="mt-6 text-[11px] uppercase tracking-[0.3em] text-zinc-500 not-italic font-sans">
                          — {block.author}
                          {block.source ? `, ${block.source}` : ""}
                        </footer>
                      )}
                    </blockquote>
                  );

                case "takeaways":
                  return (
                    <aside key={idx} data-reveal className="my-12 border border-white/20 p-1.5">
                      <div className="border border-white/10 px-7 py-8 sm:px-10 font-sans">
                        <p className="text-center text-[11px] uppercase tracking-[0.35em] text-zinc-400">In brief</p>
                        <Rule className="my-5" />
                        <ul className="space-y-4 text-[15px] leading-relaxed text-zinc-300">
                          {block.items?.map((item, n) => (
                            <li key={n} className="flex gap-4">
                              <span className="font-display italic text-zinc-500 shrink-0 w-6">{n + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
                  );

                case "list":
                  return (
                    <ul key={idx} data-reveal className="space-y-3 text-[1.05rem]">
                      {block.items?.map((item, n) => (
                        <li key={n} className="flex gap-4 leading-relaxed">
                          <span className="text-zinc-600 shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );

                case "image":
                  return block.url ? (
                    <figure key={idx} data-reveal className="my-12 -mx-6 sm:-mx-16">
                      <div className="relative aspect-[16/10] overflow-hidden border border-white/15 bg-zinc-950">
                        <Image src={block.url} alt={block.caption || ""} fill sizes="(max-width: 800px) 100vw, 800px" className="object-cover" />
                      </div>
                      {(block.caption || block.credit) && (
                        <figcaption className="mt-3 text-center text-[13px] italic text-zinc-500">
                          {block.caption}
                          {block.credit && <span className="not-italic text-[10px] uppercase tracking-[0.25em] text-zinc-600 block mt-1">{block.credit}</span>}
                        </figcaption>
                      )}
                    </figure>
                  ) : null;

                default:
                  return null;
              }
            })
          ) : (
            <p data-reveal className="dropcap">{article.excerpt}</p>
          )}

          <div data-reveal className="pt-6 text-center text-zinc-600 text-xl select-none" aria-hidden>
            ❦
          </div>
        </article>

        {/* Topics */}
        {article.tags && article.tags.length > 0 && (
          <div data-reveal className="mt-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-4">Filed under</p>
            <p className="font-display italic text-lg text-zinc-400 leading-loose">
              {article.tags.join("  ·  ")}
            </p>
          </div>
        )}

        {/* Share */}
        <div data-reveal className="mt-12 pt-10 border-t border-white/15 text-center">
          <p className="font-display italic text-lg text-zinc-400 mb-6">Found this worth sharing?</p>
          <BlogArticleActions title={article.title} category={article.category} />
        </div>

        {/* Author */}
        <section data-reveal className="mt-16 border border-white/20 p-1.5">
          <div className="border border-white/10 px-7 py-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">About the writer</p>
            {article.author.avatar && (
              <span className="relative block w-20 h-20 rounded-full overflow-hidden border border-white/20 mx-auto mt-6">
                <Image src={article.author.avatar} alt={article.author.name} fill sizes="80px" className="object-cover grayscale" />
              </span>
            )}
            <h3 className="font-display text-2xl mt-5 text-white">{article.author.name}</h3>
            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 mt-2">{article.author.title}</p>
            {article.author.bio && (
              <p className="font-display italic text-[15.5px] leading-relaxed text-zinc-400 mt-5 max-w-md mx-auto">{article.author.bio}</p>
            )}
          </div>
        </section>

        {/* Prev / Next */}
        <nav data-reveal className="mt-16 grid grid-cols-1 sm:grid-cols-2 border-y border-white/15 sm:divide-x divide-white/15" aria-label="More essays">
          <Link href={`/news/${prev.slug}`} className="group py-8 sm:pr-8 transition-all duration-500 hover:sm:pl-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
              <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1.5" /> Previous
            </p>
            <h4 className="font-display text-lg leading-snug text-zinc-300 group-hover:text-white transition-colors mt-3 line-clamp-2">{prev.title}</h4>
          </Link>
          <Link href={`/news/${next.slug}`} className="group py-8 sm:pl-8 sm:text-right border-t sm:border-t-0 border-white/15 transition-all duration-500 hover:sm:pr-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 flex items-center sm:justify-end gap-2">
              Next <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1.5" />
            </p>
            <h4 className="font-display text-lg leading-snug text-zinc-300 group-hover:text-white transition-colors mt-3 line-clamp-2">{next.title}</h4>
          </Link>
        </nav>
      </main>

      {/* ═════════ KEEP READING ═════════ */}
      {related.length > 0 && (
        <section className="border-t border-white/15 px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
          <div className="max-w-[1240px] mx-auto">
            <div data-reveal className="text-center mb-14">
              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">Keep reading</p>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl">From the Journal</h2>
              <Rule className="mt-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
              {related.map((item) => (
                <Link key={item.id} href={`/news/${item.slug}`} data-reveal className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden border border-white/15 bg-zinc-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale transition-all duration-[900ms] ease-out group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-5 text-center">
                    <p className="text-[10.5px] uppercase tracking-[0.25em] text-zinc-500">
                      {item.category} · {item.readTime.replace(" read", "")}
                    </p>
                    <h3 className="font-display mt-3 text-xl leading-snug text-white line-clamp-3">
                      <span className="u-line">{item.title}</span>
                    </h3>
                    <p className="font-display italic mt-3 text-[13.5px] text-zinc-500">By {item.author.name}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div data-reveal className="text-center mt-16">
              <Link
                href={`/${article.categorySlug}`}
                className="group inline-flex items-center gap-3 border border-white/30 px-8 py-3.5 text-[12px] uppercase tracking-[0.25em] transition-colors duration-500 hover:bg-white hover:text-black"
              >
                More in {article.category}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═════════ NEWSLETTER ═════════ */}
      <section className="px-6 sm:px-10 lg:px-14 pb-24">
        <div data-reveal="zoom" className="max-w-[900px] mx-auto border border-white/20 p-2">
          <div className="border border-white/10 px-8 py-14 sm:px-16 sm:py-20 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">The Weekly Letter</p>
            <h2 className="font-display mt-5 text-3xl sm:text-4xl leading-tight">Enjoyed this essay?</h2>
            <Rule className="mt-6" />
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
