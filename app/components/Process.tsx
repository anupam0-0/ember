import { Sparkle, DottedRing, Burst, Squiggle } from "./Doodles";

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function FlameIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
function PackageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </svg>
  );
}

const STEPS = [
  {
    num: "01",
    icon: <LeafIcon />,
    title: "Fresh Sourcing",
    text: "Local veggies, meats and spices picked up fresh from the market every single morning.",
    chip: "5 AM, every day",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=75",
  },
  {
    num: "02",
    icon: <ClockIcon />,
    title: "Marinate & Prep",
    text: "A 24-hour spice rub, hand-mixed sauces and skewers threaded to order. Nothing pre-made.",
    chip: "24-hour marinade",
    img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=75",
  },
  {
    num: "03",
    icon: <FlameIcon />,
    title: "Flame Grilled",
    text: "Charcoal-fired to order — real smoke, real char, blistered edges, zero shortcuts.",
    chip: "480°C charcoal",
    img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=75",
  },
  {
    num: "04",
    icon: <PackageIcon />,
    title: "Wrapped & Served",
    text: "Foil-wrapped piping hot and handed straight across the counter to you, street-style.",
    chip: "Served in 90s",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=75",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="timeline-section relative bg-offwhite min-h-svh flex items-center overflow-hidden py-24"
    >
      {/* Decorators (unchanged) */}
      <DottedRing className="absolute -top-24 -right-24 w-72 h-72 text-pine-900/10 animate-spin-slow" />
      <DottedRing className="absolute -bottom-20 -left-20 w-52 h-52 text-amber/20 animate-spin-slow" />
      <Sparkle className="absolute top-[18%] right-[16vw] w-7 h-7 text-amber animate-bob" />
      <Sparkle className="absolute bottom-[16%] right-[38vw] w-4 h-4 text-pine-900/25 animate-bob-delay" />
      <Burst className="absolute top-[30%] left-[6vw] w-8 h-8 text-amber/50 animate-spin-slow" />
      <Squiggle className="absolute bottom-[10%] right-[8vw] w-28 text-amber/60" />

      <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-xl mb-16">
          <span className="eyebrow text-amber-dark">How We Stall</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-pine-950 leading-tight">
            From fire to foil in four steps
          </h2>
          <Squiggle className="mt-6 w-28 text-amber" />
        </div>

        {/* Image cards */}
        <div className="reveal-group grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {STEPS.map((step) => (
            <article key={step.num} className="reveal-item group">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] card-shadow">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/45 via-transparent to-transparent" />
                {/* Step number badge */}
                <span className="absolute top-4 left-4 w-11 h-11 rounded-full bg-pine-950 text-cream flex items-center justify-center font-display font-bold text-sm shadow-lg">
                  {step.num}
                </span>
                {/* Icon chip */}
                <span className="absolute bottom-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cream/90 backdrop-blur text-amber-dark transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110">
                  {step.icon}
                </span>
              </div>

              <h3 className="mt-5 font-display font-bold text-xl text-pine-950">
                {step.title}
              </h3>
              <p className="mt-2 text-ink-2/65 leading-relaxed text-[15px]">
                {step.text}
              </p>

              {/* Keyword pill (echoes the reference's button placement) */}
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber/12 text-amber-dark px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors duration-300 group-hover:bg-amber group-hover:text-pine-950">
                {step.chip}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
