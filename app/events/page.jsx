import Layout from "../components/layout/Layout";
import EventScheduleSection from "../components/sections/EventScheduleSection";
import Hero from "../components/ui/Hero";

export default function EventsPage() {
  return (
    <Layout>
      <Hero
              title="Eight Chords Unite Creating Magical 
      Margazhi Evenings for Everyone "
              description="Celebrate classical artistry with performances curated for music lovers across generations."
              dateRange="December 15 – December 30"
              location="Chennai, Tamil Nadu"
              imageSrc="/hero-img.svg"
              imageAlt="About OhMargazhi classical dancer"
            />
            <EventScheduleSection />
    </Layout>
  );
}
