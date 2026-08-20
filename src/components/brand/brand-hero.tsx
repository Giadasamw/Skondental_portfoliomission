export function BrandHero() {
  return (
    <section className="bg-parchment">
      <div className="page-container py-section-lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal">
            <span>Brand Identity</span>
            <span aria-hidden="true" className="text-warm-taupe">
              /
            </span>
            <span className="text-graphite">Version 1.0 — 2026</span>
          </div>

          <h1 className="text-display-xl font-financier-display text-ink text-balance">
            The look and feel of <em>Skōn</em> Dental
          </h1>

          <p className="max-w-prose text-body-lg text-graphite text-pretty">
            A warm, editorial identity for a calmer kind of dentistry. This guide
            documents the voice, the palette, the type, and the building blocks
            that keep every touchpoint feeling unmistakably Skōn.
          </p>

          <dl className="mt-4 grid grid-cols-2 gap-6 border-t border-warm-taupe pt-8 sm:grid-cols-4">
            {[
              { term: "Sector", value: "Dental clinic" },
              { term: "Voice", value: "Warm, precise" },
              { term: "Origin", value: "Scandinavian" },
              { term: "Accent", value: "Terracotta" },
            ].map((item) => (
              <div key={item.term} className="flex flex-col gap-1">
                <dt className="text-eyebrow font-fragment-mono uppercase tracking-[0.14em] text-ash">
                  {item.term}
                </dt>
                <dd className="text-body font-medium text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
