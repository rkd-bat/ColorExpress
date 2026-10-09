import { salon } from "@/data/salon";

export function Wordmark({ label, symbolOnly = false }: { label?: string; symbolOnly?: boolean }) {
  return (
    <a href="#inicio" className="wordmark" aria-label={label}>
      <img
        className={symbolOnly ? "brand-symbol" : "brand-logo"}
        src={symbolOnly ? "/branding/logo.png" : "/branding/logo-text.png"}
        alt={salon.name}
        width={symbolOnly ? 1254 : 1774}
        height={symbolOnly ? 1254 : 887}
      />
    </a>
  );
}
