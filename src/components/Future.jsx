import { Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Future({ dreams }) {
  return (
    <section id="futuro">
      <div className="wrap">
        <SectionHeading
          eyebrow="Capítulo cinco · Lo que viene"
          title="La historia continúa..."
        >
          Ya tenemos recuerdos preciosos. Y todavía nos queda muchísimo por
          vivir.
        </SectionHeading>
        <div className="final-grid">
          <img
            src="/assets/photos/IMG_0128.jpeg"
            alt="Pareja abrazada al atardecer"
            loading="lazy"
          />
          <div>
            <div className="eyebrow">Nuestra lista de sueños</div>
            <h3 className="future-title">Todavía nos falta...</h3>
            <ul className="future-list">
              {dreams.map((dream) => (
                <li key={dream}>
                  <Heart size={16} />
                  {dream}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
