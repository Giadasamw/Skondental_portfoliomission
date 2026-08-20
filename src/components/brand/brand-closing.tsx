import Link from "next/link";

export function BrandClosing() {
  return (
    <section className="bg-aged-paper">
      <div className="page-container py-section-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal">
            In one line
          </span>
          <h2 className="max-w-prose text-heading-lg font-financier-display text-ink text-balance">
            Beautiful by design, <em>calm by nature</em>.
          </h2>
          <p className="max-w-prose text-body-lg text-graphite text-pretty">
            Keep the palette quiet, let one terracotta seal lead, and always give
            the serif room to speak. That is Skōn.
          </p>
          <Link
            href="/"
            className="mt-2 rounded-button bg-terracotta-seal px-7 py-3.5 text-body font-semibold text-parchment transition-opacity hover:opacity-90"
          >
            Back to the site
          </Link>
        </div>
      </div>
    </section>
  );
}
