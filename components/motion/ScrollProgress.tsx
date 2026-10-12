"use client";

import { useEffect, useRef } from "react";

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress({ color = "#ffffff" }: { color?: string }) {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, el.scrollTop / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none" aria-hidden>
      <div
        ref={bar}
        className="h-full w-full origin-left"
        style={{ transform: "scaleX(0)", background: color }}
      />
    </div>
  );
}
