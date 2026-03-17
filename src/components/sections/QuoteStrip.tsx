"use client";
// src/components/sections/QuoteStrip.tsx
import { useInView } from "react-intersection-observer";

const DEFAULT_QUOTES = [
  "God's grace is not just for the big moments — it covers every step of your pioneer journey.",
  "You were not called to spectate. You were called to demonstrate the Kingdom.",
  "The Holy Ghost is not an experience to chase — He is a Person to host.",
];

export default function QuoteStrip({ quotes }: { quotes?: { _id: string; text: string }[] }) {
  const texts = quotes?.map((q) => q.text) ?? DEFAULT_QUOTES;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-espresso py-24 overflow-hidden grain-overlay" ref={ref}>
      <div className="section-wrap">
        {/* Top accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-amber/60" />
          <span className="text-amber/60 text-sm">✦</span>
          <div className="w-8 h-px bg-amber/60" />
          <span className="text-[9px] tracking-[0.25em] uppercase text-amber/40 font-sans">
            Words to Live By
          </span>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber/10 gap-0">
          {texts.map((text, i) => (
            <div
              key={i}
              className={`px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0 transition-all duration-700`}
              style={{ transitionDelay: `${i * 150}ms`, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
            >
              {/* Open quote */}
              <span
                className="block font-display text-6xl text-amber/20 leading-none mb-2 -mt-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "
              </span>
              <blockquote
                className="font-serif text-lg lg:text-xl text-parchment/80 leading-relaxed italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {text}
              </blockquote>
              <p className="text-[10px] tracking-[0.2em] uppercase text-amber mt-5 font-sans">
                — Rev. Dokun Idowu
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
