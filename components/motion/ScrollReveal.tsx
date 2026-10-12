"use client";

import { useEffect } from "react";

/**
 * Watches every element that has a `data-reveal` attribute and sets
 * `data-in` the first time it scrolls into view. The actual animation lives
 * in globals.css. A MutationObserver picks up elements added later
 * (route changes, filtered grids, etc.).
 */
export function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const seen = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
