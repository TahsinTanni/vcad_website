import type { Course } from "@/data/courses";
import { FeatureCard, ExpandedCard, CompactCard } from "./CourseCard";
import CourseEmptyState from "./CourseEmptyState";

export default function CourseGrid({
  courses,
  onResetFilter,
}: {
  courses: Course[];
  onResetFilter: () => void;
}) {
  if (courses.length === 0) {
    return <CourseEmptyState onReset={onResetFilter} />;
  }

  const [featured, ...rest] = courses;
  const stacked = rest.slice(0, 2);
  const expanded = rest[2];
  const overflow = rest.slice(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xxl" id="course-grid">
      <FeatureCard course={featured} />

      {stacked.length > 0 && (
        <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
          {stacked.map((course) => (
            <div key={course.slug} className="flex-1">
              <CompactCard course={course} />
            </div>
          ))}
        </div>
      )}

      {expanded && <ExpandedCard course={expanded} />}

      {overflow.length > 0 && (
        <div className="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {overflow.map((course) => (
            <CompactCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}