"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Explore Courses", href: "/courses" },
  { label: "About", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-container/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="h-20 max-w-frame mx-auto px-margin flex items-center justify-between">
        <div className="flex items-center gap-xl">
          <Link
            href="/"
            className="font-page-title text-page-title-mobile tracking-tighter text-primary"
          >
            VCAD
          </Link>
          <nav className="hidden lg:flex items-center gap-lg">
            {NAV_LINKS.map((link) => {
              const isActive = link.href !== "#" && pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-default-primary text-default-primary transition-colors hover:text-primary ${
                    isActive ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <button className="hidden sm:flex px-xl py-xs bg-secondary-container text-on-secondary-container rounded-full font-default-primary text-default-primary hover:brightness-110 transition-all shadow-lg shadow-secondary-container/20">
            Apply Now
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
