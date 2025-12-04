"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const items = [
    "Intimate evening performances",
    "Morning meditative concerts",
    "Senior Gurus Workshops",
    "Classical Cultural Collaborations",
    "Traditional Stage Aesthetics",
    "Rasika-Friendly Seating",
];

export default function ExperienceSection() {
    return (
        <section className="relative bg-primary py-16 text-center overflow-hidden">

            {/* 🔹 TOP BORDER PATTERN */}
            <div className="absolute top-0 inset-x-0">
                <Image
                    src="/fream-7.svg"          // your repeated kolam border SVG
                    alt=""
                    width={1800}
                    height={120}
                    className="w-full object-cover"
                />
            </div>

            {/* 🔹 BOTTOM BORDER PATTERN */}
            <div className="absolute bottom-0 inset-x-0">
                <Image
                    src="/fream-7.svg"       // same border repeated
                    alt=""
                    width={1800}
                    height={120}
                    className="w-full object-cover"
                />
            </div>

            <Container className="relative z-10 py-20">

                {/* TITLE */}

                <SectionTitle
                    title="What You’ll Experience Here"
                    color="text-white"
                    bottomDecoration="/fream-8.svg"

                />

                <Image
                    src="/fream-4.svg"
                    alt="divider"
                    width={180}
                    height={40}
                    className="mx-auto mt-2"
                />

                {/* FEATURE GRID */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {items.map((text, idx) => (
                        <div
                            key={idx}
                            className=" bg-white text-primary py-3 w-100 text-2xl font-sans font-light shadow-lg"
                        >
                            {text}
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}
