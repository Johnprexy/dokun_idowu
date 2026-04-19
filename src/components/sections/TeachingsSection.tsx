"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

interface Sermon {
  _id: string;
  title: string;
  youtubeId: string;
  category: "conference" | "itinerary" | "podcast";
  venue?: string;
  year?: string;
  description?: string;
  thumbnail?: { asset: { url: string } };
}

// ── Approved videos — Healing School fully excluded ───────────────────────────
// "church" renamed to "itinerary", "other" renamed to "podcast"
const ALL_SERMONS: Sermon[] = [
  // ── CONFERENCES ──────────────────────────────────────────────────────────
  { _id:"c1", title:"Rhema Conference 2023 — Day 2", youtubeId:"FUlRpX6WqJc", category:"conference", venue:"Rhema Conference · Abuja", year:"2023", description:"Day 2 of the Rhema Conference Faith Seminar in Abuja — extended teaching by Rev. Dokun Idowu." },
  { _id:"c2", title:"Rhema Conference 2023 — Day 3", youtubeId:"13wMWNOiDjg", category:"conference", venue:"Rhema Conference · Abuja", year:"2023", description:"Day 3 of the Rhema Conference Faith Seminar in Abuja." },
  { _id:"c3", title:"Rhema Conference 2023 — Day 4", youtubeId:"wKllFYEcYXI", category:"conference", venue:"Rhema Conference · Abuja", year:"2023", description:"Day 4 of the Rhema Conference Faith Seminar in Abuja." },
  { _id:"c4", title:"Rhema Conference 2022 — Day 3", youtubeId:"GoKRorn2daY", category:"conference", venue:"Rhema Conference · Port Harcourt", year:"2022", description:"Day 3 of the Rhema Conference Faith Seminar in Port Harcourt." },
  { _id:"c5", title:"Rhema Conference 2022 — Day 4", youtubeId:"dRiT7uNpSkU", category:"conference", venue:"Rhema Conference · Port Harcourt", year:"2022", description:"Day 4 of the Rhema Conference Faith Seminar in Port Harcourt." },
  { _id:"c6", title:"Rhema Conference 2021 — Day 3", youtubeId:"rxKx7LzXKQs", category:"conference", venue:"Rhema Conference · Lagos", year:"2021", description:"Day 3 of the Rhema Conference Faith Seminar in Lagos." },
  { _id:"c7", title:"Rhema Conference 2021 — Day 4", youtubeId:"EIPx_vo22hs", category:"conference", venue:"Rhema Conference · Lagos", year:"2021", description:"Day 4 of the Rhema Conference Faith Seminar in Lagos." },
  // ── ITINERARY (ministry engagements / churches) ──────────────────────────
  { _id:"i1", title:"Live Teaching", youtubeId:"MQokt0F5Scs", category:"itinerary", venue:"Rhema Bible Training Centre", description:"Expect to be richly blessed as Rev. Dokun Idowu ministers in a practical way." },
  // ── PODCAST / OTHER ──────────────────────────────────────────────────────
  { _id:"p1", title:"Our Identity in Christ", youtubeId:"C7cUk1MkFA0", category:"podcast", venue:"Open Heaven · Accrington", description:"A powerful teaching on who we are in Christ — delivered at Open Heaven Church, Accrington." },
  { _id:"p2", title:"True Worship", youtubeId:"WuP65UIetl8", category:"podcast", venue:"Worship Without Limits", description:"Rev. Dokun Idowu on the heart and practice of true worship." },
  { _id:"p3", title:"Faith, Healing & Prosperity — Day 2", youtubeId:"57-kyx8iCi0", category:"podcast", venue:"Harvest Reapers", description:"Day 2 of the Faith, Healing & Prosperity teaching series at Harvest Reapers." },
];

// ── Category config with cover images (Mark Hankins card style) ───────────────
const CATEGORY_CONFIG = {
  conference: {
    label: "Conferences",
    subtitle: "Annual faith seminars",
    cover: "/images/ministry-preaching-1.jpg",
    accent: "#C8A84B",
  },
  itinerary: {
    label: "Itinerary",
    subtitle: "Ministry engagements",
    cover: "/images/pic6.jpeg",
    accent: "#C4622D",
  },
  podcast: {
    label: "Podcast",
    subtitle: "Special sessions",
    cover: "/images/pic5.jpeg",
    accent: "#7A6248",
  },
} as const;

const TABS = [
  { id: "all" as const,        label: "All Messages" },
  { id: "conference" as const, label: "Conferences" },
  { id: "itinerary" as const,  label: "Itinerary" },
  { id: "podcast" as const,    label: "Podcast" },
];
type TabId = typeof TABS[number]["id"];

// ── Video Modal ───────────────────────────────────────────────────────────────
function VideoModal({ sermon, onClose }: { sermon: Sermon; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 lg:p-10"
      style={{ background: "rgba(42,27,18,0.97)", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <motion.div className="w-full max-w-5xl"
        initial={{ opacity:0, scale:0.95, y:20 }}
        animate={{ opacity:1, scale:1, y:0 }}
        exit={{ opacity:0, scale:0.95 }}
        transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="flex items-center gap-2 text-sm font-sans mb-4 transition-colors" style={{ color:"rgba(245,239,224,0.5)" }}>
          ← Close
        </button>
        <div className="relative bg-espresso" style={{ paddingBottom:"56.25%" }}>
          <iframe src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="absolute inset-0 w-full h-full" frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen" allowFullScreen title={sermon.title} />
        </div>
        <div className="mt-5 flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-1">
            {sermon.venue && (
              <p className="text-[10px] tracking-[0.2em] uppercase text-amber font-sans font-semibold mb-1">
                {sermon.venue}{sermon.year ? ` · ${sermon.year}` : ""}
              </p>
            )}
            <h3 className="text-xl font-bold text-parchment" style={{ fontFamily:"var(--font-display)" }}>{sermon.title}</h3>
            {sermon.description && <p className="text-sm font-sans mt-2 leading-relaxed" style={{ color:"rgba(245,239,224,0.5)" }}>{sermon.description}</p>}
          </div>
          <a href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-sans font-semibold flex-shrink-0 transition-colors hover:text-amber" style={{ color:"rgba(245,239,224,0.4)" }}>
            <svg width="16" height="11" viewBox="0 0 24 17"><path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/><path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/></svg>
            Watch on YouTube
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// ── Category Cover Card (Mark Hankins style) ──────────────────────────────────
function CategoryCard({ categoryId, count, onSelect }: { categoryId: "conference"|"itinerary"|"podcast"; count: number; onSelect: () => void }) {
  const cfg = CATEGORY_CONFIG[categoryId];
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
      onClick={onSelect}
      className="group cursor-pointer relative overflow-hidden"
      style={{ aspectRatio: "1/1" }}
    >
      {/* Background image */}
      <Image src={cfg.cover} alt={cfg.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.92) 0%, rgba(42,27,18,0.5) 50%, rgba(42,27,18,0.2) 100%)" }} />
      {/* Accent colour bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: cfg.accent }} />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="text-[9px] tracking-[0.22em] uppercase font-sans font-semibold mb-1.5" style={{ color: cfg.accent }}>
          {count} {count === 1 ? "message" : "messages"}
        </p>
        <h3 className="text-2xl lg:text-3xl font-black text-parchment leading-none mb-1" style={{ fontFamily:"var(--font-display)", letterSpacing:"-0.01em" }}>
          {cfg.label}
        </h3>
        <p className="text-parchment/50 text-xs font-sans">{cfg.subtitle}</p>
      </div>
      {/* Arrow on hover */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-parchment/0 group-hover:bg-parchment/90 flex items-center justify-center transition-all duration-300">
        <span className="text-mahogany font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </div>
    </motion.div>
  );
}

// ── Video list item ───────────────────────────────────────────────────────────
function VideoRow({ sermon, onClick, index }: { sermon: Sermon; onClick: () => void; index: number }) {
  const thumbUrl = sermon.thumbnail?.asset?.url || `https://i.ytimg.com/vi/${sermon.youtubeId}/mqdefault.jpg`;
  const cfg = CATEGORY_CONFIG[sermon.category];

  return (
    <motion.div
      initial={{ opacity:0, x:-16 }}
      animate={{ opacity:1, x:0 }}
      exit={{ opacity:0, x:8 }}
      transition={{ duration:0.35, delay: index * 0.05, ease:[0.22,1,0.36,1] }}
      onClick={onClick}
      className="group flex items-start gap-4 p-4 cursor-pointer border-b border-sand/30 hover:bg-linen/60 transition-colors duration-200"
    >
      {/* Thumbnail */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ width:120, aspectRatio:"16/9" }}>
        <Image src={thumbUrl} alt={sermon.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
        <div className="absolute inset-0 flex items-center justify-center bg-mahogany/0 group-hover:bg-mahogany/40 transition-colors duration-300">
          <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fill:"white" }} viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></svg>
        </div>
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-[9px] tracking-[0.16em] uppercase font-sans font-bold px-2 py-0.5" style={{ background: cfg.accent + "20", color: cfg.accent }}>
            {cfg.label}
          </span>
          {sermon.year && <span className="text-[9px] tracking-widest uppercase text-taupe/50 font-sans">{sermon.year}</span>}
        </div>
        <h4 className="font-bold text-espresso text-base leading-snug group-hover:text-ember transition-colors truncate" style={{ fontFamily:"var(--font-display)" }}>
          {sermon.title}
        </h4>
        {sermon.venue && <p className="text-xs text-umber/55 font-sans mt-0.5">{sermon.venue}</p>}
      </div>
      {/* Play arrow */}
      <div className="flex-shrink-0 pt-1 text-taupe/30 group-hover:text-ember transition-colors text-lg">→</div>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function TeachingsSection({ sermons, compact = false, standalone = false }: { sermons?: any[]; compact?: boolean; standalone?: boolean }) {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [showGrid, setShowGrid] = useState(true); // true = category grid, false = list
  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const data = (sermons?.length ? sermons : ALL_SERMONS) as Sermon[];
  const counts = {
    all: data.length,
    conference: data.filter(s => s.category === "conference").length,
    itinerary:  data.filter(s => s.category === "itinerary").length,
    podcast:    data.filter(s => s.category === "podcast").length,
  };

  const filtered = activeTab === "all" ? data : data.filter(s => s.category === activeTab);

  const handleCategorySelect = (cat: "conference"|"itinerary"|"podcast") => {
    setActiveTab(cat);
    setShowGrid(false);
  };

  return (
    <>
      {/* ── Standalone page hero (only on /teachings page) ── */}
      {standalone && (
        <div className="relative overflow-hidden bg-espresso" style={{ minHeight: "52vh" }}>
          <Image src="/images/ministry-preaching-1.jpg" alt="" fill
            className="object-cover object-[center_30%]" style={{ opacity: 0.25 }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(61,43,31,0.7) 0%, rgba(61,43,31,0.98) 100%)" }} />
          <div className="absolute top-0 inset-x-0 h-1 bg-amber" />
          <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pt-36 pb-16 max-w-7xl mx-auto w-full">
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-amber" /> The Word
            </p>
            <h1 className="font-bold text-parchment leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              PDee <span className="text-amber italic">Speaks</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-5" />
            <p className="text-parchment/50 font-sans text-lg leading-relaxed max-w-xl">
              Conferences, ministry engagements, and podcast sessions — filtered by category, ready to watch.
            </p>
          </div>
        </div>
      )}

      <section id="teachings" className="bg-smoke py-20 lg:py-28" ref={ref}>
        <div className="section-wrap">

          {/* ── Header (homepage only) ── */}
          {!standalone && (
          <div className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="section-eyebrow mb-4">The Word</p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <h2 className="text-4xl lg:text-5xl font-bold text-espresso leading-tight" style={{ fontFamily:"var(--font-display)" }}>
                PDee <span className="text-ember italic">Speaks</span>
              </h2>
              <div className="flex items-center gap-3">
                <button onClick={() => setShowGrid(true)}
                  className={`text-xs font-sans font-semibold px-3 py-2 border transition-colors ${showGrid && activeTab==="all" ? "bg-espresso text-amber border-espresso" : "border-sand/60 text-umber hover:border-amber/50"}`}
                  title="Browse by category">
                  ⊞ Browse
                </button>
                <button onClick={() => setShowGrid(false)}
                  className={`text-xs font-sans font-semibold px-3 py-2 border transition-colors ${!showGrid || activeTab!=="all" ? "bg-espresso text-amber border-espresso" : "border-sand/60 text-umber hover:border-amber/50"}`}
                  title="List view">
                  ☰ All
                </button>
              </div>
            </div>
          </div>
          )}

          {/* ── Filter tabs + view toggle (standalone) ── */}
          {standalone && (
            <div className="flex items-center gap-3 mb-8 justify-end">
              <button onClick={() => setShowGrid(true)}
                className={`text-xs font-sans font-semibold px-3 py-2 border transition-colors ${showGrid && activeTab==="all" ? "bg-espresso text-amber border-espresso" : "border-sand/60 text-umber hover:border-amber/50"}`}>
                ⊞ Browse
              </button>
              <button onClick={() => setShowGrid(false)}
                className={`text-xs font-sans font-semibold px-3 py-2 border transition-colors ${!showGrid || activeTab!=="all" ? "bg-espresso text-amber border-espresso" : "border-sand/60 text-umber hover:border-amber/50"}`}>
                ☰ All
              </button>
            </div>
          )}

          {/* ── Filter tabs (list mode) ── */}
          {(!showGrid || activeTab !== "all") && (
            <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
              {TABS.map((tab) => {
                const count = counts[tab.id];
                const active = activeTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => { setActiveTab(tab.id); setShowGrid(false); }}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm font-sans font-semibold transition-all border ${active ? "bg-espresso text-parchment border-espresso" : "bg-white text-umber border-sand/60 hover:border-amber/60"}`}>
                    {tab.label}
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${active ? "bg-amber/20 text-amber" : "bg-linen text-taupe"}`}>{count}</span>
                  </button>
                );
              })}
              <button onClick={() => { setActiveTab("all"); setShowGrid(true); }}
                className="text-xs font-sans font-semibold text-umber/50 hover:text-ember transition-colors px-3">
                ← Browse categories
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* ── Category grid (Mark Hankins style) ── */}
            {showGrid && activeTab === "all" ? (
              <motion.div key="grid"
                initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                transition={{ duration:0.25 }}>
                {/* 3 category cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                  {(["conference","itinerary","podcast"] as const).map((cat, i) => (
                    <motion.div key={cat}
                      initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
                      transition={{ delay: i*0.1, duration:0.5, ease:[0.22,1,0.36,1] }}>
                      <CategoryCard categoryId={cat} count={counts[cat]} onSelect={() => handleCategorySelect(cat)} />
                    </motion.div>
                  ))}
                </div>
                {/* Featured — latest 3 videos preview */}
                <div className="mt-4">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-semibold mb-5 flex items-center gap-3">
                    <span className="w-6 h-px bg-amber" />
                    Latest Messages
                  </p>
                  <div className="bg-white border border-sand/30">
                    {data.slice(0, 4).map((sermon, i) => (
                      <VideoRow key={sermon._id} sermon={sermon} index={i} onClick={() => setActiveVideo(sermon)} />
                    ))}
                  </div>
                  <button onClick={() => setShowGrid(false)}
                    className="mt-4 text-sm font-sans font-semibold text-ember hover:text-mahogany transition-colors flex items-center gap-2">
                    View all {data.length} messages →
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ── List mode ── */
              <motion.div key={activeTab}
                initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                transition={{ duration:0.2 }}>
                {filtered.length > 0 ? (
                  <div className="bg-white border border-sand/30">
                    {filtered.map((sermon, i) => (
                      <VideoRow key={sermon._id} sermon={sermon} index={i} onClick={() => setActiveVideo(sermon)} />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-umber/40 font-sans">No videos in this category yet.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Bottom ── */}
          <div className="mt-12 pt-8 border-t border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="font-serif italic text-umber/55 text-base leading-relaxed" style={{ fontFamily:"var(--font-serif)" }}>
                &ldquo;Expect to be richly blessed as he ministers in a practical way.&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-taupe/40 font-sans mt-1.5">
                {data.length} messages &bull; More being added
              </p>
            </div>
          </div>

          {/* ── Ministry Moments ── */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-amber" />
              <p className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-semibold">Ministry Moments</p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[
                { src:"/images/ministry-preaching-1.jpg", caption:"Rhema Class Lagos", sub:"Teaching the Word" },
                { src:"/images/ministry-preaching-2.jpg", caption:"Rhema Class Lagos", sub:"Ministering at the Pulpit" },
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden" style={{ aspectRatio:"16/9" }}>
                  <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(42,27,18,0.82), rgba(42,27,18,0.08), transparent)" }} />
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-sm text-parchment leading-tight" style={{ fontFamily:"var(--font-display)" }}>{photo.caption}</p>
                    <p className="text-[10px] font-sans tracking-widest uppercase mt-1 text-amber/70">{photo.sub}</p>
                  </div>
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
