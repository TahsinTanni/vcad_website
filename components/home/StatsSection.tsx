"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/schools";

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.ceil(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatCard({ stat, active }: { stat: (typeof stats)[number]; active: boolean }) {
  const value = useCountUp(stat.target, active);

  return (
    <div
      className={`p-lg rounded-[12px] bg-surface-container hover:bg-surface-container-high transition-colors group ${
        stat.showBar ? "sm:col-span-2" : ""
      }`}
    >
      <div className="font-hero-display text-hero-display text-on-surface flex items-baseline gap-xs">
        <span>{value.toLocaleString()}</span>
        <span className="text-tertiary text-sub-heading">{stat.suffix}</span>
      </div>
      <p className="font-card-title text-card-title text-on-surface mt-sm group-hover:text-tertiary transition-colors">
        {stat.label}
      </p>
      {stat.helper && (
        <p className="font-body text-body text-on-surface-variant mt-xs">
          {stat.helper}
        </p>
      )}
      {stat.showBar && (
        <div className="w-full h-2 bg-surface-variant rounded-full mt-md overflow-hidden">
          <div className="h-full bg-gradient-to-r from-tertiary to-secondary w-0 group-hover:w-full transition-all duration-1000 ease-out" />
        </div>
      )}
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-xxl bg-surface relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-tertiary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-frame mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-lg">
            <h2 className="font-section-heading text-section-heading text-on-surface">
              By the <span className="text-tertiary">Numbers</span>
            </h2>
            <p className="font-lead text-lead text-on-surface-variant">
              Our track record speaks for itself. VCAD graduates are heavily
              recruited by leading creative agencies, tech firms, and design
              studios globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg mt-xl">
              {stats.map((stat) => (
                <StatCard key={stat.id} stat={stat} active={active} />
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-square max-w-[500px] mx-auto hidden lg:block">
            <svg
              className="w-full h-full text-surface-variant animate-spin-slow"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.5" />
              <circle cx="50" cy="50" fill="none" r="35" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" fill="none" r="25" stroke="currentColor" strokeDasharray="1 6" strokeWidth="0.5" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center relative shadow-[0_0_60px_theme(colors.tertiary/20)]">
                <span className="material-symbols-outlined text-[60px] text-tertiary">
                  all_inclusive
                </span>
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: "15s" }}>
                  <div className="absolute -top-3 left-1/2 w-6 h-6 bg-secondary rounded-full shadow-[0_0_15px_theme(colors.secondary)] -translate-x-1/2" />
                </div>
                <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
                  <div className="absolute top-1/2 -right-3 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_theme(colors.primary)] -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}