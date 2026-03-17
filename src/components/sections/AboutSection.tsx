"use client";
// src/components/sections/AboutSection.tsx
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const BIO = [
  "Rev. Dokun Idowu graduated from the University of Ibadan in 2004 and is a charter class member of Rhema Nigeria. He sensed a ministry call on his life as a teenager, and early exposure to Kenneth Hagin Ministries — a connection he has faithfully maintained to this day — has greatly shaped and defined his calling.",
  "His first pioneer effort was in 1998. While in the university, he served as an Associate Pastor with the highly regarded Victory Christian Fellowship, University of Ibadan. He has also worked across the consulting, telecoms, and banking sectors, giving him deep familiarity with the Nigerian business terrain.",
  "He was part of the start-up team of Rhema Bible Training Centre Nigeria, serving as Pioneer Team Leader for the Kaduna and Hausa Campuses, and as Divisional Leader across Retail & Merchandise, Branding, Promotions & Marketing, and the Training Centre Division. He currently serves as an Executive Leader in Rhema Nigeria.",
  "He is a gifted pioneer and anointed Bible teacher and preacher, graced by God for the gifts of the Spirit and the move of the Holy Ghost. He is married to Mrs. Tobore Idowu, and they are blessed with three amazing children.",
];

const HIGHLIGHTS = [
  { num: "1998", label: "First Pioneer Effort" },
  { num: "2004", label: "Uni. of Ibadan" },
  { num: "RBTC", label: "Charter Class" },
  { num: "Exec.", label: "Leader, Rhema NG" },
];

export default function AboutSection({ data }: { data?: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="bg-parchment py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Image */}
          <div
            className={`relative transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Image frame */}
            <div className="relative aspect-[3/4] bg-linen border border-sand/50 overflow-hidden">
              {data?.aboutImage?.asset?.url ? (
                <Image
                  src={data.aboutImage.asset.url}
                  alt="Rev. Dokun Idowu"
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <Image
                  src="/images/pastor-dokun.jpg"
                  alt="Rev. Dokun Idowu"
                  fill
                  className="object-cover object-top"
                />
              )}

              {/* Amber corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-espresso text-parchment p-6 lg:p-8">
              <p
                className="font-display text-3xl text-amber font-bold leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                25+
              </p>
              <p className="text-[10px] tracking-[0.14em] uppercase text-parchment/50 mt-2 font-sans">
                Years in<br />Ministry
              </p>
            </div>

            {/* Side label */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
              <span className="text-[9px] tracking-[0.3em] uppercase text-taupe/50 font-sans whitespace-nowrap">
                Anointed · Pioneer · Teacher
              </span>
            </div>
          </div>

          {/* Right — Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="section-eyebrow mb-5">His Story</p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-espresso leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Pioneer Called<br />
              <em className="text-ember not-italic">by God's Grace</em>
            </h2>
            <div className="warm-divider" />

            <div className="space-y-5 mb-10">
              {BIO.map((para, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-umber font-sans font-light">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="bg-espresso text-parchment p-4 text-center"
                >
                  <p
                    className="font-display text-xl text-amber font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {h.num}
                  </p>
                  <p className="text-[9px] tracking-[0.12em] uppercase text-parchment/40 mt-1.5 font-sans leading-tight">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
