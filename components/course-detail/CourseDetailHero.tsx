import type { Course } from "@/data/courses";

export default function CourseDetailHero({ course }: { course: Course }) {
  return (
    <section className="w-full relative bg-surface-container-lowest pb-xxl pt-xl overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_70%_30%,theme(colors.secondary-container)_0%,transparent_60%)]" />

      <div className="max-w-frame mx-auto px-margin relative z-10 flex flex-col md:flex-row items-end justify-between gap-xl">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-sm mb-lg">
            <span className="bg-surface text-on-surface font-meta text-meta px-md py-sm rounded-[4px] border border-outline-variant/30">
              {course.school}
            </span>
            {course.level && (
              <span className="bg-surface text-on-surface font-meta text-meta px-md py-sm rounded-[4px] border border-outline-variant/30">
                {course.level}
              </span>
            )}
            <span className="bg-surface text-on-surface font-meta text-meta px-md py-sm rounded-[4px] border border-outline-variant/30">
              {course.duration}
            </span>
          </div>
          <h1 className="font-section-heading text-sub-heading md:text-section-heading text-on-surface mb-md">
            {course.title}
          </h1>
          <p className="font-lead text-lead text-on-surface-variant max-w-2xl">
            {course.overview ?? course.summary}
          </p>
        </div>

        <div className="flex flex-col gap-md min-w-[280px] w-full md:w-auto">
          <button className="w-full bg-gradient-to-r from-secondary-container to-[#E646E6] text-on-secondary-container font-card-title text-card-title py-md px-xl rounded-[20px] shadow-[0_0_30px_rgba(230,70,230,0.15)] hover:shadow-[0_0_40px_rgba(230,70,230,0.3)] transition-all flex items-center justify-center gap-sm group">
            {course.applyLabel ?? "Apply Now"}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
          <button className="w-full bg-transparent border border-outline text-primary font-default-primary text-default-primary py-sm px-lg rounded-[20px] hover:bg-primary/5 transition-colors">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}