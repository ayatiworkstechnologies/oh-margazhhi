"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const images = ["/about-img-1.png", "/about-img-4.png"];

export default function FeaturedGuest() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-10 sm:py-12 lg:py-16">
      <Container className="relative grid gap-8 lg:gap-12 items-start md:grid-cols-2">
        {/* LEFT — STICKY FRAME + IMAGE SLIDER */}
        <div className="relative md:sticky md:top-24 self-start flex justify-center md:justify-start w-full">
          <div className="flex gap-4 items-stretch w-full md:w-auto">
            {/* FRAME – desktop only */}
            <div className="hidden lg:block relative w-[100px] xl:w-[120px] h-[520px] xl:h-[600px]">
              <Image
                src="/fream-6.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* MAIN IMAGE SLIDER */}
            <div className="relative w-full max-w-[480px] h-[500px] sm:h-[400px] md:h-[520px] lg:h-[600px] overflow-hidden">
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="Aruna Sairam"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 480px"
                  className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                  aria-hidden={index !== current}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — SCROLLING TEXT BLOCK */}
        <div className="relative">
          <SectionTitle align="left" title="Lasya Choodamani In Memory of Janaki Ammal" />

          <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-xl leading-relaxed text-black font-sans font-light space-y-3">
            <p>
               With profound reverence
              and immense pride, we gather to honour an artiste whose very
              presence elevates the realm of Carnatic music - Padmashri, Sangita
              Kalanidhi, Chevalier Aruna Sairam - a musician of incandescent
              devotion and divine artistic poise. A luminous force whose voice
              unites tradition and inner awakening, she stands as one of the
              most influential and beloved torch bearers of our Indian classical
              heritage.
            </p>
            <p>
              A vocalist of formidable depth, Aruna Sairam is the embodiment of
              shraddha, bhakti, and bhava - her music carrying the fragrance of
              centuries-old tradition while resonating effortlessly with the
              modem soul.
            </p>
            <p>
              Her voice, soulful and reverential, has the rare ability to
              dissolve the boundary between stage and sanctum, evoking in every
              listener a sense of inner awakening. Her renditions of ragas are
              reflections in motion - expansive, emotive, and radiant with
              spiritual light. Whether through the meditative stillness of an
              alapana or the uplifting surge of an abhang, she brings to each
              phrase emotional depth and artistic integrity that have redefined
              the contours of contemporary Camatic performance.
            </p>
            <p>
              From her formative years in the gurukula tradition to her
              celebrated presence on global stages - from the revered sabhas of
              Chennal to the BBC Proms in London and the Théatre de la Ville,
              Paris - Aruna Sairam has carried the essence of our Bharatiya
              cultural soul with unmatched dignity and radiance. Her music is
              not merely sung: it is inhabited, felt, and offered - an act of
              devotion as much as an act of consecration. As a teacher, mentor,
              and cultural ambassador, she has guided countless students toward
              artistic rigour and spiritual depth. Her generosity has enriched
              the global landscape of Indian classical music, making her an
              enduring bridge between the sacred and the universal.
            </p>
            <p>
              Today, as we confer upon her the prestigious title of LASYA
              CHOODAMANI, we celebrate not only her towering contributions to
              the world of Camatic music but also the unwavering sadhana,
              humility, and inner fire that have shaped her extraordinary
              journey. She stands before us as a beacon of discipline, dignity,
              and divine elevation - a living testament to the unbroken flame of
              our musical heritage.
            </p>
          </div>

          {/* BOTTOM DIVIDER FRAME */}
          <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
            <Image
              src="/fream-3.svg"
              alt="divider"
              width={260}
              height={60}
              className="opacity-90"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
