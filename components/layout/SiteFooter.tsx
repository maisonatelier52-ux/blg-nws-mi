import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/news";
import { Newsletter } from "../common/Newsletter";
import { PenLine, Mail, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  "Topics": [
    { label: "Politics", href: "/politics" },
    { label: "Technology", href: "/technology" },
    { label: "Business", href: "/business" },
    { label: "Culture", href: "/culture" },
    { label: "World", href: "/world" },
    { label: "Markets", href: "/markets" },
  ],
  "Blog": [
    { label: "All Posts", href: "/news" },
    { label: "Featured", href: "/" },
    { label: "Most Read", href: "/" },
    { label: "Newsletter", href: "/#newsletter" },
  ],
  "About": [
    { label: "About Us", href: "/" },
    { label: "Editorial Standards", href: "/" },
    { label: "Write for Us", href: "/" },
    { label: "Contact", href: "/" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 mt-24">
      {/* Newsletter strip */}
      <div className="border-b border-zinc-800" id="newsletter">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <Newsletter variant="footer" />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <PenLine className="w-4.5 h-4.5" strokeWidth={2.2} />
              </span>
              <span className="font-display font-bold text-xl text-white">
                The Briefline
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mb-6">
              An independent editorial blog dedicated to thoughtful analysis, cultural critique, and honest journalism since 1889.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { href: "https://twitter.com", label: "Twitter", icon: (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )},
                { href: "mailto:hello@dailystandard.com", label: "Email", icon: <Mail className="w-4 h-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <span>&copy; 2026 The Daily Standard. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-zinc-300 transition-colors">Terms</Link>
            <Link href="/" className="hover:text-zinc-300 transition-colors">RSS Feed</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
