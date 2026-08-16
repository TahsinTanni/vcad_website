"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "@/data/courses";
import CourseFilters, { type FilterValue } from "@/components/courses/CourseFilters";
import CourseGrid from "@/components/courses/CourseGrid";
import CourseGridSkeleton from "@/components/courses/CourseGridSkeleton";

export default function CoursesPage() {
  const [filter, setFilter] = useState<FilterValue>("All Programs");
  const [isLoading, setIsLoading] = useState(true);

  // Simulates the initial course fetch a real product would make. Filtering
  // afterwards is instant/client-side since the full dataset is already in
  // memory — there's nothing to re-fetch when the pill changes.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = useMemo(() => {
    if (filter === "All Programs") return courses;
    return courses.filter((course) => course.school === filter);
  }, [filter]);

  return (
    <div className="flex flex-col w-full px-margin pb-xxl relative">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-tertiary-container/10 blur-[100px] rounded-full pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

      <section className="max-w-frame mx-auto w-full pt-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-lg relative">
          <div className="max-w-3xl">
            <h1 className="font-page-title text-page-title-mobile md:text-page-title text-primary tracking-tighter mb-sm relative">
              Explore Our Courses
            </h1>
            <p className="font-lead text-lead text-on-surface-variant max-w-2xl">
              Discover programs designed to bridge the gap between
              prestigious academic tradition and cutting-edge digital
              creativity.
            </p>
          </div>

          <CourseFilters active={filter} onChange={setFilter} />
        </div>

        <div className="w-full h-px bg-gradient-to-r from-outline-variant/50 via-outline-variant to-transparent mb-xxl relative">
          <div className="absolute left-0 -top-[3px] w-24 h-[7px] bg-primary rounded-full shadow-[0_0_15px_rgba(189,196,241,0.5)]" />
        </div>

        {isLoading ? (
          <CourseGridSkeleton />
        ) : (
          <CourseGrid
            courses={filteredCourses}
            onResetFilter={() => setFilter("All Programs")}
          />
        )}
      </section>
    </div>
  );
}