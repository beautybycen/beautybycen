/**
 * Technologie Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
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

const devices = [
  {
    number: "01",
    name: "Observ 520x — Huidscan",
    tagline: "Zie wat het blote oog niet ziet",
    description:
      "De Observ 520x is een geavanceerde huidanalysescanner die met behulp van verschillende lichtsoorten een gedetailleerd beeld geeft van uw huid. De scanner brengt onzuiverheden, pigmentvlekken, poriën, vochtgehalte en huidveroudering in kaart — ook diep onder het huidoppervlak. Op basis van deze analyse stel ik een behandelplan op dat precies aansluit bij uw huidbehoeften. Zo werken we niet op gevoel, maar met wetenschappelijke onderbouwing.",
    benefits: ["Nauwkeurige huidanalyse", "Zichtbaar resultaat meten", "Persoonlijk behandelplan", "Geschikt voor alle huidtypes"],
    color: "oklch(0.62_0.09_50)",
  },
  {
    number: "02",
    name: "Skin Active — Microneedling zonder naalden",
    tagline: "Huidvernieuwing zonder pijn",
    description:
      "De Skin Active behandeling is een innovatieve techniek die de voordelen van microneedling biedt, maar dan volledig zonder naalden. Via elektroporatie worden actieve werkzame stoffen diep in de huid gebracht, waardoor de huid van binnenuit wordt gevoed en vernieuwd. De behandeling stimuleert de aanmaak van collageen en elastine, verbetert de huidtextuur en geeft een zichtbaar stralend resultaat. Ideaal voor wie wil investeren in hun huid zonder ongemak.",
    benefits: ["Geen naalden, geen pijn", "Diepe toediening van serums", "Stimuleert collageenproductie", "Verbetert huidtextuur en uitstraling"],
    color: "oklch(0.72_0.05_145)",
  },
  {
    number: "03",
    name: "Coldplasma",
    tagline: "Krachtige technologie voor een gezonde huid",
    description:
      "Coldplasma is een geavanceerde behandeltechnologie die gebruik maakt van geïoniseerde lucht op lage temperatuur. Het plasma heeft een krachtige, herstellende werking op de huid: de huid wordt zichtbaar verfrist, egaler van toon en straalt meer vitaliteit uit. Coldplasma is bijzonder geschikt bij een onzuivere, gevoelige of verouderde huid. De behandeling is pijnloos, niet-invasief en geschikt voor vrijwel alle huidtypes.",
    benefits: ["Verfrist en egaliseert de huid", "Zichtbaar stralender resultaat", "Geschikt bij onzuivere of gevoelige huid", "Pijnloos en niet-invasief"],
    color: "oklch(0.78_0.06_15)",
  },
  {
    number: "04",
    name: "Hydrodermabrasie",
    tagline: "Diepe reiniging met zichtbaar resultaat",
    description:
      "Hydrodermabrasie combineert twee krachtige technieken: mechanische exfoliatie en hydratatie tegelijkertijd. Met behulp van water en zuigkracht worden dode huidcellen, talg en onzuiverheden grondig verwijderd, terwijl de huid tegelijkertijd wordt gevoed met voedende serums. Het resultaat is een direct zichtbaar gladdere, schonere en stralende huid. De behandeling is geschikt voor vrijwel alle huidtypes en heeft geen hersteltijd.",
    benefits: ["Diepe reiniging van poriën", "Gelijktijdige hydratatie", "Direct zichtbaar resultaat", "Geen hersteltijd nodig"],
    color: "oklch(0.62_0.09_50)",
  },
];

export default function Technologie() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/skin_closeup-f6UtsUNoHL5wtDLPbX4W3a.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-3">
            Geavanceerde Apparatuur
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-300 text-white leading-[1.1]">
            Technologie
          </h1>
          <p className="font-body text-base text-white/65 mt-4 max-w-lg">
            Bij Beauty by Cen werken wij met de nieuwste professionele apparatuur voor optimale resultaten.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="max-w-3xl">
            <p className="font-body text-lg text-[oklch(0.40_0.04_50)] leading-relaxed">
              Goede huidverzorging begint met de juiste kennis én de juiste middelen. Wij investeren continu in de nieuwste technologie, zodat u kunt profiteren van behandelingen die écht resultaat geven — veilig, effectief en afgestemd op uw huid.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Devices */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-12">
            {devices.map((device, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="bg-white rounded-3xl shadow-sm border border-[oklch(0.92_0.018_75)] overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-6">
                      {/* Number */}
                      <span
                        className="font-display text-5xl font-300 leading-none shrink-0 mt-1"
                        style={{ color: `${device.color}`, opacity: 0.35 }}
                      >
                        {device.number}
                      </span>
                      {/* Content */}
                      <div className="flex-1">
                        <p className="font-body text-xs tracking-[0.18em] uppercase mb-2" style={{ color: device.color }}>
                          {device.tagline}
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl font-400 text-[oklch(0.22_0.04_50)] mb-4 leading-tight">
                          {device.name}
                        </h2>
                        <p className="font-body text-base text-[oklch(0.45_0.04_50)] leading-relaxed mb-6">
                          {device.description}
                        </p>
                        {/* Benefits */}
                        <div className="flex flex-wrap gap-2">
                          {device.benefits.map((benefit, j) => (
                            <span
                              key={j}
                              className="font-body text-xs px-3 py-1.5 rounded-full bg-[oklch(0.94_0.018_75)] text-[oklch(0.40_0.04_50)]"
                            >
                              ✓ {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA */}
          <FadeUp delay={200} className="mt-16 text-center">
            <div className="bg-[oklch(0.22_0.04_50)] rounded-3xl p-12">
              <h2 className="font-display text-3xl md:text-4xl font-300 text-white mb-4">
                Benieuwd welke behandeling bij u past?
              </h2>
              <p className="font-body text-base text-white/65 mb-8 max-w-md mx-auto">
                Boek een consult en ik adviseer u persoonlijk over de beste aanpak voor uw huid.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300"
                >
                  Boek Nu <ChevronRight size={16} />
                </a>
                <Link href="/behandelingen">
                  <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-500 text-sm tracking-wide border-2 border-white/40 text-white hover:border-white transition-all duration-300">
                    Bekijk behandelingen
                  </span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
