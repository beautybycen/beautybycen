/**
 * Home Page — Beauty By Cen
 * Design: Soft Organic Luxury
 * Sections: Hero, Why Choose Us, Services, About Preview, Reviews, CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, ChevronRight, Sparkles, Scan, Heart, Users } from "lucide-react";

// Image CDN URLs
const IMAGES = {
  heroTreatment: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/hero_treatment-82xgWT4uXVJqrCpgqv3aD8.webp",
  heroPortrait: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy_portrait_5f3ed40b.jpg",
  salonInterior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/salon_interior-5CtnKZqzy57yHGZHBHXZ5c.webp",
  skinCloseup: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/skin_closeup-f6UtsUNoHL5wtDLPbX4W3a.webp",
  treatmentHands: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/treatment_hands-D7K7cGQsDKef5aZcRBFayX.webp",
  salonRoom: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/salon_room1_8c569bae.webp",
};

const services = [
  {
    title: "Gezichtsbehandelingen",
    description: "Diepgaande reiniging, hydratatie en verjonging afgestemd op uw huidtype.",
    icon: Sparkles,
    href: "/behandelingen",
  },
  {
    title: "Huidproblemen",
    description: "Gerichte behandelingen voor acne, pigmentatie, rosacea en meer.",
    icon: Heart,
    href: "/huidproblemen",
  },
  {
    title: "Observ 520x Huidscan",
    description: "Geavanceerde technologie voor een nauwkeurige analyse van uw huid.",
    icon: Scan,
    href: "/behandelingen",
  },
  {
    title: "Donkere Huid Specialist",
    description: "Gespecialiseerde behandelingen voor donkere en gemengde huidtypes.",
    icon: Users,
    href: "/behandelingen",
  },
];

const reviews = [
  {
    name: "Amara K.",
    rating: 5,
    text: "Cindy is echt een specialist! Ze weet precies wat mijn huid nodig heeft. Na de behandeling straalt mijn huid als nooit tevoren.",
    date: "Maart 2024",
  },
  {
    name: "Fatima B.",
    rating: 5,
    text: "Eindelijk een huidspecialist die echt verstand heeft van donkere huid. Ik ben zo blij dat ik Beauty by Cen heb gevonden!",
    date: "Februari 2024",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "De Observ scan was echt een eye-opener. Cindy legde alles helder uit en de behandeling was precies wat ik nodig had.",
    date: "Januari 2024",
  },
];

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroTreatment}
            alt="Beauty treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.04_50)]/85 via-[oklch(0.22_0.04_50)]/50 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <div className="max-w-xl">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-4">
              Huidspecialist · Zaandam
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-300 text-white leading-[1.1] mb-6">
              Diep in de huid,{" "}
              <em className="italic text-[oklch(0.78_0.06_15)]">helder</em>{" "}
              in uw schoonheid
            </h1>
            <p className="font-body text-base text-white/75 leading-relaxed mb-10 max-w-md">
              Professionele huidspecialist met geavanceerde technologie. Persoonlijke behandelingen afgestemd op uw unieke huid — inclusief donkere huidtypes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300 hover:shadow-lg hover:shadow-[oklch(0.62_0.09_50)]/30"
              >
                Boek een behandeling
                <ChevronRight size={16} />
              </a>
              <Link href="/behandelingen">
                <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-500 text-sm tracking-wide border border-white/40 text-white hover:border-white/70 hover:bg-white/10 transition-all duration-300">
                  Bekijk behandelingen
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-[oklch(0.97_0.015_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div>
              <FadeUp>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.62_0.09_50)] mb-3">
                  Waarom Beauty by Cen
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-300 text-[oklch(0.22_0.04_50)] leading-[1.15] mb-6">
                  Uw huid verdient{" "}
                  <em className="italic text-[oklch(0.62_0.09_50)]">de beste</em>{" "}
                  zorg
                </h2>
                <p className="font-body text-base text-[oklch(0.45_0.04_50)] leading-relaxed mb-8">
                  Bij Beauty by Cen staat uw huid centraal. Met jarenlange expertise en geavanceerde technologie bieden wij behandelingen die echt resultaat geven — persoonlijk, professioneel en met oog voor elk huidtype.
                </p>
              </FadeUp>

              <div className="space-y-5">
                {[
                  { title: "Professionele huidspecialist", desc: "Gecertificeerd en gespecialiseerd in huidanalyse en behandelingen" },
                  { title: "Observ 520x technologie", desc: "Geavanceerde huidscan voor een nauwkeurige diagnose" },
                  { title: "Specialist in donkere huid", desc: "Unieke expertise in de behandeling van donkere en gemengde huidtypes" },
                  { title: "Persoonlijk behandelplan", desc: "Elke behandeling volledig afgestemd op uw specifieke huidbehoeften" },
                ].map((item, i) => (
                  <FadeUp key={i} delay={i * 100}>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.62_0.09_50)] mt-2.5 shrink-0" />
                      <div>
                        <h3 className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)] mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm text-[oklch(0.52_0.04_50)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Image side */}
            <FadeUp delay={200} className="relative">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={IMAGES.heroPortrait}
                    alt="Cindy Nimmermeer - Huidspecialist"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative circle */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[oklch(0.78_0.06_15)]/20 -z-10" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="hairline mx-6 lg:mx-10" />

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-[oklch(0.97_0.015_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.62_0.09_50)] mb-3">
              Onze Behandelingen
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-300 text-[oklch(0.22_0.04_50)] leading-[1.15]">
              Wat wij voor u kunnen doen
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeUp key={i} delay={i * 80}>
                  <Link href={service.href}>
                  <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[oklch(0.92_0.018_75)] cursor-pointer h-full">
                    <div className="w-11 h-11 rounded-xl bg-[oklch(0.92_0.022_75)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.62_0.09_50)] transition-colors duration-300">
                      <Icon size={20} className="text-[oklch(0.62_0.09_50)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-xl font-500 text-[oklch(0.22_0.04_50)] mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-[oklch(0.52_0.04_50)] leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1 mt-5 text-[oklch(0.62_0.09_50)] text-sm font-body font-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Meer info <ChevronRight size={14} />
                    </div>
                  </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={300} className="text-center mt-12">
            <Link href="/behandelingen">
              <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide border-2 border-[oklch(0.62_0.09_50)] text-[oklch(0.62_0.09_50)] hover:bg-[oklch(0.62_0.09_50)] hover:text-white transition-all duration-300">
                Alle behandelingen bekijken
                <ChevronRight size={16} />
              </span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ─── SALON INTERIOR BANNER ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.salonInterior}
            alt="Beauty By Cen salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[oklch(0.22_0.04_50)]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-4">
              Ons Salon
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-300 text-white leading-[1.15] mb-6 max-w-2xl mx-auto">
              Een plek waar u zich{" "}
              <em className="italic text-[oklch(0.78_0.06_15)]">thuis</em> voelt
            </h2>
            <p className="font-body text-base text-white/70 max-w-lg mx-auto mb-10">
              Ons modern ingerichte salon in Zaandam biedt een warme, professionele omgeving waar u volledig kunt ontspannen.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-white text-[oklch(0.22_0.04_50)] hover:bg-[oklch(0.92_0.018_75)] transition-all duration-300">
                Kom langs
                <ChevronRight size={16} />
              </span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-24 bg-[oklch(0.94_0.018_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeUp className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.62_0.09_50)] mb-3">
              Ervaringen
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-300 text-[oklch(0.22_0.04_50)] leading-[1.15]">
              Wat onze klanten zeggen
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-[oklch(0.92_0.018_75)] h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-[oklch(0.62_0.09_50)] text-[oklch(0.62_0.09_50)]" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-[oklch(0.40_0.04_50)] leading-relaxed flex-1 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-5 border-t border-[oklch(0.92_0.018_75)]">
                    <div>
                      <p className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)]">{review.name}</p>
                      <p className="font-body text-xs text-[oklch(0.62_0.04_50)]">{review.date}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[oklch(0.78_0.06_15)]/30 flex items-center justify-center">
                      <span className="font-display text-sm font-500 text-[oklch(0.45_0.05_15)]">
                        {review.name[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-24 bg-[oklch(0.97_0.015_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image grid */}
            <FadeUp className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img src={IMAGES.treatmentHands} alt="Behandeling" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src={IMAGES.skinCloseup} alt="Huid close-up" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img src={IMAGES.salonRoom} alt="Salon" className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeUp>

            {/* Text */}
            <FadeUp delay={150}>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.62_0.09_50)] mb-3">
                Over Cindy Nimmermeer
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-300 text-[oklch(0.22_0.04_50)] leading-[1.15] mb-6">
                Passie voor{" "}
                <em className="italic text-[oklch(0.62_0.09_50)]">gezonde huid</em>
              </h2>
              <p className="font-body text-base text-[oklch(0.45_0.04_50)] leading-relaxed mb-5">
                Cindy Nimmermeer is een gedreven huidspecialist met een bijzondere expertise in donkere en gemengde huidtypes. Met geavanceerde technologie zoals de Observ 520x huidscan biedt zij behandelingen die verder gaan dan het oppervlak.
              </p>
              <p className="font-body text-base text-[oklch(0.45_0.04_50)] leading-relaxed mb-8">
                Elk behandelplan is uniek — afgestemd op uw huid, uw wensen en uw leven. Want schoonheid begint bij een gezonde huid.
              </p>
              <Link href="/over-mij">
                <span className="inline-flex items-center gap-2 font-body font-600 text-sm text-[oklch(0.62_0.09_50)] hover:gap-3 transition-all duration-300">
                  Lees meer over mij
                  <ChevronRight size={16} />
                </span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 bg-[oklch(0.22_0.04_50)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-4">
              Klaar om te beginnen?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-300 text-white leading-[1.15] mb-6 max-w-xl mx-auto">
              Boek uw persoonlijke{" "}
              <em className="italic text-[oklch(0.78_0.06_15)]">behandeling</em>
            </h2>
            <p className="font-body text-base text-white/65 max-w-md mx-auto mb-10">
              Neem contact op of boek direct online. Wij begeleiden u graag naar een stralende, gezonde huid.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300 hover:shadow-lg"
              >
                Boek Nu
                <ChevronRight size={16} />
              </a>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-500 text-sm tracking-wide border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                  Neem contact op
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
