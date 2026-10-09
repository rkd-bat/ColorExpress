import { ArrowUpRight } from "lucide-react";
import { services, whatsappUrl } from "@/data/salon";

type ServiceCardProps = {
  service: (typeof services)[number];
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <service.icon
          size={25}
          strokeWidth={1.3}
          aria-hidden="true"
        />
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <a
        href={whatsappUrl(service.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="service-link"
      >
        Cotizar por WhatsApp{" "}
        <ArrowUpRight size={18} aria-hidden="true" />
        <span className="sr-only">
          : {service.name}
        </span>
      </a>
    </article>
  );
}
