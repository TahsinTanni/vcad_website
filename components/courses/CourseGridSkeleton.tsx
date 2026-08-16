export default function CourseGridSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xxl animate-pulse"
      aria-busy="true"
      aria-label="Loading courses"
    >
      <div className="col-span-1 md:col-span-8 rounded-xl bg-surface-container min-h-[500px]" />
      <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
        <div className="flex-1 rounded-xl bg-surface-container-high min-h-[238px]" />
        <div className="flex-1 rounded-xl bg-surface-container-high min-h-[238px]" />
      </div>
      <div className="col-span-1 md:col-span-12 rounded-xl bg-surface-container h-64" />
    </div>
  );
}