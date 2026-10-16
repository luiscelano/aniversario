import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Countdown from "./components/Countdown.jsx";
import Timeline from "./components/Timeline.jsx";
import PhotoAlbum from "./components/PhotoAlbum.jsx";
import Letters from "./components/Letters.jsx";
import Surprise from "./components/Surprise.jsx";
import Future from "./components/Future.jsx";
import {
  relationshipStart,
  timeline,
  photos,
  letters,
  futureDreams,
} from "./data/content.js";

const startDate = new Date(relationshipStart);
const displayDate = new Intl.DateTimeFormat("es-GT", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}).format(startDate);

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero wrap" id="inicio">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyebrow">Un álbum hecho para ti ✿</div>
            <h1>
              Nuestra historia
              <br />
              apenas comienza
            </h1>
            <p>
              Si pudiera volver a vivir todos mis días favoritos, elegiría cada
              uno de los que he compartido contigo.
            </p>
            <div className="date">
              <Heart size={14} fill="currentColor" /> Desde el {displayDate}
            </div>
            <Countdown startDate={startDate} />
            <a className="btn" href="#historia">
              Comenzar nuestra historia <ArrowDown size={16} />
            </a>
          </motion.div>
          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, rotate: 7, scale: 0.96 }}
            animate={{ opacity: 1, rotate: 2, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="tape" />
            <img
              src="/assets/photos/IMG_2129.jpeg"
              alt="Pareja abrazándose al atardecer"
            />
            <span className="photo-caption">mi persona favorita ♡</span>
            <span className="floating-heart">♥</span>
          </motion.div>
        </section>
        <Timeline events={timeline} />
        <PhotoAlbum photos={photos} />
        <Letters letters={letters} />
        <Surprise />
        <Future dreams={futureDreams} />
      </main>
      <footer>Hecho con amor, para mi persona favorita. ♡</footer>
    </>
  );
}
