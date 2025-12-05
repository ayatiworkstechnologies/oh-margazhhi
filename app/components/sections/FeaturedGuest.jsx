"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedGuest() {
  return (
    <section className="relative bg-white py-14 sm:py-16">
      {/* TOP RIGHT DECORATIVE SVG */}
      <div className="pointer-events-none absolute right-10 top-10 hidden lg:block">
        <Image
          src="/fream-5.svg"
          alt=""
          width={140}
          height={80}
          className="opacity-80"
        />
      </div>

      <Container className="relative grid items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* LEFT — PATTERN + IMAGE */}
        <div className="relative flex">
          {/* LEFT PATTERN STRIP */}
          <div className="mr-6 hidden lg:block">
            <Image
              src="/fream-6.svg"
              alt=""
              width={100}
              height={500}
              className="h-full w-auto opacity-90"
            />
          </div>

          {/* MAIN IMAGE */}
          <div className="overflow-hidden shadow-lg">
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

          <div className="mt-5  text-xl leading-relaxed text-black/80 font-sans font-light">
            <p className="mb-2">
              Padmashri, Sangita Kalanidhi, Chevalier Aruna Sairam is celebrated
              as a transformative force in Carnatic music, revered for her
              spiritual intensity, artistic precision, and ability to bridge
              centuries-old tradition with contemporary resonance.
            </p>
            <p className="mb-2">
              Her voice dissolves the line between performance and prayer,
              bringing emotional depth and devotional energy to every raga.{" "}
            </p>
            <p className="mb-2">
              From Chennai’s iconic sabhas to global stages like the BBC Proms
              and Théâtre de la Ville, she has carried Indian classical heritage
              with unmatched grace and authority.{" "}
            </p>
            <p className="mb-2">
              Her journey reflects rigorous training, global impact, and an
              unbroken commitment to artistic excellence. As a teacher and
              cultural ambassador, she has shaped the next generation with
              generosity and vision.{" "}
            </p>
            <p className="mb-2">
              Conferment of the LASYA CHOODAMANI title acknowledges not just her
              achievements, but the humility and inner fire that define her
              legacy.
            </p>
          </div>

          {/* BOTTOM DIVIDER FRAME */}
          <div className="mt-8 flex items-center">
            <Image
              src="/fream-3.svg"
              alt="divider"
              width={300}
              height={60}
              className="opacity-90"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
