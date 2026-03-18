import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteStrip from "@/components/sections/QuoteStrip";
import TimelineSection from "@/components/sections/TimelineSection";
import TeachingsSection from "@/components/sections/TeachingsSection";
import MentorshipSection from "@/components/sections/MentorshipSection";
import PraySection from "@/components/sections/PraySection";
import FamilySection from "@/components/sections/FamilySection";
import ContactSection from "@/components/sections/ContactSection";
import ClientShell from "@/components/ui/ClientShell";

export const revalidate = 60;

async function fetchData() {
  try {
    const { safeFetch, heroQuery, aboutQuery, sermonsQuery, quotesQuery, familyQuery, mentorshipQuery } =
      await import("@/lib/sanity");
    const [hero, about, sermons, quotes, family, mentorship] = await Promise.all([
      safeFetch(heroQuery, null),
      safeFetch(aboutQuery, null),
      safeFetch(sermonsQuery, []),
      safeFetch(quotesQuery, []),
      safeFetch(familyQuery, []),
      safeFetch(mentorshipQuery, null),
    ]);
    return { hero, about, sermons, quotes, family, mentorship };
  } catch {
    return { hero: null, about: null, sermons: [], quotes: [], family: [], mentorship: null };
  }
}

export default async function HomePage() {
  const { hero, about, sermons, quotes, family, mentorship } = await fetchData();

  return (
    <ClientShell>
      <Navbar />
      <main>
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <QuoteStrip quotes={quotes} />
        <TimelineSection />
        <TeachingsSection sermons={sermons} />
        <MentorshipSection data={mentorship} />
        <PraySection />
        <FamilySection photos={family} />
        <ContactSection />
      </main>
      <Footer />
    </ClientShell>
  );
}
