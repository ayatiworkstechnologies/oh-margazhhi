"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ArtistCard from "../cards/ArtistCard";
import { artists } from "../../data/artists";

export default function ArtistsPageSection() {
  return (
    <section
      id="artists"
      className="relative overflow-hidden bg-primary py-14 sm:py-16"
    >
      {/* TOP DECORATIVE STRIP */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <Image
          src="/fream-7.svg"   // horizontal top pattern SVG
          alt=""
          width={1440}
          height={80}
          className="h-30 w-full object-cover"
        />
      </div>

      {/* BOTTOM DECORATIVE STRIP */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <Image
          src="/fream-7.svg"   // reuse same SVG for bottom
          alt=""
          width={1440}
          height={80}
          className="h-30 w-full object-cover"
        />
      </div>

      <Container className="relative mt-10">
        <SectionTitle
          title="Artists"
          color="text-secondary"
          bottomDecoration="/fream-8.svg"
          className="mt-20"
        />

        <div className=" mb-10 grid gap-10 sm:grid-cols-3 py-10">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </Container>
    </section>
  );
}
