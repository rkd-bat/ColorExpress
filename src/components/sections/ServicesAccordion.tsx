import { Accordion } from "@base-ui/react/accordion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { serviceCategories, services, whatsappUrl } from "@/data/salon";

export function ServicesAccordion() {
  return (
    <div className="services-catalog">
      <p className="services-catalog-hint">Elige una categoría para ver sus servicios.</p>
      <Accordion.Root defaultValue={["color"]} className="services-accordion">
        {serviceCategories.map((category) => {
          const categoryServices = services.filter(
            (service) => service.category === category.id,
          );

          return (
            <Accordion.Item
              key={category.id}
              value={category.id}
              className="service-group"
            >
              <Accordion.Header>
                <Accordion.Trigger className="service-group-trigger">
                  <category.icon size={20} strokeWidth={1.4} aria-hidden="true" />
                  <span className="service-group-title">{category.name}</span>
                  <span className="service-group-count">
                    {categoryServices.length}
                    <span className="sr-only"> servicios</span>
                  </span>
                  <ChevronDown size={18} className="service-group-chevron" aria-hidden="true" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>
                <ul className="service-rows">
                  {categoryServices.map((service) => (
                    <li className="service-row" key={service.name}>
                      <div className="service-row-copy">
                        <span className="service-row-name">{service.name}</span>
                        <p className="service-row-description">{service.description}</p>
                      </div>
                      <a
                        className="service-quote"
                        href={whatsappUrl(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Cotiza ${service.name} por WhatsApp`}
                      >
                        Cotiza <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
      <a
        className="services-catalog-help"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <strong>¿Un cambio en mente?</strong>
          <span>Cuéntanos tu idea por WhatsApp.</span>
        </span>
        <ArrowUpRight size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
