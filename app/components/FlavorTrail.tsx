"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkle, Squiggle, DottedRing, Burst } from "./Doodles";

const STOPS = [
  {
    step: "01",
    kicker: "Sourcing",
    title: "The Spice Run",
    text: "Every dawn starts at the wholesale market — chillies, coriander and cumin picked by hand before the city wakes up.",
    stat: "5 AM, Every Day",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=75",
  },
  {
    step: "02",
    kicker: "Prep",
    title: "The Overnight Soak",
    text: "Meats and paneer bathe in yoghurt, garlic and smoked paprika for a full day. Flavor you can't fake, only wait for.",
    stat: "24-Hour Marinade",
    img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=75",
  },
  {
    step: "03",
    kicker: "Fire",
    title: "The Char",
    text: "Onto glowing charcoal they go — flipped, basted and kissed by real open flame until the edges blister.",
    stat: "480°C Charcoal",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=75",
  },
  {
    step: "04",
    kicker: "Build",
    title: "The Assembly",
    text: "Toasted buns, house sauces, crunch and heat — stacked fast while everything is still smoking hot.",
    stat: "Stacked in 90 Seconds",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=75",
  },
  {
    step: "05",
    kicker: "Serve",
    title: "The Handover",
    text: "Foil-wrapped, bagged and passed across the counter to the next hungry regular in line.",
    stat: "2,300+ Orders / Month",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=75",
  },
];

export default function FlavorTrail() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: tween,
      });

      gsap.utils.toArray<HTMLElement>(".trail-panel-inner").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            containerAnimation: tween,
            start: "left 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-pine-950 overflow-hidden">
      <div className="relative h-[100svh]">
        {/* Fixed decorators — stay put while panels slide past */}
        <Sparkle className="absolute top-16 right-[8vw] w-8 h-8 text-amber animate-bob z-20" />
        <Sparkle className="absolute bottom-24 right-[26vw] w-5 h-5 text-cream/25 animate-bob-delay z-20" />
        <DottedRing className="absolute -bottom-16 -left-16 w-56 h-56 text-cream/10 animate-spin-slow z-0" />
        <Burst className="absolute top-[18%] left-[46vw] w-9 h-9 text-amber/50 animate-spin-slow z-0" />
        <Squiggle className="absolute bottom-14 left-[10vw] w-28 text-amber/60 z-20" />

        {/* Horizontal track — left edge aligned with the max-w-7xl container */}
        <div
          ref={trackRef}
          className="relative z-10 flex h-full items-stretch gap-[6vw] pr-[12vw] w-max"
          style={{ paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 2.5rem))" }}
        >
          {/* Intro block — fills the left rail before the panels begin */}
          <div className="shrink-0 w-[80vw] sm:w-[34vw] h-full flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span className="eyebrow text-amber">The Flavor Trail</span>
            </div>
            <h2 className="mt-5 font-wordmark text-4xl sm:text-5xl lg:text-6xl text-cream leading-[1.08]">
              Follow an order, gate to grill
            </h2>
            <p className="mt-5 text-cream/55 max-w-xs">
              Five stops between the morning market and your hands.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-cream/50 text-sm font-medium">
              Keep scrolling — the trail moves sideways
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </p>
          </div>

          {/* Full-section panels */}
          {STOPS.map((stop) => (
            <article
              key={stop.step}
              className="trail-panel relative shrink-0 w-[88vw] lg:w-[78vw] h-full flex items-center py-16"
            >
              {/* Ghost step number */}
              <span
                aria-hidden
                className="absolute -bottom-[6vh] -left-[1vw] font-wordmark text-[38vh] lg:text-[52vh] leading-none text-cream/[0.05] select-none pointer-events-none"
              >
                {stop.step}
              </span>

              <div className="trail-panel-inner relative w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="max-md:order-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    <span className="eyebrow text-cream/60">
                      Step {stop.step} — {stop.kicker}
                    </span>
                  </div>
                  <h3 className="mt-4 lg:mt-6 font-wordmark uppercase text-3xl sm:text-5xl lg:text-6xl text-cream leading-[1.05]">
                    {stop.title}
                  </h3>
                  <Squiggle className="mt-5 w-24 text-amber" />
                  <p className="mt-5 text-cream/65 leading-relaxed max-w-md max-md:text-sm">
                    {stop.text}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream/10 border border-cream/15 px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-cream">
                    {stop.stat}
                  </span>
                </div>

                {/* Framed image card, like the reference */}
                <div className="group max-md:order-1 rounded-[2rem] bg-white/[0.07] border border-cream/10 p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                  <div className="rounded-[1.5rem] overflow-hidden aspect-[16/10] md:aspect-[4/3]">
                    <img
                      src={stop.img}
                      alt={stop.title}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
