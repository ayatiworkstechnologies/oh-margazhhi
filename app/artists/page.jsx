import Layout from "../components/layout/Layout";
import ArtistsPageSection from "../components/sections/ArtistsPageSection";
import Hero from "../components/ui/Hero";

export default function ArtistsPage() {
  return (
    <Layout>
      <Hero
              title="Margazhi Evenings Filled with Music, Culture, Devotion and Spirit "
              description="Experience concerts celebrating tradition, maestros, rhythm, devotion and Margazhi spirit."
              dateRange="December 15 – December 30"
              location="Chennai, Tamil Nadu"
              imageSrc="/hero-img.svg"
              imageAlt="About OhMaRgazhi classical dancer"
            />
            <ArtistsPageSection />
    </Layout>
  );
}
