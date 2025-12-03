"use client";

import Image from "next/image";
import Container from "../ui/Container";

export default function WhyMargazhiMatters() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* LEFT: TEXT */}
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-4">
              Why Margazhi Matters
            </h2>

            <p className="text-sm sm:text-[15px] leading-relaxed text-primary/80 font-secondary">
              Margazhi is a month of quiet devotion, early dawn hymns, and
              spiritual introspection. For centuries, it has been the heart of
              India’s classical arts season. Dancers and musicians dedicate
              this time to offering their craft with sincerity and discipline.
              Oh Margazhii carries this legacy forward, presenting art in its
              purest, most heartfelt form. Here, every step, note, and gesture
              becomes a prayer.
            </p>

            {/* small underline / arrow */}
            <div className="mt-6">
              <Image
                src="/fream-3.svg"       // thin line + tiny arrow, like reference
                alt="decorative underline"
                width={180}
                height={20}
              />
            </div>
          </div>

          {/* RIGHT: ILLUSTRATION */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/about-img-3.png"  // that kolam + lamp graphic
              alt="Margazhi kolam and lamp"
              width={420}
              height={450}
              className="h-auto w-full "
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
