"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const visionItems = [
    {
        title: "Preserve Tradition",
        body: "We honour India’s classical forms with authenticity while presenting them in a refined modern space.",
    },
    {
        title: "Create Intimacy",
        body: "Small venues, curated audiences, and personal artistic interactions recreate the true sabha atmosphere.",
    },
    {
        title: "Inspire New Audiences",
        body: "We welcome learners, young performers, and art lovers to experience Margazhii meaningfully.",
    },
    {
        title: "Celebrate Artistic Diversity",
        body: "Each program brings unique perspectives while staying rooted in tradition.",
    },
];

export default function VisionPurposeSection() {
    return (
        <section className="relative bg-white py-12 sm:py-14">
            <Container>
                <div className="relative flex items-stretch gap-6">

                    {/* LEFT VERTICAL FRAME */}
                    <div className="hidden lg:flex flex-col justify-center">
                        <Image
                            src="/fream-9.svg"        // vertical border svg
                            alt=""
                            width={60}
                            height={260}
                            className="h-92 w-auto"
                        />
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="flex-1">
                        {/* Title + small underline like reference */}
                        <div className="flex flex-col items-center">
                            <SectionTitle
                                title="Our Vision & Purpose"
                                color="text-primary"
                                bottomDecoration="/fream-4.svg"

                            />

                        </div>

                        {/* Cards row */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {visionItems.map((item) => (
                                <article
                                    key={item.title}
                                    className="flex flex-col bg-primary px-6 py-6 text-center text-white"
                                >
                                    {/* Card title */}
                                    <h3 className="font-serif text-[15px] font-semibold tracking-wide">
                                        {item.title}
                                    </h3>
                                    <Image
                                        src="/fream-12.svg"        // vertical border svg
                                        alt=""
                                        width={200}
                                        height={40}
                                        className=""
                                    />


                                    {/* Body */}
                                    <p className="flex-1 text-sm leading-relaxed font-secondary font-light text-surface-100/90">
                                        {item.body}
                                    </p>

                                    {/* Bottom motif + border strip */}
                                    <div className="mt-6 flex flex-col items-center gap-3">
                                        <Image
                                            src="/fream-11.svg"   // small kolam / motif svg
                                            alt=""
                                            width={32}
                                            height={32}
                                        />

                                    </div>
                                    <Image
                                        src="/fream-10.svg" // thin decorative strip (optional)
                                        alt=""
                                        width={360}
                                        height={20}
                                    />
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT VERTICAL FRAME */}
                    <div className="hidden lg:flex flex-col justify-center">
                        <Image
                            src="/fream-9.svg"
                            alt=""
                            width={60}
                            height={260}
                            className="h-72 w-auto rotate-180"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
