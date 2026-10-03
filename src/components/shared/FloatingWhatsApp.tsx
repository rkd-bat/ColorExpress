import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/salon";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar una cita por WhatsApp"
    >
      <MessageCircle size={25} aria-hidden="true" />
    </a>
  );
}
