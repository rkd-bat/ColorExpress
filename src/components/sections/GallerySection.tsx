import { GalleryItem } from "@/components/sections/GalleryItem";
import { gallery } from "@/data/salon";

export function GallerySection() {
  return (
    <section id="galeria" className="gallery-section section-anchor">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 — NUESTRO TRABAJO</p>
            <h2>
              El detalle hace
              <br />
              <em>la diferencia.</em>
            </h2>
          </div>
          <p>
            Color, textura y estilo. Un espacio para compartir los looks
            creados en el salón.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <GalleryItem item={item} index={index} key={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
