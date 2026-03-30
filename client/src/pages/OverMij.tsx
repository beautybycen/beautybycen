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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy_portrait_5f3ed40b.jpg"
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
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy-portrait-cropped_ea26ed55.jpg"
                    alt="Cindy Nimmermeer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeUp>

            {/* Text */}
            <FadeUp delay={150}>
              <div className="sticky top-28">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.62_0.09_50)] mb-3">
                  Cindy Nimmermeer
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-300 text-[oklch(0.22_0.04_50)] leading-[1.15] mb-6">
                  Eigenares &{" "}
                  <em className="italic text-[oklch(0.62_0.09_50)]">Huidspecialist</em>
                </h2>
                <div className="space-y-4 font-body text-base text-[oklch(0.45_0.04_50)] leading-relaxed">
                  <p>
                    Mijn naam is Cindy Nimmermeer en ik ben de eigenares en huidspecialist achter Beauty by Cen. Mijn passie voor huidverzorging begon al op jonge leeftijd, toen ik zelf worstelde met huidproblemen en de kracht van de juiste behandeling ontdekte.
                  </p>
                  <p>
                    Ik heb mij gespecialiseerd in innovatieve gezichtsbehandelingen en werk met de nieuwste technologie, waaronder de geavanceerde Observ 520x huidscan. Hiermee kan ik een nauwkeurige analyse maken van uw huid en een behandelplan op maat samenstellen.
                  </p>
                  <p>
                    Een bijzondere expertise die ik heb opgebouwd is de behandeling van donkere huidtypes. Donkere huid heeft unieke kenmerken en vereist specifieke kennis en producten — kennis die ik met trots inzet voor mijn klanten.
                  </p>
                  <p>
                    Bij Beauty by Cen staat u centraal. Ik neem de tijd om uw huid te begrijpen, uw wensen te horen en een behandeling te bieden die echt resultaat geeft. Want een gezonde, stralende huid is het mooiste dat u kunt dragen.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://beautybycen.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300"
                  >
                    Boek een afspraak <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[oklch(0.94_0.018_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-300 text-[oklch(0.22_0.04_50)]">
              Mijn waarden
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Professionaliteit",
                desc: "Gecertificeerd en voortdurend bijgeschoold in de nieuwste huidverzorgingstechnieken.",
              },
              {
                icon: Heart,
                title: "Persoonlijke aandacht",
                desc: "Elke klant is uniek. Ik neem de tijd om uw huid en wensen echt te begrijpen.",
              },
              {
                icon: Scan,
                title: "Geavanceerde technologie",
                desc: "Met de Observ 520x scanner bied ik een wetenschappelijke basis voor elk behandelplan.",
              },
            ].map((value, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-[oklch(0.92_0.018_75)] text-center">
                  <div className="w-14 h-14 rounded-full bg-[oklch(0.92_0.022_75)] flex items-center justify-center mx-auto mb-5">
                    <value.icon size={22} className="text-[oklch(0.62_0.09_50)]" />
                  </div>
                  <h3 className="font-display text-xl font-500 text-[oklch(0.22_0.04_50)] mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-[oklch(0.52_0.04_50)] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
