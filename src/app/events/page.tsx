import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientShell from "@/components/ui/ClientShell";

export const metadata: Metadata = {
  title: "Upcoming Events | Rev. Dokun Idowu",
  description: "Upcoming conferences, teachings, and ministry events featuring Rev. Dokun Idowu.",
};

const EVENTS = [
  {
    id: 1,
    title: "Rhema Nigeria Annual Conference",
    location: "Abuja, Nigeria",
    type: "Conference",
    description: "Join Rev. Dokun Idowu and the Rhema Nigeria faculty for the annual conference — a gathering of believers hungry for the Word of God and the move of the Holy Spirit.",
  },
  {
    id: 2,
    title: "RBTC Taster Course — Biblical Prosperity",
    location: "Rhema Nigeria Campus",
    type: "Teaching",
    description: "An intensive teaching session on Biblical Prosperity with Rev. Dokun Idowu. Open to all who desire a firm foundation in God's Word concerning finances and Kingdom advancement.",
  },
  {
    id: 3,
    title: "How to be Led by the Spirit",
    location: "Rhema Nigeria — Hausa Campus",
    type: "Seminar",
    description: "A practical, Word-based seminar on being led by the Holy Spirit in everyday life — for believers, ministers, and marketplace leaders alike.",
  },
];

export default function EventsPage() {
  return (
    <ClientShell>
      <Navbar />
      <main className="bg-smoke min-h-screen">

        <section className="bg-mahogany pt-36 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(196,98,45,0.1)_0%,transparent_60%)]" />
          <div className="section-wrap relative z-10">
            <p className="section-eyebrow mb-4">Ministry Calendar</p>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-parchment leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Upcoming
              <span className="block text-amber italic">Events</span>
            </h1>
            <p className="text-parchment/70 font-sans text-lg max-w-xl leading-relaxed">
              Stay connected with Rev. Dokun Idowu&apos;s ministry calendar. Register your interest for upcoming conferences, seminars, and teaching sessions.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="section-wrap">

            <div className="bg-amber/10 border-l-4 border-amber px-6 py-5 mb-16 flex items-start gap-4">
              <span className="text-amber text-xl mt-0.5">&#9432;</span>
              <div>
                <p className="font-sans font-semibold text-espresso text-base">Dates being finalised</p>
                <p className="font-sans text-umber text-sm mt-1 leading-relaxed">Specific dates are being confirmed. Register your interest and you will be notified as soon as dates are announced.</p>
              </div>
            </div>

            <div className="space-y-6">
              {EVENTS.map((event) => (
                <div key={event.id} className="bg-white border border-sand/40 p-8 lg:p-10 flex flex-col lg:flex-row gap-8 hover:border-amber/40 transition-colors duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="bg-espresso text-parchment px-5 py-4 text-center">
                      <p className="font-display text-2xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>TBA</p>
                      <p className="text-[10px] tracking-widest uppercase text-parchment/50 font-sans mt-1">Date TBA</p>
                    </div>
                    <span className="block mt-3 text-center text-[10px] tracking-[0.15em] uppercase text-amber font-sans font-medium bg-amber/10 px-3 py-1">{event.type}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-espresso mb-2 group-hover:text-ember transition-colors" style={{ fontFamily: "var(--font-display)" }}>{event.title}</h2>
                    <p className="text-sm font-sans text-amber font-medium mb-4 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {event.location}
                    </p>
                    <p className="font-sans text-umber leading-relaxed text-base mb-6">{event.description}</p>
                    <a href="/#contact" className="btn-primary text-sm py-3 px-8 inline-flex">Register Interest &rarr;</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-espresso text-parchment p-10 lg:p-14 text-center">
              <p className="text-[11px] tracking-[0.22em] uppercase text-amber font-sans font-medium mb-4">Stay Updated</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-parchment mb-4" style={{ fontFamily: "var(--font-display)" }}>Never Miss an Event</h2>
              <p className="text-parchment/60 font-sans max-w-md mx-auto mb-8 leading-relaxed">Send a message through the contact form to be added to the ministry mailing list for event updates.</p>
              <a href="/#contact" className="btn-primary">Contact Us &rarr;</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </ClientShell>
  );
}
