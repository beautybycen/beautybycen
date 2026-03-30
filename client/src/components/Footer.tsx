/**
 * Footer — Beauty By Cen
 * Design: Soft Organic Luxury — Deep walnut background
 */
import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.04_50)] text-[oklch(0.92_0.018_75)]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/logo_64373521.webp"
              alt="Beauty By Cen"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert opacity-90"
            />
            <p className="font-body text-sm leading-relaxed text-[oklch(0.75_0.025_75)] max-w-xs mt-4">
              Professionele huidspecialist in Zaandam. Gespecialiseerd in innovatieve gezichtsbehandelingen voor alle huidtypes, met extra expertise in donkere huid.
            </p>
            <p className="font-display italic text-lg text-[oklch(0.78_0.06_15)] mt-4">
              "Diep in de huid, helder in uw schoonheid"
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[oklch(0.45_0.04_50)] flex items-center justify-center text-[oklch(0.75_0.025_75)] hover:border-[oklch(0.62_0.09_50)] hover:text-[oklch(0.62_0.09_50)] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[oklch(0.45_0.04_50)] flex items-center justify-center text-[oklch(0.75_0.025_75)] hover:border-[oklch(0.62_0.09_50)] hover:text-[oklch(0.62_0.09_50)] transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-base font-500 text-[oklch(0.92_0.018_75)] mb-5 tracking-wide">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/behandelingen", label: "Behandelingen" },
                { href: "/huidproblemen", label: "Huidproblemen" },
                { href: "/over-mij", label: "Over mij" },
                { href: "/prijzenlijst", label: "Prijzenlijst" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="font-body text-sm text-[oklch(0.65_0.025_75)] hover:text-[oklch(0.78_0.06_15)] transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-500 text-[oklch(0.92_0.018_75)] mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.62_0.09_50)] mt-0.5 shrink-0" />
                <span className="font-body text-sm text-[oklch(0.65_0.025_75)] leading-relaxed">
                  Vlielandstraat 2, unit 243<br />
                  1506ZK Zaandam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[oklch(0.62_0.09_50)] shrink-0" />
                <a
                  href="tel:0644439982"
                  className="font-body text-sm text-[oklch(0.65_0.025_75)] hover:text-[oklch(0.78_0.06_15)] transition-colors"
                >
                  06 4443 9982
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[oklch(0.62_0.09_50)] shrink-0" />
                <a
                  href="mailto:beauty.by.cen@gmail.com"
                  className="font-body text-sm text-[oklch(0.65_0.025_75)] hover:text-[oklch(0.78_0.06_15)] transition-colors"
                >
                  beauty.by.cen@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.30_0.04_50)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[oklch(0.52_0.025_75)]">
            © {new Date().getFullYear()} Beauty By Cen. Alle rechten voorbehouden.
          </p>
          <p className="font-body text-xs text-[oklch(0.45_0.025_75)]">
            BTW-ID: NL005195754B47
          </p>
        </div>
      </div>
    </footer>
  );
}
