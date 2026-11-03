/**
 * Behandelingen Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Sparkles } from "lucide-react";

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
    category: "Basisbehandelingen",
    items: [
      { name: "Basisbehandeling", desc: "Grondige reiniging, peeling en hydratatie voor een stralende huid.", duration: "60 min" },
      { name: "Diepe Reiniging", desc: "Intensieve behandeling voor verstopte poriën en onzuiverheden.", duration: "75 min" },
      { name: "Anti-Aging Behandeling", desc: "Verjongende behandeling met focus op fijne lijntjes en verlies van stevigheid.", duration: "90 min" },
      { name: "Hydraterende Behandeling", desc: "Intensieve vochtinbreng voor een droge of gedehydrateerde huid.", duration: "60 min" },
      { name: "Jelly Masker", desc: "Afgestemd op de behoeften van uw huid. Een verzorgend jellymasker afgestemd op uw persoonlijke huidtype en huidconditie.", duration: "60 min" },
      { name: "Peel-off Masker", desc: "Afgestemd op de behoeften van uw huid. Een reinigend peel-off masker afgestemd op uw persoonlijke huidtype en huidconditie.", duration: "60 min" },
    ],
  },
  {
    category: "Huidproblemen",
    items: [
      { name: "Acne Behandeling", desc: "Gerichte behandeling voor acnegevoelige huid met kalmerende en zuiverende producten.", duration: "75 min" },
      { name: "Pigmentatie Behandeling", desc: "Behandeling voor het verminderen van donkere vlekken en ongelijkmatige teint.", duration: "90 min" },
      { name: "Rosacea Behandeling", desc: "Kalmerende behandeling voor gevoelige huid met roodheid.", duration: "60 min" },
    ],
  },
  {
    category: "Geavanceerde Technologie",
    items: [
      { name: "Observ 520x Huidscan", desc: "Geavanceerde analyse van uw huid met de nieuwste scantechnologie.", duration: "30 min" },
      { name: "Skin active / microneedling zonder naalden", desc: "Stimuleert de huidvernieuwing en collageenproductie.", duration: "90 min" },
      { name: "Coldplasma-behandeling", desc: "Deze behandeling stimuleert huidvernieuwing op cellulair niveau. De huid wordt zichtbaar verfrist, egaler van toon en straalt meer vitaliteit uit.", duration: "30 min" },
    ],
  },
  {
    category: "Specialist in de donkere huid",
    items: [
      { name: "Behandeling Donkere Huid", desc: "Gespecialiseerde behandeling afgestemd op de unieke behoeften van de donkere huid.", duration: "75 min" },
      { name: "Hyperpigmentatie Behandeling", desc: "Gerichte behandeling voor het egaliseren van de huidtint.", duration: "90 min" },
    ],
  },
];

const jellyMasks = [
  {
    name: "Shining Peach Jelly Mask (Perzik)",
    effect: "Hydratatie en voeding",
    benefits: [
      "Zorgt voor intensieve hydratatie.",
      "Voedt de huid.",
      "Helpt de huid zacht en soepel te houden.",
    ],
    ingredients: ["Glucose", "Perzikextract", "Perzikzaadpoeder"],
  },
  {
    name: "Red Gold Jelly Mask (Rood Goud)",
    effect: "Elasticiteit en herstel",
    benefits: [
      "Helpt de elasticiteit van de huid te verbeteren.",
      "Ondersteunt het herstel van de huid.",
      "Verzacht een droge huid.",
    ],
    ingredients: ["Goud", "Kokosvruchtpoeder", "Natriumhyaluronaat"],
  },
  {
    name: "Pomegranate Jelly Mask (Granaatappel)",
    effect: "Huidverheldering en fijne lijntjes",
    benefits: [
      "Helpt de huidteint egaler te maken.",
      "Ondersteunt de verzorging van pigmentvlekken.",
      "Helpt fijne lijntjes te verbeteren.",
    ],
    ingredients: ["Trehalose", "Natriumhyaluronaat", "Granaatappelextract"],
  },
  {
    name: "Anti Toxins Jelly Mask",
    effect: "Acne en roodheid",
    benefits: [
      "Helpt roodheid te verminderen.",
      "Verzacht de huid.",
      "Ondersteunt de verzorging van een acnegevoelige huid.",
    ],
    ingredients: ["Natriumhyaluronaat", "Rozenextract", "Lavendelbloempoeder"],
  },
  {
    name: "24K Gold Jelly Mask",
    effect: "Glow en donkere vlekjes",
    benefits: [
      "Geeft de huid een stralende uitstraling.",
      "Helpt de teint egaler te laten lijken.",
      "Ondersteunt de verzorging van donkere vlekjes.",
    ],
    ingredients: ["Goud", "Natriumalginaat", "Natriumhyaluronaat"],
  },
  {
    name: "Orange Jelly Mask (Sinaasappel)",
    effect: "Vitamine C en elasticiteit",
    benefits: [
      "Helpt de elasticiteit van de huid te verbeteren.",
      "Ondersteunt een gezonde uitstraling.",
      "Geeft de huid een frisse uitstraling.",
    ],
    ingredients: ["Vitamine C", "Natriumhyaluronaat", "Extract van bittere sinaasappelschil"],
  },
  {
    name: "Blue Gold Jelly Mask (Blauw Goud)",
    effect: "Anti-aging en fijne lijntjes",
    benefits: [
      "Ondersteunt de verzorging van de ouder wordende huid.",
      "Helpt fijne lijntjes te verminderen.",
      "Hydrateert de huid.",
    ],
    ingredients: ["Goud", "Trehalose", "Hyaluronzuur"],
  },
  {
    name: "White Gold Jelly Mask (Wit Goud)",
    effect: "Anti-aging en intensieve hydratatie",
    benefits: [
      "Helpt de huid intensief te hydrateren.",
      "Ondersteunt de huidvernieuwing.",
      "Helpt de huid er gladder en frisser uit te laten zien.",
    ],
    ingredients: ["Zilver", "Niacinamide (vitamine B3)", "Natriumhyaluronaat"],
  },
  {
    name: "Black Gold Jelly Mask (Zwart Goud)",
    effect: "Onzuiverheden en donkere vlekjes",
    benefits: [
      "Helpt onzuiverheden te verwijderen.",
      "Ondersteunt de reiniging van de huid.",
      "Salicylzuur helpt verstopte poriën tegen te gaan.",
      "Ondersteunt de verzorging van donkere vlekjes.",
    ],
    ingredients: ["Alginaat", "Salicylzuur", "Natriumhyaluronaat"],
  },
  {
    name: "Charcoal Jelly Mask (Houtskool)",
    effect: "Dieptereiniging en poriën",
    benefits: [
      "Helpt de huid te reinigen.",
      "Ondersteunt het verwijderen van overtollig talg en onzuiverheden.",
      "Helpt verstopte poriën te reinigen.",
    ],
    ingredients: ["Alginaat", "Houtskoolpoeder", "Bamboehoutskool"],
  },
];

export default function Behandelingen() {
  const [jellyOpen, setJellyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/treatment3.jpg"
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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                    {category.items.map((item, ii) => (
                      <div
                        key={ii}
                        className={`bg-white rounded-2xl p-6 shadow-sm border border-[oklch(0.92_0.018_75)] hover:shadow-md transition-shadow duration-300 ${
                          item.name === "Jelly Masker" && jellyOpen ? "ring-2 ring-[oklch(0.62_0.09_50)]/30" : ""
                        }`}
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

                        {/* Uitleg button for Jelly Masker */}
                        {item.name === "Jelly Masker" && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setJellyOpen(!jellyOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={jellyOpen}
                            >
                              <Sparkles size={13} className={jellyOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{jellyOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${jellyOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of all 10 Jelly Masks */}
                            {jellyOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3">
                                <div className="flex items-center justify-between mb-1">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.62_0.09_50)]">
                                    Overzicht van alle Jelly Maskers
                                  </p>
                                  <span className="font-body text-[11px] font-600 text-[oklch(0.55_0.04_50)] bg-[oklch(0.94_0.018_75)] px-2 py-0.5 rounded-full">
                                    10 soorten
                                  </span>
                                </div>
                                <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed mb-3">
                                  Tijdens uw behandeling kiezen we samen het jellymasker dat exact aansluit bij uw huidwensen en huidtype:
                                </p>

                                <div className="max-h-[520px] overflow-y-auto pr-1 space-y-3">
                                  {jellyMasks.map((mask, idx) => (
                                    <div
                                      key={idx}
                                      className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] text-left"
                                    >
                                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                        <h4 className="font-display text-sm font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                          {mask.name}
                                        </h4>
                                        <span className="font-body text-[10px] font-600 px-2.5 py-0.5 rounded-full bg-[oklch(0.92_0.025_75)] text-[oklch(0.38_0.04_50)] shrink-0 self-start sm:self-auto">
                                          {mask.effect}
                                        </span>
                                      </div>

                                      <ul className="space-y-1 mb-2.5">
                                        {mask.benefits.map((b, bi) => (
                                          <li key={bi} className="font-body text-xs text-[oklch(0.45_0.04_50)] flex items-start gap-1.5 leading-snug">
                                            <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                            <span>{b}</span>
                                          </li>
                                        ))}
                                      </ul>

                                      <div className="pt-2 border-t border-[oklch(0.92_0.015_75)] text-[11px] font-body text-[oklch(0.50_0.04_50)] leading-relaxed">
                                        <span className="font-600 text-[oklch(0.30_0.04_50)]">Belangrijkste ingrediënten:</span> {mask.ingredients.join(", ")}.
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>


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
