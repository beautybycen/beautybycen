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
    category: "Acne behandeling",
    items: [
      { name: "Acne behandeling", duration: "", price: "€150" },
      { name: "* Studenten korting", duration: "", price: "€100" },
    ],
  },
  {
    category: "Hydrodermabrasie",
    items: [
      { name: "Silver", duration: "", price: "€120" },
      { name: "Gold", duration: "", price: "€133" },
      { name: "Platinum", duration: "", price: "€145" },
    ],
  },
  {
    category: "Skin active",
    items: [
      { name: "60 min", duration: "", price: "€99,95" },
      { name: "75 min", duration: "", price: "€125" },
      { name: "90 min met masker", duration: "", price: "€145" },
      { name: "90 min met masker + serums", duration: "", price: "€165" },
    ],
  },
  {
    category: "Coldplasma",
    items: [
      { name: "Kaaklijn", duration: "", price: "€125" },
      { name: "Full Face", duration: "", price: "€150" },
    ],
  },
  {
    category: "Pakketten",
    items: [
      { 
        name: "Starterspack (3 behandelingen + 1 gratis)", 
        duration: "4x 60 min", 
        price: "€250" 
      },
      { 
        name: "Intensief Pakket (5 behandelingen + 1 gratis)", 
        duration: "6x 75 min", 
        price: "€495" 
      },
      { 
        name: "Jaarlijks Onderhoud (10 behandelingen + 2 gratis)", 
        duration: "12x 60 min", 
        price: "€950" 
      },
    ],
  },
];

export default function Prijzenlijst() {
  return (
    <div className="min-h-screen bg-[#FDFBF9]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#3D2B1F]/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp className="text-center max-w-3xl mx-auto">
            <span className="text-[#8C7355] font-medium tracking-widest uppercase text-sm mb-4 block">
              Transparante Prijzen
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3D2B1F] mb-6">
              Prijzenlijst
            </h1>
            <p className="text-lg text-[#5C4D3E] font-light leading-relaxed">
              Duidelijke, eerlijke prijzen voor alle behandelingen. Geen verborgen kosten.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeUp delay={200} className="mb-12 bg-[#8C7355]/10 p-6 rounded-2xl border border-[#8C7355]/20">
              <p className="text-[#5C4D3E] text-sm italic leading-relaxed">
                <strong>Let op:</strong> Bovenstaande prijzen zijn indicatief. De definitieve prijs wordt bepaald na een persoonlijk consult, waarbij uw huidtype en behandelwensen worden besproken. Neem contact op voor een exacte prijsopgave.
              </p>
            </FadeUp>

            <div className="space-y-16">
              {priceCategories.map((category, catIdx) => (
                <FadeUp key={catIdx} delay={catIdx * 100}>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-serif text-[#3D2B1F] whitespace-nowrap">
                      {category.category}
                    </h2>
                    <div className="h-px bg-[#8C7355]/20 w-full" />
                  </div>
                  
                  <div className="bg-white rounded-3xl shadow-sm border border-[#3D2B1F]/5 overflow-hidden">
                    {category.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className={`p-6 flex flex-wrap items-center justify-between gap-4 ${
                          itemIdx !== category.items.length - 1 ? 'border-b border-[#3D2B1F]/5' : ''
                        }`}
                      >
                        <div className="flex-1">
                          <h3 className="text-[#3D2B1F] font-medium mb-1">
                            {item.name}
                          </h3>
                          {item.duration && (
                            <p className="text-[#8C7355] text-sm font-light uppercase tracking-wider">
                              {item.duration}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-[#3D2B1F] font-serif text-lg">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* CTA Section */}
            <FadeUp delay={600} className="mt-20 text-center bg-[#3D2B1F] rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-serif mb-6">
                  Klaar om te beginnen?
                </h2>
                <p className="text-white/80 font-light mb-10 max-w-xl mx-auto leading-relaxed text-lg">
                  Boek uw behandeling online of neem contact op voor een persoonlijk huidadvies.
                </p>
                <a 
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FDFBF9] text-[#3D2B1F] px-8 py-4 rounded-full hover:bg-[#8C7355] hover:text-white transition-all duration-500 font-medium group shadow-xl"
                >
                  Boek Nu
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
