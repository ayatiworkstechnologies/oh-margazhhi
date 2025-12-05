"use client";

import Image from "next/image";

// const messages = [
//   "SA- RE –GA- MA- PA- DHA -NI -SA .",
//   "SA- NI- DHA -PA -MA -GA –RE- SA . .",
//   "SA SA- RE RE -GA GA- MA MA- PA PA -DHA DHA- NI NI- SA SA . .",
//   "SA SA -NI NI- DHA DHA- PA PA- MA MA -GA GA -RE RE- SA SA ."
// ];
const messages = [
  "ஸா – ரி – க – ம – ப – த – நி – ஸா .",
  "ஸா – நி – த – ப – ம – க – ரி – ஸா . .",
  "ஸா ஸா – ரி ரி – க க – ம ம – ப ப – த த – நி நி – ஸா ஸா . .",
  "ஸா ஸா – நி நி – த த – ப ப – ம ம – க க – ரி ரி – ஸா ஸா ."
];


export default function MarqueeStrip() {
  // Duplicate for smooth infinite loop
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
              {/* text */}
              <span className="text-lg font-serif font-semibold px-10 whitespace-nowrap">
                {msg}
              </span>

              {/* decorative icon */}
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
