"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const PILLARS = [
  { icon: "✦", title: "Faith Foundation", desc: "Grounded in the Word" },
  { icon: "✦", title: "Purpose Discovery", desc: "Walking in your calling" },
  { icon: "✦", title: "Kingdom Leadership", desc: "Practical spiritual authority" },
  { icon: "✦", title: "Personal Growth", desc: "Spirit-led in every season" },
];

export default function HomeMentorshipTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-linen py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* pic2 accent photo */}
            <div className="relative overflow-hidden mb-8 rounded-sm" style={{ aspectRatio:"4/3" }}>
              <Image src="/images/pic2.jpeg" alt="Rev. Dokun Idowu" fill className="object-cover object-top" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(42,27,18,0.6), transparent)" }} />
              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-amber font-sans font-semibold">PDee · Mentor</p>
              </div>
            </div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              Platform
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-espresso leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Mentorship &amp;<br />
              <span className="text-ember italic">Discipleship</span>
            </h2>
            <div className="w-10 h-0.5 bg-amber mb-7" />
            <p className="text-umber font-sans text-base leading-relaxed mb-4">
              Rev. Dokun Idowu carries a deep burden for the next generation of believers and ministers. His mentorship platform walks individuals through structured, Spirit-led growth.
            </p>
            <p className="text-umber/70 font-sans text-base leading-relaxed mb-10">
              Whether you are a young believer, a minister in the making, or a marketplace leader seeking Kingdom alignment — there is a place for you here.
            </p>
            <blockquote className="border-l-2 border-amber pl-5 mb-10">
              <p className="font-serif italic text-umber/70 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;The things that thou hast heard of me&hellip; commit thou to faithful men, who shall be able to teach others also.&rdquo;
              </p>
              <cite className="text-[10px] tracking-widest uppercase text-amber font-sans font-semibold not-italic mt-2 block">2 Timothy 2:2</cite>
            </blockquote>
            <Link href="/mentorship" className="inline-flex items-center gap-2 bg-espresso text-parchment font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-ember transition-colors duration-200">
              Explore Mentorship →
            </Link>
          </div>

          {/* Right — pillar grid */}
          <div className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-2 gap-px bg-sand/40">
              {PILLARS.map((p, i) => (
                <div key={i} className="bg-white p-8 hover:bg-espresso group transition-colors duration-300">
                  <span className="text-2xl text-amber block mb-5 group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                  <h4 className="font-bold text-espresso group-hover:text-parchment text-lg mb-2 transition-colors" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h4>
                  <p className="text-sm font-sans text-umber/60 group-hover:text-parchment/50 leading-relaxed transition-colors">{p.desc}</p>
                </div>
              ))}
            </div>
            {/* Cohort note */}
            <div className="mt-4 bg-amber/10 border border-amber/20 px-5 py-4 flex items-center gap-3">
              <span className="text-amber text-lg">✦</span>
              <p className="text-sm font-sans text-umber/70">
                <strong className="text-espresso font-semibold">Cohort 2 opening soon.</strong> Applications being reviewed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
