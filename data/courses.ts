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

export interface CampusInfo {
  name: string;
  imageUrl: string;
}

export interface CurriculumYear {
  year: string;
  courses: string[];
}

export interface FeeItem {
  label: string;
  value: string;
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

  // Course-details-page-only fields. Optional so the Explore Courses grid
  // (and the details page) still render sensibly for courses that don't
  // have full editorial content filled in yet — see README for the
  // fallback behavior.
  level?: string;
  overview?: string;
  highlights?: CourseHighlight[];
  keyDetails?: CourseKeyDetails;
  admissions?: CourseAdmissions;
  studentWork?: StudentWorkItem[];
  applyLabel?: string;
  curriculum?: CurriculumYear[];
  requirements?: string[];
  feesFunding?: FeeItem[];
  campus?: CampusInfo;
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
    level: "Undergraduate",
    overview:
      "The Interactive Media Design program focuses on the conceptualization, design, and production of interactive experiences across emerging platforms. Students will explore generative graphics, physical computing, data visualization, and immersive environments (AR/VR).",
    highlights: [
      {
        icon: "deployed_code",
        title: "Creative Coding",
        description:
          "Master p5.js, Processing, and TouchDesigner to build generative systems.",
      },
      {
        icon: "view_in_ar",
        title: "Immersive Media",
        description:
          "Design spatial interfaces and interactive narratives in Unity and Unreal Engine.",
      },
    ],
    curriculum: [
      {
        year: "Year 1: Foundations of Interaction",
        courses: [
          "IMD101: Introduction to Creative Computation",
          "DES105: Visual Syntax and Form",
          "HIS110: History of Digital Arts",
        ],
      },
      {
        year: "Year 2: Systems & Sensors",
        courses: [
          "IMD201: Physical Computing (Arduino/Sensors)",
          "DAT205: Data Visualization Studio",
        ],
      },
    ],
    requirements: [
      "High school diploma or equivalent (minimum GPA 3.0)",
      "Portfolio of 5–10 creative works (digital or physical)",
      "Statement of purpose (500 words)",
      "Two letters of recommendation",
      "English proficiency: IELTS 6.5+ or TOEFL 90+ for international applicants",
    ],
    feesFunding: [
      { label: "Tuition (International)", value: "$24,500 / yr" },
      { label: "Tuition (Domestic)", value: "$14,200 / yr" },
      { label: "Materials & Equipment Fee", value: "$1,200 / yr" },
      {
        label: "Merit Scholarships",
        value: "Up to $10,000 / yr, awarded on portfolio review",
      },
    ],
    campus: {
      name: "Main Campus",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLNkcmsB9FIGB_5T5f0TCRgqXUyXTX0s0l9JQ3x5fzU7sHpMpjCKXQYQTnLE28khuIgz9wJ6Lj9KSMwiO7hknIXyBBzKDqvW9ZbXuX1I5ty9tDj9DeAP2qmWYuuEdZT3kroi0mcdTdNzwTGs8Mhpo70cFvLHaaYsbJo-H93x53wdC8ehglO825HtdrL6JUWKUD7DhmmWwL5pcvFcNXLpAcMY9X1LGyxKpFAt-kov1_-Mx8FfKoL0gMhw",
    },
    studentWork: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Y0bM1J6OfXoHwRJJAa9dafHttikudxMq2jQxNikblxdR32JW-NnofIlc000HUuJ8tcP-sNUeQNo-jpugzW7yQwpEfogQXNBXpWMkVXyxEzCmSo9Fi8Uj13Dv0bjgBPUblRSpZWy4eTkl7q6iDTCdM02B6IKTdpFM2XP3VboddjUZpQzNHetgB7bRG6FzTPHEU5Y3ncdnWRJTCX8GNeIE95lXvVvuYKHWUa6Fhthe-IornHVTcfJkQ",
        caption: "Generative data visualization — particle systems study",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAWBkaGWDg9Sri-h2SUszrYTEl78fyHim7O7-ikbjfbN8HTXfHpPy7uVu7f8b6v95ihJD8wA7L3aDF5J2wyB-GlP-OfryaJyOzY281RsXll1EMoUUf1HT3FIUF2ho_OxqVwemZOzuf_emIjndKn1o5EKwJnuEikKtVK_SwtNTTL-vMrjX1SXERMmmegQF6UFzVYeHOnARXLV_YQXMVGH0g6Q4qzzPQnzF7ljGaEDJ6-AWYNoa5yMs0glw",
        caption: "Physical computing — hardware prototype wiring",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCZUJxJP_x-e2SDopfJJx1bQlI1gfHkIE3gOagZCMRGDBFww0xxpE7NtEeQnAQcZTLgX_vhmo3ds5ewBT-kKxhPIeE1jUBCoXUFSCn_nKtYAcXB2yJ1GPU6ynj2dqnPy7EnyPXRmth7zxLeuxPhxY6tLfrJhwve_yNke-CNtShuZyKHp300wnBNwm-JAT9ptuJeUuWcmJbrigGtPWHyJO3-8GvKYgP-Sm9rQREF43BF3En_XtP5Mzyp9Q",
        caption: "Projection mapping installation, gallery showcase",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAXuSTyHI9GAotKs0d-UugnI7vH0nSJ5o0-SLxhv3JhUhdmx94qMqaWVYkQOgO6R7YSVbwt9qrAfMoqcmevhHe9qap0bllRDW0voQBRjBIFJAst0cpr19MTxMXJ-rIyFt6dGey-Cxyt21VxUZi6PlYeQHG1hjuo6Lr_yA85GA5_moZ_Ac3W_u2YAo8XNQLdAApO9bgyIeUCJQraA5UELMtlcqhT_Qq51OrTmYVi3PC5sKX9ubiMiU3aUw",
        caption: "UI/UX dashboard concept, dark mode system",
      },
    ],
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