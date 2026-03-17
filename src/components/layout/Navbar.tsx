"use client";
// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Teachings",   href: "#teachings" },
  { label: "Mentorship",  href: "#mentorship" },
  { label: "Family",      href: "#family" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-mahogany/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,168,75,0.15)]"
            : "py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="flex flex-col items-start text-left"
        >
          <span
            className="font-display text-xl font-bold leading-tight text-parchment"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Rev. Dokun Idowu
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-amber/80 font-sans font-light mt-0.5">
            Executive Leader · Rhema Nigeria
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-xs tracking-[0.14em] uppercase text-parchment/70 hover:text-amber
                           transition-colors duration-200 font-sans font-medium hover-underline"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden lg:inline-flex btn-primary text-xs py-3 px-6"
          >
            Connect →
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-parchment transition-all" />
            <span className="block w-4 h-px bg-parchment/60 transition-all" />
            <span className="block w-6 h-px bg-parchment transition-all" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-mahogany flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-parchment/60 text-3xl hover:text-parchment"
            aria-label="Close"
          >
            ×
          </button>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="font-display text-3xl italic text-parchment/80 hover:text-amber transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary mt-4"
          >
            Connect →
          </button>
        </div>
      )}
    </>
  );
}
