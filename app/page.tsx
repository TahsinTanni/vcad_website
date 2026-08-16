export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="max-w-frame mx-auto px-margin py-xxl flex flex-col gap-lg">
        <p className="font-meta text-meta text-tertiary uppercase tracking-widest">
          Stage 1 — scaffold check
        </p>
        <h1 className="font-hero-display text-hero-display text-on-surface">
          Design tokens are wired up.
        </h1>
        <p className="font-lead text-lead text-on-surface-variant max-w-2xl">
          Header and footer are shared components rendered from the root
          layout. The real homepage (hero, Schools of Study carousel, By the
          Numbers) lands in Stage 2.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-md mt-xl">
          {[
            ["primary", "bg-primary"],
            ["secondary", "bg-secondary"],
            ["tertiary", "bg-tertiary"],
            ["secondary-container", "bg-secondary-container"],
          ].map(([label, cls]) => (
            <div key={label} className="flex flex-col gap-sm">
              <div className={`h-16 rounded-[12px] ${cls}`} />
              <span className="font-micro text-micro text-on-surface-variant">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
