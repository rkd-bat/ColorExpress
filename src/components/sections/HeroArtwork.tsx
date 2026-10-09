import { Clock3 } from "lucide-react";
import { salon } from "@/data/salon";

export function HeroArtwork() {
  return (
    <div className="hero-brand-panel">
      <div className="hero-brand-card">
        <span className="hero-brand-caption">CABELLO & MAQUILLAJE</span>
        <img
          className="hero-brand-logo"
          src="/branding/logo-text.png"
          alt={salon.name}
          width={1774}
          height={887}
        />
        <div className="hero-brand-divider" aria-hidden="true" />
        <blockquote className="hero-brand-quote">
          “Yo resalto la belleza
          <br />
          de mis clientes”
        </blockquote>
        <p className="hero-brand-signature">Melinaky Contreras</p>
      </div>
      <div className="hero-appointment-note">
        <span className="note-icon">
          <Clock3 size={20} aria-hidden="true" />
        </span>
        <div>
          <strong>Un momento para ti</strong>
          <span>Atención personalizada, solo con cita</span>
        </div>
      </div>
    </div>
  );
}
