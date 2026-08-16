import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";

const ACCENT_ICON_BG: Record<Course["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary-container/20 text-secondary",
  tertiary: "bg-tertiary-container/40 text-tertiary",
};

const ACCENT_TITLE_HOVER: Record<Course["accent"], string> = {
  primary: "group-hover:text-primary-fixed",
  secondary: "group-hover:text-secondary-fixed",
  tertiary: "group-hover:text-tertiary-fixed",
};

function Badges({ course }: { course: Course }) {
  return (
    <div className="flex gap-sm">
      <span className="px-md py-xs rounded-[4px] bg-surface text-on-surface-variant font-meta text-meta uppercase tracking-widest backdrop-blur-md">
        {course.school}
      </span>
      <span className="px-md py-xs rounded-[4px] bg-surface text-on-surface-variant font-meta text-meta uppercase tracking-widest backdrop-blur-md">
        {course.duration}
      </span>
    </div>
  );
}

function AvatarStack({ course }: { course: Course }) {
  if (course.avatarUrls.length === 0 && !course.avatarOverflowCount) return null;
  return (
    <div className="flex -space-x-4">
      {course.avatarUrls.map((url) => (
        <img
          key={url}
          className="w-12 h-12 rounded-full ring-2 ring-background object-cover grayscale mix-blend-luminosity"
          src={url}
          alt=""
        />
      ))}
      {course.avatarOverflowCount && (
        <div className="w-12 h-12 rounded-full bg-surface-container-highest ring-2 ring-background flex items-center justify-center font-meta text-meta text-primary">
          +{course.avatarOverflowCount}
        </div>
      )}
    </div>
  );
}

function ArrowButton() {
  return (
    <span className="w-12 h-12 rounded-full bg-primary/10 border border-primary text-primary flex items-center justify-center transition-all group-hover:rotate-45 group-hover:bg-primary group-hover:text-on-primary">
      <span className="material-symbols-outlined">arrow_forward</span>
    </span>
  );
}

export function FeatureCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="col-span-1 md:col-span-8 group relative rounded-xl overflow-hidden bg-surface-container hover:shadow-[0_0_40px_rgba(189,196,241,0.15)] transition-all duration-500 min-h-[500px] flex flex-col justify-end"
    >
      <div className="absolute inset-0">
        <Image
          src={course.heroImageUrl}
          alt={course.title}
          fill
          sizes="(min-width: 768px) 66vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="relative z-10 p-xl flex flex-col gap-lg w-full">
        <div className="flex gap-sm mb-auto">
          <Badges course={course} />
        </div>
        <div>
          <h2 className="font-section-heading text-sub-heading md:text-section-heading text-primary group-hover:text-tertiary-fixed transition-colors line-clamp-2 mb-md">
            {course.title}
          </h2>
          <p className="font-body text-body text-on-surface-variant max-w-2xl mb-lg">
            {course.summary}
          </p>
        </div>
        <div className="flex justify-between items-center border-t border-outline-variant/30 pt-lg">
          <AvatarStack course={course} />
          <ArrowButton />
        </div>
      </div>
    </Link>
  );
}

export function ExpandedCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="col-span-1 md:col-span-12 group relative rounded-xl overflow-hidden bg-surface-container hover:shadow-[0_0_40px_rgba(189,196,241,0.15)] transition-all duration-500 flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <Image
          src={course.heroImageUrl}
          alt={course.title}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="relative z-10 p-xl flex flex-col justify-center gap-md flex-1">
        <Badges course={course} />
        <h3 className="font-section-heading text-[32px] leading-tight text-on-surface group-hover:text-primary-fixed transition-colors">
          {course.title}
        </h3>
        <p className="font-body text-body text-on-surface-variant max-w-2xl">
          {course.summary}
        </p>
        <div className="flex justify-between items-center border-t border-outline-variant/30 pt-lg mt-sm">
          <AvatarStack course={course} />
          <ArrowButton />
        </div>
      </div>
    </Link>
  );
}

export function CompactCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative rounded-xl bg-surface-container-high p-lg flex flex-col justify-between hover:shadow-[0_0_30px_rgba(215,1,128,0.1)] transition-all hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container rounded-xl -z-10" />
      <div className="flex justify-between items-start mb-xl">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-md ${ACCENT_ICON_BG[course.accent]}`}
        >
          <span className="material-symbols-outlined">{course.icon}</span>
        </div>
        <span className="px-md py-xs rounded-[4px] bg-background text-on-surface-variant font-meta text-meta uppercase tracking-widest backdrop-blur-md">
          {course.school}
        </span>
      </div>
      <div>
        <h3
          className={`font-card-title text-card-title text-on-surface mb-sm transition-colors ${ACCENT_TITLE_HOVER[course.accent]}`}
        >
          {course.title}
        </h3>
        <p className="font-body text-body text-on-surface-variant line-clamp-2 text-[16px]">
          {course.summary}
        </p>
      </div>
    </Link>
  );
}