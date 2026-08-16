"use client";

import { useRef } from "react";
import Image from "next/image";
import { schools } from "@/data/schools";

const ACCENT_TEXT: Record<string, string> = {
  tertiary: "text-tertiary",
  secondary: "text-secondary",
  primary: "text-primary",
};

const ACCENT_BAR: Record<string, string> = {
  tertiary: "bg-tertiary",
  secondary: "bg-secondary",
  primary: "bg-primary",
};

const ACCENT_SHADOW: Record<string, string> = {
  tertiary: "hover:shadow-[0_0_40px_theme(colors.tertiary/15)]",
  secondary: "hover:shadow-[0_0_40px_theme(colors.secondary/15)]",
  primary: "hover:shadow-[0_0_40px_theme(colors.primary/15)]",
};

export default function SchoolsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.children[0] as HTMLElement | undefined;
    const gap = 24; // spacing.lg
    const cardWidth = (firstCard?.offsetWidth ?? 400) + gap;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="w-full py-xxl bg-surface-container-lowest relative z-20">
      <div className="max-w-frame mx-auto px-margin flex flex-col gap-xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-lg">
          <div className="space-y-sm">
            <h2 className="font-section-heading text-section-heading text-on-surface flex items-center gap-md">
              Schools of Study
              <span className="h-[2px] w-16 bg-gradient-to-r from-tertiary to-transparent rounded-full hidden md:block" />
            </h2>
            <p className="font-body text-body text-on-surface-variant max-w-xl">
              Immersive, industry-aligned programs designed to launch careers
              in the creative economy.
            </p>
          </div>
          <div className="flex gap-md">
            <button
              type="button"
              aria-label="Previous school"
              onClick={() => scrollByCard(-1)}
              className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center hover:bg-surface hover:text-primary hover:shadow-[0_0_20px_theme(colors.primary/20)] transition-all group"
            >
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
            </button>
            <button
              type="button"
              aria-label="Next school"
              onClick={() => scrollByCard(1)}
              className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center hover:bg-surface hover:text-primary hover:shadow-[0_0_20px_theme(colors.primary/20)] transition-all group"
            >
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-lg overflow-x-auto scroll-smooth snap-x snap-mandatory pb-sm"
          >
            {schools.map((school) => (
              <div
                key={school.id}
                className={`min-w-[85vw] sm:min-w-[400px] snap-start flex-shrink-0 group cursor-pointer relative overflow-hidden rounded-[12px] bg-surface shadow-lg transition-shadow duration-500 ${ACCENT_SHADOW[school.accent]}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface z-10" />
                <div className="relative w-full h-[450px] overflow-hidden">
                  <Image
                    src={school.imageUrl}
                    alt={school.name}
                    fill
                    sizes="(min-width: 640px) 400px, 85vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-lg z-20 flex flex-col gap-md">
                  <div className="flex items-center gap-sm">
                    <span
                      className={`px-sm py-xs rounded-[4px] bg-surface-container-highest font-meta text-meta ${ACCENT_TEXT[school.accent]}`}
                    >
                      {school.tag}
                    </span>
                  </div>
                  <h3 className="font-sub-heading text-sub-heading text-on-surface">
                    {school.name}
                  </h3>
                  <p className="font-body text-body text-on-surface-variant line-clamp-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {school.description}
                  </p>
                  <div
                    className={`h-[2px] w-0 group-hover:w-full transition-all duration-500 mt-sm ${ACCENT_BAR[school.accent]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}