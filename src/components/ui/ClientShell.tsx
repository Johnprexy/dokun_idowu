"use client";
import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";

const Preloader    = dynamic(() => import("./Preloader"),    { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  // Ensure body scroll is never blocked after preloader
  useEffect(() => {
    if (loaded) {
      document.body.style.overflow = "";
      document.body.style.willChange = "";
    }
  }, [loaded]);

  return (
    <>
      <Preloader onComplete={onComplete} />
      <CustomCursor />
      {/* No wrapper div with opacity — avoids stacking context that causes scroll lag */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          // Use visibility instead of opacity transition to avoid compositor lag
          visibility: loaded ? "visible" : "hidden",
          // DO NOT use transform or will-change here — causes new stacking context = scroll jank
        }}
      >
        {children}
      </div>
    </>
  );
}
