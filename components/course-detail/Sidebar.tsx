import Image from "next/image";
import type { Course } from "@/data/courses";

export function KeyDetailsCard({ keyDetails }: { keyDetails: Course["keyDetails"] }) {
  if (!keyDetails) return null;

  const rows: [string, string][] = [
    ["Start Date", keyDetails.startDate],
    ["Format", keyDetails.format],
    ["Language", keyDetails.language],
    ["Tuition (Intl)", keyDetails.tuition],
  ];

  return (
    <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/20 shadow-lg hover:border-primary/30 transition-colors">
      <h4 className="font-card-title text-card-title text-on-surface mb-lg flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary">info</span>{" "}
        Key Details
      </h4>
      <ul className="space-y-md">
        {rows.map(([label, value], i) => (
          <li
            key={label}
            className={`flex justify-between items-center ${
              i < rows.length - 1 ? "border-b border-outline-variant/10 pb-sm" : ""
            }`}
          >
            <span className="font-body text-[16px] text-on-surface-variant">
              {label}
            </span>
            <span className="font-default-primary text-default-primary text-on-surface">
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AdmissionsCard({ admissions }: { admissions: Course["admissions"] }) {
  if (!admissions) return null;

  return (
    <div className="bg-surface-container-highest rounded-xl p-lg border border-outline-variant/20 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="flex items-center justify-between mb-md relative z-10">
        <h4 className="font-card-title text-card-title text-on-surface">
          Admissions
        </h4>
        {admissions.applicationsOpen && (
          <span className="bg-surface text-on-surface font-meta text-meta px-sm py-xs rounded-[4px] flex items-center gap-xs border border-tertiary/30">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />{" "}
            Applications Open
          </span>
        )}
      </div>
      <div className="flex items-center gap-md mb-lg relative z-10">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface border border-outline-variant/30 relative shrink-0">
          <Image
            src={admissions.contactAvatarUrl}
            alt={admissions.contactName}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-default-primary text-default-primary text-on-surface">
            {admissions.contactName}
          </p>
          <p className="font-meta text-meta text-on-surface-variant">
            {admissions.contactTitle}
          </p>
        </div>
      </div>
      <div className="space-y-sm relative z-10">
        <button className="w-full py-sm px-md bg-surface text-on-surface border border-outline-variant/30 rounded-lg hover:bg-surface-bright transition-colors font-default-primary text-default-primary flex justify-center items-center gap-sm">
          <span className="material-symbols-outlined text-[20px]">mail</span>{" "}
          Contact Admissions
        </button>
        <button className="w-full py-sm px-md bg-transparent text-primary hover:text-primary-fixed border border-transparent rounded-lg transition-colors font-default-primary text-default-primary flex justify-center items-center gap-sm">
          <span className="material-symbols-outlined text-[20px]">
            calendar_month
          </span>{" "}
          Book a Tour
        </button>
      </div>
    </div>
  );
}

export function CampusCard({ campus }: { campus: Course["campus"] }) {
  if (!campus) return null;

  return (
    <div className="rounded-xl overflow-hidden border border-outline-variant/20 shadow-md relative">
      <div className="w-full h-48 relative">
        <Image
          src={campus.imageUrl}
          alt={campus.name}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 w-full p-sm bg-surface/80 backdrop-blur-md flex justify-between items-center">
        <span className="font-meta text-meta text-on-surface">
          {campus.name}
        </span>
        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
          open_in_new
        </span>
      </div>
    </div>
  );
}