"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

// ── Gallery photos ────────────────────────────────────────────────────────────
const GALLERY = [
  { src: "/images/familypic.jpeg",      caption: "The Idowu Family",      sub: "Rev. Dokun · Mrs. Tobore · Three Sons",  w: "lg:col-span-7", h: "lg:row-span-2", minH: 560 },
  { src: "/images/pic5.jpeg",           caption: "Rev. Dokun Idowu",      sub: "Thoughtful · Purposeful",                w: "lg:col-span-5", h: "",              minH: 270 },
  { src: "/images/mrstobore.jpg",       caption: "Mrs. Tobore Idowu",     sub: "Grace · Beauty · Purpose",              w: "lg:col-span-5", h: "",              minH: 270 },
  { src: "/images/pic6.jpeg",           caption: "Rev. Dokun Idowu",      sub: "Composed · Grounded",                   w: "lg:col-span-5", h: "",              minH: 270 },
  { src: "/images/pic3.jpeg",           caption: "Rev. Dokun Idowu",      sub: "Joy in Ministry",                       w: "lg:col-span-4", h: "",              minH: 300 },
  { src: "/images/pic2.jpeg",           caption: "Rev. Dokun Idowu",      sub: "Relaxed · Approachable",                w: "lg:col-span-8", h: "",              minH: 300 },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ photos, index, onClose }: {
  photos: typeof GALLERY;
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const photo = photos[current];

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center"
      style={{ background: "rgba(42,27,18,0.97)", backdropFilter: "blur(12px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-parchment/20 text-parchment/60 hover:text-parchment hover:border-amber transition-colors text-xl"
        aria-label="Close"
      >
        ×
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10">
        <span className="text-[10px] tracking-widest uppercase text-parchment/30 font-sans">
          {current + 1} / {photos.length}
        </span>
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 lg:left-8 z-10 w-12 h-12 flex items-center justify-center border border-parchment/15 text-parchment/50 hover:text-amber hover:border-amber transition-colors text-2xl"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Image */}
      <motion.div
        key={current}
        className="relative mx-20 lg:mx-28 max-w-5xl w-full"
        style={{ maxHeight: "80vh", aspectRatio: "4/3" }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-contain"
          unoptimized
        />
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 lg:right-8 z-10 w-12 h-12 flex items-center justify-center border border-parchment/15 text-parchment/50 hover:text-amber hover:border-amber transition-colors text-2xl"
        aria-label="Next"
      >
        ›
      </button>

      {/* Caption */}
      <div className="absolute bottom-8 inset-x-0 text-center px-6">
        <p className="text-parchment font-semibold font-sans text-base"
          style={{ fontFamily: "var(--font-display)" }}>{photo.caption}</p>
        <p className="text-amber/50 text-[10px] font-sans tracking-widest uppercase mt-1">{photo.sub}</p>
        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`transition-all duration-200 rounded-full ${i === current ? "w-5 h-1.5 bg-amber" : "w-1.5 h-1.5 bg-parchment/20 hover:bg-parchment/40"}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function FamilyPageClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO — blurred family portrait background ──────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mahogany">
          {/* Blurred background photo */}
          <Image
            src="/images/familypic.jpeg"
            alt=""
            fill
            className="object-cover object-top scale-110"
            style={{ filter: "blur(8px)" }}
            priority
          />
          {/* Colour overlay — mahogany tint so text pops */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(42,27,18,0.82) 0%, rgba(42,27,18,0.70) 50%, rgba(61,43,31,0.80) 100%)" }} />

          {/* Amber top bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-amber z-10" />

          {/* Centred content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-12 pt-24 pb-20">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] tracking-[0.35em] uppercase text-amber font-sans font-semibold mb-6 flex items-center justify-center gap-4">
                <span className="w-10 h-px bg-amber/60" />
                Heart &amp; Home
                <span className="w-10 h-px bg-amber/60" />
              </p>

              <h1
                className="font-bold text-parchment leading-[0.92] mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                The Idowu<br />
                <em className="text-amber not-italic">Family</em>
              </h1>

              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-16 h-px bg-amber/40" />
                <span className="text-amber text-xl">✦</span>
                <div className="w-16 h-px bg-amber/40" />
              </div>

              <p className="text-parchment/65 font-sans text-lg leading-relaxed max-w-xl mx-auto mb-12">
                Rev. Dokun, Mrs. Tobore, and their three sons — united in love, faith, and Kingdom purpose. A home that ministers before the ministry ever begins.
              </p>

              {/* Stats row */}
              <div className="flex items-center justify-center gap-10 lg:gap-16 mb-14">
                {[
                  { num: "5",   label: "Family Members" },
                  { num: "3",   label: "Sons" },
                  { num: "25+", label: "Years of Grace" },
                ].map((s, i) => (
                  <div key={s.label} className="text-center relative">
                    {i > 0 && (
                      <div className="absolute -left-5 lg:-left-8 top-1/2 -translate-y-1/2 w-px h-8 bg-amber/20" />
                    )}
                    <p className="text-3xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                    <p className="text-[9px] tracking-widest uppercase text-parchment/35 font-sans mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* The actual photo — sharp, centred, portrait card */}
              <div
                className="relative mx-auto overflow-hidden cursor-pointer group shadow-2xl"
                style={{ maxWidth: 340, aspectRatio: "3/4" }}
                onClick={() => setLightboxIndex(0)}
              >
                <Image
                  src="/images/familypic.jpeg"
                  alt="The Idowu Family"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Amber border on hover */}
                <div className="absolute inset-0 border-2 border-amber/0 group-hover:border-amber/60 transition-all duration-500" />
                {/* View label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(42,27,18,0.35)" }}>
                  <div className="bg-parchment/90 px-5 py-2.5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-mahogany" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[10px] tracking-widest uppercase text-mahogany font-sans font-bold">View Photo</span>
                  </div>
                </div>
                {/* Bottom caption */}
                <div className="absolute bottom-0 inset-x-0 p-4"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.9), transparent)" }}>
                  <p className="text-parchment font-semibold text-sm text-center" style={{ fontFamily: "var(--font-display)" }}>
                    The Idowu Family
                  </p>
                  <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase text-center mt-0.5">
                    Click to view
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link href="#gallery"
                  className="inline-flex items-center gap-3 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
                  View Full Gallery ↓
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SCRIPTURE STRIP ─────────────────────────────────────────── */}
        <section className="bg-amber py-7">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-serif italic text-mahogany text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;He is married to Mrs. Tobore Idowu &amp; they are blessed with three amazing children.&rdquo;
            </p>
          </div>
        </section>

        {/* ── MRS. TOBORE FEATURE ─────────────────────────────────────── */}
        <section className="bg-parchment overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
            {/* Photo */}
            <div className="relative min-h-[480px] lg:min-h-full order-1 cursor-pointer group"
              onClick={() => setLightboxIndex(GALLERY.findIndex(g => g.src === "/images/mrstobore.jpg"))}>
              <Image src="/images/mrstobore.jpg" alt="Mrs. Tobore Idowu" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 hidden lg:block"
                style={{ background: "linear-gradient(to left, #F5EFE0 0%, transparent 30%)" }} />
              {/* Hover expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden"
                style={{ background: "rgba(42,27,18,0.3)" }}>
                <div className="bg-parchment/90 px-4 py-2 text-[10px] tracking-widest uppercase text-mahogany font-sans font-bold">View Photo</div>
              </div>
              <div className="absolute bottom-6 right-6">
                <div className="inline-flex items-center gap-3 bg-mahogany/85 backdrop-blur-sm px-5 py-3">
                  <div className="w-0.5 h-8 bg-amber flex-shrink-0" />
                  <div>
                    <p className="text-parchment font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>Mrs. Tobore Idowu</p>
                    <p className="text-amber/60 text-[9px] tracking-widest uppercase font-sans">Partner in Ministry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20 order-2">
              <p className="text-[11px] tracking-[0.28em] uppercase text-amber font-sans font-semibold mb-5 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" />
                The First Lady
              </p>
              <h2 className="font-bold text-espresso leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
                Mrs. Tobore<br />
                <span className="text-ember italic">Idowu</span>
              </h2>
              <div className="w-10 h-0.5 bg-amber mb-8" />
              <p className="text-umber font-sans text-base leading-relaxed mb-5">
                Mrs. Tobore Idowu is more than a pastor&apos;s wife — she is a woman of deep faith, quiet strength, and gracious purpose. She stands beside Rev. Dokun Idowu not merely in title, but in spirit, prayer, and conviction.
              </p>
              <p className="text-umber/70 font-sans text-base leading-relaxed mb-10">
                Warm, brilliant, and deeply devoted — Tobore is the heartbeat of the Idowu home and a pillar of grace in every room she enters.
              </p>
              <blockquote className="border-l-2 border-amber pl-5">
                <p className="font-serif italic text-umber/60 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;He who finds a wife finds a good thing, and obtains favour from the LORD.&rdquo;
                </p>
                <cite className="text-[10px] tracking-widest uppercase text-amber font-sans font-semibold not-italic mt-2 block">
                  Proverbs 18:22
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── GALLERY — clickable editorial grid ──────────────────────── */}
        <section id="gallery" className="bg-smoke py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                  <span className="w-7 h-px bg-amber" />
                  Gallery
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-espresso" style={{ fontFamily: "var(--font-display)" }}>
                  Life in <span className="text-ember italic">Frames</span>
                </h2>
              </div>
              <p className="text-umber/45 font-sans text-sm max-w-xs leading-relaxed">
                Click any photo to view full size. Use arrow keys or swipe to navigate.
              </p>
            </div>

            {/* 12-col grid */}
            <div className="grid grid-cols-12 gap-3 lg:gap-4">
              {GALLERY.map((photo, i) => (
                <div
                  key={i}
                  className={`col-span-12 ${photo.w} ${photo.h} relative overflow-hidden group cursor-pointer`}
                  style={{ minHeight: photo.minH }}
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(42,27,18,0.85) 0%, rgba(42,27,18,0.05) 50%, transparent)" }} />

                  {/* Amber top bar on hover */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Expand icon on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-parchment/0 group-hover:bg-parchment/90 flex items-center justify-center transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg className="w-4 h-4 text-mahogany opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-parchment font-bold text-base leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}>{photo.caption}</p>
                    <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase mt-1">{photo.sub}</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}

              {/* Placeholder */}
              <div className="col-span-12 relative border border-dashed border-amber/15 flex items-center justify-center gap-6"
                style={{ minHeight: 100 }}>
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: "linear-gradient(rgba(200,168,75,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(200,168,75,0.6) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
                <span className="text-amber/20 text-xl relative z-10">✦</span>
                <p className="text-[10px] font-sans tracking-[0.22em] uppercase text-umber/25 relative z-10">More family photos coming soon</p>
                <span className="text-amber/20 text-xl relative z-10">✦</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE + CONNECT ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image src="/images/ministry-couple.jpg" alt="" fill className="object-cover object-[center_20%]" />
          <div className="absolute inset-0" style={{ background: "rgba(42,27,18,0.92)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Quote */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber/40" />
                  <span className="text-amber text-xl">✦</span>
                </div>
                <blockquote className="font-serif italic text-2xl lg:text-3xl text-parchment leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;A man&apos;s ministry begins at home. The Idowu family is a living testimony of what God can do when a family is fully surrendered to His purpose.&rdquo;
                </blockquote>
                <cite className="text-[10px] tracking-[0.25em] uppercase text-amber font-sans font-semibold not-italic">
                  &mdash; PDee · Rev. Dokun Idowu
                </cite>
              </div>
              {/* Connect */}
              <div className="border border-amber/15 p-10 lg:p-12">
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-6">Connect</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  Partner with the<br />
                  <span className="text-amber italic">Idowu Ministry</span>
                </h3>
                <p className="text-parchment/45 font-sans text-sm leading-relaxed mb-8">
                  For speaking engagements, ministry partnerships, mentorship, or simply to reach out.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
                    Get in Touch →
                  </Link>
                  <Link href="/give"
                    className="inline-flex items-center justify-center gap-2 border border-parchment/15 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors">
                    Give &amp; Partner
                  </Link>
                  <div className="flex items-center gap-5 pt-4 mt-2 border-t border-amber/10">
                    {[
                      { label: "Instagram", href: "https://instagram.com/dokun_idowu" },
                      { label: "Facebook",  href: "https://www.facebook.com/iamdokunidowu" },
                      { label: "X",         href: "https://x.com/DokunIdowu" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="text-[9px] tracking-widest uppercase text-parchment/25 hover:text-amber font-sans transition-colors">
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={GALLERY}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
