"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"letters" | "line" | "exit" | "done">("letters");

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("line"), 900);
    const t2 = setTimeout(() => setPhase("exit"), 1600);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      onComplete();
    }, 2200);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const firstName = "DOKUN";
  const lastName  = "IDOWU";

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      {(
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#2A1B12",
            // Isolate to its own layer — prevents affecting page scroll below
            isolation: "isolate",
            willChange: "opacity",
          }}
        >
          {/* REV. tag */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{ color: "#C8A84B", fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", fontFamily: "system-ui", marginBottom: 12 }}
          >
            Rev.
          </motion.p>

          {/* DOKUN */}
          <div style={{ display: "flex", gap: 4, overflow: "hidden" }}>
            {firstName.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12 + i * 0.065, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  color: "#F5EFE0", fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 10vw, 5.5rem)", fontWeight: 900, lineHeight: 1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* IDOWU */}
          <div style={{ display: "flex", gap: 4, overflow: "hidden", marginTop: 4 }}>
            {lastName.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.32 + i * 0.065, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  color: "#C8A84B", fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 10vw, 5.5rem)", fontWeight: 900, lineHeight: 1,
                  fontStyle: "italic",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Gold sweep line */}
          <motion.div
            style={{
              position: "absolute", bottom: 0, left: 0, height: 2,
              background: "#C8A84B", transformOrigin: "left",
            }}
            initial={{ scaleX: 0, width: "100%" }}
            animate={{ scaleX: phase === "line" || phase === "exit" ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "line" || phase === "exit" ? 0.5 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute", bottom: 20,
              fontSize: 10, letterSpacing: "0.3em",
              textTransform: "uppercase", color: "#C8A84B",
              fontFamily: "system-ui",
            }}
          >
            Executive Leader &bull; Rhema Nigeria
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
