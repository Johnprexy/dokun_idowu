"use client";
import { useRef, useEffect, useState } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function RevealText({
  children,
  className = "",
  style = {},
  delay = 0,
  as: Tag = "h2",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <Tag ref={ref as any} className={className} style={{ ...style, overflow: "hidden" }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
        >
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease`,
              transitionDelay: `${delay + i * 0.06}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
