"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  name: string;
  desc: string;
  detail: string;
  price: number;
  category: "Burgers" | "Wraps & Rolls" | "Sides" | "Drinks";
  img: string;
  tag?: "Spicy" | "Veg" | "Bestseller";
  rating: number;
  reviews: number;
  kcal: number;
  prep: string;
  spice: 0 | 1 | 2 | 3;
  ingredients: string[];
};

const ITEMS: Item[] = [
  {
    name: "Smoke Stack Burger",
    desc: "Double smashed patty, smoked cheddar, burnt-onion aioli",
    detail:
      "Two smashed patties seared hard on the plancha, layered with smoked cheddar, burnt-onion aioli and house pickles in a butter-toasted potato bun. Our #1 seller since day one.",
    price: 8.5,
    category: "Burgers",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=75",
    tag: "Bestseller",
    rating: 4.9,
    reviews: 812,
    kcal: 740,
    prep: "8 min",
    spice: 1,
    ingredients: ["Beef patty ×2", "Smoked cheddar", "Burnt-onion aioli", "House pickles", "Potato bun"],
  },
  {
    name: "Classic Zinger Burger",
    desc: "Crispy fried chicken, lettuce, house spicy mayo",
    detail:
      "A buttermilk-brined chicken thigh fried crackling-crisp, stacked with shredded lettuce and our secret spicy mayo. Loud crunch, louder flavor.",
    price: 7.2,
    category: "Burgers",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=75",
    tag: "Spicy",
    rating: 4.7,
    reviews: 534,
    kcal: 690,
    prep: "9 min",
    spice: 2,
    ingredients: ["Fried chicken thigh", "Iceberg lettuce", "Spicy mayo", "Brioche bun"],
  },
  {
    name: "Peri Peri Chicken Wrap",
    desc: "Flame-grilled chicken, peri sauce, crunchy slaw",
    detail:
      "Char-grilled chicken strips tossed in fiery peri peri, rolled with crunchy slaw and garlic yoghurt in a griddled tortilla. Heat you can taste, not just feel.",
    price: 6.9,
    category: "Wraps & Rolls",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=75",
    tag: "Spicy",
    rating: 4.8,
    reviews: 421,
    kcal: 560,
    prep: "7 min",
    spice: 3,
    ingredients: ["Grilled chicken", "Peri peri sauce", "Crunchy slaw", "Garlic yoghurt", "Tortilla"],
  },
  {
    name: "Paneer Tikka Roll",
    desc: "Charred cottage cheese, mint chutney, pickled onions",
    detail:
      "Cubes of paneer marinated in tikka spices, charred on skewers and wrapped in flaky paratha with mint chutney and pickled onions. The veg option that outsells half the meat.",
    price: 5.8,
    category: "Wraps & Rolls",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=75",
    tag: "Veg",
    rating: 4.8,
    reviews: 376,
    kcal: 480,
    prep: "7 min",
    spice: 2,
    ingredients: ["Paneer tikka", "Mint chutney", "Pickled onions", "Flaky paratha"],
  },
  {
    name: "Loaded Masala Fries",
    desc: "Spiced fries, cheese sauce, herbs, chilli flakes",
    detail:
      "Double-fried fries dusted in our masala mix, drowned in molten cheese sauce and finished with fresh herbs and chilli flakes. Bring friends or don't share — your call.",
    price: 4.5,
    category: "Sides",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=75",
    tag: "Bestseller",
    rating: 4.9,
    reviews: 645,
    kcal: 520,
    prep: "6 min",
    spice: 1,
    ingredients: ["Fries", "Masala dust", "Cheese sauce", "Fresh herbs", "Chilli flakes"],
  },
  {
    name: "Cheesy Corn Bites",
    desc: "Golden fried corn & cheese, tangy dip",
    detail:
      "Sweet corn and mozzarella folded into crisp golden bites, served with a tangy tomato-chilli dip. Dangerous between meals.",
    price: 3.9,
    category: "Sides",
    img: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=900&q=75",
    tag: "Veg",
    rating: 4.6,
    reviews: 288,
    kcal: 410,
    prep: "6 min",
    spice: 0,
    ingredients: ["Sweet corn", "Mozzarella", "Golden crumb", "Tomato-chilli dip"],
  },
  {
    name: "Ember Lemonade",
    desc: "Fresh mint, charred lemon, soda",
    detail:
      "Lemons charred on the grill for a smoky edge, muddled with mint and topped with soda over crushed ice. Our signature cooler.",
    price: 2.5,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=75",
    tag: "Veg",
    rating: 4.7,
    reviews: 312,
    kcal: 120,
    prep: "3 min",
    spice: 0,
    ingredients: ["Charred lemon", "Fresh mint", "Soda", "Crushed ice"],
  },
  {
    name: "Choco Thick Shake",
    desc: "Belgian chocolate, whipped cream, cocoa dust",
    detail:
      "Proper Belgian chocolate blended thick enough to fight the straw, crowned with whipped cream and cocoa dust.",
    price: 3.8,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=75",
    tag: "Veg",
    rating: 4.9,
    reviews: 498,
    kcal: 430,
    prep: "4 min",
    spice: 0,
    ingredients: ["Belgian chocolate", "Milk", "Whipped cream", "Cocoa dust"],
  },
];

const CATEGORIES = ["All", "Burgers", "Wraps & Rolls", "Sides", "Drinks"] as const;

const money = (n: number) => `$${n.toFixed(2)}`;

function TagBadge({ tag }: { tag: NonNullable<Item["tag"]> }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
        tag === "Spicy"
          ? "bg-red-600 text-white"
          : tag === "Veg"
          ? "bg-green-700 text-white"
          : "bg-amber text-pine-950"
      }`}
    >
      {tag}
    </span>
  );
}

/* --- Small icons for the modal meta row --- */
function IconClock() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function IconFlame() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
function IconChili({ filled }: { filled: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 4c0-1 .5-2 2-2 0 2 1 3 2 3M15 4c-4 0-9 3-11 9-1 3 1 6 4 6 5 0 10-6 10-11 0-2-2-3-3-3z" />
    </svg>
  );
}

function MetaChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-pine-950/[0.06] text-pine-950 px-3 py-1.5 text-xs font-semibold">
      <span className="text-amber-dark">{icon}</span>
      {children}
    </span>
  );
}

export default function MenuGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [toast, setToast] = useState<string | null>(null);
  const [selected, setSelected] = useState<Item | null>(null);
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);
  const toastTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);

  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)),
    [active]
  );

  function addToOrder(name: string, count = 1) {
    setToast(`${count}× ${name} added to your order ✓`);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2400);
  }

  function openItem(item: Item) {
    window.clearTimeout(closeTimer.current);
    setSelected(item);
    setQty(1);
  }

  function closeModal() {
    setShow(false);
    closeTimer.current = window.setTimeout(() => setSelected(null), 400);
  }

  // Modal: play enter transition, ESC to close, scroll lock
  useEffect(() => {
    if (!selected) return;
    const raf = requestAnimationFrame(() => setShow(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="menu" className="relative bg-pine-950 py-24 lg:py-32 overflow-hidden">
      <div
        className="blob w-[420px] h-[420px] top-0 right-0 bg-pine-700/40"
        style={{ animationDuration: "24s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-xl mb-12">
          <span className="eyebrow text-amber">The Menu</span>
          <h2 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-cream leading-tight">
            Hot off the grill
          </h2>
        </div>

        <div className="reveal flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-amber text-pine-950"
                  : "bg-cream/5 text-cream/70 border border-cream/15 hover:bg-cream/10 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Full-image cards */}
        <div key={active} className="menu-fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <article
              key={item.name}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => openItem(item)}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden card-shadow cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/95 via-pine-950/25 to-transparent" />

              {item.tag && (
                <div className="absolute top-4 left-4">
                  <TagBadge tag={item.tag} />
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display font-bold text-cream text-xl leading-snug">
                  {item.name}
                </h3>
                <p className="mt-1 text-cream/65 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-cream/15 backdrop-blur-sm text-cream font-bold px-3.5 py-1.5 text-sm">
                    {money(item.price)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToOrder(item.name);
                    }}
                    aria-label={`Add ${item.name} to order`}
                    className="w-10 h-10 rounded-full bg-amber text-pine-950 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <div
            className={`absolute inset-0 bg-pine-950/80 backdrop-blur-sm transition-opacity duration-400 ease-out ${
              show ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          />

          <div
            className={`relative w-full sm:max-w-5xl max-h-[94vh] sm:max-h-[90vh] overflow-y-auto bg-offwhite rounded-t-3xl sm:rounded-3xl card-shadow grid md:grid-cols-[1fr_1.1fr] transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              show
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 sm:translate-y-6 sm:scale-95"
            }`}
          >
            {/* Image side */}
            <div className="relative h-56 sm:h-80 md:h-auto md:min-h-[540px]">
              <img
                src={selected.img}
                alt={selected.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-pine-950/50 via-transparent to-transparent" />
              {selected.tag && (
                <div className="absolute top-4 left-4">
                  <TagBadge tag={selected.tag} />
                </div>
              )}
              {/* Rating pill on image */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-offwhite/95 backdrop-blur px-3 py-1.5 text-pine-950 text-sm font-bold">
                <span className="text-amber">★</span>
                {selected.rating.toFixed(1)}
                <span className="text-ink-2/50 font-medium">({selected.reviews})</span>
              </div>
            </div>

            {/* Content side */}
            <div className="relative p-6 sm:p-8 flex flex-col">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-pine-950/[0.06] text-pine-950 flex items-center justify-center hover:bg-pine-950 hover:text-cream transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              <p className="eyebrow text-amber-dark pr-10">{selected.category}</p>
              <h3 className="mt-2 font-display font-extrabold text-2xl sm:text-[1.75rem] text-pine-950 leading-tight pr-10">
                {selected.name}
              </h3>

              {/* Meta chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                <MetaChip icon={<IconClock />}>{selected.prep}</MetaChip>
                <MetaChip icon={<IconFlame />}>{selected.kcal} kcal</MetaChip>
                <span className="inline-flex items-center gap-1 rounded-full bg-pine-950/[0.06] px-3 py-1.5 text-xs font-semibold text-pine-950">
                  {selected.spice === 0 ? (
                    <span className="text-ink-2/50">Mild</span>
                  ) : (
                    <span className="flex items-center gap-0.5 text-red-600">
                      {[0, 1, 2].map((n) => (
                        <IconChili key={n} filled={n < selected.spice} />
                      ))}
                    </span>
                  )}
                </span>
              </div>

              <p className="mt-5 text-ink-2/70 leading-relaxed text-[15px]">
                {selected.detail}
              </p>

              {/* Ingredients */}
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-pine-950/50">
                What&apos;s in it
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selected.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-pine-950/8 px-3 py-1.5 text-sm text-ink-2/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    {ing}
                  </span>
                ))}
              </div>

              {/* Footer: stepper + add */}
              <div className="mt-auto pt-7">
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-pine-950/15 p-1">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-pine-950 hover:bg-pine-950/5 transition-colors disabled:opacity-30"
                      disabled={qty <= 1}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="w-9 text-center font-display font-bold text-pine-950 tabular-nums">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty((q) => Math.min(20, q + 1))}
                      aria-label="Increase quantity"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-pine-950 hover:bg-pine-950/5 transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      addToOrder(selected.name, qty);
                      closeModal();
                    }}
                    className="btn btn-primary flex-1 py-3.5 text-sm"
                  >
                    Add to order
                    <span className="opacity-60">·</span>
                    <span className="tabular-nums">{money(selected.price * qty)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast — above the modal */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] transition-all duration-400 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-full bg-cream text-pine-950 font-medium text-sm px-6 py-3 card-shadow">
          {toast}
        </div>
      </div>
    </section>
  );
}
