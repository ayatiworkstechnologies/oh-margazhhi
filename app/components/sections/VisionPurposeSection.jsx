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
        body: "We welcome learners, young performers, and art lovers to experience MaRgazhi meaningfully.",
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
            <div className="relative flex items-stretch gap-6 px-5">

                {/* LEFT VERTICAL FRAME */}
                <div className="hidden lg:flex flex-col justify-center">
                    <Image
                        src="/fream-9.svg"        // vertical border svg
                        alt=""
                        width={60}
                        height={260}
                        className=" w-auto"
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
                                className="flex flex-col bg-primary  text-center text-white"
                            >
                                <div className="px-4 py-10">
                                    {/* Card title */}
                                    <h3 className="font-serif text-xl font-semibold tracking-wide mt-5">
                                        {item.title}
                                    </h3>

                                    <Image
                                        src="/fream-12.svg"
                                        alt=""
                                        width={160}
                                        height={40}
                                        className="m-4 mx-auto"   // ⭐ centers the image
                                    />



                                    {/* Body */}
                                    <p className="flex-1 text-lg font-sans font-light text-secondary mt-5">
                                        {item.body}
                                    </p>

                                    {/* Bottom motif + border strip */}
                                    <div className="mt-6 flex justify-center pt-4">
                                        <Image
                                            src="/fream-11.svg"   // small kolam / motif svg
                                            alt=""
                                            width={82}
                                            height={82}
                                        />

                                    </div>
                                </div>

                                <div className="mt-auto flex justify-center py-2">
                                    <Image
                                        src="/fream-10.svg"
                                        alt="decorative bottom strip"
                                        width={450}      // make smaller
                                        height={50}
                                        className="mx-auto"
                                    />
                                </div>

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
                        className=" w-auto rotate-180"
                    />
                </div>
            </div>
            </Container>
        </section>
    );
}
