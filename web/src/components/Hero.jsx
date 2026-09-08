import { motion } from "framer-motion";
import { now, stack, tagline } from "../data.js";
import { BoltDoodle, CigaretteDoodle, CoffeeDoodle, SkullDoodle, SquiggleDoodle, TapeStrip } from "./doodles.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero({ setPage }) {
  return (
    <section className="hero">
      <motion.div className="hero-stage" variants={container} initial="hidden" animate="show">
        <motion.div className="sticky-note sticky-note--coffee" variants={item}>
          <TapeStrip style={{ transform: "rotate(-8deg)" }} />
          <CoffeeDoodle size={40} />
          <p>cup #6 today</p>
        </motion.div>

        <motion.div className="sticky-note sticky-note--cig" variants={item}>
          <TapeStrip style={{ transform: "rotate(6deg)" }} />
          <CigaretteDoodle size={40} />
          <p>totally fine</p>
        </motion.div>

        <motion.div className="sticky-note sticky-note--skull" variants={item}>
          <TapeStrip style={{ transform: "rotate(-4deg)" }} />
          <SkullDoodle size={40} />
          <p>no tests, no fear</p>
        </motion.div>

        <motion.h1 className="hero-name" variants={item}>
          Rijan
          <br />
          Koirala
        </motion.h1>

        <motion.p className="hero-scribble" variants={item}>
          {tagline}
          <BoltDoodle size={30} className="hero-bolt" />
        </motion.p>

        <motion.div className="hero-status" variants={item}>
          <span className="hud-dot" />
          {now}
        </motion.div>

        <motion.div className="hero-ctas" variants={item}>
          <button className="btn btn-primary" onClick={() => setPage("work")}>
            See what I've broken
          </button>
          <button className="btn btn-ghost" onClick={() => setPage("contact")}>
            Say hi
          </button>
          <a className="btn btn-ghost" href="/files/Rijan koirala - CV.pdf" download>
            Download CV
          </a>
        </motion.div>

        <motion.div className="hero-underline" variants={item}>
          <SquiggleDoodle width={220} height={18} />
        </motion.div>

        <motion.div className="index-card" variants={item}>
          <TapeStrip style={{ transform: "rotate(-3deg)" }} />
          <h4>what's in the tank</h4>
          {Object.entries(stack).map(([group, items]) => (
            <div className="spec-row" key={group}>
              <span className="spec-label">{group}</span>
              <div className="spec-values">
                {items.map((v) => (
                  <span className="spec-tag" key={v}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
