import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const ITINERARY = [
  {
    month: "April 2026",
    items: [
      { date: "Apr 6", day: "Mon", title: "PDee Speaks — Online Teaching Session", location: "Virtual / Zoom", status: "confirmed" },
      { date: "Apr 20", day: "Sun", title: "Guest Ministration — Abuja", location: "Abuja, Nigeria", status: "confirmed" },
    ],
  },
  {
    month: "May 2026",
    items: [
      { date: "May 15", day: "Fri", title: "Rhema Nigeria Annual Conference — Day 1", location: "Rhema Nigeria HQ, Abuja", status: "confirmed" },
      { date: "May 16", day: "Sat", title: "Rhema Nigeria Annual Conference — Day 2", location: "Rhema Nigeria HQ, Abuja", status: "confirmed" },
      { date: "May 17", day: "Sun", title: "Rhema Nigeria Annual Conference — Day 3", location: "Rhema Nigeria HQ, Abuja", status: "confirmed" },
    ],
  },
  {
    month: "June 2026",
    items: [
      { date: "Jun 7", day: "Sun", title: "PDee Speaks — Abuja Teaching Night", location: "Abuja, Nigeria", status: "confirmed" },
      { date: "Jun 22", day: "Mon", title: "Mentorship Session — Cohort 2 Orientation", location: "Online", status: "tentative" },
    ],
  },
  {
    month: "July 2026",
    items: [
      { date: "Jul 12", day: "Sun", title: "Mentorship Intensive — Day 1", location: "Online / Hybrid", status: "confirmed" },
      { date: "Jul 13", day: "Mon", title: "Mentorship Intensive — Day 2", location: "Online / Hybrid", status: "confirmed" },
      { date: "Jul 27", day: "Sun", title: "Guest Ministration — Lagos", location: "Lagos, Nigeria", status: "tentative" },
    ],
  },
  {
    month: "August 2026",
    items: [
      { date: "Aug 2", day: "Sun", title: "RBTC Taster Course", location: "Rhema Nigeria Lagos Campus", status: "confirmed" },
    ],
  },
];

export default function ItineraryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">

        {/* Hero */}
        <div className="bg-espresso pt-36 pb-20 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-medium mb-4">
              PDee · Schedule
            </p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ministry Itinerary
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/60 text-lg font-sans leading-relaxed max-w-xl">
              Rev. Dokun Idowu&apos;s confirmed and upcoming ministry schedule. For booking and invitations, use the contact form.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-ember text-parchment text-sm font-sans font-semibold tracking-widest uppercase px-8 py-4 hover:bg-mahogany transition-colors"
            >
              Invite Rev. Idowu →
            </Link>
          </div>
        </div>

        {/* Schedule */}
        <div className="max-w-4xl mx-auto px-6 lg:px-16 py-20">

          {/* Legend */}
          <div className="flex items-center gap-6 mb-12 pb-6 border-b border-sand/40">
            <div className="flex items-center gap-2 text-sm font-sans text-umber">
              <span className="w-3 h-3 rounded-full bg-amber inline-block" /> Confirmed
            </div>
            <div className="flex items-center gap-2 text-sm font-sans text-umber">
              <span className="w-3 h-3 rounded-full border-2 border-taupe inline-block" /> Tentative
            </div>
          </div>

          {ITINERARY.map((group) => (
            <div key={group.month} className="mb-14">
              {/* Month header */}
              <h2
                className="text-2xl font-bold text-espresso mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {group.month}
              </h2>

              <div className="space-y-3">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 bg-white border border-sand/30 px-6 py-5 hover:border-amber/40 transition-colors group"
                  >
                    {/* Date */}
                    <div className="flex-shrink-0 w-16 text-center">
                      <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-taupe">
                        {item.day}
                      </p>
                      <p className="text-xl font-bold text-espresso font-sans">
                        {item.date.split(" ")[1]}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-px self-stretch bg-sand/50 flex-shrink-0" />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-espresso font-sans leading-snug group-hover:text-ember transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5 text-sm text-umber/60 font-sans">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {item.location}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex-shrink-0 pt-0.5">
                      {item.status === "confirmed" ? (
                        <span className="w-3 h-3 rounded-full bg-amber inline-block" title="Confirmed" />
                      ) : (
                        <span className="w-3 h-3 rounded-full border-2 border-taupe inline-block" title="Tentative" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Invite CTA */}
          <div className="bg-mahogany p-10 text-center mt-8">
            <p className="text-[11px] tracking-[0.22em] uppercase text-amber font-sans font-medium mb-3">
              Invitations
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold text-parchment mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Invite Rev. Dokun Idowu to Minister
            </h3>
            <p className="text-parchment/60 font-sans text-base max-w-md mx-auto mb-8 leading-relaxed">
              For speaking engagements, conferences, and special ministrations — reach out through the contact form.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber text-mahogany text-sm font-sans font-bold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors"
            >
              Send an Invitation →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
