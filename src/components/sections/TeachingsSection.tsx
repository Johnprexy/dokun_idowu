"use client";
// src/components/sections/TeachingsSection.tsx
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Sermon {
  _id: string;
  title: string;
  youtubeId: string;
  seriesTag?: string;
  description?: string;
  thumbnail?: { asset: { url: string } };
}

// Placeholder sermons while Sanity is being set up
const PLACEHOLDER_SERMONS: Sermon[] = [
  {
    _id: "1",
    title: "Teaching by Rev. Dokun Idowu",
    youtubeId: "WuP65UIetl8",
    description: "An anointed teaching by Rev. Dokun Idowu, graced by God for the gifts of the Spirit and the move of the Holy Ghost.",
  },
  {
    _id: "2",
    title: "Live Teaching - Rev. Dokun Idowu",
    youtubeId: "xu5alIBdtCg",
    description: "A live ministry session with Rev. Dokun Idowu, Executive Leader in ministry.",
  },
  {
    _id: "3",
    title: "Live Teaching - Rev. Dokun Idowu",
    youtubeId: "MQokt0F5Scs",
    description: "Expect to be richly blessed as Rev. Dokun Idowu ministers in a practical way.",
  },
];

function VideoCard({ sermon, onClick }: { sermon: Sermon; onClick: () => void }) {
  const thumbUrl = sermon.thumbnail?.asset?.url
    || (sermon.youtubeId ? `https://i.ytimg.com/vi/${sermon.youtubeId}/maxresdefault.jpg` : null);

  return (
    <div onClick={onClick} className="video-card group">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-espresso overflow-hidden mb-4">
        {thumbUrl ? (
          <Image src={thumbUrl} alt={sermon.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-espresso to-mahogany">
            {/* Decorative cross-lines */}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "linear-gradient(rgba(200,168,75,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(200,168,75,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
            />
            <span className="text-amber/30 text-4xl">✦</span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-mahogany/0 group-hover:bg-mahogany/50 transition-all duration-500 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-amber flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <svg className="w-5 h-5 fill-mahogany ml-1" viewBox="0 0 24 24">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
        </div>

        {/* Series tag */}
      </div>

      <h3
        className="font-display text-lg font-semibold text-espresso leading-snug group-hover:text-ember transition-colors"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {sermon.title}
      </h3>
      {sermon.description && (
        <p className="text-sm text-umber/70 font-sans font-light mt-2 line-clamp-2">{sermon.description}</p>
      )}
    </div>
  );
}

function VideoModal({ sermon, onClose }: { sermon: Sermon; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] bg-mahogany/95 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-parchment/60 hover:text-parchment text-sm font-sans mb-4 transition-colors"
        >
          ← Close
        </button>
        {sermon.youtubeId ? (
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${sermon.youtubeId}?autoplay=1&rel=0&color=white`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={sermon.title}
            />
          </div>
        ) : (
          <div className="aspect-video bg-espresso flex flex-col items-center justify-center gap-4 text-parchment/40">
            <span className="text-5xl">📺</span>
            <p className="font-sans text-sm tracking-wider">Video ID not yet configured in Sanity CMS</p>
            <p className="text-xs font-sans text-parchment/20">Add YouTube Video ID in the CMS to enable playback</p>
          </div>
        )}
        <h3
          className="font-display text-xl text-parchment mt-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {sermon.title}
        </h3>
      </div>
    </div>
  );
}

export default function TeachingsSection({ sermons }: { sermons?: Sermon[] }) {
  const [active, setActive] = useState<Sermon | null>(null);
  const data = sermons?.length ? sermons : PLACEHOLDER_SERMONS;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <section id="teachings" className="bg-smoke py-28 lg:py-36" ref={ref}>
        <div className="section-wrap">
          {/* Header */}
          <div className="mb-16">
            <p className="section-eyebrow mb-4">The Word</p>
            <h2
              className="font-display text-4xl lg:text-5xl font-bold text-espresso"
              style={{ fontFamily: "var(--font-display)" }}
            >
              PDee <span className="text-ember italic">Speaks</span>
            </h2>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {data.map((sermon, i) => (
              <div
                key={sermon._id}
                className="transition-all duration-700"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                }}
              >
                <VideoCard sermon={sermon} onClick={() => setActive(sermon)} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-sand/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-serif italic text-umber/60 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
              "Expect to be richly blessed as he ministers in a practical way."
            </p>
            <a
              href="https://www.youtube.com/@RhemaNigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-3"
            >
              <svg width="20" height="14" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/>
                <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
              </svg>
              Video Links
            </a>
          </div>
        </div>
      </section>

      {active && <VideoModal sermon={active} onClose={() => setActive(null)} />}
    </>
  );
}
