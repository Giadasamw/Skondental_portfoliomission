export function FinalCta() {
  return (
    <section className="bg-aged-paper">
      <div className="page-container flex flex-col items-center py-section text-center md:py-section-lg">
        <h2 className="text-display text-ink font-financier-display text-balance max-w-[14ch]">
          Smile like you <em className="text-terracotta-seal">mean</em> it.
        </h2>
        <a
          href="#book"
          className="mt-8 inline-flex w-full items-center justify-center rounded-button bg-terracotta-seal px-10 py-4 text-body-lg font-semibold text-parchment transition-opacity hover:opacity-90 sm:w-auto"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
