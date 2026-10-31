"use client";

import { useEffect } from "react";

// Keeps a ribbon's text gliding along its curve, and nudges it further as the page scrolls.
// The ribbon text repeats one phrase cycle several times; the offset wraps by one cycle so the loop is seamless.
// `pxPerSecond` is the constant drift; `scrollSpeed` is how far the text moves per pixel scrolled.
export default function RibbonScroll({
  selector = ".tp-hero-fit-ribbon-text",
  cycles = 4,
  pxPerSecond = 40,
  scrollSpeed = 0.6,
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const paths = Array.from(document.querySelectorAll<SVGTextPathElement>(selector));
    if (!paths.length) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const travelled = ((now - start) / 1000) * pxPerSecond + window.scrollY * scrollSpeed;
      for (const path of paths) {
        const cycle = path.getComputedTextLength() / cycles;
        if (!cycle) continue;
        path.setAttribute("startOffset", String(-cycle + (travelled % cycle)));
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [selector, cycles, pxPerSecond, scrollSpeed]);

  return null;
}
