"use client";

import { useEffect } from "react";

// The template's jQuery plugins, in the order the PHP footer loaded them.
// They mutate the DOM, so they run after React hydrates rather than as <script> tags.
const SCRIPTS = [
  "/assets/js/vendor/jquery.js",
  "/assets/js/bootstrap-bundle.js",
  "/assets/js/swiper-bundle.js",
  "/assets/js/magnific-popup.js",
  "/assets/js/nice-select.js",
  "/assets/js/purecounter.js",
  "/assets/js/wow.min.js",
  "/assets/js/slider-init.js",
  "/assets/js/main.js",
];

let started = false;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function ThemeScripts() {
  useEffect(() => {
    // Site links are plain <a> tags, so this runs once per page load.
    if (started) return;
    started = true;
    (async () => {
      for (const src of SCRIPTS) {
        await loadScript(src);
      }
      // main.js starts the preloader fade and WOW animations on window "load",
      // which has usually fired already by the time it runs here.
      if (document.readyState === "complete") {
        const $ = (window as unknown as { jQuery: (el: Window) => { trigger: (e: string) => void } }).jQuery;
        $(window).trigger("load");
      }
    })().catch((error) => console.error(error));
  }, []);

  return null;
}
