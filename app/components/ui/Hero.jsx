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
    <section className="bg-primary text-surface-100 py-6 lg:py-10">
      <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">

        {/* Text Section */}
        <div className="space-y-6 opacity-0 animate-[slideInLeft_0.7s_ease-out_forwards]">

          <h1 className="font-serif text-xl sm:text-2xl md:text-4xl text-surface-100 leading-snug">
            {title}
          </h1>

          {description && (
            <p className="max-w-md text-lg leading-relaxed text-white font-sans font-lights">
              {description}
            </p>
          )}

          {/* Date Badge */}
          {(dateRange || location) && (
            <div className="inline-flex flex-col items-start bg-secondary px-6 py-3 text-[11px] tracking-wide 
              opacity-0 animate-[slideUp_0.7s_ease-out_forwards] [animation-delay:0.3s]"
            >
              {dateRange && (
                <span className="font-semibold font-serif text-2xl text-primary">
                  {dateRange}
                </span>
              )}
              {location && (
                <span className="mt-1 text-lg text-primary font-light font-sans">
                  {location}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center md:justify-end opacity-0 
          animate-[slideInRight_0.7s_ease-out_forwards] [animation-delay:0.15s]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={550}
            height={600}
            className="object-contain"
            priority
          />
        </div>

      </Container>
    </section>
  );
}
