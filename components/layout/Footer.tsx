const FOOTER_COLUMNS = [
  {
    title: "Schools",
    links: ["School of Design", "School of Arts", "School of Tech"],
  },
  {
    title: "University",
    links: ["About Us", "News & Events", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Accreditation"],
  },
];

const SOCIAL_ICONS = ["public", "videocam", "photo_camera"];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-xxl mt-xxl border-t border-outline-variant/10">
      <div className="max-w-frame mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-xl">
          <div className="space-y-md">
            <div className="font-page-title text-page-title-mobile text-primary mb-md">
              VCAD
            </div>
            <p className="text-meta font-meta text-on-surface-variant max-w-xs">
              The premier destination for artistic excellence and digital
              innovation. Part of the PEN Group.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-md">
              <h4 className="font-card-title text-card-title text-on-surface">
                {col.title}
              </h4>
              <ul className="space-y-xs text-on-surface-variant font-body text-body text-[16px]">
                {col.links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-primary" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-lg border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="flex gap-md text-on-surface-variant">
            {SOCIAL_ICONS.map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined hover:text-primary cursor-pointer"
              >
                {icon}
              </span>
            ))}
          </div>
          <div className="text-micro font-micro text-on-surface-variant uppercase tracking-widest">
            © 2024 Victoria College of Arts and Design • A PEN Group Affiliate
          </div>
        </div>
      </div>
    </footer>
  );
}
