import type { ReactNode } from "react";

/* A labelled row of the brand sheet: a small eyebrow subtitle, then content.
   No headings, no descriptions — the visuals carry the meaning. */
export function SheetRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.16em] text-terracotta-seal">
        {label}
      </span>
      {children}
    </section>
  );
}

/* A bordered card on the aged-paper surface. */
export function SheetCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
      {children}
    </div>
  );
}

/* The small caption strip at the foot of a card. */
export function CardLabel({ children }: { children: ReactNode }) {
  return (
    <p className="border-t border-warm-taupe px-5 py-3 text-body-sm text-graphite">
      {children}
    </p>
  );
}
