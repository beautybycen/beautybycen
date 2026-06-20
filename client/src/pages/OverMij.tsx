/**
 * Over Mij Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, Award, Heart, Scan } from "lucide-react";

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

export default function OverMij() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy-products-portrait_1752ead5.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-3">
            Leer mij kennen
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-300 text-white leading-[1.1]">
            Over mij
          </h1>
        </div>
      </section>

      {/* Main about section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <FadeUp>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy-products-portrait_1752ead5.jpg"
                    alt="Cindy Nimmermeer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeUp>

            {/* Content */}
            <div className="space-y-10">
              <FadeUp delay={100}>
                <div className="inline-flex items-center space-x-2 text-[oklch(0.55_0.04_50)] font-body text-sm uppercase tracking-widest mb-2">
                  <Award size={16} />
                  <span>Gecertificeerd Huidspecialist</span>
                </div>
                <h2 className="font-display text-4xl text-[oklch(0.22_0.04_50)] leading-tight mb-6">
                  Mijn passie voor huidverbetering
                </h2>
                <div className="space-y-6 font-body text-lg text-[oklch(0.45_0.03_50)] leading-relaxed">
                  <p>
                    Welkom bij Beauty By Cen. Mijn naam is Cindy Nimmermeer en ik ben de drijvende kracht achter deze salon. Mijn reis in de wereld van uiterlijke verzorging begon vanuit een diepe passie voor het helpen van mensen om zich zelfverzekerd te voelen in hun eigen huid.
                  </p>
                  <p>
                    Door de jaren heen heb ik mij gespecialiseerd in geavanceerde huidverbeteringstechnieken. Ik geloof niet in 'one size fits all' oplossingen, maar in een persoonlijke aanpak die gebaseerd is op wetenschap en precisie.
                  </p>
                  <p>
                    Donkere huid heeft unieke kenmerken en vereist specifieke Kennis en producten.
                  </p>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <FadeUp delay={200}>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[oklch(0.55_0.04_50)] shadow-sm">
                      <Scan size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[oklch(0.22_0.04_50)] mb-2">Huidanalyse</h3>
                      <p className="font-body text-sm text-[oklch(0.45_0.03_50)]">
                        Elke behandeling begint met een diepgaande analyse met de Observ 520x.
                      </p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={300}>
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[oklch(0.55_0.04_50)] shadow-sm">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[oklch(0.22_0.04_50)] mb-2">Zorg & Aandacht</h3>
                      <p className="font-body text-sm text-[oklch(0.45_0.03_50)]">
                        Ik neem de tijd voor u en uw huid, in een ontspannen en luxe omgeving.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl text-[oklch(0.22_0.04_50)] mb-8">
              "Uw huid is uw kostbaarste bezit. Ik help u graag om deze te laten stralen."
            </h2>
            <div className="w-20 h-px bg-[oklch(0.78_0.06_15)] mx-auto mb-8"></div>
            <p className="font-body text-lg text-[oklch(0.45_0.03_50)] italic">
              — Cindy Nimmermeer
            </p>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
