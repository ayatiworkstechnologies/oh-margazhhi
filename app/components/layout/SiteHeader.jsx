"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Oh Margazhhi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Event" },
  { href: "#artists", label: "Artists" },
];

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [isOpen, setIsOpen] = useState(false);

  // --- Scroll Spy Logic ---
  useEffect(() => {
    const handleScroll = () => {
      let current = "#hero";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = item.href;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu when clicking nav
  const handleNavClick = () => setIsOpen(false);

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
                transition hover:text-secondary
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

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </Container>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden transition-all duration-300">
          <Container>
            <nav className="flex flex-col items-center text-center gap-4 py-4 text-[11px] uppercase tracking-[0.16em]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`
                    py-1 transition
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
        </div>
      )}
    </header>
  );
}
