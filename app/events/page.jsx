import Layout from "../components/layout/Layout";
import EventScheduleSection from "../components/sections/EventScheduleSection";
import Hero from "../components/ui/Hero";

export default function EventsPage() {
  return (
    <Layout>
      <Hero
              title="Margazhi Comes Alive with Voices That Shape Tomorrow’s Cultural Landscape"
              description="Immerse in a future-ready festival where legacy performances meet evolving artistic expression."
              dateRange="December 15 – December 30"
              location="Chennai, Tamil Nadu"
              imageSrc="/hero-img.svg"
              imageAlt="About OhMaRgazhi classical dancer"
            />
            <EventScheduleSection />
    </Layout>
  );
}
