"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function HomeAboutTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-parchment py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-stretch">

          {/* Image — full bleed left */}
          <div
            className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[480px] overflow-hidden">
              <Image
                src="/images/p4.jpeg"
                alt="Rev. Dokun Idowu"
                fill
                className="object-cover object-center"
              />
              {/* Gradient right edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-parchment hidden lg:block" style={{ background: "linear-gradient(to right, transparent 70%, #F5EFE0)" }} />
              {/* Amber corner */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber/10" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-6">
                  {[
                    { num: "25+", label: "Years in Ministry" },
                    { num: "1998", label: "Pioneer Call" },
                  ].map((s) => (
                    <div key={s.label} className="bg-mahogany/80 backdrop-blur-sm px-4 py-3">
                      <p className="text-xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                      <p className="text-[9px] tracking-widest uppercase text-parchment/50 font-sans mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`flex flex-col justify-center py-10 lg:py-0 transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber inline-block" />
              Who is PDee?
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-espresso leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Anointed Pioneer.<br />
              <span className="text-ember italic">Executive Leader.</span><br />
              Gifted Teacher.
            </h2>
            <div className="w-10 h-0.5 bg-amber mb-7" />
            <p className="text-umber font-sans text-base leading-relaxed mb-4">
              Rev. Dokun Idowu — known as PDee — is a charter class member of Rhema Nigeria, a gifted pioneer, and an anointed Bible teacher graced by God for the gifts of the Spirit and the move of the Holy Ghost.
            </p>
            <p className="text-umber/70 font-sans text-base leading-relaxed mb-10">
              His first pioneer effort was in 1998. From the University of Ibadan to the boardrooms of Telecoms and Banking, to the halls of Rhema Nigeria — his journey is one of radical obedience and Kingdom impact.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { icon: "✦", text: "Charter Class, Rhema Nigeria" },
                { icon: "✦", text: "Executive Leader, RBTC Nigeria" },
                { icon: "✦", text: "Pioneer — Kaduna & Hausa Campus" },
                { icon: "✦", text: "University of Ibadan, 2004" },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-amber text-xs mt-0.5 flex-shrink-0">{f.icon}</span>
                  <span className="text-sm font-sans text-umber/80 leading-snug">{f.text}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-3 self-start bg-espresso text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-ember transition-colors duration-200">
              Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
