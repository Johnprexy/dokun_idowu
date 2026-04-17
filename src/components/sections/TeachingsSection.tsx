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
  description?: string;
  thumbnail?: { asset: { url: string } };
}

// ─── Confirmed videos — filtered per client brief:
// ✅ Rhema Conferences ✅ Churches where he preached ✅ Other
// ❌ Healing School excluded
const ALL_SERMONS: Sermon[] = [
  {
    _id: "1",
    title: "Growth — Isaiah 54",
    youtubeId: "WuP65UIetl8",
    category: "conference",
    venue: "Rhema Nigeria Conference",
    description: "Rev. Dokun Idowu ministers powerfully on GROWTH from Isaiah 54 — stretching, enlarging, and not sparing. A defining word for every believer.",
  },
  {
    _id: "2",
    title: "Live Teaching",
    youtubeId: "xu5alIBdtCg",
    category: "church",
    venue: "Rhema Live Broadcast",
    description: "A live ministry session with Rev. Dokun Idowu — practical, Spirit-led teaching grounded in the Word.",
  },
  {
    _id: "3",
    title: "Live Teaching",
    youtubeId: "MQokt0F5Scs",
    category: "church",
    venue: "Rhema Bible Training Centre",
    description: "Expect to be richly blessed as Rev. Dokun Idowu ministers in a practical way — anointed, clear, and life-changing.",
  },
];

const CATEGORIES = [
  { id: "all",        label: "All Messages" },
  { id: "conference", label: "Conferences" },
  { id: "church",     label: "Churches" },
  { id: "other",      label: "Other" },
] as const;

type CategoryId = typeof CATEGORIES[number]["id"];

function VideoModal({ sermon, onClose }: { sermon: Sermon; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] bg-mahogany/95 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-parchment/60 hover:text-parchment text-sm font-sans mb-4 transition-colors"
        >
          ← Close
        </button>
        <div className="relative aspect-video bg-espresso">
          <iframe
            src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1&rel=0&color=white&modestbranding=1`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title={sermon.title}
          />
        </div>
        <div className="mt-5 flex items-start gap-4">
          <div>
            {sermon.venue && (
              <p className="text-[10px] tracking-[0.18em] uppercase text-amber font-sans font-semibold mb-1">
                {sermon.venue}
              </p>
            )}
            <h3
              className="text-xl font-bold text-parchment leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {sermon.title}
            </h3>
            {sermon.description && (
              <p className="text-parchment/50 font-sans text-sm mt-2 leading-relaxed max-w-2xl">
                {sermon.description}
              </p>
            )}
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0 flex items-center gap-2 text-xs font-sans font-semibold text-parchment/40 hover:text-amber transition-colors"
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

function VideoCard({ sermon, onClick, index }: { sermon: Sermon; onClick: () => void; index: number }) {
  const thumbUrl = sermon.thumbnail?.asset?.url
    || `https://i.ytimg.com/vi/${sermon.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-espresso mb-4">
        <Image
          src={thumbUrl}
          alt={sermon.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-parchment/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-lg">
            <svg className="w-5 h-5 fill-mahogany ml-1" viewBox="0 0 24 24">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
        </div>

        {/* Duration stripe at bottom */}
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Meta */}
      {sermon.venue && (
        <p className="text-[10px] tracking-[0.18em] uppercase text-amber font-sans font-semibold mb-1.5">
          {sermon.venue}
        </p>
      )}
      <h3
        className="text-lg font-bold text-espresso leading-snug group-hover:text-ember transition-colors mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {sermon.title}
      </h3>
      {sermon.description && (
        <p className="text-umber/70 font-sans text-sm leading-relaxed line-clamp-2">
          {sermon.description}
        </p>
      )}

      {/* Watch label */}
      <div className="flex items-center gap-1.5 mt-3 text-[11px] font-sans font-semibold text-umber/40 group-hover:text-ember transition-colors">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
        </svg>
        Watch message
      </div>
    </motion.div>
  );
}

export default function TeachingsSection({ sermons }: { sermons?: Sermon[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const data = (sermons?.length ? sermons : ALL_SERMONS) as Sermon[];

  const filtered = activeCategory === "all"
    ? data
    : data.filter((s) => s.category === activeCategory);

  // Category counts
  const counts = {
    all: data.length,
    conference: data.filter((s) => s.category === "conference").length,
    church: data.filter((s) => s.category === "church").length,
    other: data.filter((s) => s.category === "other").length,
  };

  return (
    <>
      <section id="teachings" className="bg-smoke py-28 lg:py-36" ref={ref}>
        <div className="section-wrap">

          {/* ── Header ── */}
          <div
            className={`mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="section-eyebrow mb-4">The Word</p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2
                className="text-4xl lg:text-5xl font-bold text-espresso leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                PDee{" "}
                <span className="text-ember italic">Speaks</span>
              </h2>
              <p className="text-umber/60 font-sans text-base max-w-sm leading-relaxed">
                Teachings, conferences, and church ministrations by Rev. Dokun Idowu — anointed, practical, and grounded in the Word.
              </p>
            </div>
          </div>

          {/* ── Filter tabs ── */}
          <div
            className={`flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-sand/40 transition-all duration-700 delay-100 ${inView ? "opacity-100" : "opacity-0"}`}
          >
            {CATEGORIES.map((cat) => {
              const count = counts[cat.id];
              if (count === 0 && cat.id !== "all") return null;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-sans font-semibold transition-all duration-200 border ${
                    activeCategory === cat.id
                      ? "bg-espresso text-amber border-espresso"
                      : "bg-white text-umber border-sand/60 hover:border-amber/50 hover:text-espresso"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 ${
                      activeCategory === cat.id ? "bg-amber/20 text-amber" : "bg-linen text-taupe"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Grid ── */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
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
                  <button onClick={() => setActiveCategory("all")} className="text-amber underline">
                    View all messages
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Notice + CTA ── */}
          <div className="mt-16 pt-10 border-t border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p
                className="font-serif italic text-umber/60 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;Expect to be richly blessed as he ministers in a practical way.&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-taupe/50 font-sans mt-2">
                More videos being added — check back soon
              </p>
            </div>
            <a
              href="https://www.youtube.com/@RhemaNigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-espresso/30 text-espresso font-sans font-semibold text-sm tracking-widest uppercase px-6 py-3.5 hover:border-ember hover:text-ember transition-all duration-200 flex-shrink-0"
            >
              <svg width="18" height="13" viewBox="0 0 24 17">
                <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/>
                <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
              </svg>
              Video Links
            </a>
          </div>

          {/* ── Ministry moments ── */}
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
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mahogany/80 via-mahogany/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-parchment font-semibold text-sm leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {photo.caption}
                    </p>
                    <p className="text-amber/70 text-[10px] font-sans tracking-widest uppercase mt-1">{photo.sub}</p>
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
        {activeVideo && (
          <VideoModal sermon={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
