import { SheetRow } from "./sheet-primitives";

/* Hex values verified against src/app/globals.css @theme tokens. */
const ACCENT = {
  name: "Terracotta Seal",
  hex: "#B05A36",
  swatch: "bg-terracotta-seal",
  label: "text-parchment",
  meta: "text-parchment/70",
};

const NEUTRALS = [
  { name: "Parchment", hex: "#FEF9EF", role: "Canvas", swatch: "bg-parchment", ring: true },
  { name: "Aged Paper", hex: "#F5EEE1", role: "Cards", swatch: "bg-aged-paper", ring: true },
  { name: "Warm Taupe", hex: "#D1C9BF", role: "Outlines", swatch: "bg-warm-taupe", ring: false },
  { name: "Ink", hex: "#2A2B2F", role: "Headlines", swatch: "bg-ink", ring: false },
  { name: "Graphite", hex: "#515151", role: "Body", swatch: "bg-graphite", ring: false },
  { name: "Ash", hex: "#808988", role: "Muted", swatch: "bg-ash", ring: false },
];

export function BrandColors() {
  return (
    <SheetRow label="Palette">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Accent */}
        <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe lg:row-span-2">
          <div className={`flex flex-1 flex-col justify-end p-card-lg ${ACCENT.swatch}`}>
            <span className={`text-subheading font-financier-display ${ACCENT.label}`}>
              {ACCENT.name}
            </span>
            <span className={`font-fragment-mono text-body-sm ${ACCENT.meta}`}>
              {ACCENT.hex}
            </span>
          </div>
        </div>

        {/* Neutrals */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-2">
          {NEUTRALS.map((c) => (
            <div
              key={c.name}
              className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-aged-paper"
            >
              <div
                className={`h-24 ${c.swatch} ${c.ring ? "border-b border-warm-taupe" : ""}`}
              />
              <div className="flex flex-col gap-0.5 px-4 py-3">
                <span className="text-body-sm font-medium text-ink">{c.name}</span>
                <span className="font-fragment-mono text-eyebrow text-ash">{c.hex}</span>
                <span className="text-eyebrow text-graphite">{c.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SheetRow>
  );
}
