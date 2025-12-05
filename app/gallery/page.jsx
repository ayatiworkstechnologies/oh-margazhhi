import Layout from "../components/layout/Layout";
import GallerySection from "../components/sections/GallerySection";
import Hero from "../components/ui/Hero";

export default function GalleryPage() {
  return (
    <Layout>
      <Hero
              title="Where Every Note, Step and Story Reimagines the Margazhi Experience"
              description="Engage with dynamic performances designed to elevate community spirit and cultural connection."
              dateRange="December 15 – December 30"
              location="Chennai, Tamil Nadu " 
              imageSrc="/gallery-banner.svg"
              imageAlt="About OhMaRgazhi classical dancer"
            />
            <GallerySection />
    </Layout>
  );
}
