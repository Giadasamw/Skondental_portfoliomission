import { SheetRow, CardLabel } from "./sheet-primitives";

/* ---------- Outlined icon set (1.5px stroke, currentColor) ------------- */
function ToothIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5.5c-1.5-1.2-3-1.8-4.5-1.5C5.7 4.3 4.5 5.8 4.5 8c0 2 .4 3.6.9 5.5.4 1.6.7 3.2 1 4.6.2 1 .5 1.9 1.3 1.9.9 0 1.1-1 1.3-2 .2-1.1.4-2.3 1-2.3s.8 1.2 1 2.3c.2 1 .4 2 1.3 2 .8 0 1.1-.9 1.3-1.9.3-1.4.6-3 1-4.6.5-1.9.9-3.5.9-5.5 0-2.2-1.2-3.7-3-4-1.5-.3-3 .3-4.5 1.5Z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 4 2.35 4.76 5.26.77-3.8 3.7.9 5.24L12 16.9l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77Z" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c.3 3.5 1.7 5.7 5.5 6-3.8.3-5.2 2.5-5.5 6-.3-3.5-1.7-5.7-5.5-6 3.8-.3 5.2-2.5 5.5-6Z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3c0 1-.8 1.8-1.8 1.7A16 16 0 0 1 4.8 5.8 1.7 1.7 0 0 1 6.5 4Z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 19 6v5c0 4.4-2.9 7.9-7 9.5-4.1-1.6-7-5.1-7-9.5V6Z" />
      <path d="m9 11.5 2 2 4-4.5" />
    </svg>
  );
}

const ICONS = [ToothIcon, CalendarIcon, StarIcon, SparkleIcon, PhoneIcon, ShieldIcon];

export function BrandComponents() {
  return (
    <SheetRow label="Components">
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Buttons */}
        <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
          <div className="flex flex-1 flex-col gap-5 p-card">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-button bg-terracotta-seal px-6 py-3 text-body-sm font-semibold text-parchment transition-opacity hover:opacity-90"
              >
                Book Online
              </button>
              <button
                type="button"
                className="rounded-button border border-terracotta-seal px-6 py-3 text-body-sm font-semibold text-terracotta-seal transition-colors hover:bg-terracotta-seal hover:text-parchment"
              >
                Treatments
              </button>
              <button
                type="button"
                className="rounded-button px-6 py-3 text-body-sm font-semibold text-ink underline decoration-warm-taupe underline-offset-4 transition-colors hover:decoration-terracotta-seal"
              >
                Learn more
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {["Composite Bonding", "Whitening", "Invisalign"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-warm-taupe bg-parchment px-4 py-1.5 text-body-sm text-graphite"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <CardLabel>Buttons &amp; pills</CardLabel>
        </div>

        {/* Icons */}
        <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
          <div className="grid flex-1 grid-cols-3 gap-3 p-card">
            {ICONS.map((Icon, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-card border border-warm-taupe bg-parchment py-5 text-terracotta-seal"
              >
                <Icon />
              </div>
            ))}
          </div>
          <CardLabel>Icons</CardLabel>
        </div>

        {/* Card — treatment */}
        <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
          <div className="flex flex-1 flex-col gap-3 p-card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-terracotta-seal/10 text-terracotta-seal">
              <SparkleIcon />
            </span>
            <h4 className="text-subheading font-financier-display text-ink">
              Teeth Whitening
            </h4>
            <p className="text-body-sm text-graphite text-pretty">
              A brighter, natural-looking smile in a single calm visit.
            </p>
          </div>
          <CardLabel>Card</CardLabel>
        </div>

        {/* Card — review */}
        <div className="flex flex-col overflow-hidden rounded-card border border-warm-taupe bg-aged-paper">
          <div className="flex flex-1 flex-col justify-center gap-3 p-card">
            <div className="flex text-terracotta-seal">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-body text-graphite text-pretty">
              &ldquo;Genuinely the calmest dentist I have ever been to.&rdquo;
            </p>
          </div>
          <CardLabel>Review card</CardLabel>
        </div>
      </div>
    </SheetRow>
  );
}
