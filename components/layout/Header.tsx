"use client";

import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-container/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="h-20 max-w-frame mx-auto px-margin flex items-center justify-between">
        <div className="flex items-center gap-xl">
          <Link
            href="/"
            className="font-page-title text-page-title-mobile tracking-tighter text-primary"
            onClick={() => setMobileOpen(false)}
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
          {/* Hamburger — visible below lg */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary-container/95 backdrop-blur-xl border-t border-outline-variant/20 px-margin pb-lg pt-md flex flex-col gap-sm">
          {NAV_LINKS.map((link) => {
            const isActive = link.href !== "#" && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-default-primary text-default-primary py-sm transition-colors hover:text-primary ${
                  isActive ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => setMobileOpen(false)}
            className="sm:hidden mt-sm w-full px-xl py-sm bg-secondary-container text-on-secondary-container rounded-full font-default-primary text-default-primary hover:brightness-110 transition-all"
          >
            Apply Now
          </button>
        </nav>
      )}
    </header>
  );
}
