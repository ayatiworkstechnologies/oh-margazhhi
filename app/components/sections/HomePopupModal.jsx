"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function HomePopupModal() {
  const [open, setOpen] = useState(false);

  // Open popup on first load
  useEffect(() => {
    setOpen(true);
  }, []);

  const closeModal = () => setOpen(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={closeModal} // click outside to close
    >
      {/* Modal content wrapper */}
      <div
        className="relative max-w-lg w-full bg-white rounded-lg overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()} // prevent close on inner click
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition"
        >
          <X size={18} />
        </button>

        {/* IMAGE */}
        <div className="relative w-full h-full">
          <Image
            src="/hero.png"   // 🔁 change to your image path
            alt="Home popup"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
