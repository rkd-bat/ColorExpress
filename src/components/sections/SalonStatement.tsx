import { Sparkles } from "lucide-react";

export function SalonStatement() {
  return (
    <section className="salon-statement">
      <div className="container statement-inner">
        <Sparkles size={30} strokeWidth={1} aria-hidden="true" />
        <p>
          Más que un look,
          <br />
          <em>un momento para sentirte bien.</em>
        </p>
        <span>COLOR EXPRESS SALÓN · BY MELINAKY CONTRERAS</span>
      </div>
    </section>
  );
}
