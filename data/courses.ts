export type SchoolName = "School of Design" | "School of Arts" | "School of Tech";

export type Accent = "primary" | "secondary" | "tertiary";

export interface CourseHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface CourseKeyDetails {
  startDate: string;
  format: string;
  language: string;
  tuition: string;
}

export interface CourseAdmissions {
  applicationsOpen: boolean;
  contactName: string;
  contactTitle: string;
  contactAvatarUrl: string;
}

export interface StudentWorkItem {
  imageUrl: string;
  caption: string;
}

export interface Course {
  slug: string;
  title: string;
  school: SchoolName;
  duration: string;
  summary: string;
  heroImageUrl: string;
  icon: string; // Material Symbols name, used on compact cards
  accent: Accent;
  avatarUrls: string[];
  avatarOverflowCount?: number;

  // Course-details-page-only fields (Stage 4). Optional so the Explore
  // Courses grid works fine on courses that don't have them filled in yet.
  overview?: string;
  highlights?: CourseHighlight[];
  keyDetails?: CourseKeyDetails;
  admissions?: CourseAdmissions;
  studentWork?: StudentWorkItem[];
  applyLabel?: string;
}

export const courses: Course[] = [
  {
    slug: "bfa-interactive-systems-digital-environments",
    title: "BFA in Interactive Systems & Digital Environments",
    school: "School of Tech",
    duration: "4 Years",
    summary:
      "Merge physical computation with virtual spaces. Design the next generation of immersive academic and artistic experiences.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Bv8b6Iyhy2sZtGJVOPNpMSgmEGUebo5i9RYanGNOrtfGLWtVMMwfm3H4aG0wauDWBqVZVMetaptOpF_FAfPqOV0DATxMIrGppTcEQzMm2xfVfkok9bZVmDr4W71bl7kuWo1gXrvshdq_FTIyip0QYYj4eO30FGTFvgPjW7po2Tzh2PB6z1gHX26G_k_sTAFf3O2Zz_KwQW9kH6xBzZsIjwLUHulzll7aDbmiidBmc3jYvRXUZ8kqOg",
    icon: "hub",
    accent: "primary",
    avatarUrls: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj2p_ugtWZWtqiqkCRx6SqD4jlNj5I9VQa0BWoOqxl1kTum8b5_ka0VVqGnp_Bf5nNj9fEpAW090A7xI5JfVLmcX_vQBHGhr7ecmdgNqdUNPHNRctg582vonZfnF98XoWYomE_QP8sbcG9F83lAUI2P0i35ZoRsQvhVQokTng6iEzZgC0x1aRddB2jQjuLVm2jelevo2XKqKruONM3PCdN8xZO2ewVuovaZgzp3PS8V5LU-Dpe-q5igw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAA02CdI1Yem_srqAomH_J5rhCfOwI3ysNJjB4MP41IqGXKopf_y7rcoV4RB_1CYP2ZojdF0St23JV80dHIdCvDRFYmeplO-Nj5YK2dwXtgLjRYwdS6o6VaVdDxym02jih8UWNIHSqLfje1jTvTs7MG9b55oe2gDAJxnHzDJgS7rYarVjxiwh5XVeR_7oT9jZ-89HMujwBstTDx27l9gEWXjcVTajAyrVAYw08VC7_qrySkV8wDGbIJ_A",
    ],
    avatarOverflowCount: 12,
  },
  {
    slug: "ma-contemporary-illustration",
    title: "MA in Contemporary Illustration",
    school: "School of Arts",
    duration: "2 Years",
    summary: "Traditional techniques met with advanced digital workflows.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Bv8b6Iyhy2sZtGJVOPNpMSgmEGUebo5i9RYanGNOrtfGLWtVMMwfm3H4aG0wauDWBqVZVMetaptOpF_FAfPqOV0DATxMIrGppTcEQzMm2xfVfkok9bZVmDr4W71bl7kuWo1gXrvshdq_FTIyip0QYYj4eO30FGTFvgPjW7po2Tzh2PB6z1gHX26G_k_sTAFf3O2Zz_KwQW9kH6xBzZsIjwLUHulzll7aDbmiidBmc3jYvRXUZ8kqOg",
    icon: "brush",
    accent: "secondary",
    avatarUrls: [],
  },
  {
    slug: "ba-spatial-design",
    title: "BA in Spatial Design",
    school: "School of Design",
    duration: "3 Years",
    summary: "Architectural thinking for virtual and physical environments.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Bv8b6Iyhy2sZtGJVOPNpMSgmEGUebo5i9RYanGNOrtfGLWtVMMwfm3H4aG0wauDWBqVZVMetaptOpF_FAfPqOV0DATxMIrGppTcEQzMm2xfVfkok9bZVmDr4W71bl7kuWo1gXrvshdq_FTIyip0QYYj4eO30FGTFvgPjW7po2Tzh2PB6z1gHX26G_k_sTAFf3O2Zz_KwQW9kH6xBzZsIjwLUHulzll7aDbmiidBmc3jYvRXUZ8kqOg",
    icon: "architecture",
    accent: "tertiary",
    avatarUrls: [],
  },
  {
    slug: "interactive-media-design-generative-arts",
    title: "Interactive Media Design & Generative Arts",
    school: "School of Design",
    duration: "4 Years",
    summary:
      "Master the intersection of code, visual design, and human interaction. This advanced program bridges traditional design principles with cutting-edge computational thinking.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDR6HNW7s5PQSHXkOiUPg0OJlJHOrdtQfqJmzb7agmGyX1mj3ZB2smyLf5_dVhX5AJN5hKUWSI2__iAxFqUKox8_sn1HCkst0IcOvfwfLHOCy_3lUDoIkQIE4unowPJmZbaCdNpc1up8lZYD-FiAVj5EFHU0EfRDXBCUrYkMFb7a1pUFeJ-fy06_iBN7EwKedQiQn9LtGaS-vPaaBUQ9q1UxG9SI7yy17b_OX2ljcZ9s-fMI8lvQtMGzA",
    icon: "widgets",
    accent: "primary",
    avatarUrls: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI6X4OR6XahCQYT8WCMvHziOM5Rp5y9wbrXWS41UhTI2Grv8y3PsfaSALc8mpNRVOVwAiwIlJC42G_3cBbkRrxMmSyxROE6Y7qv_SufqVgaeLfmb4y2BSG2h8y8uNEB_YX_lmVGRHeaC281ObmaJbxL3jldCRZ72uOR9ZbD-SR3eFaXXuAdcoD-8DQpIpVlm2Xhho-eK49m1G4krsWQLJZQotTL5KermgO-aKhvRCTGVmpAk0fW7y68Q",
    ],
    keyDetails: {
      startDate: "Sep 2024",
      format: "On-Campus",
      language: "English",
      tuition: "$24,500 / yr",
    },
    admissions: {
      applicationsOpen: true,
      contactName: "Dr. Sarah Chen",
      contactTitle: "Program Director",
      contactAvatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAI6X4OR6XahCQYT8WCMvHziOM5Rp5y9wbrXWS41UhTI2Grv8y3PsfaSALc8mpNRVOVwAiwIlJC42G_3cBbkRrxMmSyxROE6Y7qv_SufqVgaeLfmb4y2BSG2h8y8uNEB_YX_lmVGRHeaC281ObmaJbxL3jldCRZ72uOR9ZbD-SR3eFaXXuAdcoD-8DQpIpVlm2Xhho-eK49m1G4krsWQLJZQotTL5KermgO-aKhvRCTGVmpAk0fW7y68Q",
    },
    applyLabel: "Apply for Fall 2024",
  },
  {
    slug: "bfa-graphic-design",
    title: "BFA in Graphic Design",
    school: "School of Design",
    duration: "4 Years",
    summary:
      "Master visual communication, typography, and digital media to shape global brand narratives.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9lfIoAmb4Du23cQ_93b07BkHN6I0DdJr-lYNshm6q9lXZGDWFAzkeDrjA96uuFh0QuKIUnUNZjl9tVIBHIggiKcjqrQHd6VD0dT8fL0tbH9PLcxMFpD_We4uwPQfEqrB8OZu4U3cKp4ikufju1TsAM09PRh_oxtNCFXDYVWjSwx1fkptqE8f3x9VNELzpVkUvxTzyj-5rqVsYDQ1F3SH4_ujSXPxqH63dPMUDJd5UVhN3I94xkzn4Bg",
    icon: "palette",
    accent: "tertiary",
    avatarUrls: [],
  },
  {
    slug: "diploma-3d-animation-vfx",
    title: "Diploma in 3D Animation & Visual Effects",
    school: "School of Tech",
    duration: "2 Years",
    summary:
      "Bring imaginative worlds to life through advanced modeling, rigging, and visual effects techniques.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0B63OCujZzQqHPT_StSgsi5N_xUGN3hAskr0iJ-iPwIcBnjdzKGnQTUFiQ3tUZCD86TUeY4j1X5lnEPmglMVsGc3A9loC1Po0FqNzJAdWobtVnyleekVK_qPxJXzQrOmBR1DTpq65d6ac3NroS_NdMCexygl_2kfeADfghyd4zWdDKBqumQWt-lO1H-qR725MJtrP7UnNMljikiQYAwGZWxBcTkmWyzvb2DlJ3MSGPj5kRaImTKHoqQ",
    icon: "animation",
    accent: "secondary",
    avatarUrls: [],
  },
];

export const schoolFilters: SchoolName[] = [
  "School of Design",
  "School of Arts",
  "School of Tech",
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}