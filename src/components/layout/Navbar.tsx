"use client";
// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home",        href: "#home",        external: false },
  { label: "About",       href: "#about",       external: false },
  { label: "Teachings",   href: "#teachings",   external: false },
  { label: "Events",      href: "/events",      external: true  },
  { label: "Give",        href: "/give",        external: true  },
  { label: "Contact",     href: "#contact",     external: false },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string, external = false) => {
    setMenuOpen(false);
    if (external) {
      window.location.href = href;
      return;
    }
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
        {/* PDee Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="flex flex-col items-start text-left"
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "1px", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 900, fontStyle: "italic", color: "#C8A84B", letterSpacing: "-0.02em" }}>P</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 900, fontStyle: "italic", color: "#F5EFE0", letterSpacing: "-0.02em" }}>Dee</span>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8A84B", display: "inline-block", marginLeft: 3, marginBottom: 5, flexShrink: 0 }} />
          </div>
          <span className="text-[9px] tracking-[0.22em] uppercase text-amber/60 font-sans font-light" style={{ marginTop: 1 }}>
            Rev. Dokun Idowu
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.href, item.external)}
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
            <a href="https://www.facebook.com/iamdokunidowu" target="_blank" rel="noopener noreferrer"
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
            <a href="https://youtube.com/@RhemaNigeria" target="_blank" rel="noopener noreferrer"
              className="text-parchment/50 hover:text-red-500 transition-colors duration-200" aria-label="YouTube">
              <svg width="17" height="12" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/>
                <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
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
              onClick={() => scrollTo(item.href, item.external)}
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
