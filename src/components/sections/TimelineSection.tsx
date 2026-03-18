"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";

const TIMELINE = [
  {
    year: "1998",
    title: "First Pioneer Effort",
    body: "Sensing a call from God as a teenager, Rev. Dokun Idowu launched his first pioneer ministry effort — the beginning of a lifelong assignment.",
    tag: "Pioneer",
  },
  {
    year: "2001",
    title: "Victory Christian Fellowship",
    body: "While studying at the University of Ibadan, he served as Associate Pastor at the highly regarded Victory Christian Fellowship, UI.",
    tag: "Pastoral",
  },
  {
    year: "2004",
    title: "University of Ibadan",
    body: "Graduated from the University of Ibadan, carrying both academic formation and a deepening spiritual mandate into the next chapter.",
    tag: "Formation",
  },
  {
    year: "2006",
    title: "RBTC Nigeria Startup Team",
    body: "Joined the pioneer start-up team of Rhema Bible Training Centre Nigeria — one of the most significant faith investments of his ministry life.",
    tag: "Rhema Nigeria",
  },
  {
    year: "2008",
    title: "Kaduna & Hausa Campus Pioneer",
    body: "Served as Pioneer Team Leader for Rhema Nigeria's Kaduna Campus and Hausa Campus, planting Kingdom training grounds in Northern Nigeria.",
    tag: "Pioneer",
  },
  {
    year: "2012",
    title: "Divisional Leader",
    body: "Led multiple divisions at Rhema Nigeria — Retail & Merchandise, Branding, Promotions & Marketing, and the Training Centre Division.",
    tag: "Leadership",
  },
  {
    year: "Now",
    title: "Executive Leader, Rhema Nigeria",
    body: "Serving as Executive Leader at Rhema Bible Training Centre Nigeria — anointed Bible teacher, gifted pioneer, and mentor to the next generation.",
    tag: "Executive",
  },
];

export default function TimelineSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    setActive(i);
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 40, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-parchment py-28 lg:py-36 overflow-hidden">
      <div className="section-wrap mb-12">
        <p className="section-eyebrow mb-4">The Journey</p>
        <RevealText
          as="h2"
          className="font-display text-4xl lg:text-5xl font-bold text-espresso leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A Life Poured Out for the Kingdom
        </RevealText>
        <div className="w-12 h-px bg-amber mt-6" />
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-6 px-6 lg:px-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => scrollTo(i)}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-72 lg:w-80 p-8 cursor-pointer border transition-all duration-300 ${
              active === i
                ? "bg-espresso border-amber text-parchment"
                : "bg-white border-sand/40 text-espresso hover:border-amber/40"
            }`}
          >
            {/* Year */}
            <p
              className={`font-display text-4xl font-black mb-3 leading-none ${
                active === i ? "text-amber" : "text-sand"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.year}
            </p>

            {/* Tag */}
            <span
              className={`text-[9px] tracking-[0.18em] uppercase font-sans font-medium px-2 py-0.5 mb-4 inline-block ${
                active === i
                  ? "bg-amber/20 text-amber"
                  : "bg-linen text-taupe"
              }`}
            >
              {item.tag}
            </span>

            {/* Title */}
            <h3
              className={`font-display text-xl font-bold mb-3 leading-snug ${
                active === i ? "text-parchment" : "text-espresso"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.title}
            </h3>

            {/* Body */}
            <p
              className={`text-sm leading-relaxed font-sans font-light ${
                active === i ? "text-parchment/60" : "text-umber/70"
              }`}
            >
              {item.body}
            </p>

            {/* Active indicator */}
            {active === i && (
              <div className="w-8 h-px bg-amber mt-6" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Dot nav */}
      <div className="flex gap-2 justify-center mt-8">
        {TIMELINE.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              active === i ? "w-6 h-2 bg-amber" : "w-2 h-2 bg-sand hover:bg-taupe"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
