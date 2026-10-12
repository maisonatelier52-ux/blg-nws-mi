"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, ArrowRight, Clock, FileText } from "lucide-react";
import { searchArticles, NewsArticle } from "@/lib/news";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NewsArticle[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const sampleRecentSearches = [
    "Federal Reserve",
    "Semiconductor lithography",
    "Supreme Court maritime",
    "Clean water subsidies",
    "Artificial intelligence FTC"
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const hits = searchArticles(query.trim());
      setResults(hits.slice(0, 5));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectRecent = (term: string) => {
    setQuery(term);
    onClose();
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-neutral-950/60 backdrop-blur-[2px] transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full bg-[#FDFDFB] border-b border-neutral-300 shadow-xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 pt-6 pb-4">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              Search The Daily Standard Archive
            </span>
            <button
              onClick={onClose}
              aria-label="Close search"
              className="p-1 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3 pointer-events-none" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, subjects, authors, or topics..."
                className="w-full pl-11 pr-24 py-3.5 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none text-base text-neutral-900 placeholder:text-neutral-400 font-sans"
              />
              <button
                type="submit"
                className="absolute right-2 px-3 py-1.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search suggestions or live results */}
          <div className="mt-6 mb-4 overflow-y-auto max-h-[50vh]">
            {results.length > 0 ? (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Matching Articles ({results.length})
                </p>
                <div className="divide-y divide-neutral-200">
                  {results.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.slug}`}
                      onClick={onClose}
                      className="group flex items-start justify-between py-3 hover:bg-neutral-50 px-2 -mx-2 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B1B1B]">
                            {article.category}
                          </span>
                          <span className="text-neutral-300">•</span>
                          <span className="text-xs text-neutral-500">
                            {article.readTime}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-serif font-bold text-neutral-950 group-hover:text-[#9B1B1B] transition-colors leading-snug">
                          {article.title}
                        </h4>
                        <p className="text-xs text-neutral-600 line-clamp-1 mt-1">
                          {article.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 ml-4 shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200 text-center">
                  <button
                    onClick={handleSubmit}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1.5"
                  >
                    View all matching results for &ldquo;{query}&rdquo;
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : query.length > 1 ? (
              <div className="text-center py-8">
                <FileText className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
                <p className="text-sm text-neutral-600 font-serif">
                  No articles found matching &ldquo;{query}&rdquo;
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Try searching for keywords like &ldquo;inflation&rdquo;, &ldquo;Congress&rdquo;, or &ldquo;chips&rdquo;.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Frequent Topics
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {sampleRecentSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSelectRecent(term)}
                      className="px-3 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-neutral-100 px-6 py-2.5 border-t border-neutral-200 text-[11px] text-neutral-500 flex justify-between items-center">
          <span>Press ESC to exit</span>
          <span>Press ENTER to view full results</span>
        </div>
      </div>
    </div>
  );
}
