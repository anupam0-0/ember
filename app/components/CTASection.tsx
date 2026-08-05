"use client";

import { useState } from "react";
import { Sparkle, DottedRing, Burst, Squiggle } from "./Doodles";

const CODE = "EMBER10";

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  function copyCode() {
    navigator.clipboard?.writeText(CODE).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => {},
    );
  }

  return (
    <section
      id="find-us"
      className="relative bg-pine-950 py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="blob w-[500px] h-[500px] -bottom-40 -right-40 bg-amber/20"
        style={{ animationDuration: "26s" }}
      />
      {/* Playful scattered doodles */}
      <Sparkle className="absolute top-16 left-[46%] w-7 h-7 text-amber animate-bob" />
      <Sparkle className="absolute bottom-20 left-[8vw] w-5 h-5 text-cream/25 animate-bob-delay" />
      <DottedRing className="absolute top-10 -right-10 w-44 h-44 text-cream/10 animate-spin-slow" />
      <Burst className="absolute bottom-24 right-[42%] w-8 h-8 text-amber/50 animate-spin-slow" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left copy */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-2 mb-6">
            <span className="text-base">🎉</span>
            <span className="eyebrow text-amber">First-Timer Treat</span>
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Your first bite is
            <br />
            <span className="relative inline-block">on the house</span>
            <span className="text-amber">.</span>
          </h2>
          <p className="mt-8 text-cream/65 max-w-md leading-relaxed">
            New to the stall? Grab{" "}
            <span className="text-cream font-semibold">10% off</span> your very
            first order — just flash the code below at the counter or drop it in
            the app.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#menu" className="btn btn-primary px-8 py-4">
              Claim 10% Off
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="tel:+1234567890" className="btn btn-outline px-8 py-4">
              Call to Order
            </a>
          </div>
        </div>

        {/* Coupon card */}
        <div className="reveal-scale relative">
          {/* Floating percent badge */}
          <div className="absolute -top-6 -right-4 sm:-right-6 z-20 rotate-12">
            <div className="relative w-24 h-24 rounded-full bg-amber text-pine-950 flex flex-col items-center justify-center shadow-[0_12px_30px_-8px_rgba(217,119,6,0.7)] animate-bob">
              <span className="font-display font-extrabold text-3xl leading-none">
                10%
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em]">
                OFF
              </span>
            </div>
          </div>

          <div className="relative rounded-3xl bg-cream overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            {/* subtle radial doodle */}
            <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-amber/10" />

            {/* Offer body */}
            <div className="relative p-8 sm:p-10">
              <p className="eyebrow text-amber-dark">Welcome Voucher</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display font-extrabold text-7xl sm:text-8xl text-pine-950 leading-none">
                  10<span className="text-amber">%</span>
                </span>
                <span className="mb-2 font-display font-bold text-2xl text-pine-950/70 uppercase">
                  Off
                </span>
              </div>
              <p className="mt-4 text-pine-950/70 leading-relaxed max-w-xs">
                On your first order at Ember Street Kitchen. Dine-in, pickup or
                delivery — your call.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-pine-950/55">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  New customers
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  No minimum spend
                </span>
              </div>
            </div>

            {/* Perforated tear line + code stub */}
            <div className="relative border-t-2 border-dashed border-pine-950/20">
              {/* notch cutouts (match section bg) */}
              <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-pine-950" />
              <span className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-pine-950" />

              <div className="flex items-center justify-between gap-4 p-6 sm:px-10">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-pine-950/45">
                    Use code
                  </p>
                  <p className="mt-1 font-display font-extrabold text-2xl tracking-[0.15em] text-pine-950">
                    {CODE}
                  </p>
                </div>
                <button
                  onClick={copyCode}
                  className={`btn ${copied ? "btn-dark" : "btn-primary"} px-5 py-3 text-sm shrink-0`}
                >
                  {copied ? (
                    <>
                      Copied
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Copy
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="9" y="9" width="11" height="11" rx="2" />
                        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Fine print + location line */}
          <p className="mt-5 text-center text-cream/40 text-xs">
            Sector 12 Market, Stall #14 · Open 4 PM – 1 AM daily · +1 (234)
            567-890
          </p>
        </div>
      </div>
    </section>
  );
}
