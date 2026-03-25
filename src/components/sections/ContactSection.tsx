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
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-espresso flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.14em] uppercase text-taupe font-sans font-medium mb-1">Email</p>
                  <p className="text-sm text-espresso font-sans">info@dokuniidowu.org</p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-espresso flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.14em] uppercase text-taupe font-sans font-medium mb-3">Follow on Social</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        label: "Instagram",
                        handle: "@dokun_idowu",
                        href: "https://instagram.com/dokun_idowu",
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                          </svg>
                        ),
                      },
                      {
                        label: "Facebook",
                        handle: "iamdokunidowu",
                        href: "https://www.facebook.com/iamdokunidowu",
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        ),
                      },
                      {
                        label: "X / Twitter",
                        handle: "@DokunIdowu",
                        href: "https://x.com/DokunIdowu",
                        icon: (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        ),
                      },
                      {
                        label: "YouTube",
                        handle: "Rhema Nigeria",
                        href: "https://youtube.com/@RhemaNigeria",
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                            <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="currentColor" stroke="none" />
                          </svg>
                        ),
                      },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-linen hover:bg-espresso text-espresso hover:text-amber
                                   border border-sand/60 hover:border-amber/40 px-3 py-2
                                   text-[11px] font-sans font-medium tracking-wide transition-all duration-250 group"
                      >
                        <span className="text-amber group-hover:text-amber">{s.icon}</span>
                        <span>{s.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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
