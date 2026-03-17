import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteStrip from "@/components/sections/QuoteStrip";
import TeachingsSection from "@/components/sections/TeachingsSection";
import MentorshipSection from "@/components/sections/MentorshipSection";
import FamilySection from "@/components/sections/FamilySection";
import ContactSection from "@/components/sections/ContactSection";

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
    <>
      <Navbar />
      <main>
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <QuoteStrip quotes={quotes} />
        <TeachingsSection sermons={sermons} />
        <MentorshipSection data={mentorship} />
        <FamilySection photos={family} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
