import { Fragment_Mono, Host_Grotesk, Newsreader } from "next/font/google";

/**
 * Design system font stacks.
 *
 * The reference system specifies three commercial/licensed families. Until the
 * licensed files are available, each one is served by its documented substitute
 * (see DESIGN.md → Tokens — Typography). Swapping in the real faces later only
 * requires changing the loader here — every consumer reads the CSS variable.
 *
 *   Financier Display  →  Newsreader     (--font-financier-display-face)
 *   Ftbase             →  Host Grotesk   (--font-ftbase-face)
 *   Fragment mono      →  Fragment Mono  (--font-fragment-mono-face)
 *
 * The `-face` variables carry the loaded substitute only. globals.css composes
 * them into the public `--font-*` design tokens, listing the licensed family
 * name first so dropping in the real font takes over automatically.
 */

/** Editorial serif. Roman 400 + italic 300 are the signature headline pairing. */
export const financierDisplay = Newsreader({
  variable: "--font-financier-display-face",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Humanist sans for body, navigation, buttons and every UI label. */
export const ftbase = Host_Grotesk({
  variable: "--font-ftbase-face",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

/** Monospace, reserved for tiny all-caps badge labels. */
export const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const fontVariables = [
  financierDisplay.variable,
  ftbase.variable,
  fragmentMono.variable,
].join(" ");
