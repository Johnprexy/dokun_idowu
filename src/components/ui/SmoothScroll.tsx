// Smooth scroll removed — native browser scroll preserved
// Lenis caused slow/sluggish scrolling on mouse wheel
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
