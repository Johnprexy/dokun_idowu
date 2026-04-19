"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroData {
  heroTagline?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCta1?: string;
  heroCta2?: string;
  heroImage?: { asset: { url: string } };
}

const SCROLLING_TAGS = [
  "Bible Teacher", "Pioneer", "Preacher", "Executive Leader",
  "Rhema Nigeria", "Mentor", "Holy Ghost", "Anointed", "Kingdom Builder",
];


export default function HeroSection({ data }: { data?: HeroData }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const imgSrc = data?.heroImage?.asset?.url || "/images/hero-image.jpeg";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-mahogany grain-overlay"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mahogany via-espresso/95 to-mahogany" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(196,98,45,0.10)_0%,transparent_60%)]" />

      {/* ── PHOTO — right half, full height, object-center so face is centred ── */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none">
        <Image
          src={imgSrc}
          alt="Rev. Dokun Idowu"
          fill
          className="object-cover object-[center_top]"
          style={{ opacity: 0.55 }}
          priority
        />
        {/* Strong left-to-right fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-mahogany via-mahogany/75 lg:via-mahogany/50 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-transparent to-transparent" />
      </div>

      {/* ── CONTENT — split layout: text left, space right ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-32 pb-24 max-w-none">

        {/* Eyebrow */}
        <div className={`section-eyebrow mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {data?.heroTagline || "Anointed Bible Teacher & Pioneer"}
        </div>

        {/* Name — large, fills left column */}
        <div className={`transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1
            className="font-display font-black text-parchment leading-[0.88] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 10vw, 9.5rem)" }}
          >
            Rev.
            <span className="block text-amber italic">Dokun</span>
            <span className="block text-parchment">Idowu</span>
          </h1>
          {/* PDee brand tag */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-px bg-amber/50" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-amber/70 font-sans font-medium">
              &ldquo;PDee&rdquo;
            </span>
            <div className="w-8 h-px bg-amber/30" />
          </div>
        </div>

        {/* Divider */}
        <div className={`flex items-center gap-4 my-7 transition-all duration-700 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <div className="w-10 h-px bg-amber" />
          <span className="text-amber">&#10022;</span>
          <div className="w-10 h-px bg-amber/40" />
        </div>

        {/* Subtitle — tighter max-width so it doesn't overlap the photo on desktop */}
        <p className={`font-sans font-light text-parchment/65 leading-relaxed max-w-sm text-[15px] lg:text-base mb-10 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {data?.heroSubtitle ||
            "Executive Leader at Rhema Nigeria, charter class member, gifted pioneer — graced by God for the gifts of the Spirit and the move of the Holy Ghost."}
        </p>

        {/* CTAs */}
        <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-[400ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href="/teachings" className="btn-primary">
            {data?.heroCta1 || "Watch Teachings"} &rarr;
          </a>
          <a
            href="/mentorship"
            className="btn-outline text-parchment border-parchment/20 hover:border-amber hover:text-amber"
          >
            {data?.heroCta2 || "Mentorship Platform"}
          </a>
        </div>

        {/* Stats */}
        <div className={`flex gap-8 lg:gap-12 mt-14 pt-8 border-t border-amber/10 transition-all duration-700 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {[
            { num: "25+",  label: "Years in Ministry" },
            { num: "1998", label: "First Pioneer Effort" },
            { num: "RBTC", label: "Charter Class Member" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl lg:text-3xl text-amber font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {stat.num}
              </p>
              <p className="text-[10px] tracking-[0.14em] uppercase text-parchment/40 mt-1 font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling tag strip */}
      <div className="relative z-10 border-t border-amber/10 py-3 overflow-hidden bg-espresso/40 backdrop-blur-sm">
        <div className="marquee-track">
          {[...SCROLLING_TAGS, ...SCROLLING_TAGS].map((tag, i) => (
            <span key={i} className="text-[10px] tracking-[0.2em] uppercase text-amber/50 font-sans whitespace-nowrap px-8">
              {tag} <span className="text-amber/30 mx-2">&#10022;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40 z-10">
        <span className="text-[9px] tracking-[0.2em] uppercase text-parchment font-sans">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-parchment/60 to-transparent" />
      </div>
    </section>
  );
}
