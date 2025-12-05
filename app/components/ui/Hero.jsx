"use client";

import Image from "next/image";
import Container from "./Container";

export default function Hero({
  title,
  description,
  dateRange,
  location,
  imageSrc,
  imageAlt = "Hero image",
}) {
  return (
    <section className="bg-primary text-surface-100 py-8 sm:py-10 lg:py-12">
      <Container className="grid items-center gap-8 md:gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* Text Section */}
        <div className="space-y-5 sm:space-y-6 opacity-0 animate-[slideInLeft_0.7s_ease-out_forwards] text-center md:text-left">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-surface-100 leading-snug">
            {title}
          </h1>

          {description && (
            <p className="mx-auto md:mx-0 max-w-lg text-base sm:text-lg leading-relaxed text-white font-sans font-light">
              {description}
            </p>
          )}

          {/* Date Badge */}
          {(dateRange || location) && (
            <div
              className="inline-flex flex-col items-start md:items-start bg-secondary px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] tracking-wide
              opacity-0 animate-[slideUp_0.7s_ease-out_forwards] [animation-delay:0.3s]
              mx-auto md:mx-0"
            >
              {dateRange && (
                <span className="font-semibold font-serif text-xl sm:text-2xl text-primary">
                  {dateRange}
                </span>
              )}
              {location && (
                <span className="mt-1 text-sm sm:text-lg text-primary font-light font-sans">
                  {location}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Image Section */}
        <div
          className="relative flex justify-center md:justify-end opacity-0 
          animate-[slideInRight_0.7s_ease-out_forwards] [animation-delay:0.15s]"
        >
          <div className="w-56 sm:w-72 md:w-[420px] lg:w-[520px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={550}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
