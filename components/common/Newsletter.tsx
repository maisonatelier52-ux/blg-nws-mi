"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

interface NewsletterProps {
  variant?: "inline" | "card" | "footer";
  className?: string;
}

export function Newsletter({ variant = "card", className = "" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center text-center py-6 ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-500" />
        </div>
        <h4 className="font-display text-xl font-bold text-white mb-1">
          You&apos;re in!
        </h4>
        <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
          Welcome to The Daily Standard. Your first edition arrives tomorrow at 6 AM.
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${className}`}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/8 rounded-full text-xs font-semibold text-zinc-300 tracking-wider uppercase mb-4">
            <Mail className="w-3.5 h-3.5" />
            Newsletter
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
            Ideas worth reading,<br />
            <span className="italic font-normal text-zinc-400">in your inbox.</span>
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            Thoughtful essays, curated analysis, and the week&apos;s most important stories — delivered every Monday morning.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3.5 bg-white/8 border border-white/12 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 focus:bg-white/12 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 bg-white text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-100 transition-all active:scale-95 disabled:opacity-60 whitespace-nowrap flex items-center gap-2 justify-center"
            >
              {loading ? (
                <span className="animate-pulse">Joining…</span>
              ) : (
                <>Subscribe <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
          <p className="text-xs text-zinc-600 mt-3">
            No spam. Unsubscribe anytime. ~2,400 readers.
          </p>
        </div>
      </div>
    );
  }

  // card / inline (used on homepage)
  return (
    <section
      className={`border border-zinc-200 bg-zinc-50/60 p-8 sm:p-12 text-center ${className}`}
      aria-label="Newsletter"
    >
      <div className="max-w-md mx-auto">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-500 block mb-2 font-mono">
          THE WEEKLY DISPATCH
        </span>

        <h3 className="font-display font-medium text-2xl sm:text-3xl text-zinc-950 mb-3 leading-snug">
          Thoughtful essays, delivered every Sunday.
        </h3>

        <p className="text-xs sm:text-sm text-zinc-600 font-serif italic mb-7 leading-relaxed">
          &ldquo;Selected criticism, long-form investigations, and ideas shaping public discourse — directly to your reading desk.&rdquo;
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address…"
            className="flex-1 px-4 py-3 bg-white border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-zinc-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-800 transition-colors disabled:opacity-60 whitespace-nowrap"
          >
            {loading ? "Joining…" : "Subscribe"}
          </button>
        </form>

        <p className="text-[11px] text-zinc-400 font-serif italic mt-3.5">
          Published free. No marketing algorithms or sponsor bias.
        </p>
      </div>
    </section>
  );
}
