"use client";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

interface Sermon {
  _id: string;
  title: string;
  youtubeId: string;
  category: "conference" | "church" | "other";
  venue?: string;
  year?: string;
  description?: string;
  thumbnail?: { asset: { url: string } };
}

// ── Approved videos per client brief ─────────────────────────────────────────
// ✅ Rhema Conferences  ✅ Churches where he preached  ✅ Other
// ❌ Healing School — ALL excluded
// Note: xu5alIBdtCg removed (God's Medicine = Healing School category)
// Note: 2021 Lagos Day 2 link was a broken Google Search URL — excluded
const ALL_SERMONS: Sermon[] = [
  // ── CONFERENCES ──────────────────────────────────────────────────────────
  {
    _id: "c1",
    title: "Rhema Conference 2023 — Day 2",
    youtubeId: "FUlRpX6WqJc",
    category: "conference",
    venue: "Rhema Conference · Abuja",
    year: "2023",
    description: "Day 2 of the Rhema Conference Faith Seminar in Abuja — extended teaching by Rev. Dokun Idowu.",
  },
  {
    _id: "c2",
    title: "Rhema Conference 2023 — Day 3",
    youtubeId: "13wMWNOiDjg",
    category: "conference",
    venue: "Rhema Conference · Abuja",
    year: "2023",
    description: "Day 3 of the Rhema Conference Faith Seminar in Abuja.",
  },
  {
    _id: "c3",
    title: "Rhema Conference 2023 — Day 4",
    youtubeId: "wKllFYEcYXI",
    category: "conference",
    venue: "Rhema Conference · Abuja",
    year: "2023",
    description: "Day 4 of the Rhema Conference Faith Seminar in Abuja.",
  },
  {
    _id: "c4",
    title: "Rhema Conference 2022 — Day 3",
    youtubeId: "GoKRorn2daY",
    category: "conference",
    venue: "Rhema Conference · Port Harcourt",
    year: "2022",
    description: "Day 3 of the Rhema Conference Faith Seminar in Port Harcourt.",
  },
  {
    _id: "c5",
    title: "Rhema Conference 2022 — Day 4",
    youtubeId: "dRiT7uNpSkU",
    category: "conference",
    venue: "Rhema Conference · Port Harcourt",
    year: "2022",
    description: "Day 4 of the Rhema Conference Faith Seminar in Port Harcourt.",
  },
  {
    _id: "c6",
    title: "Rhema Conference 2021 — Day 3",
    youtubeId: "rxKx7LzXKQs",
    category: "conference",
    venue: "Rhema Conference · Lagos",
    year: "2021",
    description: "Day 3 of the Rhema Conference Faith Seminar in Lagos.",
  },
  {
    _id: "c7",
    title: "Rhema Conference 2021 — Day 4",
    youtubeId: "EIPx_vo22hs",
    category: "conference",
    venue: "Rhema Conference · Lagos",
    year: "2021",
    description: "Day 4 of the Rhema Conference Faith Seminar in Lagos.",
  },
  // ── CHURCHES ─────────────────────────────────────────────────────────────
  {
    _id: "ch1",
    title: "Live Teaching",
    youtubeId: "MQokt0F5Scs",
    category: "church",
    venue: "Rhema Bible Training Centre",
    description: "Expect to be richly blessed as Rev. Dokun Idowu ministers in a practical way.",
  },
  // ── OTHER ─────────────────────────────────────────────────────────────────
  {
    _id: "o1",
    title: "Our Identity in Christ",
    youtubeId: "C7cUk1MkFA0",
    category: "other",
    venue: "Open Heaven · Accrington",
    description: "A powerful teaching on who we are in Christ — delivered at Open Heaven Church, Accrington.",
  },
  {
    _id: "o2",
    title: "True Worship",
    youtubeId: "WuP65UIetl8",
    category: "other",
    venue: "Worship Without Limits",
    description: "Rev. Dokun Idowu on the heart and practice of true worship — from the Worship Without Limits gathering.",
  },
  {
    _id: "o3",
    title: "Faith, Healing & Prosperity — Day 2",
    youtubeId: "57-kyx8iCi0",
    category: "other",
    venue: "Harvest Reapers",
    description: "Day 2 of the Faith, Healing & Prosperity teaching series at Harvest Reapers.",
  },
];

const CATEGORIES = [
  { id: "all",        label: "All Messages",  icon: "✦" },
  { id: "conference", label: "Conferences",   icon: "◈" },
  { id: "church",     label: "Churches",      icon: "◆" },
  { id: "other",      label: "Other",         icon: "◉" },
] as const;
type CategoryId = typeof CATEGORIES[number]["id"];

// ── Video Modal ───────────────────────────────────────────────────────────────
function VideoModal({ sermon, onClose }: { sermon: Sermon; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 lg:p-10"
      style={{ background: "rgba(42,27,18,0.97)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-sans mb-4 transition-colors"
          style={{ color: "rgba(245,239,224,0.5)" }}
        >
          &#8592; Close
        </button>

        <div className="relative bg-espresso" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={sermon.title}
          />
        </div>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            {sermon.venue && (
              <p className="text-[10px] tracking-[0.2em] uppercase text-amber font-sans font-semibold mb-1">
                {sermon.venue}{sermon.year ? ` · ${sermon.year}` : ""}
              </p>
            )}
            <h3 className="text-xl font-bold text-parchment" style={{ fontFamily: "var(--font-display)" }}>
              {sermon.title}
            </h3>
            {sermon.description && (
              <p className="text-sm font-sans mt-2 leading-relaxed" style={{ color: "rgba(245,239,224,0.5)" }}>
                {sermon.description}
              </p>
            )}
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-sans font-semibold transition-colors flex-shrink-0"
            style={{ color: "rgba(245,239,224,0.4)" }}
          >
            <svg width="16" height="11" viewBox="0 0 24 17">
              <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/>
              <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
            </svg>
            Watch on YouTube
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// ── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({ sermon, onClick, index }: { sermon: Sermon; onClick: () => void; index: number }) {
  const thumbUrl = sermon.thumbnail?.asset?.url
    || `https://i.ytimg.com/vi/${sermon.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-espresso mb-4 flex-shrink-0" style={{ aspectRatio: "16/9" }}>
        <Image
          src={thumbUrl}
          alt={sermon.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          unoptimized
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top, rgba(42,27,18,0.75), transparent)" }}
        />
        {/* Play btn */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
            style={{ background: "rgba(245,239,224,0.95)" }}>
            <svg className="w-5 h-5 ml-1" style={{ fill: "#2A1B12" }} viewBox="0 0 24 24">
              <polygon points="6,4 20,12 6,20"/>
            </svg>
          </div>
        </div>
        {/* Amber bottom bar on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        {/* Year badge */}
        {sermon.year && (
          <div className="absolute top-3 right-3 bg-mahogany/80 backdrop-blur-sm px-2 py-0.5">
            <span className="text-[9px] tracking-[0.14em] uppercase text-amber font-sans font-semibold">
              {sermon.year}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      {sermon.venue && (
        <p className="text-[10px] tracking-[0.18em] uppercase text-amber font-sans font-semibold mb-1.5">
          {sermon.venue}
        </p>
      )}
      <h3
        className="text-base font-bold text-espresso leading-snug mb-2 transition-colors duration-200 group-hover:text-ember"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {sermon.title}
      </h3>
      {sermon.description && (
        <p className="text-sm text-umber/65 font-sans leading-relaxed line-clamp-2 flex-1">
          {sermon.description}
        </p>
      )}
      <div className="flex items-center gap-1.5 mt-3 text-[11px] font-sans font-semibold text-umber/35 group-hover:text-ember transition-colors duration-200">
        <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
        </svg>
        Watch message
      </div>
    </motion.article>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function TeachingsSection({ sermons }: { sermons?: any[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeVideo, setActiveVideo]       = useState<Sermon | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const data = (sermons?.length ? sermons : ALL_SERMONS) as Sermon[];
  const filtered = activeCategory === "all" ? data : data.filter((s) => s.category === activeCategory);

  const counts: Record<string, number> = {
    all: data.length,
    conference: data.filter((s) => s.category === "conference").length,
    church:     data.filter((s) => s.category === "church").length,
    other:      data.filter((s) => s.category === "other").length,
  };

  return (
    <>
      <section id="teachings" className="bg-smoke py-28 lg:py-36" ref={ref}>
        <div className="section-wrap">

          {/* Header */}
          <div className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="section-eyebrow mb-4">The Word</p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <h2 className="text-4xl lg:text-5xl font-bold text-espresso leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                PDee <span className="text-ember italic">Speaks</span>
              </h2>
              <p className="text-umber/60 font-sans text-base max-w-sm leading-relaxed">
                Conferences, church engagements, and ministry sessions by Rev. Dokun Idowu — anointed, practical, and grounded in the Word.
              </p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className={`flex flex-wrap gap-2 mb-12 pb-8 border-b border-sand/40 transition-all duration-700 delay-100 ${inView ? "opacity-100" : "opacity-0"}`}>
            {CATEGORIES.map((cat) => {
              const count = counts[cat.id] ?? 0;
              if (count === 0 && cat.id !== "all") return null;
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-sans font-semibold transition-all duration-200 border ${
                    active
                      ? "bg-espresso text-parchment border-espresso"
                      : "bg-white text-umber border-sand/60 hover:border-amber/60 hover:text-espresso"
                  }`}
                >
                  <span className={active ? "text-amber" : "text-taupe/60"}>{cat.icon}</span>
                  {cat.label}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${active ? "bg-amber/20 text-amber" : "bg-linen text-taupe"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
              >
                {filtered.map((sermon, i) => (
                  <VideoCard
                    key={sermon._id}
                    sermon={sermon}
                    index={i}
                    onClick={() => setActiveVideo(sermon)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <p className="text-umber/40 font-sans text-base">
                  No videos in this category yet.{" "}
                  <button onClick={() => setActiveCategory("all")} className="text-amber underline font-semibold">
                    View all messages
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom bar */}
          <div className="mt-16 pt-10 border-t border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-serif italic text-umber/55 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;Expect to be richly blessed as he ministers in a practical way.&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-taupe/40 font-sans mt-1.5">
                {data.length} messages &bull; More being added
              </p>
            </div>
            <a
              href="https://www.youtube.com/@RhemaNigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-espresso/25 text-espresso font-sans font-semibold text-sm tracking-widest uppercase px-6 py-3.5 hover:border-ember hover:text-ember transition-all duration-200 flex-shrink-0"
            >
              <svg width="18" height="13" viewBox="0 0 24 17">
                <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/>
                <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
              </svg>
              Video Links
            </a>
          </div>

          {/* Ministry Moments */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-amber" />
              <p className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-semibold">Ministry Moments</p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[
                { src: "/images/ministry-preaching-1.jpg", caption: "Teaching at the Rhema Conference", sub: "Isaiah 54 — Growth" },
                { src: "/images/ministry-preaching-2.jpg", caption: "Rev. Dokun at the Pulpit", sub: "Ministering the Word" },
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={photo.src} alt={photo.caption} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.82), rgba(42,27,18,0.08), transparent)" }} />
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-sm text-parchment leading-tight" style={{ fontFamily: "var(--font-display)" }}>{photo.caption}</p>
                    <p className="text-[10px] font-sans tracking-widest uppercase mt-1 text-amber/70">{photo.sub}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-amber/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-amber/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <AnimatePresence>
        {activeVideo && <VideoModal sermon={activeVideo} onClose={() => setActiveVideo(null)} />}
      </AnimatePresence>
    </>
  );
}
