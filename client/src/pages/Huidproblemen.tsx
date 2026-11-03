/**
 * Huidproblemen Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "wouter";

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

const skinProblems = [
  {
    title: "Acne & Onzuiverheden",
    description: "Acne is een van de meest voorkomende huidproblemen. Wij bieden effectieve behandelingen die de huid reinigen, kalmeren en de huidconditie zichtbaar verbeteren.",
    symptoms: ["Mee-eters", "Puistjes", "Milia (gerstekorrels)", "Cysten", "Littekens"],
    color: "oklch(0.78_0.06_15)",
  },
  {
    title: "Pigmentatie",
    description: "Donkere vlekken en ongelijkmatige teint kunnen het zelfvertrouwen beïnvloeden. Onze gespecialiseerde behandelingen helpen de huidtint te egaliseren.",
    symptoms: ["Zonnevlekken", "Melasma", "Post-inflammatoire hyperpigmentatie", "Ouderdomsvlekken"],
    color: "oklch(0.62_0.09_50)",
  },
  {
    title: "Droge & Gedehydrateerde Huid",
    description: "Een droge huid heeft intensieve voeding nodig. Wij gebruiken rijke, voedende producten om de huidbarrière te herstellen en vocht vast te houden.",
    symptoms: ["Schilfering", "Strakke huid", "Fijne lijntjes", "Doffe teint"],
    color: "oklch(0.72_0.05_145)",
  },
  {
    title: "Gevoelige Huid & Rosacea",
    description: "Een gevoelige huid en rosacea vereisen een zachte, kalmerende aanpak. Onze behandelingen verminderen roodheid en versterken de huidbarrière.",
    symptoms: ["Roodheid", "Branderig gevoel", "Zichtbare bloedvaatjes", "Vlekken"],
    color: "oklch(0.78_0.06_15)",
  },
  {
    title: "Anti-Aging",
    description: "Veroudering is een natuurlijk proces, maar wij kunnen de huid helpen er jonger en stralender uit te zien met gerichte behandelingen.",
    symptoms: ["Fijne lijntjes", "Rimpels", "Verlies van stevigheid", "Doffe huid"],
    color: "oklch(0.62_0.09_50)",
  },
  {
    title: "Donkere Huid Specialisatie",
    description: "De donkere huid heeft unieke behoeften. Als specialist in donkere huidtypes bieden wij veilige en effectieve behandelingen die rekening houden met de specifieke kenmerken.",
    symptoms: ["Hyperpigmentatie", "Keloïdlittekens", "Ongelijkmatige teint", "Droogheid"],
    color: "oklch(0.72_0.05_145)",
  },
];

export default function Huidproblemen() {
  const [acneOpen, setAcneOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/facial-mask-treatment.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-3">
            Uw Huid
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-300 text-white leading-[1.1]">
            Huidproblemen
          </h1>
          <p className="font-body text-base text-white/65 mt-4 max-w-lg">
            Elke huid is uniek. Wij herkennen uw huidprobleem en bieden een persoonlijke oplossing.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="max-w-3xl">
            <p className="font-body text-lg text-[oklch(0.40_0.04_50)] leading-relaxed">
              Huidproblemen kunnen een grote impact hebben op uw zelfvertrouwen en welzijn. Bij Beauty by Cen beginnen wij altijd met een grondige huidanalyse — eventueel met de geavanceerde Observ 520x scanner — om de juiste behandeling te bepalen.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Problems grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {skinProblems.map((problem, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div
                  className={`bg-white rounded-2xl p-7 shadow-sm border border-[oklch(0.92_0.018_75)] hover:shadow-md transition-all duration-300 flex flex-col ${
                    problem.title.startsWith("Acne") && acneOpen ? "ring-2 ring-[oklch(0.62_0.09_50)]/30" : ""
                  }`}
                >
                  <div
                    className="w-2 h-8 rounded-full mb-5"
                    style={{ backgroundColor: `${problem.color}` }}
                  />
                  <h3 className="font-display text-2xl font-500 text-[oklch(0.22_0.04_50)] mb-3 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="font-body text-sm text-[oklch(0.52_0.04_50)] leading-relaxed mb-5">
                    {problem.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {problem.symptoms.map((s, j) => (
                      <span
                        key={j}
                        className="font-body text-xs px-3 py-1 rounded-full bg-[oklch(0.94_0.018_75)] text-[oklch(0.45_0.04_50)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Uitleg button for Acne */}
                  {problem.title.startsWith("Acne") && (
                    <div className="mt-5 pt-4 border-t border-[oklch(0.94_0.015_75)]">
                      <button
                        type="button"
                        onClick={() => setAcneOpen(!acneOpen)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                        aria-expanded={acneOpen}
                      >
                        <Sparkles size={13} className={acneOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                        <span>{acneOpen ? "Uitleg sluiten" : "Uitleg acnebehandeling"}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${acneOpen ? "rotate-180" : ""}`} />
                      </button>

                      {acneOpen && (
                        <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                          <div>
                            <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                              Informatie & Aanpak
                            </span>
                            <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                              Heb je last van acne of pijnlijke ontstekingen?
                            </h4>
                          </div>

                          <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                            Tijdens een acnebehandeling reinigen we de huid grondig om overtollig talg, dode huidcellen en onzuiverheden te verwijderen. Wij werken met milde, maar zeer effectieve producten die ontstekingen verminderen en de huid tot rust brengen.
                          </p>

                          <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                            <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                              De behandeling kan bestaan uit:
                            </p>
                            <ul className="space-y-1.5 font-body text-xs text-[oklch(0.45_0.04_50)]">
                              <li className="flex items-start gap-1.5">
                                <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                <span>Dieptereiniging van de poriën</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                <span>Een peeling of lysing</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                <span>Verwijderen van onzuiverheden</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                <span>Kalmerend en herstellend masker</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3.5 border border-[oklch(0.90_0.02_75)] space-y-1">
                            <p className="font-body text-xs font-600 text-[oklch(0.28_0.04_50)]">
                              Inzet van geavanceerde technologie:
                            </p>
                            <p className="font-body text-xs text-[oklch(0.45_0.04_50)] leading-relaxed">
                              Naar behoefte kunnen we <span className="font-600 text-[oklch(0.22_0.04_50)]">Coldplasma</span> inzetten om ontstekingen en bacteriën effectief te laten zakken, of <span className="font-600 text-[oklch(0.22_0.04_50)]">Skin Active</span> voor diep herstel.
                            </p>
                          </div>

                          <div className="pt-2 border-t border-[oklch(0.92_0.015_75)] flex items-start gap-1.5 text-xs font-body text-[oklch(0.50_0.04_50)]">
                            <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                            <span>Persoonlijk advies voor de juiste huidverzorging en meer…</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={200} className="mt-16 text-center">
            <p className="font-body text-base text-[oklch(0.45_0.04_50)] mb-6">
              Herkent u uw huidprobleem? Boek een consult en wij helpen u graag verder.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300"
              >
                Boek een consult <ChevronRight size={16} />
              </a>
              <Link href="/behandelingen">
                <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-500 text-sm tracking-wide border-2 border-[oklch(0.62_0.09_50)] text-[oklch(0.62_0.09_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white transition-all duration-300">
                  Bekijk behandelingen
                </span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
