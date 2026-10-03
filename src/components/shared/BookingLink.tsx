import type { ReactNode } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/data/salon";

export function BookingLink({
  children = "Agendar por WhatsApp",
  service,
  className = "",
}: {
  children?: ReactNode;
  service?: string;
  className?: string;
}) {
  return (
    <Button
      render={
        <a
          href={whatsappUrl(service)}
          target="_blank"
          rel="noopener noreferrer"
        />
      }
      nativeButton={false}
      className={`booking-button ${className}`}
    >
      <MessageCircle aria-hidden="true" size={18} />
      {children}
      <ArrowUpRight aria-hidden="true" size={17} />
    </Button>
  );
}
