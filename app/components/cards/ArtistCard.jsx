export default function ArtistCard({ artist }) {
  return (
    <article className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* Decorative Corners */}
        {/* <span className="pointer-events-none absolute -top-3 right-0 h-8 w-8 border-t border-r border-secondary" />
        <span className="pointer-events-none absolute -bottom-3 left-0 h-8 w-8 border-b border-l border-secondary" /> */}

        {/* IMAGE - show in actual size */}
        <img
          src={artist.image}
          alt={artist.name}
          className="object-contain max-w-full h-auto"
        />
      </div>

      {/* <div className="text-center text-secondary">
        <h3 className="font-serif text-lg">{artist.name}</h3>
        <p className="text-[11px] uppercase tracking-[0.15em] text-secondary/80">
          {artist.role}
        </p>
      </div> */}
    </article>
  );
}
