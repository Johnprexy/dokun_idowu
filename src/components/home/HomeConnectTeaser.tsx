"use client";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function HomeConnectTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-smoke py-24 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Events card — with conference image */}
          <div className={`relative overflow-hidden min-h-[360px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Image src="/images/ministry-preaching-1.jpg" alt="Upcoming Events" fill className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(42,27,18,0.88) 0%, rgba(42,27,18,0.60) 100%)" }} />
            <div className="relative z-10 p-10 lg:p-14 flex flex-col h-full justify-between" style={{ minHeight: 360 }}>
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-semibold mb-3">Upcoming</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Events &amp; Itinerary
                </h3>
                <p className="text-parchment/60 font-sans text-base leading-relaxed mb-8 max-w-sm">
                  Find out where PDee is ministering next — conferences, teaching sessions, and special engagements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/events" className="inline-flex items-center justify-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-6 py-3.5 hover:bg-gold-light transition-colors">
                  See Events →
                </Link>
                <Link href="/itinerary" className="inline-flex items-center justify-center gap-2 border border-parchment/30 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-6 py-3.5 hover:border-amber hover:text-amber transition-colors">
                  View Schedule
                </Link>
              </div>
            </div>
          </div>

          {/* Connect card — with couple image */}
          <div className={`relative overflow-hidden min-h-[360px] transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Image src="/images/ministry-couple.jpg" alt="Connect" fill className="object-cover object-[center_30%]" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(196,98,45,0.90) 0%, rgba(42,27,18,0.75) 100%)" }} />
            <div className="relative z-10 p-10 lg:p-14 flex flex-col h-full justify-between" style={{ minHeight: 360 }}>
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-parchment/60 font-sans font-semibold mb-3">Reach Out</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Connect With<br />Rev. Idowu
                </h3>
                <p className="text-parchment/65 font-sans text-base leading-relaxed mb-8 max-w-sm">
                  For speaking engagements, ministry partnerships, mentorship enquiries, or any message.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-mahogany text-parchment font-sans font-bold text-sm tracking-widest uppercase px-6 py-3.5 hover:bg-espresso transition-colors">
                  Get in Touch →
                </Link>
                <div className="flex items-center gap-4 sm:ml-2">
                  {[
                    { href: "https://instagram.com/dokun_idowu", label: "IG" },
                    { href: "https://www.facebook.com/iamdokunidowu", label: "FB" },
                    { href: "https://x.com/DokunIdowu", label: "X" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-[10px] tracking-widest uppercase text-parchment/40 hover:text-parchment font-sans font-semibold transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
