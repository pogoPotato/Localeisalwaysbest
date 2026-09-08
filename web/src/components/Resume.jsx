import { resume, stack, now } from "../data.js";
import { CoffeeDoodle, TapeStrip } from "./doodles.jsx";

export default function Resume({ setPage }) {
  return (
    <section className="page-section">
      <div className="section-head">
        <h2>Resume</h2>
        <p className="section-sub">The paper version. Grab the PDF if you need something official-looking.</p>
      </div>

      <div className="paper-note">
        <TapeStrip className="paper-tape paper-tape--left" style={{ transform: "rotate(-6deg)" }} />
        <TapeStrip className="paper-tape paper-tape--right" style={{ transform: "rotate(5deg)" }} />
        <CoffeeDoodle size={36} className="paper-stain" />

        <div className="resume-head">
          <h3>Rijan Koirala</h3>
          <p>Systems programmer and game engine developer. Founder of Stupa Studio.</p>
          <p className="resume-now">
            <span className="hud-dot" /> {now}
          </p>
        </div>

        <div className="resume-block">
          <h4>Education</h4>
          {resume.education.map((e) => (
            <div className="resume-item" key={e.title}>
              <span>{e.title}</span>
              <span className="resume-meta">{e.meta}</span>
            </div>
          ))}
        </div>

        <div className="resume-block">
          <h4>Skills</h4>
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
        </div>

        <div className="resume-block">
          <h4>Key work</h4>
          <ul className="resume-list">
            {resume.keyWork.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>

        <div className="resume-block">
          <h4>Contact</h4>
          <div className="resume-item">
            <span>Email</span>
            <span className="resume-meta">rijankoirala26@gmail.com</span>
          </div>
          <div className="resume-item">
            <span>GitHub</span>
            <span className="resume-meta">github.com/pogoPotato</span>
          </div>
        </div>

        <div className="resume-actions">
          <a className="btn btn-primary" href="/files/Rijan koirala - CV.pdf" download>
            Download full CV
          </a>
          <button className="btn btn-ghost" onClick={() => setPage("contact")}>
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}
