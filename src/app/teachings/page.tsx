import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeachingsSection from "@/components/sections/TeachingsSection";

export const metadata = {
  title: "PDee Speaks — Teachings & Conferences | Rev. Dokun Idowu",
  description: "Watch teachings, conference messages, and ministry sessions by Rev. Dokun Idowu — anointed, practical, and grounded in the Word.",
};

async function fetchSermons() {
  try {
    const { safeFetch, sermonsQuery } = await import("@/lib/sanity");
    return await safeFetch(sermonsQuery, []);
  } catch { return []; }
}

export default async function TeachingsPage() {
  const sermons = await fetchSermons();
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <TeachingsSection sermons={sermons} standalone />
      </main>
      <Footer />
    </>
  );
}
