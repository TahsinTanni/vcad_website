import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-md px-margin py-xxl min-h-[50vh]">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
        <span className="material-symbols-outlined text-[32px] text-on-surface-variant">
          school
        </span>
      </div>
      <h1 className="font-sub-heading text-sub-heading text-on-surface">
        We couldn&apos;t find that course
      </h1>
      <p className="font-body text-body text-on-surface-variant max-w-md">
        It may have been renamed or retired. Browse everything we currently
        offer instead.
      </p>
      <Link
        href="/courses"
        className="mt-sm px-xl py-sm rounded-[34px] bg-gradient-to-r from-secondary-container to-secondary-container/80 text-on-secondary-container font-default-primary text-default-primary transition-all hover:scale-105 active:scale-95"
      >
        Explore Our Courses
      </Link>
    </div>
  );
}