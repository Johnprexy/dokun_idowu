"use client";
// src/components/sections/HeroSection.tsx
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

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function HeroSection({ data }: { data?: HeroData }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-mahogany grain-overlay"
    >
      {/* Background texture layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-mahogany via-espresso/95 to-mahogany" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(196,98,45,0.12)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(212,147,58,0.06)_0%,transparent_50%)]" />

      {/* Decorative vertical line */}
      <div className="absolute left-[5%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber/20 to-transparent hidden lg:block" />

      {/* Hero Image placeholder / actual */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[52%] pointer-events-none">
        {data?.heroImage?.asset?.url ? (
          <Image
            src={data.heroImage.asset.url}
            alt="Rev. Dokun Idowu"
            fill
            className="object-cover object-top opacity-30 lg:opacity-45"
            priority
          />
        ) : (
          <Image
            src="/images/pastor-dokun.jpg"
            alt="Rev. Dokun Idowu"
            fill
            className="object-cover object-top opacity-35 lg:opacity-50"
            priority
          />
        )}
        {/* Gradient mask over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-mahogany via-mahogany/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center section-wrap pt-32 pb-24">
        {/* Eyebrow */}
        <div
          className={`section-eyebrow mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {data?.heroTagline || "Anointed Bible Teacher & Pioneer"}
        </div>

        {/* Main title */}
        <div
          className={`transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            className="font-display font-black text-parchment leading-[0.92] tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
            }}
          >
            {data?.heroTitle ? (
              data.heroTitle
            ) : (
              <>
                Rev.{" "}
                <span className="block text-amber italic">
                  Dokun
                </span>
                <span className="block text-parchment">
                  Idowu
                </span>
              </>
            )}
          </h1>
        </div>

        {/* Decorative divider */}
        <div
          className={`flex items-center gap-4 my-8 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-12 h-px bg-amber" />
          <span className="text-amber text-lg">✦</span>
          <div className="w-12 h-px bg-amber/40" />
        </div>

        {/* Subtitle */}
        <p
          className={`font-sans font-light text-parchment/60 leading-relaxed max-w-md text-base lg:text-lg mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {data?.heroSubtitle ||
            "Executive Leader at Rhema Nigeria, charter class member, gifted pioneer — graced by God for the gifts of the Spirit and the move of the Holy Ghost."}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-[400ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button onClick={() => scrollTo("teachings")} className="btn-primary">
            {data?.heroCta1 || "Watch Teachings"} →
          </button>
          <button onClick={() => scrollTo("mentorship")} className="btn-outline text-parchment border-parchment/20 hover:border-amber hover:text-amber">
            {data?.heroCta2 || "Mentorship Platform"}
          </button>
        </div>

        {/* Stats row */}
        <div
          className={`flex gap-10 mt-16 pt-10 border-t border-amber/10 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { num: "25+",  label: "Years in Ministry" },
            { num: "1998", label: "First Pioneer Effort" },
            { num: "RBTC", label: "Charter Class Member" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="font-display text-2xl lg:text-3xl text-amber font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
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
            <span
              key={i}
              className="text-[10px] tracking-[0.2em] uppercase text-amber/50 font-sans whitespace-nowrap px-8"
            >
              {tag} <span className="text-amber/30 mx-2">✦</span>
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
