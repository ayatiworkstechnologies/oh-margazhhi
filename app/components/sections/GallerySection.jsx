"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const galleryImages = [
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-14 sm:py-16"
    >
      {/* BG SVG fixed inside section */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/gallery-bg.svg"
          alt="gallery background"
          width={1600}
          height={1600}
          className="w-auto max-w-none"
        />
      </div>

      <Container className="relative">
        {/* Title */}
        <div className="flex flex-col items-center">
          <SectionTitle title="Gallery" color="text-primary" />
          <Image
            src="/fream-4.svg"
            alt="divider"
            width={200}
            height={40}
            className="mt-2"
          />
        </div>

        {/* Scrollable gallery area – scroll only in this section */}
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="max-h-[500px] overflow-y-auto pr-2 gallery-scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="relative w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
