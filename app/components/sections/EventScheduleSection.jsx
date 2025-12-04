"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { FiCalendar, FiClock, FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const scheduleEvents = [
    {
        id: 1,
        day: 16,
        monthShort: "DEC",
        title: "Opening Night – MaRgazhi Mandapam",
        venue: "92/1, Anand Nagar Main Rd, MCN Nagar, Okklyam, Thoraipakkam, Tamil Nadu 600097",
        dateLabel: "December 16",
        timeLabel: "6.00PM",
        image: "/event-5.png",
    },
    {
        id: 2,
        day: 17,
        monthShort: "DEC",
        title: "Opening Night – MaRgazhi Mandapam",
        venue: "92/1, Anand Nagar Main Rd, MCN Nagar, Okklyam, Thoraipakkam, Tamil Nadu 600097",
        dateLabel: "December 17",
        timeLabel: "6.00PM",
        image: "/event-5.png",
    },
    {
        id: 3,
        day: 18,
        monthShort: "DEC",
        title: "Opening Night – MaRgazhi Mandapam",
        venue: "92/1, Anand Nagar Main Rd, MCN Nagar, Okklyam, Thoraipakkam, Tamil Nadu 600097",
        dateLabel: "December 18",
        timeLabel: "6.00PM",
        image: "/event-5.png",
    },
    {
        id: 4,
        day: 19,
        monthShort: "DEC",
        title: "Opening Night – MaRgazhi Mandapam",
        venue: "92/1, Anand Nagar Main Rd, MCN Nagar, Okklyam, Thoraipakkam, Tamil Nadu 600097",
        dateLabel: "December 19",
        timeLabel: "6.00PM",
        image: "/event-5.png",
    },
    {
        id: 5,
        day: 20,
        monthShort: "DEC",
        title: "Opening Night – MaRgazhi Mandapam",
        venue: "92/1, Anand Nagar Main Rd, MCN Nagar, Okklyam, Thoraipakkam, Tamil Nadu 600097",
        dateLabel: "December 20",
        timeLabel: "6.00PM",
        image: "/event-5.png",
    },
];

export default function EventScheduleSection() {
    return (
        <section className="bg-white py-14 sm:py-16">
            <Container>
                {/* Header row: title + month selector */}
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="font-serif text-xl sm:text-2xl text-primary">

                    </h2>

                    <div className="flex items-center gap-3 text-sm font-sans text-primary">
                        <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary hover:bg-surface-100"
                        >
                            <FiChevronLeft size={18} />
                        </button>
                        <span className="uppercase tracking-[0.15em] text-primary">
                            December
                        </span>
                        <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-primary hover:bg-surface-100"
                        >
                            <FiChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {scheduleEvents.map((event) => (
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

                            {/* Date block */}
                            <div className="flex items-center justify-center border-y md:border-y-0 md:border-l border-border/60 bg-surface-100">
                                <div className="text-center leading-none flex flex-col items-center">
                                    <span className="block text-primary font-serif tracking-[0.15em] text-xl">
                                        {event.monthShort}
                                    </span>

                                    <span className="block font-serif font-semibold text-primary text-5xl mt-1">
                                        {event.day}
                                    </span>
                                </div>
                            </div>


                            {/* Details */}
                            <div className="flex flex-col justify-center gap-3 px-4 py-3 sm:px-6">
                                <h3 className="font-serif text-lg sm:text-2xl text-primary">
                                    {event.title}
                                </h3>

                                <p className="text-base sm:text-lg font-sans font-light leading-relaxed text-primary/75 flex items-start gap-2">
                                    <FiMapPin className="text-primary shrink-0 mt-1" size={20} />
                                    <span>{event.venue}</span>
                                </p>


                                <div className="mt-1 flex flex-wrap items-center gap-4 text-base sm:text-lg text-primary/80">
                                    <span className="inline-flex items-center gap-1">
                                        <FiCalendar className="text-primary" size={20} />
                                        {event.dateLabel}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <FiClock className="text-primary" size={20} />
                                        {event.timeLabel}
                                    </span>

                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
