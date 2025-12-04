"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-ohmargazhi", label: "About OhMaRgazhi" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Event" },
  { href: "/artists", label: "Artists" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <Container className="flex items-center justify-between py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-lg  md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
          relative pb-1 transition font-medium font-serif text-black hover:text-primary
          ${isActive ? "text-primary font-serif font-semibold" : ""}
        `}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute left-1/2 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 -translate-x-1/2
            ${isActive ? "w-full" : "group-hover:w-full hover:w-full"}
          `}
                />
              </Link>
            );
          })}
        </nav>


        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </Container>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden transition-all duration-300">
          <Container>
            <nav className="flex flex-col items-center gap-4 py-4 text-xs  tracking-[0.16em] text-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="relative pb-1 transition text-primary hover:text-secondary"
                  >
                    {item.label}

                    {/* Animated underline */}
                    <span
                      className={`absolute left-1/2 bottom-0 h-0.5 w-0 bg-secondary font-serif font-medium transition-all duration-300 -translate-x-1/2
            ${isActive ? " font-serif font-semibold w-full" : "hover:w-full"}
          `}
                    />
                  </Link>
                );
              })}
            </nav>

          </Container>
        </div>
      )}
    </header>
  );
}
