import { Globe, Mail } from "lucide-react";
import { GithubIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2026 Rijan Koirala, Stupa Studio — built on caffeine, not sleep</span>
        <div className="footer-links">
          <a href="https://github.com/pogoPotato" target="_blank" rel="noopener" aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href="mailto:rijankoirala26@gmail.com" aria-label="Email">
            <Mail size={17} />
          </a>
          <a href="https://rijankoirala.com.np" target="_blank" rel="noopener" aria-label="Website">
            <Globe size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
