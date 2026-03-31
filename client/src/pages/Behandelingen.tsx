/**
 * Behandelingen Page — Beauty By Cen
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

const treatments = [
  {
    category: "Normal/Basis behandelingen",
    items: [
      { name: "Normal/Basis behandelingen", desc: "Grondige reiniging, peeling en hydratatie voor een stralende huid.", duration: "60 min" },
      { name: "Diepe Reiniging", desc: "Intensieve behandeling voor verstopte poriën en onzuiverheden.", duration: "75 min" },
      { name: "Anti-Aging Behandeling", desc: "Verjongende behandeling met focus op fijne lijntjes en verlies van stevigheid.", duration: "90 min" },
      { name: "Hydraterende Behandeling", desc: "Intensieve vochtinbreng voor een droge of gedehydrateerde huid.", duration: "60 min" },
      { name: "Jelly Mask", desc: "Op behoeften van wat de huid nodig heeft. Een verzorgende jelly mask afgestemd op uw persoonlijke huidtype en huidconditie.", duration: "60 min" },
      { name: "Peel-off Mask", desc: "Op behoeften van wat de huid nodig heeft. Een reinigende peel-off mask afgestemd op uw persoonlijke huidtype en huidconditie.", duration: "60 min" },
    ],
  },
  {
    category: "Huidproblemen",
    items: [
      { name: "Acne Behandeling", desc: "Gerichte behandeling voor acne-gevoelige huid met ontstekingsremmende producten.", duration: "75 min" },
      { name: "Pigmentatie Behandeling", desc: "Behandeling voor het verminderen van donkere vlekken en ongelijkmatige teint.", duration: "90 min" },
      { name: "Rosacea Behandeling", desc: "Kalmerende behandeling voor gevoelige huid met roodheid.", duration: "60 min" },
    ],
  },
  {
    category: "Geavanceerde Technologie",
    items: [
      { name: "Observ 520x Huidscan", desc: "Geavanceerde analyse van uw huid met de nieuwste scantechnologie.", duration: "30 min" },
      { name: "Skin activ/Microneedling zonder naalden", desc: "Stimuleert de huidvernieuwing en collageen productie.", duration: "90 min" },
      { name: "Coldplasma-behandeling", desc: "Behandeling stimuleert huidvernieuwing op cellulair niveau. Het vermindert bacteriën, ontstekingen en versnelt het herstelproces.", duration: "30 min" },
    ],
  },
  {
    category: "Donkere Huid Specialist",
    items: [
      { name: "Behandeling Donkere Huid", desc: "Gespecialiseerde behandeling afgestemd op de unieke behoeften van donkere huid.", duration: "75 min" },
      { name: "Hyperpigmentatie Behandeling", desc: "Gerichte behandeling voor het egaliseren van de huidtint.", duration: "90 min" },
    ],
  },
];

export default function Behandelingen() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/treatment_hands-D7K7cGQsDKef5aZcRBFayX.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-3">
            Ons Aanbod
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-300 text-white leading-[1.1]">
            Behandelingen
          </h1>
          <p className="font-body text-base text-white/65 mt-4 max-w-lg">
            Professionele huidbehandelingen afgestemd op uw unieke huidtype en behoeften.
          </p>
        </div>
      </section>

      {/* Treatments list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-16">
            {treatments.map((category, ci) => (
              <FadeUp key={ci} delay={ci * 100}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-display text-3xl font-400 text-[oklch(0.22_0.04_50)]">
                      {category.category}
                    </h2>
                    <div className="flex-1 hairline" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.items.map((item, ii) => (
                      <div
                        key={ii}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-[oklch(0.92_0.018_75)] hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-display text-xl font-500 text-[oklch(0.22_0.04_50)] leading-tight pr-4">
                            {item.name}
                          </h3>
                          <span className="font-body text-xs text-[oklch(0.62_0.09_50)] bg-[oklch(0.92_0.022_75)] px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                            {item.duration}
                          </span>
                        </div>
                        <p className="font-body text-sm text-[oklch(0.52_0.04_50)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Technologie sectie */}
          <FadeUp delay={150} className="mt-20">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-3xl font-400 text-[oklch(0.22_0.04_50)]">
                  Technologie
                </h2>
                <div className="flex-1 hairline" />
              </div>
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    name: "Observ 520x — Huidscan",
                    tagline: "Zie wat het blote oog niet ziet",
                    desc: "De Observ 520x is een geavanceerde huidanalysescanner die met behulp van verschillende lichtsoorten een gedetailleerd beeld geeft van uw huid. De scanner brengt onzuiverheden, pigmentvlekken, poriën, vochtgehalte en huidveroudering in kaart — ook diep onder het huidoppervlak. Op basis van deze analyse stel ik een behandelplan op dat precies aansluit bij uw huidbehoeften.",
                    benefits: ["Nauwkeurige huidanalyse", "Zichtbaar resultaat meten", "Persoonlijk behandelplan", "Geschikt voor alle huidtypes"],
                  },
                  {
                    number: "02",
                    name: "Skin Active — Microneedling zonder naalden",
                    tagline: "Huidvernieuwing zonder pijn",
                    desc: "De Skin Active behandeling is een innovatieve techniek die de voordelen van microneedling biedt, maar dan volledig zonder naalden. Via elektroporatie worden actieve werkzame stoffen diep in de huid gebracht, waardoor de huid van binnenuit wordt gevoed en vernieuwd. De behandeling stimuleert de aanmaak van collageen en elastine en geeft een zichtbaar stralend resultaat.",
                    benefits: ["Geen naalden, geen pijn", "Diepe toediening van serums", "Stimuleert collageenproductie", "Verbetert huidtextuur en uitstraling"],
                  },
                  {
                    number: "03",
                    name: "Coldplasma",
                    tagline: "Krachtige technologie voor een gezonde huid",
                    desc: "Coldplasma is een geavanceerde behandeltechnologie die gebruik maakt van geïoniseerde lucht op lage temperatuur. Het plasma doodt bacteriën, vermindert ontstekingen en versnelt het natuurlijke herstelproces van de huid. Bijzonder effectief bij acne, roodheid en huidveroudering. Pijnloos en niet-invasief.",
                    benefits: ["Vermindert bacteriën en ontstekingen", "Versnelt huidherstel", "Effectief bij acne en roodheid", "Pijnloos en niet-invasief"],
                  },
                  {
                    number: "04",
                    name: "Hydrodermabrasie",
                    tagline: "Diepe reiniging met zichtbaar resultaat",
                    desc: "Hydrodermabrasie combineert mechanische exfoliatie en hydratatie tegelijkertijd. Met behulp van water en zuigkracht worden dode huidcellen, talg en onzuiverheden grondig verwijderd, terwijl de huid tegelijkertijd wordt gevoed met voedende serums. Direct zichtbaar gladdere, schonere en stralende huid — zonder hersteltijd.",
                    benefits: ["Diepe reiniging van poriën", "Gelijktijdige hydratatie", "Direct zichtbaar resultaat", "Geen hersteltijd nodig"],
                  },
                ].map((device, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[oklch(0.92_0.018_75)]">
                    <div className="flex items-start gap-5">
                      <span className="font-display text-4xl font-300 leading-none shrink-0 mt-1 text-[oklch(0.62_0.09_50)] opacity-30">
                        {device.number}
                      </span>
                      <div className="flex-1">
                        <p className="font-body text-xs tracking-[0.18em] uppercase text-[oklch(0.62_0.09_50)] mb-1">
                          {device.tagline}
                        </p>
                        <h3 className="font-display text-xl md:text-2xl font-400 text-[oklch(0.22_0.04_50)] mb-3">
                          {device.name}
                        </h3>
                        <p className="font-body text-sm text-[oklch(0.45_0.04_50)] leading-relaxed mb-4">
                          {device.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {device.benefits.map((b, j) => (
                            <span key={j} className="font-body text-xs px-3 py-1.5 rounded-full bg-[oklch(0.94_0.018_75)] text-[oklch(0.40_0.04_50)]">
                              ✓ {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={200} className="mt-20 text-center">
            <div className="bg-[oklch(0.22_0.04_50)] rounded-3xl p-12">
              <h2 className="font-display text-3xl md:text-4xl font-300 text-white mb-4">
                Klaar voor uw behandeling?
              </h2>
              <p className="font-body text-base text-white/65 mb-8 max-w-md mx-auto">
                Boek nu uw afspraak of neem contact op voor een persoonlijk advies.
              </p>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300"
              >
                Boek Nu <ChevronRight size={16} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
