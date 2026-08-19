import type { ReactNode } from "react";

type Step = {
  eyebrow: string;
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
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6c0 7 3.6 12 8 12s8-5 8-12" />
    <path d="M7 6c0 5 2.2 8.6 5 8.6s5-3.6 5-8.6" />
    <path d="M9.5 6.4v2.6M12 6.2v3M14.5 6.4v2.6" />
  </svg>
);

const Sparkle = (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 3c.4 3.7 1.5 4.8 5.2 5.2C11.5 8.6 10.4 9.7 10 13.4c-.4-3.7-1.5-4.8-5.2-5.2C8.5 7.8 9.6 6.7 10 3z" />
    <path d="M17.5 12.5c.2 1.6.7 2.1 2.3 2.3-1.6.2-2.1.7-2.3 2.3-.2-1.6-.7-2.1-2.3-2.3 1.6-.2 2.1-.7 2.3-2.3z" />
  </svg>
);

const VeneerGem = (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 3.5h10l4 5.5L12 21 3 9z" />
    <path d="M3 9h18" />
    <path d="M7 3.5 9.6 9 12 21" />
    <path d="M17 3.5 14.4 9 12 21" />
    <path d="M9.6 9 12 3.5 14.4 9" />
  </svg>
);

const STEPS: Step[] = [
  {
    eyebrow: "A",
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
    eyebrow: "B",
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
    eyebrow: "C",
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
              <article className="rounded-card border-warm-taupe bg-aged-paper flex h-full flex-col border p-card-lg">
                <span className="text-terracotta-seal [&_svg]:h-9 [&_svg]:w-9">
                  {step.icon}
                </span>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-eyebrow text-terracotta-seal font-fragment-mono font-medium uppercase tracking-[0.28em]">
                    {step.eyebrow}
                  </span>
                  <h3 className="text-subheading text-ink font-ftbase font-semibold uppercase tracking-[0.14em]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-body text-charcoal mt-3">{step.guide}</p>

                <p className="text-body-sm text-ink mt-6 font-semibold">
                  {step.subhead}
                </p>
                <ul className="mt-3 flex flex-col gap-3">
                  {step.options.map((option) => (
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
