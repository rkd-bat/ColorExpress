export function Wordmark({ label }: { label?: string }) {
  return (
    <a href="#inicio" className="wordmark" aria-label={label}>
      <span>Color Express<span className="wordmark-dot">.</span></span>
      <small>SALÓN · BY MELINAKY CONTRERAS</small>
    </a>
  );
}
