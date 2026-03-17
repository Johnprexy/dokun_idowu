"use client";
// src/components/sections/FamilySection.tsx
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface FamilyPhoto {
  _id: string;
  caption?: string;
  photo?: { asset: { url: string; metadata?: { dimensions: { width: number; height: number } } } };
}

const PLACEHOLDERS = [
  { label: "Rev. & Mrs. Idowu", sub: "Together in purpose" },
  { label: "Mrs. Tobore Idowu", sub: "Partner in ministry" },
  { label: "The Children",       sub: "Three amazing gifts" },
  { label: "Family Portrait",    sub: "A home built on faith" },
  { label: "Ministry Moments",   sub: "Kingdom family" },
  { label: "Family Gallery",     sub: "Coming soon" },
];

export default function FamilySection({ photos }: { photos?: FamilyPhoto[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const hasPhotos = photos && photos.length > 0;

  return (
    <section id="family" className="bg-linen py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div className="section-wrap">

        {/* Header */}
        <div
          className={`max-w-xl mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="section-eyebrow mb-5">Heart &amp; Home</p>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Idowu{" "}
            <em className="text-ember italic">Family</em>
          </h2>
          <div className="warm-divider" />
          <p className="text-umber/70 font-sans font-light leading-relaxed text-[15px]">
            Behind every ministry is a home. Rev. Dokun Idowu is married to{" "}
            <strong className="font-medium text-espresso">Mrs. Tobore Idowu</strong>, and
            together they are blessed with three amazing children. Their family is a
            testament to grace, love, and Kingdom purpose.
          </p>
        </div>

        {/* Photo grid — masonry-style with CSS grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {hasPhotos
            ? photos!.map((photo, i) => (
                <div
                  key={photo._id}
                  className={`relative overflow-hidden bg-sand/30 transition-all duration-700 ${
                    i === 0 ? "row-span-2" : ""
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  <div className={`relative ${i === 0 ? "aspect-[3/5]" : "aspect-[4/3]"}`}>
                    <Image
                      src={photo.photo!.asset.url}
                      alt={photo.caption || "Family photo"}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Caption overlay */}
                    {photo.caption && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mahogany/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-parchment text-xs font-sans tracking-wide">{photo.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))
            : PLACEHOLDERS.map((p, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden transition-all duration-700 ${
                    i === 0 ? "row-span-2" : ""
                  }`}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "scale(1)" : "scale(0.97)",
                  }}
                >
                  {/* Real photos for Rev. Dokun (slot 0) and Mrs. Tobore (slot 1) */}
                  {i === 0 ? (
                    <div className="relative aspect-[3/5] overflow-hidden">
                      <Image
                        src="/images/pastor-dokun.jpg"
                        alt="Rev. Dokun Idowu"
                        fill
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mahogany/80 to-transparent p-4">
                        <p className="text-parchment text-xs font-sans tracking-wide">Rev. Dokun Idowu</p>
                        <p className="text-amber/70 text-[10px] font-sans tracking-widest uppercase">Executive Leader · Rhema Nigeria</p>
                      </div>
                    </div>
                  ) : i === 1 ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/images/tobore-idowu.jpg"
                        alt="Mrs. Tobore Idowu"
                        fill
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mahogany/80 to-transparent p-4">
                        <p className="text-parchment text-xs font-sans tracking-wide">Mrs. Tobore Idowu</p>
                        <p className="text-amber/70 text-[10px] font-sans tracking-widest uppercase">Partner in Ministry</p>
                      </div>
                    </div>
                  ) : (
                  <div
                    className={`relative bg-gradient-to-br from-sand/40 to-taupe/20 border border-sand/60
                                flex flex-col items-center justify-center gap-3 text-taupe/50
                                hover:border-amber/40 transition-colors duration-300 ${
                                  i === 0 ? "aspect-[3/5]" : "aspect-[4/3]"
                                }`}
                  >
                    <div className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: "linear-gradient(rgba(180,164,138,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(180,164,138,0.2) 1px,transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-amber/30" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-amber/30" />
                    <svg className="relative z-10 opacity-30" width="32" height="32" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="0.7">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                    <div className="relative z-10 text-center px-4">
                      <p className="text-xs font-sans font-medium tracking-wider text-umber/50 uppercase">{p.label}</p>
                      <p className="text-[10px] font-sans text-taupe/40 mt-1">{p.sub}</p>
                    </div>
                    <p className="absolute bottom-3 left-0 right-0 text-center text-[9px] tracking-[0.16em] uppercase text-amber/30 font-sans">Upload via CMS</p>
                  </div>
                  )}
                </div>
              ))}
        </div>

        {/* Scripture footer */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className="font-serif italic text-umber/50 text-base max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            "He is married to Mrs. Tobore Idowu &amp; they are blessed with three amazing children."
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-8 h-px bg-amber/30" />
            <span className="text-amber/40 text-sm">✦</span>
            <div className="w-8 h-px bg-amber/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
