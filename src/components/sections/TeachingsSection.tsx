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
  category: "conference" | "itinerary" | "other";
  venue?: string;
  year?: string;
  description?: string;
  thumbnail?: { asset: { url: string } };
}

const ALL_SERMONS: Sermon[] = [
  // CONFERENCES
  { _id:"c1", title:"Rhema Conference 2023 — Day 2", youtubeId:"FUlRpX6WqJc", category:"conference", venue:"Rhema Conference · Abuja", year:"2023", description:"Day 2 of the Rhema Conference Faith Seminar in Abuja." },
  { _id:"c2", title:"Rhema Conference 2023 — Day 3", youtubeId:"13wMWNOiDjg", category:"conference", venue:"Rhema Conference · Abuja", year:"2023", description:"Day 3 of the Rhema Conference Faith Seminar in Abuja." },
  { _id:"c3", title:"Rhema Conference 2023 — Day 4", youtubeId:"wKllFYEcYXI", category:"conference", venue:"Rhema Conference · Abuja", year:"2023", description:"Day 4 of the Rhema Conference Faith Seminar in Abuja." },
  { _id:"c4", title:"Rhema Conference 2022 — Day 3", youtubeId:"GoKRorn2daY", category:"conference", venue:"Rhema Conference · Port Harcourt", year:"2022", description:"Day 3 of the Rhema Conference Faith Seminar in Port Harcourt." },
  { _id:"c5", title:"Rhema Conference 2022 — Day 4", youtubeId:"dRiT7uNpSkU", category:"conference", venue:"Rhema Conference · Port Harcourt", year:"2022", description:"Day 4 of the Rhema Conference Faith Seminar in Port Harcourt." },
  { _id:"c6", title:"Rhema Conference 2021 — Day 3", youtubeId:"rxKx7LzXKQs", category:"conference", venue:"Rhema Conference · Lagos", year:"2021", description:"Day 3 of the Rhema Conference Faith Seminar in Lagos." },
  { _id:"c7", title:"Rhema Conference 2021 — Day 4", youtubeId:"EIPx_vo22hs", category:"conference", venue:"Rhema Conference · Lagos", year:"2021", description:"Day 4 of the Rhema Conference Faith Seminar in Lagos." },
  // ITINERARY (was "church")
  { _id:"ch1", title:"Live Teaching", youtubeId:"MQokt0F5Scs", category:"itinerary", venue:"Rhema Bible Training Centre", description:"Rev. Dokun Idowu ministers in a practical way." },
  // OTHER
  { _id:"o1", title:"Our Identity in Christ", youtubeId:"C7cUk1MkFA0", category:"other", venue:"Open Heaven · Accrington", description:"A powerful teaching on who we are in Christ." },
  { _id:"o2", title:"True Worship", youtubeId:"WuP65UIetl8", category:"other", venue:"Worship Without Limits", description:"Rev. Dokun Idowu on the heart and practice of true worship." },
  { _id:"o3", title:"Faith, Healing & Prosperity — Day 2", youtubeId:"57-kyx8iCi0", category:"other", venue:"Harvest Reapers", description:"Day 2 of the Faith, Healing & Prosperity series." },
];

// Category card designs — Mark Hankins style
const CATEGORY_CARDS = [
  {
    id: "all",
    label: "All Messages",
    subtitle: "Every teaching",
    image: "/images/hero-image.jpeg",
    accent: "#C8A84B",
    count: ALL_SERMONS.length,
  },
  {
    id: "conference",
    label: "Conferences",
    subtitle: "Rhema Faith Seminars",
    image: "/images/ministry-preaching-1.jpg",
    accent: "#C4622D",
    count: ALL_SERMONS.filter(s => s.category === "conference").length,
  },
  {
    id: "itinerary",
    label: "Itinerary",
    subtitle: "Church engagements",
    image: "/images/ministry-preaching-2.jpg",
    accent: "#7A6248",
    count: ALL_SERMONS.filter(s => s.category === "itinerary").length,
  },
  {
    id: "other",
    label: "Other",
    subtitle: "Special sessions",
    image: "/images/pic2.jpeg",
    accent: "#3D2B1F",
    count: ALL_SERMONS.filter(s => s.category === "other").length,
  },
] as const;

type CategoryId = typeof CATEGORY_CARDS[number]["id"];

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
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="flex items-center gap-2 text-sm font-sans mb-4 text-parchment/50 hover:text-parchment transition-colors">
          ← Close
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
            {sermon.venue && <p className="text-[10px] tracking-[0.2em] uppercase text-amber font-sans font-semibold mb-1">{sermon.venue}{sermon.year ? ` · ${sermon.year}` : ""}</p>}
            <h3 className="text-xl font-bold text-parchment" style={{ fontFamily: "var(--font-display)" }}>{sermon.title}</h3>
            {sermon.description && <p className="text-sm font-sans mt-2 leading-relaxed text-parchment/50">{sermon.description}</p>}
          </div>
          <a href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-sans font-semibold text-parchment/40 hover:text-amber transition-colors flex-shrink-0">
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
  const thumbUrl = sermon.thumbnail?.asset?.url || `https://i.ytimg.com/vi/${sermon.youtubeId}/maxresdefault.jpg`;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative overflow-hidden bg-espresso mb-4 flex-shrink-0" style={{ aspectRatio: "16/9" }}>
        <Image src={thumbUrl} alt={sermon.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" unoptimized />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.75), transparent)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" style={{ background: "rgba(245,239,224,0.95)" }}>
            <svg className="w-5 h-5 ml-1" style={{ fill: "#2A1B12" }} viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></svg>
          </div>
        </div>
        {sermon.year && (
          <div className="absolute top-3 right-3 bg-mahogany/80 px-2 py-0.5">
            <span className="text-[9px] tracking-widest uppercase text-amber font-sans font-semibold">{sermon.year}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
      {sermon.venue && <p className="text-[10px] tracking-[0.18em] uppercase text-amber font-sans font-semibold mb-1.5">{sermon.venue}</p>}
      <h3 className="text-base font-bold text-espresso leading-snug mb-2 group-hover:text-ember transition-colors duration-200" style={{ fontFamily: "var(--font-display)" }}>{sermon.title}</h3>
      {sermon.description && <p className="text-sm text-umber/65 font-sans leading-relaxed line-clamp-2 flex-1">{sermon.description}</p>}
      <div className="flex items-center gap-1.5 mt-3 text-[11px] font-sans font-semibold text-umber/35 group-hover:text-ember transition-colors duration-200">
        <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg>
        Watch message
      </div>
    </motion.article>
  );
}

// ── Category Card (Mark Hankins style) ───────────────────────────────────────
function CategoryCard({ cat, active, onClick }: { cat: typeof CATEGORY_CARDS[number]; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden text-left w-full focus:outline-none group"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Background image */}
      <Image
        src={cat.image}
        alt={cat.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay — lighter when active */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{ background: active ? "rgba(42,27,18,0.55)" : "rgba(42,27,18,0.72)", }}
      />

      {/* Accent colour bar at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
        style={{ background: active ? cat.accent : "transparent" }}
      />

      {/* Active ring */}
      {active && (
        <div className="absolute inset-0 border-2 pointer-events-none" style={{ borderColor: cat.accent }} />
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
        {/* Count badge */}
        <div
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold font-sans mb-3 flex-shrink-0 self-start"
          style={{ background: active ? cat.accent : "rgba(245,239,224,0.15)", color: active ? "#2A1B12" : "#F5EFE0" }}
        >
          {cat.count}
        </div>

        <h3
          className="text-xl lg:text-2xl font-bold text-parchment leading-tight mb-1 group-hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {cat.label}
        </h3>
        <p className="text-[11px] tracking-[0.16em] uppercase font-sans font-semibold" style={{ color: active ? cat.accent : "rgba(245,239,224,0.5)" }}>
          {cat.subtitle}
        </p>
      </div>
    </motion.button>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function TeachingsSection({ sermons }: { sermons?: any[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const data = (sermons?.length ? sermons : ALL_SERMONS) as Sermon[];
  const filtered = activeCategory === "all" ? data : data.filter(s => s.category === activeCategory);

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
                Select a category below to explore Rev. Dokun Idowu&apos;s teachings — conferences, itinerary sessions, and special engagements.
              </p>
            </div>
          </div>

          {/* ── Category Cards (Mark Hankins style) ── */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-16 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {CATEGORY_CARDS.map(cat => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>

          {/* Divider with active category label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-amber" />
            <p className="text-[11px] tracking-[0.2em] uppercase font-sans font-semibold text-amber">
              {CATEGORY_CARDS.find(c => c.id === activeCategory)?.label} — {filtered.length} {filtered.length === 1 ? "message" : "messages"}
            </p>
            <div className="flex-1 h-px bg-sand/40" />
          </div>

          {/* Video Grid */}
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
                  <VideoCard key={sermon._id} sermon={sermon} index={i} onClick={() => setActiveVideo(sermon)} />
                ))}
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
                <p className="text-umber/40 font-sans text-base">
                  No videos in this category yet.{" "}
                  <button onClick={() => setActiveCategory("all")} className="text-amber underline font-semibold">View all</button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom */}
          <div className="mt-16 pt-10 border-t border-sand/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-serif italic text-umber/55 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;Expect to be richly blessed as he ministers in a practical way.&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-taupe/40 font-sans mt-1.5">
                {data.length} messages &bull; More being added
              </p>
            </div>
          </div>

          {/* Ministry Moments */}
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-amber" />
              <p className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-semibold">Ministry Moments</p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[
                { src: "/images/ministry-preaching-1.jpg", caption: "Rhema Class Lagos", sub: "Teaching the Word" },
                { src: "/images/ministry-preaching-2.jpg", caption: "Rhema Class Lagos", sub: "Ministering at the Pulpit" },
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
