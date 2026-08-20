import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

// Order strictly follows the numeric file order (1, 2, 3, ...).
const IMAGES: GalleryImage[] = [
  {
    src: "/gallery/galleryphoto1.webp",
    alt: "Skōn Dental reception with a terracotta sofa beneath the illuminated round logo",
  },
  {
    src: "/gallery/galleryphoto2.jpg",
    alt: "Patient smiling brightly while looking up at a clear blue sky",
  },
  {
    src: "/gallery/galleryphoto3.webp",
    alt: "Warm interior counter with marble shelving, dried flowers and brass tap",
  },
  {
    src: "/gallery/galleryphoto4.jpg",
    alt: "Woman in an orange knit smiling with a relaxed, happy expression",
  },
  {
    src: "/gallery/galleryphoto5.webp",
    alt: "Skōn Dental shopfront at dusk with the illuminated hanging sign",
  },
  {
    src: "/gallery/galleryphoto6.jpg",
    alt: "Young man smiling widely outdoors in front of tropical greenery",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-parchment py-section-lg">
      <div className="page-container">
        <h2 className="text-heading-lg text-ink text-center font-financier-display text-balance">
          Inside <em>Skōn</em>
        </h2>
      </div>

      <ul
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-gutter pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {IMAGES.map((image, index) => (
          <li
            key={image.src}
            className="snap-start shrink-0 basis-[82%] sm:basis-[40%] lg:basis-[calc((100%-5rem)/6)]"
          >
            <div className="rounded-card relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 40vw, 82vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
