import type { ReactNode } from "react";

type Step = {
  title: string;
  guide: string;
  subhead: string;
  options: string[];
  icon: ReactNode;
};

/* Thin-line icons, drawn to the system's outlined "wax seal" style.
   The base layer applies fill:none + stroke:currentColor to inline svg,
   so colour comes from text-terracotta-seal and we only set stroke width. */
const AlignerArch = (
  <svg viewBox="0 0 32 32" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9c0 9 4.5 15 10 15s10-6 10-15" />
    <path d="M9.5 9.5c1.8-1.2 4-1.8 6.5-1.8s4.7.6 6.5 1.8" />
    <path d="M12 10.2v3.2M16 9.9v3.6M20 10.2v3.2" />
  </svg>
);

const Sparkle = (
  <svg viewBox="0 0 32 32" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 5c.5 5 2 6.5 7 7-5 .5-6.5 2-7 7-.5-5-2-6.5-7-7 5-.5 6.5-2 7-7z" />
    <path d="M23 18c.25 2.4 1 3.15 3.4 3.4-2.4.25-3.15 1-3.4 3.4-.25-2.4-1-3.15-3.4-3.4 2.4-.25 3.15-1 3.4-3.4z" />
  </svg>
);

const VeneerGem = (
  <svg viewBox="0 0 32 32" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 5.5h13l4.5 6L16 27 5 11.5z" />
    <path d="M5 11.5h22" />
    <path d="M9.5 5.5 12.5 11.5 16 27" />
    <path d="M22.5 5.5 19.5 11.5 16 27" />
    <path d="M12.5 11.5 16 5.5 19.5 11.5" />
  </svg>
);

const STEPS: Step[] = [
  {
    title: "Align",
    guide: "The starting point of every confident smile.",
    subhead: "Treatment options:",
    options: [
      "Clear aligners by Invisalign®, Spark®, 32Co",
      "Ultra-fine porcelain braces for subtle precision",
    ],
    icon: AlignerArch,
  },
  {
    title: "Brighten",
    guide: "Uncover your natural brilliance.",
    subhead: "Whitening options include:",
    options: [
      "Tailor-made whitening trays",
      "At-home whitening",
      "Clinically trusted carbamide peroxide formula",
    ],
    icon: Sparkle,
  },
  {
    title: "Contour",
    guide: "Polish. Perfect. Personalise.",
    subhead: "Finishing techniques:",
    options: [
      "Composite edge or full composite bonding",
      "Bespoke composite & porcelain veneers",
      "Gum contouring for symmetry",
      "Subtle sculpting and smoothing",
    ],
    icon: VeneerGem,
  },
];

export function AbcConcept() {
  return (
    <section id="abc-concept" className="bg-parchment py-section-lg">
      <div className="page-container">
        <header className="flex flex-col items-center text-center">
          <p className="text-eyebrow text-terracotta-seal font-fragment-mono font-medium uppercase tracking-[0.28em]">
            A&middot;B&middot;C Concept
          </p>
          <h2 className="text-heading-lg text-ink mt-4 font-financier-display text-balance">
            Align. <em>Brighten.</em> Contour.
          </h2>
          <p className="text-body-lg text-charcoal mt-5 max-w-prose text-pretty">
            A minimal, high-impact approach to modern smile transformations
            exclusive to SKŌN DENTAL.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.title} className="h-full">
              <article className="rounded-card bg-aged-paper flex h-full flex-col p-card-lg">
                <span className="text-terracotta-seal [&_svg]:h-10 [&_svg]:w-10">
                  {step.icon}
                </span>

                <h3 className="text-subheading text-ink mt-6 font-ftbase font-semibold uppercase tracking-normal">
                  <span className="text-terracotta-seal">{step.title.charAt(0)}</span>
                  {step.title.slice(1)}
                </h3>

                <p className="text-body text-charcoal mt-3">{step.guide}</p>

                <p className="text-body-sm text-ink mt-6 font-semibold">
                  {step.subhead}
                </p>
                <ul className="mt-3 flex flex-col gap-3">
                  {step.options.slice(0, 2).map((option) => (
                    <li
                      key={option}
                      className="text-body-sm text-graphite flex gap-3 border-t border-warm-taupe/60 pt-3 first:border-t-0 first:pt-0"
                    >
                      <span
                        className="text-terracotta-seal mt-2 h-1 w-1 shrink-0 rounded-pill bg-current"
                        aria-hidden="true"
                      />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
