"use client";

import { useCallback, useEffect, useState } from "react";

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

/* Ordered most recent → least recent:
   4 weeks · 1 month · 1 month · 2 months · 1 year · 1 year */
const REVIEWS: Review[] = [
  {
    name: "Janki Joshi",
    date: "4 settimane fa",
    rating: 5,
    text:
      "I honestly can't thank Dr. Kripa Desai enough for giving me the perfect smile for my wedding! From the start, she really listened to what I wanted and made me feel completely comfortable throughout the whole process. The results were even better than I imagined – natural, beautiful, and exactly what I was hoping for. Dr. Kripa is not only incredibly talented but also so kind and genuinely cares about her patients.",
  },
  {
    name: "Angelina Khan",
    date: "1 mese fa",
    rating: 5,
    text:
      "I'm so happy with my composite veneers from Skōn Dental! The whole team was friendly, professional, and made me feel comfortable throughout. My veneers look so natural, and I couldn't be happier with the results. I would definitely recommend Skōn Dental to anyone looking to transform their smile!",
  },
  {
    name: "Leon Cliff",
    date: "1 mese fa",
    rating: 5,
    text:
      "I cannot describe how good this experience was. I needed to get some porcelain veneers for my wedding and picking SKŌN Dental was the best decision I've made. It made me feel so much more confident smiling at the wedding and in the photos. The team are 10/10 and as far as I'm concerned artists with the level of detail and attention they put into everything. They were also super responsive on WhatsApp. This will be my go-to dentist from now on.",
  },
  {
    name: "Marian K",
    date: "2 mesi fa",
    rating: 5,
    text:
      "Very friendly staff — swift and informative process. Never any issues with appointments. Felt comfortable at all appointments and love my new smile!!! Would highly recommend.",
  },
  {
    name: "Nadia Khoshal",
    date: "1 year ago",
    rating: 5,
    text:
      "I recently had composite veneers done by Dr Kripa, and I couldn't be happier with the results. From the very first consultation Dr Kripa was incredibly thorough, explaining every step of the process and making sure I felt completely comfortable.",
  },
  {
    name: "Sandipkumar Patel",
    date: "1 year ago",
    rating: 5,
    text:
      "I recently finished my Invisalign treatment which took about three and a half months, followed by composite bonding (done all in one session). I signed up for the ABC package (Align, Bleach, and Bond) and I'm so glad I did. I wanted a result that looked extremely natural. Would definitely recommend her!",
  },
];

const AUTOPLAY_MS = 5000;

const Star = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    stroke="none"
    data-illustration
    aria-hidden="true"
  >
    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.9 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
  </svg>
);

const GoogleBadge = () => (
  <span
    className="bg-parchment border-warm-taupe absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-pill border"
    aria-hidden="true"
  >
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" data-illustration>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1 .7-2.4 1.1-4 1.1-3 0-5.6-2-6.6-4.8h-4v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4a7.2 7.2 0 0 1 0-4.6V6.7h-4a12 12 0 0 0 0 10.7l4-3z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.4 6.7l4 3.1C6.4 6.8 9 4.8 12 4.8z"
      />
    </svg>
  </span>
);

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % REVIEWS.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, index]);

  const review = REVIEWS[index];

  return (
    <section id="testimonials" className="bg-parchment py-section-lg">
      <div className="page-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column — editorial title with decorative quotes */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="text-warm-taupe font-financier-display block h-16 text-[120px] leading-[1] select-none"
            >
              &ldquo;
            </span>
            <h2 className="text-heading-lg text-ink font-financier-display text-balance mt-4">
              How our customers <em>love us</em> and their new smiles
            </h2>
            <span
              aria-hidden="true"
              className="text-warm-taupe font-financier-display mt-6 block h-10 text-[120px] leading-[1] select-none"
            >
              &rdquo;
            </span>
          </div>

          {/* Right column — carousel */}
          <div className="flex flex-col items-center">
            <div
              className="flex w-full items-center gap-3 sm:gap-4"
              aria-roledescription="carousel"
              aria-label="Customer reviews"
            >
              <button
                type="button"
                onClick={prev}
                aria-label="Previous review"
                className="text-ink border-warm-taupe hover:bg-aged-paper flex h-10 w-10 shrink-0 items-center justify-center rounded-pill border transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>

              <article
                aria-roledescription="slide"
                aria-label={`Review ${index + 1} of ${REVIEWS.length}`}
                className="bg-aged-paper rounded-card flex-1 p-card-lg text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="relative">
                    <span className="bg-terracotta-seal text-parchment font-ftbase flex h-14 w-14 items-center justify-center rounded-pill text-subheading font-semibold">
                      {review.name.charAt(0)}
                    </span>
                    <GoogleBadge />
                  </span>

                  <p className="text-body text-ink font-ftbase mt-4 font-semibold">
                    {review.name}
                  </p>
                  <p className="text-body-sm text-graphite font-ftbase mt-1">
                    {review.date}
                  </p>

                  <div
                    className="text-terracotta-seal mt-3 flex items-center gap-1"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>

                  <p className="text-body-sm text-charcoal font-ftbase mt-4 line-clamp-6 text-pretty">
                    {review.text}
                  </p>
                </div>
              </article>

              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="text-ink border-warm-taupe hover:bg-aged-paper flex h-10 w-10 shrink-0 items-center justify-center rounded-pill border transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="text-body-sm text-charcoal font-ftbase mt-6 text-center">
              Google rating score:{" "}
              <span className="font-semibold">5.0</span> of 5, based on{" "}
              <span className="font-semibold">143 reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
