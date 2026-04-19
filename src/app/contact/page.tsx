import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact — Rev. Dokun Idowu",
  description: "Connect with Rev. Dokun Idowu for speaking engagements, mentorship enquiries, ministry partnerships, or general correspondence.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">
        <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-espresso">
          <Image src="/images/pic2.jpeg" alt="" fill
            className="object-cover object-[center_25%]"
            style={{ filter: "blur(2px)", transform: "scale(1.04)" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(61,43,31,0.5) 0%, rgba(61,43,31,0.97) 100%)" }} />
          <div className="absolute top-0 inset-x-0 h-1 bg-amber" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-amber" /> PDee · Connect
            </p>
            <h1 className="font-bold text-parchment leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              Get in <span className="text-amber italic">Touch</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-5" />
            <p className="text-parchment/55 font-sans text-lg leading-relaxed max-w-xl">
              For speaking engagements, mentorship enquiries, ministry partnerships, or general correspondence.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
