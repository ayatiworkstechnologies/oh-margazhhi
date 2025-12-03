import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import FeaturedGuest from "./components/sections/FeaturedGuest";
import EventsSection from "./components/sections/EventsSection";
import ArtistsSection from "./components/sections/ArtistsSection";
import ContactSection from "./components/sections/ContactSection";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import EventCalendarSection from "./components/sections/EventCalendarSection";
import CalendarSection from "./components/sections/CalendarSection";
import GallerySection from "./components/sections/GallerySection";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <MarqueeStrip />
      <FeaturedGuest />
      <EventsSection />
      <EventCalendarSection />
      {/* <CalendarSection /> */}
      <ArtistsSection />
      <GallerySection />
      <ContactSection />
    </Layout>
  );
}
