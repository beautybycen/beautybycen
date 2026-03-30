/**
 * Navigation — Beauty By Cen
 * Design: Soft Organic Luxury
 * Transparent on hero, transitions to warm cream on scroll
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/huidproblemen", label: "Huidproblemen" },
  { href: "/behandelingen", label: "Behandelingen" },
  { href: "/technologie", label: "Technologie" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/prijzenlijst", label: "Prijzenlijst" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[oklch(0.97_0.015_75)] shadow-sm border-b border-[oklch(0.88_0.02_75)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/logo_64373521.webp"
                alt="Beauty By Cen"
                className="h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`font-body text-sm font-500 tracking-wide transition-colors duration-200 ${
                    location === link.href
                      ? "text-[oklch(0.62_0.09_50)]"
                      : scrolled || !isHome
                      ? "text-[oklch(0.35_0.04_50)] hover:text-[oklch(0.62_0.09_50)]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-600 font-body tracking-wide transition-all duration-300 bg-[oklch(0.62_0.09_50)] text-[oklch(0.99_0.008_75)] hover:bg-[oklch(0.55_0.09_50)] hover:shadow-md"
            >
              Boek Nu
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? "text-[oklch(0.22_0.04_50)]"
                : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.97_0.015_75)] border-t border-[oklch(0.88_0.02_75)] shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`block px-6 py-3 font-body text-sm font-500 tracking-wide transition-colors ${
                    location === link.href
                      ? "text-[oklch(0.62_0.09_50)] bg-[oklch(0.92_0.022_75)]"
                      : "text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.92_0.022_75)]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="px-6 pt-3 pb-2">
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-full text-sm font-600 font-body tracking-wide bg-[oklch(0.62_0.09_50)] text-[oklch(0.99_0.008_75)]"
              >
                Boek Nu
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
