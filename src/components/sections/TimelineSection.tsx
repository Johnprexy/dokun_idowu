"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";

const TIMELINE = [
  { year: "1998", title: "First Pioneer Effort", body: "Sensing a call from God as a teenager, Rev. Dokun Idowu launched his first pioneer ministry effort — the beginning of a lifelong assignment.", tag: "Pioneer" },
  { year: "2001", title: "Victory Christian Fellowship", body: "While at the University of Ibadan, he served as Associate Pastor at the highly regarded Victory Christian Fellowship, UI.", tag: "Pastoral" },
  { year: "2004", title: "University of Ibadan", body: "Graduated from the University of Ibadan, carrying both academic formation and a deepening spiritual mandate into the next chapter.", tag: "Formation" },
  { year: "2006", title: "RBTC Nigeria Startup Team", body: "Joined the pioneer start-up team of Rhema Bible Training Centre Nigeria — one of the most significant faith investments of his ministry life.", tag: "Rhema Nigeria" },
  { year: "2008", title: "Kaduna & Hausa Campus Pioneer", body: "Served as Pioneer Team Leader for Rhema Nigeria's Kaduna and Hausa Campuses, planting Kingdom training grounds in Northern Nigeria.", tag: "Pioneer" },
  { year: "2012", title: "Divisional Leader", body: "Led multiple divisions at Rhema Nigeria — Retail & Merchandise, Branding & Marketing, and the Training Centre Division.", tag: "Leadership" },
  { year: "Now", title: "Executive Leader, Rhema Nigeria", body: "Serving as Executive Leader at Rhema Bible Training Centre Nigeria — anointed teacher, gifted pioneer, mentor to the next generation.", tag: "Executive" },
];

// Duplicate for seamless infinite loop
const ITEMS = [...TIMELINE, ...TIMELINE];

export default function TimelineSection() {
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-parchment py-28 lg:py-36 overflow-hidden">
      {/* Header */}
      <div className="section-wrap mb-16">
        <p className="section-eyebrow mb-4">The Journey</p>
        <RevealText
          as="h2"
          className="font-display text-4xl lg:text-5xl font-bold text-espresso leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A Life Poured Out for the Kingdom
        </RevealText>
        <div className="w-12 h-px bg-amber mt-6" />
        <p className="text-umber/60 font-sans font-light text-sm mt-4">
          Hover over a card to pause the journey.
        </p>
      </div>

      {/* Train track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F5EFE0, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F5EFE0, transparent)" }} />

        {/* Scrolling track */}
        <div
          className="flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); setActive(null); }}
        >
          <div
            className="flex gap-5 py-2"
            style={{
              animation: `trainScroll 40s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {ITEMS.map((item, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i % TIMELINE.length)}
                onMouseLeave={() => setActive(null)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`flex-shrink-0 w-72 lg:w-80 p-7 border transition-colors duration-300 ${
                  active === i % TIMELINE.length
                    ? "bg-espresso border-amber"
                    : "bg-white border-sand/40"
                }`}
              >
                {/* Year */}
                <p
                  className={`font-display text-4xl font-black mb-2 leading-none ${
                    active === i % TIMELINE.length ? "text-amber" : "text-sand"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.year}
                </p>

                {/* Tag */}
                <span
                  className={`text-[9px] tracking-[0.18em] uppercase font-sans font-medium px-2 py-0.5 mb-4 inline-block ${
                    active === i % TIMELINE.length
                      ? "bg-amber/20 text-amber"
                      : "bg-linen text-taupe"
                  }`}
                >
                  {item.tag}
                </span>

                {/* Title */}
                <h3
                  className={`font-display text-lg font-bold mb-3 leading-snug ${
                    active === i % TIMELINE.length ? "text-parchment" : "text-espresso"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>

                {/* Body */}
                <p
                  className={`text-sm leading-relaxed font-sans font-light ${
                    active === i % TIMELINE.length ? "text-parchment/60" : "text-umber/70"
                  }`}
                >
                  {item.body}
                </p>

                {/* Bottom accent */}
                {active === i % TIMELINE.length && (
                  <div className="w-8 h-px bg-amber mt-5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Train track line */}
      <div className="section-wrap mt-8">
        <div className="relative h-px bg-sand/50">
          <div
            className="absolute top-0 left-0 h-px bg-amber"
            style={{
              animation: "trainProgress 40s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          />
          {/* Station dots */}
          <div className="flex justify-between absolute -top-1.5 left-0 right-0">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-amber bg-parchment" />
                <p className="text-[8px] tracking-widest text-amber/60 uppercase font-sans hidden lg:block">
                  {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trainScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes trainProgress {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
