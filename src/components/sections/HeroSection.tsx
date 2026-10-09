import { ArrowDown } from "lucide-react";
import { BookingLink } from "@/components/shared/BookingLink";
import { HeroArtwork } from "@/components/sections/HeroArtwork";

export function HeroSection() {
  return (
    <section id="inicio" className="hero section-anchor">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> TU ESENCIA, TU ESTILO
          </p>
          <h1>
            Tu belleza,
            <br />
            en su mejor
            <br />
            <em>expresión.</em>
          </h1>
          <p className="hero-description">
            Color, peinados y maquillaje para verte como te gusta y sentirte
            tú. Un espacio dedicado a resaltar tu belleza.
          </p>
          <BookingLink />
          <a href="#galeria" className="explore-link">
            Encuentra tu próximo look{" "}
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
        <HeroArtwork />
      </div>
      <div className="hero-bottom container">
        <span>CABELLO & MAQUILLAJE</span>
        <span>Hecho con cuidado. Pensado para ti.</span>
        <span>01 / BIENVENIDA</span>
      </div>
    </section>
  );
}
