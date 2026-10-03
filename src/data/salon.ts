import { Droplets, Paintbrush, Sparkles, Waves, WandSparkles } from "lucide-react";

export const salon = {
  name: "Color Express Salón By Melinaky Contreras",
  address: "Av. Balcones del norte #251",
  phoneDisplay: "+52 1 81 1742 9636",
  whatsappNumber: "5218117429636",
};

export function whatsappUrl(service?: string) {
  const message = service
    ? `Hola, me gustaría consultar el servicio de ${service} y agendar una cita en Color Express Salón.`
    : "Hola, me gustaría agendar una cita en Color Express Salón. ¿Me pueden compartir disponibilidad?";
  return `https://wa.me/${salon.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const services = [
  { name: "Balayage", description: "Un efecto de color con luz y dimensión, adaptado a tu estilo.", icon: Paintbrush },
  { name: "Mechas", description: "Toques de luz para darle una nueva expresión a tu cabello.", icon: Sparkles },
  { name: "Botox capilar", description: "Un tratamiento de cuidado para mejorar la apariencia y suavidad del cabello.", icon: Droplets },
  { name: "Peinados", description: "Ondas, recogidos y estilos para acompañarte en tus ocasiones especiales.", icon: Waves },
  { name: "Maquillaje", description: "Un look que resalta tus facciones y acompaña el momento que vas a vivir.", icon: WandSparkles },
];

// Coloca tus fotos en public/images/ y asigna su ruta a src, por ejemplo:
// src: "/images/balayage.jpg". Actualiza alt para describir cada foto real.
export const gallery: { label: string; src: string; alt: string }[] = [
  { label: "Balayage", src: "", alt: "" },
  { label: "Peinados", src: "", alt: "" },
  { label: "Maquillaje", src: "", alt: "" },
  { label: "Mechas", src: "", alt: "" },
];
