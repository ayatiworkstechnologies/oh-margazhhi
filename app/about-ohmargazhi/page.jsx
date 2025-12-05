import Layout from "../components/layout/Layout";
import AboutOhMargazhhiSection from "../components/sections/AboutOhMargazhhiSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import VisionPurposeSection from "../components/sections/VisionPurposeSection";
import WhyMargazhiMatters from "../components/sections/WhyMargazhiMatters";
import Hero from "../components/ui/Hero";

export default function AboutPage() {
  return (
    <Layout>
      <Hero
        title="Eight Chords Unite Creating Magical Margazhi Evenings for Everyone"
        description="Celebrate classical artistry with performances curated for music lovers across generations."
        dateRange="December 15 – December 30"
        location="Chennai, Tamil Nadu"
        imageSrc="/about-banner.svg"
        imageAlt="About OhMaRgazhi classical dancer"
      />
      <AboutOhMargazhhiSection />
      <VisionPurposeSection />
      <WhyMargazhiMatters />
      <ExperienceSection />
    </Layout>
  );
}
