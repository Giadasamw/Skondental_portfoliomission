"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Composite Bonding", href: "#composite-bonding" },
  { label: "Treatments", href: "#treatments", hasDropdown: true },
  { label: "Fees", href: "#fees" },
  { label: "Gallery", href: "#gallery" },
  { label: "Finance Plans", href: "#finance" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
];

function ChevronDown() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4 md:px-6 md:pt-6">
      <nav
        aria-label="Primary"
        className="page-container flex items-center justify-between gap-6 rounded-nav border border-warm-taupe/50 bg-parchment/25 px-4 py-3 backdrop-blur-md md:px-6"
      >
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center" aria-label="SKŌN Dental home">
          <Image
            src="/images/skon-dental-logo.png"
            alt="SKŌN Dental"
            width={140}
            height={52}
            priority
            className="h-9 w-auto md:h-10"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-1 rounded-nav px-3 py-2 text-body-sm font-normal text-parchment/90 transition-colors hover:bg-parchment/15 hover:text-parchment"
              >
                {link.label}
                {link.hasDropdown ? <ChevronDown /> : null}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="hidden rounded-button bg-terracotta-seal px-5 py-2.5 text-body-sm font-semibold text-parchment transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book Online
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-nav p-2 text-parchment transition-colors hover:bg-parchment/15 lg:hidden"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="page-container mt-2 rounded-card border border-warm-taupe/50 bg-parchment/90 p-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-nav px-3 py-3 text-body font-normal text-ink transition-colors hover:bg-aged-paper"
                >
                  {link.label}
                  {link.hasDropdown ? <ChevronDown /> : null}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-button bg-terracotta-seal px-5 py-3 text-body font-semibold text-parchment"
          >
            Book Online
          </a>
        </div>
      ) : null}
    </header>
  );
}
