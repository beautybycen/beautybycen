/**
 * Technologie Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Info } from "lucide-react";
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

function SkinCircle({
  variant,
  type,
}: {
  variant: "before" | "after";
  type: "blemishes" | "redness" | "dullness" | "absorption";
}) {
  const idPrefix = `cp-${type}-${variant}`;

  return (
    <svg
      viewBox="0 0 80 80"
      className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm transition-transform duration-300 hover:scale-105 shrink-0"
      aria-hidden="true"
    >
      <defs>
        {/* Base skin tone gradient */}
        <radialGradient id={`${idPrefix}-base`} cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f7d8c6" />
          <stop offset="55%" stopColor="#e8bca0" />
          <stop offset="100%" stopColor="#d4a284" />
        </radialGradient>

        {/* Dull skin gradient (muted, cooler tone) */}
        <radialGradient id={`${idPrefix}-dull`} cx="40%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#e1cdc2" />
          <stop offset="60%" stopColor="#cdb4a4" />
          <stop offset="100%" stopColor="#bba091" />
        </radialGradient>

        {/* Radiant glow skin gradient (luminous warm peach/gold) */}
        <radialGradient id={`${idPrefix}-glow`} cx="32%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff4eb" />
          <stop offset="40%" stopColor="#f9d5be" />
          <stop offset="80%" stopColor="#ebb798" />
          <stop offset="100%" stopColor="#dc9c7c" />
        </radialGradient>

        {/* Redness irritation gradient */}
        <radialGradient id={`${idPrefix}-redness`} cx="50%" cy="46%" r="52%">
          <stop offset="0%" stopColor="#e54e4e" stopOpacity="0.65" />
          <stop offset="45%" stopColor="#f87171" stopOpacity="0.45" />
          <stop offset="80%" stopColor="#fca5a5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fca5a5" stopOpacity="0" />
        </radialGradient>

        {/* Blemish spots gradient */}
        <radialGradient id={`${idPrefix}-spot`} cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#b91c1c" />
        </radialGradient>
      </defs>

      {/* Main skin circle */}
      <circle
        cx="40"
        cy="40"
        r="38"
        fill={
          type === "dullness"
            ? variant === "before"
              ? `url(#${idPrefix}-dull)`
              : `url(#${idPrefix}-glow)`
            : `url(#${idPrefix}-base)`
        }
      />

      {/* Type-specific overlay effects */}
      {type === "blemishes" && variant === "before" && (
        <g>
          <circle cx="28" cy="28" r="6" fill="#ef4444" opacity="0.22" />
          <circle cx="28" cy="28" r="3.6" fill={`url(#${idPrefix}-spot)`} />
          <circle cx="48" cy="22" r="5" fill="#ef4444" opacity="0.2" />
          <circle cx="48" cy="22" r="3" fill={`url(#${idPrefix}-spot)`} />
          <circle cx="39" cy="44" r="7.5" fill="#ef4444" opacity="0.26" />
          <circle cx="39" cy="44" r="4.2" fill={`url(#${idPrefix}-spot)`} />
          <circle cx="22" cy="48" r="4.8" fill="#ef4444" opacity="0.2" />
          <circle cx="22" cy="48" r="2.6" fill={`url(#${idPrefix}-spot)`} />
          <circle cx="56" cy="46" r="5" fill="#ef4444" opacity="0.22" />
          <circle cx="56" cy="46" r="3.2" fill={`url(#${idPrefix}-spot)`} />
          <circle cx="54" cy="33" r="4" fill="#ef4444" opacity="0.18" />
          <circle cx="54" cy="33" r="2.2" fill={`url(#${idPrefix}-spot)`} />
        </g>
      )}

      {type === "blemishes" && variant === "after" && (
        <g>
          <ellipse cx="36" cy="32" rx="18" ry="12" fill="#ffffff" opacity="0.22" />
        </g>
      )}

      {type === "redness" && variant === "before" && (
        <g>
          <circle cx="40" cy="40" r="38" fill={`url(#${idPrefix}-redness)`} />
          <ellipse cx="34" cy="42" rx="14" ry="10" fill="#ef4444" opacity="0.25" />
          <ellipse cx="48" cy="38" rx="12" ry="9" fill="#ef4444" opacity="0.25" />
        </g>
      )}

      {type === "redness" && variant === "after" && (
        <g>
          <ellipse cx="36" cy="34" rx="16" ry="10" fill="#ffffff" opacity="0.2" />
        </g>
      )}

      {type === "dullness" && variant === "after" && (
        <g>
          <ellipse
            cx="32"
            cy="28"
            rx="16"
            ry="10"
            fill="#ffffff"
            opacity="0.38"
            transform="rotate(-15 32 28)"
          />
          {/* Subtle sparkle accent */}
          <path
            d="M58 15 Q58 21 52 21 Q58 21 58 27 Q58 21 64 21 Q58 21 58 15 Z"
            fill="#d97706"
            opacity="0.9"
          />
          <circle cx="58" cy="21" r="1.5" fill="#ffffff" />
          <circle cx="22" cy="52" r="1.5" fill="#ffffff" opacity="0.6" />
        </g>
      )}

      {type === "absorption" && variant === "before" && (
        <g>
          {/* Droplet 1 */}
          <ellipse cx="29" cy="33" rx="6" ry="5.2" fill="#000000" opacity="0.08" />
          <ellipse cx="28" cy="31" rx="5.5" ry="5" fill="#ffffff" opacity="0.92" />
          <circle cx="26.5" cy="29.5" r="1.5" fill="#ffffff" />

          {/* Droplet 2 */}
          <ellipse cx="49" cy="27" rx="5" ry="4.2" fill="#000000" opacity="0.08" />
          <ellipse cx="48" cy="25" rx="4.5" ry="4" fill="#ffffff" opacity="0.92" />
          <circle cx="46.5" cy="23.5" r="1.2" fill="#ffffff" />

          {/* Droplet 3 */}
          <ellipse cx="39" cy="49" rx="7" ry="6" fill="#000000" opacity="0.08" />
          <ellipse cx="38" cy="47" rx="6.5" ry="5.5" fill="#ffffff" opacity="0.92" />
          <circle cx="36" cy="45" r="1.8" fill="#ffffff" />
        </g>
      )}

      {type === "absorption" && variant === "after" && (
        <g>
          <ellipse cx="38" cy="34" rx="18" ry="12" fill="#ffffff" opacity="0.25" />
          <circle cx="40" cy="40" r="35" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.35" />
        </g>
      )}
    </svg>
  );
}

const coldPlasmaEffects = [
  {
    type: "blemishes" as const,
    title: "Puistjes en onzuiverheden",
    description:
      "Cold plasma maakt de bacteriën die ontstekingen veroorzaken onschadelijk. Puistjes kalmeren sneller en er ontstaan minder nieuwe.",
  },
  {
    type: "redness" as const,
    title: "Rode of gevoelige huid",
    description:
      "De behandeling werkt zonder hitte en kalmeert geïrriteerde plekken. Roodheid neemt af en de huid voelt rustiger aan.",
  },
  {
    type: "dullness" as const,
    title: "Doffe, vermoeide huid",
    description:
      "Het plasma stimuleert de doorbloeding en de vernieuwing van de huid. Het resultaat is een frissere, egalere teint met meer glow.",
  },
  {
    type: "absorption" as const,
    title: "Betere opname van verzorging",
    description:
      "Na de behandeling neemt de huid serums en crèmes beter op. Producten blijven niet op de huid liggen maar trekken dieper in en doen meer.",
  },
];

function ColdPlasmaShowcase() {
  return (
    <div className="mt-10 pt-10 border-t border-[oklch(0.92_0.018_75)]">
      {/* Header */}
      <div className="mb-8">
        <p className="font-body text-xs tracking-[0.2em] uppercase font-600 text-[oklch(0.62_0.09_50)] mb-2">
          Beauty By Cen · Cold Plasma
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-[oklch(0.22_0.04_50)] font-400 mb-3 leading-tight">
          Wat doet cold plasma voor uw huid?
        </h3>
        <p className="font-body text-base text-[oklch(0.45_0.04_50)] max-w-2xl leading-relaxed">
          Per huidsituatie ziet u wat er verandert. Het zachte, koude plasma pakt bacteriën aan, kalmeert en geeft de huid een prikkel om zichzelf te herstellen.
        </p>
      </div>

      {/* Grid of 4 effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coldPlasmaEffects.map((effect, idx) => (
          <div
            key={idx}
            className="bg-[oklch(0.985_0.008_75)] rounded-2xl p-6 border border-[oklch(0.92_0.018_75)] hover:border-[oklch(0.85_0.03_50)] transition-all duration-300 hover:shadow-xs flex flex-col justify-between"
          >
            {/* Visual comparison */}
            <div className="flex items-center justify-between sm:justify-center sm:gap-8 bg-white/80 rounded-xl p-4 border border-[oklch(0.94_0.012_75)] shadow-2xs mb-5">
              <div className="flex flex-col items-center">
                <span className="font-body text-[11px] font-600 tracking-[0.16em] uppercase text-[oklch(0.55_0.04_50)] mb-2">
                  Voor
                </span>
                <SkinCircle variant="before" type={effect.type} />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.94_0.018_75)] flex items-center justify-center text-[oklch(0.62_0.09_50)] shadow-2xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-body text-[11px] font-600 tracking-[0.16em] uppercase text-[oklch(0.62_0.09_50)] mb-2">
                  Na
                </span>
                <SkinCircle variant="after" type={effect.type} />
              </div>
            </div>

            {/* Content text */}
            <div>
              <h4 className="font-display text-xl font-500 text-[oklch(0.22_0.04_50)] mb-2 leading-snug">
                {effect.title}
              </h4>
              <p className="font-body text-sm text-[oklch(0.45_0.04_50)] leading-relaxed">
                {effect.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer and contraindications */}
      <div className="mt-8 rounded-2xl bg-[oklch(0.96_0.015_75)] border border-[oklch(0.90_0.02_75)] p-5 md:p-6 text-[oklch(0.42_0.03_50)] text-xs md:text-sm font-body leading-relaxed flex flex-col sm:flex-row gap-4 items-start">
        <div className="w-8 h-8 rounded-full bg-[oklch(0.90_0.03_75)] flex items-center justify-center shrink-0 text-[oklch(0.45_0.05_50)] mt-0.5">
          <Info className="w-4 h-4" />
        </div>
        <div className="space-y-1.5 flex-1">
          <p>
            Illustraties ter verduidelijking. Resultaten verschillen per persoon en meestal zijn meerdere behandelingen nodig.
          </p>
          <p className="text-[oklch(0.55_0.06_35)]">
            <span className="font-600">Let op:</span> Niet geschikt bij een pacemaker, zwangerschap, epilepsie of metalen implantaten in het behandelgebied.
          </p>
        </div>
      </div>
    </div>
  );
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
      "De Skin Active-behandeling is een innovatieve techniek die de voordelen van microneedling biedt, maar dan volledig zonder naalden. Via elektroporatie worden actieve werkzame stoffen diep in de huid gebracht, waardoor de huid van binnenuit wordt gevoed en vernieuwd. De behandeling stimuleert de aanmaak van collageen en elastine, verbetert de huidtextuur en geeft een zichtbaar stralend resultaat. Ideaal voor wie wil investeren in een gezonde huid zonder ongemak.",
    benefits: ["Geen naalden, geen pijn", "Diepe toediening van serums", "Stimuleert collageenproductie", "Verbetert huidtextuur en uitstraling"],
    color: "oklch(0.72_0.05_145)",
  },
  {
    number: "03",
    name: "Coldplasma",
    tagline: "Krachtige technologie voor een gezonde huid",
    description:
      "Coldplasma is een geavanceerde behandeltechnologie die gebruikmaakt van geïoniseerde lucht op lage temperatuur. Het plasma heeft een krachtige, herstellende werking op de huid: de huid wordt zichtbaar verfrist, egaler van toon en straalt meer vitaliteit uit. Coldplasma is bijzonder geschikt bij een onzuivere, gevoelige of verouderde huid. De behandeling is pijnloos, niet-invasief en geschikt voor vrijwel alle huidtypes.",
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
            src="/images/cindy-observ-portrait.jpg"
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

                    {/* Coldplasma Visual Showcase */}
                    {device.number === "03" && <ColdPlasmaShowcase />}
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
                Boek een consult en wij adviseren u graag persoonlijk over de beste aanpak voor uw huid.
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
