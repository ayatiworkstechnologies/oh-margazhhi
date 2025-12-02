"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Oh Margazhhi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Event" },
  { href: "#artists", label: "Artists" },
];

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("#hero");

  // --- Scroll Spy Logic ---
  useEffect(() => {
    const handleScroll = () => {
      let current = "#hero";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop - 120; // header height offset
          if (window.scrollY >= top) {
            current = item.href;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex items-center justify-between py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={50} height={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-[11px] uppercase tracking-[0.16em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                transition
                hover:text-secondary
                ${
                  activeSection === item.href
                    ? "text-secondary font-medium"
                    : "text-primary"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </Container>
    </header>
  );
}
