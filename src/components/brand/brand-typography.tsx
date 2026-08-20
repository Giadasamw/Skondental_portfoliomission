const SCALE = [
  { name: "Display XL", cls: "text-display-xl", px: "88 / 0.9" },
  { name: "Hero", cls: "text-hero", px: "80 / 0.95" },
  { name: "Display", cls: "text-display", px: "64 / 1.0" },
  { name: "Heading LG", cls: "text-heading-lg", px: "45 / 1.1" },
  { name: "Heading", cls: "text-heading", px: "34 / 1.15" },
];

export function BrandTypography() {
  return (
    <section className="bg-parchment">
      <div className="page-container py-section-lg">
        <div className="flex flex-col gap-4">
          <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal">
            Typography
          </span>
          <h2 className="text-heading-lg font-financier-display text-ink text-balance">
            Serif to <em>feel</em>, sans to <em>work</em>
          </h2>
          <p className="max-w-prose text-body-lg text-graphite text-pretty">
            The signature move is roman + italic inside one serif headline — the
            italic word carries the emotion. Everything functional stays in the
            sans.
          </p>
        </div>

        {/* Families */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-card border border-warm-taupe bg-aged-paper p-card">
            <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.14em] text-ash">
              Display / Serif
            </span>
            <span className="text-display font-financier-display text-ink">Aa</span>
            <div className="flex flex-col gap-1">
              <span className="text-body font-medium text-ink">Financier Display</span>
              <span className="text-body-sm text-graphite">
                Editorial headings only. Weight 300 italic for the accent word.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-card border border-warm-taupe bg-aged-paper p-card">
            <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.14em] text-ash">
              Text / Sans
            </span>
            <span className="text-display font-ftbase text-ink">Aa</span>
            <div className="flex flex-col gap-1">
              <span className="text-body font-medium text-ink">Ftbase</span>
              <span className="text-body-sm text-graphite">
                Body, navigation, buttons, and every UI label.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-card border border-warm-taupe bg-aged-paper p-card">
            <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.14em] text-ash">
              Detail / Mono
            </span>
            <span className="text-display font-fragment-mono text-ink">Aa</span>
            <div className="flex flex-col gap-1">
              <span className="text-body font-medium text-ink">Fragment Mono</span>
              <span className="text-body-sm text-graphite">
                Tiny all-caps badges and metadata only.
              </span>
            </div>
          </div>
        </div>

        {/* Scale specimen */}
        <div className="mt-4 overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
          {SCALE.map((step, i) => (
            <div
              key={step.name}
              className={`flex items-baseline justify-between gap-6 px-6 py-5 md:px-card ${
                i > 0 ? "border-t border-warm-taupe" : ""
              }`}
            >
              <span
                className={`${step.cls} font-financier-display truncate text-ink`}
              >
                Beautiful
              </span>
              <span className="shrink-0 text-right">
                <span className="block text-body-sm font-medium text-ink">
                  {step.name}
                </span>
                <span className="block font-fragment-mono text-eyebrow text-ash">
                  {step.px}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
