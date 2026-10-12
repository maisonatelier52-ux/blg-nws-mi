import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/news";
import { Quote, CheckCircle2 } from "lucide-react";

interface ArticleBodyProps {
  article: NewsArticle;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <div className="max-w-[720px] mx-auto">
      {/* Hero image */}
      {article.image && (
        <figure className="mb-10">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-50 shadow-sm">
            <Image
              src={article.image}
              alt={article.imageCaption || article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          {article.imageCaption && (
            <figcaption className="mt-3 text-xs text-zinc-400 text-center italic leading-relaxed">
              {article.imageCaption}
              {article.imageCredit && ` — ${article.imageCredit}`}
            </figcaption>
          )}
        </figure>
      )}

      {/* Prose body */}
      <div
        className="space-y-6 text-[1.07rem] leading-[1.85] text-zinc-700"
        style={{ fontFamily: "var(--font-display, Georgia, serif)" }}
      >
        {article.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className={index === 0 ? "prose-dropcap" : ""}>
                  {block.text}
                </p>
              );

            case "takeaways":
              return (
                <div
                  key={index}
                  className="my-8 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl"
                  style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
                >
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-700 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );

            case "quote":
              return (
                <blockquote
                  key={index}
                  className="my-9 pl-6 border-l-2 border-zinc-200 text-zinc-600 italic text-xl leading-relaxed"
                >
                  <Quote className="w-5 h-5 text-zinc-300 mb-3" />
                  <p className="mb-3">&ldquo;{block.quote}&rdquo;</p>
                  {(block.author || block.source) && (
                    <footer
                      className="not-italic text-sm font-medium text-zinc-500"
                      style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
                    >
                      — {block.author}{block.source ? `, ${block.source}` : ""}
                    </footer>
                  )}
                </blockquote>
              );

            case "heading2":
              return (
                <h2
                  key={index}
                  className="font-display font-bold text-2xl text-zinc-950 pt-6 pb-1"
                >
                  {block.text}
                </h2>
              );

            case "heading3":
              return (
                <h3
                  key={index}
                  className="font-display font-bold text-xl text-zinc-900 pt-4"
                >
                  {block.text}
                </h3>
              );

            case "image":
              return (
                <figure key={index} className="my-8">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-50">
                    <Image
                      src={block.url || ""}
                      alt={block.caption || "Article image"}
                      fill
                      sizes="720px"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-2.5 text-xs text-zinc-400 text-center italic">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );

            case "list":
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-zinc-700">
                  {block.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Tags */}
      {article.tags?.length > 0 && (
        <div className="mt-12 pt-7 border-t border-zinc-100">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-3">Tagged</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="blog-tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Editorial note */}
      <div className="mt-10 p-5 bg-zinc-50 rounded-2xl border border-zinc-100 text-xs text-zinc-500 leading-relaxed">
        <p className="font-semibold text-zinc-700 text-[11px] uppercase tracking-widest mb-1.5">
          Editorial Standards
        </p>
        The Daily Standard is committed to accuracy and prompt correction. To submit a clarification, contact{" "}
        <a
          href="mailto:corrections@dailystandard.example.com"
          className="underline text-zinc-700 hover:text-zinc-950 transition-colors"
        >
          corrections@dailystandard.example.com
        </a>.
      </div>
    </div>
  );
}
