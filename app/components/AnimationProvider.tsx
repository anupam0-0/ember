"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero word-by-word reveal
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .to(".hero-word", {
          y: "0%",
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.06,
        })
        .to(
          ".hero-fade",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.6"
        );

      // Generic reveal-on-scroll
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Staggered groups
      gsap.utils.toArray<HTMLElement>(".reveal-group").forEach((group) => {
        const items = group.querySelectorAll(".reveal-item");
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Counters
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = parseFloat(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const proxy = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(proxy, {
              val: target,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = proxy.val.toFixed(decimals) + suffix;
              },
            });
          },
        });
      });

      // Timeline progress fill (horizontal, desktop)
      const timelineSection = document.querySelector(".timeline-section");
      const timelineFill = document.querySelector(".timeline-fill");
      if (timelineSection && timelineFill) {
        gsap.to(timelineFill, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineSection,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        });
      }

      // Timeline progress fill (vertical, mobile)
      const timelineFillV = document.querySelector(".timeline-fill-v");
      if (timelineSection && timelineFillV) {
        gsap.to(timelineFillV, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineSection,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        });
      }

      // Floating hero card parallax
      gsap.utils.toArray<HTMLElement>(".parallax-float").forEach((el) => {
        gsap.to(el, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
