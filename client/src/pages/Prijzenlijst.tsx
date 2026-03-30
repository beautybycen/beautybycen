/**
 * Prijzenlijst Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

const priceCategories = [
  {
    category: "Gezichtsbehandelingen",
    items: [
      { name: "Normal/Basis", duration: "", price: "€50" },
      { name: "* Met mask", duration: "", price: "+ €10" },
      { name: "* Yelly mask", duration: "", price: "+ €12,50" },
      { name: "* Peeloff mask", duration: "", price: "+ €15" },
      { name: "* Met 1 serum naar behoeften v/d huid", duration: "", price: "+ €30" },
      { name: "Een peeling met glow", duration: "", price: "+ €30" },
      { name: "* Met ledigen", duration: "", price: "+ €35" },
    ],
  },
  {
    category: "Huidproblemen",
    items: [
      { name: "Acne Behandeling", duration: "75 min", price: "€80" },
      { name: "Pigmentatie Behandeling", duration: "90 min", price: "€95" },
      { name: "Rosacea Behandeling", duration: "60 min", price: "€70" },
      { name: "Sensitieve Huid Behandeling", duration: "60 min", price: "€70" },
    ],
  },
  {
    category: "Geavanceerde Technologie",
    items: [
      { name: "Observ 520x Huidscan", duration: "30 min", price: "€35" },
      { name: "Huidscan + Consult", duration: "45 min", price: "€50" },
      { name: "Skin activ/Microneedling zonder naalden", duration: "90 min", price: "€120" },
      { name: "Coldplasma-behandeling", duration: "30 min", price: "€40" },
      { name: "Coldplasma + Gezichtsbehandeling", duration: "90 min", price: "€95" },
    ],
  },
  {
    category: "Donkere Huid Specialist",
    items: [
      { name: "Behandeling Donkere Huid", duration: "75 min", price: "€85" },
      { name: "Hyperpigmentatie Behandeling", duration: "90 min", price: "€100" },
      { name: "Donkere Huid Consult", duration: "30 min", price: "€35" },
    ],
  },
  {
    category: "Pakketten",
    items: [
      { name: "Starterspack (3 behandelingen)", duration: "3x 60 min", price: "€175" },
      { name: "Intensief Pakket (5 behandelingen)", duration: "5x 75 min", price: "€370" },
      { name: "Jaarlijks Onderhoud (10 behandelingen)", duration: "10x 60 min", price: "€580" },
    ],
  },
];

export default function Prijzenlijst() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-3">
            Transparante Prijzen
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-300 text-white leading-[1.1]">
            Prijzenlijst
          </h1>
          <p className="font-body text-base text-white/65 mt-4 max-w-lg">
            Duidelijke, eerlijke prijzen voor alle behandelingen. Geen verborgen kosten.
          </p>
        </div>
      </section>

      {/* Note */}
      <section className="py-10 bg-[oklch(0.94_0.018_75)] border-b border-[oklch(0.88_0.02_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-sm text-[oklch(0.45_0.04_50)] leading-relaxed max-w-2xl">
            <strong className="text-[oklch(0.22_0.04_50)]">Let op:</strong> Bovenstaande prijzen zijn indicatief. De definitieve prijs wordt bepaald na een persoonlijk consult, waarbij uw huidtype en behandelwensen worden besproken. Neem contact op voor een exacte prijsopgave.
          </p>
        </div>
      </section>

      {/* Price list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-14">
            {priceCategories.map((category, ci) => (
              <FadeUp key={ci} delay={ci * 80}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-3xl font-400 text-[oklch(0.22_0.04_50)] whitespace-nowrap">
                      {category.category}
                    </h2>
                    <div className="flex-1 hairline" />
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm border border-[oklch(0.92_0.018_75)] overflow-hidden">
                    {category.items.map((item, ii) => (
                      <div
                        key={ii}
                        className={`flex items-center justify-between px-7 py-5 ${
                          ii < category.items.length - 1 ? "border-b border-[oklch(0.94_0.018_75)]" : ""
                        } hover:bg-[oklch(0.97_0.015_75)] transition-colors duration-200`}
                      >
                        <div className="flex-1">
                          <h3 className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)]">
                            {item.name}
                          </h3>
                          <p className="font-body text-xs text-[oklch(0.62_0.04_50)] mt-0.5">
                            {item.duration}
                          </p>
                        </div>
                        <span className="font-display text-xl font-500 text-[oklch(0.62_0.09_50)] ml-8">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={200} className="mt-16 text-center">
            <p className="font-body text-base text-[oklch(0.45_0.04_50)] mb-6">
              Klaar om te beginnen? Boek uw behandeling online of neem contact op.
            </p>
            <a
              href="https://beautybycen.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300"
            >
              Boek Nu <ChevronRight size={16} />
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
