"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface FamilyPhoto {
  _id: string;
  caption?: string;
  photo?: { asset: { url: string } };
}

// Static photos — real + placeholders
const STATIC_PHOTOS = [
  { src: "/images/pastor-dokun.jpg",        caption: "Rev. Dokun Idowu",          sub: "Executive Leader · Rhema Nigeria", span: true },
  { src: "/images/tobore-idowu.jpg",        caption: "Mrs. Tobore Idowu",         sub: "Partner in Ministry",              span: false },
  { src: "/images/ministry-couple.jpg",     caption: "Rev. & Mrs. Idowu",         sub: "Together in the Word",             span: false },
  { src: "/images/family-tobore-son.jpg",   caption: "Mrs. Tobore & Son",         sub: "Family Moments",                   span: false },
  { src: "/images/ministry-graduation.jpg", caption: "Rhema Graduation",          sub: "Raising Kingdom ministers",        span: false },
  { src: null,                              caption: "Family Portrait",            sub: "Upload via CMS",                   span: false },
];

export default function FamilySection({ photos }: { photos?: FamilyPhoto[] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const hasCmsPhotos = photos && photos.length > 0;

  const items = hasCmsPhotos
    ? photos.map((p, i) => ({ src: p.photo?.asset?.url || null, caption: p.caption || "", sub: "", span: i === 0 }))
    : STATIC_PHOTOS;

  return (
    <section id="family" className="bg-linen py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div className="section-wrap">
        {/* Header */}
        <div className={`max-w-xl mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="section-eyebrow mb-5">Heart &amp; Home</p>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Idowu <em className="text-ember italic">Family</em>
          </h2>
          <div className="warm-divider" />
          <p className="text-umber/70 font-sans font-light leading-relaxed text-[15px]">
            Behind every ministry is a home. Rev. Dokun Idowu is married to{" "}
            <strong className="font-medium text-espresso">Mrs. Tobore Idowu</strong>, and
            together they are blessed with three amazing children. Their family is a
            testament to grace, love, and Kingdom purpose.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {items.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden transition-all duration-700 ${photo.span ? "row-span-2" : ""}`}
              style={{ transitionDelay: `${i * 80}ms`, opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.97)" }}
            >
              {photo.src ? (
                <div className={`relative group ${photo.span ? "aspect-[3/5]" : "aspect-[4/3]"}`}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mahogany/85 to-transparent p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-parchment text-xs font-sans font-medium tracking-wide">{photo.caption}</p>
                    {photo.sub && <p className="text-amber/70 text-[10px] font-sans tracking-widest uppercase mt-0.5">{photo.sub}</p>}
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div
                  className={`relative bg-gradient-to-br from-sand/40 to-taupe/20 border border-sand/60
                              flex flex-col items-center justify-center gap-3 text-taupe/50
                              hover:border-amber/40 transition-colors duration-300 ${photo.span ? "aspect-[3/5]" : "aspect-[4/3]"}`}
                >
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "linear-gradient(rgba(180,164,138,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(180,164,138,0.3) 1px,transparent 1px)", backgroundSize: "28px 28px" }}
                  />
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-amber/30" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-amber/30" />
                  <svg className="relative z-10 opacity-30" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21,15 16,10 5,21" />
                  </svg>
                  <p className="relative z-10 text-[10px] font-sans font-medium tracking-wider text-umber/40 uppercase">{photo.caption}</p>
                  <p className="absolute bottom-3 text-[9px] tracking-[0.14em] uppercase text-amber/30 font-sans">Upload via CMS</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scripture footer */}
        <div className={`mt-14 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="font-serif italic text-umber/50 text-base max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
            &ldquo;He is married to Mrs. Tobore Idowu &amp; they are blessed with three amazing children.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-8 h-px bg-amber/30" />
            <span className="text-amber/40 text-sm">&#10022;</span>
            <div className="w-8 h-px bg-amber/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
