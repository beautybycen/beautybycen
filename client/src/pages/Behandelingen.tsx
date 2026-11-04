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
      { name: "Hydrodermabrasie", desc: "Op basis van de huidscan die we samen hebben uitgevoerd, weten we nu precies wat uw huid op dit moment nodig heeft. We stellen daarom een gepersonaliseerde gezichtsbehandeling samen met behulp van ons geavanceerde hydrodermabrasie-apparaat.", duration: "Op maat" },
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
  const [basisOpen, setBasisOpen] = useState(false);
  const [jellyOpen, setJellyOpen] = useState(false);
  const [acneOpen, setAcneOpen] = useState(false);
  const [peelOffOpen, setPeelOffOpen] = useState(false);
  const [diepeReinigingOpen, setDiepeReinigingOpen] = useState(false);
  const [antiAgingOpen, setAntiAgingOpen] = useState(false);
  const [observOpen, setObservOpen] = useState(false);
  const [skinActiveOpen, setSkinActiveOpen] = useState(false);
  const [coldplasmaOpen, setColdplasmaOpen] = useState(false);
  const [hydrodermabrasieOpen, setHydrodermabrasieOpen] = useState(false);
  const [hydraterendOpen, setHydraterendOpen] = useState(false);

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
                        className={`bg-white rounded-2xl p-6 shadow-sm border border-[oklch(0.92_0.018_75)] hover:shadow-md transition-all duration-300 ${
                          (item.name === "Basisbehandeling" && basisOpen) ||
                          (item.name === "Jelly Masker" && jellyOpen) ||
                          (item.name === "Acne Behandeling" && acneOpen) ||
                          (item.name === "Peel-off Masker" && peelOffOpen) ||
                          (item.name === "Diepe Reiniging" && diepeReinigingOpen) ||
                          (item.name.toLowerCase().includes("anti-aging") && antiAgingOpen) ||
                          (item.name.includes("Observ") && observOpen) ||
                          (item.name.toLowerCase().includes("skin active") && skinActiveOpen) ||
                          (item.name.toLowerCase().includes("coldplasma") && coldplasmaOpen) ||
                          (item.name.toLowerCase().includes("hydrodermabrasie") && hydrodermabrasieOpen) ||
                          (item.name.toLowerCase().includes("hydraterende") && hydraterendOpen)
                            ? "ring-2 ring-[oklch(0.62_0.09_50)]/30"
                            : ""
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

                        {/* Uitleg button for Basisbehandeling */}
                        {item.name === "Basisbehandeling" && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setBasisOpen(!basisOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={basisOpen}
                            >
                              <Sparkles size={13} className={basisOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{basisOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${basisOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Basisbehandeling */}
                            {basisOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Reiniging &amp; Verzorging
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Basisbehandeling (60 min)
                                  </h4>
                                </div>

                                <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3 border border-[oklch(0.90_0.02_75)] text-xs font-body text-[oklch(0.35_0.04_50)] leading-relaxed">
                                  <strong className="text-[oklch(0.22_0.04_50)]">Doel van de basisbehandeling:</strong> de huid op een eenvoudige manier reinigen, verzorgen en in goede conditie houden.
                                </div>

                                {/* Behandelstappen */}
                                <div className="space-y-2">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Behandelstappen:
                                  </p>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-0.5">
                                      1. Oppervlaktereiniging
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Het verwijderen van make-up, vuil en overtollig talg met een geschikte reinigingsmelk of cleanser.
                                    </p>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-0.5">
                                      2. Dieptereiniging
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      De huid grondiger reinigen met bijvoorbeeld een lichte peeling of scrub om dode huidcellen te verwijderen.
                                    </p>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-0.5">
                                      3. Onzuiverheden verwijderen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Mee-eters en verstopte poriën voorzichtig verwijderen indien nodig en mogelijk.
                                    </p>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-0.5">
                                      4. Masker aanbrengen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een gezichtsmasker aanbrengen dat is afgestemd op de huidbehoefte, bijvoorbeeld een hydraterend, kalmerend of zuiverend masker.
                                    </p>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-0.5">
                                      5. Dagcrème aanbrengen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een geschikte dagcrème aanbrengen om de huid te hydrateren en te verzorgen.
                                    </p>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-0.5">
                                      6. SPF aanbrengen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      De behandeling afsluiten met zonnebescherming om de huid te beschermen tegen schadelijke UV-straling.
                                    </p>
                                  </div>
                                </div>

                                {/* Resultaat */}
                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Resultaat van de behandeling:
                                  </p>
                                  <ul className="space-y-1 font-body text-xs text-[oklch(0.45_0.04_50)]">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Een schone en frisse huid</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Minder oppervlakkige onzuiverheden</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Een zachtere en soepelere huid</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Betere hydratatie</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Een ontspannen en verzorgd gevoel</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Verschil basis vs uitgebreid */}
                                <div className="bg-[oklch(0.96_0.025_50)] rounded-xl p-3.5 border border-[oklch(0.85_0.05_50)] space-y-1.5">
                                  <h5 className="font-display text-xs font-700 text-[oklch(0.25_0.05_50)] uppercase tracking-wider">
                                    Verschil tussen basis en uitgebreid:
                                  </h5>
                                  <p className="font-body text-xs text-[oklch(0.35_0.04_50)] leading-relaxed">
                                    Bij een basisbehandeling ligt de nadruk op het reinigen, verzorgen en hydrateren van de huid. Bij een uitgebreide gezichtsbehandeling kunnen aanvullende technieken worden toegepast, zoals geavanceerde apparatuur, intensieve peelings, speciale huidverbeterende behandelingen en 2 maskers.
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Diepe Reiniging */}
                        {item.name === "Diepe Reiniging" && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setDiepeReinigingOpen(!diepeReinigingOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={diepeReinigingOpen}
                            >
                              <Sparkles size={13} className={diepeReinigingOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{diepeReinigingOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${diepeReinigingOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Diepe Reiniging */}
                            {diepeReinigingOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Behandelstappen
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Inhoud van de behandeling
                                  </h4>
                                </div>

                                <div className="space-y-2">
                                  {/* Oppervlakte reinigen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Oppervlakte reinigen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Verwijdert make-up, talg en oppervlakkige onzuiverheden.
                                    </p>
                                  </div>

                                  {/* Diepte Reiniging */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Diepte Reiniging
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Reinigt de poriën intensief en zuivert de huid dieper.
                                    </p>
                                  </div>

                                  {/* Peeling of lysing & Stomen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Peeling of lysing &amp; stomen met de vapozone
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Verwijdert dode huidcellen en laat de huid fris en glad aanvoelen.
                                    </p>
                                  </div>

                                  {/* Masker */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Masker naar behoefte van de huid
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een verzorgend masker afgestemd op de actuele conditie en behoeften van de huid (bijv. zuiverend, kalmerend of hydraterend).
                                    </p>
                                  </div>

                                  {/* Vitamine serum */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Vitamine serum
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een voedend en herstellend serum dat de huid een gezonde glow geeft.
                                    </p>
                                  </div>

                                  {/* Voedende crème */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Voedende crème (op huidbehoefte)
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een verzorgende crème die wordt afgestemd op wat de huid op dat moment nodig heeft (bijv. hydratatie, kalmering of herstel).
                                    </p>
                                  </div>

                                  {/* SPF */}
                                  <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3 border border-[oklch(0.90_0.02_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      SPF (zonbescherming)
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.45_0.04_50)] leading-relaxed">
                                      De behandeling wordt altijd afgesloten met zonnebrand om de huid te beschermen tegen UV-straling.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Anti-Aging Behandeling */}
                        {item.name.toLowerCase().includes("anti-aging") && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setAntiAgingOpen(!antiAgingOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={antiAgingOpen}
                            >
                              <Sparkles size={13} className={antiAgingOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{antiAgingOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${antiAgingOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Anti-Aging Behandeling */}
                            {antiAgingOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Huidverjonging &amp; Elasticiteit
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Anti-Aging Behandeling (90 min)
                                  </h4>
                                </div>

                                <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                  Een anti-aging behandeling is gericht op het verminderen van fijne lijntjes en rimpels, het verbeteren van de huidelasticiteit en het verstevigen en verjongen van de huid.
                                </p>

                                {/* Behandelstappen */}
                                <div className="space-y-2">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Behandelstappen:
                                  </p>

                                  {/* Oppervlaktereiniging */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Oppervlaktereiniging
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Het gezicht reinigen met een geschikte reinigingsmelk of reinigingsgel.</li>
                                      <li>• Make-up, talg en oppervlakkig vuil verwijderen.</li>
                                      <li>• De reiniger verwijderen met vochtige kompressen.</li>
                                    </ul>
                                  </div>

                                  {/* Dieptereiniging */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Dieptereiniging
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• De huid reinigen met een dieptereinigingsproduct.</li>
                                      <li>• Eventueel een milde peeling gebruiken om dode huidcellen te verwijderen.</li>
                                      <li>• De huid voorbereiden op de verdere behandeling.</li>
                                    </ul>
                                  </div>

                                  {/* Stomen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Stomen
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• De huid eventueel stomen om de huid soepel te maken.</li>
                                      <li>• Dit kan helpen bij het verwijderen van talg en onzuiverheden.</li>
                                      <li>• Stomen is niet voor iedere huid geschikt.</li>
                                    </ul>
                                  </div>

                                  {/* Onzuiverheden verwijderen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Onzuiverheden verwijderen
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Eventuele comedonen (mee-eters) voorzichtig verwijderen.</li>
                                      <li>• De huid daarna kalmeren en indien nodig desinfecteren.</li>
                                    </ul>
                                  </div>

                                  {/* Anti-aging serum aanbrengen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Anti-aging serum aanbrengen
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Een serum met bijvoorbeeld hyaluronzuur, peptiden of antioxidanten aanbrengen.</li>
                                      <li>• Het serum zachtjes inmasseren.</li>
                                      <li>• Gericht werken op fijne lijntjes, rimpels en vochtarme zones.</li>
                                    </ul>
                                  </div>

                                  {/* Anti-aging masker */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Anti-aging masker
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Een verstevigend, hydraterend of voedend masker aanbrengen.</li>
                                      <li>• Het masker ongeveer 10–20 minuten laten inwerken, afhankelijk van het product.</li>
                                      <li>• Het masker verwijderen volgens de gebruiksaanwijzing.</li>
                                    </ul>
                                  </div>

                                  {/* Oogverzorging */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Oogverzorging
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Een speciale oogcrème aanbrengen.</li>
                                      <li>• Zachtjes inkloppen rondom de ogen.</li>
                                      <li>• Extra aandacht besteden aan fijne lijntjes en een vochtarme huid.</li>
                                    </ul>
                                  </div>

                                  {/* Dagverzorging & SPF */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Dagverzorging &amp; SPF
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Een geschikte anti-aging crème aanbrengen om de huid extra te voeden en te hydrateren.</li>
                                      <li>• Overdag afsluiten met SPF 30–50.</li>
                                    </ul>
                                  </div>

                                  {/* Advies voor thuis */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] space-y-1">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">
                                      Advies voor thuis
                                    </h5>
                                    <ul className="space-y-0.5 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      <li>• Dagelijks SPF gebruiken.</li>
                                      <li>• Een passend serum en verzorgingscrème adviseren.</li>
                                      <li>• De huid goed hydrateren.</li>
                                      <li>• Een behandeltraject adviseren wanneer dat passend is.</li>
                                    </ul>
                                  </div>
                                </div>

                                {/* Belangrijk verschil */}
                                <div className="bg-[oklch(0.96_0.025_50)] rounded-xl p-3.5 border border-[oklch(0.85_0.05_50)] space-y-1">
                                  <h5 className="font-display text-xs font-700 text-[oklch(0.25_0.05_50)] uppercase tracking-wider">
                                    Belangrijk om te weten:
                                  </h5>
                                  <p className="font-body text-xs text-[oklch(0.35_0.04_50)] leading-relaxed">
                                    Een anti-aging behandeling is niet hetzelfde als een hydraterende behandeling. Bij anti-aging ligt de nadruk meer op huidveroudering, elasticiteit, fijne lijntjes en huidstructuur.
                                  </p>
                                </div>

                                {/* Meerdere behandelopties & SkinActive */}
                                <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3.5 border border-[oklch(0.90_0.02_75)] space-y-1.5">
                                  <h5 className="font-display text-xs font-700 text-[oklch(0.25_0.05_50)] uppercase tracking-wider">
                                    Meerdere behandelopties mogelijk:
                                  </h5>
                                  <p className="font-body text-xs text-[oklch(0.35_0.04_50)] leading-relaxed">
                                    Afhankelijk van het intakegesprek is het ook mogelijk om anti-aging gericht te behandelen met <strong className="text-[oklch(0.22_0.04_50)]">SkinActive</strong> (zie uitleg bij <em>Skin active</em> onder Geavanceerde Technologie). We laten u tijdens het consult graag zien welke optie het beste aansluit op uw huid en wensen.
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Hydraterende Behandeling */}
                        {item.name.toLowerCase().includes("hydraterende") && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setHydraterendOpen(!hydraterendOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={hydraterendOpen}
                            >
                              <Sparkles size={13} className={hydraterendOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{hydraterendOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${hydraterendOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Hydraterende Behandeling */}
                            {hydraterendOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Behandelstappen
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Hydraterende Behandeling
                                  </h4>
                                </div>

                                <div className="space-y-2">
                                  {/* Oppervlaktereiniging */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Oppervlaktereiniging
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      De huid reinigen met een reinigingsmelk of reinigingsgel om make-up, talg en vuil te verwijderen.
                                    </p>
                                  </div>

                                  {/* Dieptereiniging */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Dieptereiniging
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Dode huidcellen verwijderen met een milde peeling of exfoliant, zodat de huid gladder wordt.
                                    </p>
                                  </div>

                                  {/* Verwijderen van resten */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Verwijderen van resten
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      De peeling verwijderen met vochtige kompressen. Eventueel een warme kompres gebruiken als de huid dit verdraagt.
                                    </p>
                                  </div>

                                  {/* Hydraterend serum aanbrengen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Hydraterend serum aanbrengen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een serum met bijvoorbeeld hyaluronzuur, glycerine of panthenol aanbrengen om vocht aan te trekken en vast te houden.
                                    </p>
                                  </div>

                                  {/* Hydraterend masker */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Hydraterend masker
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een vochtinbrengend masker aanbrengen om de huid intensief te verzorgen.
                                    </p>
                                  </div>

                                  {/* Dagcrème aanbrengen */}
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      Dagcrème aanbrengen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                      Een verzorgende crème aanbrengen die helpt het vocht in de huid vast te houden.
                                    </p>
                                  </div>

                                  {/* SPF aanbrengen */}
                                  <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3 border border-[oklch(0.90_0.02_75)]">
                                    <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)] mb-1">
                                      SPF aanbrengen
                                    </h5>
                                    <p className="font-body text-xs text-[oklch(0.45_0.04_50)] leading-relaxed">
                                      Afsluiten met een zonnebescherming van minimaal SPF 30 overdag.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

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

                        {/* Uitleg button for Peel-off Masker */}
                        {item.name === "Peel-off Masker" && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setPeelOffOpen(!peelOffOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={peelOffOpen}
                            >
                              <Sparkles size={13} className={peelOffOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{peelOffOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${peelOffOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Peel-off Masks */}
                            {peelOffOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Informatie & Varianten
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Peel-off Masker Behandelingen
                                  </h4>
                                </div>

                                {/* Peel-off Mask – Calm */}
                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-display text-sm font-600 text-[oklch(0.22_0.04_50)]">
                                      Peel-off Mask – Calm
                                    </h5>
                                    <span className="font-body text-[10px] font-600 text-[oklch(0.62_0.09_50)] bg-[oklch(0.92_0.022_75)] px-2 py-0.5 rounded-full">
                                      Gevoelige huid
                                    </span>
                                  </div>
                                  <p className="font-body text-xs font-500 text-[oklch(0.35_0.04_50)] leading-relaxed">
                                    Een kalmerende en herstellende behandeling voor de gevoelige of gestreste huid.
                                  </p>
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    Zorgt voor directe hydratatie en voeding, vermindert roodheid, verkleuringen en ontstekingen en versterkt de bloedvaatjes.
                                  </p>
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    De huid wordt gerevitaliseerd, gere-mineraliseerd en beschermd tegen vrije radicalen, terwijl het herstel, collageen- en elastine-aanmaak wordt gestimuleerd.
                                  </p>
                                  <div className="pt-1.5 border-t border-[oklch(0.92_0.015_75)] font-body text-[11px] font-600 text-[oklch(0.55_0.06_45)]">
                                    Resultaat: een frisse, egale en zichtbaar jongere huid (skin detox).
                                  </div>
                                </div>

                                {/* Peel-off Mask – Lift */}
                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-display text-sm font-600 text-[oklch(0.22_0.04_50)]">
                                      Peel-off Mask – Lift
                                    </h5>
                                    <span className="font-body text-[10px] font-600 text-[oklch(0.62_0.09_50)] bg-[oklch(0.92_0.022_75)] px-2 py-0.5 rounded-full">
                                      Liftend effect
                                    </span>
                                  </div>
                                  <p className="font-body text-xs font-500 text-[oklch(0.35_0.04_50)] leading-relaxed">
                                    Een intensieve behandeling met direct liftend effect.
                                  </p>
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    Hydrateert en voedt de huid diep, ondersteunt een sterke antioxidantenbescherming en stimuleert de collageen- en elastinesynthese.
                                  </p>
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    De huid wordt gerevitaliseerd en gere-mineraliseerd, de teint wordt verhelderd en geëgaliseerd en de huid oogt steviger, frisser en jeugdiger.
                                  </p>
                                </div>

                                {/* Resultaat */}
                                <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3.5 border border-[oklch(0.90_0.02_75)] space-y-2">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Resultaat:
                                  </p>
                                  <ul className="space-y-1.5 font-body text-xs text-[oklch(0.45_0.04_50)]">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Diep gereinigde, gevoede en beschermde huid</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Gladdere huidstructuur</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Frisse, gezonde uitstraling</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Acne Behandeling */}
                        {item.name === "Acne Behandeling" && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setAcneOpen(!acneOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={acneOpen}
                            >
                              <Sparkles size={13} className={acneOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{acneOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${acneOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Acne Behandeling */}
                            {acneOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Informatie & Aanpak
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Heb je Acne of pijnlijke ontstekingen?
                                  </h4>
                                </div>

                                <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                  Tijdens een acnébehandeling reinigen we de huid grondig om overtollig talg, dode huidcellen en onzuiverheden te verwijderen. Ik werk met milde, maar effectieve producten die ontstekingen verminderen en de huid tot rust brengen.
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
                                      <span>Kalmerend masker</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3.5 border border-[oklch(0.90_0.02_75)] space-y-1">
                                  <p className="font-body text-xs font-600 text-[oklch(0.28_0.04_50)]">
                                    Inzet van geavanceerde apparatuur:
                                  </p>
                                  <p className="font-body text-xs text-[oklch(0.45_0.04_50)] leading-relaxed">
                                    Het kan zijn dat ik de <span className="font-600 text-[oklch(0.22_0.04_50)]">Coldplasma</span> gebruik om ontstekingen te laten zakken, of de <span className="font-600 text-[oklch(0.22_0.04_50)]">Skin Active</span>.
                                  </p>
                                </div>

                                <div className="pt-2 border-t border-[oklch(0.92_0.015_75)] flex items-start gap-1.5 text-xs font-body text-[oklch(0.50_0.04_50)]">
                                  <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                  <span>Advies voor de juiste huidverzorging en meer…</span>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Observ 520x Huidscan */}
                        {item.name.includes("Observ") && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setObservOpen(!observOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={observOpen}
                            >
                              <Sparkles size={13} className={observOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{observOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${observOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Observ Huidscan */}
                            {observOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Geavanceerde Analyse
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Huidanalyse met het OBSERVE-systeem
                                  </h4>
                                </div>

                                {/* Video preview */}
                                <div className="rounded-xl overflow-hidden border border-[oklch(0.92_0.018_75)] bg-black/5 flex justify-center">
                                  <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="w-full max-h-[380px] object-contain rounded-xl bg-black"
                                    src="/videos/observ-huidscan.mp4"
                                  >
                                    Uw browser ondersteunt deze video helaas niet.
                                  </video>
                                </div>

                                <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                  De huidanalyse met het OBSERVE-systeem geeft een uniek en diepgaand inzicht in de conditie van uw huid.
                                </p>

                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    Met behulp van verschillende lichttechnieken maken we onzichtbare huidproblemen zichtbaar, zoals pigmentvlekken, verstopte poriën, roodheid, beginnende rimpels en vochttekort.
                                  </p>
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    Deze analyse helpt ons om heel gericht te adviseren en een behandeling samen te stellen die écht bij uw huidtype en huidbehoefte past.
                                  </p>
                                </div>

                                <div className="bg-[oklch(0.96_0.025_50)] rounded-xl p-3.5 border border-[oklch(0.85_0.05_50)]">
                                  <p className="font-body text-xs font-600 text-[oklch(0.25_0.05_50)] leading-relaxed">
                                    De huidscan kost normaal €30, maar is helemaal <span className="underline decoration-[oklch(0.62_0.09_50)] font-700">gratis bij het afnemen van een behandeling</span> – zo weet u zeker dat we samen de juiste start maken voor uw huidverbetering.
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Skin Active */}
                        {item.name.toLowerCase().includes("skin active") && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setSkinActiveOpen(!skinActiveOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={skinActiveOpen}
                            >
                              <Sparkles size={13} className={skinActiveOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{skinActiveOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${skinActiveOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Skin Active */}
                            {skinActiveOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Microneedling zonder naalden
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    SkinActive Behandeling
                                  </h4>
                                </div>

                                <div className="space-y-2 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                  <p>
                                    <strong className="text-[oklch(0.22_0.04_50)]">SkinActive</strong> is een geavanceerde, pijnloze methode waarmee we werkstoffen tot in de diepere huidlagen kunnen insluizen.
                                  </p>
                                  <p>
                                    Deze innovatieve techniek maakt het mogelijk om actieve ingrediënten direct in de cellen van de huid te brengen, zónder naalden of beschadiging van de huidbarrière. Door een korte en veilige elektrische puls ontstaan tijdelijk microscopisch kleine openingen in de celwand, waardoor de huid tijdelijk extreem doordringbaar wordt.
                                  </p>
                                  <p>
                                    Dankzij deze methode kunnen voedende stoffen de huid binnendringen precies waar ze het meeste effect hebben. Hierdoor worden huidveroudering tegengegaan, rimpels en fijne lijntjes verminderd en voelt de huid direct voller, gladder en stralender aan.
                                  </p>
                                  <p>
                                    De behandeling is volledig pijnloos, veilig en effectief. De werkstoffen worden optimaal opgenomen en zorgen voor een intensieve huidverbetering van binnenuit.
                                  </p>
                                </div>

                                <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3 border border-[oklch(0.90_0.02_75)] text-xs font-body font-600 text-[oklch(0.35_0.04_50)] text-center">
                                  Gun uw huid een boost van binnenuit. Boek vandaag nog jouw SkinActive-behandeling en ervaar het verschil.
                                </div>

                                {/* Voordelen */}
                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Voordelen:
                                  </p>
                                  <ul className="space-y-1.5 font-body text-xs text-[oklch(0.45_0.04_50)]">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Geen injecties</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Direct zichtbaar resultaat</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Veilig en pijnloos</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Geen blauwe plekken</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Te combineren met al onze andere behandelingen</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Inzetbaar bij */}
                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2.5">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Inzetbaar bij:
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {[
                                      "Huidveroudering",
                                      "Dunne huid",
                                      "Wallen",
                                      "Rokershuid",
                                      "Couperose",
                                      "Plaatselijke vetophopingen",
                                      "Cellulite",
                                      "Striae",
                                      "Huidverslapping",
                                      "Donkere vlekken",
                                    ].map((indicator, idx) => (
                                      <span
                                        key={idx}
                                        className="font-body text-[11px] px-2.5 py-1 rounded-full bg-white text-[oklch(0.38_0.04_50)] border border-[oklch(0.90_0.015_75)]"
                                      >
                                        ○ {indicator}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Coldplasma */}
                        {item.name.toLowerCase().includes("coldplasma") && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setColdplasmaOpen(!coldplasmaOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={coldplasmaOpen}
                            >
                              <Sparkles size={13} className={coldplasmaOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{coldplasmaOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${coldplasmaOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Coldplasma */}
                            {coldplasmaOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Geavanceerde Technologie
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Coldplasma: Revolutionaire huidvernieuwing zonder naalden of pijn
                                  </h4>
                                </div>

                                <div className="space-y-2 font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                  <p>
                                    Ervaar de kracht van Coldplasma – dé nieuwste technologie op het gebied van huidverzorging en huidverbetering. Deze behandeling werkt met koud plasma (een geïoniseerd gas) dat op een veilige en pijnloze manier de huid activeert en vernieuwt.
                                  </p>
                                  <p>
                                    Coldplasma opent tijdelijk de huidbarrière, waardoor actieve werkstoffen dieper kunnen doordringen én tegelijkertijd bacteriën, virussen en schimmels worden afgebroken. Het resultaat? Een zuivere, stralende en gezonde huid van binnenuit.
                                  </p>
                                </div>

                                {/* Wat doet Coldplasma voor uw huid? */}
                                <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3.5 border border-[oklch(0.92_0.018_75)] space-y-2">
                                  <p className="font-body text-xs font-700 uppercase tracking-wider text-[oklch(0.55_0.06_45)]">
                                    Wat doet Coldplasma voor uw huid?
                                  </p>
                                  <ul className="space-y-1.5 font-body text-xs text-[oklch(0.45_0.04_50)]">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Haalt littekens weg</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Reinigt en zuivert de huid tot diep in de poriën</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Vermindert acne en onzuiverheden</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Stimuleert celvernieuwing en collageenaanmaak</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Kalmeert roodheid en ontstekingen</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-[oklch(0.62_0.09_50)] font-bold shrink-0">✓</span>
                                      <span>Verhoogt de opname van werkstoffen</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="space-y-2">
                                  <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                    De behandeling is volledig pijnloos, geschikt voor elk huidtype en ideaal bij huidproblemen zoals acne, rosacea, pigmentvlekken of een doffe huid.
                                  </p>
                                  <div className="bg-[oklch(0.97_0.015_75)] rounded-xl p-3 border border-[oklch(0.90_0.02_75)] text-xs font-body font-600 text-[oklch(0.35_0.04_50)] text-center">
                                    Wilt u een frisse, egale en gezonde huid? Kies dan voor een Coldplasma-behandeling en ervaar het verschil al na één sessie.
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Uitleg button for Hydrodermabrasie */}
                        {item.name.toLowerCase().includes("hydrodermabrasie") && (
                          <div className="mt-4 pt-3 border-t border-[oklch(0.94_0.015_75)]">
                            <button
                              type="button"
                              onClick={() => setHydrodermabrasieOpen(!hydrodermabrasieOpen)}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-body text-xs font-600 tracking-wide transition-all duration-300 bg-[oklch(0.95_0.02_75)] text-[oklch(0.35_0.04_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white group"
                              aria-expanded={hydrodermabrasieOpen}
                            >
                              <Sparkles size={13} className={hydrodermabrasieOpen ? "text-white" : "text-[oklch(0.62_0.09_50)]"} />
                              <span>{hydrodermabrasieOpen ? "Uitleg sluiten" : "Uitleg"}</span>
                              <ChevronDown size={14} className={`transition-transform duration-300 ${hydrodermabrasieOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Fold-out explanation of Hydrodermabrasie */}
                            {hydrodermabrasieOpen && (
                              <div className="mt-4 pt-4 border-t border-[oklch(0.92_0.018_75)] space-y-3.5 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                                <div>
                                  <span className="font-body text-[10px] font-700 tracking-wider uppercase text-[oklch(0.62_0.09_50)] mb-1 block">
                                    Stappen &amp; Opzetstukken
                                  </span>
                                  <h4 className="font-display text-base font-600 text-[oklch(0.22_0.04_50)] leading-snug">
                                    Hydrodermabrasie Behandeling
                                  </h4>
                                </div>

                                <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">
                                  De behandeling bevat verschillende stappen en gespecialiseerde opzetstukken:
                                </p>

                                {/* Opzetstukken lijst */}
                                <div className="space-y-2">
                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] flex items-start gap-2.5">
                                    <span className="text-base shrink-0">❄️</span>
                                    <div>
                                      <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">Koude kop</h5>
                                      <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">Om de huid te kalmeren en te verkoelen.</p>
                                    </div>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] flex items-start gap-2.5">
                                    <span className="text-base shrink-0">✨</span>
                                    <div>
                                      <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">Schraper</h5>
                                      <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">Om dode huidcellen en onzuiverheden effectief te verwijderen.</p>
                                    </div>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] flex items-start gap-2.5">
                                    <span className="text-base shrink-0">⚡</span>
                                    <div>
                                      <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">RF-kop</h5>
                                      <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">Radiofrequentie voor intensieve huidversteviging en stimulatie.</p>
                                    </div>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] flex items-start gap-2.5">
                                    <span className="text-base shrink-0">🔥</span>
                                    <div>
                                      <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">Warme kop</h5>
                                      <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">Om de doorbloeding optimaal te stimuleren.</p>
                                    </div>
                                  </div>

                                  <div className="bg-[oklch(0.985_0.008_75)] rounded-xl p-3 border border-[oklch(0.92_0.018_75)] flex items-start gap-2.5">
                                    <span className="text-base shrink-0">💧</span>
                                    <div>
                                      <h5 className="font-display text-xs font-600 text-[oklch(0.22_0.04_50)]">Zuigkop</h5>
                                      <p className="font-body text-xs text-[oklch(0.48_0.04_50)] leading-relaxed">Reinigt de poriën diep en verwijdert dieperliggend talg.</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Afsluiting SHOOTER */}
                                <div className="bg-[oklch(0.96_0.025_50)] rounded-xl p-3.5 border border-[oklch(0.85_0.05_50)] space-y-1">
                                  <h5 className="font-display text-xs font-700 text-[oklch(0.25_0.05_50)] uppercase tracking-wider">
                                    Afsluiting met de SHOOTER
                                  </h5>
                                  <p className="font-body text-xs text-[oklch(0.35_0.04_50)] leading-relaxed">
                                    Als afsluiting gebruiken we de <span className="font-700 text-[oklch(0.22_0.04_50)]">SHOOTER</span>, die met gecontroleerde luchtdruk actieve serums diep in de huid insluist voor een intens gevoede, frisse en stralende huid die perfect aansluit op uw persoonlijke huidbehoeften.
                                  </p>
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
