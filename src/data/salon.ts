import {
  Droplets,
  Paintbrush,
  Scissors,
  Sparkles,
  Waves,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

export const salon = {
  name: "Color Express Salón By Melinaky Contreras",
  address: "Av. Balcones del norte #251",
  phoneDisplay: "+52 1 81 1742 9636",
  whatsappNumber: "5218117429636",
  facebookUrl: "https://www.facebook.com/share/19ZviGiYft/?mibextid=wwXIfr",
};

export function whatsappUrl(service?: string) {
  const message = service
    ? `Hola, me gustaría cotizar el servicio de ${service}. ¿Qué información o fotografías necesitan para darme un precio?`
    : "Hola, me gustaría agendar una cita en Color Express Salón. ¿Me pueden compartir disponibilidad?";
  return `https://wa.me/${salon.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const serviceCategories = [
  { id: "color", name: "Color", icon: Paintbrush },
  { id: "styling", name: "Peinado y maquillaje", icon: WandSparkles },
  { id: "care", name: "Cuidado capilar", icon: Droplets },
  { id: "cuts", name: "Cortes y depilación", icon: Scissors },
] as const;

type ServiceCategory = (typeof serviceCategories)[number]["id"];

export const services = [
  {
    name: "Diseño de Color",
    category: "color",
    description:
      "Una propuesta de tonos y efectos de color personalizada para tu cabello y estilo.",
    icon: Paintbrush,
  },
  {
    name: "Balayage",
    category: "color",
    description:
      "Un efecto de color con luz y dimensión, adaptado a tu estilo.",
    icon: Paintbrush,
  },
  {
    name: "Babylights",
    category: "color",
    description:
      "Mechas finas y delicadas para aportar luz al cabello con un efecto sutil y natural.",
    icon: Sparkles,
  },
  {
    name: "Tintes",
    category: "color",
    description:
      "Renueva el color de tu cabello con un tono que acompañe tu estilo.",
    icon: Paintbrush,
  },
  {
    name: "Luces",
    category: "color",
    description:
      "Ilumina tu cabello con detalles de color y un acabado lleno de dimensión.",
    icon: Sparkles,
  },
  {
    name: "Mechas",
    category: "color",
    description: "Toques de luz para darle una nueva expresión a tu cabello.",
    icon: Sparkles,
  },
  {
    name: "Peinado y Maquillaje Social",
    category: "styling",
    description:
      "Peinado y maquillaje para resaltar tu belleza en tus eventos y ocasiones especiales.",
    icon: WandSparkles,
  },
  {
    name: "Planchados",
    category: "styling",
    description: "Un acabado liso y cuidado para complementar tu look.",
    icon: Waves,
  },
  {
    name: "Curlys",
    category: "styling",
    description:
      "Rizos y ondas con movimiento para darle un toque especial a tu peinado.",
    icon: Waves,
  },
  {
    name: "Depilaciones",
    category: "cuts",
    description:
      "Consulta las zonas disponibles y elige la opción de depilación para ti.",
    icon: Sparkles,
  },
  {
    name: "Cortes Dama",
    category: "cuts",
    description: "Dale forma a tu cabello con un corte pensado para tu estilo.",
    icon: Scissors,
  },
  {
    name: "Tratamientos Capilares",
    category: "care",
    description:
      "Opciones de cuidado según las necesidades de tu cabello. Consulta cuál es la indicada para ti.",
    icon: Droplets,
  },
  {
    name: "Botox capilar",
    category: "care",
    description:
      "Un tratamiento de cuidado para mejorar la apariencia y suavidad del cabello.",
    icon: Droplets,
  },
] satisfies {
  name: string;
  category: ServiceCategory;
  description: string;
  icon: LucideIcon;
}[];

export const gallery: { label: string; src: string; alt: string }[] = [
  {
    label: "Balayage",
    src: "/images/balayage.jpeg",
    alt: "Cabello largo con base castaña, reflejos rubios ceniza y ondas suaves en las puntas, visto de perfil.",
  },
  {
    label: "Tintes",
    src: "/images/tinte.jpeg",
    alt: "Cabello largo y lacio teñido en tono borgoña, visto de perfil.",
  },
  {
    label: "Babylights",
    src: "/images/babyligths.jpeg",
    alt: "Cabello largo y lacio de base castaña oscura con mechas finas rubias, visto desde atrás.",
  },
  {
    label: "Mechas",
    src: "/images/mechas.jpeg",
    alt: "Cabello largo y lacio en tonos castaños con reflejos rubios dorados, visto de perfil.",
  },
];
