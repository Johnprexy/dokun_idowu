"use client";
// src/components/sections/MentorshipSection.tsx
import { useInView } from "react-intersection-observer";

const DEFAULT_PILLARS = [
  {
    icon: "✦",
    title: "Faith Foundation",
    description: "Grounded mentorship rooted in the Word, building unshakable faith for everyday life and ministry.",
  },
  {
    icon: "◈",
    title: "Purpose Discovery",
    description: "Helping individuals identify their God-given calling and walk boldly into their pioneering assignment.",
  },
  {
    icon: "◆",
    title: "Kingdom Leadership",
    description: "Equipping leaders with practical tools, spiritual authority, and a sustainable Kingdom vision.",
  },
  {
    icon: "◉",
    title: "Personal Growth",
    description: "Spirit-led guidance through life's seasons — spiritual, professional, and deeply personal.",
  },
];

interface MentorshipData {
  mentorshipTitle?: string;
  mentorshipBody?: string;
  mentorshipCtaLabel?: string;
  mentorshipCtaLink?: string;
  mentorshipPillars?: { icon: string; title: string; description: string }[];
}

export default function MentorshipSection({ data }: { data?: MentorshipData }) {
  const pillars = data?.mentorshipPillars?.length ? data.mentorshipPillars : DEFAULT_PILLARS;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="mentorship" className="bg-espresso py-28 lg:py-36 grain-overlay overflow-hidden" ref={ref}>
      <div className="section-wrap">
        {/* Decorative heading number */}
        <div className="flex items-start gap-16 lg:gap-24">

          {/* Left text */}
          <div
            className={`flex-1 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-eyebrow text-amber mb-5">Platform</p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-parchment leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {data?.mentorshipTitle || (
                <>
                  Mentorship &amp;<br />
                  <em className="text-amber not-italic">Discipleship</em>
                </>
              )}
            </h2>

            <div className="w-12 h-px bg-amber my-6" />

            <div className="space-y-5 mb-10 max-w-md">
              <p className="text-parchment/60 font-sans font-light leading-relaxed text-[15px]">
                {data?.mentorshipBody ||
                  "Rev. Dokun Idowu carries a deep burden for the next generation of believers and ministers. His mentorship platform is designed to walk individuals through structured, Spirit-led growth — from faith foundations to pioneering their own God-given assignments."}
              </p>
              <p className="text-parchment/60 font-sans font-light leading-relaxed text-[15px]">
                Whether you are a young believer finding your footing, a minister in the making, or a marketplace leader seeking Kingdom alignment — there is a place for you here.
              </p>
            </div>

            <a
              href={data?.mentorshipCtaLink || "mailto:info@dokuniidowu.org?subject=Mentorship Inquiry"}
              className="btn-primary"
            >
              {data?.mentorshipCtaLabel || "Apply for Mentorship"} →
            </a>

            {/* Small scripture */}
            <p
              className="font-serif italic text-parchment/25 text-sm mt-10 max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men..." — 2 Tim 2:2
            </p>
          </div>

          {/* Right — pillars */}
          <div
            className={`flex-1 hidden lg:block transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-px bg-amber/10">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-mahogany/60 hover:bg-mahogany/90 p-8 transition-all duration-300 group"
                >
                  <span className="text-2xl text-amber block mb-5 group-hover:scale-110 transition-transform duration-300">
                    {p.icon}
                  </span>
                  <h4
                    className="font-display text-lg text-parchment font-semibold mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </h4>
                  <p className="text-[13px] text-parchment/40 font-sans font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile pillars */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-px bg-amber/10 mt-12">
          {pillars.map((p, i) => (
            <div key={i} className="bg-mahogany/60 p-6">
              <span className="text-xl text-amber block mb-4">{p.icon}</span>
              <h4
                className="font-display text-base text-parchment font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h4>
              <p className="text-xs text-parchment/40 font-sans font-light leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
