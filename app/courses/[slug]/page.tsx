import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/courses";
import CourseDetailHero from "@/components/course-detail/CourseDetailHero";
import CourseTabs, { CourseVisual } from "@/components/course-detail/CourseTabs";
import StudentWorkGallery from "@/components/course-detail/StudentWorkGallery";
import {
  KeyDetailsCard,
  AdmissionsCard,
  CampusCard,
} from "@/components/course-detail/Sidebar";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  return {
    title: course ? `${course.title} — VCAD` : "Course not found — VCAD",
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  const hasSidebar = course.keyDetails || course.admissions || course.campus;

  return (
    <div className="flex flex-col w-full relative">
      <CourseDetailHero course={course} />

      <section
        className={`max-w-frame mx-auto w-full px-margin py-xxl grid grid-cols-1 ${
          hasSidebar ? "lg:grid-cols-12" : ""
        } gap-xl`}
      >
        <div className={`${hasSidebar ? "lg:col-span-8" : ""} flex flex-col gap-xxl`}>
          <CourseVisual course={course} />
          <CourseTabs course={course} />
          {course.studentWork && <StudentWorkGallery items={course.studentWork} />}
        </div>

        {hasSidebar && (
          <div className="lg:col-span-4 flex flex-col gap-lg">
            <KeyDetailsCard keyDetails={course.keyDetails} />
            <AdmissionsCard admissions={course.admissions} />
            <CampusCard campus={course.campus} />
          </div>
        )}
      </section>
    </div>
  );
}