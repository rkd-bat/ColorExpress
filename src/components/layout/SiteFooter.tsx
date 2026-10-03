import { Wordmark } from "@/components/shared/Wordmark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Wordmark />
        <p>Cabello y maquillaje para mujeres.</p>
        <span>© {new Date().getFullYear()} Color Express Salón</span>
      </div>
    </footer>
  );
}
