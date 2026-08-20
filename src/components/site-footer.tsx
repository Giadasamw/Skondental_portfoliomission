const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book Now", href: "#book" },
  { label: "Terms", href: "#terms" },
];

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-terracotta-seal" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-terracotta-seal" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-terracotta-seal" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const CONTACT = [
  { icon: PhoneIcon, text: "+44 (0) 20 4619 4908", href: "tel:+442046194908" },
  { icon: MailIcon, text: "info@skondental.com", href: "mailto:info@skondental.com" },
  { icon: LocationIcon, text: "36 East Bay Lane, London, E20 3AY", href: null },
];

export function SiteFooter() {
  return (
    <footer className="bg-parchment px-4 pb-4 md:px-6">
      <div className="page-container rounded-t-[32px] bg-aged-paper px-6 pt-12 pb-8 md:px-16 md:pt-20 md:pb-10">
        {/* Top row — logo */}
        <p className="text-heading font-financier-display text-terracotta-seal">
          SKŌN DENTAL
        </p>

        {/* Body — 3 blocks */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-3 md:gap-12">
          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h5 className="text-body-sm font-semibold text-ink">Quick Links</h5>
            <ul className="mt-4 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-charcoal transition-colors hover:text-terracotta-seal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h5 className="text-body-sm font-semibold text-ink">Contact Info</h5>
            <ul className="mt-4 flex flex-col gap-3">
              {CONTACT.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon />
                  {href ? (
                    <a
                      href={href}
                      className="text-body text-charcoal transition-colors hover:text-terracotta-seal"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-body text-charcoal">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch — mini form */}
          <div>
            <h4 className="text-subheading font-financier-display text-ink">Get in touch</h4>
            <p className="mt-2 text-body-sm text-charcoal">
              Send us a message and we&apos;ll reply shortly.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email"
                className="rounded-xl border border-ash bg-parchment px-3.5 py-3 text-body-sm text-ink placeholder:text-graphite"
              />
              <label className="sr-only" htmlFor="footer-message">
                Message
              </label>
              <textarea
                id="footer-message"
                rows={3}
                placeholder="Message"
                className="resize-none rounded-xl border border-ash bg-parchment px-3.5 py-3 text-body-sm text-ink placeholder:text-graphite"
              />
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-pill bg-terracotta-seal px-6 py-3 text-body-sm font-semibold text-parchment transition-opacity hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-4 border-t border-warm-taupe pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:border-terracotta-seal hover:text-terracotta-seal"
            >
              <FacebookIcon />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:border-terracotta-seal hover:text-terracotta-seal"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="text-body-sm text-graphite">
            Copyright &copy; 2025 SKŌN Dental. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
