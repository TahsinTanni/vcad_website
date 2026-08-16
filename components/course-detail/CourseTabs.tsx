"use client";

import Image from "next/image";
import { useState } from "react";
import type { Course } from "@/data/courses";

const TABS = ["Overview", "Curriculum", "Requirements", "Fees & Funding"] as const;
type Tab = (typeof TABS)[number];

function ComingSoon({ label }: { label: string }) {
  return (
    <p className="font-body text-body text-on-surface-variant">
      {label} details for this program are being finalized — check back soon,
      or contact admissions in the sidebar for the latest information.
    </p>
  );
}

function OverviewPanel({ course }: { course: Course }) {
  return (
    <div className="space-y-lg">
      <h3 className="font-sub-heading text-card-title md:text-sub-heading text-on-surface">
        Program Overview
      </h3>
      <p className="font-body text-body text-on-surface-variant">
        {course.overview ?? course.summary}
      </p>
      {course.highlights && course.highlights.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-xl">
          {course.highlights.map((h) => (
            <div
              key={h.title}
              className="p-lg bg-surface rounded-lg border border-outline-variant/10 hover:border-primary/50 transition-colors"
            >
              <span className="material-symbols-outlined text-tertiary mb-md text-[32px] block">
                {h.icon}
              </span>
              <h4 className="font-card-title text-card-title text-on-surface mb-xs">
                {h.title}
              </h4>
              <p className="font-body text-[16px] text-on-surface-variant">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CurriculumPanel({ course }: { course: Course }) {
  const [openYear, setOpenYear] = useState<string | null>(
    course.curriculum?.[0]?.year ?? null
  );

  if (!course.curriculum || course.curriculum.length === 0) {
    return <ComingSoon label="Curriculum" />;
  }

  return (
    <div className="space-y-md">
      <h3 className="font-sub-heading text-card-title md:text-sub-heading text-on-surface mb-lg">
        Core Curriculum
      </h3>
      {course.curriculum.map((block) => {
        const isOpen = openYear === block.year;
        return (
          <div
            key={block.year}
            className="border border-outline-variant/20 rounded-lg bg-surface overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenYear(isOpen ? null : block.year)}
              className="w-full px-lg py-md flex justify-between items-center text-left hover:bg-surface-container-highest transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-card-title text-card-title text-on-surface">
                {block.year}
              </span>
              <span
                className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="px-lg pb-lg text-on-surface-variant font-body text-[16px]">
                <ul className="space-y-sm mt-md">
                  {block.courses.map((c) => (
                    <li key={c} className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-[18px] mt-[2px]">
                        code
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function RequirementsPanel({ course }: { course: Course }) {
  if (!course.requirements || course.requirements.length === 0) {
    return <ComingSoon label="Admissions requirements" />;
  }
  return (
    <div className="space-y-lg">
      <h3 className="font-sub-heading text-card-title md:text-sub-heading text-on-surface">
        Admission Requirements
      </h3>
      <ul className="space-y-md">
        {course.requirements.map((req) => (
          <li key={req} className="flex items-start gap-sm">
            <span className="material-symbols-outlined text-tertiary text-[20px] mt-[2px]">
              check_circle
            </span>
            <span className="font-body text-body text-on-surface-variant">
              {req}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeesPanel({ course }: { course: Course }) {
  if (!course.feesFunding || course.feesFunding.length === 0) {
    return <ComingSoon label="Fees & funding" />;
  }
  return (
    <div className="space-y-lg">
      <h3 className="font-sub-heading text-card-title md:text-sub-heading text-on-surface">
        Fees & Funding
      </h3>
      <ul className="space-y-md">
        {course.feesFunding.map((fee) => (
          <li
            key={fee.label}
            className="flex justify-between items-center border-b border-outline-variant/10 pb-md"
          >
            <span className="font-body text-[16px] text-on-surface-variant">
              {fee.label}
            </span>
            <span className="font-card-title text-card-title text-on-surface">
              {fee.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CourseTabs({ course }: { course: Course }) {
  const [active, setActive] = useState<Tab>("Overview");

  return (
    <div className="flex flex-col gap-lg">
      <div className="flex gap-sm p-1 bg-surface-container-highest rounded-[34px] max-w-full w-fit border border-outline-variant/10 overflow-x-auto">
        {TABS.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={
                isActive
                  ? "px-lg py-sm rounded-[34px] font-default-primary text-default-primary text-on-surface bg-gradient-to-r from-primary-container to-surface shadow-sm transition-all whitespace-nowrap"
                  : "px-lg py-sm rounded-[34px] font-default-primary text-default-primary text-on-surface-variant hover:text-on-surface transition-all bg-transparent whitespace-nowrap"
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="bg-surface-container rounded-xl p-xl border border-outline-variant/20 shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative">
          {active === "Overview" && <OverviewPanel course={course} />}
          {active === "Curriculum" && <CurriculumPanel course={course} />}
          {active === "Requirements" && <RequirementsPanel course={course} />}
          {active === "Fees & Funding" && <FeesPanel course={course} />}
        </div>
      </div>
    </div>
  );
}

export function CourseVisual({ course }: { course: Course }) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden relative group shadow-2xl shadow-primary-container/20">
      <Image
        src={course.heroImageUrl}
        alt={course.title}
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
    </div>
  );
}