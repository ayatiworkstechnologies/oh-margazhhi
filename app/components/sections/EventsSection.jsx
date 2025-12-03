"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ← React Icons
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EventCard from "../cards/EventCard";
import { events } from "../../data/events";

export default function EventsSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section
      id="events"
      className="relative  bg-cover bg-center py-14 sm:py-16"
    >
      <Container>
        <div className="flex flex-col items-center gap-8">

          <SectionTitle title="Events" color="text-primary" bottomDecoration="/fream-4.svg" />

          {/* BUTTONS OUTSIDE ROW */}
          <div className="relative flex w-full items-center">
            
            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              className="
                absolute -left-15 
                top-1/2 -translate-y-1/2 
                hidden md:flex 
                h-10 w-10 items-center justify-center 
                rounded-full border border-primary/30 bg-white/70 
                text-primary shadow-sm backdrop-blur 
                hover:bg-primary hover:text-white transition
              "
            >
              <ChevronLeft size={22} strokeWidth={1.6} />
            </button>

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              className="flex w-full items-stretch gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
            >
              {events.map((event) => (
                <div key={event.id} className="min-w-[250px] flex-1 md:min-w-0">
                  <EventCard event={event} />
                </div>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              className="
                absolute -right-15 
                top-1/2 -translate-y-1/2 
                hidden md:flex 
                h-10 w-10 items-center justify-center 
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
