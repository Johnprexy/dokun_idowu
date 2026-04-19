"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface FamilyPhoto {
  _id: string;
  caption?: string;
  photo?: { asset: { url: string } };
}

// ── Current approved photos ───────────────────────────────────────────────────
// Removed: pastor-dokun.jpg (blue suit), ministry-graduation.jpg,
//          family-tobore-son.jpg, tobore-idowu.jpg (old)
// New photos added: pic5.jpeg, pic6.jpeg
const STATIC_PHOTOS = [
  {
    src: "/images/pic6.jpeg",
    caption: "Rev. Dokun Idowu",
    sub: "PDee · Executive Leader",
    size: "tall",   // spans 2 rows
    pos: "center top",
  },
  {
    src: "/images/tobore-idowu.jpg",
    caption: "Mrs. Tobore Idowu",
    sub: "Partner in Ministry",
    size: "normal",
    pos: "center top",
  },
  {
    src: "/images/ministry-couple.jpg",
    caption: "Rev. & Mrs. Idowu",
    sub: "Together in the Word",
    size: "normal",
    pos: "center 30%",
  },
  {
    src: "/images/pic5.jpeg",
    caption: "Rev. Dokun Idowu",
    sub: "Thoughtful · Purposeful",
    size: "wide",   // spans 2 cols
    pos: "center 25%",
  },
  {
    src: "/images/pic3.jpeg",
    caption: "Rev. Dokun Idowu",
    sub: "Joy in Ministry",
    size: "normal",
    pos: "center 30%",
  },
  {
    src: "/images/pic2.jpeg",
    caption: "Rev. Dokun Idowu",
    sub: "Relaxed · Approachable",
    size: "normal",
    pos: "center 25%",
  },
];

// Placeholder card shown when more photos are expected
const PLACEHOLDER = {
  caption: "More photos coming soon",
  sub: "Family · Ministry · Life",
};

export default function FamilySection({ photos }: { photos?: FamilyPhoto[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const hasCmsPhotos = photos && photos.length > 0;

  const items = hasCmsPhotos
    ? photos.map((p, i) => ({
        src: p.photo?.asset?.url || null,
        caption: p.caption || "",
        sub: "",
        size: i === 0 ? "tall" : "normal",
        pos: "center top",
      }))
    : STATIC_PHOTOS;

  return (
    <section id="family" className="bg-linen py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div className="section-wrap">

        {/* ── Header ── */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="max-w-xl">
            <p className="section-eyebrow mb-5">Heart &amp; Home</p>
            <h2 className="font-bold text-4xl lg:text-5xl text-espresso leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              The Idowu{" "}
              <em className="text-ember italic">Family</em>
            </h2>
            <div className="w-10 h-0.5 bg-amber mb-6" />
            <p className="text-umber/70 font-sans leading-relaxed text-base">
              Behind every ministry is a home. Rev. Dokun Idowu is married to{" "}
              <strong className="font-semibold text-espresso">Mrs. Tobore Idowu</strong>, and
              together they are blessed with three amazing children — a family grounded in grace, love, and Kingdom purpose.
            </p>
          </div>
          {/* Quote */}
          <blockquote className="lg:max-w-xs border-l-2 border-amber pl-5 flex-shrink-0">
            <p className="font-serif italic text-umber/60 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;He is married to Mrs. Tobore Idowu &amp; they are blessed with three amazing children.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── Masonry-style editorial grid ── */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[220px]">

          {items.map((photo, i) => {
            const colSpan = photo.size === "wide" ? "col-span-8" : photo.size === "tall" ? "col-span-4" : "col-span-4";
            const rowSpan = photo.size === "tall" ? "row-span-2" : photo.size === "wide" ? "row-span-1" : "row-span-1";
            const delay = `${i * 70}ms`;

            return (
              <div
                key={i}
                className={`${colSpan} ${rowSpan} relative overflow-hidden group`}
                style={{
                  transitionDelay: delay,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
                }}
              >
                {photo.src ? (
                  <>
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: photo.pos }}
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mahogany/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    {/* Amber top bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    {/* Caption */}
                    <div className="absolute bottom-0 inset-x-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-parchment font-semibold text-sm font-sans leading-tight">{photo.caption}</p>
                      {photo.sub && (
                        <p className="text-amber/70 text-[9px] font-sans tracking-[0.18em] uppercase mt-1">{photo.sub}</p>
                      )}
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-amber/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  /* Placeholder */
                  <div className="absolute inset-0 bg-gradient-to-br from-sand/30 to-taupe/10 border border-dashed border-sand/60 flex flex-col items-center justify-center gap-3">
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: "linear-gradient(rgba(180,164,138,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(180,164,138,0.4) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                    <svg className="opacity-20" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/>
                    </svg>
                    <p className="text-[10px] font-sans tracking-widest uppercase text-umber/30">Coming soon</p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Placeholder slot — "more photos coming" */}
          <div className="col-span-4 row-span-1 relative overflow-hidden"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ease 490ms, transform 0.7s ease 490ms` }}>
            <div className="absolute inset-0 bg-mahogany/5 border border-dashed border-amber/20 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="text-amber/40 text-2xl">✦</span>
              <p className="text-[10px] font-sans tracking-widest uppercase text-umber/30 leading-relaxed">{PLACEHOLDER.caption}</p>
              <p className="text-[9px] font-sans tracking-widest uppercase text-amber/30">{PLACEHOLDER.sub}</p>
            </div>
          </div>

        </div>

        {/* ── Bottom strip ── */}
        <div className={`mt-16 pt-10 border-t border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div>
            <p className="font-serif italic text-umber/55 text-base" style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;A home built on grace, love, and Kingdom purpose.&rdquo;
            </p>
            <p className="text-[11px] tracking-widest uppercase text-taupe/40 font-sans mt-1.5">
              More photos being added
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 border border-espresso/30 text-espresso font-sans font-semibold text-sm tracking-widest uppercase px-6 py-3.5 hover:border-ember hover:text-ember transition-all flex-shrink-0">
            Connect with PDee →
          </Link>
        </div>

      </div>
    </section>
  );
}
