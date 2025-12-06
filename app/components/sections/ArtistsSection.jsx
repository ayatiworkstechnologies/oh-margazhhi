"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ArtistCard from "../cards/ArtistCard";
import { artists } from "../../data/artists";

export default function ArtistsSection() {
  const total = artists.length;
  const [visibleCount, setVisibleCount] = useState(1); // 1 on mobile by default
  const [currentPage, setCurrentPage] = useState(0);

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

  // Split artists into pages based on visibleCount
  const pages = [];
  for (let i = 0; i < total; i += visibleCount) {
    pages.push(artists.slice(i, i + visibleCount));
  }
  const numPages = pages.length;

  // Ensure currentPage is valid when visibleCount changes
  useEffect(() => {
    if (currentPage >= numPages) {
      setCurrentPage(0);
    }
  }, [numPages, currentPage]);

  const goNext = () => {
    setCurrentPage((prev) => (prev + 1) % numPages);
  };

  const goPrev = () => {
    setCurrentPage((prev) => (prev - 1 + numPages) % numPages);
  };

  // autoplay – move page by page
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % numPages);
    }, 2500);
    return () => clearInterval(timer);
  }, [numPages]);

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
            color="text-secondary"
            bottomDecoration="/fream-8.svg"
          />
        </div>

        {/* Carousel */}
        {/* Carousel */}
        <div className="m-8 sm:m-15 relative flex items-center justify-center">
          {/* PREV BUTTON – LEFT */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute -left-4 sm:-left-6 lg:-left-12 z-10
               flex h-10 w-10 items-center justify-center
               rounded-full border border-secondary/70
               text-secondary bg-primary/70
               hover:bg-secondary/10 transition"
            aria-label="Previous artists"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Slider viewport */}
          <div className="w-full max-w-5xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((group, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                  {group.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* NEXT BUTTON – RIGHT */}
          <button
            type="button"
            onClick={goNext}
            className="absolute -right-4 sm:-right-6 lg:-right-12 z-10
               flex h-10 w-10 items-center justify-center
               rounded-full border border-secondary/70
               text-secondary bg-primary/70
               hover:bg-secondary/10 transition"
            aria-label="Next artists"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}
