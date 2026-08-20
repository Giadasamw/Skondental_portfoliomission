const ACCENT = {
  name: "Terracotta Seal",
  hex: "#B05A36",
  role: "The single accent — CTAs, eyebrows, active states. Never body text, never a large fill.",
  swatch: "bg-terracotta-seal",
  label: "text-parchment",
  meta: "text-parchment/70",
};

const NEUTRALS = [
  {
    name: "Parchment",
    hex: "#FEF9EF",
    role: "Page canvas",
    swatch: "bg-parchment",
    ring: true,
  },
  {
    name: "Aged Paper",
    hex: "#F5EEE1",
    role: "Cards & panels",
    swatch: "bg-aged-paper",
    ring: true,
  },
  {
    name: "Warm Taupe",
    hex: "#D1C9BF",
    role: "Outlines & dividers",
    swatch: "bg-warm-taupe",
    ring: false,
  },
  {
    name: "Ink",
    hex: "#2A2B2F",
    role: "Headlines",
    swatch: "bg-ink",
    ring: false,
  },
  {
    name: "Graphite",
    hex: "#515151",
    role: "Body copy",
    swatch: "bg-graphite",
    ring: false,
  },
  {
    name: "Ash",
    hex: "#808988",
    role: "Muted labels",
    swatch: "bg-ash",
    ring: false,
  },
];

export function BrandColors() {
  return (
    <section className="bg-aged-paper">
      <div className="page-container py-section-lg">
        <div className="flex flex-col gap-4">
          <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal">
            Palette
          </span>
          <h2 className="text-heading-lg font-financier-display text-ink text-balance">
            Warm neutrals, <em>one seal</em>
          </h2>
          <p className="max-w-prose text-body-lg text-graphite text-pretty">
            Elevation comes from colour first — Parchment steps up to Aged Paper,
            then a Warm Taupe outline. Terracotta is the only hue, used sparingly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Accent — spans wider on large screens */}
          <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe lg:col-span-1 lg:row-span-2">
            <div className={`flex flex-1 flex-col justify-end p-card-lg ${ACCENT.swatch}`}>
              <span className={`text-eyebrow font-fragment-mono uppercase tracking-[0.14em] ${ACCENT.meta}`}>
                Accent
              </span>
              <span className={`text-subheading font-financier-display ${ACCENT.label}`}>
                {ACCENT.name}
              </span>
              <span className={`font-fragment-mono text-body-sm ${ACCENT.meta}`}>
                {ACCENT.hex}
              </span>
            </div>
            <p className="bg-parchment px-5 py-4 text-body-sm text-graphite text-pretty">
              {ACCENT.role}
            </p>
          </div>

          {/* Neutrals grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-2">
            {NEUTRALS.map((c) => (
              <div
                key={c.name}
                className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-parchment"
              >
                <div
                  className={`h-24 ${c.swatch} ${c.ring ? "border-b border-warm-taupe" : ""}`}
                />
                <div className="flex flex-col gap-0.5 px-4 py-3">
                  <span className="text-body-sm font-medium text-ink">{c.name}</span>
                  <span className="font-fragment-mono text-eyebrow text-ash">
                    {c.hex}
                  </span>
                  <span className="text-eyebrow text-graphite">{c.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
