"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, motionVal, to]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v).toString()));
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ── Floating gold particle ────────────────────────────────────────────────────
function Particle({ x, y, size, delay, duration }: { x: string; y: string; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: "rgba(200,168,75,0.25)" }}
      animate={{ y: [0, -40, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = [
  { x: "8%",  y: "20%", size: 6,  delay: 0,   duration: 4 },
  { x: "20%", y: "70%", size: 4,  delay: 1,   duration: 5 },
  { x: "35%", y: "40%", size: 8,  delay: 0.5, duration: 3.5 },
  { x: "55%", y: "15%", size: 5,  delay: 2,   duration: 4.5 },
  { x: "70%", y: "60%", size: 7,  delay: 0.8, duration: 4 },
  { x: "85%", y: "30%", size: 4,  delay: 1.5, duration: 5 },
  { x: "92%", y: "75%", size: 6,  delay: 0.3, duration: 3.8 },
  { x: "45%", y: "85%", size: 5,  delay: 1.8, duration: 4.2 },
  { x: "15%", y: "50%", size: 3,  delay: 2.5, duration: 5.5 },
  { x: "78%", y: "45%", size: 5,  delay: 0.6, duration: 4.8 },
  { x: "62%", y: "88%", size: 4,  delay: 1.2, duration: 3.6 },
  { x: "28%", y: "25%", size: 6,  delay: 2.2, duration: 4.3 },
];

const REASONS = [
  {
    num: "01",
    title: "Reach More People",
    body: "Your partnership enables the Word of God to reach more cities, campuses, and nations through conferences and teaching sessions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Train Ministers",
    body: "Support the training of the next generation of ministers through Rhema Bible Training Centre and discipleship platforms.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Pioneer New Works",
    body: "Help fund the pioneer efforts Rev. Idowu carries — planting new ministry works and Kingdom initiatives across Nigeria and beyond.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3,11 22,2 13,21 11,13 3,11"/>
      </svg>
    ),
  },
];

const BENEFITS = [
  "Regular ministry updates & prayer newsletter",
  "Personally remembered in prayer",
  "Access to exclusive teaching materials",
  "Partner devotionals and Word notes",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function GivePage() {
  const [copied, setCopied] = useState(false);
  const [activeReason, setActiveReason] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO — animated dark canvas ──────────────────────────────── */}
        <section ref={heroRef}
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0e08 0%, #2A1B12 50%, #1a0e08 100%)" }}>

          {/* Animated gold ring */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ width: "600px", height: "600px", border: "1px solid rgba(200,168,75,0.12)", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ width: "900px", height: "900px", border: "1px solid rgba(200,168,75,0.06)", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 8, delay: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ width: "300px", height: "300px", border: "1px solid rgba(200,168,75,0.2)", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,168,75,0.08) 0%, transparent 70%)" }} />

          {/* Floating particles */}
          {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

          {/* Amber top bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-amber" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
            <motion.div
              initial="hidden" animate="show" variants={stagger}
            >
              <motion.p variants={fadeUp}
                className="text-[11px] tracking-[0.35em] uppercase text-amber font-sans font-semibold mb-6 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-amber/60" />
                Kingdom Partnership
                <span className="w-8 h-px bg-amber/60" />
              </motion.p>

              <motion.h1 variants={fadeUp}
                className="font-bold text-parchment leading-[0.9] mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}>
                Give &amp;<br />
                <em style={{ color: "#C8A84B" }} className="not-italic">Partner</em>
              </motion.h1>

              <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 mb-10">
                <div className="w-20 h-px bg-amber/30" />
                <span className="text-amber/50 text-xl">✦</span>
                <div className="w-20 h-px bg-amber/30" />
              </motion.div>

              <motion.p variants={fadeUp}
                className="text-parchment/55 font-sans text-lg leading-relaxed max-w-xl mx-auto mb-10">
                When you partner with this ministry, you become a co-labourer in the harvest. Every seed you sow advances God&apos;s Kingdom.
              </motion.p>

              <motion.blockquote variants={fadeUp}
                className="font-serif italic text-parchment/40 text-base leading-relaxed max-w-lg mx-auto mb-12"
                style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;He which soweth bountifully shall reap also bountifully.&rdquo;
                <span className="block text-[10px] not-italic tracking-widest uppercase text-amber/40 font-sans mt-2">2 Corinthians 9:6</span>
              </motion.blockquote>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#give-now"
                  className="inline-flex items-center justify-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
                  Give Now ↓
                </a>
                <a href="#why-give"
                  className="inline-flex items-center justify-center gap-2 border border-parchment/15 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:border-amber hover:text-amber transition-colors">
                  Why Partner?
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom scroll cue */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <span className="text-[9px] tracking-[0.22em] uppercase text-parchment/25 font-sans">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-amber/40 to-transparent" />
          </motion.div>
        </section>

        {/* ── ANIMATED STATS STRIP ─────────────────────────────────────── */}
        <section className="bg-amber py-8">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
            {[
              { to: 25,  suffix: "+", label: "Years of Ministry" },
              { to: 3,   suffix: "",  label: "Cities Pioneered" },
              { to: 100, suffix: "%", label: "Goes to the Kingdom" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl lg:text-4xl font-black text-mahogany" style={{ fontFamily: "var(--font-display)" }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-[10px] tracking-widest uppercase text-mahogany/60 font-sans mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY GIVE — animated reason cards ────────────────────────── */}
        <section id="why-give" className="bg-espresso py-24 lg:py-32 grain-overlay overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}
              className="mb-16">
              <motion.p variants={fadeUp}
                className="text-[11px] tracking-[0.28em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" /> Your Impact
              </motion.p>
              <motion.h2 variants={fadeUp}
                className="text-3xl lg:text-5xl font-bold text-parchment leading-tight"
                style={{ fontFamily: "var(--font-display)" }}>
                Why Your Giving<br />
                <span className="text-amber italic">Matters</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-amber/10">
              {REASONS.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  onHoverStart={() => setActiveReason(i)}
                  onHoverEnd={() => setActiveReason(null)}
                  className="relative bg-mahogany/70 hover:bg-mahogany p-10 lg:p-12 transition-colors duration-300 cursor-default overflow-hidden group"
                >
                  {/* Large bg number */}
                  <span className="absolute top-4 right-6 font-black text-parchment/3 select-none pointer-events-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "7rem", lineHeight: 1 }}>
                    {r.num}
                  </span>
                  {/* Animated amber bottom bar */}
                  <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber"
                    initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }} style={{ originX: 0 }} />

                  <div className="text-amber mb-6 relative z-10">{r.icon}</div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-amber/50 font-sans mb-3 relative z-10">0{i + 1}</p>
                  <h3 className="text-xl font-bold text-parchment mb-4 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
                    {r.title}
                  </h3>
                  <p className="text-parchment/50 font-sans text-base leading-relaxed relative z-10 group-hover:text-parchment/70 transition-colors">
                    {r.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GIVE NOW — bank details + partner ───────────────────────── */}
        <section id="give-now" className="bg-smoke py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}
              className="mb-16">
              <motion.p variants={fadeUp}
                className="text-[11px] tracking-[0.28em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" /> How to Give
              </motion.p>
              <motion.h2 variants={fadeUp}
                className="text-3xl lg:text-4xl font-bold text-espresso leading-tight"
                style={{ fontFamily: "var(--font-display)" }}>
                Ways to <span className="text-ember italic">Partner</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* ── Bank transfer card ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-sand/40 overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-espresso px-8 py-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-parchment" style={{ fontFamily: "var(--font-display)" }}>
                    Bank Transfer
                  </h3>
                </div>
                {/* Details */}
                <div className="p-8 space-y-3">
                  {[
                    { label: "Account Name", value: "Dokun Idowu Ministries", copy: false },
                    { label: "Bank",         value: "To be provided",         copy: false },
                    { label: "Account No.",  value: "To be provided",         copy: true  },
                    { label: "Sort Code",    value: "To be provided",         copy: false },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between bg-linen px-5 py-3.5">
                      <div>
                        <p className="text-[9px] tracking-[0.16em] uppercase text-taupe/60 font-sans font-semibold">{d.label}</p>
                        <p className="text-espresso font-sans font-semibold text-sm mt-0.5">{d.value}</p>
                      </div>
                      {d.copy && (
                        <button onClick={() => copy(d.value)}
                          className="text-[9px] tracking-widest uppercase font-sans font-bold text-amber hover:text-ember transition-colors">
                          {copied ? "✓ Copied" : "Copy"}
                        </button>
                      )}
                    </div>
                  ))}
                  <p className="text-xs text-umber/45 font-sans pt-2 leading-relaxed">
                    After transferring, please send your name and amount to{" "}
                    <a href="mailto:info@dokuniidowu.org" className="text-amber hover:underline">info@dokuniidowu.org</a>{" "}
                    so we can acknowledge your gift.
                  </p>
                </div>
              </motion.div>

              {/* ── Become a partner ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #2A1B12 0%, #3D2B1F 100%)" }}
              >
                {/* Subtle animated background */}
                <motion.div className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 60%)" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />

                <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-amber/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-parchment" style={{ fontFamily: "var(--font-display)" }}>
                      Become a Partner
                    </h3>
                  </div>

                  <p className="text-parchment/55 font-sans text-base leading-relaxed mb-8">
                    Join a community of Kingdom partners investing in the expansion of God&apos;s Word through Rev. Dokun Idowu&apos;s ministry.
                  </p>

                  <div className="space-y-3 mb-10 flex-1">
                    {BENEFITS.map((b, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                        className="flex items-start gap-3">
                        <span className="text-amber mt-0.5 flex-shrink-0 text-sm">✦</span>
                        <p className="text-parchment/65 font-sans text-sm leading-relaxed">{b}</p>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
                    Become a Partner →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CLOSING SCRIPTURE ────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-24 lg:py-28"
          style={{ background: "linear-gradient(135deg, #2A1B12 0%, #1a0e08 100%)" }}>
          {/* Animated rings */}
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ width: 400, height: 400, border: "1px solid rgba(200,168,75,0.1)" }}
            animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ width: 250, height: 250, border: "1px solid rgba(200,168,75,0.18)" }}
            animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }} />

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
            className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 mb-10">
              <div className="w-12 h-px bg-amber/40" />
              <span className="text-amber text-2xl">✦</span>
              <div className="w-12 h-px bg-amber/40" />
            </motion.div>
            <motion.blockquote variants={fadeUp}
              className="font-serif italic text-2xl lg:text-3xl text-parchment/85 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom.&rdquo;
            </motion.blockquote>
            <motion.cite variants={fadeUp}
              className="text-[10px] tracking-[0.28em] uppercase text-amber font-sans font-semibold not-italic block mb-12">
              Luke 6:38
            </motion.cite>
            <motion.div variants={fadeUp}>
              <Link href="/contact"
                className="inline-flex items-center gap-3 border border-amber/30 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:border-amber hover:text-amber transition-colors">
                Connect with PDee →
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
