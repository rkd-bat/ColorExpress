import { Clock3, Sparkles } from "lucide-react";

export function HeroArtwork() {
  return (
    <div
      className="hero-art"
      aria-label="Composición decorativa en tonos rosa"
    >
      <div className="art-frame">
        <span className="art-caption">COLOR EXPRESS / SALÓN</span>
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-orbit orbit-three" />
        <div className="art-letter">
          C<span>e</span>
        </div>
        <Sparkles
          className="art-sparkle"
          size={38}
          strokeWidth={1}
          aria-hidden="true"
        />
        <p className="art-quote">
          “Yo resalto la belleza
          <br />
          de mis clientes”
        </p>
        <span className="art-signature">Melinaky Contreras</span>
      </div>
      <div className="appointment-note">
        <span className="note-icon">
          <Clock3 size={20} />
        </span>
        <div>
          <strong>Un momento para ti</strong>
          <span>Atención personalizada, solo con cita</span>
        </div>
      </div>
    </div>
  );
}
