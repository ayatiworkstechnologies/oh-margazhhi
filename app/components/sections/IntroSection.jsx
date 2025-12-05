"use client";

import Image from "next/image";
import Container from "../ui/Container";

export default function IntroSection() {
  return (
    <section id="about" className="bg-surface-100 py-10 sm:py-14 lg:py-16">
      <Container className="max-w-3xl text-center md:px-30">
        {/* Main text */}
        <p className="font-serif mx-auto text-2xl sm:text-3xl md:text-4xl leading-relaxed sm:leading-relaxed md:leading-normal text-primary">
          Oh MaRgazhi brings together dancers, musicians, gurus and rasikas to
          experience the sacred quietude of this month through curated
          performances, workshops and satsangs.
        </p>

        {/* Decorative frame image */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center">
          <Image
            src="/fream-1.svg"
            alt="OhMaRgazhi Frame"
            width={250}
            height={40}
          />
        </div>
      </Container>
    </section>
  );
}
