"use client";

import { useRef, useState } from "react";

type Review = {
  title: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

const REVIEWS: Review[] = [
  {
    title: "Ruined every other burger",
    quote:
      "The Smoke Stack Burger completely changed my mind about street food. You can actually taste the char — smooth, smoky and nothing like fast food.",
    name: "Priya Nair",
    role: "Regular, 3× a week",
    rating: 5,
  },
  {
    title: "Couldn't walk past the smoke",
    quote:
      "I caught the smell from across the street and had to stop. Finished the Peri Peri Wrap before I'd even paid. Came straight back the next day.",
    name: "Arjun Mehta",
    role: "First-timer",
    rating: 5,
  },
  {
    title: "Our Friday ritual",
    quote:
      "The whole team orders from Ember every Friday. Always hot, always consistent — and the Masala Fries alone are worth the walk across the road.",
    name: "Sana Khan",
    role: "Office lunch crew",
    rating: 5,
  },
  {
    title: "Consistent every single time",
    quote:
      "Rare to find a stall this reliable. It tastes exactly as good as my first visit, every time. That's much harder to pull off than people think.",
    name: "Rohit Verma",
    role: "Food blogger",
    rating: 5,
  },
  {
    title: "My after-shift go-to",
    quote:
      "Open till 1 AM and still grilling everything fresh to order. It's become the place I stop at after every late shift, no exceptions.",
    name: "Meera Iyer",
    role: "Late-night regular",
    rating: 5,
  },
  {
    title: "Dangerously addictive",
    quote:
      "Cheap, huge portions, and that peri peri sauce is a problem in the best way. My wallet wishes the stall was a little further from home.",
    name: "Dev Patel",
    role: "College student",
    rating: 4,
  },
  {
    title: "Best veg option, period",
    quote:
      "The Paneer Tikka Roll is the best veg thing I've had from any street stall. Charred, spiced and wrapped fresh — I don't even miss the meat.",
    name: "Aisha Rahman",
    role: "Weekend visitor",
    rating: 5,
  },
  {
    title: "The only stall I order from",
    quote:
      "I deliver for a dozen kitchens around here — Ember is the one I actually buy from myself. That should tell you everything.",
    name: "Karan Singh",
    role: "Delivery rider",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div
      className="flex items-center gap-1 text-lg"
      aria-label={`${n} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-amber" : "text-pine-950/15"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, scrollLeft: 0, moved: false });

  function scrollByCard(dir: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".review-card");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  function onPointerDown(e: React.PointerEvent) {
    const el = scroller.current;
    if (!el) return;
    setDragging(true);
    drag.current = {
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    const el = scroller.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.scrollLeft - dx;
  }
  function onPointerUp(e: React.PointerEvent) {
    setDragging(false);
    scroller.current?.releasePointerCapture(e.pointerId);
  }

  return (
    <section
      id="reviews"
      className="relative bg-offwhite py-12 lg:py-16 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center mb-12">
        <span className="eyebrow text-amber-dark reveal">Reviews</span>
        <h2 className="reveal mt-4 font-display font-extrabold uppercase text-4xl sm:text-6xl text-pine-950 leading-[0.95]">
          Don&apos;t take our
          <br />
          word for it
        </h2>

        <div className="reveal mt-10 flex items-center justify-center gap-3">
          <button
            aria-label="Previous review"
            onClick={() => scrollByCard(-1)}
            className="w-12 h-12 rounded-full border border-pine-950/20 text-pine-950 flex items-center justify-center hover:bg-pine-950 hover:text-cream transition-colors duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            aria-label="Next review"
            onClick={() => scrollByCard(1)}
            className="w-12 h-12 rounded-full border border-pine-950/20 text-pine-950 flex items-center justify-center hover:bg-pine-950 hover:text-cream transition-colors duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className={`reveal snap-carousel drag-scroll flex items-stretch gap-6 overflow-x-auto pr-6 lg:pr-10 pb-4 ${
          dragging ? "dragging" : ""
        }`}
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 50rem) / 2 + 2.5rem))",
          scrollPaddingLeft: "max(1.5rem, calc((100vw - 100rem) / 2 + 2.5rem))",
        }}
      >
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="review-card snap-card group shrink-0 w-[85vw] sm:w-[400px] flex flex-col rounded-3xl border border-pine-950/15 bg-white/40 p-8 select-none transition-all duration-400 hover:border-amber hover:bg-white "
          >
            <Stars n={r.rating} />
            <h3 className="mt-5 font-serif text-2xl text-pine-950 leading-snug">
              {r.title}
            </h3>
            <p className="mt-4 text-ink-2/70 leading-relaxed">{r.quote}</p>

            <div className="mt-auto pt-6">
              <div className="border-t border-pine-950/10 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber/15 text-amber-dark flex items-center justify-center font-display font-bold shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-pine-950 leading-tight">
                    {r.name}
                  </p>
                  <p className="text-ink-2/50 text-sm">{r.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
        <div className="shrink-0 w-6 lg:w-10" aria-hidden />
      </div>
    </section>
  );
}
