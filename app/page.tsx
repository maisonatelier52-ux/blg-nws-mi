import React from "react";
import { CinematicHero } from "@/components/home/CinematicHero";
import { EditorialSections } from "@/components/home/EditorialSections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* ── Exact Reference Hero Section ── */}
      <CinematicHero />

      {/* ── Editorial Noir Sections (About, Portfolio, Packages, Reviews, Contact) ── */}
      <EditorialSections />
    </main>
  );
}
