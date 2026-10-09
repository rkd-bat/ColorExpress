import { GalleryItem } from "@/components/sections/GalleryItem";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { gallery, salon } from "@/data/salon";

export function GallerySection() {
  return (
    <section id="galeria" className="gallery-section section-anchor">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — NUESTRO TRABAJO</p>
            <h2>
              El detalle hace
              <br />
              <em>la diferencia.</em>
            </h2>
          </div>
          <p>
            Color, textura y estilo. Un espacio para compartir los looks creados
            en el salón.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <GalleryItem item={item} index={index} key={item.label} />
          ))}
        </div>
        <div className="gallery-facebook">
          <p>Encuentra más fotos de nuestros trabajos en Facebook.</p>
          <a
            href={salon.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "booking-button")}
          >
            Ver más trabajos en Facebook
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
