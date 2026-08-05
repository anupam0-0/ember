"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#beverages", label: "Drinks" },
  { href: "#story", label: "Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#find-us", label: "Find Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // Hide when scrolling down past the hero fold, reveal on any scroll up
      if (y > lastY.current + 8 && y > 160) setHidden(true);
      else if (y < lastY.current - 8) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-offwhite/90 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(1,43,38,0.3)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a
          href="#top"
          className={`font-wordmark text-2xl tracking-wide transition-colors duration-500 ${
            scrolled ? "text-pine-900" : "text-cream"
          }`}
        >
          Ember<span className="text-amber">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-500 hover:text-amber ${
                  scrolled ? "text-ink-2" : "text-cream/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#menu" className="btn btn-primary px-6 py-3 text-sm">
            Order Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden relative w-9 h-9 flex items-center justify-center transition-colors ${
            scrolled ? "text-pine-900" : "text-cream"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl bg-offwhite/95 backdrop-blur-md p-4 card-shadow">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-ink-2 font-medium rounded-xl hover:bg-pine-900/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#menu" onClick={() => setOpen(false)} className="btn btn-primary w-full py-3 text-sm">
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
