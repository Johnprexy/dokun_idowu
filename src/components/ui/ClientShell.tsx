"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "./SmoothScroll";

const Preloader    = dynamic(() => import("./Preloader"),    { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Preloader onComplete={onComplete} />
      <CustomCursor />
      <SmoothScroll>
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          {children}
        </div>
      </SmoothScroll>
    </>
  );
}
