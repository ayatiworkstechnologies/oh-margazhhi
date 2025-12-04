"use client";

import Image from "next/image";
import Container from "../ui/Container";

export default function AboutOhMargazhhiSection() {
  return (
    <section id="about" className="">
      {/* <Container> */}
        <div className="mx-auto grid max-w-8xl overflow-hidden md:grid-cols-2">

          {/* LEFT FULL IMAGE */}
          <div className="relative h-full min-h-[360px] bg-primary">
            <Image
              src="/about-img-2.png"
              alt="Temple About OhMargazhhi"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT WHITE CONTENT */}
          <div className="bg-white px-8 md:px-15 py-10 md:py-14 m-5 md:m-10 relative">

            {/* MAIN TITLE */}
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              About OhMargazhhi
            </h2>

            
            {/* SUBTITLE */}
            <p className=" font-serif text-xl md:text-2xl leading-relaxed text-black mb-4 mt-5 md:mt-10">
              A celebration of devotion, rhythm, and timeless Indian classical arts.
            </p>

            {/* DESCRIPTION */}
            <p className="text-xl md:text-lg font-sans font-light leading-relaxed text-black mt-5 md:mt-10 mb-4">
              OhMargazhi is a curated arts festival born from the sacred energy of the Margazhi season. It brings together dancers, musicians, gurus, and rasikas in a space of tradition, purity, and artistic sincerity. Every event here is designed as an offering - an experience, not a performance.
            </p>

           

            {/* BOTTOM ARROW ICON */}
            <div className="mt-6">
              <Image
                src="/fream-3.svg"    // ← right side arrow vector
                alt="decorative arrow"
                width={320}
                height={20}
              />
            </div>
          </div>
        </div>
      {/* </Container> */}
    </section>
  );
}
