function Word({ children }: { children: string }) {
  return (
    <span className="hero-word-clip">
      <span className="hero-word">{children}</span>
    </span>
  );
}

export default function Hero() {
  const line1 = "FLAME-GRILLED.";
  const line2 = "STREET-STYLE.";
  const line3 = "STALL-FRESH.";

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-pine-950 pt-28 pb-24"
    >
      {/* Blobs */}
      <div
        className="blob w-[420px] h-[420px] -top-24 -left-24 bg-amber/30"
        style={{ animationDuration: "18s" }}
      />
      <div
        className="blob w-[380px] h-[380px] top-1/3 -right-20 bg-pine-700/50"
        style={{ animationDuration: "22s", animationDelay: "-4s" }}
      />
      <div
        className="blob w-[300px] h-[300px] bottom-0 left-1/4 bg-cream/10"
        style={{ animationDuration: "20s", animationDelay: "-9s" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="hero-fade inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 mb-8">
          <span className="text-base">🔥</span>
          <span className="eyebrow text-cream/80">Now serving at Sector 12 Market</span>
        </div>

        <h1 className="font-display font-extrabold uppercase text-cream leading-[0.95] text-[13vw] sm:text-[9vw] lg:text-[6.4vw] tracking-tight">
          <div>
            <Word>{line1}</Word>
          </div>
          <div>
            <Word>{line2}</Word>
          </div>
          <div className="text-amber">
            <Word>{line3}</Word>
          </div>
        </h1>

        <p className="hero-fade mt-8 max-w-lg text-cream/70 text-lg leading-relaxed">
          No freezers, no shortcuts. Every burger, wrap and skewer is
          marinated overnight and charred to order on an open flame —
          straight from our stall to your hands.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <a href="#menu" className="btn btn-primary px-8 py-4">
            Order Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#story" className="btn btn-outline px-8 py-4">
            Our Story
          </a>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="parallax-float reveal-scale absolute right-6 bottom-10 lg:right-16 lg:bottom-16 hidden sm:flex items-center gap-4 rounded-2xl bg-offwhite/95 backdrop-blur px-5 py-4 card-shadow max-w-xs">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=60"
          alt="Smoke Stack Burger"
          width={56}
          height={56}
          className="w-14 h-14 rounded-xl object-cover shrink-0"
        />
        <div>
          <div className="flex items-center gap-1 text-amber text-sm">
            {"★★★★★"}
          </div>
          <p className="font-display font-bold text-pine-950 text-sm leading-snug">
            4.9 rating · 2,300+ orders
          </p>
          <p className="text-xs text-ink-2/60">this month alone</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-6 lg:left-10 hidden sm:flex flex-col items-center gap-3">
        <span className="text-cream/50 text-[11px] tracking-[0.3em] [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <span className="w-px h-10 bg-cream/20 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-2 bg-amber animate-scroll-dot" />
        </span>
      </div>
    </section>
  );
}
