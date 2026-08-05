"use client";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Drinks", href: "#beverages" },
      { label: "Story", href: "#story" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Sector 12 Market, Stall #14", href: "#find-us" },
      { label: "4 PM – 1 AM Daily", href: "#find-us" },
      { label: "+1 (234) 567-890", href: "tel:+1234567890" },
    ],
  },
];

const WORDMARK = "Ember.";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream flex flex-col min-h-[100svh] overflow-hidden">
      {/* Top: links + newsletter */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-24 lg:pt-32">
        <div className="reveal grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] pb-16 border-b border-cream/10">
          <div>
            <a href="#top" className="font-wordmark text-4xl text-cream">
              Ember<span className="text-amber">.</span>
            </a>
            <p className="mt-4 text-cream/50 max-w-xs leading-relaxed text-sm">
              Flame-grilled street food, made fresh at the stall — every
              order, every time.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-cream/40 mb-5">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-cream/70 hover:text-amber transition-colors text-sm">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow text-cream/40 mb-5">Stay In The Loop</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-full bg-cream/5 border border-cream/15 p-1.5 pl-4"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="bg-transparent outline-none text-sm text-cream placeholder:text-cream/40 flex-1 min-w-0"
              />
              <button
                type="submit"
                className="shrink-0 w-9 h-9 rounded-full bg-amber text-pine-950 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Subscribe"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
            <div className="flex items-center gap-3 mt-6">
              {["Instagram", "Facebook", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/60 hover:text-amber hover:border-amber/50 transition-colors"
                >
                  <span className="text-xs font-semibold">{s.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Ember Street Kitchen. All rights reserved.</p>
          <a href="#top" className="hover:text-amber transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Bottom: giant wordmark, clipped at the page edge */}
      <div className="reveal mt-auto pt-16 select-none" aria-hidden>
        <h2 className="flex justify-center font-wordmark leading-[0.72] tracking-tight text-[27vw] translate-y-[16%] whitespace-nowrap">
          {WORDMARK.split("").map((ch, i) => (
            <span
              key={i}
              className={`transition-colors duration-500 hover:text-amber ${
                ch === "." ? "text-amber/60" : "text-cream/10"
              }`}
            >
              {ch}
            </span>
          ))}
        </h2>
      </div>
    </footer>
  );
}
