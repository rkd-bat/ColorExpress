import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { SalonStatement } from "@/components/sections/SalonStatement";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";

export const App = () => (
  <>
    <a className="skip-link" href="#contenido">
      Saltar al contenido
    </a>
    <SiteHeader />
    <main id="contenido">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <SalonStatement />
      <ContactSection />
    </main>
    <SiteFooter />
    <FloatingWhatsApp />
  </>
);
