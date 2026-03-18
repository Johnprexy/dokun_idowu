"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"letters" | "line" | "exit" | "done">("letters");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => { setPhase("done"); onComplete(); }, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const firstName = "DOKUN";
  const lastName  = "IDOWU";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-mahogany"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* REV. tag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-amber text-xs tracking-[0.35em] uppercase font-sans mb-3"
          >
            Rev.
          </motion.p>

          {/* First name - letters stagger in */}
          <div className="flex gap-1 overflow-hidden">
            {firstName.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-parchment font-display font-black"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 10vw, 6rem)", lineHeight: 1 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Last name */}
          <div className="flex gap-1 overflow-hidden mt-1">
            {lastName.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-amber font-display font-black italic"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 10vw, 6rem)", lineHeight: 1 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Gold sweep line */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-amber"
            initial={{ width: "0%" }}
            animate={{ width: phase === "line" || phase === "exit" ? "100%" : "0%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "line" || phase === "exit" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-6 text-[10px] tracking-[0.3em] uppercase text-amber/50 font-sans"
          >
            Executive Leader &bull; Rhema Nigeria
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
