"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FEATURED = [
  { id: "FUlRpX6WqJc", title: "Rhema Conference 2023 — Day 2", venue: "Rhema Conference · Abuja", year: "2023" },
  { id: "wKllFYEcYXI", title: "Rhema Conference 2023 — Day 4", venue: "Rhema Conference · Abuja", year: "2023" },
  { id: "GoKRorn2daY", title: "Rhema Conference 2022 — Day 3", venue: "Rhema Conference · Port Harcourt", year: "2022" },
];

export default function HomeTeachingsTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="bg-espresso py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-3 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              PDee Speaks
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-parchment leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Teachings &amp;<br />
              <span className="text-amber italic">Conferences</span>
            </h2>
          </div>
          <Link href="/teachings" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-amber hover:text-gold-light transition-colors tracking-wide flex-shrink-0 self-start lg:self-auto">
            View all 11 messages →
          </Link>
        </div>

        {/* 3 video cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED.map((v, i) => (
            <Link
              key={v.id}
              href="/teachings"
              className={`group block transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Thumb */}
              <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mahogany/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-parchment/90 flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-4 h-4 ml-0.5" style={{ fill: "#2A1B12" }} viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"/></svg>
                  </div>
                </div>
                {v.year && (
                  <div className="absolute top-3 right-3 bg-mahogany/80 px-2 py-0.5">
                    <span className="text-[9px] tracking-widest uppercase text-amber font-sans font-semibold">{v.year}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              <p className="text-[10px] tracking-[0.16em] uppercase text-amber font-sans font-semibold mb-1.5">{v.venue}</p>
              <h3 className="text-base font-bold text-parchment leading-snug group-hover:text-amber transition-colors" style={{ fontFamily: "var(--font-display)" }}>{v.title}</h3>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div className={`mt-14 pt-8 border-t border-amber/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
          <p className="text-parchment/40 font-sans text-sm">
            Conferences · Itinerary · Podcast &mdash; 11 messages available
          </p>
          <Link href="/teachings" className="inline-flex items-center gap-3 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors flex-shrink-0">
            <svg width="16" height="11" viewBox="0 0 24 17"><path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/><path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/></svg>
            All Teachings
          </Link>
        </div>
      </div>
    </section>
  );
}
