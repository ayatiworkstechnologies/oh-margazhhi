"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedGuest() {
  return (
    <section className="relative bg-white py-14 sm:py-16">
      
      {/* TOP RIGHT DECORATIVE SVG */}
      <div className="pointer-events-none absolute right-10 top-20 hidden lg:block">
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
        <div className="relative md:mt-18">
          <SectionTitle
            align="left"
            title="Bombay Jayashri - Voice of Serenity"
          />

          <div className="mt-5 md:max-w-lg text-xl leading-relaxed text-black/80 font-sans font-light">
            <p>
              Bombay Jayashri graces this year’s festival as our distinguished special guest, bringing her timeless voice and serene artistry to the Margazhi season. Her music bridges tradition and emotion with effortless purity, creating an atmosphere of deep calm and devotion. Renowned for her soulful renditions, she has touched audiences worldwide with her meditative style. Her presence adds profound artistic value to our celebration of classical arts. This Margazhi, experience her music as a spiritual journey in itself.
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
