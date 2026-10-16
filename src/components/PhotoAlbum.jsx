import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function PhotoAlbum({ photos }) {
  const [selected, setSelected] = useState(null)

  return (
    <section id="album" className="album-section">
      <div className="wrap">
        <SectionHeading eyebrow="Capítulo dos · Momentos nuestros" title="Un álbum lleno de nosotros">
          Hay fotos que guardan mucho más que una imagen. Toca cualquiera para verla más grande.
        </SectionHeading>
        <div className="album-grid">
          {photos.map((photo, index) => (
            <motion.button
              className={`polaroid polaroid-${index % 3}`}
              key={photo.caption}
              onClick={() => setSelected(photo)}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Ver foto: ${photo.caption}`}
            >
              <span className="pin" />
              <img src={photo.image} alt={photo.caption} loading="lazy" />
              <span className="polaroid-caption">{photo.caption}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="modal" role="dialog" aria-modal="true" aria-label={selected.caption}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}>
            <motion.div className="modal-card" initial={{ scale: .92, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96 }}
              onClick={(event) => event.stopPropagation()}>
              <button className="close-button" onClick={() => setSelected(null)} aria-label="Cerrar foto"><X /></button>
              <img src={selected.image} alt={selected.caption} />
              <p>{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}