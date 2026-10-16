import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function Timeline({ events }) {
  return (
    <section id="historia">
      <div className="wrap">
        <SectionHeading eyebrow="Capítulo uno · Los comienzos" title="Y entonces, llegaste tú">
          Hay fechas que se quedan guardadas en el corazón. Estos son algunos capítulos de nuestra historia.
        </SectionHeading>
        <div className="timeline">
          {events.map((event, index) => (
            <motion.article
              className="event"
              key={`${event.date}-${event.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="dot" />
              <div className="event-photo">
                <img src={event.image} alt={event.caption} loading="lazy" />
                <small>{event.caption}</small>
              </div>
              <div className="event-text">
                <div className="date">{event.date}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}