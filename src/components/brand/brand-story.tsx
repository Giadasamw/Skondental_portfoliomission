const PRINCIPLES = [
  {
    title: "Calm over clinical",
    body: "We trade sterile white for warm parchment. Every surface should feel like a considered space, not a waiting room.",
  },
  {
    title: "Editorial, not corporate",
    body: "We speak like a well-made magazine — serif headlines, generous space, and one confident accent doing the talking.",
  },
  {
    title: "Human at the centre",
    body: "Real smiles, warm photography, and plain language. The brand is a person you trust, not a procedure you endure.",
  },
];

export function BrandStory() {
  return (
    <section className="bg-aged-paper">
      <div className="page-container py-section-lg">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-eyebrow font-fragment-mono uppercase tracking-[0.18em] text-terracotta-seal">
              The idea
            </span>
            <h2 className="text-heading-lg font-financier-display text-ink text-balance">
              &ldquo;Skōn&rdquo; means <em>beautiful</em>
            </h2>
            <p className="max-w-prose text-body-lg text-graphite text-pretty">
              Borrowed from the Scandinavian <em className="italic">skön</em> —
              beautiful, comfortable, at ease. It is the feeling we design for:
              dentistry that looks after how you feel, not only how you smile.
            </p>
            <p className="max-w-prose text-body text-graphite text-pretty">
              That single word sets the whole system. Soft light, honest
              materials, and a quiet confidence run through everything from the
              signage on the door to the button you tap to book.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {PRINCIPLES.map((item) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-card border border-warm-taupe bg-parchment p-card"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-pill bg-terracotta-seal"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-subheading font-financier-display text-ink">
                    {item.title}
                  </h3>
                  <p className="text-body text-graphite text-pretty">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
