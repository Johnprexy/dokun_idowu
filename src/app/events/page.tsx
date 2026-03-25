import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const EVENTS = [
  {
    id: 1,
    title: "Rhema Nigeria Annual Conference",
    date: "May 15 – 17, 2026",
    time: "9:00 AM daily",
    location: "Rhema Nigeria HQ, Abuja",
    type: "Conference",
    description:
      "The flagship annual gathering of Rhema Bible Training Centre Nigeria. Rev. Dokun Idowu ministers alongside other Executive Leaders in a power-packed three-day conference of the Word, worship, and the move of the Holy Ghost.",
    featured: true,
  },
  {
    id: 2,
    title: "PDee Speaks — Abuja",
    date: "June 7, 2026",
    time: "6:00 PM",
    location: "Abuja, Nigeria",
    type: "Teaching Session",
    description:
      "A focused evening of Bible teaching with Rev. Dokun Idowu. Expect practical, Spirit-led ministry on faith, purpose, and walking in the fullness of God's Word.",
    featured: false,
  },
  {
    id: 3,
    title: "Mentorship Intensive — Cohort 2",
    date: "July 12 – 13, 2026",
    time: "10:00 AM",
    location: "Online / Hybrid",
    type: "Mentorship",
    description:
      "A two-day intensive for those enrolled in Rev. Idowu's mentorship platform. Sessions cover purpose discovery, Kingdom leadership, and practical ministry development.",
    featured: false,
  },
  {
    id: 4,
    title: "RBTC Taster Course",
    date: "August 2, 2026",
    time: "10:00 AM",
    location: "Rhema Nigeria, Lagos Campus",
    type: "Training",
    description:
      "An introductory session for those considering enrolling in the Rhema Bible Training Centre. Rev. Idowu teaches on the foundation of faith and the call to ministry.",
    featured: false,
  },
];

const TYPE_COLORS: Record<string, string> = {
  Conference: "bg-ember/10 text-ember",
  "Teaching Session": "bg-amber/10 text-amber",
  Mentorship: "bg-umber/10 text-umber",
  Training: "bg-taupe/20 text-umber",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">

        {/* Page hero */}
        <div className="bg-mahogany pt-36 pb-20 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-medium mb-4">
              PDee · Calendar
            </p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Upcoming Events
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/60 text-lg font-sans leading-relaxed max-w-xl">
              Join Rev. Dokun Idowu at conferences, teaching sessions, and mentorship gatherings near you.
            </p>
          </div>
        </div>

        {/* Events list */}
        <div className="max-w-4xl mx-auto px-6 lg:px-16 py-20">

          {EVENTS.map((event, i) => (
            <div
              key={event.id}
              className={`flex flex-col lg:flex-row gap-8 py-10 border-b border-sand/40 ${i === 0 ? "border-t" : ""}`}
            >
              {/* Date block */}
              <div className="lg:w-48 flex-shrink-0">
                <div className={`inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5 mb-4 ${TYPE_COLORS[event.type] || "bg-sand/30 text-umber"}`}>
                  {event.type}
                </div>
                <p className="text-espresso font-sans font-bold text-base leading-snug">
                  {event.date}
                </p>
                <p className="text-umber/70 font-sans text-sm mt-1">{event.time}</p>
              </div>

              {/* Content */}
              <div className="flex-1">
                {event.featured && (
                  <span className="inline-block text-[10px] tracking-[0.18em] uppercase text-parchment bg-ember px-3 py-1 font-sans font-semibold mb-3">
                    Featured Event
                  </span>
                )}
                <h2
                  className="text-2xl lg:text-3xl font-bold text-espresso mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-umber/70 font-sans mb-4">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {event.location}
                </div>
                <p className="text-umber font-sans text-base leading-relaxed mb-6">
                  {event.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-ember hover:text-mahogany transition-colors tracking-wide"
                >
                  Register / Enquire →
                </Link>
              </div>
            </div>
          ))}

          {/* No events fallback note */}
          <p className="text-center text-umber/40 font-sans text-sm mt-12 italic">
            More events will be announced. Check back or follow{" "}
            <a href="https://instagram.com/dokun_idowu" target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">
              @dokun_idowu
            </a>{" "}
            for updates.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
