export type School = {
  id: string;
  name: string;
  tag: string;
  accent: "tertiary" | "secondary" | "primary";
  description: string;
  imageUrl: string;
};

export const schools: School[] = [
  {
    id: "graphic-design",
    name: "Graphic Design",
    tag: "BFA Program",
    accent: "tertiary",
    description:
      "Master visual communication, typography, and digital media to shape global brand narratives.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9lfIoAmb4Du23cQ_93b07BkHN6I0DdJr-lYNshm6q9lXZGDWFAzkeDrjA96uuFh0QuKIUnUNZjl9tVIBHIggiKcjqrQHd6VD0dT8fL0tbH9PLcxMFpD_We4uwPQfEqrB8OZu4U3cKp4ikufju1TsAM09PRh_oxtNCFXDYVWjSwx1fkptqE8f3x9VNELzpVkUvxTzyj-5rqVsYDQ1F3SH4_ujSXPxqH63dPMUDJd5UVhN3I94xkzn4Bg",
  },
  {
    id: "3d-animation",
    name: "3D Animation",
    tag: "Diploma",
    accent: "secondary",
    description:
      "Bring imaginative worlds to life through advanced modeling, rigging, and visual effects techniques.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0B63OCujZzQqHPT_StSgsi5N_xUGN3hAskr0iJ-iPwIcBnjdzKGnQTUFiQ3tUZCD86TUeY4j1X5lnEPmglMVsGc3A9loC1Po0FqNzJAdWobtVnyleekVK_qPxJXzQrOmBR1DTpq65d6ac3NroS_NdMCexygl_2kfeADfghyd4zWdDKBqumQWt-lO1H-qR725MJtrP7UnNMljikiQYAwGZWxBcTkmWyzvb2DlJ3MSGPj5kRaImTKHoqQ",
  },
  {
    id: "fashion-design",
    name: "Fashion Design",
    tag: "Certificate",
    accent: "primary",
    description:
      "Merge traditional garment construction with wearable technology and sustainable materials.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ULVr8RFd5pFAPB9Ytj8vJV3GBDxzfECQaAtmjyS9_kQSYgNLSjWR-bvh_nCFqZ7yxAK4TylTknIrd4AD6ToWp5CsLouTBL-OsuCn9gxmwHRuIduyJJU25MHVeoM6que3M15XiUnR3NGqK60cD-0DSxY8Rzjpgoow9UgpHXUvF_ZulNsjnmKhXdSNXstdZOZPfuwH3tmlwh-EKaOL7fr6fOxSRg-O195WcAmJbYdsJNJI8um9xCiJ6Q",
  },
  {
    id: "interior-design",
    name: "Interior Design",
    tag: "BFA Program",
    accent: "tertiary",
    description:
      "Design sustainable, functional, and visually compelling spatial experiences.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALm8hkf2SYv-AM9cOsbWdIxuHusE_l-sYn-XLuEn4aU2YUx4FMdtahaA4DNHhE04JCxf65V7ogWyaiQjIgPE10jqJtllZUicicKk5noyZA37zLS8V7yNlMvFf2W-03jdwADrT_HlBw_M7ILllkuc6DPdPV1ciMaZlyTNaPqURuQLm_ItjyRHgr9lNt-JrzbcIvU_oxNzb6XSDDhkdiA7_btiWqPOg8RMu5ecEHfnTDdBNDp7BJBUXBAQ",
  },
];

export type Stat = {
  id: string;
  target: number;
  suffix: string;
  label: string;
  helper?: string;
  showBar?: boolean;
};

export const stats: Stat[] = [
  {
    id: "employment-rate",
    target: 94,
    suffix: "%",
    label: "Employment Rate",
    helper: "Within 6 months of graduation",
  },
  {
    id: "industry-partners",
    target: 15,
    suffix: "+",
    label: "Industry Partners",
    helper: "Active hiring agreements",
  },
  {
    id: "alumni-network",
    target: 5000,
    suffix: "+",
    label: "Global Alumni Network",
    showBar: true,
  },
];