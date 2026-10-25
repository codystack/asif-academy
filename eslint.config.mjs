import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The ported template uses plain <img>/<a> tags and stylesheet <link>s on purpose:
    // its jQuery plugins expect full page loads and the CSS resolves relative url()s.
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-css-tags": "off",
      // <head> is rendered by shared root-layout components (App Router), not pages.
      "@next/next/no-head-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored template scripts
    "public/**",
  ]),
]);

export default eslintConfig;
