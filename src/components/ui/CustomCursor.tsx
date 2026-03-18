"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0,  ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform += " scale(1.6)";
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    // Scale ring on hoverable elements
    const hoverEls = document.querySelectorAll("a, button, [data-cursor]");
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (dotRef.current)  dotRef.current.style.opacity  = "0";
        if (ringRef.current) { ringRef.current.style.width = "48px"; ringRef.current.style.height = "48px"; ringRef.current.style.borderColor = "rgba(200,168,75,0.8)"; }
      });
      el.addEventListener("mouseleave", () => {
        if (dotRef.current)  dotRef.current.style.opacity  = "1";
        if (ringRef.current) { ringRef.current.style.width = "40px"; ringRef.current.style.height = "40px"; ringRef.current.style.borderColor = "rgba(200,168,75,0.5)"; }
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber z-[9998] pointer-events-none mix-blend-difference"
        style={{ transition: "opacity 0.2s" }}
      />
      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-amber/50 z-[9997] pointer-events-none"
        style={{ transition: "width 0.3s, height 0.3s, border-color 0.3s" }}
      />
    </>
  );
}
