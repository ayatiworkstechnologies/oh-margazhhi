import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import FeaturedGuest from "./components/sections/FeaturedGuest";
import EventsSection from "./components/sections/EventsSection";
import ArtistsSection from "./components/sections/ArtistsSection";
import ContactSection from "./components/sections/ContactSection";
import MarqueeStrip from "./components/sections/MarqueeStrip";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <MarqueeStrip />
      <FeaturedGuest />
      <EventsSection />
      <ArtistsSection />
      <ContactSection />
    </Layout>
  );
}
