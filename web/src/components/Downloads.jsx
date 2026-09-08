import { downloads } from "../data.js";
import { TapeStrip } from "./doodles.jsx";

export default function Downloads() {
  return (
    <section className="page-section">
      <div className="section-head">
        <h2>Downloads</h2>
        <p className="section-sub">
          Windows builds are unsigned, so SmartScreen will yell at you. It's fine. Probably.
        </p>
      </div>

      <div className="dl-grid">
        {downloads.map((d) => (
          <div className="dl-sticker" key={d.name}>
            <TapeStrip className="dl-tape" />
            <img src={d.img} alt="" />
            <p className="dl-name">{d.name}</p>
            <p className="dl-meta">{d.meta}</p>
            <a className="btn btn-ghost dl-btn" href={d.href} download>
              Download
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
