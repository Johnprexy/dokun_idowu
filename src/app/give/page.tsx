"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AMOUNTS = [1000, 2500, 5000, 10000, 25000, 50000];

const GIVING_REASONS = [
  {
    icon: "✦",
    title: "Support the Ministry",
    body: "Your giving directly funds teaching resources, conferences, and outreach through Rev. Dokun Idowu's ministry.",
  },
  {
    icon: "✦",
    title: "Partner in the Word",
    body: "Every partnership sows into the preaching of the Gospel, the training of ministers, and the expansion of the Kingdom.",
  },
  {
    icon: "✦",
    title: "Invest in Mentorship",
    body: "Your support helps keep the mentorship platform accessible to the next generation of Kingdom leaders.",
  },
];

export default function GivePage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [submitted, setSubmitted] = useState(false);

  const amount = custom ? Number(custom) : selected;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">

        {/* Hero */}
        <div className="bg-mahogany pt-36 pb-20 px-6 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-medium mb-4">
              PDee · Give
            </p>
            <h1
              className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Give &amp; Partner
            </h1>
            <div className="w-12 h-0.5 bg-amber mx-auto mb-6" />
            <p className="text-parchment/65 text-lg font-sans leading-relaxed">
              &ldquo;But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.&rdquo;
            </p>
            <p className="text-amber text-sm font-sans mt-3 tracking-wide">— 2 Corinthians 9:6</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Left — Why give */}
            <div>
              <h2
                className="text-2xl lg:text-3xl font-bold text-espresso mb-3 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Partner with the Ministry
              </h2>
              <div className="w-10 h-0.5 bg-amber mb-8" />

              <div className="space-y-8 mb-12">
                {GIVING_REASONS.map((r, i) => (
                  <div key={i} className="flex gap-5">
                    <span className="text-amber text-lg mt-0.5 flex-shrink-0">{r.icon}</span>
                    <div>
                      <h3 className="text-base font-bold text-espresso font-sans mb-2">{r.title}</h3>
                      <p className="text-umber font-sans text-base leading-relaxed">{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bank details */}
              <div className="bg-espresso text-parchment p-8">
                <p className="text-[10px] tracking-[0.22em] uppercase text-amber font-sans font-medium mb-5">
                  Bank Transfer Details
                </p>
                {[
                  { label: "Account Name", value: "Rev. Dokun Idowu Ministry" },
                  { label: "Bank", value: "To be updated" },
                  { label: "Account No.", value: "To be updated" },
                  { label: "Sort Code", value: "To be updated" },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between py-3 border-b border-amber/10 last:border-0">
                    <span className="text-parchment/50 font-sans text-sm">{d.label}</span>
                    <span className="text-parchment font-sans text-sm font-medium">{d.value}</span>
                  </div>
                ))}
                <p className="text-parchment/40 text-xs font-sans mt-5 leading-relaxed">
                  After transferring, please send your name and reference to{" "}
                  <a href="mailto:info@dokuniidowu.org" className="text-amber hover:underline">
                    info@dokuniidowu.org
                  </a>
                </p>
              </div>
            </div>

            {/* Right — Give form */}
            <div>
              <h2
                className="text-2xl lg:text-3xl font-bold text-espresso mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Make a Gift
              </h2>
              <div className="w-10 h-0.5 bg-amber mb-8" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Frequency toggle */}
                <div className="flex border border-sand/60 overflow-hidden">
                  {(["once", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-3 text-sm font-sans font-semibold tracking-widest uppercase transition-colors ${
                        frequency === f
                          ? "bg-espresso text-amber"
                          : "bg-white text-umber hover:bg-linen"
                      }`}
                    >
                      {f === "once" ? "One-time" : "Monthly"}
                    </button>
                  ))}
                </div>

                {/* Amount grid */}
                <div>
                  <label className="block text-[11px] tracking-[0.16em] uppercase text-taupe font-sans font-semibold mb-3">
                    Select Amount (₦)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {AMOUNTS.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => { setSelected(a); setCustom(""); }}
                        className={`py-3 text-sm font-sans font-semibold border transition-colors ${
                          selected === a && !custom
                            ? "bg-espresso text-amber border-espresso"
                            : "bg-white text-espresso border-sand/60 hover:border-amber/50"
                        }`}
                      >
                        ₦{a.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom amount */}
                <div>
                  <label className="block text-[11px] tracking-[0.16em] uppercase text-taupe font-sans font-semibold mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe font-sans font-semibold">₦</span>
                    <input
                      type="number"
                      min="100"
                      placeholder="0"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                      className="w-full bg-white border border-sand/60 focus:border-amber pl-8 pr-4 py-3.5 text-sm text-espresso font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] tracking-[0.16em] uppercase text-taupe font-sans font-semibold mb-2">First Name *</label>
                    <input required placeholder="Tunde" className="w-full bg-white border border-sand/60 focus:border-amber px-4 py-3.5 text-sm text-espresso font-sans outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.16em] uppercase text-taupe font-sans font-semibold mb-2">Last Name *</label>
                    <input required placeholder="Adeyemi" className="w-full bg-white border border-sand/60 focus:border-amber px-4 py-3.5 text-sm text-espresso font-sans outline-none transition-colors" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] tracking-[0.16em] uppercase text-taupe font-sans font-semibold mb-2">Email Address *</label>
                  <input required type="email" placeholder="your@email.com" className="w-full bg-white border border-sand/60 focus:border-amber px-4 py-3.5 text-sm text-espresso font-sans outline-none transition-colors" />
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-[11px] tracking-[0.16em] uppercase text-taupe font-sans font-semibold mb-2">Purpose (optional)</label>
                  <select className="w-full bg-white border border-sand/60 focus:border-amber px-4 py-3.5 text-sm text-espresso font-sans outline-none transition-colors appearance-none">
                    <option value="">General Ministry Support</option>
                    <option>Conference Sponsorship</option>
                    <option>Mentorship Platform</option>
                    <option>Teaching Resources</option>
                    <option>Outreach &amp; Evangelism</option>
                  </select>
                </div>

                {submitted && (
                  <div className="bg-amber/10 border-l-2 border-amber px-5 py-4">
                    <p className="text-sm font-sans text-espresso font-medium">
                      ✦ Thank you for your giving. We will be in touch shortly. God bless you!
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-ember text-parchment font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-mahogany transition-colors mt-2"
                >
                  {amount ? `Give ₦${Number(amount).toLocaleString()} ${frequency === "monthly" ? "/ month" : ""}` : "Give Now"} →
                </button>

                <p className="text-xs text-taupe/60 font-sans text-center leading-relaxed">
                  Your gift is a seed sown into the Kingdom. All giving records are kept private.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
