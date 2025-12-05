"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { events } from "../../data/events"; // <-- IMPORT DATA

// Convert events.js → { 16: [event1, event2], 17: [event3, event4] }
function groupEventsByDay(events) {
  const map = {};
  events.forEach((ev) => {
    const [mon, day] = ev.date.split(" "); // "Dec 16" → ["Dec", "16"]
    const dayNum = Number(day);

    if (!map[dayNum]) map[dayNum] = [];
    map[dayNum].push(ev);
  });
  return map;
}

export default function EventCalendarSection() {
  // Build event lookup table once
  const eventMap = groupEventsByDay(events);
  const daysWithEvents = Object.keys(eventMap).map((num) => Number(num));

  const [selectedDay, setSelectedDay] = useState(daysWithEvents[0]);

  // 🔹 All events for this day
  const selectedEvents = eventMap[selectedDay] || [];
  // 🔹 Shared poster = first event's image
  const posterImage = selectedEvents[0]?.image || null;

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <Container>
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-stretch">
          {/* LEFT FRAME */}
          <div className="hidden lg:flex flex-col justify-center">
            <Image
              src="/fream-9.svg"
              alt=""
              width={80}
              height={260}
              className="w-auto h-[260px]"
            />
          </div>

          {/* MAIN 12 COL LAYOUT */}
          <div className="flex-1 grid items-start gap-8 md:grid-cols-12">
            {/* CALENDAR (5/12 on md+, full-width on mobile) */}
            <div className="md:col-span-5">
              <SectionTitle
                title="Event Calendar"
                color="text-primary"
                bottomDecoration="/fream-3.svg"
                align="left"
              />

              <div className="mt-4 sm:mt-6 py-4 sm:py-6">
                {/* WEEKDAYS */}
                <div className="mb-2 ml-4 sm:ml-8 grid grid-cols-7 gap-4 sm:gap-8 text-[11px] sm:text-xs md:text-sm font-semibold text-primary/70">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>

                {/* DAYS */}
                <div className="grid grid-cols-7 gap-[3px] text-[11px] sm:text-xs">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(
                    (day, idx) => {
                      const isSelected = selectedDay === day;
                      const hasEvent = daysWithEvents.includes(day);

                      let styles =
                        "flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center text-sm sm:text-base font-light border border-transparent rounded-[2px]";

                      if (hasEvent) styles += " bg-[#f5eedf]";
                      if (isSelected) styles += " bg-primary text-white";

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedDay(day)}
                          className={`${styles} hover:border-secondary/60 transition`}
                        >
                          {day}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* DETAILS PANEL (7/12 on md+, full-width on mobile) */}
            <div className="md:col-span-7 md:border-l md:border-border/60 md:pl-6 lg:pl-8 flex flex-col md:flex-row gap-6">
              {/* POSTER (single image for the date) */}
              <div className="w-full md:w-40 sm:w-44 md:w-52 lg:w-64 shrink-0 flex justify-center md:justify-start">
                {posterImage && (
                  <Image
                    src={posterImage}
                    alt={selectedEvents[0]?.title || "Event poster"}
                    width={260}
                    height={380}
                    className="h-auto w-full max-w-[260px] object-cover rounded-sm"
                  />
                )}
              </div>

              {/* DETAILS – MULTIPLE EVENTS */}
              <div className="space-y-4 text-primary pt-2 md:pt-4 pb-4 md:pb-10 w-full text-center md:text-left">
                {selectedEvents.length > 0 ? (
                  <>
                    <h4 className="font-serif text-base sm:text-lg md:text-xl font-semibold">
                      Events on {selectedEvents[0].date}
                    </h4>

                    <div className="flex justify-center md:justify-start">
                      <Image
                        src="/fream-3.svg"
                        width={180}
                        height={30}
                        alt=""
                        className="mt-1"
                      />
                    </div>

                    <div className="mt-3 sm:mt-4 space-y-4 max-w-md mx-auto md:mx-0">
                      {selectedEvents.map((ev) => (
                        <div
                          key={ev.id}
                          className="border-b border-border/40 pb-3 last:border-b-0 last:pb-0"
                        >
                          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-primary/70">
                            {ev.cat}
                          </p>

                          <p className="mt-1 font-serif text-sm sm:text-base md:text-lg font-semibold">
                            {ev.title}
                          </p>

                          {ev.performer && (
                            <p className="text-xs sm:text-sm font-sans text-primary/80">
                              by {ev.performer}
                            </p>
                          )}

                          <div className="mt-2 space-y-1 text-xs sm:text-sm md:text-base">
                            <DetailRow label="Date" value={ev.date} />
                            <DetailRow label="Time" value={ev.time} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-xs sm:text-sm text-muted">
                    No event scheduled for this date.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT FRAME */}
          <div className="hidden lg:flex flex-col justify-center">
            <Image
              src="/fream-9.svg"
              alt=""
              width={80}
              height={260}
              className="w-auto h-[260px] rotate-180"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Helper row UI */
function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <p className="flex gap-2 justify-center md:justify-start">
      <span className="min-w-[70px] sm:min-w-[80px] font-semibold text-xs sm:text-sm">
        {label} :
      </span>
      <span className="font-light text-xs sm:text-sm md:text-base">
        {value}
      </span>
    </p>
  );
}
