import { SheetRow } from "./sheet-primitives";

/* Steps verified against src/app/globals.css @theme (size / line-height). */
const SCALE = [
  { name: "Heading LG", cls: "text-heading-lg", px: "45 / 1.1" },
  { name: "Heading", cls: "text-heading", px: "34 / 1.15" },
  { name: "Subheading", cls: "text-subheading", px: "20 / 1.3" },
  { name: "Body", cls: "text-body", px: "16 / 1.5" },
];

export function BrandTypography() {
  return (
    <SheetRow label="Typography">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Serif */}
        <div className="flex flex-col gap-3 rounded-card border border-warm-taupe bg-aged-paper p-card">
          <span className="font-financier-display text-[64px] leading-none text-ink">
            Aa
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-body font-medium text-ink">Financier Display</span>
            <span className="text-body-sm text-graphite">
              Serif for headings. Weight 300 italic for the accent word.
            </span>
          </div>
        </div>

        {/* Sans */}
        <div className="flex flex-col gap-3 rounded-card border border-warm-taupe bg-aged-paper p-card">
          <span className="font-ftbase text-[64px] leading-none text-ink">Aa</span>
          <div className="flex flex-col gap-1">
            <span className="text-body font-medium text-ink">Host Grotesk</span>
            <span className="text-body-sm text-graphite">
              Sans for paragraphs, navigation, buttons, and UI labels.
            </span>
          </div>
        </div>
      </div>

      {/* Compact scale specimen */}
      <div className="overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
        {SCALE.map((step, i) => (
          <div
            key={step.name}
            className={`flex items-baseline justify-between gap-6 px-5 py-4 ${
              i > 0 ? "border-t border-warm-taupe" : ""
            }`}
          >
            <span className={`${step.cls} font-financier-display truncate text-ink`}>
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
    </SheetRow>
  );
}
