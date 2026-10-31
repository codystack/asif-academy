// Text for the curved ribbons (home hero and About photo), repeated so RibbonScroll can slide it seamlessly.
// Non-breaking spaces keep every loop the same width, which the seamless wrap relies on.
export const RIBBON_CYCLES = 4;

export const RIBBON_TEXT = ["Pattern Drafting", "Garment Construction", "Live Feedback", "Small Cohorts"]
  .map((phrase) => `${phrase}  |  `)
  .join("")
  .repeat(RIBBON_CYCLES);
