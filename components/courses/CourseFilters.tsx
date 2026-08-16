"use client";

import type { SchoolName } from "@/data/courses";
import { schoolFilters } from "@/data/courses";

export type FilterValue = "All Programs" | SchoolName;

const FILTERS: FilterValue[] = ["All Programs", ...schoolFilters];

export default function CourseFilters({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div className="flex flex-wrap gap-md self-start md:self-end">
      {FILTERS.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={
              isActive
                ? "px-xl py-sm rounded-[34px] bg-gradient-to-r from-secondary-container to-secondary-container/80 text-on-secondary-container font-default-primary text-default-primary shadow-[0_0_30px_rgba(215,1,128,0.15)] transition-all hover:scale-105 active:scale-95"
                : "px-xl py-sm rounded-[34px] bg-transparent text-primary border border-outline-variant hover:border-primary hover:bg-primary/5 font-default-primary text-default-primary transition-colors"
            }
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}