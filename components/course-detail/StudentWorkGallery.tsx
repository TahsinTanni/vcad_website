"use client";

import Image from "next/image";
import { useState } from "react";
import type { StudentWorkItem } from "@/data/courses";

const BENTO_SPANS = [
  "md:col-span-2 aspect-video",
  "aspect-square md:aspect-auto",
  "aspect-square md:aspect-auto",
  "md:col-span-2 aspect-video md:aspect-auto",
];

export default function StudentWorkGallery({
  items,
}: {
  items: StudentWorkItem[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <div className="space-y-lg">
      <h3 className="font-sub-heading text-card-title md:text-sub-heading text-on-surface flex items-center gap-md">
        <span className="w-8 h-[2px] bg-primary block" /> Student Work
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
        {items.map((item, index) => (
          <button
            key={item.imageUrl}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-xl overflow-hidden relative group border border-outline-variant/10 ${BENTO_SPANS[index % BENTO_SPANS.length]}`}
          >
            <Image
              src={item.imageUrl}
              alt={item.caption}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                zoom_in
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-lg"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-lg right-lg w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-lg top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[activeIndex].imageUrl}
              alt={items[activeIndex].caption}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute -bottom-10 left-0 right-0 text-center font-body text-body text-on-surface-variant">
              {items[activeIndex].caption}
            </p>
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-lg top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}