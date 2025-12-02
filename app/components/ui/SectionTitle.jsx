import Image from "next/image";

export default function SectionTitle({
  eyebrow,
  title,
  align = "center",
  color = "text-primary",
  bottomDecoration,       // NEW PROP
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-marg-accent">
          {eyebrow}
        </p>
      )}

      {/* Title */}
      <h2 className={`font-serif text-3xl sm:text-4xl ${color}`}>
        {title}
      </h2>

      {/* Optional bottom decorative center image */}
      {bottomDecoration && (
        <div className="flex justify-center">
          <Image 
            src={bottomDecoration} 
            alt="decoration" 
            width={260} 
            height={40}
            className="opacity-90"
          />
        </div>
      )}
    </div>
  );
}
