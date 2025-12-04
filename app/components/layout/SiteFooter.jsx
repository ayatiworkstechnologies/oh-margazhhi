import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-secondary">
      <Container>
        <div
          className="
          flex flex-col items-center justify-center gap-2 font-sans font-light text-center 
          sm:flex-row sm:gap-3 sm:justify-center
        "
        >
          {/* Left side */}
          <p className="whitespace-nowrap text-sm sm:text-base">
            © 2025 <span className="font-secondary">OhMaRgazhi</span>
          </p>

          {/* Divider */}
          <span className="hidden sm:inline-block text-secondary">|</span>

          {/* Right side — clickable Ayatiworks */}

          <span>
            All rights reserved • Designed & Developed by{" "}
            <span className="font-semibold">Ayatiworks</span>
          </span>
          <Link
            href="https://ayatiworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 whitespace-nowrap text-sm sm:text-base hover:text-white transition"
          >
            <Image
              src="/web_logo.png"
              alt="Ayatiworks Logo"
              width={80}
              height={20}
              className="opacity-90 mt-1 sm:mt-0"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
