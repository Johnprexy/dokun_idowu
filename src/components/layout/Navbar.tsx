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
          {/* Social icons desktop */}
          <div className="hidden lg:flex items-center gap-3 mr-1">
            <a href="https://instagram.com/dokun_idowu" target="_blank" rel="noopener noreferrer"
              className="text-parchment/50 hover:text-amber transition-colors duration-200" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://web.facebook.com/DokunIdowu" target="_blank" rel="noopener noreferrer"
              className="text-parchment/50 hover:text-amber transition-colors duration-200" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://x.com/DokunIdowu" target="_blank" rel="noopener noreferrer"
              className="text-parchment/50 hover:text-amber transition-colors duration-200" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
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
