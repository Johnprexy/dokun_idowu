"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const onComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  // Dynamically import Preloader to avoid SSR
  const Preloader = dynamic(() => import("./Preloader"), { ssr: false });

  return (
    <>
      <Preloader onComplete={onComplete} />
      <CustomCursor />
      {/*
        CRITICAL: Do NOT wrap children in a div with opacity/visibility.
        That creates a new stacking context and causes the page to swing/jump
        when the preloader exits on mobile.
        Instead: preloader sits on top (fixed), page is always in normal flow below.
      */}
      {children}
    </>
  );
}
