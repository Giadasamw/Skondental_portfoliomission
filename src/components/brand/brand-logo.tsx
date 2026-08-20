import Image from "next/image";

export function BrandLogo() {
  return (
    <section className="bg-parchment">
      <div className="page-container py-section-lg">
        <div className="flex flex-col gap-4">
          <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal">
            Logo
          </span>
          <h2 className="text-heading-lg font-financier-display text-ink text-balance">
            One mark, <em>room to breathe</em>
          </h2>
          <p className="max-w-prose text-body-lg text-graphite text-pretty">
            The wordmark carries the macron over the &ldquo;ō&rdquo; — never drop
            it. Give it clear space and let the surface do the contrast work.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* On parchment */}
          <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe">
            <div className="flex flex-1 items-center justify-center bg-parchment px-8 py-16">
              <Image
                src="/images/skon-dental-logo.png"
                alt="SKŌN Dental logo on the parchment canvas"
                width={220}
                height={84}
                className="h-auto w-[180px]"
              />
            </div>
            <p className="border-t border-warm-taupe bg-aged-paper px-5 py-3 text-body-sm text-graphite">
              Primary — on Parchment
            </p>
          </div>

          {/* On terracotta */}
          <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe">
            <div className="flex flex-1 items-center justify-center bg-terracotta-seal px-8 py-16">
              <Image
                src="/images/skon-dental-logo.png"
                alt="SKŌN Dental logo reversed on the terracotta accent"
                width={220}
                height={84}
                className="h-auto w-[180px] brightness-0 invert"
              />
            </div>
            <p className="border-t border-warm-taupe bg-aged-paper px-5 py-3 text-body-sm text-graphite">
              Reversed — on Terracotta Seal
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Clear space",
              body: "Keep padding equal to the height of the ō on every side.",
            },
            {
              title: "Minimum size",
              body: "Never below 96px wide on screen, so DENTAL stays legible.",
            },
            {
              title: "Don't",
              body: "No recolouring, stretching, shadows, or removing the macron.",
            },
          ].map((rule) => (
            <div
              key={rule.title}
              className="flex flex-col gap-2 rounded-card border border-warm-taupe bg-aged-paper p-card"
            >
              <h3 className="text-subheading font-financier-display text-ink">
                {rule.title}
              </h3>
              <p className="text-body-sm text-graphite text-pretty">{rule.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
