import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Upcoming Events — Rev. Dokun Idowu (PDee)",
  description: "Upcoming conferences, teachings, and ministry events featuring Rev. Dokun Idowu.",
};

const EVENTS = [
  {
    id: 1,
    title: "Rhema Nigeria Annual Conference",
    date: "May 15 – 17, 2026",
    day: "15–17",
    month: "MAY",
    location: "Abuja, Nigeria",
    type: "Conference",
    typeColor: "#C8A84B",
    img: "/images/ministry-preaching-1.jpg",
    description: "The flagship annual gathering of Rhema Bible Training Centre Nigeria. Rev. Dokun Idowu ministers alongside other Executive Leaders in a power-packed three-day conference of the Word, worship, and the move of the Holy Ghost.",
    featured: true,
  },
  {
    id: 2,
    title: "PDee Speaks — Abuja Teaching Night",
    date: "June 7, 2026",
    day: "07",
    month: "JUN",
    location: "Abuja, Nigeria",
    type: "Teaching",
    typeColor: "#C4622D",
    img: "/images/ministry-preaching-2.jpg",
    description: "A focused evening of Bible teaching with Rev. Dokun Idowu. Expect practical, Spirit-led ministry on faith, purpose, and walking in the fullness of God's Word.",
    featured: false,
  },
  {
    id: 3,
    title: "Mentorship Intensive — Cohort 2",
    date: "July 12 – 13, 2026",
    day: "12–13",
    month: "JUL",
    location: "Online / Hybrid",
    type: "Mentorship",
    typeColor: "#7A6248",
    img: "/images/pic5.jpeg",
    description: "A two-day intensive for those enrolled in Rev. Idowu's mentorship platform. Sessions cover purpose discovery, Kingdom leadership, and practical ministry development.",
    featured: false,
  },
  {
    id: 4,
    title: "RBTC Taster Course",
    date: "August 2, 2026",
    day: "02",
    month: "AUG",
    location: "Rhema Nigeria, Lagos Campus",
    type: "Training",
    typeColor: "#3D2B1F",
    img: "/images/ministry-graduation.jpg",
    description: "An introductory session for those considering enrolling in the Rhema Bible Training Centre. Rev. Idowu teaches on the foundation of faith and the call to ministry.",
    featured: false,
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-mahogany">
          <Image src="/images/ministry-preaching-1.jpg" alt="Events" fill
            className="object-cover object-[center_30%]" priority />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(42,27,18,0.4) 0%, rgba(42,27,18,0.97) 100%)" }} />
          <div className="absolute top-0 inset-x-0 h-1 bg-amber" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-amber" /> PDee · Calendar
            </p>
            <h1 className="font-bold text-parchment leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
              Upcoming <span className="text-amber italic">Events</span>
            </h1>
            <p className="text-parchment/55 font-sans text-base max-w-lg leading-relaxed">
              Join Rev. Dokun Idowu at conferences, teaching sessions, and mentorship gatherings. All are welcome.
            </p>
          </div>
        </section>

        {/* ── FEATURED EVENT ── */}
        {EVENTS.filter(e => e.featured).map(event => (
          <section key={event.id} className="relative overflow-hidden min-h-[380px] flex items-center">
            <Image src={event.img} alt={event.title} fill className="object-cover object-[center_30%]" />
            <div className="absolute inset-0" style={{ background: "rgba(42,27,18,0.88)" }} />
            <div className="absolute top-0 inset-x-0 h-px bg-amber/20" />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Date block */}
                <div className="text-center lg:text-left">
                  <div className="inline-block bg-amber text-mahogany px-6 py-4 mb-4">
                    <p className="text-5xl font-black leading-none" style={{ fontFamily: "var(--font-display)" }}>{event.day}</p>
                    <p className="text-sm font-bold tracking-widest uppercase mt-1">{event.month} 2026</p>
                  </div>
                  <p className="text-parchment/50 font-sans text-sm">{event.location}</p>
                </div>
                {/* Content */}
                <div className="lg:col-span-2">
                  <span className="inline-block text-[9px] tracking-[0.2em] uppercase font-sans font-bold px-3 py-1 mb-4 bg-amber/15 text-amber">
                    ✦ Featured Event
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-parchment mb-4 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}>{event.title}</h2>
                  <p className="text-parchment/55 font-sans text-base leading-relaxed mb-6">{event.description}</p>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-gold-light transition-colors">
                    Register / Enquire →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── OTHER EVENTS ── */}
        <section className="bg-smoke py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-10 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" /> More Upcoming
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {EVENTS.filter(e => !e.featured).map((event, i) => (
                <div key={event.id} className="group overflow-hidden bg-white border border-sand/40 hover:border-amber/40 transition-colors">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <Image src={event.img} alt={event.title} fill
                      className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(42,27,18,0.8), transparent)" }} />
                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-parchment px-3 py-1.5 inline-block">
                        <p className="text-espresso font-black text-lg leading-none" style={{ fontFamily: "var(--font-display)" }}>{event.day}</p>
                        <p className="text-[9px] tracking-widest uppercase text-umber/60 font-sans font-bold mt-0.5">{event.month}</p>
                      </div>
                    </div>
                    {/* Type badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 text-[9px] font-sans font-bold tracking-widest uppercase"
                      style={{ background: event.typeColor, color: "#F5EFE0" }}>
                      {event.type}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <h3 className="font-bold text-espresso text-lg mb-2 leading-snug group-hover:text-ember transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}>{event.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-umber/50 font-sans mb-3">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {event.location}
                    </div>
                    <p className="text-umber/60 font-sans text-sm leading-relaxed line-clamp-2 mb-4">{event.description}</p>
                    <Link href="/contact"
                      className="text-[11px] font-sans font-bold tracking-widest uppercase text-ember hover:text-mahogany transition-colors">
                      Register / Enquire →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-umber/35 font-sans text-sm mt-14 italic">
              More events announced as they are confirmed. Follow{" "}
              <a href="https://instagram.com/dokun_idowu" target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">@dokun_idowu</a>{" "}
              for updates.
            </p>
          </div>
        </section>

        {/* ── INVITE CTA ── */}
        <section className="relative overflow-hidden py-20">
          <Image src="/images/ministry-preaching-2.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(42,27,18,0.90)" }} />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <span className="text-amber text-2xl block mb-5">✦</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Invite Rev. Dokun Idowu to Minister
            </h3>
            <p className="text-parchment/50 font-sans mb-8 leading-relaxed">
              For conferences, special teachings, and ministry engagements — reach out through the contact form.
            </p>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors">
              Send an Invitation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
