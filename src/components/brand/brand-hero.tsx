import Image from "next/image";

export function BrandHero() {
  return (
    <section className="rounded-card border border-warm-taupe bg-aged-paper p-card md:p-card-lg">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit rounded-pill border border-warm-taupe px-3 py-1 text-eyebrow font-fragment-mono uppercase tracking-[0.16em] text-terracotta-seal">
            Brand Guidelines
          </span>
          <h1 className="text-display font-financier-display text-ink">
            Skōn <em>Dental</em>
          </h1>
        </div>
        <Image
          src="/images/skon-dental-logo.png"
          alt="SKŌN Dental"
          width={160}
          height={60}
          priority
          className="h-10 w-auto md:h-12"
        />
      </div>
    </section>
  );
}
