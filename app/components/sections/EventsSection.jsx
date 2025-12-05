"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EventCard from "../cards/EventCard";
import { events } from "../../data/events";

export default function EventsSection() {
  const scrollRef = useRef(null);

  const scrollByOneCard = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".event-card-item");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // including gap (24px = gap-6)

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
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

          

          <div className="relative flex w-full items-center">

            {/* LEFT BUTTON */}
            <button
              onClick={() => scrollByOneCard("left")}
              className="
                absolute -left-12
                top-1/2 -translate-y-1/2
                hidden md:flex h-10 w-10 items-center justify-center
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
                  className="event-card-item snap-start min-w-[285px] md:min-w-[285px] flex-1"
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
                hidden md:flex h-10 w-10 items-center justify-center
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
