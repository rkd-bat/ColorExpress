import { ImagePlus } from "lucide-react";
import type { gallery } from "@/data/salon";

type GalleryItemProps = {
  item: (typeof gallery)[number];
  index: number;
};

export function GalleryItem({ item, index }: GalleryItemProps) {
  return (
    <figure className={`gallery-item gallery-item-${index + 1}`}>
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          width={3024}
          height={4032}
          decoding="async"
        />
      ) : (
        <div className="gallery-placeholder">
          <ImagePlus size={28} strokeWidth={1} aria-hidden="true" />
          <span>Próximamente</span>
        </div>
      )}
      <figcaption>
        <span>{item.label}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  );
}
