import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import QuoteStrip from "@/components/sections/QuoteStrip";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Rev. Dokun Idowu (PDee)",
  description: "The story, calling, and ministry journey of Rev. Dokun Idowu — anointed Bible teacher, gifted pioneer, and Executive Leader at Rhema Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <div className="relative bg-mahogany pt-36 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/hero-image.jpeg" alt="" fill className="object-cover object-[center_15%] opacity-20" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(42,27,18,0.85), rgba(42,27,18,0.95))" }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              PDee · His Story
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              About<br />
              <span className="text-amber italic">Rev. Dokun Idowu</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/60 text-lg font-sans leading-relaxed max-w-xl">
              A life poured out for the Kingdom — from a teenage pioneer call to Executive Leadership at Rhema Nigeria.
            </p>
          </div>
        </div>

        {/* Full bio */}
        <AboutSection />

        {/* Quote */}
        <QuoteStrip />

        {/* Timeline */}
        <TimelineSection />

        {/* Ministry credentials */}
        <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block">
            <Image src="/images/p4.jpeg" alt="" fill className="object-cover object-[center_top] opacity-8" style={{ opacity: 0.06 }} />
          </div>
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              Ministry Roles
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-espresso mb-12" style={{ fontFamily: "var(--font-display)" }}>
              Service &amp; <span className="text-ember italic">Leadership</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { role: "Executive Leader", org: "Rhema Bible Training Centre, Nigeria", current: true },
                { role: "Charter Class Member", org: "Rhema Nigeria", current: false },
                { role: "Pioneer Team Leader", org: "Rhema Nigeria Kaduna Campus", current: false },
                { role: "Pioneer Team Leader", org: "Rhema Nigeria Hausa Campus", current: false },
                { role: "Divisional Leader", org: "Retail & Merchandise, Rhema Nigeria", current: false },
                { role: "Divisional Leader", org: "Branding, Promotions & Marketing", current: false },
                { role: "Divisional Leader", org: "Training Centre Division", current: false },
                { role: "Associate Pastor", org: "Victory Christian Fellowship, UI", current: false },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border border-sand/40 hover:border-amber/40 transition-colors">
                  <span className="text-amber text-sm mt-0.5 flex-shrink-0">✦</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-espresso font-sans text-base">{r.role}</h4>
                      {r.current && (
                        <span className="text-[9px] tracking-widest uppercase bg-amber/15 text-amber font-sans font-semibold px-2 py-0.5">Current</span>
                      )}
                    </div>
                    <p className="text-sm text-umber/65 font-sans mt-0.5">{r.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-espresso py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Invite Rev. Idowu to Minister
            </h3>
            <p className="text-parchment/50 font-sans mb-8 leading-relaxed">For speaking engagements, conferences, and special ministrations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center btn-primary">Connect →</Link>
              <Link href="/teachings" className="inline-flex items-center justify-center border border-parchment/20 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors">
                Watch Teachings
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
