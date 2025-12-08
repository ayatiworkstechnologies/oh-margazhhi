"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const images = ["/about-img-1.png", "/about-img-4.png"];

const captions = ["Bombay Jayashri · 2024", "Aruna Sairam · 2025"];

export default function FeaturedGuest() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000 // change every 3s
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-10 sm:py-12 lg:py-16">
      <Container className="relative grid gap-8 lg:gap-12 items-start md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* LEFT — PATTERN + IMAGE (STICKY) */}
        <div className="relative self-start md:sticky md:top-24 flex justify-center md:justify-start">
          {/* LEFT — FRAME + IMAGE (SAME HEIGHT) */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative flex gap-4">
              {/* LEFT FRAME – desktop only */}
              <div className="hidden lg:block h-full">
                <Image
                  src="/fream-6.svg"
                  alt=""
                  width={400}
                  height={780}
                  className="h-auto w-auto"
                />
              </div>

              {/* (INNER) MAIN IMAGE SLIDER – currently not visible due to h-full, kept as-is */}
              <div className="relative h-full overflow-hidden">
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Aruna Sairam"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
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

          {/* MAIN IMAGE SLIDER (VISIBLE) */}
          {/* MAIN IMAGE SLIDER (VISIBLE) */}
          <div className="relative w-full max-w-[480px] h-[600px] overflow-hidden">
            {/* Images */}
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={captions[index]}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
                aria-hidden={index !== current}
              />
            ))}

            {/* Bottom Name Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-primary backdrop-blur-sm px-4 py-3 transition-opacity duration-700">
              <p className="text-white text-lg text-center sm:text-xl font-serif tracking-wide">
                {captions[current]}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — TEXT BLOCK (SCROLLS) */}
        <div className="relative">
          <SectionTitle align="left" title="Lasya the Culture Hub" />

          <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-xl leading-relaxed text-black font-sans font-light space-y-3">
            <p>
              Lasya signifies joyous artistic expression, a dance of beauty,
              grace, and elegance. Mythologically, it responds to Shiva's
              Thandavam by Goddess Parvathi, a force that brings equilibrium to
              the worlds This initiative by the Ramaniyam Group, aims to promote
              art and culture in South Chennai. It seeks to balance traditional
              and contemporary art through diverse events. By hosting prominent
              figures in the artistic community, Lasya has established itself as
              a cultural hub in the Old Mahabalipuram Road corridor.
            </p>
            <p>
              The Lasya Choodamani Award stands as one of the most prestigious
              honours presented in the realm of Indian classical performing
              arts. Conceived to celebrate extraordinary artistry, unwavering
              dedication, and a lifetime of contribution to the cultural
              landscape, this award is bestowed upon individuals who have
              elevated their art form through excellence, innovation, and
              profound commitment.
            </p>
            <p>
              Rooted in the spirit of lasya the graceful, expressive, and divine
              essence of classical artistic tradition the title “Choodamani,”
              meaning “the crest jewel,” reflects the award’s purpose: to
              recognise artists who shine as rare and radiant gems in the world
              of classical art. The award acknowledges not only their mastery
              over technique and tradition but also their ability to touch
              hearts, inspire generations, and uphold the sacred lineage of
              Indian cultural heritage.
            </p>
            <p>
              Each year, the Lasya Choodamani Award is conferred upon an eminent
              artist whose body of work exemplifies artistic brilliance,
              cultural significance, and a deep sense of devotion to their
              craft. Through this honour, we celebrate their enduring legacy,
              their invaluable contribution to the preservation and propagation
              of the arts, and their role as guiding lights for the generations
              that follow.
            </p>
            <p>
              OhMaRgazhi celebrates this richness but with its own unique
              identity. Here, we blend tradition with the energy of a
              fast-growing modern locality. We give a platform to artists,
              students, professionals, and cultural enthusiasts who live in OMR
              but crave the Margazhi magic.
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
