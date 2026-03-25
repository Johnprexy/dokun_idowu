// src/components/layout/Footer.tsx
"use client";


const QUICK = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Teachings",  href: "#teachings" },
  { label: "Events",     href: "/events" },
  { label: "Itinerary",  href: "/itinerary" },
  { label: "Give",       href: "/give" },
  { label: "Contact",    href: "#contact" },
];
const MINISTRY = [
  { label: "Rhema Nigeria",          href: "https://rhemanigeria.com" },
  { label: "Kenneth Hagin Ministries", href: "https://www.rhema.org" },
  { label: "Rhema Ghana",            href: "https://facebook.com/rhemaghana1" },
];

const scrollTo = (id: string) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-mahogany text-parchment/50 border-t border-amber/10">
      {/* Top strip */}
      <div className="section-wrap py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* PDee logo — matches navbar */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "1px", lineHeight: 1, marginBottom: 4 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 900, fontStyle: "italic", color: "#C8A84B", letterSpacing: "-0.02em" }}>P</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 900, fontStyle: "italic", color: "#F5EFE0", letterSpacing: "-0.02em" }}>Dee</span>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8A84B", display: "inline-block", marginLeft: 3, marginBottom: 5 }} />
            </div>
            <p className="text-[9px] tracking-[0.22em] uppercase text-amber/60 font-sans font-light mb-6">
              Rev. Dokun Idowu
            </p>
            <p className="text-sm leading-relaxed font-sans font-light max-w-xs">
              An anointed Bible teacher, gifted pioneer, graced by God for the gifts of the Spirit and the move of the Holy Ghost.
            </p>
            {/* Social icons row */}
            <div className="flex items-center gap-4 mt-8">
              {/* Instagram */}
              <a href="https://instagram.com/dokun_idowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/iamdokunidowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/DokunIdowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@RhemaNigeria" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-red-500 transition-colors" aria-label="YouTube">
                <svg width="20" height="14" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="currentColor"/>
                  <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h6 className="text-[10px] tracking-[0.2em] uppercase text-amber mb-6 font-sans font-medium">
              Navigate
            </h6>
            <ul className="space-y-3">
              {QUICK.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <a
                      href={item.href}
                      className="text-sm text-parchment/50 hover:text-parchment transition-colors font-sans"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.href.replace("#", ""))}
                      className="text-sm text-parchment/50 hover:text-parchment transition-colors font-sans"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Ministry */}
          <div>
            <h6 className="text-[10px] tracking-[0.2em] uppercase text-amber mb-6 font-sans font-medium">
              Ministry
            </h6>
            <ul className="space-y-3">
              {MINISTRY.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-parchment/50 hover:text-parchment transition-colors font-sans"
                  >
                    {m.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber/10 py-6">
        <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-parchment/30 font-sans">
          <span>© {new Date().getFullYear()} Rev. Dokun Idowu. All rights reserved.</span>
          <span>Designed with purpose. Built for the Kingdom.</span>
        </div>
      </div>
    </footer>
  );
}
