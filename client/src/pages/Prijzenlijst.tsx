/**
 * Prijzenlijst Page — Beauty By Cen
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




const priceCategories = [
  {
    category: "Gezichtsbehandelingen",
    items: [
      { name: "Normal/Basis", duration: "", price: "€50" },
      { name: "* Met mask", duration: "", price: "+ €10" },
      { name: "* Yelly mask", duration: "", price: "+ €12,50" },
      { name: "* Peeloff mask", duration: "", price: "+ €15" },
      { name: "* Met 1 serum naar behoeften v/d huid", duration: "", price: "+ €30" },
      { name: "Een peeling met glow", duration: "", price: "+ €30" },
      { name: "* Met ledigen", duration: "", price: "+ €35" },
    ],
  },
  {
    category: "Acne behandeling",
    items: [
      { name: "Acne behandeling", duration: "", price: "€150" },
      { name: "* Studenten korting", duration: "", price: "€100" },
    ],
  },
  {
    category: "Hydrodermabrasie",
    items: [
      { name: "Silver", duration: "", price: "€120" },
      { name: "Gold", duration: "", price: "€133" },
      { name: "Platinum", duration: "", price: "€145" },
    ],
  },
  {
    category: "Skin active",
    items: [
      { name: "60 min", duration: "", price: "€99,95" },
      { name: "75 min", duration: "", price: "€125" },
      { name: "90 min met masker", duration: "", price: "€145" },
      { name: "90 min met masker + serums", duration: "", price: "€165" },
    ],
  },
  {
