import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import FeaturedGuest from "./components/sections/FeaturedGuest";
import EventsSection from "./components/sections/EventsSection";
import ArtistsSection from "./components/sections/ArtistsSection";
import ContactSection from "./components/sections/ContactSection";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import EventCalendarSection from "./components/sections/EventCalendarSection";
// import CalendarSection from "./components/sections/CalendarSection";
import GallerySection from "./components/sections/GallerySection";
import Hero from "./components/ui/Hero";
import HomePopupModal from "./components/sections/HomePopupModal";
import Script from "next/script";

export default function HomePage() {
  return (
    <Layout>
      {/* Google Tag Manager */}
      <Script id="gtm-base" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TS568GWP');
        `}
      </Script>

      {/* Header Tag for Ohmargazhi */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TS568GWP"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Hero
        title="Where Margazhi Music Breathes Life Into Tradition Again"
        description="Celebrate soulful performances honoring culture, devotion, heritage and artistry."
        dateRange="December 16 – December 30"
        location="Chennai, Tamil Nadu"
        imageSrc="/home-banner.svg"
        imageAlt="OhMaRgazhi classical dancer"
      />
      {/* <HeroSection /> */}
      {/* <HomePopupModal /> */}

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
