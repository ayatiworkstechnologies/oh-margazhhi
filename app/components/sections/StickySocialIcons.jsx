"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

export default function StickySocialIcons() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="
        fixed right-3 top-1/2 -translate-y-1/2 z-50
        flex flex-col items-center gap-3
        bg-white/80 backdrop-blur-md
        border border-border rounded-full
        px-2 py-3 shadow-lg
      "
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close social icons"
        className="
          flex items-center justify-center
          text-gray-600 hover:text-black
          transition-transform hover:scale-110
        "
      >
        <X size={16} strokeWidth={1.6} />
      </button>

      {/* INSTAGRAM */}
      <Link
        href="https://www.instagram.com/ohmargazhi"
        target="_blank"
        aria-label="Instagram"
        className="text-[#E1306C] hover:scale-110 transition-transform"
      >
        <FaInstagram size={20} />
      </Link>

      {/* FACEBOOK */}
      <Link
        href="https://www.facebook.com/OhMaRgazhi"
        target="_blank"
        aria-label="Facebook"
        className="text-[#1877F2] hover:scale-110 transition-transform"
      >
        <FaFacebookF size={20} />
      </Link>

      {/* X (Twitter) */}
      <Link
        href="https://x.com/OhMaRgazhi"
        target="_blank"
        aria-label="X"
        className="text-black hover:scale-110 transition-transform"
      >
        <FaXTwitter size={20} />
      </Link>

      {/* YOUTUBE */}
      <Link
        href="https://www.youtube.com/@OhMaRgazhi"
        target="_blank"
        aria-label="YouTube"
        className="text-[#FF0000] hover:scale-110 transition-transform"
      >
        <FaYoutube size={20} />
      </Link>

      {/* WHATSAPP */}
      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        aria-label="WhatsApp"
        className="text-[#25D366] hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={20} />
      </Link>

      {/* THREADS */}
      <Link
        href="https://www.threads.net/@ohmargazhi"
        target="_blank"
        aria-label="Threads"
        className="text-black hover:scale-110 transition-transform"
      >
        <SiThreads size={20} />
      </Link>
    </div>
  );
}
