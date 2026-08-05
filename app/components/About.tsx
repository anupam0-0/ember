const PANELS = [
  {
    eyebrow: "How it started",
    title: "From a two-wheel cart to a cult favorite",
    text: "Ember started in 2018 as a single charcoal grill parked outside a college gate. One burger recipe, one loyal crowd — and word spread block by block until the cart became the stall you know today.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70",
    alt: "Chef grilling street food over open flame",
  },
  {
    eyebrow: "What we believe",
    title: "Real fire. Real ingredients. No shortcuts.",
    text: "Everything is sourced from the same local vendors we've trusted for years, marinated for 24 hours, and cooked over actual charcoal — never a microwave, never a freezer aisle in sight.",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=70",
    alt: "Fresh ingredients prepped on a wooden board",
  },
];

export default function About() {
  return (
    <section id="story" className="relative bg-offwhite py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-xl mb-16">
          <span className="eyebrow text-amber-dark">Our Story</span>
          <h2 className="mt-4 font-serif italic text-4xl sm:text-5xl text-pine-950 leading-tight">
            Cooked over fire, served with heart.
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {PANELS.map((panel, i) => (
            <div
              key={panel.title}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="reveal-scale relative rounded-3xl overflow-hidden aspect-[4/3] card-shadow">
                <img
                  src={panel.img}
                  alt={panel.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/40 via-transparent to-transparent" />
              </div>
              <div className="reveal">
                <span className="eyebrow text-amber-dark">{panel.eyebrow}</span>
                <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-pine-950 leading-snug">
                  {panel.title}
                </h3>
                <p className="mt-4 text-ink-2/70 leading-relaxed">{panel.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
