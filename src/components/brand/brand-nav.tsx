import Image from "next/image";
import Link from "next/link";

function ArrowLeft() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
    </svg>
  );
}

export function BrandNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-warm-taupe/60 bg-parchment/80 backdrop-blur-md">
      <nav
        aria-label="Brand guide"
        className="page-container flex items-center justify-between gap-6 py-4"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-body-sm font-medium text-graphite transition-colors hover:text-terracotta-seal"
        >
          <ArrowLeft />
          Back to site
        </Link>

        <Link href="/" className="flex shrink-0 items-center" aria-label="SKŌN Dental home">
          <Image
            src="/images/skon-dental-logo.png"
            alt="SKŌN Dental"
            width={132}
            height={50}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <span className="hidden text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal sm:inline">
          Brand Guidelines
        </span>
      </nav>
    </header>
  );
}
