import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function Letters({ letters }) {
  const [opened, setOpened] = useState([])
  const toggle = (index) => setOpened((current) => current.includes(index)
    ? current.filter((item) => item !== index)
    : [...current, index])

  return (
    <section id="cartas">
      <div className="wrap">
        <SectionHeading eyebrow="Capítulo tres · Unas palabras" title="Cartas para ti">
          Pequeñas cosas que quiero recordarte. Abre cada sobre para descubrir su mensaje.
        </SectionHeading>
        <div className="letters">
          {letters.map((letter, index) => {
            const isOpen = opened.includes(index)
            return (
              <motion.button className={`letter ${isOpen ? 'open' : ''}`} key={letter.title}
                onClick={() => toggle(index)} whileHover={{ y: -5 }} aria-expanded={isOpen}>
                <span className="letter-icon">{letter.icon}</span>
                {isOpen
                  ? <span className="reveal">{letter.message}</span>
                  : <><span className="letter-title">{letter.title}</span><span className="teaser">{letter.teaser}</span></>}
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}