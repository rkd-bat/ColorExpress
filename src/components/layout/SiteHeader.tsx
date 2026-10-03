import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingLink } from "@/components/shared/BookingLink";
import { Wordmark } from "@/components/shared/Wordmark";
import { salon } from "@/data/salon";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Wordmark label={`${salon.name}, inicio`} />
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Nuestro trabajo</a>
          <a href="#contacto">Visítanos</a>
        </nav>
        <BookingLink className="header-booking">Reserva tu cita</BookingLink>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          {[
            ["#servicios", "Servicios"],
            ["#galeria", "Nuestro trabajo"],
            ["#contacto", "Visítanos"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <BookingLink />
        </nav>
      )}
    </header>
  );
}
