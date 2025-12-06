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
      3000 // change every 3s
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-10 sm:py-12 lg:py-16">
      <Container className="relative grid gap-8 lg:gap-12 items-start md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* LEFT — PATTERN + IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          {/* LEFT — FRAME + IMAGE (SAME HEIGHT) */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative flex gap-4 h-[600px]">
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

              {/* MAIN IMAGE SLIDER */}
              <div className="relative  h-full overflow-hidden">
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

          {/* MAIN IMAGE SLIDER */}
          <div className="relative w-full max-w-[480px] h-[600px] overflow-hidden">
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

        {/* RIGHT — TEXT BLOCK */}
        <div className="relative">
          <SectionTitle align="left" title="Aruna Sairam - Voice of Devotion" />

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
