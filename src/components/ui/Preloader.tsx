"use client";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"letters" | "line" | "exit" | "done">("letters");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("line"), 900);
    const t2 = setTimeout(() => setPhase("exit"), 1600);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      onComplete();
    }, 2000);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (phase === "done") return null;

  const firstName = "DOKUN";
  const lastName  = "IDOWU";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#2A1B12",
        // Simple opacity fade — NO transform, NO AnimatePresence, NO layout shifts
        opacity: phase === "exit" ? 0 : 1,
        transition: phase === "exit" ? "opacity 0.35s ease" : "none",
        // Critical: position fixed + no transform = no effect on page layout below
        top: 0, left: 0, right: 0, bottom: 0,
        pointerEvents: phase === "exit" ? "none" : "all",
      }}
    >
      {/* REV. */}
      <p style={{
        color: "#C8A84B", fontSize: 11, letterSpacing: "0.35em",
        textTransform: "uppercase", fontFamily: "system-ui",
        marginBottom: 12,
        opacity: 1,
        animation: "fadeUp 0.4s ease 0.1s both",
      }}>
        Rev.
      </p>

      {/* DOKUN */}
      <div style={{ display: "flex", gap: 3, overflow: "hidden" }}>
        {firstName.split("").map((letter, i) => (
          <span
            key={i}
            style={{
              color: "#F5EFE0",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 9vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1,
              display: "inline-block",
              animation: `slideUp 0.5s cubic-bezier(0.22,1,0.36,1) ${0.12 + i * 0.065}s both`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* IDOWU */}
      <div style={{ display: "flex", gap: 3, overflow: "hidden", marginTop: 4 }}>
        {lastName.split("").map((letter, i) => (
          <span
            key={i}
            style={{
              color: "#C8A84B",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 9vw, 5.5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              lineHeight: 1,
              display: "inline-block",
              animation: `slideUp 0.5s cubic-bezier(0.22,1,0.36,1) ${0.32 + i * 0.065}s both`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Gold line sweep */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0,
        height: 2,
        background: "#C8A84B",
        width: "100%",
        transformOrigin: "left",
        transform: phase === "line" || phase === "exit" ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.6s ease",
      }} />

      {/* Tagline */}
      <p style={{
        position: "absolute",
        bottom: 16,
        fontSize: 10,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: "#C8A84B",
        fontFamily: "system-ui",
        opacity: phase === "line" || phase === "exit" ? 0.5 : 0,
        transition: "opacity 0.3s ease",
      }}>
        Executive Leader &bull; Rhema Nigeria
      </p>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
