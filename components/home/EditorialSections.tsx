"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
} from "lucide-react";

interface DispatchItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  image: string;
  readTime: string;
  author: string;
  aspect: string;
}

function SectionDivider() {
  return (
    <div
      aria-hidden
      className="line-draw max-w-[1600px] mx-auto h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
    />
  );
}

export function EditorialSections() {
  const [activeFilter, setActiveFilter] = useState("all");

  const dispatches: DispatchItem[] = [
    {
      id: "inv-1",
      slug: "investigation-ghost-subsidies-municipal-water-grants",
      title: "The Ghost Subsidies: How Billions in Water Grants Vanished Into Shell Trusts",
      subtitle: "An 8-month investigation reveals widespread diversion of federal clean-water allocations across six states.",
      category: "Investigations",
      categorySlug: "investigations",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=900",
      readTime: "12 min read",
      author: "Marcus Thorne & Sarah Chen",
      aspect: "aspect-[4/5]",
    },
    {
      id: "pol-1",
      slug: "senate-reaches-bipartisan-framework-grid-modernization",
      title: "Senate Reaches Bipartisan Framework on National Grid Modernization",
      subtitle: "Five-year agreement allocates $48 billion toward interstate transmission lines and high-voltage transformer reserves.",
      category: "Politics",
      categorySlug: "politics",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=900",
      readTime: "5 min read",
      author: "Eleanor Hayes",
      aspect: "aspect-[3/4]",
    },
    {
      id: "bus-1",
      slug: "domestic-chip-foundries-achieve-commercial-parity",
      title: "Domestic Chip Foundries Achieve Commercial Parity in Sub-2nm Lithography",
      subtitle: "Arizona and Ohio fabrication complexes commence volume shipments to domestic aerospace and computing clusters.",
      category: "Technology",
      categorySlug: "technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=900",
      readTime: "5 min read",
      author: "Harrison Vance",
      aspect: "aspect-[4/5]",
    },
    {
      id: "us-1",
      slug: "supreme-court-hears-arguments-maritime-preemption",
      title: "Supreme Court Hears Oral Arguments on Maritime Environmental Preemption",
      subtitle: "Litigation examines whether coastal states retain constitutional standing to regulate vessel exhaust beyond territorial waters.",
      category: "U.S. News",
      categorySlug: "us-news",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=900",
      readTime: "4 min read",
      author: "Julian Sterling",
      aspect: "aspect-[3/4]",
    },
    {
      id: "wld-1",
      slug: "allied-summit-geneva-arctic-maritime-accord",
      title: "Allied Summit in Geneva Formulates Strategic Accord on Arctic Corridors",
      subtitle: "Eight northern nations agree on joint naval coordination and maritime environmental monitoring as sea lanes open.",
      category: "World",
      categorySlug: "world",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=900",
      readTime: "6 min read",
      author: "Claire Delacroix",
      aspect: "aspect-[4/5]",
    },
    {
      id: "mkt-1",
      slug: "federal-reserve-signals-equilibrium-inflation-target",
      title: "Treasury Desk Analysis: Sovereign Yield Curves Signal Long-Term Stability",
      subtitle: "Benchmark 10-year note compresses to 3.82% as capital spending by domestic manufacturers logs steady quarterly rebound.",
      category: "Markets",
      categorySlug: "markets",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=900",
      readTime: "6 min read",
      author: "Arthur M. Vance",
      aspect: "aspect-[3/4]",
    },
  ];

  const filters = [
    { label: "All Dispatches", value: "all" },
    { label: "Investigations", value: "investigations" },
    { label: "Markets", value: "markets" },
    { label: "Politics", value: "politics" },
    { label: "Technology", value: "technology" },
    { label: "World", value: "world" },
  ];

  const filteredDispatches =
    activeFilter === "all"
      ? dispatches
      : dispatches.filter((item) => item.categorySlug === activeFilter);

  const specialReports = [
    {
      id: "sr-1",
      slug: "investigation-ghost-subsidies-municipal-water-grants",
      title: "The Ghost Subsidies: How Billions in Water Grants Vanished Into Shell Trusts",
      category: "Lead Investigation",
      excerpt: "An eight-month examination reveals widespread diversion of federal clean-water allocations across six industrial states through opaque turnkey entities.",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=1200",
      author: "Marcus Thorne & Sarah Chen",
      date: "Oct 6, 2026",
      readTime: "12 min read",
    },
    {
      id: "sr-2",
      slug: "domestic-chip-foundries-achieve-commercial-parity",
      title: "Domestic Chip Foundries Achieve Commercial Parity in Sub-2nm Lithography",
      category: "Technology",
      excerpt: "Arizona and Ohio fabrication complexes begin volume deliveries of advanced EUV double-patterned silicon wafers.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      author: "Harrison Vance",
      date: "Oct 7, 2026",
      readTime: "5 min read",
    },
    {
      id: "sr-3",
      slug: "senate-reaches-bipartisan-framework-grid-modernization",
      title: "Senate Reaches Bipartisan Framework on National Grid Modernization",
      category: "Politics",
      excerpt: "Five-year compromise allocates $48 billion toward interstate transmission lines and high-voltage transformer reserves.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      author: "Eleanor Hayes",
      date: "Oct 7, 2026",
      readTime: "5 min read",
    },
    {
      id: "sr-4",
      slug: "allied-summit-geneva-arctic-maritime-accord",
      title: "Allied Summit in Geneva Formulates Strategic Accord on Arctic Corridors",
      category: "World",
      excerpt: "Eight northern nations agree on joint naval patrols and environmental monitoring as polar lanes open.",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=800",
      author: "Claire Delacroix",
      date: "Oct 6, 2026",
      readTime: "6 min read",
    },
    {
      id: "sr-5",
      slug: "supreme-court-hears-arguments-maritime-preemption",
      title: "Supreme Court Hears Arguments on Maritime Preemption",
      category: "U.S. News",
      excerpt: "Case tests whether coastal states retain standing to regulate vessel exhaust beyond territorial waters.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      author: "Julian Sterling",
      date: "Oct 7, 2026",
      readTime: "4 min read",
    },
    {
      id: "sr-6",
      slug: "federal-reserve-signals-equilibrium-inflation-target",
      title: "Federal Reserve Signals Prolonged Macro Equilibrium",
      category: "Markets",
      excerpt: "Benchmark rates steady at 3.75%–4.00% as core price indicators align with baseline target.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
      author: "Arthur M. Vance",
      date: "Oct 7, 2026",
      readTime: "6 min read",
    },
    {
      id: "sr-7",
      slug: "arctic-sea-lanes-geopolitics-northern-maritime-routes",
      title: "The Arctic Sea Lanes: Geopolitics of Northern Maritime Routes",
      category: "World",
      excerpt: "Summer shipping corridors become the staging ground for quiet diplomatic contests.",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=800",
      author: "Claire Delacroix",
      date: "Oct 5, 2026",
      readTime: "6 min read",
    },
  ];

  const perspectives = [
    {
      id: "p-1",
      slug: "federal-reserve-signals-equilibrium-inflation-target",
      name: "Arthur M. Vance",
      role: "Chief Economics Correspondent",
      beat: "Macroeconomics & Central Banking",
      headline: "The Baseline Equilibrium: Why Borrowing Costs Have Found Their New Anchor",
      quote: "The central bank's calibrated posture offers domestic enterprises rare planning clarity after three years of acute monetary tension.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=900",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      readTime: "6 min read",
    },
    {
      id: "p-2",
      slug: "senate-reaches-bipartisan-framework-grid-modernization",
      name: "Eleanor Hayes",
      role: "Senior Congressional Reporter",
      beat: "Capitol Hill & Power Grid",
      headline: "The National Transmission Act: Why Industrial Sovereignty Defeated Division",
      quote: "Electrical transmission reliability is no longer a partisan wedge; it has crystallized as the fundamental bedrock of American manufacturing.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=900",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      readTime: "5 min read",
    },
    {
      id: "p-3",
      slug: "supreme-court-hears-arguments-maritime-preemption",
      name: "Julian Sterling",
      role: "Supreme Court Correspondent",
      beat: "Constitutional Preemption",
      headline: "State Environmental Standing Meets the Maritime Commerce Clause",
      quote: "The high court's deliberation will redefine coastal state jurisdiction over ocean carrier corridors for decades.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      readTime: "4 min read",
    },
    {
      id: "p-4",
      slug: "domestic-chip-foundries-achieve-commercial-parity",
      name: "Harrison Vance",
      role: "Industrial & Technology Editor",
      beat: "Semiconductors & Industrial Base",
      headline: "Sub-2nm Parity is an American Milestone, But Packaging Challenges Loom",
      quote: "Domestic foundries have resolved lithography scaling; the next test is building high-density packaging clusters.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      readTime: "5 min read",
    },
    {
      id: "p-5",
      slug: "allied-summit-geneva-arctic-maritime-accord",
      name: "Claire Delacroix",
      role: "Foreign Affairs Diplomatic Bureau",
      beat: "Polar Geopolitics & Treaties",
      headline: "High North Corridors: Navigating the Geopolitics of Receding Sea Ice",
      quote: "Receding ice requires binding multilateral maritime accords before commercial traffic outpaces international diplomacy.",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=800",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      readTime: "6 min read",
    },
  ];

  const fiveDossiers = [
    {
      id: "dos-1",
      slug: "federal-reserve-signals-equilibrium-inflation-target",
      kicker: "Macroeconomic Policy",
      title: "Federal Reserve Signals Prolonged Macro Equilibrium",
      excerpt: "Benchmark borrowing costs anchor at 3.75%–4.00% as core price indicators align with the two percent baseline target.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=900",
      author: "Arthur M. Vance",
      readTime: "6 min read",
    },
    {
      id: "dos-2",
      slug: "domestic-chip-foundries-achieve-commercial-parity",
      kicker: "Industrial Parity",
      title: "Domestic Foundries Achieve Sub-2nm Lithography Milestone",
      excerpt: "Volume deliveries of extreme ultraviolet double-patterned silicon wafers begin from Southwest fabrication complexes.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=900",
      author: "Harrison Vance",
      readTime: "5 min read",
    },
    {
      id: "dos-3",
      slug: "investigation-ghost-subsidies-municipal-water-grants",
      kicker: "Flagship Investigation · Deep Audit",
      title: "The Ghost Subsidies: How Billions in Municipal Water Grants Vanished Into Shell Trusts",
      excerpt: "An exhaustive eight-month examination reveals widespread diversion of federal clean-water allocations across six industrial states through opaque turnkey entities and empty municipal ledgers.",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=1200",
      author: "Marcus Thorne & Sarah Chen",
      readTime: "14 min read",
      highlighted: true,
    },
    {
      id: "dos-4",
      slug: "senate-reaches-bipartisan-framework-grid-modernization",
      kicker: "Power Infrastructure",
      title: "Senate Reaches $48B National Grid Modernization Accord",
      excerpt: "Compromise establishes streamlined judicial review timelines for regional high-voltage transmission lines.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=900",
      author: "Eleanor Hayes",
      readTime: "5 min read",
    },
    {
      id: "dos-5",
      slug: "allied-summit-geneva-arctic-maritime-accord",
      kicker: "Polar Treaties",
      title: "Geneva Accord Formulates Strategic Rules on Arctic Corridors",
      excerpt: "Eight northern nations agree on joint naval patrols and environmental jurisdiction as summer sea ice recedes.",
      image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=900",
      author: "Claire Delacroix",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="relative w-full bg-black text-white">

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 1: EDITORIAL MANIFESTO & BUREAU DESK                */}
      {/* ─────────────────────────────────────────────────────────── */}
      <SectionDivider />
      <section id="manifesto" className="relative py-8 sm:py-12 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Manifesto & Numbers */}
          <div data-reveal="left" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-zinc-400 font-sans">
              <span className="w-6 h-[1px] bg-white/40" />
              <span>Editorial Philosophy</span>
            </div>

            <h2 className="font-display font-medium text-xl sm:text-2xl lg:text-[1.7rem] leading-snug text-white tracking-tight">
              Independent reporting is the bedrock of public integrity &mdash; scrutinizing power, decoding markets, and illuminating structural shifts.
            </h2>

            <div className="space-y-4 text-zinc-300 font-display italic text-[15px] sm:text-base leading-[1.8] max-w-xl font-normal">
              <p>
                Founded on the principles of rigorous investigation and nonpartisan clarity, The Briefline delivers verified intelligence from the halls of Congress to global trading floors. Every dispatch is corroborated against primary public records, institutional ledgers, and on-the-record sources.
              </p>
              <p>
                Our newsroom operates free from commercial influence and sensationalism. Through forensic financial audits, deep investigative inquiries, and unyielding factual verification, our correspondents decode the structural forces shaping governance, enterprise, and civil society.
              </p>
            </div>

          </div>

          {/* Right: Featured Correspondent Card */}
          <div data-reveal="right" className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-zinc-900 border border-white/15 group">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Arthur M. Vance — Chief Economics Correspondent"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-6 inset-x-6">
                <div className="text-[10px] tracking-widest uppercase text-zinc-400 mb-1">Editor in Chief &middot; Macro Desk</div>
                <h3 className="font-serif italic text-xl text-white">Arthur M. Vance</h3>
                <p className="text-xs text-zinc-400 mt-1">Covering central bank governance and macroeconomic balance for over two decades.</p>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 2: CURATED DISPATCHES (FILTERABLE EDITORIAL GRID)   */}
      {/* ─────────────────────────────────────────────────────────── */}
      <SectionDivider />
      <section id="dispatches" className="relative py-8 sm:py-12 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-[1240px] mx-auto">

          {/* Section Header — Minimal Simple */}
          <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-sans block mb-1.5">
                Curated Wire
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
                Selected Dispatches &amp; Essays
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs tracking-wider uppercase font-sans">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 border transition-all duration-300 ${
                    activeFilter === filter.value
                      ? "bg-white text-black border-white"
                      : "border-white/20 text-zinc-400 hover:text-white hover:border-white/50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDispatches.map((item) => (
              <Link
                data-reveal
                key={item.id}
                href={`/news/${item.slug}`}
                className="group flex flex-col bg-[#121214] border border-white/10 overflow-hidden hover:border-white/40 transition-all duration-500"
              >
                {/* Image Frame - 4:3 editorial proportion */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Article Copy */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] tracking-wider text-zinc-500 uppercase font-sans mb-2">
                      Report by {item.author}
                    </div>
                    <h3 className="font-display font-medium text-base sm:text-[1.08rem] text-white group-hover:text-zinc-200 transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 line-clamp-2 font-normal leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>



        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 3: IN-DEPTH DOSSIERS & INTELLIGENCE REPORTS         */}
      {/* ─────────────────────────────────────────────────────────── */}
      <SectionDivider />
      <section id="special-reports" className="relative py-8 sm:py-12 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-[1240px] mx-auto">

          {/* Section Header — Minimal Simple */}
          <div className="mb-8 sm:mb-10 pb-4 border-b border-white/10">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-sans block mb-1.5">
              Special Reports
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
              Intelligence Dossiers &amp; Briefings
            </h2>
          </div>

          {/* ── 7-Grid Editorial Layout ── */}
          <div className="space-y-6">

            {/* Top Tier: 1 Major Feature + 2 Side Stack (Cards 1, 2, 3) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Card 1: Major Feature (Lead Investigation) */}
              <Link
                data-reveal
                href={`/news/${specialReports[0].slug}`}
                className="lg:col-span-7 group relative overflow-hidden bg-[#121214] border border-white/15 hover:border-white/40 transition-all duration-500 flex flex-col justify-end min-h-[440px] sm:min-h-[480px] p-6 sm:p-8"
              >
                <Image
                  src={specialReports[0].image}
                  alt={specialReports[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 group-hover:from-black/90 transition-colors" />

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] tracking-widest uppercase bg-white/10 text-zinc-200 border border-white/20 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>{specialReports[0].category}</span>
                  </div>

                  <h3 className="font-display font-medium text-lg sm:text-xl md:text-2xl text-white group-hover:text-zinc-200 transition-colors leading-snug">
                    {specialReports[0].title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed line-clamp-2 max-w-xl">
                    {specialReports[0].excerpt}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-400">
                    <span>By {specialReports[0].author} &middot; {specialReports[0].readTime}</span>
                    <span className="inline-flex items-center gap-1 text-white group-hover:translate-x-1 transition-transform">
                      Read Report <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Cards 2 & 3: Side Stack */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {[specialReports[1], specialReports[2]].map((item) => (
                  <Link
                    data-reveal
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="flex-1 group bg-[#121214] border border-white/10 hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
                  >
                    <div className="relative aspect-[4/3] sm:aspect-auto sm:w-44 h-48 sm:h-auto flex-shrink-0 bg-zinc-900 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 200px"
                        className="object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] tracking-wider text-zinc-400 uppercase font-sans mb-1">
                          {item.category}
                        </div>
                        <h4 className="font-display font-medium text-base sm:text-[1.08rem] text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2 mb-2">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs text-zinc-400 line-clamp-2 font-normal leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 mt-2">
                        <span>{item.author}</span>
                        <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

            {/* Bottom Tier: 4-Column Grid (Cards 4, 5, 6, 7) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {[specialReports[3], specialReports[4], specialReports[5], specialReports[6]].map((item) => (
                <Link
                  data-reveal
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group bg-[#121214] border border-white/10 hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] tracking-wider text-zinc-400 uppercase font-sans mb-1">
                        {item.category}
                      </div>
                      <h4 className="font-display font-medium text-base sm:text-[1.08rem] text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-zinc-400 line-clamp-2 font-normal leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 mt-3">
                      <span>{item.author}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 4: EDITORIAL PERSPECTIVES & TESTIMONIALS            */}
      {/* ─────────────────────────────────────────────────────────── */}
      <SectionDivider />
      <section id="perspectives" className="relative py-8 sm:py-12 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-[1240px] mx-auto">

          {/* Section Header — Minimal Simple */}
          <div className="mb-8 sm:mb-10 pb-4 border-b border-white/10">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-sans block mb-1.5">
              Voices of the Newsroom
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
              Editorial Commentary &amp; Perspectives
            </h2>
          </div>

          {/* ── 5-Grid Editorial Layout (2 Panorama + 3 Spotlights) ── */}
          <div className="space-y-6">

            {/* Top Tier: 2 Wide Panoramic Op-Eds (Cards 1 & 2) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[perspectives[0], perspectives[1]].map((item) => (
                <Link
                  data-reveal
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group bg-[#121214] border border-white/15 hover:border-white/40 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row"
                >
                  {/* Left Photo Frame */}
                  <div className="relative sm:w-[45%] aspect-[16/10] sm:aspect-auto min-h-[200px] sm:min-h-[260px] flex-shrink-0 bg-zinc-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#121214] via-transparent to-transparent sm:via-[#121214]/40" />
                  </div>

                  {/* Right Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Beat Tag */}
                      <div className="text-[10px] tracking-wider text-zinc-400 uppercase font-sans mb-2 flex items-center gap-1.5">
                        <Award className="w-3 h-3" />
                        <span>{item.beat}</span>
                      </div>

                      {/* Headline */}
                      <h3 className="font-display font-medium text-base sm:text-lg text-white group-hover:text-zinc-200 transition-colors leading-snug mb-2.5">
                        {item.headline}
                      </h3>

                      {/* Pull Quote */}
                      <p className="font-sans text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed mb-4 line-clamp-3">
                        {item.quote}
                      </p>
                    </div>

                    {/* Author Byline */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20">
                          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white">{item.name}</div>
                          <div className="text-[10px] text-zinc-400 font-light">{item.role}</div>
                        </div>
                      </div>

                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Tier: 3 Columnist Spotlight Cards (Cards 3, 4 & 5) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {[perspectives[2], perspectives[3], perspectives[4]].map((item) => (
                <Link
                  data-reveal
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group bg-[#121214] border border-white/10 hover:border-white/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                  </div>

                  {/* Overlapping Columnist Avatar */}
                  <div className="px-5 -mt-6 relative z-10 flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#121214] shadow-md flex-shrink-0">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{item.name}</div>
                      <div className="text-[10px] text-zinc-400 font-light">{item.role}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] tracking-wider text-zinc-400 uppercase font-sans mb-1.5 mt-2 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{item.beat}</span>
                      </div>

                      <h4 className="font-display font-medium text-base sm:text-[1.08rem] text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2 mb-2">
                        {item.headline}
                      </h4>

                      <p className="font-sans text-xs text-zinc-400 line-clamp-2 font-normal leading-relaxed">
                        {item.quote}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 mt-4">
                      <span>{item.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-zinc-300 group-hover:text-white group-hover:translate-x-1 transition-all">
                        Read Column <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 5: 5-GRID CENTERPIECE DOSSIERS (SMOOTH SYMMETRY)    */}
      {/* ─────────────────────────────────────────────────────────── */}
      <SectionDivider />
      <section id="longform" className="relative py-8 sm:py-12 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-[1240px] mx-auto">

          {/* Section Header — Minimal Simple */}
          <div className="mb-8 sm:mb-10 pb-4 border-b border-white/10">
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-sans block mb-1.5">
              The Big Read
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
              Flagship Dossiers &amp; Deep Audits
            </h2>
          </div>

          {/* ── 5-Grid Symmetrical Centerpiece Layout (2 - 1 - 2) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">

            {/* Left Flank: Cards 1 & 2 (Stacked) */}
            <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-2 lg:order-1">
              {[fiveDossiers[0], fiveDossiers[1]].map((item) => (
                <Link
                  data-reveal
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="flex-1 group bg-[#111113] border border-white/[0.08] hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col justify-between p-5 rounded-sm"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 rounded-sm mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="text-[10px] tracking-wider text-zinc-400 uppercase font-sans mb-1">
                        {item.kicker}
                      </div>
                      <h4 className="font-display font-medium text-base sm:text-[1.08rem] text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-zinc-400 font-normal leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500 mt-3">
                      <span>{item.author}</span>
                      <span className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                        {item.readTime} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Center Anchor: Card 3 (Grand Centerpiece Monolith) */}
            <div className="md:col-span-2 lg:col-span-6 flex flex-col order-1 lg:order-2">
              <Link
                data-reveal
                href={`/news/${fiveDossiers[2].slug}`}
                className="group relative flex-1 min-h-[500px] lg:min-h-[560px] overflow-hidden rounded-sm border border-white/20 hover:border-white/50 transition-all duration-700 flex flex-col justify-end p-8 sm:p-10 bg-black shadow-2xl"
              >
                {/* Full-bleed background photography */}
                <Image
                  src={fiveDossiers[2].image}
                  alt={fiveDossiers[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-all duration-1000 ease-out"
                />

                {/* Smooth ambient gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 group-hover:via-black/75 transition-all duration-500" />

                {/* Center Content */}
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-zinc-200 border border-white/20 text-[10px] tracking-widest uppercase font-sans backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>{fiveDossiers[2].kicker}</span>
                  </div>

                  <h3 className="font-display font-medium text-lg sm:text-xl md:text-2xl text-white group-hover:text-zinc-100 transition-colors leading-snug">
                    {fiveDossiers[2].title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed line-clamp-3 max-w-xl">
                    {fiveDossiers[2].excerpt}
                  </p>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                    <div className="text-white font-medium text-xs">
                      {fiveDossiers[2].author}
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      {fiveDossiers[2].readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Flank: Cards 4 & 5 (Stacked) */}
            <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-3">
              {[fiveDossiers[3], fiveDossiers[4]].map((item) => (
                <Link
                  data-reveal
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="flex-1 group bg-[#111113] border border-white/[0.08] hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col justify-between p-5 rounded-sm"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 rounded-sm mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="text-[10px] tracking-wider text-zinc-400 uppercase font-sans mb-1">
                        {item.kicker}
                      </div>
                      <h4 className="font-display font-medium text-base sm:text-[1.08rem] text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-zinc-400 font-normal leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500 mt-3">
                      <span>{item.author}</span>
                      <span className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                        {item.readTime} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── Footer (same as category & detail pages) ── */}
      <SectionDivider />
      <footer className="py-10 px-6 sm:px-10 lg:px-14">
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
