export default function EventCard({ event }) {
  return (
    <article className="flex h-full flex-col overflow-hidden shadow-sm">
      
      {/* Image */}
      <div className="aspect-4/5 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        
        {/* Category */}
        <div className="mb-2">
          <span className="
            inline-block 
            px-3 py-[3px]
            text-lg
            uppercase tracking-[0.18em]
            bg-primary text-white 
            font-sans
          ">
            {event.cat}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl text-primary ">
          {event.title} by {event.performer} 
        </h3>

        {/* Divider */}
        <div className="mt-2 border-t-[0.25px] border-marg-border/60" />

        {/* Date + Location */}
        <p className="mt-2 font-sans font-light text-xs sm:text-sm uppercase tracking-[0.15em] text-black/80">
          {event.date} &nbsp;|&nbsp; {event.time}
        </p>
      </div>

    </article>
  );
}
