import type { ReactNode } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
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
    <a
      href={whatsappUrl(service)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants(), "booking-button", className)}
    >
      <MessageCircle aria-hidden="true" size={18} />
      {children}
      <ArrowUpRight aria-hidden="true" size={17} />
    </a>
  );
}
