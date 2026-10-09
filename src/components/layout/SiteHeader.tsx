import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingLink } from "@/components/shared/BookingLink";
import { Wordmark } from "@/components/shared/Wordmark";
import { salon } from "@/data/salon";

const navigation = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Nuestro trabajo" },
  { href: "#contacto", label: "Visítanos" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Wordmark label={`${salon.name}, inicio`} symbolOnly />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <BookingLink className="header-booking">Reserva tu cita</BookingLink>
        <Button
          ref={menuButtonRef}
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? "mobile-nav" : undefined}
          onClick={() => setMenuOpen((open) => !open)}
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
          {navigation.map(({ href, label }) => (
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
