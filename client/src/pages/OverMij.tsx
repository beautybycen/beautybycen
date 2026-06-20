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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy-products-portrait_1752ead5.jpg"
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
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493256087/GLMc3BPPhJYdeh8cghuPE5/cindy-products-portrait_1752ead5.jpg"
                    alt="Cindy Nimmermeer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeUp>


            {/* Text */}
            <FadeUp delay={150}>
              <div className="sticky top-28">
