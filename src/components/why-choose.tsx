import Image from "next/image";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  body: string;
  icon: ReactNode;
};

/* Thin-line icons in the system's outlined "wax seal" style.
   The base layer applies fill:none + stroke:currentColor to inline svg,
   so colour comes from text-terracotta-seal and we only set stroke width. */
const DiamondSmile = (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 3.5h10l4 5.5L12 21 3 9z" />
    <path d="M3 9h18" />
    <path d="M7 3.5 9.6 9M17 3.5 14.4 9M9.6 9 12 21 14.4 9" />
  </svg>
);

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

const ToothShield = (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 3.5c1.4 0 1.7.8 4 .8s2.6-.8 4-.8c2 0 3 1.6 3 3.6 0 2.3-1 3.4-1.6 6.2-.5 2.3-.9 5.2-2.2 5.2-1.5 0-1.2-3.4-3.2-3.4S9.5 18.5 8 18.5c-1.3 0-1.7-2.9-2.2-5.2C5.2 10.5 4.2 9.4 4.2 7.1c0-2 1-3.6 3-3.6z" />
    <path d="M9.5 9.5 11 11l3-3.2" />
  </svg>
);

const BoutiqueBloom = (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 12c0-3 1.5-5.5 0-8.5C10.5 6.5 12 9 12 12z" />
    <path d="M12 12c2.1-2.1 5.2-2.6 8.5-2C17.8 12.4 15 13 12 12z" />
    <path d="M12 12c-2.1-2.1-5.2-2.6-8.5-2C6.2 12.4 9 13 12 12z" />
    <path d="M12 12v8.5" />
  </svg>
);

const PriceTag = (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h7.2c.5 0 1 .2 1.4.6l7 7c.8.8.8 2 0 2.8l-5.8 5.8c-.8.8-2 .8-2.8 0l-7-7A2 2 0 0 1 3.4 12V4.6c0-.3.3-.6.6-.6z" transform="translate(0.5 -0.5)" />
    <circle cx="8" cy="8" r="1.4" />
  </svg>
);

const FEATURES: Feature[] = [
  {
    title: "Cosmetic Expertise",
    body: "Whether it's composite bonding, veneers, or professional teeth whitening, we're known for creating bright, natural, and balanced smiles—often with no pain and no shaving.",
    icon: DiamondSmile,
  },
  {
    title: "Teeth Straightening",
    body: "Discreetly straighten your teeth with aligners that are removable and designed for your lifestyle. We guide you every step of the way from digital scans to your final retainer.",
    icon: AlignerArch,
  },
  {
    title: "Professional Teeth Whitening",
    body: "We offer professional home whitening kits with custom-made trays and whitening gels. You can safely brighten your smile from the comfort of your own home—with real, lasting results.",
    icon: Sparkle,
  },
  {
    title: "General & Preventative Dentistry",
    body: "Need a check-up, hygiene clean, or filling? We've got you. We believe in prevention-first dentistry and long-term oral health, with gentle care you can trust.",
    icon: ToothShield,
  },
  {
    title: "A Boutique Experience",
    body: "Our modern, calming space in East London feels more like a boutique than a clinic. Every detail has been designed to help you feel relaxed and confident from the moment you arrive.",
    icon: BoutiqueBloom,
  },
  {
    title: "Transparent Pricing & Finance Plans",
    body: "No hidden fees, no pressure. Just clear treatment plans, fair prices, and flexible finance to suit your budget.",
    icon: PriceTag,
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-parchment py-section-lg">
      <div className="page-container">
        <header className="flex flex-col">
          <h2 className="text-heading-lg text-ink font-financier-display text-balance">
            Why Choose <em>SKŌN Dental?</em>
          </h2>
          <p className="text-body-lg text-charcoal mt-5 max-w-prose text-pretty">
            At SKŌN Dental, we combine artistic smile design with trusted
            everyday dentistry—giving you everything from a glowing smile
            makeover to reliable, long-term dental care. Here&apos;s why patients
            across London choose us:
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="relative h-56 overflow-hidden rounded-card border border-warm-taupe md:h-72 lg:order-last lg:col-start-3 lg:row-start-1 lg:h-full">
            <Image
              src="/images/skon-clinic-interior.jpeg"
              alt="The calming, boutique interior of the SKŌN Dental clinic in East London"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-2 lg:col-start-1 lg:row-start-1">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-card border-warm-taupe bg-aged-paper flex h-full flex-col border p-card-lg"
              >
                <span className="text-terracotta-seal [&_svg]:h-8 [&_svg]:w-8">
                  {feature.icon}
                </span>
                <h3 className="text-subheading text-ink mt-5 font-ftbase font-semibold">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-charcoal mt-3">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
