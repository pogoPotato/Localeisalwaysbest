import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WeedLeafMark } from "./doodles.jsx";

const pages = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "downloads", label: "Downloads" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);

  function go(id) {
    setPage(id);
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="nav-mark" onClick={() => go("home")} aria-label="Home">
          <WeedLeafMark size={26} className="nav-mark-icon" />
          <span>RizZ</span>
        </button>

        <nav className="nav-tabs nav-tabs-desktop" aria-label="Sections">
          {pages.map((p) => (
            <button
              key={p.id}
              className={"nav-tab" + (page === p.id ? " active" : "")}
              onClick={() => go(p.id)}
            >
              {p.label}
              {page === p.id && <motion.span layoutId="nav-underline" className="nav-underline" />}
            </button>
          ))}
        </nav>

        <button className="nav-menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="nav-tabs-mobile" aria-label="Sections">
          {pages.map((p) => (
            <button
              key={p.id}
              className={"nav-tab-mobile" + (page === p.id ? " active" : "")}
              onClick={() => go(p.id)}
            >
              {p.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
