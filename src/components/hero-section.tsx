import Image from "next/image";
import { SiteHeader } from "./site-header";

const CHIPS = [
  "Teeth Straightening",
  "Composite Bonding",
  "Porcelain Veneers",
  "Teeth Whitening",
  "General Dentistry",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] w-full flex-col overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/hero-background.jpg"
        alt="A group of friends laughing together in warm evening light"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* 20% black overlay for legibility */}
      <div className="absolute inset-0 bg-pure-black/20" aria-hidden="true" />

      {/* Floating header */}
      <SiteHeader />

      {/* Bottom content */}
      <div className="relative z-10 mt-auto w-full px-4 pb-8 pt-32 md:px-6 md:pb-12">
        <div className="page-container flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Bottom-left: headline, subhead, CTA */}
          <div className="flex max-w-2xl flex-col gap-6">
            <h1 className="font-financier-display text-parchment text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95]">
              We craft confident, <em>natural</em> smiles
            </h1>
            <p className="max-w-xl text-body-lg font-light text-parchment/80">
              London&apos;s Leading Cosmetic Dentist — Composite Bonding,
              Veneers &amp; Invisalign
            </p>
            <div>
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-button bg-terracotta-seal px-7 py-3.5 text-body font-semibold text-parchment transition-opacity hover:opacity-90"
              >
                Book Free Consultation Now
              </a>
            </div>
          </div>

          {/* Bottom-right: frosted chips */}
          <ul className="flex snap-x gap-2 overflow-x-auto pb-1 lg:max-w-md lg:flex-wrap lg:justify-end lg:overflow-visible">
            {CHIPS.map((chip) => (
              <li key={chip} className="snap-start shrink-0">
                <span className="inline-flex whitespace-nowrap rounded-pill border border-warm-taupe/50 bg-parchment/20 px-4 py-2 text-body-sm font-normal text-parchment backdrop-blur-md">
                  {chip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
