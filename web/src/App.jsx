import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Ticker from "./components/Ticker.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Downloads from "./components/Downloads.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ToastView from "./components/Toast.jsx";

export default function App() {
  const [page, setPage] = useState("home");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = useCallback((message, isError = false) => {
    clearTimeout(toastTimer.current);
    setToast({ message, isError });
    toastTimer.current = setTimeout(() => setToast(null), 4000);
  }, []);

  function changePage(id) {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">
      <Nav page={page} setPage={changePage} />
      <Ticker />

      <main className="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {page === "home" && <Hero setPage={changePage} />}
            {page === "work" && <Work setPage={changePage} />}
            {page === "downloads" && <Downloads />}
            {page === "resume" && <Resume setPage={changePage} />}
            {page === "contact" && <Contact toast={showToast} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ToastView toast={toast} />
    </div>
  );
}
