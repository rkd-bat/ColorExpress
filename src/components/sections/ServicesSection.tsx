import { ServicesAccordion } from "@/components/sections/ServicesAccordion";

export function ServicesSection() {
  return (
    <section id="servicios" className="services-section section-anchor">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 — NUESTROS SERVICIOS</p>
            <h2>
              Un look que habla <em>de ti.</em>
            </h2>
          </div>
          <p>
            Desde un cambio de color hasta ese peinado especial. Cuéntanos
            qué tienes en mente y encontramos el servicio para ti.
          </p>
        </div>
        <p className="pricing-note">
          El precio varía según el servicio y el largo de tu cabello. Escríbenos
          para recibir una cotización personalizada.
        </p>
        <ServicesAccordion />
      </div>
    </section>
  );
}
