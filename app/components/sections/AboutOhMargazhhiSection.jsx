"use client";

import Image from "next/image";
import Container from "../ui/Container";

export default function AboutOhMargazhhiSection() {
  return (
    <section id="about">
      <Container>
        <div className="mx-auto grid max-w-8xl md:grid-cols-2">
          {/* LEFT STICKY IMAGE COLUMN */}
          <div className="relative">
            <div className="md:sticky md:top-24">
              <div className="relative min-h-[360px] md:min-h-[520px] lg:min-h-[600px] bg-primary flex justify-center items-center overflow-hidden">
                <Image
                  src="/about-img-2.svg"
                  alt="Temple About OhMargazhhi"
                  width={800}
                  height={600}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SCROLLING CONTENT */}
          <div className="bg-white px-5 md:px-10 py-10 md:py-14 relative">
            {/* MAIN TITLE */}
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              About OhMaRgazhi
            </h2>

            {/* SUBTITLE */}
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-black mb-4 mt-5 md:mt-10">
              A Sanctuary of Classical Arts for Today’s Solace
            </p>

            {/* DESCRIPTION */}
            <p className="text-xl md:text-lg font-sans font-light leading-relaxed text-black mt-5 md:mt-10 mb-4">
              Lasya Choodamani In Memory of Janaki Ammal With profound reverence
              and immense pride, we gather to honour an artiste whose very
              presence elevates the realm of Carnatic music - Padmashri, Sangita
              Kalanidhi, Chevalier Aruna Sairam - a musician of incandescent
              devotion and divine artistic poise. A luminous force whose voice
              unites tradition and inner awakening, she stands as one of the
              most influential and beloved torch bearers of our Indian classical
              heritage. A vocalist of formidable depth, Aruna Sairam is the
              embodiment of shraddha, bhakti, and bhava - her music carrying the
              fragrance of centuries-old tradition while resonating effortlessly
              with the modem soul.
            </p>
            <p className="text-xl md:text-lg font-sans font-light leading-relaxed text-black mt-5">
              Her voice, soulful and reverential, has the rare ability to
              dissolve the boundary between stage and sanctum, evoking in every
              listener a sense of inner awakening. Her renditions of ragas are
              reflections in motion - expansive, emotive, and radiant with
              spiritual light. Whether through the meditative stillness of an
              alapana or the uplifting surge of an abhang, she brings to each
              phrase emotional depth and artistic integrity that have redefined
              the contours of contemporary Camatic performance.
            </p>
            <p className="text-xl md:text-lg font-sans font-light leading-relaxed text-black mt-5">
              From her formative years in the gurukula tradition to her
              celebrated presence on global stages - from the revered sabhas of
              Chennal to the BBC Proms in London and the Théatre de la Ville,
              Paris - Aruna Sairam has carried the essence of our Bharatiya
              cultural soul with unmatched dignity and radiance. Her music is
              not merely sung: it is inhabited, felt, and offered - an act of
              devotion as much as an act of consecration. </p>
              <p className="text-xl md:text-lg font-sans font-light leading-relaxed text-black mt-5">
              As a teacher, mentor,
              and cultural ambassador, she has guided countless students toward
              artistic rigour and spiritual depth. Her generosity has enriched
              the global landscape of Indian classical music, making her an
              enduring bridge between the sacred and the universal.
            </p>
            <p className="text-xl md:text-lg font-sans font-light leading-relaxed text-black mt-5">
              Today, as we confer upon her the prestigious title of LASYA
              CHOODAMANI, we celebrate not only her towering contributions to
              the world of Camatic music but also the unwavering sadhana,
              humility, and inner fire that have shaped her extraordinary
              journey. She stands before us as a beacon of discipline, dignity.
              and divine elevation - a living testament to the unbroken flame of
              our musical heritage.
            </p>

            {/* BOTTOM ARROW ICON */}
            <div className="mt-6">
              <Image
                src="/fream-3.svg"
                alt="decorative arrow"
                width={320}
                height={20}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
