import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PraySection from "@/components/sections/PraySection";

export const metadata = {
  title: "Pray With PDee — Rev. Dokun Idowu",
  description: "Submit your prayer request and receive a Word from Scripture to stand on.",
};

export default function PrayPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-mahogany">
          <Image src="/images/pic5.jpeg" alt="" fill
            className="object-cover object-[center_25%]"
            style={{ filter: "blur(2px)", transform: "scale(1.04)" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(42,27,18,0.55) 0%, rgba(42,27,18,0.97) 100%)" }} />
          <div className="absolute top-0 inset-x-0 h-1 bg-amber" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-amber" /> PDee · Prayer
              </p>
              <h1 className="font-bold text-parchment leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
                Pray With<br />
                <span className="text-amber italic">Rev. Idowu</span>
              </h1>
              <div className="w-12 h-0.5 bg-amber mb-6" />
              <p className="text-parchment/55 font-sans text-lg leading-relaxed mb-6">
                Share your request. Receive a Word from God&apos;s Word to stand on.
              </p>
              <blockquote className="border-l-2 border-amber pl-5">
                <p className="font-serif italic text-parchment/50 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;The effectual fervent prayer of a righteous man availeth much.&rdquo;
                </p>
                <cite className="text-[10px] tracking-widest uppercase text-amber font-sans not-italic mt-2 block">James 5:16</cite>
              </blockquote>
            </div>
          </div>
        </section>
        <PraySection />
      </main>
      <Footer />
    </>
  );
}
