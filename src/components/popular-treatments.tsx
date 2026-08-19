import Image from "next/image";

type Treatment = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

const TREATMENTS: Treatment[] = [
  {
    name: "Composite Bonding",
    description: "Same-day smile transformation",
    image: "/images/treatment-composite-bonding.jpg",
    alt: "Before and after composite bonding closing a gap between the front teeth",
  },
  {
    name: "Teeth Straightening",
    description: "Discreet aligners for a seamless smile",
    image: "/images/treatment-teeth-straightening.jpg",
    alt: "Before and after teeth straightening showing evenly aligned teeth",
  },
  {
    name: "Teeth Whitening",
    description: "Bespoke home whitening kit",
    image: "/images/treatment-teeth-whitening.png",
    alt: "Before and after teeth whitening showing a noticeably brighter smile",
  },
  {
    name: "Hollywood Smile Makeover",
    description: "Porcelain Veneers",
    image: "/images/treatment-hollywood-smile.png",
    alt: "Before and after Hollywood smile makeover with porcelain veneers",
  },
];

export function PopularTreatments() {
  return (
    <section id="treatments" className="bg-aged-paper py-section-lg">
      <div className="page-container">
        <h2 className="text-heading-lg text-ink text-center font-financier-display text-balance">
          Popular <em>Treatments</em>
        </h2>

        <ul
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
        >
          {TREATMENTS.map((treatment) => (
            <li
              key={treatment.name}
              className="snap-start shrink-0 basis-[78%] sm:basis-auto"
            >
              <article className="rounded-card group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden">
                <Image
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 78vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom scrim: transparent to Ink */}
                <div
                  className="from-ink/85 absolute inset-0 bg-gradient-to-t via-ink/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col gap-1 p-6">
                  <h3 className="text-subheading text-parchment font-semibold">
                    {treatment.name}
                  </h3>
                  <p className="text-body-sm text-parchment/80 font-normal">
                    {treatment.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
