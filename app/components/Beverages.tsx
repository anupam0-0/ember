"use client";

import { useRef, useState } from "react";

const DRINKS = [
  {
    name: "Charred Lemonade",
    tag: "Fresh · Zesty",
    desc: "Flame-charred lemons, mint, a splash of soda.",
    img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=75",
  },
  {
    name: "Belgian Choco Shake",
    tag: "Rich · Creamy",
    desc: "Real Belgian chocolate, whipped cream, cocoa dust.",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=75",
  },
  {
    name: "Masala Iced Tea",
    tag: "Spiced · Cooling",
    desc: "Black tea, warm spices, poured over crushed ice.",
    img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=75",
  },
  {
    name: "Mango Lassi",
    tag: "Sweet · Thick",
    desc: "Alphonso mango whipped into cool, creamy yoghurt.",
    img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=900&q=75",
  },
  {
    name: "Cold Brew Coffee",
    tag: "Bold · Smooth",
    desc: "Slow-steeped 18 hours, served black over ice.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=75",
  },
  {
    name: "Berry Cooler",
    tag: "Tart · Refreshing",
    desc: "Mixed berries, lime and sparkling water.",
    img: "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&w=900&q=75",
  },
];

export default function Beverages() {
  const scroller = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, scrollLeft: 0, moved: false });

  function scrollByCard(dir: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".snap-card");
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
      id="beverages"
      className="relative py-24 lg:py-32 overflow-hidden bg-pine-950"
    >
      {/* Blurred tropical background */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=70"
          alt=""
          className="w-full h-full object-cover scale-110 blur-[7px]"
        />
        {/* Pine wash — opaque at the seams, sheer in the middle so the beach shows */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #012b26 0%, rgba(1,43,38,0.72) 16%, rgba(1,43,38,0.32) 45%, rgba(1,43,38,0.45) 70%, rgba(1,43,38,0.9) 90%, #012b26 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-end justify-between gap-6 mb-12">
        <div className="reveal max-w-xl">
          <span className="eyebrow text-amber-light">Wash It Down</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-cream leading-tight">
            Something cold on the side
          </h2>
        </div>
        <div className="reveal flex items-center gap-3">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCard(-1)}
            className="w-12 h-12 rounded-full border border-cream/20 text-cream flex items-center justify-center hover:bg-amber hover:border-amber hover:text-pine-950 transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByCard(1)}
            className="w-12 h-12 rounded-full border border-cream/20 text-cream flex items-center justify-center hover:bg-amber hover:border-amber hover:text-pine-950 transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
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
        className={`snap-carousel drag-scroll flex gap-6 overflow-x-auto pr-6 lg:pr-10 pb-6 ${
          dragging ? "dragging" : ""
        }`}
        style={{
          // Align first card with the section heading (max-w-7xl container edge)
          paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2.5rem))",
          scrollPaddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2.5rem))",
        }}
      >
        {DRINKS.map((d) => (
          <article
            key={d.name}
            onClickCapture={(e) => {
              if (drag.current.moved) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            className="snap-card group relative shrink-0 w-[80vw] sm:w-[360px] lg:w-[400px] aspect-[3/4] rounded-[28px] overflow-hidden card-shadow select-none"
          >
            <img
              src={d.img}
              alt={d.name}
              draggable={false}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08]"
            />
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent" />
            {/* Hover accent wash */}
            <div className="absolute inset-0 bg-amber/0 group-hover:bg-amber/10 transition-colors duration-500" />

            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className="inline-block rounded-full bg-cream/15 backdrop-blur-sm text-cream text-[11px] font-semibold tracking-wide px-3 py-1 mb-3">
                {d.tag}
              </span>
              <h3 className="font-display font-bold text-2xl text-cream">{d.name}</h3>
              <p className="mt-1 text-cream/70 text-sm max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden">
                {d.desc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-amber-light font-semibold text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                Add to order
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </article>
        ))}
        {/* trailing spacer so last card can center */}
        <div className="shrink-0 w-6 lg:w-10" aria-hidden />
      </div>

      <p className="relative mx-auto max-w-7xl px-6 lg:px-10 mt-4 text-cream/35 text-xs">
        Drag, swipe or use the arrows →
      </p>
    </section>
  );
}
