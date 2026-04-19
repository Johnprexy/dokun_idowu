import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Mentorship Platform — Rev. Dokun Idowu (PDee)",
  description: "Join Rev. Dokun Idowu's mentorship platform — structured, Spirit-led growth for believers, ministers, and marketplace leaders.",
};

const PILLARS = [
  {
    num: "01",
    title: "Faith Foundation",
    body: "Every strong life is built on an unshakable foundation. We go deep into the Word — not just theology, but practical, lived-out faith that works in real life.",
    verse: "Hebrews 11:6",
  },
  {
    num: "02",
    title: "Purpose Discovery",
    body: "You were not born by accident and you were not saved to sit. We help you identify your God-given assignment and take your first bold steps into it.",
    verse: "Jeremiah 29:11",
  },
  {
    num: "03",
    title: "Kingdom Leadership",
    body: "Leadership in God's Kingdom operates differently. You will be equipped with spiritual authority, practical tools, and a vision that outlasts your lifetime.",
    verse: "2 Timothy 2:2",
  },
  {
    num: "04",
    title: "Personal Growth",
    body: "Spirit-led guidance through every season — spiritual, professional, relational. Growth that is deeply personal and entirely Kingdom-aligned.",
    verse: "Philippians 1:6",
  },
];

const WHO_FOR = [
  {
    title: "Young Believers",
    body: "Finding your footing in faith. Building on the Word. Understanding who you are in Christ before the world tells you who to be.",
    img: "/images/ministry-graduation.jpg",
    pos: "center 30%",
    accent: "#C8A84B",
  },
  {
    title: "Ministers in Training",
    body: "Developing your gifts, understanding your calling, and learning to walk in spiritual authority with humility and fire.",
    img: "/images/ministry-preaching-2.jpg",
    pos: "center 20%",
    accent: "#C4622D",
  },
  {
    title: "Marketplace Leaders",
    body: "Aligning your career, business, and influence with Kingdom principles. Your Monday matters as much as your Sunday.",
    img: "/images/pic2.jpeg",
    pos: "center 20%",
    accent: "#7A6248",
  },
];

export default function MentorshipPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke">

        {/* ── HERO — full screen split ───────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
          {/* Left — dark text side */}
          <div className="relative z-10 flex flex-col justify-center bg-mahogany px-8 lg:px-16 xl:px-24 pt-36 pb-20 lg:pt-32 lg:pb-20 lg:w-[52%]">
            {/* Grain */}
            <div className="absolute inset-0 grain-overlay pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-amber" />
                PDee · Platform
              </p>
              <h1
                className="font-bold text-parchment leading-[0.9] mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Mentor&shy;ship &amp;<br />
                <em className="text-amber not-italic">Disciple&shy;ship</em>
              </h1>
              <div className="w-14 h-0.5 bg-amber mb-8" />
              <p className="text-parchment/60 font-sans text-lg leading-relaxed max-w-md mb-10">
                A structured, Spirit-led platform for the next generation of believers, ministers, and Kingdom leaders — personally guided by Rev. Dokun Idowu.
              </p>

              {/* Scripture */}
              <blockquote className="border-l-2 border-amber pl-6 mb-12">
                <p className="font-serif italic text-parchment/70 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men, who shall be able to teach others also.&rdquo;
                </p>
                <cite className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-semibold not-italic mt-3 block">
                  2 Timothy 2:2
                </cite>
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
                  Apply Now →
                </Link>
                <Link href="#pillars" className="inline-flex items-center gap-2 border border-parchment/20 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Right — full photo */}
          <div className="relative lg:w-[48%] min-h-[50vh] lg:min-h-screen">
            <Image
              src="/images/hero-image.jpeg"
              alt="Rev. Dokun Idowu"
              fill
              className="object-cover object-[center_top]"
              priority
            />
            {/* Left edge fade */}
            <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, #2A1B12 0%, transparent 30%)" }} />
            {/* Bottom overlay card */}
            <div className="absolute bottom-0 inset-x-0 p-8 hidden lg:block" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.9) 0%, transparent)" }}>
              <div className="flex gap-8">
                {[
                  { num: "25+", label: "Years in Ministry" },
                  { num: "4",   label: "Mentorship Pillars" },
                  { num: "2",   label: "Active Cohorts" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                    <p className="text-[9px] tracking-widest uppercase text-parchment/40 font-sans mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET — full-width image strip ─────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[480px] order-2 lg:order-1">
              <Image src="/images/pic2.jpeg" alt="One-on-one mentorship" fill className="object-cover object-[center_25%]" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #F5EFE0)" }} />
            </div>
            {/* Text */}
            <div className="bg-parchment flex flex-col justify-center px-8 lg:px-16 py-20 order-1 lg:order-2">
              <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" />
                The Experience
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-espresso leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                More than a programme.<br />
                <span className="text-ember italic">A relationship.</span>
              </h2>
              <div className="w-10 h-0.5 bg-amber mb-7" />
              <p className="text-umber font-sans text-base leading-relaxed mb-4">
                Rev. Dokun Idowu does not simply teach — he walks with you. The mentorship platform is built on genuine relationship, honest accountability, and deep spiritual investment.
              </p>
              <p className="text-umber/70 font-sans text-base leading-relaxed mb-8">
                Each cohort is intentionally small so that every person receives real attention, real feedback, and real transformation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Structured curriculum" },
                  { label: "Live sessions" },
                  { label: "Personal feedback" },
                  { label: "Community access" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <span className="text-amber text-sm flex-shrink-0">✦</span>
                    <span className="text-sm font-sans text-umber/80 font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 PILLARS ─────────────────────────────────────────────────── */}
        <section id="pillars" className="bg-espresso py-24 lg:py-32 grain-overlay overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                  <span className="w-7 h-px bg-amber" />
                  What We Cover
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-parchment leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Four Pillars of<br />
                  <span className="text-amber italic">Kingdom Growth</span>
                </h2>
              </div>
              <p className="text-parchment/40 font-sans text-sm max-w-xs leading-relaxed">
                Each pillar builds on the last — from inner foundations to outer Kingdom impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-amber/10">
              {PILLARS.map((p, i) => (
                <div key={i} className="bg-mahogany/60 hover:bg-mahogany/90 p-10 lg:p-12 group transition-all duration-300 relative overflow-hidden">
                  {/* Large background number */}
                  <span
                    className="absolute top-6 right-8 font-black text-parchment/4 select-none pointer-events-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "8rem", lineHeight: 1 }}
                  >
                    {p.num}
                  </span>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-amber/60 font-sans font-semibold mb-5">
                    Pillar {p.num}
                  </p>
                  <h3 className="text-2xl font-bold text-parchment mb-4 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="text-parchment/50 font-sans text-base leading-relaxed mb-6 group-hover:text-parchment/70 transition-colors">
                    {p.body}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-amber/40" />
                    <span className="text-[10px] tracking-widest uppercase text-amber/50 font-sans font-semibold">{p.verse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IS IT FOR ─────────────────────────────────────────────── */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" />
                Who Is This For?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-espresso leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                A Place for <span className="text-ember italic">Every Season</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {WHO_FOR.map((card, i) => (
                <div key={i} className="group relative overflow-hidden flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: card.pos }}
                    />
                    {/* Colour accent overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: card.accent }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.75) 0%, transparent 50%)" }} />
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center" style={{ background: card.accent }}>
                      <span className="text-parchment font-bold text-sm font-sans">0{i+1}</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="flex-1 border border-t-0 border-sand/40 group-hover:border-amber/30 transition-colors p-7">
                    <h3 className="font-bold text-espresso text-xl mb-3 leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                      {card.title}
                    </h3>
                    <p className="text-umber/70 font-sans text-base leading-relaxed">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PDee QUOTE STRIP ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-[320px] flex items-center">
          <Image src="/images/pic3.jpeg" alt="" fill className="object-cover object-[center_30%]" />
          <div className="absolute inset-0" style={{ background: "rgba(42,27,18,0.88)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 py-20 text-center">
            <span className="text-amber text-3xl block mb-6">&#8220;</span>
            <blockquote className="font-serif text-2xl lg:text-3xl text-parchment leading-relaxed italic mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              You were not called to spectate. You were called to demonstrate the Kingdom.
            </blockquote>
            <cite className="text-[10px] tracking-[0.25em] uppercase text-amber font-sans font-semibold not-italic">
              &mdash; Rev. Dokun Idowu (PDee)
            </cite>
          </div>
        </section>

        {/* ── APPLY CTA ─────────────────────────────────────────────────── */}
        <section className="bg-parchment py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left text */}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                  <span className="w-7 h-px bg-amber" />
                  Applications
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-espresso leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Ready to Begin<br />
                  <span className="text-ember italic">Your Journey?</span>
                </h2>
                <div className="w-10 h-0.5 bg-amber mb-7" />
                <p className="text-umber font-sans text-base leading-relaxed mb-4">
                  Cohort 2 applications are currently being reviewed. Spaces are intentionally limited to ensure every mentee receives genuine personal investment.
                </p>
                <p className="text-umber/70 font-sans text-base leading-relaxed mb-10">
                  Submit your application through the contact form. Tell PDee who you are, where you are in your journey, and what you are believing God for.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-espresso text-parchment font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-ember transition-colors">
                    Apply Now →
                  </Link>
                  <Link href="/give" className="inline-flex items-center gap-2 border border-espresso/30 text-espresso font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-ember hover:text-ember transition-colors">
                    Give &amp; Partner
                  </Link>
                </div>
              </div>

              {/* Right — image with stats overlay */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image src="/images/p4.jpeg" alt="Rev. Dokun Idowu" fill className="object-cover object-[center_top]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.85) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 inset-x-0 p-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { num: "25+", label: "Years Ministry" },
                      { num: "2", label: "Cohorts" },
                      { num: "4", label: "Core Pillars" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="text-2xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                        <p className="text-[9px] tracking-widest uppercase text-parchment/50 font-sans mt-0.5">{s.label}</p>
                      </div>
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
