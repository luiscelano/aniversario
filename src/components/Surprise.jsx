import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Surprise() {
  const [revealed, setRevealed] = useState(false);
  return (
    <section id="sorpresa" className="surprise-section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Capítulo cuatro · Solo para ti"
          title="Una última cosita..."
        >
          Porque una historia bonita siempre merece una sorpresa.
        </SectionHeading>
        <motion.div
          className="surprise-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart className="surprise-heart" size={38} fill="currentColor" />
          <h3>Gracias por ser mi lugar favorito</h3>
          <p>
            Gracias por cada abrazo, cada risa y cada momento compartido. Si
            volviera al principio, con todo lo que sé hoy, volvería a elegirte.
          </p>
          <button
            className="btn"
            onClick={() => setRevealed(true)}
            disabled={revealed}
          >
            {revealed ? "Con todo mi amor ♡" : "Tengo algo más que decirte"}
          </button>
          <AnimatePresence>
            {revealed && (
              <motion.p
                className="extra-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Te amo mucho mi amor. Espero que esta sorpresa te haya gustado
                mucho, la prepare con muchisimo cariño para ti, es para
                recordarte lo mucho que te amo y lo afortunado que soy de
                tenerte a mi lado, he aprendido muchas cosas gracias a ti, como
                a superarme cada día, eres mi motivación de todos los dias al
                igual que mi inspiración, eres la persona mas inteligente que
                conozco porque haces muchas cosas que yo no me atrevería a
                hacer, cosas tan simples como preguntar por algo jaja, irme a
                otro pais completamente solo, ser una excelente estudiante y una
                persona disciplinada, ojala pudiera tener esas cualidades que tu
                tienes y por eso soy tu fan, te amo muchisimo, Feliz
                aniversario. ♡
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
