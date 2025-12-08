"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function HomePopupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const closeModal = () => setOpen(false);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 backdrop-blur-sm
        px-4
      "
      onClick={closeModal}
    >
      {/* MODAL WRAPPER */}
      <div
        className="
          relative w-full
          max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl
          bg-black rounded-lg overflow-hidden shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="
            absolute right-3 top-3 z-20
            flex h-8 w-8 items-center justify-center
            rounded-full bg-black/70 text-white
            hover:bg-black transition
          "
        >
          <X size={18} />
        </button>

        {/* ✅ IMAGE WITH RESPONSIVE HEIGHT */}
        <div
          className="
            relative w-full
            h-[98vh] sm:h-[98vh] md:h-[98vh] lg:h-[98vh] xl:h-[98vh]
          "
        >
          <Image
            src="/hero.png"    // change if needed
            alt="Home popup"
            fill
            priority
            className=""
          />
        </div>
      </div>
    </div>
  );
}
