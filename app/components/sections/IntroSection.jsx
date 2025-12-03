"use client";

import Image from "next/image";
import Container from "../ui/Container";

export default function IntroSection() {
  return (
    <section id="about" className="bg-surface-100 py-12 sm:py-16">
      <Container className="max-w-3xl text-center">
        
        {/* Main text */}
        <p className="font-serif text-4xl leading-relaxed text-primary">
          Oh Margazhhi brings together dancers, musicians, gurus and rasikas to
          experience the sacred quietude of this month through curated
          performances, workshops and satsangs.
        </p>

        {/* Decorative frame image */}
        <div className="mt-6 flex items-center justify-center">
          <Image
            src="/fream-1.svg"
            alt="Oh Margazhhi Frame"
            width={250}
            height={40}
            className=""
          />
        </div>

      </Container>
    </section>
  );
}
