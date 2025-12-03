"use client";

import Image from "next/image";
import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-primary text-surface-100 py-4 lg:py-6"
    >
      <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Text */}
        <div className="space-y-6 opacity-0 animate-[slideInLeft_0.7s_ease-out_forwards]">
          <h1 className="font-serif  text-xl sm:text-2xl md:text-4xl text-surface-100">
            Where Margazhi Music Breathes Life
            Into Tradition Again
          </h1>

          <p className="max-w-md text-xl leading-relaxed text-white font-light font-sans">
            Celebrate soulful performances honoring culture, devotion, heritage and artistry. 
          </p>

          {/* Date badge */}
          <div className="inline-flex flex-col items-start bg-secondary px-6 py-3 text-[11px] tracking-wide opacity-0 animate-[slideUp_0.7s_ease-out_forwards] [animation-delay:0.3s]">
            <span className="font-semibold font-serif text-2xl text-primary">
              December 15 - January 14
            </span>
            <span className="mt-1 text-lg text-primary font-light font-sans">
              Chennai, Tamil Nadu
            </span>
          </div>
        </div>

        {/* Image / collage */}
        <div className="relative flex justify-center md:justify-end opacity-0 animate-[slideInRight_0.7s_ease-out_forwards] [animation-delay:0.15s]">
          <div className="relative">
            <Image
              src="/hero-img.svg"
              alt="OhMargazhi classical dancer"
              width={550}         // keep natural size
              height={600}        // adjust based on your original SVG size
              className="object-contain"
              priority
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
