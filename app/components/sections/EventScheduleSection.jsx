"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { FiCalendar, FiClock, FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { events } from "../../data/events"; // ← using your existing file

// Common venue for all events
const COMMON_VENUE =
  "92/1, Anand Nagar Main Rd, MCN Nagar, Okklyam, Thoraipakkam, Tamil Nadu 600097";

// Convert "Dec 30" → { monthShort: "DEC", day: "30" }
const parseDate = (dateStr) => {
  if (!dateStr) return { monthShort: "", day: "" };

  const [mon, day] = dateStr.split(" ");
  return {
    monthShort: mon.toUpperCase(),
    day: day.replace(/\D/g, ""),
  };
};

export default function EventScheduleSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>

        {/* Header row */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-serif text-xl sm:text-2xl text-primary"></h2>

          <div className="flex items-center gap-3 text-sm font-sans text-primary">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary hover:bg-surface-100">
              <FiChevronLeft size={18} />
            </button>

            <span className="uppercase tracking-[0.15em] text-primary">
              December
            </span>

            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary hover:bg-surface-100">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Event List */}
        <div className="space-y-4">
          {events.map((event) => {
            const { monthShort, day } = parseDate(event.date);

            return (
              <article
                key={event.id}
                className="grid gap-4 overflow-hidden border border-border/60 bg-white shadow-soft md:grid-cols-[minmax(0,220px)_80px_minmax(0,1fr)]"
              >
                {/* Image */}
                <div className="relative h-40 md:h-44">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Date Block */}
                <div className="flex items-center justify-center border-y md:border-y-0 md:border-l border-border/60 bg-surface-100">
                  <div className="flex flex-col items-center leading-none text-primary">
                    <span className="font-serif tracking-[0.15em] text-xl">
                      {monthShort}
                    </span>
                    <span className="mt-1 font-serif text-5xl font-semibold">
                      {day}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center gap-3 px-4 py-3 sm:px-6">

                  {/* Category */}
                  {event.cat && (
                    <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-primary/70">
                      {event.cat}
                    </span>
                  )}

                  {/* Title + Performer */}
                  <h3 className="font-serif text-lg sm:text-2xl text-primary">
                    {event.title}
                    {event.performer && (
                      <span className="block text-sm sm:text-base font-sans font-light text-primary/80">
                        by {event.performer}
                      </span>
                    )}
                  </h3>

                  {/* Venue */}
                  <p className="text-base sm:text-lg font-sans font-light leading-relaxed text-primary/75 flex items-start gap-2">
                    <FiMapPin className="text-primary mt-1 shrink-0" size={20} />
                    <span>{COMMON_VENUE}</span>
                  </p>

                  {/* Date + Time */}
                  <div className="mt-1 flex flex-wrap items-center gap-4 text-base sm:text-lg text-primary/80">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar size={20} className="text-primary" />
                      {event.date.replace("Dec", "December")}
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <FiClock size={20} className="text-primary" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
