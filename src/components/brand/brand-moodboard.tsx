import { SheetRow } from "./sheet-primitives";

const PHOTOS = [
  { src: "/gallery/galleryphoto1.webp", alt: "Skōn Dental reception with terracotta sofa" },
  { src: "/gallery/galleryphoto2.jpg", alt: "Patient smiling in sunlight" },
  { src: "/gallery/galleryphoto3.webp", alt: "Marble counter with dried flowers and toothpaste" },
  { src: "/gallery/galleryphoto4.jpg", alt: "Patient in an orange sweater smiling" },
  { src: "/gallery/galleryphoto5.webp", alt: "Skōn Dental shopfront at dusk" },
  { src: "/gallery/galleryphoto6.jpg", alt: "Patient smiling outdoors" },
];

export function BrandMoodboard() {
  return (
    <SheetRow label="Moodboard">
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="break-inside-avoid overflow-hidden rounded-card border border-warm-taupe"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </SheetRow>
  );
}
