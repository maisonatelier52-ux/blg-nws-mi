"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const NAV_LINKS = [
  { label: "World", href: "/world" },
  { label: "Politics", href: "/politics" },
  { label: "Business", href: "/business" },
  { label: "Markets", href: "/markets" },
  { label: "Technology", href: "/technology" },
  { label: "Investigations", href: "/investigations" },
  { label: "Culture", href: "/culture" },
];

interface ChronicleHeaderProps {
  currentCategorySlug?: string;
  isSticky?: boolean;
  showDivider?: boolean;
}

export function ChronicleHeader({ currentCategorySlug, isSticky = true, showDivider = true }: ChronicleHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const activeHref = currentCategorySlug
    ? `/${currentCategorySlug}`
    : pathname;

  return (
    <>
      <header
        className={`w-full ${
          isSticky
            ? "sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4"
            : "relative z-30 bg-black pt-5 pb-0 sm:pt-6"
        } px-8 sm:px-14 lg:px-20 xl:px-24 transition-all duration-300`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-6">

          {/* Logo / Masthead — "The" above, "Briefline" below */}
          <Link href="/" className="group flex flex-col items-start leading-none shrink-0 py-0.5">
            <span className="font-serif text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-400 group-hover:text-zinc-200 transition-colors">
              The
            </span>
            <span className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-tight uppercase text-white group-hover:text-zinc-300 transition-colors mt-0.5">
              Briefline
            </span>
          </Link>

          {/* Desktop Navigation — Classic News Categories */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] tracking-wide text-zinc-300 font-sans"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive
                      ? "text-white font-medium after:w-full"
                      : "text-zinc-300 hover:text-white after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-white after:transition-all after:duration-300`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Hairline divider — fades out at both ends, draws in from the centre */}
        {!isSticky && showDivider && (
          <div
            aria-hidden
            className="line-draw max-w-[1600px] mx-auto mt-4 sm:mt-5 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col leading-none"
            >
              <span className="font-serif text-[10px] tracking-[0.25em] uppercase text-zinc-400">The</span>
              <span className="font-serif text-xl font-bold uppercase tracking-tight text-white mt-0.5">Briefline</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-8 text-lg font-sans text-zinc-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Front Page
            </Link>
            {NAV_LINKS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors ${
                    isActive ? "text-white font-semibold pl-2 border-l border-white" : "hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
