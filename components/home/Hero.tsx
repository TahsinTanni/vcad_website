import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCR8Zpdg2SFDGfEWS_30l9f8V-xjau7TviAx2IxXi4S2sYeEzPyr8dFe10-T-ryb6wrKVqK6iHGeG1KQi9KPijlIchDHqkZSxYagmplkMPnoimZmhGxgbBsfVMTvzO1eb_XLPnBycSM4sJtn7ZTanlMVa392lgHpf7vJI8bU0wC1DQwQVtI-k2bjSyQP8CsGdISpzil5gzKhc1NXroGEtVFucqbe5jetJ9Ocd1GY46AUKkYDnl3kiEw"
          alt="A cinematic photograph of a modern art and design college studio at night, lit by glowing workstation screens and neon cyan and magenta accents."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-frame w-full mx-auto px-margin pt-20 flex flex-col items-start gap-lg text-left">
        <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-surface-variant/50 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_theme(colors.tertiary)] animate-pulse" />
          <span className="font-meta text-meta text-on-surface-variant uppercase tracking-widest">
            Planet Education Networks
          </span>
        </div>

        <h1 className="font-hero-display text-hero-display-mobile md:text-hero-display text-on-surface max-w-4xl drop-shadow-2xl">
          Design Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary to-tertiary">
            Future at VCAD
          </span>
        </h1>

        <p className="font-lead text-lead text-on-surface-variant max-w-2xl">
          The premier destination for artistic excellence and digital
          innovation. Where academic tradition meets cutting-edge creativity.
        </p>

        <div className="flex flex-wrap items-center gap-md mt-sm">
          <button className="px-xl py-md bg-gradient-to-r from-secondary-container to-secondary rounded-[20px] font-default-primary text-default-primary text-on-secondary shadow-[0_0_30px_theme(colors.secondary-container/30)] hover:shadow-[0_0_40px_theme(colors.secondary-container/50)] transition-all duration-300 transform hover:-translate-y-1">
            Apply Now
          </button>
          <a
            href="/courses"
            className="px-xl py-md rounded-[20px] font-default-primary text-default-primary text-primary hover:bg-surface-variant/50 transition-colors flex items-center gap-sm group"
          >
            Explore Programs
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-xl left-1/2 -translate-x-1/2 flex flex-col items-center gap-sm opacity-50 animate-bounce">
        <span className="font-meta text-meta text-on-surface-variant uppercase tracking-widest [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="material-symbols-outlined text-on-surface-variant">
          arrow_downward
        </span>
      </div>
    </section>
  );
}
