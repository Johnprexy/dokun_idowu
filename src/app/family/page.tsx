import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FamilySection from "@/components/sections/FamilySection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Family — Rev. Dokun Idowu (PDee)",
  description: "Meet the Idowu family — Rev. Dokun, Mrs. Tobore, and their three amazing children. A home built on grace, love, and Kingdom purpose.",
};

async function fetchPhotos() {
  try {
    const { safeFetch, familyQuery } = await import("@/lib/sanity");
    return await safeFetch(familyQuery, []);
  } catch { return []; }
}

export default async function FamilyPage() {
  const photos = await fetchPhotos();
  return (
    <>
      <Navbar />
      <main className="bg-linen min-h-screen">

        {/* ── Page hero — cinematic split ── */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex overflow-hidden">
          {/* Left — dark panel */}
          <div className="relative z-10 bg-mahogany flex flex-col justify-end px-8 lg:px-16 pb-14 pt-36 lg:w-[45%]">
            <div className="absolute inset-0 grain-overlay pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" />
                Heart &amp; Home
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
                The Idowu<br />
                <span className="text-amber italic">Family</span>
              </h1>
              <div className="w-12 h-0.5 bg-amber mb-6" />
              <p className="text-parchment/55 font-sans text-base leading-relaxed max-w-sm">
                Behind every ministry is a home — grounded in grace, anchored in love, and devoted to Kingdom purpose.
              </p>
            </div>
          </div>

          {/* Right — photo collage */}
          <div className="relative lg:w-[55%] min-h-[40vh] lg:min-h-full grid grid-cols-2">
            <div className="relative overflow-hidden">
              <Image src="/images/ministry-couple.jpg" alt="Rev. & Mrs. Idowu" fill className="object-cover object-[center_30%]" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="/images/tobore-idowu.jpg" alt="Mrs. Tobore Idowu" fill className="object-cover object-top" />
            </div>
            {/* Overlay with caption */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 60%, #2A1B12 100%)" }} />
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-parchment/70 font-sans text-xs tracking-widest uppercase">Rev. &amp; Mrs. Dokun Idowu</p>
            </div>
          </div>
        </section>

        {/* ── Family intro strip ── */}
        <section className="bg-parchment py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-2">
                <p className="text-umber font-sans text-lg leading-relaxed mb-4">
                  Rev. Dokun Idowu is married to <strong className="text-espresso font-bold">Mrs. Tobore Idowu</strong>, a woman of grace and Kingdom conviction. Together they are blessed with three amazing children. Their home is a living testimony of what God can do when a family is fully surrendered to His purpose.
                </p>
                <p className="text-umber/65 font-sans text-base leading-relaxed">
                  PDee has always said — a man&apos;s ministry begins at home. The Idowu family embodies that truth in every season.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { num: "1", label: "Beautiful Wife" },
                  { num: "3", label: "Amazing Children" },
                  { num: "25+", label: "Years of Grace" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 border-b border-sand/40 pb-4 last:border-0 last:pb-0">
                    <span className="text-2xl font-bold text-amber flex-shrink-0" style={{ fontFamily: "var(--font-display)" }}>{s.num}</span>
                    <span className="text-sm font-sans text-umber/70 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Photo gallery ── */}
        <FamilySection photos={photos} />

        {/* ── CTA ── */}
        <section className="bg-espresso py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-amber text-2xl block mb-5">✦</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Connect with Rev. &amp; Mrs. Idowu
            </h3>
            <p className="text-parchment/50 font-sans mb-8 leading-relaxed max-w-sm mx-auto">
              For ministry partnerships, speaking engagements, or simply to say hello.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center btn-primary">Get in Touch →</Link>
              <Link href="/give" className="inline-flex items-center justify-center border border-parchment/20 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors">
                Give &amp; Partner
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
