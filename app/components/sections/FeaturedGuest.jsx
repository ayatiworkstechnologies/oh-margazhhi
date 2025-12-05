"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedGuest() {
  return (
    <section className="relative bg-white py-10 sm:py-12 lg:py-16">
      {/* TOP RIGHT DECORATIVE SVG – only on large screens */}
      <div className="pointer-events-none absolute right-4 top-4 hidden lg:block">
        <Image
          src="/fream-5.svg"
          alt=""
          width={140}
          height={80}
          className="opacity-80"
        />
      </div>

      <Container className="relative grid gap-8 lg:gap-12 items-start md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* LEFT — PATTERN + IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          {/* LEFT PATTERN STRIP – desktop only */}
          <div className="mr-4 hidden lg:block">
            <Image
              src="/fream-6.svg"
              alt=""
              width={100}
              height={500}
              className="h-full w-auto opacity-90"
            />
          </div>

          {/* MAIN IMAGE */}
          <div className="overflow-hidden shadow-lg max-w-xs sm:max-w-sm md:max-w-full">
            <Image
              src="/about-img.png"
              alt="Bombay Jayashri"
              width={480}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — TEXT BLOCK */}
        <div className="relative">
          <SectionTitle
            align="left"
            title="Bombay Jayashri - Voice of Serenity"
          />

          <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-xl leading-relaxed text-black font-sans font-light space-y-3">
            <p>
              Padmashri, Sangita Kalanidhi, Chevalier Aruna Sairam is celebrated
              as a transformative force in Carnatic music, revered for her
              spiritual intensity, artistic precision, and ability to bridge
              centuries-old tradition with contemporary resonance.
            </p>
            <p>
              Her voice dissolves the line between performance and prayer,
              bringing emotional depth and devotional energy to every raga.
            </p>
            <p>
              From Chennai’s iconic sabhas to global stages like the BBC Proms
              and Théâtre de la Ville, she has carried Indian classical heritage
              with unmatched grace and authority.
            </p>
            <p>
              Her journey reflects rigorous training, global impact, and an
              unbroken commitment to artistic excellence. As a teacher and
              cultural ambassador, she has shaped the next generation with
              generosity and vision.
            </p>
            <p>
              Conferment of the LASYA CHOODAMANI title acknowledges not just her
              achievements, but the humility and inner fire that define her
              legacy.
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
