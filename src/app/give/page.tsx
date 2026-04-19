import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientShell from "@/components/ui/ClientShell";

export const metadata: Metadata = {
  title: "Give & Partner | Rev. Dokun Idowu",
  description: "Partner with Rev. Dokun Idowu's ministry. Your giving advances the Kingdom of God.",
};

const GIVING_REASONS = [
  { icon: "✦", title: "Reach More People", desc: "Your partnership enables the Word of God to reach more cities, campuses, and nations through conferences and teaching sessions." },
  { icon: "✦", title: "Train Ministers", desc: "Support the training of the next generation of ministers through Rhema Bible Training Centre and discipleship platforms." },
  { icon: "✦", title: "Pioneer New Works", desc: "Help fund the pioneer efforts Rev. Idowu carries — planting new ministry works and Kingdom initiatives." },
];

export default function GivePage() {
  return (
    <ClientShell>
      <Navbar />
      <main className="bg-smoke min-h-screen">

        <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-mahogany">
          <Image src="/images/ministry-graduation.jpg" alt="" fill
            className="object-cover object-[center_30%]" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(42,27,18,0.45) 0%, rgba(42,27,18,0.97) 100%)" }} />
          <div className="absolute top-0 inset-x-0 h-1 bg-amber" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-amber" /> Kingdom Partnership
            </p>
            <h1 className="font-bold text-parchment leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              Give &amp; <span className="text-amber italic">Partner</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/55 font-sans text-lg max-w-xl leading-relaxed">
              When you partner with this ministry, you become a co-labourer in the harvest. Every seed you sow goes directly into the advancement of God&apos;s Kingdom.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="section-wrap">

            {/* Scripture */}
            <div className="text-center mb-20">
              <p className="font-serif text-2xl lg:text-3xl text-espresso italic leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.&rdquo;
              </p>
              <p className="text-amber text-sm font-sans tracking-widest uppercase mt-5">2 Corinthians 9:6</p>
              <div className="w-12 h-px bg-amber mx-auto mt-5" />
            </div>

            {/* Why give */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
              {GIVING_REASONS.map((item, i) => (
                <div key={i} className="bg-white border border-sand/40 p-8 hover:border-amber/40 transition-colors">
                  <span className="text-amber text-xl block mb-4">{item.icon}</span>
                  <h3 className="font-display text-xl font-bold text-espresso mb-3" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="font-sans text-umber leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Giving options */}
            <div className="mb-6">
              <p className="section-eyebrow mb-4">How to Give</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-espresso mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Ways to Partner
              </h2>
              <div className="w-12 h-px bg-amber mt-4 mb-12" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">

              {/* Bank Transfer */}
              <div className="bg-white border border-sand/40 p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-espresso flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-espresso" style={{ fontFamily: "var(--font-display)" }}>Bank Transfer</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-linen p-4">
                    <p className="text-[10px] tracking-widest uppercase text-taupe font-sans mb-1">Account Name</p>
                    <p className="font-sans font-semibold text-espresso">Dokun Idowu Ministries</p>
                  </div>
                  <div className="bg-linen p-4">
                    <p className="text-[10px] tracking-widest uppercase text-taupe font-sans mb-1">Bank</p>
                    <p className="font-sans font-semibold text-espresso">To be provided</p>
                  </div>
                  <div className="bg-linen p-4">
                    <p className="text-[10px] tracking-widest uppercase text-taupe font-sans mb-1">Account Number</p>
                    <p className="font-sans font-semibold text-espresso">To be provided</p>
                  </div>
                </div>
                <p className="text-xs text-umber/50 font-sans mt-4 leading-relaxed">
                  After transferring, please send a message via the contact form with your name and amount so we can acknowledge your gift.
                </p>
              </div>

              {/* Online / Contact */}
              <div className="bg-espresso p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-parchment" style={{ fontFamily: "var(--font-display)" }}>Partner with Us</h3>
                </div>
                <p className="text-parchment/60 font-sans leading-relaxed text-[15px] mb-8">
                  To become a regular ministry partner or to enquire about online giving options, please reach out directly. We value every partnership and will respond personally.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Receive regular ministry updates",
                    "Be remembered in prayer",
                    "Access to exclusive teaching materials",
                    "Partner newsletters and devotionals",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <span className="text-amber mt-1 flex-shrink-0">&#10003;</span>
                      <p className="text-parchment/70 font-sans text-[15px]">{benefit}</p>
                    </div>
                  ))}
                </div>
                <a href="/#contact" className="btn-primary w-full justify-center">Become a Partner &rarr;</a>
              </div>
            </div>

            {/* Bottom scripture */}
            <div className="bg-linen p-10 lg:p-14 text-center border-t-4 border-amber">
              <p className="font-serif text-xl lg:text-2xl text-espresso italic leading-relaxed max-w-2xl mx-auto mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom.&rdquo;
              </p>
              <p className="text-amber text-sm font-sans tracking-widest uppercase">Luke 6:38</p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </ClientShell>
  );
}
