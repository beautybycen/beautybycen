/**
 * Contact Page — Beauty By Cen
 * Design: Soft Organic Luxury
 */
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

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

export default function Contact() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_75)]">
      <Navigation />

      {/* Page header */}
      <section className="relative pt-36 pb-20 bg-[oklch(0.22_0.04_50)] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.78_0.06_15)] mb-3">
            Neem contact op
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-300 text-white leading-[1.1]">
            Contact
          </h1>
          <p className="font-body text-base text-white/65 mt-4 max-w-lg">
            Heeft u vragen of wilt u een afspraak maken? Wij helpen u graag.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <FadeUp>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-300 text-[oklch(0.22_0.04_50)] mb-8">
                  Hoe kunt u ons bereiken?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-[oklch(0.92_0.022_75)] flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-[oklch(0.62_0.09_50)]" />
                    </div>
                    <div>
                      <h3 className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)] mb-1">Locatie</h3>
                      <p className="font-body text-sm text-[oklch(0.52_0.04_50)] leading-relaxed">
                        Vlielandstraat 2, unit 243<br />
                        1506ZK Zaandam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-[oklch(0.92_0.022_75)] flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-[oklch(0.62_0.09_50)]" />
                    </div>
                    <div>
                      <h3 className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)] mb-1">Telefoon</h3>
                      <a
                        href="tel:0644439982"
                        className="font-body text-sm text-[oklch(0.52_0.04_50)] hover:text-[oklch(0.62_0.09_50)] transition-colors"
                      >
                        06 4443 9982
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-[oklch(0.92_0.022_75)] flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[oklch(0.62_0.09_50)]" />
                    </div>
                    <div>
                      <h3 className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)] mb-1">E-mail</h3>
                      <a
                        href="mailto:beauty.by.cen@gmail.com"
                        className="font-body text-sm text-[oklch(0.52_0.04_50)] hover:text-[oklch(0.62_0.09_50)] transition-colors"
                      >
                        beauty.by.cen@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-[oklch(0.92_0.022_75)] flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-[oklch(0.62_0.09_50)]" />
                    </div>
                    <div>
                      <h3 className="font-body font-600 text-sm text-[oklch(0.22_0.04_50)] mb-2">Openingstijden</h3>
                      <div className="space-y-1.5">
                        {[
                          { day: "Maandag – Vrijdag", hours: "09:00 – 18:00" },
                          { day: "Zaterdag", hours: "10:00 – 16:00" },
                          { day: "Zondag", hours: "Gesloten" },
                        ].map((schedule, i) => (
                          <div key={i} className="flex items-center justify-between max-w-xs">
                            <span className="font-body text-sm text-[oklch(0.52_0.04_50)]">{schedule.day}</span>
                            <span className={`font-body text-sm font-500 ${schedule.hours === "Gesloten" ? "text-[oklch(0.65_0.04_50)]" : "text-[oklch(0.22_0.04_50)]"}`}>
                              {schedule.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book CTA */}
                <div className="mt-10 p-6 bg-[oklch(0.22_0.04_50)] rounded-2xl">
                  <h3 className="font-display text-xl font-400 text-white mb-2">
                    Direct een afspraak maken?
                  </h3>
                  <p className="font-body text-sm text-white/65 mb-5">
                    Boek uw behandeling eenvoudig online via onze boekingssite.
                  </p>
                  <a
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3ZXpxwvB8QfAG-hZaafXgJb0HpAYOPSPyGHvbxHcpc2-UEFB95mXLmrso54Ow2W457FLTzBJxs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-600 text-sm tracking-wide bg-[oklch(0.62_0.09_50)] text-white hover:bg-[oklch(0.55_0.09_50)] transition-all duration-300"
                  >
                    Boek Nu <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Map placeholder + salon image */}
            <FadeUp delay={150}>
              <div className="space-y-6">
                {/* Salon image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/salon_interior-5CtnKZqzy57yHGZHBHXZ5c.webp"
                    alt="Beauty By Cen salon"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Map embed */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[oklch(0.88_0.02_75)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.4!2d4.8!3d52.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVlielandstraat%202%2C%201506ZK%20Zaandam!5e0!3m2!1snl!2snl!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beauty By Cen locatie"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
