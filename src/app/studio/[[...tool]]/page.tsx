"use client";
import dynamic from "next/dynamic";

const StudioClient = dynamic(() => import("./StudioClient"), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: "100vh", background: "#1a1008", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" as const, gap: 16, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ width: 40, height: 40, border: "2px solid rgba(200,168,75,0.2)", borderTopColor: "#C8A84B", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
      <p style={{ color: "rgba(245,239,224,0.4)", fontSize: 13, letterSpacing: "0.1em" }}>Loading CMS Studio...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  ),
});

export default function StudioPage() {
  return <StudioClient />;
}
