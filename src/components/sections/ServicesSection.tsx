import { ArrowUpRight, Sparkles } from "lucide-react";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { services, whatsappUrl } from "@/data/salon";

export function ServicesSection() {
  return (
    <section id="servicios" className="services-section section-anchor">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — NUESTROS SERVICIOS</p>
            <h2>
              Un look que habla <em>de ti.</em>
            </h2>
          </div>
          <p>
            Desde un cambio de color hasta ese peinado especial. Cuéntanos
            qué tienes en mente y encontramos el servicio para ti.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.name} />
          ))}
          <article className="service-card service-help">
            <Sparkles size={28} strokeWidth={1.2} aria-hidden="true" />
            <h3>
              ¿Un cambio
              <br />
              en mente?
            </h3>
            <p>
              Platícanos tu idea. Te ayudamos a elegir y cotizar tu próximo
              look.
            </p>
            <a
              className="service-link"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
