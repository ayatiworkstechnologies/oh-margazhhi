"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ArtistCard from "../cards/ArtistCard";
import { artists } from "../../data/artists";

export default function ArtistsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // 1 on mobile by default
  const total = artists.length;

  // Responsive visible count: 1 (mobile), 2 (sm/md), 3 (lg+)
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 640) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // autoplay – move one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(timer);
  }, [total]);

  // compute sliding window for current visibleCount
  const visibleArtists = Array.from(
    { length: Math.min(visibleCount, total) },
    (_, i) => artists[(currentIndex + i) % total]
  );

  return (
    <section
      id="artists"
      className="relative overflow-hidden bg-primary py-10 sm:py-14 lg:py-16"
    >
      {/* TOP DECORATIVE STRIP */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <Image
          src="/fream-7.svg"
          alt=""
          width={1440}
          height={80}
          className="h-24 w-full object-cover"
        />
      </div>

      {/* BOTTOM DECORATIVE STRIP */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <Image
          src="/fream-7.svg"
          alt=""
          width={1440}
          height={80}
          className="h-24 w-full object-cover"
        />
      </div>

      <Container className="relative mt-8 sm:mt-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <SectionTitle
            title="Artists"
            color="text-white"
            bottomDecoration="/fream-8.svg"
          />
        </div>

        {/* Carousel */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-6">
          {/* Visible cards */}
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-secondary/70 text-secondary hover:bg-secondary/10 transition"
              aria-label="Previous artists"
            >
              <FiChevronLeft size={18} />
            </button>

            {/* <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-secondary">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span> */}

            <button
              type="button"
              onClick={goNext}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-secondary/70 text-secondary hover:bg-secondary/10 transition"
              aria-label="Next artists"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
