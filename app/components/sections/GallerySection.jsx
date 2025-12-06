"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
  "/gallery/22.jpg",
  "/gallery/23.jpg",
  "/gallery/24.jpg",
  "/gallery/25.jpg",
  "/gallery/26.jpg",
  "/gallery/27.jpg",
  "/gallery/28.jpg",
  "/gallery/29.jpg",
  "/gallery/30.jpg",
  "/gallery/31.jpg",
  "/gallery/32.jpg",
  "/gallery/33.jpg",
  "/gallery/34.jpg",
  "/gallery/35.jpg",
  "/gallery/36.jpg",
  "/gallery/37.jpg",
  "/gallery/38.jpg",
  "/gallery/39.jpg",

];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const prevImage = () => {
    setIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  };

  const nextImage = () => {
    setIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));
  };

  // Keyboard controls
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <section id="gallery" className="relative overflow-hidden py-14 sm:py-16">
      {/* BG SVG */}
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

        {/* Scrollable Grid */}
        <div className="mt-10 mx-auto max-w-4xl">
          <div className="max-h-[550px] overflow-y-auto no-scrollbar pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {galleryImages.map((src, idx) => (
                <button
                  key={idx}
                  className="relative w-full overflow-hidden cursor-pointer"
                  onClick={() => openModal(idx)}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ⭐ MODAL OVERLAY ⭐ */}
     {/* ⭐ MODAL OVERLAY ⭐ */}
{open && (
  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
    {/* IMAGE */}
    <div className="relative max-w-4xl w-full flex justify-center">
      <Image
        src={galleryImages[index]}
        alt="Large preview"
        width={1200}
        height={900}
        className="rounded-lg shadow-lg object-contain max-h-[90vh]"
      />
    </div>

    {/* CLOSE BUTTON */}
    <button
      className="absolute top-4 right-4 z-50 text-white text-3xl font-light hover:text-secondary transition"
      onClick={closeModal}
    >
      ✕
    </button>

    {/* PREV BUTTON */}
    <button
      className="absolute left-4 z-50 text-white text-4xl hover:text-secondary transition"
      onClick={prevImage}
      aria-label="Previous image"
    >
      ❮
    </button>

    {/* NEXT BUTTON */}
    <button
      className="absolute right-4 z-50 text-white text-4xl hover:text-secondary transition"
      onClick={nextImage}
      aria-label="Next image"
    >
      ❯
    </button>
  </div>
)}

    </section>
  );
}