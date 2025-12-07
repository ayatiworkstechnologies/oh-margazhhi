"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EventCard from "../cards/EventCard";
import { events } from "../../data/events";

export default function EventsSection() {
  const scrollRef = useRef(null);

  // ✅ Desktop scroll logic (unchanged)
  const scrollByOneCard = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".event-card-item");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // gap-6

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  // ✅ Mobile slider logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = events.length;

  const goPrevMobile = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalEvents - 1 : prev - 1
    );
  };

  const goNextMobile = () => {
    setCurrentIndex((prev) =>
      prev === totalEvents - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="events" className="relative py-14 sm:py-16 bg-cover bg-center">
      <Container>
        <div className="flex flex-col items-center gap-8">

          <SectionTitle
            title="Events"
            color="text-primary"
            bottomDecoration="/fream-4.svg"
          />

          {/* ✅ MOBILE — Single Card + Prev / Next */}
          <div className="w-full md:hidden flex flex-col items-center gap-4">
            <div className="w-full max-w-sm">
              <EventCard event={events[currentIndex]} />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={goPrevMobile}
                className="
                  h-9 w-9 flex items-center justify-center
                  rounded-full border border-primary/30
                  bg-white/70 text-primary shadow-sm
                  hover:bg-primary hover:text-white transition
                "
                aria-label="Previous event"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="text-xs tracking-[0.18em] uppercase text-primary/70">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(totalEvents).padStart(2, "0")}
              </span>

              <button
                onClick={goNextMobile}
                className="
                  h-9 w-9 flex items-center justify-center
                  rounded-full border border-primary/30
                  bg-white/70 text-primary shadow-sm
                  hover:bg-primary hover:text-white transition
                "
                aria-label="Next event"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* ✅ DESKTOP — Horizontal Scroll (UNCHANGED DESIGN) */}
          <div className="relative hidden md:flex w-full items-center">

            {/* LEFT BUTTON */}
            <button
              onClick={() => scrollByOneCard("left")}
              className="
                absolute -left-12
                top-1/2 -translate-y-1/2
                h-10 w-10 flex items-center justify-center
                rounded-full border border-primary/30 bg-white/70 
                text-primary shadow-sm backdrop-blur
                hover:bg-primary hover:text-white transition
              "
            >
              <ChevronLeft size={22} strokeWidth={1.6} />
            </button>

            {/* SCROLLABLE ROW */}
            <div
              ref={scrollRef}
              className="
                flex w-full items-stretch gap-6 
                overflow-x-auto scroll-smooth pb-2 no-scrollbar
                snap-x snap-mandatory
              "
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="event-card-item snap-start min-w-[285px] flex-1"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scrollByOneCard("right")}
              className="
                absolute -right-12
                top-1/2 -translate-y-1/2
                h-10 w-10 flex items-center justify-center
                rounded-full border border-primary/30 bg-white/70 
                text-primary shadow-sm backdrop-blur
                hover:bg-primary hover:text-white transition
              "
            >
              <ChevronRight size={22} strokeWidth={1.6} />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}
