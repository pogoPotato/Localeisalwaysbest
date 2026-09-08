import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "../data.js";
import { TapeStrip } from "./doodles.jsx";

const filters = [
  { id: "all", label: "All" },
  ...Object.entries(categories).map(([id, c]) => ({ id, label: c.label })),
];

const rotations = ["-1.4deg", "1deg", "-0.6deg", "1.6deg", "-1deg", "0.7deg"];

export default function Work({ setPage }) {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="page-section">
      <div className="section-head">
        <h2>Stuff I built</h2>
        <p className="section-sub">Some of it works great. All of it works, technically.</p>
      </div>

      <div className="segmented" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={"segmented-btn" + (filter === f.id ? " active" : "")}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="board">
        <AnimatePresence initial={false}>
          {visible.map((p, i) => (
            <motion.div
              key={p.name}
              className={"pin-card" + (p.size === "lg" ? " pin-card--lg" : "")}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.18 }}
              style={{
                "--row-color": categories[p.category].color,
                "--tilt": rotations[i % rotations.length],
              }}
            >
              <TapeStrip className="pin-tape" />
              <div className="pin-top">
                <span className="pin-swatch" />
                <h3>{p.name}</h3>
              </div>
              <p className="pin-status">{p.status}</p>
              <p className="pin-desc">{p.desc}</p>

              {p.tags.length > 0 && (
                <div className="pin-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}

              <div className="pin-link-row">
                {p.link?.page && (
                  <button className="pin-link" onClick={() => setPage(p.link.page)}>
                    {p.link.label}
                  </button>
                )}
                {p.link?.href && (
                  <a className="pin-link" href={p.link.href} target="_blank" rel="noopener">
                    {p.link.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
