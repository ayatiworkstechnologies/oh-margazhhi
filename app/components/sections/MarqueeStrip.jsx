"use client";

import Image from "next/image";

const messages = [
  "Keep Moving. Keep Discovering Margazhi.",
  "Flowing Through Rhythm, Colour & Culture.",
  "Keep Moving. Keep Discovering Margazhi.",
];

export default function MarqueeStrip() {
  const loopMessages = [...messages, ...messages];

  return (
    <section className="border-y border-marg-border bg-white py-2 uppercase tracking-[0.18em] text-primary">
      <div className="overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {loopMessages.map((msg, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-4 px-5"
            >
              {/* centered text */}
              <span className="text-lg font-serif font-semibold px-10 whitespace-nowrap">
                {msg}
              </span>

              {/* centered icon */}
              <Image
                src="/fream-2.svg"
                alt="decorative"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
