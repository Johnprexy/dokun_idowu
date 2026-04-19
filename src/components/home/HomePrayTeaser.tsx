"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function HomePrayTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="bg-mahogany py-20 lg:py-24 grain-overlay relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none"><Image src="/images/pic3.jpeg" alt="" fill className="object-cover" style={{ opacity: 0.08 }} /></div>
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-amber text-2xl block mb-5">✦</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-parchment mb-5 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            Have a Prayer Request?
          </h2>
          <p className="text-parchment/55 font-sans text-base leading-relaxed mb-8 max-w-md mx-auto">
            Submit your request and receive a personalised Word from Scripture to stand on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pray" className="inline-flex items-center justify-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
              Pray With PDee →
            </Link>
            <Link href="/give" className="inline-flex items-center justify-center gap-2 border border-parchment/20 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors">
              Give &amp; Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
