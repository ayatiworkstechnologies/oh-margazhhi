"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const eventMap = {
  16: {
    title: "Opening Night - Margazhii Mandapam",
    date: "December 16",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
  17: {
    title: "Kathak & Carnatic Conversations",
    date: "December 17",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
  18: {
    title: "Bharatanatyam Evening",
    date: "December 18",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
  19: {
    title: "Bharatanatyam Evening",
    date: "December 19",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
  20: {
    title: "Bharatanatyam Evening",
    date: "December 20",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
  21: {
    title: "Bharatanatyam Evening",
    date: "December 21",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
  22: {
    title: "Bharatanatyam Evening",
    date: "December 22",
    time: "6.00 PM",
    venue: "Chennai",
    poster: "/cal-1.png",
  },
};

const daysWithEvents = Object.keys(eventMap).map((d) => Number(d));

const monthDays = [
  null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31,
];

export default function EventCalendarSection() {
  const [selectedDay, setSelectedDay] = useState(16);
  const selectedEvent = eventMap[selectedDay];

  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="relative flex items-stretch gap-6">

          {/* LEFT FRAME SVG */}
          <div className="hidden lg:flex flex-col justify-center">
            <Image
              src="/fream-9.svg"
              alt=""
              width={80}
              height={260}
              className="h-92 w-auto"
            />
          </div>

          {/* MAIN CONTENT: 5 / 7 SPLIT */}
          <div className="flex-1 grid items-start gap-8 md:grid-cols-12">

            {/* CALENDAR COLUMN (5/12) */}
            <div className="md:col-span-5">
              <SectionTitle
                title="Event Calendar"
                color="text-primary"
                bottomDecoration="/fream-3.svg"
                align="left"
              />

              <div className="mt-6 py-6">
                {/* Weekdays */}
                <div className="mb-2 ml-8 grid grid-cols-7 gap-8 text-lg font-semibold text-primary/70">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-7 gap-[3px] text-xs sm:text-sm">
                  {monthDays.map((day, idx) => {
                    if (!day) return <span key={idx} />;

                    const isSelected = selectedDay === day;
                    const hasEvent = daysWithEvents.includes(day);

                    let base =
                      "flex h-8 min-w-[2.1rem] items-center justify-center text-lg font-sans font-light border border-transparent";
                    let bg = "";
                    let text = "text-primary";

                    if (hasEvent) {
                      bg = "bg-[#f5eedf]";
                    }
                    if (isSelected) {
                      bg = "bg-primary text-white";
                      text = "text-white";
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`${base} ${bg} ${text} transition hover:border-secondary/60`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* DETAILS COLUMN (7/12) */}
            <div className="md:col-span-7 md:border-l md:border-border/60 md:pl-8 flex flex-col md:flex-row gap-6">

              {/* POSTER */}
              <div className="w-40 sm:w-44 md:w-52 lg:w-64 shrink-0 flex justify-center">
                {selectedEvent && (
                  <Image
                    src={selectedEvent.poster}
                    alt={selectedEvent.title}
                    width={220}
                    height={360}
                    className="h-auto w-full object-cover"
                  />
                )}
              </div>

              {/* EVENT DETAILS */}
              <div className="space-y-3 text-primary py-4 md:py-10">
                {selectedEvent ? (
                  <>
                    <h4 className="font-serif text-base sm:text-lg md:text-xl font-semibold">
                      {selectedEvent.title}
                    </h4>

                    <Image
                      src="/fream-3.svg"
                      alt="divider"
                      width={180}
                      height={30}
                      className="mt-1"
                    />

                    <div className="mt-3 space-y-2 text-lg sm:text-base md:text-lg">
                      <DetailRow label="Date" value={selectedEvent.date} />
                      <DetailRow label="Time" value={selectedEvent.time} />
                      <DetailRow label="Venue" value={selectedEvent.venue} />
                    </div>
                  </>
                ) : (
                  <p className="text-muted">No event scheduled for this date.</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT FRAME SVG */}
          <div className="hidden lg:flex flex-col justify-center">
            <Image
              src="/fream-9.svg"
              alt=""
              width={80}
              height={260}
              className="h-92 w-auto rotate-180"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* helper row to keep label/value aligned exactly like design */
function DetailRow({ label, value }) {
  return (
    <p className="flex gap-2">
      <span className="min-w-[60px] font-semibold">{label} :</span>
      <span className="font-sans font-light">{value}</span>
    </p>
  );
}
