import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientShell from "@/components/ui/ClientShell";

export const metadata: Metadata = {
  title: "Itinerary | Rev. Dokun Idowu",
  description: "Ministry itinerary and speaking schedule for Rev. Dokun Idowu.",
};

const PAST = [
  { year: "2024", title: "Rhema Conference", location: "Abuja, Nigeria", role: "Speaker" },
  { year: "2024", title: "RBTC Graduation Ceremony", location: "Rhema Nigeria", role: "Faculty Leader" },
  { year: "2023", title: "Doxazo — An Evening of Worship", location: "Rock of Ages Mall, Abuja", role: "Ministering" },
  { year: "2023", title: "Rhema Conference Lagos", location: "Lagos, Nigeria", role: "Speaker" },
  { year: "2022", title: "How to be Led by the Spirit", location: "Rhema Ghana", role: "Speaker" },
  { year: "2019", title: "RBTC Taster — Biblical Prosperity", location: "Rhema Nigeria", role: "Teacher" },
];

export default function ItineraryPage() {
  return (
    <ClientShell>
      <Navbar />
      <main className="bg-smoke min-h-screen">

        <section className="bg-mahogany pt-36 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(196,98,45,0.1)_0%,transparent_60%)]" />
          <div className="section-wrap relative z-10">
            <p className="section-eyebrow mb-4">Speaking Schedule</p>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-parchment leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Ministry
              <span className="block text-amber italic">Itinerary</span>
            </h1>
            <p className="text-parchment/70 font-sans text-lg max-w-xl leading-relaxed">
              Rev. Dokun Idowu ministers at conferences, seminars, and training sessions across Nigeria and beyond. Invite him to your event or view his upcoming schedule.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="/#contact" className="btn-primary">Invite Rev. Idowu &rarr;</a>
              <a href="/events" className="btn-outline text-parchment border-parchment/20 hover:border-amber hover:text-amber">View Upcoming Events</a>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="section-wrap">

            {/* Booking info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
              {[
                { icon: "✦", title: "Conferences", desc: "Rev. Idowu ministers at full conferences and multi-day gatherings, bringing the Word with clarity and the move of the Spirit." },
                { icon: "✦", title: "Seminars & Workshops", desc: "Focused teaching sessions on Faith, the Holy Spirit, Pioneer Ministry, and Leadership — practical and Word-based." },
                { icon: "✦", title: "Church Ministrations", desc: "Available for Sunday services, special meetings, and revival sessions. Graced for the gifts of the Spirit in congregational settings." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-sand/40 p-8 hover:border-amber/40 transition-colors">
                  <span className="text-amber text-xl block mb-4">{item.icon}</span>
                  <h3 className="font-display text-xl font-bold text-espresso mb-3" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="font-sans text-umber leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Past engagements */}
            <div className="mb-6">
              <p className="section-eyebrow mb-4">Track Record</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-espresso mb-2" style={{ fontFamily: "var(--font-display)" }}>Past Engagements</h2>
              <div className="w-12 h-px bg-amber mt-4 mb-10" />
            </div>

            <div className="space-y-0 border-t border-sand/40">
              {PAST.map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-5 border-b border-sand/40 hover:bg-white/60 transition-colors px-4 group">
                  <span className="font-display text-lg font-bold text-amber/70 w-12 flex-shrink-0" style={{ fontFamily: "var(--font-display)" }}>{item.year}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-semibold text-espresso text-base group-hover:text-ember transition-colors truncate">{item.title}</p>
                    <p className="font-sans text-umber/60 text-sm mt-0.5">{item.location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-amber bg-amber/10 px-3 py-1 font-sans font-medium flex-shrink-0">{item.role}</span>
                </div>
              ))}
            </div>

            {/* Invite CTA */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-espresso p-10 lg:p-14">
                <p className="text-[11px] tracking-[0.22em] uppercase text-amber font-sans font-medium mb-4">Booking</p>
                <h2 className="font-display text-3xl font-bold text-parchment mb-4" style={{ fontFamily: "var(--font-display)" }}>Invite Rev. Idowu</h2>
                <p className="text-parchment/60 font-sans leading-relaxed mb-8 text-[15px]">To invite Rev. Dokun Idowu to minister at your church, conference, or event, please get in touch with full details of your event.</p>
                <a href="/#contact" className="btn-primary">Send an Invitation &rarr;</a>
              </div>
              <div className="bg-amber p-10 lg:p-14">
                <p className="text-[11px] tracking-[0.22em] uppercase text-mahogany/60 font-sans font-medium mb-4">What to Expect</p>
                <h2 className="font-display text-3xl font-bold text-mahogany mb-6" style={{ fontFamily: "var(--font-display)" }}>Ministry in Word &amp; Spirit</h2>
                <ul className="space-y-3">
                  {["Anointed Bible teaching", "Practical and applicable messages", "Demonstration of the gifts of the Spirit", "Move of the Holy Ghost", "Pioneer and leadership training"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-mahogany/80 font-sans text-[15px]">
                      <span className="text-mahogany/50 mt-1 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </ClientShell>
  );
}
