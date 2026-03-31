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
                      <p className="font-body text-sm text-[oklch(0.62_0.09_50)] mt-1 font-500">
                        ✓ Gratis parkeren
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
                          { day: "Maandag", hours: "Gesloten" },
                          { day: "Dinsdag – Vrijdag", hours: "10:00 – 19:00" },
                          { day: "Zaterdag", hours: "10:00 – 14:00" },
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

      {/* Social Media sectie */}
      <section className="py-16 bg-white border-t border-[oklch(0.92_0.018_75)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeUp>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[oklch(0.62_0.09_50)] mb-3">
              Volg ons
            </p>
            <h2 className="font-display text-3xl font-300 text-[oklch(0.22_0.04_50)] mb-3">
              Wij zijn ook actief op sociale media!
            </h2>
            <p className="font-body text-sm text-[oklch(0.52_0.04_50)] mb-10 max-w-md mx-auto">
              Volg Beauty by Cen voor de laatste nieuwtjes, tips en inspiratie.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/31644439982"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[oklch(0.92_0.018_75)] bg-[oklch(0.97_0.015_75)] group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#25D366] group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="font-body text-xs text-[oklch(0.52_0.04_50)] group-hover:text-[oklch(0.22_0.04_50)] transition-colors">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/beauty.by.cen?igsh=MTFmbzgyZTR3bWthNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[oklch(0.92_0.018_75)] bg-[oklch(0.97_0.015_75)] group-hover:bg-gradient-to-br group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:border-transparent transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#E1306C] group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span className="font-body text-xs text-[oklch(0.52_0.04_50)] group-hover:text-[oklch(0.22_0.04_50)] transition-colors">Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/17KT8e6LN7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[oklch(0.92_0.018_75)] bg-[oklch(0.97_0.015_75)] group-hover:bg-[#1877F2] group-hover:border-[#1877F2] transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1877F2] group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-body text-xs text-[oklch(0.52_0.04_50)] group-hover:text-[oklch(0.22_0.04_50)] transition-colors">Facebook</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@beauty.by.cen?_r=1&_t=ZG-958t42ToZKy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[oklch(0.92_0.018_75)] bg-[oklch(0.97_0.015_75)] group-hover:bg-black group-hover:border-black transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-black group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <span className="font-body text-xs text-[oklch(0.52_0.04_50)] group-hover:text-[oklch(0.22_0.04_50)] transition-colors">TikTok</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@cindy-x6z?si=fdkwex_UIAH1ZU93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[oklch(0.92_0.018_75)] bg-[oklch(0.97_0.015_75)] group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#FF0000] group-hover:fill-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="font-body text-xs text-[oklch(0.52_0.04_50)] group-hover:text-[oklch(0.22_0.04_50)] transition-colors">YouTube</span>
              </a>

              {/* Snapchat */}
              <a
                href="https://www.snapchat.com/add/beautybycen?share_id=RuS-719g9Ks&locale=nl-NL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-[oklch(0.92_0.018_75)] bg-[oklch(0.97_0.015_75)] group-hover:bg-[#FFFC00] group-hover:border-[#FFFC00] transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#FFFC00] group-hover:fill-black transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" style={{filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.3))'}}>
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.814l-.004.08c-.012.322-.029.64-.047.956.03.021.07.045.127.07.207.09.51.164.938.164.394 0 .738-.065.98-.122.16-.038.295-.069.41-.069.34 0 .66.168.66.527 0 .37-.318.572-.662.727-.055.025-.108.05-.16.077-.35.177-.697.35-.697.698 0 .07.014.14.04.208.1.261.383.514.626.766.162.169.317.33.43.492.41.572.62 1.23.62 1.97 0 .93-.28 1.82-.84 2.64-.56.82-1.34 1.46-2.35 1.91-1.01.45-2.18.67-3.52.67-.19 0-.38-.01-.57-.02-.19-.01-.38-.02-.57-.02-.19 0-.38.01-.57.02-.19.01-.38.02-.57.02-1.34 0-2.51-.22-3.52-.67-1.01-.45-1.79-1.09-2.35-1.91-.56-.82-.84-1.71-.84-2.64 0-.74.21-1.4.62-1.97.113-.162.268-.323.43-.492.243-.252.526-.505.626-.766.026-.068.04-.138.04-.208 0-.348-.347-.521-.697-.698-.052-.027-.105-.052-.16-.077-.344-.155-.662-.357-.662-.727 0-.359.32-.527.66-.527.115 0 .25.031.41.069.242.057.586.122.98.122.428 0 .731-.074.938-.164.057-.025.097-.049.127-.07l-.004-.08c-.086-1.595-.212-3.621.317-4.814C7.859 1.069 11.216.793 12.206.793z"/>
                  </svg>
                </div>
                <span className="font-body text-xs text-[oklch(0.52_0.04_50)] group-hover:text-[oklch(0.22_0.04_50)] transition-colors">Snapchat</span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
