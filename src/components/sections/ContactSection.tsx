import { ArrowUpRight, Check, Clock3, MapPin, MessageCircle } from "lucide-react";
import { BookingLink } from "@/components/shared/BookingLink";
import { salon, whatsappUrl } from "@/data/salon";

export function ContactSection() {
  return (
    <section id="contacto" className="contact-section section-anchor">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">03 — TU PRÓXIMA CITA</p>
          <h2>
            Hagamos espacio
            <br />
            para <em>ti.</em>
          </h2>
          <p className="contact-description">
            Escríbenos por WhatsApp para consultar tu servicio y acordar el
            día y la hora que mejor te funcionen.
          </p>
          <BookingLink />
          <p className="booking-footnote">
            <Check size={14} aria-hidden="true" /> La cita se confirma
            directamente por WhatsApp.
          </p>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <MapPin aria-hidden="true" size={23} strokeWidth={1.4} />
            <div>
              <span className="detail-label">ENCUÉNTRANOS</span>
              <h3>{salon.address}</h3>
              <p>Te compartimos la ubicación exacta al agendar.</p>
            </div>
          </div>
          <div className="contact-detail">
            <Clock3 aria-hidden="true" size={23} strokeWidth={1.4} />
            <div>
              <span className="detail-label">A TU TIEMPO</span>
              <h3>Atención solo con cita</h3>
              <p>Horario a convenir, sujeto a disponibilidad.</p>
            </div>
          </div>
          <div className="contact-detail">
            <MessageCircle aria-hidden="true" size={23} strokeWidth={1.4} />
            <div>
              <span className="detail-label">PLATIQUEMOS</span>
              <a
                className="phone-link"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {salon.phoneDisplay} <ArrowUpRight size={17} />
              </a>
              <p>Consultas y reservas por WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
