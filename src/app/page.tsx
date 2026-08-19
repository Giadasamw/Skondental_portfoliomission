export default function Home() {
  return (
    <main className="page-container flex flex-1 flex-col justify-center gap-4 py-20">
      <p className="text-eyebrow font-semibold uppercase text-terracotta-seal">
        Design system
      </p>
      <h1 className="text-heading-lg">
        Le fondamenta di stile sono <em>pronte</em>.
      </h1>
      <p className="text-body-lg max-w-prose font-light text-graphite">
        Token, tipografia e superfici vivono in{" "}
        <code className="font-fragment-mono text-body-sm">
          src/app/globals.css
        </code>
        . Le regole di utilizzo sono in{" "}
        <code className="font-fragment-mono text-body-sm">DESIGN.md</code>.
      </p>
    </main>
  );
}
