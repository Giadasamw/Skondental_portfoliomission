"use client";

import { useState } from "react";
import Image from "next/image";

type Faq = {
  num: string;
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    num: "01",
    question: "What services do you offer?",
    answer:
      "SKŌN DENTAL offers a focused range of cosmetic and general treatments — clear aligners and discreet braces, professional and at-home whitening, composite bonding, bespoke composite and porcelain veneers, gum contouring, and routine check-ups. Every plan is tailored to your smile and lifestyle.",
  },
  {
    num: "02",
    question: "What is composite bonding?",
    answer:
      "Composite bonding is a minimally invasive treatment where a tooth-coloured resin is sculpted directly onto your teeth to reshape, close gaps, and refine edges. It is completed in a single visit, requires little to no drilling, and delivers a natural, symmetrical finish.",
  },
  {
    num: "03",
    question: "How much does composite bonding cost?",
    answer:
      "Pricing depends on how many teeth are treated and the complexity of the result you want. We give you a clear, itemised quote at your free consultation, and flexible finance plans are available so you can spread the cost comfortably.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-aged-paper py-section-lg">
      <div className="page-container">
        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-14">
          {/* Left column — portrait image (~40%) */}
          <div className="md:col-span-2">
            <div className="rounded-card relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/faq-friends.jpg"
                alt="Three friends laughing together outdoors against a blue sky"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column — heading + accordion (~60%) */}
          <div className="md:col-span-3">
            <h2 className="text-heading-lg text-ink font-financier-display text-balance">
              Got <em>questions?</em>
            </h2>

            <ul className="mt-8 border-t border-warm-taupe">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${faq.num}`;
                const buttonId = `faq-trigger-${faq.num}`;
                return (
                  <li key={faq.num} className="border-b border-warm-taupe">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        className="flex w-full items-center gap-4 py-6 text-left"
                      >
                        <span className="text-body-sm text-terracotta-seal font-ftbase font-semibold tabular-nums">
                          {faq.num}
                        </span>
                        <span className="text-subheading text-ink font-ftbase flex-1 text-pretty">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-terracotta-seal relative flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-terracotta-seal"
                        >
                          {/* horizontal bar of the plus */}
                          <span className="absolute h-px w-3.5 bg-current" />
                          {/* vertical bar — hidden when open to form a minus */}
                          <span
                            className={`absolute h-3.5 w-px bg-current transition-transform duration-300 ${
                              isOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="pr-13 pb-6"
                    >
                      <p className="text-body text-charcoal max-w-prose text-pretty">
                        {faq.answer}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
