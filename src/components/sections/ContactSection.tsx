"use client";
// src/components/sections/ContactSection.tsx
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const SUBJECTS = [
  "Speaking Engagement",
  "Mentorship Inquiry",
  "Ministry Partnership",
  "Media / Interview",
  "General Enquiry",
];

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your preferred form service (Web3Forms, Formspree, etc.)
    // Example with Web3Forms:
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_KEY_HERE",
          ...form,
          from_name: "Rev. Dokun Idowu Website",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full bg-parchment border border-sand/60 px-4 py-3.5 text-sm text-espresso
    font-sans font-light placeholder:text-taupe/50 outline-none transition-all duration-200
    focus:border-ember focus:bg-white`;

  return (
    <section id="contact" className="bg-smoke py-28 lg:py-36" ref={ref}>
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Info */}
          <div
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="section-eyebrow mb-5">Get in Touch</p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Connect with<br />
              <em className="text-ember not-italic">Rev. Idowu</em>
            </h2>
            <div className="warm-divider" />
            <p className="text-umber/70 font-sans font-light leading-relaxed text-[15px] mb-12 max-w-md">
              For speaking engagements, mentorship inquiries, ministry partnerships,
              or general correspondence — we would love to hear from you.
            </p>

            {/* Info rows */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  ),
                  icon2: <polyline points="22,6 12,13 2,6" />,
                  label: "Email",
                  value: "info@dokuniidowu.org",
                },
                {
                  icon: (
                    <>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </>
                  ),
                  label: "Ministry",
                  value: "Rhema Bible Training Centre, Nigeria",
                },
                {
                  icon: (
                    <>
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </>
                  ),
                  label: "Social",
                  value: "@DokunIdowu on X (Twitter)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-espresso flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-amber"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                      {item.icon2}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.14em] uppercase text-taupe font-sans font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-espresso font-sans">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative scripture */}
            <div className="mt-16 pl-5 border-l-2 border-amber/30">
              <p
                className="font-serif italic text-umber/50 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "How beautiful are the feet of them that preach the gospel of peace,
                and bring glad tidings of good things!"
              </p>
              <p className="text-[10px] tracking-widest uppercase text-amber/40 font-sans mt-2">
                Romans 10:15
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.16em] uppercase text-taupe font-sans font-medium">
                    Full Name *
                  </label>
                  <input
                    required
                    className={inputClass}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.16em] uppercase text-taupe font-sans font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.16em] uppercase text-taupe font-sans font-medium">
                  Subject
                </label>
                <select
                  className={`${inputClass} appearance-none cursor-pointer`}
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                >
                  <option value="">Select a subject…</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.16em] uppercase text-taupe font-sans font-medium">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="Share how we can serve you…"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </div>

              {/* Status message */}
              {status === "sent" && (
                <div className="bg-amber/10 border-l-2 border-amber px-5 py-4">
                  <p className="text-sm font-sans text-espresso">
                    ✦ Message sent. We'll be in touch soon. God bless you.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="bg-ember/10 border-l-2 border-ember px-5 py-4">
                  <p className="text-sm font-sans text-espresso">
                    Something went wrong. Please email us directly at info@dokuniidowu.org
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`btn-primary justify-center mt-2 ${
                  status === "sending" ? "opacity-60 cursor-wait" : ""
                }`}
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>

              <p className="text-[10px] text-taupe/40 font-sans text-center mt-1">
                Your information is kept private and never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
