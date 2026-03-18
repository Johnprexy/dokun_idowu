// src/components/layout/Footer.tsx
"use client";


const QUICK = ["Home", "About", "Teachings", "Mentorship", "Family", "Contact"];
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
            <p
              className="font-display text-2xl text-parchment font-bold mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Rev. Dokun Idowu
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-amber/70 mb-6">
              Executive Leader · Rhema Nigeria
            </p>
            <p className="text-sm leading-relaxed font-sans font-light max-w-xs">
              An anointed Bible teacher, gifted pioneer, and Executive Leader at Rhema Bible Training Centre Nigeria — graced by God for the gifts of the Spirit.
            </p>
            {/* Social row */}
            <div className="flex gap-5 mt-8">
              {[
                { label: "Instagram", href: "https://instagram.com/dokun_idowu" },
                { label: "Facebook", href: "https://www.facebook.com/iamdokunidowu" },
                { label: "X / Twitter", href: "https://x.com/DokunIdowu" },
                { label: "YouTube", href: "https://youtube.com/@RhemaNigeria" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.14em] uppercase text-parchment/40
                             hover:text-amber transition-colors font-sans"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h6 className="text-[10px] tracking-[0.2em] uppercase text-amber mb-6 font-sans font-medium">
              Navigate
            </h6>
            <ul className="space-y-3">
              {QUICK.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(label)}
                    className="text-sm text-parchment/50 hover:text-parchment transition-colors font-sans"
                  >
                    {label}
                  </button>
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
