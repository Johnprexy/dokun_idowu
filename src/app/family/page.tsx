import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Family — Rev. Dokun Idowu (PDee)",
  description: "Meet the Idowu family — Rev. Dokun, Mrs. Tobore, and their three amazing children. A home built on grace, love, and Kingdom purpose.",
};

export default function FamilyPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO — family portrait centrepiece ─────────────────────── */}
        <section className="relative min-h-screen flex items-end overflow-hidden bg-mahogany">
          {/* Full bleed family photo */}
          <Image
            src="/images/familypic.jpeg"
            alt="The Idowu Family"
            fill
            className="object-cover object-[center_top]"
            priority
          />
          {/* Rich gradient — lets text breathe at bottom */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(42,27,18,0.15) 0%, rgba(42,27,18,0.05) 40%, rgba(42,27,18,0.92) 100%)" }} />

          {/* Amber top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-amber z-10" />

          {/* Bottom content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-amber" />
                  Heart &amp; Home
                </p>
                <h1
                  className="font-bold text-parchment leading-[0.95] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                >
                  The Idowu<br />
                  <em className="text-amber not-italic">Family</em>
                </h1>
                <div className="w-14 h-0.5 bg-amber mt-5" />
              </div>
              <div className="lg:max-w-sm">
                <p className="text-parchment/65 font-sans text-base leading-relaxed mb-6">
                  Rev. Dokun, Mrs. Tobore, and their three sons — united in love, faith, and Kingdom purpose. A home that ministers before the ministry ever begins.
                </p>
                <div className="flex gap-8">
                  {[
                    { num: "5", label: "Members" },
                    { num: "3", label: "Sons" },
                    { num: "25+", label: "Years of Grace" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                      <p className="text-[9px] tracking-widest uppercase text-parchment/35 font-sans mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCRIPTURE STRIP ─────────────────────────────────────────── */}
        <section className="bg-amber py-7">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-serif italic text-mahogany text-lg leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;He is married to Mrs. Tobore Idowu &amp; they are blessed with three amazing children.&rdquo;
            </p>
          </div>
        </section>

        {/* ── MRS. TOBORE — featured portrait ─────────────────────────── */}
        <section className="bg-parchment overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

            {/* Photo */}
            <div className="relative min-h-[480px] lg:min-h-full order-1">
              <Image
                src="/images/mrstobore.jpg"
                alt="Mrs. Tobore Idowu"
                fill
                className="object-cover object-top"
              />
              {/* Right edge fade on desktop */}
              <div className="absolute inset-0 hidden lg:block"
                style={{ background: "linear-gradient(to left, #F5EFE0 0%, transparent 30%)" }} />
              {/* Caption tag */}
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
              <h2
                className="font-bold text-espresso leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
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
                <p className="font-serif italic text-umber/60 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;He who finds a wife finds a good thing, and obtains favour from the LORD.&rdquo;
                </p>
                <cite className="text-[10px] tracking-widest uppercase text-amber font-sans font-semibold not-italic mt-2 block">
                  Proverbs 18:22
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── GALLERY — editorial grid ─────────────────────────────────── */}
        <section className="bg-smoke py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* Header */}
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
                Moments from ministry and life. More photos added as they come.
              </p>
            </div>

            {/* Grid — 12 col masonry */}
            <div className="grid grid-cols-12 gap-3 lg:gap-4">

              {/* familypic — the hero family portrait, spans 8 cols tall */}
              <div className="col-span-12 lg:col-span-7 lg:row-span-2 relative overflow-hidden group" style={{ minHeight: 560 }}>
                <Image src="/images/familypic.jpeg" alt="The Idowu Family" fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.88) 0%, rgba(42,27,18,0.0) 45%)" }} />
                <div className="absolute top-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="absolute bottom-0 inset-x-0 p-7">
                  <p className="text-parchment font-bold text-2xl leading-snug mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    The Idowu Family
                  </p>
                  <p className="text-amber/60 text-[10px] font-sans tracking-widest uppercase">
                    Rev. Dokun · Mrs. Tobore · Three Sons
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* pic5 — contemplative */}
              <div className="col-span-12 lg:col-span-5 relative overflow-hidden group" style={{ minHeight: 270 }}>
                <Image src="/images/pic5.jpeg" alt="Rev. Dokun Idowu" fill
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.78) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="absolute bottom-5 inset-x-5">
                  <p className="text-parchment font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                  <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase mt-0.5">Thoughtful · Purposeful</p>
                </div>
              </div>

              {/* mrstobore — small portrait slot */}
              <div className="col-span-12 lg:col-span-5 relative overflow-hidden group" style={{ minHeight: 270 }}>
                <Image src="/images/mrstobore.jpg" alt="Mrs. Tobore Idowu" fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.80) 0%, transparent 50%)" }} />
                <div className="absolute top-0 inset-x-0 h-0.5 bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-5 inset-x-5">
                  <p className="text-parchment font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>Mrs. Tobore Idowu</p>
                  <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase mt-0.5">Grace · Beauty · Purpose</p>
                </div>
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* pic6 — wide composed */}
              <div className="col-span-12 lg:col-span-5 relative overflow-hidden group" style={{ minHeight: 270 }}>
                <Image src="/images/pic6.jpeg" alt="Rev. Dokun Idowu" fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.78) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-5 inset-x-5">
                  <p className="text-parchment font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                  <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase mt-0.5">Composed · Grounded</p>
                </div>
              </div>

              {/* pic3 — joy spans 4 col */}
              <div className="col-span-12 lg:col-span-4 relative overflow-hidden group" style={{ minHeight: 300 }}>
                <Image src="/images/pic3.jpeg" alt="Rev. Dokun Idowu" fill
                  className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.82) 0%, transparent 55%)" }} />
                <div className="absolute top-0 inset-x-0 h-0.5 bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-5 inset-x-5">
                  <p className="text-parchment font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                  <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase mt-0.5">Joy in Ministry</p>
                </div>
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* pic2 — relaxed spans 8 col */}
              <div className="col-span-12 lg:col-span-8 relative overflow-hidden group" style={{ minHeight: 300 }}>
                <Image src="/images/pic2.jpeg" alt="Rev. Dokun Idowu" fill
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(42,27,18,0.78) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="absolute bottom-5 inset-x-6 flex items-end justify-between">
                  <div>
                    <p className="text-parchment font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                    <p className="text-amber/55 text-[9px] font-sans tracking-widest uppercase mt-0.5">Relaxed · Approachable</p>
                  </div>
                  <span className="text-amber/30 text-xl">✦</span>
                </div>
              </div>

              {/* Placeholder — more coming */}
              <div className="col-span-12 relative overflow-hidden border border-dashed border-amber/15" style={{ minHeight: 120 }}>
                <div className="absolute inset-0 flex items-center justify-center gap-6"
                  style={{ background: "linear-gradient(135deg, rgba(200,168,75,0.02), rgba(42,27,18,0.03))" }}>
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "linear-gradient(rgba(200,168,75,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(200,168,75,0.6) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
                  <span className="text-amber/20 text-2xl relative z-10">✦</span>
                  <p className="text-[10px] font-sans tracking-[0.22em] uppercase text-umber/25 relative z-10">More family photos coming soon</p>
                  <span className="text-amber/20 text-2xl relative z-10">✦</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── MINISTRY COUPLE + CONNECT ─────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <Image src="/images/ministry-couple.jpg" alt="" fill className="object-cover object-[center_20%]" />
          <div className="absolute inset-0" style={{ background: "rgba(42,27,18,0.91)" }} />
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
                  {/* Socials */}
                  <div className="flex items-center gap-4 pt-4 mt-2 border-t border-amber/10">
                    {[
                      { label: "Instagram", handle: "@dokun_idowu", href: "https://instagram.com/dokun_idowu" },
                      { label: "Facebook", handle: "iamdokunidowu", href: "https://www.facebook.com/iamdokunidowu" },
                      { label: "X", handle: "@DokunIdowu", href: "https://x.com/DokunIdowu" },
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
    </>
  );
}
