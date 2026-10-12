/** Accent colour per category — drives glows, chips and hover states. */
export const CATEGORY_ACCENTS: Record<string, string> = {
  "us-news": "#60a5fa",
  politics: "#fbbf24",
  world: "#2dd4bf",
  business: "#38bdf8",
  markets: "#a78bfa",
  technology: "#818cf8",
  culture: "#34d399",
  sports: "#fb923c",
  health: "#f472b6",
  investigations: "#f87171",
};

export function accentFor(slug: string) {
  return CATEGORY_ACCENTS[slug] ?? "#a1a1aa";
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
